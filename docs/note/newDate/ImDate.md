# msg

| interface            | 类型   | value                                  | 描述         |
| -------------------- | ------ | -------------------------------------- | ------------ |
| MIMETYPE             | string | "x-filetransfer/octet-stream"          | 消息文件类型 |
| body                 | string | null                                   | 消息主体     |
| c                    | string | "HyperText"                            | 消息类型     |
| dialogId             | string | "b29Lb8co7ew"                          |              |
| f                    | string | "b29Lb8co7ew"                          |              |
| filelisttype         | string | 2                                      |              |
| isStar               | string | null                                   |              |
| messageStatus        | string | null                                   |              |
| meta                 | string | Object                                 |              |
| download             | string | Object                                 |              |
| filename             | string | "春夏秋冬的你-王宇良.mp3"              |              |
| hmacKey              | string | "6c76dacf6f8a30ba3aaa21514a4aff4a"     |              |
| iKey                 | string | "93061dd1c04c4f87c2c6c1106cb6464dffef" |              |
| isOrigin             | string | 0                                      |              |
| originSha256         | string | "9b108a72e82037f5a7576bda0e6c3635f"    |              |
| progress             | string | Object                                 |              |
| enabled              | string | true                                   |              |
| loaded               | string | 0                                      |              |
| sendStatus           | string | ""                                     |              |
| total                | string | 4741468                                |              |
| type                 | string | "download"                             |              |
| uploadOriginFilePath | string | ""                                     |              |
| s                    | string | "DXosN_0WjSo"                          |              |
| stime                | string | 1669124363203                          |              |

```
interface msgItem {
}
msg： {
  MIMETYPE:"x-filetransfer/octet-stream"
  body:null
  c:"HyperText"
  dialogId:"b29Lb8co7ew"
  f:"b29Lb8co7ew"
  filelisttype:2
  isStar:null
  messageStatus:null
  meta:Object
  download:Object
  filename:"春夏秋冬的你-王宇良.mp3"
  hmacKey:"6c76dacf6f8a30ba3aaa21514a4aff4a"
  iKey:"93061dd1c04c4f87c2c6c1106cb6464dffef9ecd0e475820f051657352ca644c"
  isOrigin:0
  originSha256:"9b108a72e82037f5a7576bda0e6c3635ef2f7f35af58a046b152b4d728b751df"
  progress:Object
  enabled:true
  loaded:0
  sendStatus:""
  total:4741468
  type:"download"
  uploadOriginFilePath:""
  s:"DXosN_0WjSo"
  stime:1669124363203
}
```

# push 消息体

定义并统一面向多空间，多端设备的 push 消息协议结构体。加密协议说明参考：Push 通道加密升级，

| 协议名称                                             | NODE_ENV | VUE_APP_MODE | 描述           |
| ---------------------------------------------------- | -------- | ------------ | -------------- |
| [HyperText](/note/newDate/ImDate?id=HyperText)       |          |              | 消息           |
| [Notification](/note/newDate/ImDate?id=Notification) |          |              | 通知           |
| [Event](/note/newDate/ImDate?id=Event)               |          |              | 群事件         |
| [PushReg](/note/newDate/ImDate?id=PushReg)           |          |              | 注册连接       |
| [PullDetail](/note/newDate/ImDate?id=PullDetail)     |          |              | 拉取历史消息   |
| [ForceClose](/note/newDate/ImDate?id=ForceClose)     |          |              | 强制关闭连接   |
| [StateReport](/note/newDate/ImDate?id=StateReport)   |          |              | 客户端上报信息 |

| name       | H   | N   | E   | PushReg | PullDetail | F   | S   | 描述         |
| ---------- | --- | --- | --- | ------- | ---------- | --- | --- | ------------ |
| c          |     |     |     |         |            |     |     | 消息类型     |
| f          |     |     |     |         |            | :x: |     | 发送方 id    |
| t          |     |     |     | :x:     | :x:        |     |     | 接收方 id    |
| s          |     | :x: | :x: | :x:     | :x:        | :x: |     | 用户 uuid    |
| a          |     | :x: | :x: | :x:     | :x:        | :x: | :x: | 通话类型     |
| l          |     |     |     | :x:     |            | :x: |     | 生存时间整数 |
| expire     |     |     |     | :x:     |            | :x: |     | 生存时间值   |
| needAck    |     |     |     | :x:     | :x:        | :x: |     | ack          |
| dio        |     | :x: |     | :x:     | :x:        | :x: |     | 消息是否丢弃 |
| noDisturb  |     | :x: |     | :x:     | :x:        | :x: |     | 第三方推送   |
| binaryPart |     | :x: |     | :x:     | :x:        | :x: |     | 二进制流     |
| meFrom     |     | :x: |     |         |            |     | :x: | 端+发送方    |
| meTo       |     |     |     | :x:     | :x:        |     |     | 空间+接收方  |
| mcFrom     |     |     |     | :x:     |            |     | :x: | 端+发送方    |
| mcTo       |     |     |     | :x:     | :x:        | :x: |     | 空间+接收方  |
| m          | :x: |     |     |         |            |     |     | 内容         |

```json
// 消息结构说明
{
  "c": <String value of type-model-class-simple-name>,
  "f": <String value of from-user>,
  "t": <String value of to-user>,
  "s": <String value of source-user>,
  "a": <Integer value appid>, // 1. 普通通话，2. 多媒体通话（预留）3. 地图通话，4. 涂鸦通话，5. 消息 6. 联系人 7.视频通话
  "l": <Integer value of ttl>,
  "expire": <Long value of calculated by ttl>,
  "needAck": <Boolean value of ack>,
  "dio": <Boolean value of drop this message>,
  "noDisturb": <Boolean value of use 3rd party push>,
  "binaryPart": <String value of base64 data>,
  "meFrom": <String value of multi-endpoint-from-user>,
  "meTo": <String value of multi-endpoint-to-user>,
  "mcFrom": <String value of multi-corporation-from-user>,
  "mcTo": <String value of multi-corporation-to-user>,
  "m": { // 实际内容json， 可以反序列化到对应对象
  }
}
```

## 各类型消息结构说明

### HyperText

> MIMETYPE

| MIMETYPE                    | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| text/plain                  | [文本消息](/note/newDate/ImDate?id=文本消息)                 |
| image/\*                    | [图片消息](/note/newDate/ImDate?id=图片消息)                 |
|                             | image/jpeg                                                   |
|                             | image/webp                                                   |
|                             | image/jpg                                                    |
|                             | image/gif                                                    |
|                             | image/png                                                    |
|                             | image/bmp                                                    |
| x-filetransfer/octet-stream | [文件消息](/note/newDate/ImDate?id=文件消息)                 |
| application/eliminate       | [被动撤回消息](/note/newDate/ImDate?id=被动撤回消息)         |
| application/withdraw        | [撤回类型消息](/note/newDate/ImDate?id=撤回类型消息)         |
| application/receipt         | [回执类型消息](/note/newDate/ImDate?id=回执类型消息)         |
| application/receipt/count   | [回执类型消息](/note/newDate/ImDate?id=回执类型消息)         |
| application/pin             | [Pin](/note/newDate/ImDate?id=Pin)                           |
| application/sticker-replied | [表情回复类型消息](/note/newDate/ImDate?id=表情回复类型消息) |
| application/restricted      | [回执类型消息](/note/newDate/ImDate?id=回执类型消息)         |
| application/sticker         | [表情回复类型消息](/note/newDate/ImDate?id=表情回复类型消息) |
| text/vcard                  | [卡片消息](/note/newDate/ImDate?id=卡片消息)                 |
| meeting/card                | [会议卡片消息](/note/newDate/ImDate?id=会议卡片消息)         |
| audio/voice-msg             | [语音消息](/note/newDate/ImDate?id=语音消息)                 |
| call/record                 | [语音呼叫消息](/note/newDate/ImDate?id=语音呼叫消息)         |

<!-- |                                 |                                                              |
| text/namecard                   |                                                              |
| application/location            |                                                              |
| application/redenvelope         |                                                              |
| application/redenvelope-receipt |                                                              |
| application/transfer            |                                                              |
| application/balance-change      |                                                              |
| application/payment-operate     |                                                              |
| application/yeecontract         |                                                              |
| application/yeearbitration      |                                                              |
| application/deposit-change      |                                                              |
| application/otc-order           |                                                              |
| application/otc-contract        |                                                              |
| application/arbitration         |                                                              |
| application/otc-contract-event  |                                                              | -->

