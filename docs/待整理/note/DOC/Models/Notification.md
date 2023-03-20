# Notification

## window

> MessageNotify

```js
// TODO 浏览器消息通知
import { isMobile, isFirefox } from '@/utils/index.js'
import uiControl from '@/store/modules/uiControl'
import Bus from '@/utils/vueBus.js'
import store from '@/store/index'
// import { getSpaceId } from '@/utils/SpaceManager'
import { defaultSpaceId } from '@/dataController/hid'
import { ipcRenderer } from 'electron'
let imageUrl = require('@/assets/logo.png')
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate

class MessageNotify {
  constructor() {
    // 检测是否支持 消息通知
    this.notificationsMsSiteMode = window.external && window.external.msIsSiteMode && window.external.msIsSiteMode()
    this.notificationsUiSupport = this.notificationsMsSiteMode || 'Notification' in window || 'mozNotification' in navigator
    this.vibrateSupport = !!(navigator.vibrate || navigator.mozVibrate || navigator.webkitVibrate)

    this.lastTime = Number(new Date())
    // 节流时间
    this.timeSlot = 18 * 1000
    this.firstFlag = true
    this.requestPermission()
  }

  // 触发通知 功能函数
  notify(data) {
    let notification
    if (!this.notificationsUiSupport || ('Notification' in window && Notification.permission !== 'granted')) return
    // 连续接消息间隔时间小于18秒不提示通知
    if (this.firstFlag) {
      this.firstFlag = false
    } else {
      if (data.curTime - this.lastTime < this.timeSlot) return
      this.lastTime = data.curTime
    }
    if (!data.image) data.image = imageUrl
    // 移动端 开启震动模式
    if (isMobile && this.vibrateSupport) {
      navigator.vibrate([1000, 500, 100])
      return
    }
    if ('Notification' in window) {
      try {
        notification = new Notification(data.title, {
          icon: data.image || '',
          body: data.message || '',
          silent: data.silent || false
        })
      } catch (e) {
        this.notificationsUiSupport = false
        return
      }
    } else if ('mozNotification' in navigator) {
      notification = navigator.moz.createNotification(
        data.title,
        data.message || '',
        data.image || ''
      )
    } else if (this.notificationsMsSiteMode) {
      window.external.msSiteModeClearIconOverlay()
      window.external.msSiteModeSetIconOverlay(imageUrl, data.title)
      window.external.msSiteModeActivate()
    } else {
      return
    }
    notification.onclick = () => {
      Bus.$emit('notify')
      ipcRenderer.send('Notification-Click', 'notify')
      // window.focus()解决了点击通知消息跳转到相对应的消息页面
      window.focus()
      notification.close()
      this.notificationsClear()
      if (data.peerId) {
        if (data.spaceId == defaultSpaceId()) {
          store.dispatch('uiControl/switchOne', {
            hid: data.peerId,
            spaceId: data.spaceId
          })
        }
        if (window.__notices__) window.__notices__()
        if (window.__hiddenAllForChat) window.__hiddenAllForChat()
      }
    }
    notification.onclose = data => {}
    // 火狐哟有默认通知声音
    if (!isFirefox) {
      // 播放音乐
      let ele = uiControl.state.audioDom
      ele && ele.play()
    }
  }

  // 点击系统通知跳转到当前tab
  notificationsClear() {
    if (this.notificationsMsSiteMode) window.external.msSiteModeClearIconOverlay()
  }

  // 授权用户开启通知权限Notification
  requestPermission() {
    const Notification = window.Notification || window.webkitNotification || window.mozNotification
    // if (
    //   this.notificationsUiSupport &&
    //   Notification.permission !== 'granted' &&
    //   Notification.permission !== 'denied'
    // )
    {
      Notification.requestPermission && Notification.requestPermission()
    }
  }
}

const messageNotify = new MessageNotify()

export { messageNotify }
```

> 使用

```js
import { messageNotify } from "@/utils/notification"

messageNotify.notify()
```

## 主进程

