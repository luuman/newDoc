# 性能优化

> 启动速度优化步骤

1. 性能分析，确定瓶颈（CPU充分利用）
1. 提升代码加载速度
1. 在正确的时间执行任务
1. 持续优化代码






## 瓶颈分析

### Performance 渲染进程分析
最好的分析工具是 Chrome 开发者工具的 Performance。通过火焰图, JavaScript 执行过程的任何蛛丝马迹都可以直观的看到



### Performance

### v8-inspect-profiler

```js
// this.mainProfiler = await this.startProfiler('main', 5222)
appManager.initApp()
// this.startChildProcess()

async startProfiler(name, port) {
  const profiler = require('v8-inspect-profiler')
  // 监测对应端口
  const profiling = await profiler.startProfiling({ port })
  // 返回 stop 方法，以便停止监测
  return {
    async stop() {
      const path = require('path')
      const os = require('os')
      const profile = await profiling.stop()
      const prefix = path.join(os.homedir(), 'prof-test')
      // 输出性能文件
      await profiler.writeProfile(profile, `${prefix}.${name}.cpuprofile`)
    }
  }
}

// 启动子进程
async startChildProcess() {
  const path = require('path')
  const forkProcess = fork(
    path.join(__dirname, 'child-process.js'),
    // 设置监测端口，也可以设置为 --inspect-brk=5223，但 package.json 如果这样设置主进程会无法执行下去。
    { execArgv: ['--inspect=5223'] }
  )
  console.log('forkProcess', forkProcess)
  // 监测子进程
  const forkProfiler = await this.startProfiler('fork', 5223)
  setTimeout(async () => {
    // 停止子进程监测
    await forkProfiler.stop()
  }, 60000)
}
```

### perf_hooks 性能钩子计时

```js
perf_hooks() {
  // 引入性能钩子
  const { PerformanceObserver, performance } = require('perf_hooks')
  // 新建性能观察者
  const obs = new PerformanceObserver((items) => {
    const measurements = items.getEntriesByType('measure')
    measurements.forEach(measurement => {
      console.log(measurement.name, measurement.duration)
    })
  })
  // 观察条目为 'measure'，可以观察多种类型的条目
  obs.observe({ entryTypes: ['measure'] })
  // 性能打点：渲染进程启动
  performance.mark('renderer-start')
  window.onload = main
  function main() {
    // 性能打点，窗口加载
    performance.mark('renderer-window.onload')
      // 执行代码
      // ...
    const webview = document.querySelector('webview')
    // 性能打点，设置 webview 的 src
    performance.mark('renderer-webview.create')
    webview.src = 'xxxxx'
    webview.addEventListener('dom-ready', () => {
      // 性能打点，webview 加载完成
      performance.mark('renderer-webview.ready')
      // 性能时间轴测量
      performaceTimeline()
    })
  }
  function performaceTimeline() {
    performance.measure('renderer:start up', 'renderer-start', 'renderer-window.onload')
    performance.measure('renderer:create webview', 'renderer-webview.create', 'renderer-webview.ready')
  }
}
```

> 缺点：

1. node 的性能钩子简单易用，但是无法测量跨进程的时间节点。如果有这种需求，可以考虑用 Date.now() 的方式自行测量时间点，再用 ipc 通信的方法，将测量数据传到同一侧(如渲染进程获取主进程的数据)，进行计算。
1. 快应用开发工具对启动流程的各步骤进行计时，确认性能瓶颈主要在：加载编译插件、require 编译模块、编译速度本身。后续优化，主要也是提升编译插件加载速度、缓存编译模块、更新编译模块的 webpack 提升编译速度。

# 优化方案

## 多进程

Main Process + Renderer Process：多进程架构方案实践；

Web Worker：Rendered Process 多线程架构方案实践；

BroadcastChannel, Worker.postMessage, MessageChannel：线程间通信方式的选择；

数据压缩、数据去重、数据分级、序列化转换、频率控制等：线程间通信传输的进一步优化实践；

Object & Map：对业务数据建立极速的索引机制；

任务分片：分解渲染进程中引起卡顿的重任务，提高执行效率