| name                    | 类型 | 文本 | 卡片 | 会议 | 图片 | 文件 | Pin | 语音 | 呼叫 | 撤回 | 表情 | 回执 |            描述            |
| ----------------------- | :--: | :--: | :--: | :--: | :--: | :--: | :-: | :--: | :--: | :--: | :--: | :--: | :------------------------: |
| a                       | `N`  |      |      |      |      |      |     |      |      |      |      |      |         [注释][a]          |
| binaryPart              | `S`  | :x:  | :x:  | :x:  |      | :x:  | :x: |      | :x:  | :x:  | :x:  | :x:  |     [注释][binarypart]     |
| c                       | `S`  |      |      |      |      |      |     |      |      |      |      |      |         [注释][c]          |
| expire                  | `N`  |      |      |      |      |      |     |      |      |      |      |      |       [注释][expire]       |
| f                       | `S`  |      |      |      |      |      |     |      |      |      |      |      |         [注释][f]          |
| knownIfToOff            | `B`  |      |      | :x:  |      |      |     |      |      | :x:  |      | :x:  |    [注释][knowniftooff]    |
| isSyncFrom              | `B`  | :x:  | :x:  |      | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |     [注释][issyncfrom]     |
| l                       | `N`  |      |      |      |      |      |     |      |      |      |      |      |         [注释][l]          |
| m                       | `O`  |      |      |      |      |      |     |      |      |      |      |      |         [注释][m]          |
| :o: MIMETYPE            | `S`  |      |      |      |      |      |     |      |      |      |      |      |      [注释][mimetype]      |
| :o: body                | `S`  |      | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  |      | :x:  | :x:  |        [注释][body]        |
| :o: ctime               | `N`  |      |      |      |      |      |     |      |      |      |      |      |       [注释][ctime]        |
| :o: deviceId            | `N`  | :x:  | :x:  |      | :x:  | :x:  | :x: |      |      | :x:  | :x:  | :x:  |      [注释][deviceid]      |
| :o: flags               | `N`  |      |      |      |      |      | :x: |      |      |      |      |      |       [注释][flags]        |
| :o: isE2EE              | `B`  | :x:  | :x:  |      | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |       [注释][ise2ee]       |
| :o: meta                | `O`  | :x:  |      | `S`  |      |      |     |      |      |      | :x:  |      |        [注释][meta]        |
| :o2: contactUid         | `S`  | :x:  |      | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |     [注释][contactuid]     |
| :o2: codec              | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: |      | :x:  | :x:  | :x:  | :x:  |       [注释][codec]        |
| :o2: duration           | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: |      | :x:  | :x:  | :x:  | :x:  |      [注释][duration]      |
| :o2: maxframe           | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: |      | :x:  | :x:  | :x:  | :x:  |      [注释][maxframe]      |
| :o2: nickName           | `S`  | :x:  |      | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |      [注释][nickname]      |
| :o2: download           | `O`  | :x:  | :x:  | :x:  |      |      | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |      [注释][download]      |
| :o2: -fid               | `S`  | :x:  | :x:  | :x:  |      |      | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |        [注释][fid]         |
| :o2: -sha256            | `S`  | :x:  | :x:  | :x:  |      | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |       [注释][sha256]       |
| :o2: -size              | `N`  | :x:  | :x:  | :x:  |      |      | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |        [注释][size]        |
| :o2: -url               | `S`  | :x:  | :x:  | :x:  |      | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |        [注释][url]         |
| :o2: filename           | `S`  | :x:  | :x:  | :x:  |      |      | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |      [注释][filename]      |
| :o2: h                  | `N`  | :x:  | :x:  | :x:  |      | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |         [注释][h]          |
| :o2: hmacKey            | `S`  | :x:  | :x:  | :x:  |      |      | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |      [注释][hmackey]       |
| :o2: iKey               | `S`  | :x:  | :x:  | :x:  |      | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |        [注释][ikey]        |
| :o2: pinnedInfo         | `O`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  | :x:  | :x:  |     [注释][pinnedinfo]     |
| :o2: -operation         | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  | :x:  | :x:  |     [注释][operation]      |
| :o2: -pname             | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  | :x:  | :x:  |       [注释][pname]        |
| :o2: -ptime             | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  | :x:  | :x:  |       [注释][ptime]        |
| :o2: -stime             | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  | :x:  | :x:  |       [注释][stime]        |
| :o2: -uuid              | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  | :x:  | :x:  |        [注释][uuid]        |
| :o2: isOrigin           | `N`  | :x:  | :x:  | :x:  |      | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |      [注释][isorigin]      |
| :o2: originSha256       | `N`  | :x:  | :x:  | :x:  | :x:  |      | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |    [注释][originsha256]    |
| :o2: origUUID           | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  |      | :x:  |      |      [注释][origuuid]      |
| :o2: origMimeType       | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  |      |    [注释][origmimetype]    |
| :o2: receiptInfo        | `A`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  |      |    [注释][receiptinfo]     |
| :o2: -rstime            | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  |      |       [注释][rstime]       |
| :o2: -ruuid             | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  |      |       [注释][ruuid]        |
| :o2: type               | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  | :x:  |      |        [注释][type]        |
| :o2: w                  | `N`  | :x:  | :x:  | :x:  |      | :x:  | :x: | :x:  | :x:  | :x:  | :x:  | :x:  |         [注释][w]          |
| :o2: stickerRepliedInfo | `O`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  |      | :x:  | [注释][stickerrepliedinfo] |
| :o2: -operation         | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  |      | :x:  |     [注释][operation]      |
| :o2: -rname             | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  |      | :x:  |       [注释][rname]        |
| :o2: -rtime             | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  |      | :x:  |       [注释][rtime]        |
| :o2: -sticker           | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  |      | :x:  |      [注释][sticker]       |
| :o2: -uuid              | `S`  | :x:  | :x:  | :x:  | :x:  | :x:  | :x: | :x:  | :x:  | :x:  |      | :x:  |        [注释][uuid]        |
| :o: nf                  | `N`  |      |      |      |      |      |     |      |      |      | :x:  | :x:  |         [注释][nf]         |
| :o: receipt             | `N`  |      |      |      |      |      | :x: |      |      |      |      | :x:  |      [注释][receipt]       |
| :o: si                  | `N`  | :x:  | :x:  | :x:  | :x:  | :x:  |     | :x:  | :x:  | :x:  |      | :x:  |         [注释][si]         |
| :o: stime               | `N`  |      |      |      |      |      |     |      |      |      |      |      |       [注释][stime]        |
| :o: uuid                | `S`  |      |      |      |      |      |     |      |      |      |      |      |        [注释][uuid]        |
| mcFrom                  | `S`  |      |      |      |      |      |     |      |      |      |      |      |       [注释][mcfrom]       |
| mcTo                    | `S`  |      |      |      |      |      |     |      |      |      |      |      |        [注释][mcto]        |
| meFrom                  | `S`  |      |      |      |      |      |     |      |      |      |      |      |       [注释][mefrom]       |
| meTo                    | `S`  |      |      |      |      |      |     |      |      |      |      |      |        [注释][meto]        |
| needAck                 | `S`  |      |      |      |      |      |     |      |      |      |      |      |      [注释][needack]       |
| noDisturb               | `S`  |      |      | :x:  |      |      |     |      |      | :x:  |      |      |     [注释][nodisturb]      |
| s                       | `S`  |      |      | :x:  |      |      |     |      |      | :x:  |      |      |         [注释][s]          |
| t                       | `S`  |      |      |      |      |      |     |      |      |      |      |      |         [注释][t]          |

```json
// 消息
{
  "c": "Hypertext",
  "f": <String value of from-user>, // +8668096709735160
  "t": <String value of to-user>, // +8668096709735160
  "s": <String value of source-user>, // +8668096709735160
  "a": <Integer value appid>, // 5 消息
  "l": <Integer value of ttl>, // 999999
  "expire": <Long value of calculated by ttl>, // 1603116332409
  "needAck": <Boolean value of ack>, // true
  "dio": <Boolean value of drop this message>, // drop this message if offline. default is false
  "noDisturb": <Boolean value of use 3rd party push>, // if don’t use 3rd party push value is true
  "binaryPart": <String value of base64 data>,
  "meFrom": <String value of multi-endpoint-from-user>, // 8668096709735160#desktop
  "meTo": <String value of multi-endpoint-to-user>, // 8668096709735160#desktop
  "mcFrom": <String value of multi-corporation-from-user>, // 86-CN-0000001#8668096709735160
  "mcTo": <String value of multi-corporation-to-user>, // 86-CN-0000001#8668096709735160
  "m": {
    "ctime": <Long value of create-time>, // 1603116332409
    "stime": <Long value of server-time>, // 1603116332409
    "uuid": <String value of uuid>, // 585CE8FF-F2FC-4726-ACD3-D9B8D8D04501
    "MIMETYPE": <String value of mime type>, // text/plain
    "body": <String value of msg>, // testing
    "nf": <Includes teger value of no forward>, // default 0, if value is 1 client cannot forward this msg
    "si": <Integer value of save ignore>, // default 0, if value is 1 client don’t show this msg, and server don’t  save this msg
    "flags": <Long value of device flag>, // 22
    "deviceId": <Long value of device id>, // 22
    "isE2EE": <Boolean value of is e2ee>, // if value is true server don’t save this msg
    "meta": <Object value of meta>,
  }
}
```

#### 文本消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675169411468,
  "f": "CyRXrP_3sOw",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "text/plain",
    "body": "123123",
    "ctime": 1669985411466,
    "flags": 22,
    "nf": 0,
    "receipt": 9,
    "stime": 1669985411466,
    "uuid": "dbe61af0-723f-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

