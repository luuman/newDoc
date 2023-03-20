# 消息类型

## HyperText：消息

| 图片文件类型                | 消息              |
| :-------------------------- | :---------------- |
| text/plain                  | 文本类型消息      |
| image/                      | 图片类型消息      |
| application/eliminate       | 表情类型消息      |
| application/withdraw        | 删除/撤回类型消息 |
| application/receipt         | 回执类型消息      |
| application/sticker-replied | 表情回复类型消息  |
|                             |                   |
| meeting/invite              | 会议邀请          |
| text/vcard                  | 名片              |
| call/record                 | 名片              |
| application/pin             | pin               |
| application/eliminate       | 被动撤回消息      |
| application/receipt/count   | 消息回执          |
| meeting/card                | 会议助手消息通知  |
| application/restricted      | 消息回执          |
| audio/voice-msg             | 语音              |
| application/sticker         | 表情（疑似废弃）  |
| x-filetransfer/octet-stream | 文件              |

| Type                        | name              |
| :-------------------------- | :---------------- |
| text/plain                  | TXT               |
| image/jpeg                  | Picture           |
| image/webp                  | Picture           |
| image/jpg                   | Picture           |
| image/gif                   | Picture           |
| image/png                   | Picture           |
| image/bmp                   | Picture           |
| audio/voice-msg             | voice message     |
| text/vcard                  | Name Card         |
| meeting/card                | Meeting Card      |
| meeting/invite              | Meeting Invite    |
| text/richurl-x              | Link              |
| text/richurl                | Link              |
| x-filetransfer/octet-stream | File              |
| application/sticker         | Emoji             |
| application/alarm           | Calendar          |
| application/receipt         | Receipt           |
| application/receipt/count   | Receipt           |
| application/eliminate       | 表情类型消息      |
| application/withdraw        | 删除/撤回类型消息 |
| application/sticker-replied | 表情回复类型消息  |
| application/pin             | pin               |
| application/restricted      | 未知              |

<!-- tabs:start -->

#### **文本**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663405271521,
    // f: "AS7UqtfC1EM",
    // l: 5184000,
    m: {
      MIMETYPE: "text/plain",
      flags: 22,
      nf: 0,
      ctime: 1658221271523,
      receipt: 9,
      stime: 1658221271521,
      body: "大法师打 dsaf",
      uuid: "55dcb630-0741-11ed-b5b2-75f3bd1dc9f3"
    }
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    // t: "C9NxC2WGCxY"
  }
];
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663412115483,
    // f: "b2sSrKJ8i1w",
    knownIfToOff: false,
    // l: 5184000,
    m: {
      MIMETYPE: "text/plain",
      nf: 0,
      flags: 22,
      ctime: 1658228115478,
      stime: 1658228115466,
      receipt: 9,
      body: "dfesa",
      uuid: "45280730-0751-11ed-a940-5fef2a48c687|GC9NxC2WGCxY"
    },
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    s: "AS7UqtfC1EM"
    // t: "C9NxC2WGCxY"
  }
];
```

#### **表情**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663402477730,
    // f: "AS7UqtfC1EM",
    // l: 5184000,
    m: {
      MIMETYPE: "application/sticker-replied",
      meta: {
        stickerRepliedInfo: {
          rtime: 1658218477457,
          rname: "sun hewen-test",
          sticker: "😓",
          uuid: "ec770720-0738-11ed-9662-77079b27c356",
          operation: 1
        }
      },
      si: 1,
      flags: 22,
      ctime: 1658218477752,
      receipt: 9,
      stime: 1658218477730,
      uuid: "d497d010-073a-11ed-9662-77079b27c356"
    },
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    noDisturb: true
    // t: "C9NxC2WGCxY"
  }
];
```

