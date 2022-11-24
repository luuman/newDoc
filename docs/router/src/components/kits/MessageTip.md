# MessageTip 聊天列表 最近消息提示

## 定义

```
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

| 变量              | 描述                  | 关联       |
| ----------------- | --------------------- | ---------- |
| [props]()         |                       |            |
| msg               | 消息                  |            |
| existat           | 是否未读              |            |
| draft             |                       |            |
| [data]()          |                       |            |
| hid               | 个人 ID               | userInfo   |
| isCallMe          | 是否有@me             |            |
| [watch]()         |                       |            |
| isCallMe          | existat 重置 isCallMe | existat    |
| [computed]()      |                       |            |
| isFail            | 是否发送失败          |            |
| existatText       | @文案                 |            |
| MIMETYPE          | 消息类型              | msg        |
| [methods]()       |                       |            |
| efailed           | 表示失败意思          | msg.isStar |
| nameTxtYou        |                       |            |
| nameTxt           |                       |            |
| mettinginvite     |                       |            |
| mettingcard       |                       |            |
| voiceMsg          |                       |            |
| filename          |                       |            |
| getRestrictedText |                       |            |
| imagename         |                       |            |
| two               |                       |            |
| recordtxt         |                       |            |
| showDuration      | 是否需求成员列表      |            |

| 变量         | 值                     | 描述       | 内容                            |
| ------------ | ---------------------- | ---------- | ------------------------------- |
| MIMETYPE     | text/vcard             | 联系人卡片 | \<nameTxt>[Contact Card]        |
| MIMETYPE     | application/withdraw   | 删除       | \<nameTxtYou> deleted a message |
| MIMETYPE     | meeting/invite         | 会议邀请   | \<nameTxt>\<mettinginvite>      |
| MIMETYPE     | meeting/card           | 会议卡片   | \<mettingcard>                  |
| MIMETYPE     | call/record            |            | \<nameTxt>\<recordtxt>          |
| MIMETYPE     | application/restricted |            | \<nameTxt>\<getRestrictedText>  |
| MIMETYPE     | \image\                | 图片       | \<nameTxt>\<imagename>          |
| MIMETYPE     | audio/voice-msg        | 语言       | \<voiceMsg>                     |
| c            | E2EKeyChange           |            |                                 |
| filelisttype | 2                      | 文件名称   | \<filename>                     |
| else         |                        | 其他       | \<nameTxt>                      |