#### 卡片消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675170811625,
  "f": "CyRXrP_3sOw",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "text/vcard",
    "ctime": 1669986811624,
    "flags": 22,
    "meta": {
      "contactUid": "+971142867794965476",
      "nickName": "李白 "
    },
    "nf": 0,
    "receipt": 9,
    "stime": 1669986811623,
    "uuid": "1e720e80-7243-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

#### 会议卡片消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675174944552,
  "f": "AB7TTZQ8djk",
  "isSyncFrom": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "meeting/invite",
    "ctime": 1669990944553,
    "deviceId": 2,
    "flags": 22,
    "isE2EE": true,
    "meta": "AjMKIEanv2rHMVNiLdxAexaRukXgFcYeP0rwxTTIM8ieKJt8EAAYAyKwAru/X4P4OsuAy8Ih6s0Y7Bqq5DgBx/3AH6XoduUS/E5uRjR25tc1TcO5IN9xfl+eQiUma4QmXKao8phP2z4dyFKsKLzU0z+Wxxn8eIn2HD4ekB/70x2T0AAXAtWtOGGlLCPWaoiCnNFSevC44yFnwEP62Efth/mMF1qTfAv7cwmy/nv4FLouLrMOfdO2tbzZaxAovtF7DbolMm3NzIy+C9cdIWBR7NBXLEao5G8T7KuTMzdDQn4algt2WnaASnNpd9PrnHM7IqzElLgx10LaJzfcrt1+nW2b/43Elb/Q8cvNzr5zK9HsgVLiID4Vipn8KYJpA4cjhpMWkAKjTNuiL2grmkiv2nwuX1xpCsVsmwZ4tt4/9JDZJBLWvc/5qlYX+/GNBfERkQ5tREUTffop8RoqIM2nMMeGrbJMQQLAYtES9PijARJXtoz+wi6KnLAwCPcgToEdNwBaeOM=",
    "nf": 1,
    "receipt": 1,
    "stime": 1669990944553,
    "uuid": "bd9a2430-724c-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### 图片消息