[构建多线程的 Electron 应用和性能优化实践](https://www.infoq.cn/article/rku*vubkijtdv13dibvn)

## 优化策略
### 骨架屏

### 惰性加载
### 打包优化
### 使用现代的 JavaScript/CSS 代码
Electron 每个版本都会预装当时最新的 Chrome，对于前端来说，这是最爽的一件事情:

没有负担地使用最新的 JavaScript 特性
没有 Polyfill、没有 runtime-helper。相比老旧浏览器，代码量更少，性能也更好
我们需要主动抛弃一些老旧的依赖。保持使用最新的库

### 窗口预热 与 窗口池、窗口常驻
为了追赶原生窗口的打开和展示速度，我们运用了很多技巧，用空间来换取时间。
例如我们的应用首页，用户在打开登录页面时，我们就会在后台预热，将该加载的资源都准备好，在登录成功后，就可以立即渲染显示。窗口打开的延时很短，基本接近原生的窗口体验。
这里用到了一些 Hack 手段，我们将这些窗口放到了屏幕之外，并设置 skipTaskBar 来实现隐藏或者关闭的效果。

对于频繁开启/关闭的窗口，也可以使用窗口池来优化。比如 Webview 页面，打开的一个 Webview 页面时，会优先从窗口池中选取，当窗口池为空时才创建新的窗口, 后面页面关闭后会再放回窗口池中，方便后续复用。
另外，对于业务无关的、通用的窗口，也可以采用常驻模式，例如通知，图片查看器。这些窗口一旦创建就不会释放，打开效果会更好。


[分享这半年的 Electron 应用开发和优化经验](https://juejin.cn/post/6844904029231775758)
[性能](https://www.electronjs.org/zh/docs/latest/tutorial/performance)
[如何提升 electron 应用的启动速度](http://quickapp.vivo.com.cn/how-to-improve-electron-app-startup-speed/)
[Electron性能优化](https://www.psvmc.cn/article/2021-08-13-electron-performance.html)
[Electron 想通过easy-monitor 分析一下性能](https://github.com/hyj1991/easy-monitor/issues/92)



## 代码注意事项

### 阻塞主进程

1. 主进程很忙。它要与操作系统交互，控制UI线程，控制app中多个组件，因此不要把耗时长的任务放在主进程中
1. 需要CPU重度参与的任务可以使用worker threads
1. 尽量使用异步操作或者 remote 模块
1. 尽量避免在主进程中进行I/O操作

不要滥用 remote
remote 提供了一种简便的、无侵入的形式来访问主进程的API和数据。其底层基于同步的 IPC。你可以通过我这篇文章来了解它的原理。
坑在哪里呢？
① 它是同步的
② 属性动态获取。为了确保你能够获取到最新的值，remote底层并不会进行缓存，而是每次获取一个属性就动态到主进程中取。
比如获取一个主进程中的对象:
// 主进程
global.foo = {
  foo: 1,
  bar: {
    baz: 2
  }
}
复制代码渲染进程访问:
import {remote} from 'electron'

JSON.stringify(remote.getGlobal('foo'))
复制代码这里会触发 4 次 同步 IPC: getGlobal、foo、bar、bar.baz。对于复杂的数据，这个消耗就很难忍受了。
避免使用 remote，除非你知道你自己在干什么。

### 使用JS进程调度和计算优化
requestIdleCallback() Web Workers

### 选用精简的模块
尽量使用精简通用的模块。当你选择所需模块是，在npm仓库中检索是否有star更多更精简或者更小的版本

### app启动后不要立即执行长耗时操作
检查在启动过后是否立即执行了大量任务。建议根据用户使用按需按队列执行操作

### 打包压缩代码
可以采用传统的方案如webpack parcel rollup等

### 不使用网络请求
与传统网站的优化类似，尽量减少网络请求。同时考虑把大文件打包在app中，减少大文件网络请求

## 代码优化
打包和缓存，对启动速度优化效果明显。代码优化，对启动效果不明显。
### 减少不必要的依赖模块

### 减少磁盘IO
1. 大量磁盘IO，会延长应用程序执行时间，我们应该减少一些不必要的磁盘IO

### 减少同步IPC和remote

## 代码加载速度

### 打包盒压缩代码
使用 webpack 或 rollup 等打包工具压缩代码。
### tree-shaking

### v8
## 二次封装

### 封装IPC库

1. 异步的。没有同步的选项。避免干蠢事
1. 消息合并。合并事件推送，批量传递
1. 序列化。直接传递 JSON 字符串，不让 Electron 干涉序列化。Electron 内部序列化稍微有点复杂，比如会处理 Buffer 等特殊类型。
1. 一致化的、简单易用的 API。使用一样在接口支持主进程与渲染进程，以及渲染进程与渲染进程之间双向通信。

```js
import rpc from 'myrpc'

// 注册方法
rpc.registerHandler('echo', async data => {
  return data
})

// 事件监听
rpc.on('some-event', (data, source) => {
  // dosomething
})
复制代码客户端:
import rpc from 'myrpc'

rpc.emit(target, 'some-event') // target 为接收的窗口或者主进程。

// 方法调用
const res = await rpc.callHandler(target, 'echo', 'hello-world')
```
