# 环境配置项

| <i title="src\buildConfig\current.js">控制器</i> | moi                                                                    | private                                            | public                                             | 备注                   |
| ------------------------------------------------ | ---------------------------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | ---------------------- |
| name                                             | 'Qubit'                                                                | 'MatrxO'                                           | 'Matrx'                                            | 名称                   |
| version                                          | '100.0.6'                                                              | '100.0.8'                                          | '1.2.8'                                            | 版本                   |
| description                                      | 'Qubit'                                                                | 'MatrxO'                                           | 'Matrx'                                            | 描述                   |
| productName                                      | 'Qubit'                                                                | 'MatrxO'                                           | 'Matrx'                                            | 项目                   |
| protocol                                         | 'matrxo'                                                               | 'matrxo'                                           | 'matrxmeeting'                                     | 协议                   |
| privatization                                    | true                                                                   | true                                               | false                                              | 支持私有化             |
| secure                                           | true                                                                   | true                                               | true                                               |                        |
| speechAsr                                        | true                                                                   | true                                               | true                                               |                        |
| meetingSDK                                       | true                                                                   | true                                               | true                                               |                        |
| showSettingServer                                | true                                                                   | true                                               | false                                              | 服务设置按钮           |
| serverProtocol                                   | 'https://'                                                             | 'https://'                                         | 'https://'                                         | 服务协议               |
| serverIp                                         | ''                                                                     | ''                                                 | ''                                                 | 服务地址               |
| serverPort                                       | ''                                                                     | ''                                                 | ''                                                 | 服务端口               |
| oldName                                          | 'MatrxO'                                                               |                                                    |                                                    | 旧名称                 |
| fC.hideSingUp                                    | true                                                                   | true                                               | false                                              | 隐藏注册按钮           |
| fC.anonymousJoinMeeting                          | false                                                                  | false                                              | true                                               | 支持匿名入会           |
| fC.hidePhoneLoginAndAdd                          | true                                                                   | true                                               |                                                    | 隐藏手机号登录         |
| fC.hideSsoLogin                                  | true                                                                   | true                                               |                                                    | 不支持第三方登录       |
| fC.hideReportIssue                               | false                                                                  | false                                              |                                                    | 不支持意见反馈         |
| fC.fileShare                                     | false                                                                  | false                                              |                                                    | 不支持默认下载地址修改 |
| fC.picShare                                      | false                                                                  | false                                              |                                                    | 不支持另存为图片       |
| fC.hidePersonSpace                               | 'UAE-971-1000000'                                                      | 'UAE-971-1000000'                                  |                                                    | 个人空间 ID            |
| fC.hideNoLoginReporting                          | true                                                                   | true                                               |                                                    | 不支持未登录反馈       |
| fC.logoIconSplit                                 | true                                                                   | true                                               |                                                    | 区分图标               |
| appId                                            | <i title="`io.${config.oldName \|\| config.productName}.www`">Copy</i> | <i title="`io.${config.productName}.www`">Copy</i> | <i title="`io.${config.productName}.www`">Copy</i> | APPID                  |

## public

> version

通过`process.env.npm_lifecycle_event`命令的环境变量获取，命令内容。更换打包版本号

```js
if (process.env.npm_lifecycle_event.includes('msi')) {
	const ver = config.version.split('.');
	ver[0] = 20;
	config.version = ver.join('.');
} else if (process.env.npm_lifecycle_event.includes('appx')) {
	const ver = config.version.split('.');
	ver[0] = 9;
	config.version = ver.join('.');
}

const ENVIRONMENT = process.env.npm_lifecycle_event;
if (ENVIRONMENT === "electron:msi")
```

[NPM 生命周期](https://zhuanlan.zhihu.com/p/42935490)

```js
const currentConfig = require('./src/buildConfig/currentConfig');
currentConfig {
  module: 'public',
  name: 'Matrx',
  version: '1.2.8',
  description: 'Matrx',
  productName: 'Matrx',
  protocol: 'matrxmeeting',
  privatization: false,
  secure: true,
  speechAsr: true,
  meetingSDK: true,
  showSettingServer: false,
  serverProtocol: 'https://',
  serverIp: '',
  serverPort: '',
  fC: { hideSingUp: false, anonymousJoinMeeting: true },
  appId: 'io.Matrx.www'
}

const {modulesNames} = require('./src/buildConfig/index');
modulesNames [ 'Matrx', 'MatrxO', 'Qubit' ]
```