#### **群 - 表情**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663410767731,
    // f: "b2sSrKJ8i1w",
    knownIfToOff: false,
    // l: 5184000,
    m: {
      MIMETYPE: "application/sticker-replied",
      si: 1,
      meta: {
        stickerRepliedInfo: {
          rtime: 1658226767467,
          rname: "sun hewen-test",
          sticker: "😤",
          uuid: "a46b3f30-0730-11ed-b8cb-49d608235d9d",
        //   发送
          operation: 1
        }
      },
      flags: 22,
      ctime: 1658226767726,
      stime: 1658226767717,
      receipt: 9,
      uuid: "21d2f3b0-074e-11ed-a940-5fef2a48c687|GC9NxC2WGCxY"
    },
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    noDisturb: true
    s: "AS7UqtfC1EM",
    // t: "C9NxC2WGCxY"
  }
];
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663410769253,
    // f: "b2sSrKJ8i1w",
    knownIfToOff: false,
    // l: 5184000,
    m: {
      MIMETYPE: "application/sticker-replied",
      si: 1,
      meta: {
        stickerRepliedInfo: {
          rtime: 1658226769005,
          rname: "sun hewen-test",
          sticker: "😤",
          uuid: "a46b3f30-0730-11ed-b8cb-49d608235d9d",
        //   取消
          operation: 0
        }
      },
      flags: 22,
      ctime: 1658226769251,
      stime: 1658226769249,
      receipt: 9,
      uuid: "22bda1d0-074e-11ed-a940-5fef2a48c687|GC9NxC2WGCxY"
    },
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    noDisturb: true
    s: "AS7UqtfC1EM",
    // t: "C9NxC2WGCxY"
  }
];
```

#### **删除**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663407064469,
    // f: "AS7UqtfC1EM",
    // l: 5184000,
    m: {
      MIMETYPE: "application/withdraw",
      meta: {
        origUUID: "8011ee30-0745-11ed-a940-5fef2a48c687"
      },
      flags: 22,
      nf: 0,
      ctime: 1658223064473,
      receipt: 9,
      stime: 1658223064469,
      body: "",
      uuid: "withdraw|8011ee30-0745-11ed-a940-5fef2a48c687"
    }
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    // t: "C9NxC2WGCxY"
  }
];
```

#### **名片**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663405062551,
    // f: "AS7UqtfC1EM",
    // l: 5184000,
    m: {
      MIMETYPE: "text/vcard",
      meta: {
        contactUid: "+852149048265018134",
        nickName: "sun hewen"
      },
      flags: 22,
      nf: 0,
      ctime: 1658221062553,
      receipt: 9,
      stime: 1658221062551,
      uuid: "d94da840-0740-11ed-b5b2-75f3bd1dc9f3"
    }
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    // t: "C9NxC2WGCxY"
  }
];
```

#### **图片**

```js
[
  {
    a: 5,
    // binaryPart: "......",
    // c: "HyperText",
    expire: 1663405266885,
    // f: "AS7UqtfC1EM",
    // l: 5184000,
    m: {
      MIMETYPE: "image/jpeg",
      meta: {
        download: {
          fid: "62d6rugrcn72d278abe2000107ee32",
          size: 239196,
          sha256:
            "927a8c4f19e85f0e5e552854899e7a98a1f3442d9febe4d25b0a41035b3111fb",
          url: "https://2mapi.svc.matrx.work/pfm/download/file?fid=62d6rugrcn72d278abe2000107ee32&ts=1658221266208&id=wICAfolPFAAJj9RA&os=desktop"
        },
        filename: "50ecd380-0741-11ed-b5b2-75f3bd1dc9f3.jpeg",
        hmacKey: "2925fdf62cf3f88718186dd37727b75c",
        iKey: "1a4d2b9bab4fc10884060b029a790c2dbc919c59aa15f39b9096082dc1a8e1d4",
        w: 1714,
        h: 1328,
        isOrigin: 0
      },
      flags: 22,
      nf: 0,
      ctime: 1658221266890,
      receipt: 255,
      stime: 1658221266885,
      uuid: "51ff06d0-0741-11ed-b5b2-75f3bd1dc9f3"
    }
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    // t: "C9NxC2WGCxY"
  }
];
```

#### **文件**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663405086763,
    // f: "AS7UqtfC1EM",
    // l: 5184000,
    m: {
      MIMETYPE: "x-filetransfer/octet-stream",
      meta: {
        download: {
          fid: "62d6rugro6721e78abe2000107ee27",
          size: 398
        },
        filename: "Recovery-codes Matrx 20220719.txt",
        hmacKey: "2925fdf62cf3f88718186dd37727b75c",
        iKey: "1a4d2b9bab4fc10884060b029a790c2dbc919c59aa15f39b9096082dc1a8e1d4",
        originSha256:
          "20aa9e0792c1db0b7948102bc8e69f89b340f24fc06f8c97c6abcbe3d9065659",
        isOrigin: 0
      },
      flags: 22,
      nf: 0,
      ctime: 1658221086766,
      receipt: 255,
      stime: 1658221086764,
      uuid: "e728de30-0740-11ed-b5b2-75f3bd1dc9f3"
    }
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    // needAck: true,
    // t: "C9NxC2WGCxY"
  }
];
```

