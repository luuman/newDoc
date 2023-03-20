# 项目介绍

Matrx 视频会议

# FAQ Section

Introduction text for the FAQ page.

- Question 1? +

  Answer 1

- Question 2? +

  Answer 2

## 项目结构

| 试题链接             | 原题概述           |
| -------------------- | ------------------ |
| .vscode/             |                    |
| avr_electron_6.1.12/ |                    |
| avr_scripts/         |                    |
| build/               |                    |
| devtools/            | vue 调试工具       |
| dist_electron/       |                    |
| node_modules/        |                    |
| nsis_build/          | nsis 打包          |
| patches/             |                    |
| public/              |                    |
| resources/           |                    |
| scripts/             |                    |
| src/                 |                    |
| .browserslistrc      |                    |
| .editorconfig        |                    |
| .eslintrc.js         |                    |
| .gitignore           |                    |
| .sentryclirc         |                    |
| babel.config.js      |                    |
| body.json            |                    |
| common.json          |                    |
| desktop.ini          |                    |
| config.js            |                    |
| appxConfig.js        | 打包配置           |
| exeConfig.js         | 打包配置           |
| msiConfig.js         | 打包配置           |
| matrx.pfx            |                    |
| package-lock.json    |                    |
| package.json         |                    |
| postcss.config.js    |                    |
| prettier.config.js   |                    |
| README.md            |                    |
| sentry-symbols.js    | 官方哨兵命令行界面 |
| sentry.properties    | 官方哨兵命令行界面 |
| upload-sourcemaps.js |                    |
| version.js           | 版本信息           |
| vue.config.js        |                    |

## 多窗口页

index 主窗口
meetingInfo 系统提示
callfeedback
toast
screenshot
liveBack

# Matrx

## 注意事项

### settimeout

由于项目中存在很多缺陷，在触发一个事件的时候，所需要的数据并没有准备好，所以 settimeout 是为了等待数据完成。

### atomrun

构造 Promise 队列 顺序执行

消息过来了之后有一系列的操作，消息之间有关系依赖，所以需要等第一条消息处理完了才能处理第二条消息。

## 设计

见 wiki

## 安全

见 wiki
打包流程：

1. e2eelog 日志关闭
1. wss
1. 修改成 node 请求
1. 关闭无用日志
1. 关闭调试的快捷键
1. 混淆代码开启

## 数据库设计

### 如何可视化打开数据库

1. 下载最新版本 https://sqlitebrowser.org/dl/
1. 选择.enc 数据库文件
1. 选择 sqlite4
   见 wiki

## 版本发布 CI/CD

见 wiki

## 如何调试

1. 安装 vscode 插件 from chrome
1. 点击 electron all
1. vscode 打断点

## 开发

1. 安装依赖时，若提示 could not find a version of Visual Studio 2017 or newer to use 需按照 https://github.com/nodejs/node-gyp#on-windows 安装
1. 然后 npm config set msvs_version 2017
1. 需要使用 yarn 因为 yarn 可以使用 autoclean 进一步减少 node_modules 体积。
1. 可以在 render socket.io 根据协议自行 mock 所需数据
1. 网传 remote 虽便捷但耗性能尽可能的用 ipc
1. 若遇到 找不到 sqlite module 报错时，执行 yarn run install 来触发 postuninstall 进行编译 sqlite 模块，完成后再启动即可。

### 数据库

1. ackDB 临时数据库，为了优先回复服务器 ack，故有持久化诉求。
1. logicDB 业务数据库，业务数据库，是主库。
1. ForwardDB 前向库，较比其他库差异在于应用启动就连接，而不是登录后。常存储与用户无关数据。

### globalEvent

1. socket.io : ws:\*\*

### 日志相关

1. 日志类别（用户行为偏运营/用户信息/性能数据/异常数据）
1. 已在 event 和 axios 和 socket.io 根据日志格式预埋日志，其余日志可按日志格式扩展。
1. 日志和异常由 sentry 管理包括奔溃日志。
1. 接入钉钉和 jira
1. 日志按天归档

#### 日志格式

分进程、分组件、分类别、分事件、按用户、脱敏
2019-12-01 00:00:00.000|pid|log-level|[svc-name,trace-id,span-id,user-id,biz-id]|thread-name|package-name.class-name : log message
[2019-12-01 00:00:00.000 IPC-Main Login ][]

#### 渲染程序使用方式 （模块可以自己定义,是否输出 track 可以配置）

vue 文件使用 this.$logs[模块（app）][level(info,log,error,warn)] 
this.$logs.app.log()
js 文件使用 import loggers from '@/logs/sentryLog' loggers[模块（app）][level(info,log,error,warn)]
loggers.app.log()

### mock 环境

1. dev:ws websocket
1. dev:web electron

### 环境

1. process.env.NODE_ENV [production,development]
1. process.env.IS_ELECTRON [true,false]
1. process.platform [darwin,win32,linux]

### 加固保护

1. 加固配置：

```
添加 electronDist 配置属性，即开启 electron 保护，配置如下
pluginOptions: {
	electronBuilder: {
		builderOptions: {
			electronDist: "avr_electron_6.1.12"
		}
	}
}
```

1. 保护包含：
   1. js 源文件加密保护
   1. app.asar 防解包保护
1. 加固说明：
   1. 加密：修改 node_modules/vue-cli-plugin-electron-builder/node_modules/node_modules/app-builder-lib 下相关 js，为源文件及 asar 文件加密。修改后使用 patch-package 模块对修改进行管理；
   1. 解密：编译 electron 源码，针对文件及 asar 进行解密。 含有解密 electron 的编译后文件放置于 avr_electron_6.1.12，通过配置引用即可。
