# IM

## 登录方式

1. 邮箱登录`emailToLogin`
1. 登录`phoneToLogin`

### emailToLogin
`this.$store.state.uiControl.emailLoginLock = showLockLoadingImmediately(0);`

> checkDns

emailToLogin -> checkDns -> doDnsQuery[探测 root_url]

> 阻止UI

<!-- DefineProperty下面的代码将阻止UI线程，因此设置超时的目的是让加载UI首先显示 -->
await new Promise(ok => setTimeout(ok, 50));

> IPCsend("Util-SDK-Method")

back unit8Array

> IPCsend("Util-SDK-Method")

> IPCsend("IKEY-SDK-Init")

> IPCsend("IKEY-SDK-GET-API-KEY-ID")

> IPCsend("DB-User-Init")

> IPCsend("DB-User-Init")

> IPCsend("E2EE-Help-Method")

> IPCsend("E2EE-Help-Method")

> IPCsend("E2EE-Help-Method")

> emialLogin
dataUtil.parsePassword 数据加密
> IPCsend("")

> IPCsend("")

> IPCsend("")

## Mian 主体

> beforeRouteEnter

vm.initChanel 初始化连接

> initChanel
创建在线回调`doConnectWhenNetworkError`
getEmialLosginSocketLink 获取Sockt地址

SocketUtil实例化创建连接需求
发送`msSocket`给`uiControl`
msSocket._init初始化连接

> SocketUtil._init
init初始化
通过`socket.io-client`建立连接（）返回ioInstance

> ioInstance事件
1. `connect`
1. `error`
1. `disconnect`
1. `connect_error`
1. `reconnecting`
1. `WPushRes`

> uiControl



### ChatsPanel 聊天

#### 发送消息
```
graph TB
  subgraph SendFileDialog
  icon[[Icon]] --> |click|emitSendMsg
  MessageInput[[MessageInput]] --> emitMsg
  emitSendMsg --> |refs|emitMsg
  emitMsg --> onMessageSubmit --> |$emit.sendMsg|sendMsgWithVerif
  MessageBox[[MessageBox]]
  sendMsgWithVerif --> |checkIfsendMsg|checkIfsendMsg{数据库检查} --> sendMsgHandle
  end
  subgraph SocketUtil
  MessageBox --> _sendMsg
  sendMsgHandle --> |$emit.sendMsgFromPannel|_sendMsg
  end
```

> RightContentPanel
1. 点击发送
通过`Icon`组件的事件调用`emitSendMsg`，调用`MessageInput`组件的`emitMsg`
`onMessageSubmit`通过`$emit`，`sendMsg`发送`this.inputValue.trim()`触发
`sendMsgWithVerif`方法
同步`checkIfsendMsg`数据库检查
执行`sendMsgHandle`方法，通过`$emit`，`sendMsgFromPannel`发送
触发`MessageBox`组件`sendMsgHandle`，执行`this.msSocket._sendMsg`

> SocketUtil._sendMsg
that.$store.state.uiControl.socketInstance._sendMsg(JSON.parse(res), "HyperText")

1. 回车发送
回车键触发`batchSend`，通过`$emit`，`sendMsg`发送`this.inputValue.trim()`触发

#### 接受消息

`ioInstance`监听`WPushRes`事件，接收服务端消息。通过`IPCsend.IKEY-SDK-Decrypted-Push-Msg`解析数据，
遍历数组数据
同步批量处理消息`batchSaveTempMsg`调用`ackDBUtil`模块的`batchInsertWith`存储数据库。
发送`window.MatrxGlobalEvent.emit("ws:message", singleMsg)`监听函数处理进行处理
`messageManger`模块的

`handleMessage`方法，通过判断数据类型`handleHyperText``pinMsgHandle`pin消息`window.newMsgComing(bePinMsg)`

> RightContentPanel

`window.newMsgComing`接收消息，通过修改`viewChatList`触发计算属性`viewChatListComputed`通过`ViewScroll`组件渲染

> batchInsertWith
触发`batchInsertWith`方法，`ackDBUtil`模块，调用`getDBInstance`连接数据库，`prepare`预编译SQL插入数据库（有则忽略，无则插入数据库）。