#### **群 - pin**

```js
[
  {
    // a: 5,
    // c: "HyperText",
    expire: 1663410313326,
    f: "b2sSrKJ8i1w",
    knownIfToOff: false,
    // l: 5184000,
    m: {
      MIMETYPE: "application/pin",
      si: 1,
      meta: {
        pinnedInfo: {
          pname: "sun hewen-test",
          stime: 1658214100724,
          ptime: 1658226313043,
          uuid: "a3ba17a0-0730-11ed-b8cb-49d608235d9d",
          operation: 1
        }
      },
      nf: 1,
      ctime: 1658226313323,
      stime: 1658226313309,
      uuid: "7fac1917-981d-4de7-ba9c-eb00cfd53da7|GC9NxC2WGCxY"
    },
    // mcFrom: "AE-971-3924067100#85239273196016707",
    // mcTo: "AE-971-3924067100#852149048265018134",
    // meFrom: "85239273196016707#desktop",
    // meTo: "852149048265018134#desktop",
    needAck: true,
    // noDisturb: true,
    s: "AS7UqtfC1EM"
    // t: "C9NxC2WGCxY"
  }
];
```

<!-- tabs:end -->

## Notification：通知

matchRouter
| Type | name |
| :------------------------ | :------------------- |
| Contact_Request | 好友请求 |
| Contact_New | 新增好友 |
| Contact_New_E2EE_FRIEND | 新增 e2e 好友 |
| Contact_Del | 删除好友 |
| Contact_Black | black 好友 |
| Contact_Unblack | unblack 好友 |
| Contact_Meeting_Invite | 会议邀请好友 |
| ProfileChanged | profile 变更 |
| ProfileNameChanged | profile 名称变更 |
| ProfileSignChanged | profile 签名变更 |
| ProfilePortraitChanged | profile 图像变更 |
| StatusChanged | 用户状态变更 |
| ReqListChanged | 好友请求列表变更 |
| MuteChanged | mute 变更 |
| SilenceChanged | 静音变更 |
| TopChanged | 置顶变更 |
| HistoryMsg_Removed | 会话消息同步 |
| Contact_Enterprise_Add | 企业添加成员 |
| Contact_Enterprise_Kick | 企业移除成员 |
| PlatformNotice | 平台消息通知 |
| ReadChanged | 会话已读 |
| Meeting_List_Changed | 会议列表信息变更 |
| Account_Del | 删除账号 |
| Enterprise_Member_Changed | 企业会员变更 |
| Idc_Offline_Notification | 跨机房离线推送通知 |
| Offline_Msg_End | 离线消息最后一条标识 |
| E2EE_Metting | E2EE 会议相关通知 |