```js
import { Notification } from 'electron'
import cacheImg from '@/main/plugins/cacheImg'

class MessageNotify {
  static isSupported() {
    return Notification.isSupported()
  }

  static init(option) {
    let NotifyObj = new MessageNotify(option)
  }

  init(option) {
    const { name, messages, icon, subtitle, subNum } = option
    this.notification = new Notification({
      title: name,
      body: this.notifyStringSub(messages, subNum),
      subtitle: subtitle || '',
      icon,
      silent: false
    })
    this.notification.show()
    return this.notification
  }

  notifyStringSub(str, len) {
    if (str.length * 2 <= len) return str
    let strlen = 0
    let sub = ''
    for (let i = 0; i < str.length; i++) {
      sub = sub + str.charAt(i)
      let charFalse = !(str.charCodeAt(i) > 128)
      strlen = strlen + (charFalse ? 1 : 2)
      if (strlen >= len) return sub.substring(0, sub.length - (charFalse ? 2 : 1)) + '...'
    }
    return sub
  }

  on(name, fn) {
    this.notification.on(name, fn)
  }

  /**
   * @通知
   * option: { name, messages, icon }
   */
  onNotification() {
    // logger.debug('ipc', 'ipcNotification isSupported:', Notification.isSupported() ? '支持' : '不支持')
    this.cacheImgIcon = new cacheImg()
    ipcMain.on('ipcNotification', (event, option) => {
      if (!this.appManager.store.get('isMsgInfo')) {
        // logger.debug('ipc', 'Notification', option.icon)
        if (this.cacheImgIcon.PathNames.indexOf('.') !== -1) this.doneCacheImg(event, option)
        else {
          option.icon = `${__static}/516x516.png`
          this.Notifi(event, option)
        }
      }
    })
  }

  async doneCacheImg(event, option) {
    const iconUrl = option.icon
    const isIconDone = await this.cacheImgIcon.exists(iconUrl)
    option.icon = this.cacheImgIcon.PathNames
    if (!isIconDone) {
      this.cacheImgIcon.init(iconUrl).then(() => {
        // logger.debug('ipc', 'cacheImg end', 'File succesfully downloaded')
        this.Notifi(event, option)
      }).catch((error) => {
        // logger.debug('ipc', 'cacheImg request error', error)
        option.icon = `${__static}/516x516.png`
        this.Notifi(event, option)
      })
    } else {
      this.Notifi(event, option)
    }
    // logger.debug('ipc', 'cacheImg Path:', isIconDone ? '缓存' : '新建')
  }
}
```

```js
import logger from '@/main/plugins/logger.js'
import Pkg from '@/../package.json'
import { app } from 'electron'
const fs = require('fs')
const fsE = require('fs-extra')
const request = require('request')
const path = require('path')

export default class cacheImg {
  constructor(argement) {
    this.PathNames = ''
    const updaterCacheDirName = Pkg.name
    this.updatePendingPath = path.join(app.getPath('cache'), updaterCacheDirName, 'cacheImg')
    logger.debug('ipc', 'cacheImg Path:', this.updatePendingPath)
    fsE.ensureDir(this.updatePendingPath, () => {})
  }

  exists(icon) {
    return new Promise((resolve) => {
      this.PathNames = `${this.updatePendingPath}/${this.iconPathName(icon)}`
      fsE.exists(this.PathNames, (exists) => {
        resolve(exists)
      })
    })
  }

  iconPathName(icon) {
    let pathName = ''
    if (icon.indexOf('filename') !== -1) {
      pathName = icon.split('=')[1] + '.png'
      return pathName
    } else {
      if (icon.indexOf('?') !== -1) pathName = icon.split('?')[0].split('/')
      else pathName = icon.split('/')
      return pathName[pathName.length - 1]
    }
  }

  delete() {
    fs.unlinkSync(this.PathNames)
  }

  init(fileUrl) {
    return new Promise((resolve, reject) => {
      logger.debug('ipc', 'cacheImg init', fileUrl)
      const req = request({ method: 'GET', uri: fileUrl }, (error, response, body) => {
        if (error) {
          this.delete()
          reject(error)
          logger.debug('ipc', 'cacheImg  req pipe error')
        }
      })
      logger.debug('ipc', 'cacheImg  req pipe')
      const out = fs.createWriteStream(this.PathNames)
      req.pipe(out)
      req.on('response', function (data) {
      })
      req.on('data', function (chunk) {
      })
      req.on('end', function () {
        logger.debug('ipc', 'cacheImg end', 'File succesfully downloaded')
        resolve()
      })
    })
  }
}
```




```js
```