#### 发送文件

`input`触发`fileChangeHandle_`方法文件处理，触发`fileChangeHandle`方法，发送文件信息`produceFile`方法。遍历文件列表，文件过滤（个数、大小）。

addFileList是 fileCollection.js 中的方法。其作用是把上传的文件信息fileSizeList处理后放入vuex中(preSendFileList)。之后转而在弹出的对话框（SendFileDialog）处理后续的过程。

通过`Vuex`的`this.$store.state.uiControl.sendDialogVisble`=`true`打开弹窗，`SendFileDialog.vue`文件，点击发送`emitSendMsg`方法，调用`messageInput`文件的`emitMsg`方法。调用`sendMsgHandle`方法，在调用`this.$emit('dialogMessageHandle'`触发`SendFileDialog`组件，触发`mockSendMsgHandle`，发送`window.newMsgComing`，`DocumentChat`组件，声明周期触发`manageFile`方法。触发`uploadFileHandle`分片处理文件，上传文件，检查文件是否存在，

`uploadFileHandle`调用`messageApi`模块`uploadPictureApi`方法

通过`$emit`，`sendMsg`发送`this.inputValue.trim()`触发
`sendMsgWithVerif`方法
同步`checkIfsendMsg`数据库检查
执行`sendMsgHandle`方法，通过`$emit`，`sendMsgFromPannel`发送
触发`MessageBox`组件`sendMsgHandle`，执行`this.msSocket._sendMsg`

> uploadFileHandle

判断文件类型，图片直接上次、文件分片上传等。
图片转base64，调用API`uploadPictureApi`。文件分片上传，通过分片`map fid`判断是否上传，`file.fileBlob.slice`进行切片，`uploadFileApi`

#### 转发文件

`rightOptionsMix`右键触发`forwardDocumentMessage/forwardTextMessage`方法，显示`bi-dialog`组件，点击触发`$emit``gotMembersToBeForward`方法，调用`F.forwords`调用`forword`


#### 粘贴文件
 @paste 触发 pasteHandle_  pasteHandle 文件复制，粘贴

#### 系统通知


handleMessage

handleNotification
doWpushRegRes
handleHyperText
handleEvent

handleTxtStore
updateDialogAndPeer
messageNotification
wrapMessageNotify
messageNotify.notify

notification.js
notify\



创建会议
newMeetingHandle

@/utils/meeting
handleNewConference


