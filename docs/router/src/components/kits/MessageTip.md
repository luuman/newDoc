# MessageTip 聊天列表 最近消息提示

## 变量

| 变量                           | 值  | 关联        | 描述             |
| ------------------------------ | --- | ----------- | ---------------- |
| `props`                        |     |             |                  |
| [msg](/note/newDate/ImDate.md) |     | [msg]       | 消息变量         |
| existat                        |     | false、true | 是否未读         |
| draft                          |     | false、true | 是否发送成功     |
| remindListDate                 | []  | DB.message  | @List            |
| `data`                         |     |             |                  |
| hid                            |     | X.userInfo  | 个人 ID          |
| `watch`                        |     |             |                  |
| `computed`                     |     |             |                  |
| isFail                         |     |             | 是否发送失败     |
| existatText                    |     |             | @all/@me         |
| MIMETYPE                       |     | msg         | 消息类型         |
| `methods`                      |     |             |                  |
| efailed                        |     | msg.isStar  | 表示失败意思     |
| nameTxtYou                     |     |             |                  |
| nameTxt                        |     |             |                  |
| mettinginvite                  |     |             |                  |
| mettingcard                    |     |             |                  |
| voiceMsg                       |     |             |                  |
| filename                       |     |             |                  |
| getRestrictedText              |     |             |                  |
| imagename                      |     |             |                  |
| two                            |     |             |                  |
| recordtxt                      |     |             |                  |
| showDuration                   |     |             | 是否需求成员列表 |

### 变量值

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

### isCallMe
