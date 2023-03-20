## index

index

```mermaid
stateDiagram
  state router {
    state EmailLogin {
      [*] --> init: loginModal = true
      note left of [*]: 登录页
    }
    state Welcome {
      [*] --> init
      note left of [*]: 启动页
    }
    --
    state Message {
      [*] --> mounted
      note left of [*]: 主页面
    }
  }
  state Welcome.vue {
    note left of init: 根据配置展示启动页
    init --> mounted1: loginModal = true
    beforeRouteEnter
    note left of beforeRouteEnter: 优化空间显示登录模块
    toLogin
    state UserLogin.vue {
      mounted1: mounted
    }
  }
  toLogin --> EmailLogin
  state Main.vue {
    mounted
  }
```

## start

start

## sso

sso

## toast

toast

## callfeedback

callfeedback

## deleteAccountFeedback

deleteAccountFeedback

## meetingPwd

meetingPwd

## meetingInfo

meetingInfo

## meetingInvite

meetingInvite

## screenshot

screenshot

## pictureViewer

pictureViewer

## fileViewer

fileViewer

## Welcome

Welcome