# 表情包功能
通过 EmojisReply 组件 @click-emoji="handleClickEmoji" 通信。过来是否已经选中 operation ，调用发送表情 handleSendEmojis 实例化 msgTemplate 的方法 getEmojiReplyTemplate 消息格式化，Bus.$emit('emoji-reply' 发送数据。MessageBox接收，触发handleMessage方法。


# 通讯录
## 模块

Main - ContactsPanel





``
```




1.2.3.以下只涉及复杂的事项，简单明显的不在书写联系人模块入口: https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/master/src/components/Panel/ContactsPanel.vue该模块为联系人和群主管理，涉及到联系人添加，删除，更新操作联系人添加流程为使用HTTPS接口添加联系人 Peer.addFriend 在消息管理模块(messageManger.js)会收到Contact_Request （通过消息模块的websocket)收到消息后会更新本地库中的信息同时刷新联系人列表store.dispatch("concat/refreshRequestStatus”)同理拉黑，删除，同意好友请求流程相似，在消息管理模块中联系人相关的事件为以下几个，收到该事件处理本地库中数据后都会刷新联系人列表store.dispatch("concat/refreshRequestStatus”)  1.  Contact_Request_Self 手机端添加联系人后同步过来的事件  2. Contact_Request 好友请求事件  4. Contact_New 同意好友请求  5. Contact_Del 删除联系人  6. Contact_Black 拉黑  7. Contact_Unblack 取消拉黑刷新联系人列表流程 (PeerApi.js)  1.allContacts  为刷新联系人总入口  2. 调用接口获取最新的联系人ID列表（getContactList）  3. 从本地库中查询联系人  4. 计算出差异，对有差异的ID进行接口请求刷新为最新数据  5. 群组流程类似  6. 如果ID在本地库中存在则不会刷新，但点击单个联系人，会请求接口进行全量数据更新两步认证模块入口：https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/master/src/views/TwoFactor.vueUI @/components/kits/CodeInput.vue 为通用UI组件输入验证码交互逻辑完善，只涉及到属性传递和事件反馈没有其它作用影响在登录⻚面https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/master/src/views/UserLogin.vue中 getPub 方法为两步验证周期的封装，两步验证完成之后其返回的Promise 完成，所以在原有的登录中只需要调用getPub就可以应用上两步验证的逻辑而不会破坏原来的代码逻辑流程。消息模块入口：https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/master/src/components/RightContentPanel.vue
1.2.3.4.1.2.5.6.1.2.3.4.消息模块我在原有的基础之上做了优化消息在UI上展现的性能增加历史消息功能定位功能草稿功能目前消息模块的UI机制为提取消息为fetchMessage方法从本地库中获取当前回话的消息20条，包含排序和过滤不需要展示的消息每一条消息会根据上一条相邻的消息计算出时间格式（今天，昨天，具体日期）以及在UI展现层面是否需要合并计算逻辑在Function.js中的 timeLogic方法 dateLogic方法UI展现上面采用原有的UI没有进行变更默认展现最新的消息，如果用户进来后通过点击定位最新消息或者@消息来定位消息，则会先查看当前展示的消息是否存在该消息，有则定位到该消息至可视区域否则通过要定位的消息ID从库中查询该条消息前后的40条消息，渲染到UI中后进行定位如果消息上拉到最顶部会从本地库中查询出消息追加到上面，如果本地库中没有则会通过websocket从服务中拉取历史消息下拉到下方则会触发查询本地库中最新消息，在UI上进行前置填充消息上边界下边界判断的方法是通过在消息UI中前后塞入两个DIV进行判断，如果最下方的DIV至可视区域则说明到底部了，如果最上方的DIV到可视区域则说明到最顶部了。后续如果要在拉历史消息的过程中展示loading效果，则只需要在最上方的DIV中塞入loading图标即可两个DIV id为topdiv bottomdiv判断元素是否在可是区域的上方或者下方是通过Function.js中的isBehindViewportTop，isBeforeViewportBottom 进行的。草稿的数据不作为持久化数据，是在一个闭包里面存储的，程序关闭即草稿数据消息最后一条消息入口1：https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/feat_1114_all/src/components/DialogCell.vue入口2：https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/feat_1114_all/src/components/kits/MessageTip.vue默认进入之后，会根据当前的回话ID，从本地库中获取出完整的消息数据，MessageTip则是负责根据数据渲染出相应的UI展现在DialogCell中有四个全局的Hooknewmsg__{dialogId}. 当有新消息时触发newdraft__{dialogId}  新的草稿产生时触发currdraft__{dialogID} 和newdraft__相同属于冗余代码clearat__{dialogID} 删除At消息（在会话离开的时候会触发此Hook）以上Hook触发都会刷新当前回话的最新的消息到最后一条消息的UI中Function.js入口：https://gitlab.corp.matrx.team/frontend/matrx_windows/-/blob/master/src/utils/Function.js该文件主要提供一些功能单一的函数，辅助开发，属于帮助类型createAtomRun：创建一个原子操作列表，按照顺序串行执行Promise。
let a = createAtomRun()a(async function(){...logic1})...some codea(async function(){...logic2})...some filea(async function(){...logic3})按照实际调用的先后顺序，串行执行这些PromisecreateConsumeCommand：生产与消费，Let [produce,consum] = createConsumeCommand()a.jsproduce(id,(args..)=>...)b.jsconsum(id,...args)主要功能是用来进行夸文件的代码片段调用createTakePeerList：鉴于项目中有大量的Peer请求，该方法主要功能是减少重复请求。该方法的逻辑是在请求完成之前，相同的ID再次请求Peer不会发起真正的请求，而是等待完成之后并使用结果返回







已读未读

已读未读设置开关
群消息已读未读
个人已读未读
群消息已读未读详情