| Type                    | name   |
| :---------------------- | :----- |
| PlatformNotice          | 新建群 |
| ReqListChanged          | 新建群 |
| Contact_Request_Self    | 1      |
| Contact_Request         | 新建群 |
| Contact_New             | 新建群 |
| Contact_New_E2EE_FRIEND | 新建群 |
| Contact_Del             | 新建群 |
| Account_Del             | 新建群 |
| Contact_Black           | 新建群 |
| Contact_Unblack         | 新建群 |
| TopChanged              | 新建群 |
| MuteChanged             | 新建群 |
| Group_Config_Change     | 1      |
| ReadChanged             | 新建群 |
| ConversationChanged     | 1      |
| ProfileNameChanged      | 新建群 |
| ProfilePortraitChanged  | 新建群 |
| HistoryMsg_Removed      | 新建群 |
| ProfileSigChanged       | 1      |

## Event：群事件

handleEvent
| Type | name |
| :---------------------- | :---------------------------------------------------------- |
| GroupCreate | 新建群 |
| GroupAdd | 群添加成员 |
| GroupKick | 群移除成员 |
| GroupLeave | 成员离开群 |
| GroupDismiss | 群解散（一人一群离开群, 群 UserFriend 不会删除 Group 记录） |
| GroupOwnerChange | 群 owner 变更 |
| GroupNameChange | 群 name 变更 |
| GroupDescribeChange | 群详情变更 |
| GroupMemberDetailChange | 群成员变更 |
| GroupUnLink | 离开企业离开群 |
| GroupLimitChange | 群上限变更 (废弃) |
| GroupOneCreate | 一对一建群 (废弃) |
| GroupInnerReloadMember | (废弃) |

GroupUnLink
GroupLeave
GroupKick
GroupNameChange
GroupDescribeChange
GroupOwnerChange
GroupAdd
GroupLimitChange
GroupCreate

## PushReg 注册连接

## PullDetail 拉取历史消息

## ForceClose 强制关闭连接

## StateReport 客户端上报信息

## Ping/Pong

ProtocolError

## **有问题搜 wiki，有输出写 wiki，有讨论在 wiki，养成搜索文档，编写文档的好习惯。**

#### **Push 协议**

```
Push是一个双工的消息协议，包括用户连接的建立，用户各类型的消息（MIMEType），事件（event），控制信令等。
```

[Push 消息协议](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=20647142)

[ 消息协议说明](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=5410427)

[ 总体设计与关键流程](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=5409315)

[ 协议及其数据结构](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=1900737)

#### 接口协议

```
由于产品迭代，文档迁移，修改了多次，需要多在wiki检索，并咨询服务器同学是否有变化。

[windows所有使用接口记录](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=32510311)
```

[ HTTP 接口文档](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=20647921)

#### 产品全茂介绍

```
[产品架构图](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=20657466)
```

[ Matrx feature list (for sales)](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=32517611)

[ Feature list comparison](https://wiki.corp.matrx.team/display/PX/Feature+list+comparison)

[ Feature List](https://wiki.corp.matrx.team/display/privatization/Feature+List)

**产品链接汇总**

[线上问题反馈平台](https://fed.corp.matrx.team/matrx-log/view?type=windows&env=mapi2production&isVip=false&time=1647935694674&pageIndex=1&pageSize=50&startDate=&endDate=&enterpriseId=&uid=)(日志平台)

[bug 和任务管理平台](https://chandao.corp.matrx.team/)

[代码平台](https://gitlab.corp.matrx.team/frontend/matrx_windows)

**其他**

[socket 框架文档](https://socket.io/)

[数据库 sqlite](https://www.sqlitetutorial.net/)

[sqlite 官网](https://www.sqlite.org/lang_select.html)

[sqlite 查询过程（重点了解）](https://www.sqlite.org/queryplanner.html)

** [查询优化（重点了解）](https://www.sqlite.org/optoverview.html)**

代码规范

[风格指南](https://cn.vuejs.org/v2/style-guide/index.html)

<script>
    window.onload = function() {
        console.log(tippy)
    }
    window.onload(() => {
        tippy(document.querySelectorAll('.btn'));
    document.querySelectorAll('.token.comment')[0].innerHTML.replace(/.+(?=:)/, ($1) => {
    console.log($1)
})
console.log(tippy)
    })
</script>