```json
{
  "a": 5,
  "binaryPart": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMA///////////////////////////////////////////////////////////////////////////////////////bAEMB///////////////////////////////////////////////////////////////////////////////////////AABEIArMDIAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQID/8QAJhABAAICAwACAwEAAgMAAAAAAAERMVECIUESYXGBkaEiscHh8P/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
  "c": "HyperText",
  "expire": 1675170953657,
  "f": "CyRXrP_3sOw",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "image/png",
    "ctime": 1669986953655,
    "flags": 22,
    "meta": {
      "download": {
        "fid": "63891odvd9fa898840e100014f24c4",
        "sha256": "a513355b7d306c01ac9071989777388e3692ab9890024aa1c690051b7b5623bd",
        "size": 72472,
        "url": "https://1mapi.svc.matrx.solutions/pfm/download/file?fid=63891odvd9fa898840e100014f24c4&ts=1669986953268&id=6HQYGI7lDxAmBQcs&os=desktop"
      },
      "filename": "4D0A709B-DD7F-437f-AD55-F29057665A35.png",
      "h": 711,
      "hmacKey": "5ab5b288dfb290b88289b658e86cc427",
      "iKey": "7522d3b7f348c072a2c3475fa930d98adbbc393ed8d251e03a7b8d2cf370ffcb",
      "isOrigin": 0,
      "w": 823
    },

    "nf": 0,
    "receipt": 255,
    "stime": 1669986953654,
    "uuid": "72bc6d00-7243-11ed-b69c-f57ecb976816"
  },

  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

#### 文件消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675170997997,
  "f": "CyRXrP_3sOw",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "x-filetransfer/octet-stream",
    "ctime": 1669986997995,
    "flags": 22,
    "meta": {
      "download": {
        "fid": "63891odvctfab58840e100014f24d8",
        "size": 318422
      },
      "filename": "Matrx桌面端未登录情况下的问题反馈通道.xmind",
      "hmacKey": "5ab5b288dfb290b88289b658e86cc427",
      "iKey": "7522d3b7f348c072a2c3475fa930d98adbbc393ed8d251e03a7b8d2cf370ffcb",
      "isOrigin": 0,
      "originSha256": "7ee621d5d022fbc72de9cc726cb495f4649d5c04c18e08eb0f9587964c71cdc8"
    },
    "nf": 0,
    "receipt": 255,
    "stime": 1669986997995,
    "uuid": "8cc61341-7243-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

#### Pin

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675172649504,
  "f": "CyRXrP_3sOw",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "application/pin",
    "ctime": 1669988649502,
    "meta": {
      "pinnedInfo": {
        "operation": 1,
        "pname": "阿成茶 121212111",
        "ptime": 1669988649625,
        "stime": 1669987083481,
        "uuid": "c09c7dd0-7243-11ed-b69c-f57ecb976816"
      }
    },
    "nf": 1,
    "si": 1,
    "stime": 1669988649498,
    "uuid": "9bf1645b-2387-42b2-8c2f-85e652e0ff69"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

#### 语音消息

```json
{
  "a": 5,
  "binaryPart": "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",
  "c": "HyperText",
  "expire": 1670988821894,
  "f": "CyRXrP_3sOw",
  "isSyncFrom": false,
  "knownIfToOff": false,
  "l": 1000000,
  "m": {
    "MIMETYPE": "audio/voice-msg",
    "ctime": 1669988821373,
    "deviceId": 0,
    "flags": 11,
    "meta": {
      "codec": "opus-8k-20",
      "duration": 4400,
      "maxframe": 0
    },
    "receipt": 0,
    "stime": 1669988821891,
    "uuid": "2281D2A5-532C-469E-9869-06EE397F6F8B"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#mobile",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

#### 语音呼叫消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675172981186,
  "f": "AB7TTZQ8djk",
  "isSyncFrom": false,
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "call/record",
    "body": "AjMKIGCamy3MwNGoI9IzaU6TWBkRO+XyjOIwJXBRbtN3485nEAEYACIg5xPxMbyLNZ9/vilbkNnAW+gwoMVpDD8LSnmEhTiSSmkqIM2nMMeGrbJMQQLAYtES9PijARJXtoz+wi6KnLAwCPcgkjR+ti7NXNU=",
    "ctime": 1669988981186,
    "deviceId": 2,
    "flags": 22,
    "isE2EE": true,
    "meta": "AjMKIGCamy3MwNGoI9IzaU6TWBkRO+XyjOIwJXBRbtN3485nEAIYACKQATecjqz6qgtSaozaZXL0HIcfXlcgxxAOwBVVEwcQgAblAbugdHv1QJ2sfCeduoLR+COXBm5aRGI/eVa0AmIIAYIp9DTTb0NF9Xw1PSsmd2jGNzzlbiwtG2n7pkIDeHX+tl5K7GvoBCNtHj6ioiaXX0sYHobsl+rTroVpkpZvyENncMbC8OtDotMl3t7M1bJJcyogzacwx4atskxBAsBi0RL0+KMBEle2jP7CLoqcsDAI9yC7vehc51dqrw==",
    "nf": 0,
    "receipt": 9,
    "stime": 1669988981186,
    "uuid": "2b5620f0-7248-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": false,
  "t": "ATJLFmY_aBY"
}
```

#### 被动撤回消息

```json
{}
```

#### 撤回类型消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675172509604,
  "f": "AB7TTZQ8djk",
  "l": 5184000,
  "m": {
    "MIMETYPE": "application/withdraw",
    "body": "",
    "ctime": 1669988509605,
    "flags": 22,
    "meta": {
      "origUUID": "5bc44cd0-38b9-11ed-9055-fd43a3cc5419"
    },
    "nf": 0,
    "receipt": 9,
    "stime": 1669988509604,
    "uuid": "withdraw|5bc44cd0-38b9-11ed-9055-fd43a3cc5419"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### 回执类型消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675172343374,
  "f": "AB7TTZQ8djk",
  "l": 5184000,
  "m": {
    "MIMETYPE": "application/receipt",
    "ctime": 1669988343374,
    "flags": 22,
    "meta": {
      "origMimeType": "application/receipt",
      "origUUID": "af721580-7246-11ed-b69c-f57ecb976816",
      "receiptInfo": [
        {
          "rstime": 1669988333045,
          "ruuid": "a8501090-7246-11ed-941c-c5b2118a3a39"
        }
      ],
      "type": 0
    },
    "nf": 1,
    "receipt": 2,
    "si": 1,
    "stime": 1669988343374,
    "uuid": "af721580-7246-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "t": "ATJLFmY_aBY"
}
```

#### 表情回复类型消息

```json
{
  "a": 5,
  "c": "HyperText",
  "expire": 1675172182866,
  "f": "CyRXrP_3sOw",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "MIMETYPE": "application/sticker-replied",
    "ctime": 1669988182864,
    "flags": 22,
    "meta": {
      "stickerRepliedInfo": {
        "operation": 1,
        "rname": "阿成茶 121212111",
        "rtime": 1669988182978,
        "sticker": "😢",
        "uuid": "222e93a0-717a-11ed-9059-0321981f8fa2"
      }
    },
    "receipt": 9,
    "si": 1,
    "stime": 1669988182863,
    "uuid": "4fc28a20-7246-11ed-b69c-f57ecb976816"
  },
  "mcFrom": "UAE-971-1000000#8676579454252601",
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meFrom": "8676579454252601#desktop",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "noDisturb": true,
  "s": "AB7TTZQ8djk",
  "t": "ATJLFmY_aBY"
}
```

<!-- #### text/namecard

此消息有暴露对方手机号的风险，所以这个消息目前不支持保存成真正的 VCARD 文件。

```json
"m":{
  "ctime":<create time>,
  "uuid":<uuid of this msg>,
  "MIMETYPE":"text/namecard",
  "body"：<vcard文本/文件内容。UTF8编码>
}
```

```json
body按vcard定义书写。每个字段是一行（“\n”分隔）。至少包含CARDTYPE

示例：

    BEGIN:VCARD
    VERSION:1.0
    CARDTYPE:1
    NICKNAME:John
    HID:xxxxxx
    x-yeecall:John_123
    CONTACTNAME:zhangsan
    PHONENUMBER:12345678
    END:VCARD
```

#### application/location 位置消息 用于交换位置信息。

```json
"m":{
  "ctime":<create time>,
  "uuid":<uuid of this msg>,
  "MIMETYPE":"application/location",
  "meta":{
          "location":"{
               "name":"地址名称",
               "address":"详细地址",
               "latitude": "",
               "longitude": ""
          }
  }
}
```

#### application/pay-redenvelope 红包消息, 用于红包发送。

```json

"m":{
 "ctime": "long, <create time>",
 "uuid": "string, <uuid of this msg>",
 "MIMETYPE": "application/redenvelope",
 "meta": {
   "outTradeNo": "订单号",
   "bizType": "00/01",
   "amount": "金额"
   "result": "S/F"
   "result_msg": "结果信息"
  }
}
```

#### application/pay-redenvelope-receipt 红包回执消息, 用于反馈哪些用户抢了该红包。

```json
"m":{
 "ctime": "long, <create time>",
 "uuid": "string, <uuid of this msg>",
 "MIMETYPE": "application/redenvelope-receipt",
 "meta": {
     "outTradeNo": "订单号",
     "bizType": "00/01",
     "amount": "金额"
     "result": "S/F"
     "result_msg": "结果信息"
  }
}
注：createHid 等于grabHid为自己抢自己红包
```

#### application/pay-transfer 转账消息

```json
"m":{
  "ctime":<create time>,
  "uuid":<uuid of this msg>,
  "MIMETYPE":"application/transfer",
  "meta": {
     "payeeUid": "86228329095747431",
     "notify_time": "20191217231317",
     "notifyType": "031",
     "payerUid": "8697272468440356",
     "_input_charset": "UTF-8",
     "billId": "P33250",
     "outTradeNo": "B996B4AF-DC08-4C48-A01C-DD91DD5EC94D",
     "showFields": "[{\"content\":{\"name\":\"Status\",\"type\":\"String\",\"value\":\"Pay Success\"},\"key\":\"status\"},{\"content\":{\"name\":\"To\",\"type\":\"ToTok\",\"value\":\"86228329095747431\"},\"key\":\"transferTo\"},{\"content\":{\"name\":\"Order Number\",\"type\":\"String\",\"value\":\"136609991425091992\"},\"key\":\"orderNumber\"},{\"content\":{\"name\":\"Time\",\"type\":\"Date\",\"value\":1576609997818},\"key\":\"time\"}]",
     "fixedContents": "[{\"content\":{\"name\":\"Transfer\",\"type\":\"String\",\"value\":\"Transfer\"},\"key\":\"transferTitle\"},{\"content\":{\"name\":\"AED\",\"type\":\"Money\",\"value\":1800.00},\"key\":\"amount\"}]",
     "notify_id": "201912170000131291"
   }
}
```

#### application/pay-balance-change 钱包提醒消息

```json
"m": {
  "ctime": 1576609998021,
  "stime": 1576609998021,
  "uuid": "16a115e4-0cce-44d0-a9e6-c25d51016f8b",
  "MIMETYPE": "application/balance-change",
  "receipt": 9,
  "meta": {
    "payeeUid": "86228329095747431",
    "notify_time": "20191217231317",
    "notifyType": "031",
    "payerUid": "8697272468440356",
    "_input_charset": "UTF-8",
    "billId": "P33250",
    "outTradeNo": "B996B4AF-DC08-4C48-A01C-DD91DD5EC94D",
    "showFields": "[{\"content\":{\"name\":\"Status\",\"type\":\"String\",\"value\":\"Pay Success\"},\"key\":\"status\"},{\"content\":{\"name\":\"To\",\"type\":\"ToTok\",\"value\":\"86228329095747431\"},\"key\":\"transferTo\"},{\"content\":{\"name\":\"Order Number\",\"type\":\"String\",\"value\":\"136609991425091992\"},\"key\":\"orderNumber\"},{\"content\":{\"name\":\"Time\",\"type\":\"Date\",\"value\":1576609997818},\"key\":\"time\"}]",
    "fixedContents": "[{\"content\":{\"name\":\"Transfer\",\"type\":\"String\",\"value\":\"Transfer\"},\"key\":\"transferTitle\"},{\"content\":{\"name\":\"AED\",\"type\":\"Money\",\"value\":1800.00},\"key\":\"amount\"}]",
    "notify_id": "201912170000131291"
  }
}
```

#### application/pay-payment-operate 钱包操作提醒消息

```json
"m": {
  "ctime": 1576609998021,
  "stime": 1576609998021,
  "uuid": "16a115e4-0cce-44d0-a9e6-c25d51016f8b",
  "MIMETYPE": "application/payment-operate",
  "receipt": 9,
  "meta": {
    "notifyType":"MODIFY_PAY_PWD",
    "operatorUid": "123456",
    "fixedContents"[]
  }
}
```

#### application/yeecontract 合约提醒消息

```json
"m":{
  "ctime":<create time>,
  "uuid":<uuid of this msg>,
  "MIMETYPE":"application/yeecontract",
  "meta":{
    "message":"",//为空使用客户端的值，不为空用服务端下发的数据
    "type": "BUY/SELL",//合约类型
    "symbol":<合约币种>,
    "token":<合约oken唯一标识>,
    "amount":<合约金额>,
  }
}
```

#### application/yeearbitration 仲裁提醒消息

```json
"m":{
  "ctime":<create time>,
  "uuid":<uuid of this msg>,
  "MIMETYPE":"application/yeearbitration",
  "meta":{
    "token"：申述号，64 UUID构成
    "symbol”：申述关联合约中的币种
    "amount'：申述关联合约中的币种数量
    "message'：申述条款
    “state”:申述状态
    “contractToken”:"关联合约号"
    "fromHid":合约甲方Hid
    “toHid"：合约乙方Hid
    "arbitratorHid:"仲裁员Hid"
  }
}
```

#### application/deposit-change 充值变动消息

```json
"m":{
  "ctime":<create time>,
  "uuid":<uuid of this msg>,
  "MIMETYPE":"application/deposit-change",
  "meta":{
    "symbol”：币种类型
    "amount'：币种金额
    “status”:ACK/GOING/FAILED,
    "token":""
  }
}
```

#### application/otc-order

```json
{
  "m":{
    "ctime":<create time>,
    "uuid":<uuid of this msg>,
    "MIMETYPE":"application/otc-order",
    "meta":{
      "token":<"9d054268*9aee*41da*ab06*058d08aae059",OTC挂单token>
      "cTime":<1528946693556,服务器时间>
      "name":<"OTCOrderStateChange",事件名称>
      "status":<"ESTABLISHED",OTC挂单当前状态>
      "action":<"ACCEPT"//触发动作>
    }
  }
}
```

#### application/otc-contract

```json
{
  "m":{
    "ctime":<create time>,
    "uuid":<uuid of this msg>,
    "MIMETYPE":"application/otc-contract",
    "meta":{
      "createHid":<"AAAH1rkyUmI",//推送者hid>
      "receiveHid":<"AAAH1XqeLWk",//群hid>
      "token":<"9d054268*9aee*41da*ab06*058d08aae059",合约token>
      "cTime":<1528946693556,触发时间>
      "trigger":<AAAH1XqeLWk,事件触发者Hid>
      "name":<"OTCContract",事件名称>
      "contractState":<"ESTABLISHED",合约当前状态>
      "action":<"ACCEPT"//触发动作>
      "fromHid":<合约发起者Hid,甲方>
      "toHid":<合约接受者Hid,乙方>
      "symbol":<otc 数字货币>,
      "currency":<otc法币>
      "token":<合约oken唯一标识>,
      "amount":<合约金额>,
      "currencyAmount":<法币总额>
    }
  }
}
```

#### application/arbitration

```json
{
  "m":{
    "ctime":<create time>,
    "uuid":<uuid of this msg>,
    "MIMETYPE":"application/arbitration",
    "meta":{
      "token"：<申述号，64 UUID构成,String>
      "symbol”<申述关联合约中的币种,>
      "amount'：<申述关联合约中的币种数量>
      "currency":<法币,CNY>
      "currencyAmount"：<法币总额>
      “contractToken”:<"关联合约号">
      "fromHid":<合约甲方Hid>
      “toHid":<合约乙方Hid>
      "arbitratorHid:"仲裁员Hid"
      "receiveHid":"AAAH1XqeLWk",//被推送者hid ==> 群HId

      "sTime":1528946693556,//触发时间
      "trigger":AAAH1XqeLWk,//事件触发者Hid
      "name":"UpdateArbitration",//事件名称
      "arbitrationState":"ESTABLISHED",//申述当前状态
      "action":"ARBITRATORREADY"//触发动作
    }
  }
}
```

#### application/otc-contract-event

```json
  {
    "m":{
      "ctime":<create time>,
      "uuid":<uuid of this msg>,
      "MIMETYPE":"application/otc-contract-event",
      "meta":{
        "createHid":<"AAAH1rkyUmI",//推送者hid>
        "receiveHid":<"AAAH1XqeLWk",//群hid>
        "token":<"9d054268*9aee*41da*ab06*058d08aae059",合约token>
        "cTime":<1528946693556,触发时间>
        "trigger":<AAAH1XqeLWk,事件触发者Hid>
        "name":<"OTCContract",事件名称>
        "contractState":<"ESTABLISHED",合约当前状态>
        "action":<"ACCEPT"//触发动作>
        "fromHid":<合约发起者Hid,甲方>
        "toHid":<合约接受者Hid,乙方>
        "symbol":<otc 数字货币>,
        "currency":<otc法币>
        "token":<合约oken唯一标识>,
        "amount":<合约金额>,
        "currencyAmount":<法币总额>
      }
    }
  }
```
 -->

### Notification

| Notification type                                                            | 说明                 |                                                                                                   |
| ---------------------------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| [Contact_Request](/note/newDate/ImDate?id=Contact_Request)                   | 好友请求             |                                                                                                   |
| [Contact_New](/note/newDate/ImDate?id=Contact_New)                           | 新增好友             |                                                                                                   |
| [Contact_New_E2EE_FRIEND](/note/newDate/ImDate?id=Contact_New_E2EE_FRIEND)   | 新增 e2e 好友        |                                                                                                   |
| [Contact_Del](/note/newDate/ImDate?id=Contact_Del)                           | 删除好友             |                                                                                                   |
| [Contact_Black](/note/newDate/ImDate?id=Contact_Black)                       | black 好友           |                                                                                                   |
| [Contact_Unblack](/note/newDate/ImDate?id=Contact_Unblack)                   | unblack 好友         |                                                                                                   |
| [Contact_Meeting_Invite](/note/newDate/ImDate?id=Contact_Meeting_Invite)     | 会议邀请好友         |                                                                                                   |
| [ProfileChanged](/note/newDate/ImDate?id=ProfileChanged)                     | profile 变更         |                                                                                                   |
| [ProfileNameChanged](/note/newDate/ImDate?id=ProfileNameChanged)             | profile 名称变更     |                                                                                                   |
| [ProfileSignChanged](/note/newDate/ImDate?id=ProfileSignChanged)             | profile 签名变更     |                                                                                                   |
| [ProfilePortraitChanged](/note/newDate/ImDate?id=ProfilePortraitChanged)     | profile 图像变更     |                                                                                                   |
| [StatusChanged](/note/newDate/ImDate?id=StatusChanged)                       | 用户状态变更         |                                                                                                   |
| [ReqListChanged](/note/newDate/ImDate?id=ReqListChanged)                     | 好友请求列表变更     |                                                                                                   |
| [MuteChanged](/note/newDate/ImDate?id=MuteChanged)                           | mute 变更            |                                                                                                   |
| [SilenceChanged](/note/newDate/ImDate?id=SilenceChanged)                     | 静音变更             |                                                                                                   |
| [TopChanged](/note/newDate/ImDate?id=TopChanged)                             | 置顶变更             |                                                                                                   |
| ~ReadChanged~                                                                | 已读变更             |                                                                                                   |
| [HistoryMsg_Removed](/note/newDate/ImDate?id=HistoryMsg_Removed)             | 会话消息同步         |                                                                                                   |
| [Contact_Enterprise_Add](/note/newDate/ImDate?id=Contact_Enterprise_Add)     | 企业添加成员         |                                                                                                   |
| [Contact_Enterprise_Kick](/note/newDate/ImDate?id=Contact_Enterprise_Kick)   | 企业移除成员         |
| [PlatformNotice](/note/newDate/ImDate?id=PlatformNotice)                     | 平台消息通知         |                                                                                                   |
| [ReadChanged](/note/newDate/ImDate?id=ReadChanged)                           | 会话已读             |                                                                                                   |
| [Meeting_List_Changed](/note/newDate/ImDate?id=Meeting_List_Changed)         | 会议列表信息变更     |                                                                                                   |
| [Account_Del](/note/newDate/ImDate?id=Account_Del)                           | 删除账号             | 同删除好友 Contact_Del 结构一致 type 不同                                                         |
| Enterprise_Member_Changed                                                    | 企业会员变更         | 修改前[Contact_New_E2EE_FRIEND](/note/newDate/ImDate?id=Contact_New_E2EE_FRIEND1)                 |
|                                                                              |                      | 修改后会员新增变动详情[Contact_New_E2EE_FRIEND](/note/newDate/ImDate?id=Contact_New_E2EE_FRIEND2) |
| [Idc_Offline_Notification](/note/newDate/ImDate?id=Idc_Offline_Notification) | 跨机房离线推送通知   |                                                                                                   |
| [Offline_Msg_End](/note/newDate/ImDate?id=Offline_Msg_End)                   | 离线消息最后一条标识 |                                                                                                   |
| [E2EE_Metting](/note/newDate/ImDate?id=E2EE_Metting)                         | E2EE 会议相关通知    |                                                                                                   |

```json
// 通知
{
  "c": "Notification",
  "f": <String value of from-user>, // +86001
  "t": <String value of to-user>, // +8668096709735160
  "l": <Integer value of ttl>, // 999999
  "expire": <Long value of calculated by ttl>, // 1603116332409
  "needAck": <Boolean value of ack>, // true
  "meTo": <String value of multi-endpoint-to-user>, // 8668096709735160#desktop
  "mcFrom": <String value of multi-corporation-from-user>, // 86-CN-0000001#86001
  "mcTo": <String value of multi-corporation-to-user>, // 86-CN-0000001#8668096709735160
  "m": {
    "ctime": <Long value of create-time>, // 1603116332409
    "stime": <Long value of server-time>, // 1603116332409
    "uuid": <String value of uuid>, // 585CE8FF-F2FC-4726-ACD3-D9B8D8D04501
    "type": <String value of type>, // Contact_New
    "body": { // 实际内容json， 可以反序列化到对应对象, 由业务方定义 // 注意之前的业务数据都放在body里面 是一个json 之后的业务数据json类型的都放在meta中 2022年5月17日
    }
    "meta": { // 实际内容json， 可以反序列化到对应对象, 由业务方定义
    }
  }
}
```

#### Contact_Request

```json
{
  "a": 5,
  "c": "Notification",
  "f": "+86001",
  "l": 5184000,
  "m": {
    "ctime": 1611159131700,
    "type": "Contact_Request",
    "uuid": "f98a4036-93d0-4ded-aedb-f884f6c602eb"
  },
  "mcTo": "UAE-971-1000000#97193982477335555",
  "meTo": "97193982477335555#desktop",
  "needAck": true,
  "t": "+97193982477335555"
}
```

#### Contact_New

```json
{
  "a": 5,
  "c": "Notification",
  "f": "+86001",
  "l": 5184000,
  "m": {
    "ctime": 1611158810974,
    "type": "Contact_New",
    "uuid": "a6bb79d7-7190-4d28-9926-ea390bcba173"
  },
  "mcTo": "UAE-971-1000000#1217625995821478",
  "meTo": "1217625995821478#desktop",
  "needAck": true,
  "t": "+1217625995821478"
}
```

#### Contact_New_E2EE_FRIEND

```json
{
  "a": 5,
  "c": "Notification",
  "expire": 1618039133833,
  "f": "AAAAAAABT_E",
  "l": 5184000,
  "m": {
    "ctime": 1612855133827,
    "type": "Contact_New_E2EE_FRIEND",
    "body": {
      "ver": 177,
      "by": {
        "type": "NumberSearch",
        "iminvitor": 0
      },
      "friendUid": 971170608991510000,
      "contacts": ["DXpKhf09HeM"],
      "key": {
        "desktop": {
          "signedPreKey": {
            "signature": "CwDi95paxO3IV2aAnuOG1AJqDKJ//PaiRpYqCpKOZ9M6l5Dm4e52fV/jALwqLE6CS+FKEW1/gmvIAklvqsjugQ==",
            "keyId": 8408506,
            "publicKey": "rpb71/FFsDOhYrBE46A8FFZMF39UR79YZX34L5rThA4="
          },
          "identityKey": "eRH2yHCxKhNw1+SNMMHVLe6JufMT6vdD9h9tRc7MgVg=",
          "registrationId": 8408506,
          "preKey": {},
          "ctime": "1611838386620",
          "did": "2"
        },
        "mobile": {
          "signedPreKey": {
            "signature": "SAvXNkVzf/yAlCrUv8lF2trOEM3cv2qY3l09lCDtdQ8zSRjPx3Vm8ssX0YgP4xa4NIaSkAUamkXfjLjOYQlBiw==",
            "keyId": 1949687284,
            "publicKey": "/X8yu1624sazyujuuzMMy//RFprlZIEHtpUo8dxMTkQ="
          },
          "identityKey": "udUG0PlLifK600mi3K1ogjU+87TeHqCDfJYtoEXAfQw=",
          "registrationId": 12693989,
          "preKey": {
            "keyId": 6631365,
            "publicKey": "UC8NijsXB59QJ85dZ9aNgs0JUU7IsJ3YtC7YzF7SIXw="
          },
          "ctime": "1612851093836",
          "did": "1"
        }
      },
      "triggeredBy": "971225653297998441"
    },
    "uuid": "eeb33eee-7d57-4ad3-9bc5-2a8bc91d5402"
  },
  "mcTo": "UAE-971-1000000#971170608991509987",
  "meTo": "971225653297998441#desktop",
  "needAck": true,
  "t": "DXp8lf2S6mk"
}
```

#### Contact_Del

```json

```

#### Contact_Black

```json
{
  "a": 5,
  "c": "Notification",
  "expire": 1675259885284,
  "f": "AAAAAAABT_E",
  "l": 5184000,
  "m": {
    "body": {
      "contacts": ["AB7TTZQ8djk"],
      "triggeredBy": "8676579454252601"
    },
    "ctime": 1670075885273,
    "type": "Contact_Black",
    "uuid": "42b6107e-1ace-4970-a552-9ad908e60617"
  },
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### Contact_Unblack

```json
{
  "a": 5,
  "c": "Notification",
  "expire": 1675259507786,
  "f": "AAAAAAABT_E",
  "l": 5184000,
  "m": {
    "body": {
      "contacts": ["AB7TTZQ8djk"],
      "triggeredBy": "86213902450255894"
    },
    "ctime": 1670075507781,
    "type": "Contact_Unblack",
    "uuid": "ca3c6656-7037-478f-8743-6a1f91998f9e"
  },
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### Contact_Meeting_Invite

```json

```

#### ProfileChanged

```json

```

#### ProfileNameChanged

```json

```

#### ProfileSignChanged

```json

```

#### ProfilePortraitChanged

```json

```

#### StatusChanged

```json

```

#### ReqListChanged

```json

```

#### MuteChanged

```json

```

#### SilenceChanged

```json

```

#### TopChanged

```json

```

#### Contact_Enterprise_Add

```json

```

#### Contact_Enterprise_Kick

```json

```

#### Account_Del

```json

```

#### HistoryMsg_Removed

```json
{
  "mcTo": "UAE-971-0000001#971223462861216653",
  "c": "Notification",
  "t": "+971223462861216653",
  "mcFrom": "UAE-971-0000001#86001",
  "f": "+86001",
  "m": {
    "ctime": 1611220486220,
    "type": "HistoryMsg_Removed",
    "body": {
      "stime": 1611220485804,
      "tid": "+97186079735205168",
      "uuids": []
    },
    "uuid": "e6859563-b95d-4b64-81ad-100818899bcc"
  }
}
```

#### PlatformNotice

```json
{
  "mcTo": "UAE-971-0000001#971223462861216653",
  "c": "Notification",
  "t": "+971223462861216653",
  "mcFrom": "UAE-971-0000001#86001",
  "f": "+86001",
  "m": {
    "ctime": 1611220486220,
    "type": "PlatformNotice",
    "body": {
      "id": "627dcea18dfaa82d24d9dd6892130bc8",
      //uuid
      "expiration": "", // 过期时间
      "shortMessage": "这是个通知简短描述,其实什么故障都没有",
      "hyperLink": true, // 是否有超链接 true/false
      "hyperLinkUrl": "https://www.matrx.work/notice?id=xxxx" // #域名根据不同环境自动生成
    },
    "uuid": "e6859563-b95d-4b64-81ad-100818899bcc"
  }
}
```

#### ReadChanged

```json
{
  "meTo": "65112090087043925#mobile",
  "mcTo": "UAE-971-6912062100#65112090087043925",
  "c": "Notification",
  "t": "+65112090087043925",
  "f": "+86001",
  "ctime": "1614761719457",
  "m": {
    "ctime": "1614761719448",
    "type": "ReadChanged",
    "body": {
      "read": "1",
      "trigger": 65112090087043925,
      "readtime": "1614761719448",
      "conversation": "65112090087043925|80265100025101"
    },
    "uuid": "685bafed-7412-45b9-9194-7ce0fde5b044"
  }
}
{
  "a": 5,
  "c": "Notification",
  "expire": 1678776137339,
  "f": "AAAAAAABT_E",
  "l": 5184000,
  "m": {
    "body": {
      "conversation": "86213902450255894|8029719081419190100",
      "read": "1",
      "readtime": "1673592137332",
      "trigger": "86213902450255894",
    },
    "ctime": 1673592137335,
    "type": "ReadChanged",
    "uuid": "fb3000bd-e35a-4da8-a9c3-a94aa40404a5",
  },
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### Meeting_List_Changed

```json
{
  "a": 5,
  "c": "Notification",
  "expire": 1675259115766,
  "f": "AAAAAAAO0Pk",
  "l": 5184000,
  "m": {
    "body": {
      "mId": "2156657370",
      "opType": "end",
      "uid": "86213902450255894"
    },
    "ctime": 1670075115758,
    "type": "Meeting_List_Changed",
    "uuid": "31911d81-7fcf-43f5-9194-25c4ad6b56ea"
  },
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### Contact_New_E2EE_FRIEND1

```json
{
  "c": "Notification",
  "f": "+971001",
  "t": "+77472639406824",
  "meTo": "77472639406824#desktop",
  "mcTo": "UAE-971-6017606#77472639406824",
  "l": 5183350,
  "a": 5,
  "expire": 1640966088603,
  "needAck": true,
  "m": {
    "ctime": 1635401932618,
    "uuid": "04f93939-441c-4bcd-b9d8-10cf25919fa1",
    "type": "Enterprise_Member_Changed",
    "body": {
      "id": "UAE-971-6017606"
    }
  }
}
```

#### Contact_New_E2EE_FRIEND2

```json
{
  "c": "Notification",
  "f": "+971001",
  "t": "+77472639406824",
  "meTo": "77472639406824#desktop",
  "mcTo": "UAE-971-6017606#77472639406824",
  "l": 5183350,
  "a": 5,
  "expire": 1640966088603,
  "needAck": true,
  "m": {
    "ctime": 1635401932618,
    "uuid": "04f93939-441c-4bcd-b9d8-10cf25919fa1",
    "type": "Enterprise_Member_Changed",
    "body": {
      "id": "UAE-971-6017606",
      "addUsers": ["uid1", "uid2"],
      "delUsers": ["uid3", "uid4"]
    }
  }
}
```

#### Idc_Offline_Notification

```json
{
  "c":"Notification",
  "f":"xxxxxx",
  "t":"+77472639406824",
  "mcTo":"EnterpriseId#77472639406824",
  "meTo":"77472639406824#mobile"
  "l":5183350,
  "a":5,
  "expire":1640966088603,
  "needAck":true,
  "m":{
    "ctime":1635401932618,
    "uuid":"04f93939-441c-4bcd-b9d8-10cf25919fa1",
    "type":"Idc_Offline_Notification",
    "body":{
      "enterpriseId":"企业id",
      "enterpriseName":"企业名称"
    }
  }
}
```

#### Offline_Msg_End

```json
{
  "a": 5,
  "c": "Notification",
  "expire": 1675258831805,
  "f": "AAAAAAAMWJY",
  "l": 5184000,
  "m": {
    "ctime": 1670074831800,
    "type": "Offline_Msg_End",
    "uuid": "c9b1edc7-f3ec-48c0-8f84-aca9ccb3913f"
  },
  "mcTo": "UAE-971-1000000#86213902450255894",
  "meTo": "86213902450255894#desktop",
  "needAck": true,
  "t": "ATJLFmY_aBY"
}
```

#### E2EE_Metting

```json
{
  "a": 5,
  "c": "Notification",
  "expire": 1618039133833,
  "f": "+809111",
  "l": 5184000,
  "m": {
    "si": 1,
    "ctime": 1612855133827,
    "type": "E2EE_Metting",
    "body": "",
    "meta": {
      "func": "meeting_apply_join",
      "uid": "97123457681"
    },
    "uuid": "eeb33eee-7d57-4ad3-9bc5-2a8bc91d5402"
  },
  "mcTo": "UAE-971-1000000#971170608991509987",
  "meTo": "971225653297998441#desktop",
  "needAck": true,
  "t": "+971170608991509987"
}
```

### Event

| Event name                                                                 | 说明                                                        |
| -------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [GroupCreate](/note/newDate/ImDate?id=GroupCreate)                         | 新建群                                                      |
| [GroupAdd](/note/newDate/ImDate?id=GroupAdd)                               | 群添加成员                                                  |
| [GroupKick](/note/newDate/ImDate?id=GroupKick)                             | 群移除成员                                                  |
| [GroupLeave](/note/newDate/ImDate?id=GroupLeave)                           | 成员离开群                                                  |
| [GroupDismiss](/note/newDate/ImDate?id=GroupDismiss)                       | 群解散（一人一群离开群, 群 UserFriend 不会删除 Group 记录） |
| [GroupOwnerChange](/note/newDate/ImDate?id=GroupOwnerChange)               | 群 owner 变更                                               |
| [GroupNameChange](/note/newDate/ImDate?id=GroupNameChange)                 | 群 name 变更                                                |
| [GroupDescribeChange](/note/newDate/ImDate?id=GroupDescribeChange)         | 群详情变更                                                  |
| [GroupMemberDetailChange](/note/newDate/ImDate?id=GroupMemberDetailChange) | 群成员变更                                                  |
| [GroupUnLink](/note/newDate/ImDate?id=GroupUnLink)                         | 离开企业离开群                                              |
| ~GroupLimitChange~                                                         | 群上限变更 废弃                                             |
| ~GroupOneCreate~                                                           | 一对一建群 废弃                                             |
| ~GroupInnerReloadMember~                                                   | 废弃                                                        |

```json
// 群事件
{
  "c": "Event",
  "f": <String value of from-user>, // +86001
  "t": <String value of to-user>, // +8668096709735160
  "l": <Integer value of ttl>, // 999999
  "expire": <Long value of calculated by ttl>, // 1603116332409
  "needAck": <Boolean value of ack>, // true
  "meTo": <String value of multi-endpoint-to-user>, // 8668096709735160#desktop
  "mcFrom": <String value of multi-corporation-from-user>, // 86-CN-0000001#86001
  "mcTo": <String value of multi-corporation-to-user>, // 86-CN-0000001#8668096709735160
  "m": {
    "etime": <Long value of event-time>, // 1603116332409
    "stime": <Long value of server-time>, // 1603116332409
    "uuid": <String value of uuid>, // 585CE8FF-F2FC-4726-ACD3-D9B8D8D04501
    "name": <String value of action name>, // GroupCreate
    "users": [<hid list>],
    //根据指令不同，可以不出现
    "info": {实际内容json， 可以反序列化到对应对象, 由业务方定义},
    //根据指令不同，内容不同
    "trigger": <same as s (if s ne f )，otherwise is same as f>
  }
}
```

#### GroupCreate

```json
{
  "a": 5,
  "c": "Event",
  "f": "+8029711735418657100",
  "l": 5184000,
  "m": {
    "etime": 1635513744298,
    "name": "GroupCreate",
    "stime": 1635513744362,
    "trigger": 971225653297998441,
    "uuid": "b3db9932-6041-4789-9cbd-d48f6022b7a5|GDXpwt_0R8gk",
    "users": ["DXp8lf2S6mk", "DXpwt_0R8gk"],
    "info": {
      "DXpwt_0R8gk": {
        "name": "Jianhua Meng 主账号"
      },
      "e2e": false,
      "DXp8lf2S6mk": {
        "name": "zhixiong li1"
      }
    }
  },
  "mcFrom": "UAE-971-0000001#8029711735418657100",
  "mcTo": "UAE-971-0000001#971212605178901001",
  "meTo": "971212605178901001#desktop",
  "needAck": true,
  "s": "+971225653297998441",
  "t": "+971212605178901001"
}
```

#### GroupAdd

```json
// 群添加成员
{
  "c": "Event",
  "f": "+8029711735418657100",
  "t": "+971212605178901001",
  "meTo": "971212605178901001#mobile",
  "mcFrom": "UAE-971-0000001#8029711735418657100",
  "mcTo": "UAE-971-0000001#971212605178901001",
  "l": 5184000,
  "knownIfToOff": false,
  "expire": 1640697744431,
  "needAck": true,
  "s": "+8029711735418657100",
  "m": {
    "uuid": "963a5723-fc74-4646-b34d-55439651d990|GDXpwt_0R8gk",
    "name": "GroupAdd",
    "users": ["DXpwt_0R8gk"],
    "etime": 1635513744412,
    "trigger": 971225653297998441,
    "stime": 1635513744412
  }
}
```

#### GroupKick

```json
// 群移除成员
{
  "a": 5,
  "c": "Event",
  "expire": 1640697753019,
  "f": "+8029711735418657100",
  "knownIfToOff": false,
  "l": 5184000,
  "m": {
    "etime": 1635513753018,
    "name": "GroupKick",
    "stime": 1635513753018,
    "trigger": 971225653297998441,
    "uuid": "23045eea-f330-4f9b-96c6-b9b9bfd0f6c6|GDXp8lf2S6mk",
    "users": ["DXpwt_0R8gk"]
  },
  "mcFrom": "UAE-971-0000001#8029711735418657100",
  "mcTo": "UAE-971-0000001#971225653297998441",
  "meTo": "971225653297998441#desktop",
  "needAck": true,
  "s": "+8029711735418657100",
  "t": "+971225653297998441"
}
```

#### GroupLeave

```json
// 成员离开群
{
  "c": "Event",
  "f": "+8029713621872669100",
  "t": "+971222891625947791",
  "meTo": "971222891625947791#desktop",
  "mcFrom": "UAE-971-0000001#8029713621872669100",
  "mcTo": "UAE-971-0000001#971222891625947791",
  "l": 4999073,
  "a": 5,
  "expire": 1640659559046,
  "needAck": true,
  "s": "+8029713621872669100",
  "m": {
    "uuid": "62fda37d-bb9e-48e2-8b50-3ee248b4e5a2|GDXp6Ev0Xoo8",
    "name": "GroupLeave",
    "users": ["DXo8lP_pRHk"],
    "etime": 1635475398472,
    "trigger": 971155280298067065,
    "stime": 1635475398472
  }
}
```

#### GroupDismiss

```json
// 群解散（一人一群离开群, 群UserFriend不会删除Group记录）
{
  "c": "Event",
  "f": "+802971100074100",
  "t": "+802971100074100",
  "mcFrom": "UAE-971-1000000#802971100074100",
  "l": 5184000,
  "needAck": true,
  "m": {
    "uuid": "0048bfd1-b91a-4145-a6ee-28bbd080acb1",
    "name": "GroupDismiss",
    "users": ["DXpXE_z8f0c"],
    "etime": 1635665407500,
    "trigger": 971184413012164423,
    "stime": 1635665407500
  }
}
```

#### GroupOwnerChange

```json
// 群owner变更
{
  "c": "Event",
  "f": "+8029714187927662100",
  "t": "+8029714187927662100",
  "mcFrom": "UAE-971-1000000#8029714187927662100",
  "l": 5184000,
  "needAck": true,
  "m": {
    "uuid": "48efe1eb-5008-4ba5-8f07-c5b1b2565dc1",
    "name": "GroupOwnerChange",
    "users": ["C9NzHmSqsvA"],
    "etime": 1635665192048,
    "trigger": 971184413012164423,
    "stime": 1635665192048
  }
}
```

#### GroupNameChange

```json
// 群name变更
{
  "c": "Event",
  "f": "+8029714187927662100",
  "t": "+8029714187927662100",
  "mcFrom": "UAE-971-1000000#8029714187927662100",
  "l": 5184000,
  "needAck": true,
  "m": {
    "uuid": "2e7c8d35-70e8-4c53-b77a-4331a393092e",
    "name": "GroupNameChange",
    "etime": 1635665021017,
    "trigger": 971184413012164423,
    "info": {
      "name": "77778"
    },
    "stime": 1635665021017
  }
}
```

#### GroupDescribeChange

```json
// 群详情变更
{
  "c": "Event",
  "f": "+8029714187927662100",
  "t": "+8029714187927662100",
  "mcFrom": "UAE-971-1000000#8029714187927662100",
  "l": 5184000,
  "needAck": true,
  "m": {
    "uuid": "7b57f6a7-09bf-4fc7-9594-df8b50a41f05",
    "name": "GroupDescribeChange",
    "etime": 1635665021017,
    "trigger": 971184413012164423,
    "info": {
      "sig": null
    },
    "stime": 1635665021017
  }
}
```

#### GroupMemberDetailChange

```json
// 群成员变更
{
  "c": "Event",
  "f": "+80286982320173100",
  "t": "+80286982320173100",
  "mcFrom": "UAE-971-0000001#80286982320173100",
  "l": 5184000,
  "needAck": true,
  "m": {
    "uuid": "620dc9cd-4484-47fe-864c-f933b3d3dca6",
    "name": "GroupMemberDetailChange",
    "users": ["AVlBaYCR7AM"],
    "etime": 1635661919292,
    "trigger": 97180788349594627,
    "info": {
      "noDisturb": 0
    },
    "stime": 1635661919292
  }
}
```

#### GroupUnLink

```json
// 离开企业离开群
{
  "c": "Event",
  "f": "+8029713621872669100",
  "t": "+86185482470085021",
  "meTo": "86185482470085021#mobile",
  "mcFrom": "UAE-971-0000001#8029713621872669100",
  "mcTo": "UAE-971-0000001#86185482470085021",
  "l": 2307456,
  "expire": 1637828449697,
  "needAck": true,
  "s": "+8029713621872669100",
  "m": {
    "uuid": "c14dbba7-b942-4c6c-af1d-c01fe031bbf1|GATIxPVts0Z0",
    "name": "GroupUnLink",
    "users": ["ATJgYl5rdQA"],
    "etime": 1632644420395,
    "trigger": 86237318480622848,
    "stime": 1632644420395
  }
}
```

### PushReg

```json
// 注册连接
{
  "c": "PushReg",
  "f": <String value of from-user>,
  "meFrom": <String value of multi-endpoint-from-user>,
  "m": {
    "rid": <rid>,
    "ck": <验证串>,
    "key": <密钥串>,
    "pub": <HEX(sha1 of pubkey)>,
    "ts": <PushReg的时间>
    "ver": <vercode>,
    "loc": <Lang&Locate>,
    "net": <network-type>,
    "hash": "<push key hash>"
    "info": {
      "model": <hardware model>,
      "os": <android/ios/mac/windows>,
      "osver": <operating system version>,
      "clientver": "<client app version>",
      "pkg": <package-name>
      "bssid": "xxxx",
      "apn": "xxxx",
      "reason": "<previous disconnect reason>",
      "extPushType": <3rd-party-push type. gcm/mipush/apns/...>
      ...
    },
    "padding": <1-64字节padding>
  }
}
```

### PullDetail

```json
// 拉取历史消息
{
  "c": "PullDetail",
  "f": <String value of from-user>,
  "meFrom": <String value of multi-endpoint-from-user>,
  "mcFrom": <String value of multi-corporation-from-user>,
  "expire": 1608903290194,
  "l": 5184000,
  "m": {
    "count": 20,
    "direction": 0,
    "eTS": 0,
    "ignoreReciept": 0,
    "reqId": "",
    "sTS": 1603719281752,
    "tid": ""
  }
}
```

### ForceClose

```json
// 强制关闭连接
{
  "c": "ForceClose",
  "t": <String value of to-user>,
  "meTo": <String value of multi-endpoint-to-user>,
  "m": {
    "type": <String value of type>,
    "rid": <String value of changed_to_rid>,
    "by": <String value of by Register/ResetPassword/Login/Logout/Eject>,
    "model": <String value of model>,
    "ip": <String value of ip>,
    "time": <Long value of change save time>,
    "until": <Eject until time. java timestamp. only in Eject>
  }
}
```

| ForceClose type     | 说明                                          |
| ------------------- | --------------------------------------------- |
| RID_CHANGE          | 退出登录，客户端收到此类型信令需要重新登录    |
| KICK_USER           | 强踢用户，客户端收到此类型信令需要 RECONNECT  |
| FORCE_LOGOUT        | 退出登录，踢出用户到登录界面                  |
| FORCE_LOGOUT_DELETE | 退出登录，踢出用户到登录界面,同时删除用户数据 |

### StateReport

```json
{
"c":"StateReport",
"f":<from>,
"m":{
    "foreground":<0/1>,  //是否处于前台
    "isUnderVPN":<0/1>,  //是否在VPN下
    "info":{
      "netdev":["en0","ipsec0","ppp0","tun0"],
    } //map that contains other info
  }
}
```

```json
{
  "m": {
    "background": 0,
    "info": {
      "netdev": ["en0"]
    },
    "isUnderVPN": 0
  },
  "noDisturb": false,
  "c": "StateReport",
  "isSyncFrom": false,
  "f": "+97173409586436413"
}
```

## 相关文档

[Push 消息协议](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=20647142)
[Push 通道加密升级](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=3966163)
[win 端 push 协议升级](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=20647446)

[a]: /note/newDate/variableName?id=a "通话类型1. 普通通话，2. 多媒体通话（预留）3. 地图通话，4. 涂鸦通话，5. 消息 6. 联系人 7.视频通话"
[binarypart]: /note/newDate/variableName?id=binaryPart "数据流"
[c]: /note/newDate/variableName?id=c "消息类型 HyperText、Notification、Event、PushReg、PullDetail、ForceClose、StateReport"
[expire]: /note/newDate/variableName?id=expire "生存时间值"
[f]: /note/newDate/variableName?id=f "发送方Id"
[knowniftooff]: /note/newDate/variableName?id=knownIfToOff "123"
[issyncfrom]: /note/newDate/variableName?id=isSyncFrom "123"
[l]: /note/newDate/variableName?id=l "生存时间整数"
[m]: /note/newDate/variableName?id=m "消息体主体"
[mimetype]: /note/newDate/variableName?id=MIMETYPE "协议类别"
[body]: /note/newDate/variableName?id=body "文本主体 vcard文本/文件内容。UTF8编码"
[ctime]: /note/newDate/variableName?id=ctime "端时间戳"
[deviceid]: /note/newDate/variableName?id=deviceId "设备ID 2 win 0 ios"
[flags]: /note/newDate/variableName?id=flags "端设备类型 22 win 11 ios"
[ise2ee]: /note/newDate/variableName?id=isE2EE "是否E2E"
[meta]: /note/newDate/variableName?id=meta "媒体信息"
[contactuid]: /note/newDate/variableName?id=contactUid "联系人卡片用户ID"
[codec]: /note/newDate/variableName?id=codec "语言编码"
[duration]: /note/newDate/variableName?id=duration "语音时长"
[maxframe]: /note/newDate/variableName?id=maxframe "语音最大值"
[nickname]: /note/newDate/variableName?id=nickName "联系人卡片用户名"
[download]: /note/newDate/variableName?id=download "文件信息详情"
[fid]: /note/newDate/variableName?id=fid "<url失效后向PFM取下载地址时带的参数>"
[sha256]: /note/newDate/variableName?id=sha256 "MD5"
[size]: /note/newDate/variableName?id=size "文件大小"
[url]: /note/newDate/variableName?id=url "缓存链接"
[filename]: /note/newDate/variableName?id=filename "文件名称"
[h]: /note/newDate/variableName?id=h "图片高度"
[hmackey]: /note/newDate/variableName?id=hmacKey "HMAC-SHA256 的Key"
[ikey]: /note/newDate/variableName?id=iKey "文件加密的Key"
[pinnedinfo]: /note/newDate/variableName?id=pinnedInfo "Pin 信息详情"
[operation]: /note/newDate/variableName?id=operation "123"
[pname]: /note/newDate/variableName?id=pname "发送Pin用户名"
[ptime]: /note/newDate/variableName?id=ptime "发送Pin服务端时间戳"
[stime]: /note/newDate/variableName?id=stime "发送Pin端时间戳"
[uuid]: /note/newDate/variableName?id=uuid "标记Pin消息ID"
[isorigin]: /note/newDate/variableName?id=isOrigin "<0/1>"
[originsha256]: /note/newDate/variableName?id=originSha256 "123"
[origuuid]: /note/newDate/variableName?id=origUUID "已读回执-消息ID"
[origmimetype]: /note/newDate/variableName?id=origMimeType "已读消息类型"
[receiptinfo]: /note/newDate/variableName?id=receiptInfo "已读回执信息块"
[rstime]: /note/newDate/variableName?id=rstime "已读时间戳"
[ruuid]: /note/newDate/variableName?id=ruuid "已读的消息ID"
[type]: /note/newDate/variableName?id=type "123"
[w]: /note/newDate/variableName?id=w "图片宽度"
[stickerrepliedinfo]: /note/newDate/variableName?id=stickerRepliedInfo "<类型>/[<系列ID>/<系列内排序位置>/]<唯一ID>, 必须，否则丢弃消息"
[operation]: /note/newDate/variableName?id=operation "123"
[rname]: /note/newDate/variableName?id=rname "发送表情用户名"
[rtime]: /note/newDate/variableName?id=rtime "发送表情时间戳"
[sticker]: /note/newDate/variableName?id=sticker "表情内容"
[uuid]: /note/newDate/variableName?id=uuid "发送表情-消息ID"
[nf]: /note/newDate/variableName?id=nf "若是收费图片，此处为1，表示不可转发"
[receipt]: /note/newDate/variableName?id=receipt "是否已读 禁用"
[si]: /note/newDate/variableName?id=si "123"
[stime]: /note/newDate/variableName?id=stime "服务端时间戳"
[uuid]: /note/newDate/variableName?id=uuid "消息ID"
[mcfrom]: /note/newDate/variableName?id=mcFrom "空间ID#发送方"
[mcto]: /note/newDate/variableName?id=mcTo "空间ID#接收方"
[mefrom]: /note/newDate/variableName?id=meFrom "发送方#端"
[meto]: /note/newDate/variableName?id=meTo "接收方#端"
[needack]: /note/newDate/variableName?id=needAck "ack"
[nodisturb]: /note/newDate/variableName?id=noDisturb "第三方推送"
[s]: /note/newDate/variableName?id=s "用户id"
[t]: /note/newDate/variableName?id=t "接收方id"
