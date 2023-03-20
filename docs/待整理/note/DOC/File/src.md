## api/
### axiosInstance.js
### callApi.js
### callFeedbackApi.js
### dohApi.js
### FileApi.js
### forceCloseHandle.js
### liveApi.js
### loginApi.js
### meetingApi.js
### messageApi.js
### messageManger.js 消息管理

> MsgTemplate 消息类库
export class MsgTemplate {

}
> isLinkExist 是否包含url
/**
  * @description 是否包含url
  * @param {object} originMessage 消息
  */
> fileSafeMimeType 处理文件消息 安全类型添加进度相关字段 文件类型白名单
/**
  * @description 通用数据库消息过滤
  * @param {object} mimeType 消息类型
  */
> addFileProcessFileds 添加文件进度相关字段
/**
  * @description 添加文件进度相关字段
  * @param {object} message 消息
  */
> getMsgType 获取消息类型
/**
  * @description 获取消息类型
  * @param {object} msg 消息
  * @param {boolean} isNeedTranslate 消息
  */
> checkAType 无效的a需要抛弃
/**
  * @description 无效的a需要抛弃
  * @param {object} push_msg 消息
  */
> retryE2EEPingAndScan
/**
  * @description 
  * @param {string} hid HID
  */
> fetchNoSendPingList
/**
  * @description 
  * @param {string} spaceId 空间ID
  */
> retryE2EEScan
/**
  * @description 
  * @param {object} commingMsg 消息
  */
> e2eFailReScan

> e2eProcess

> historyIdFromTop

> reqCountFromHistory

> isHistory

> isKeyChange

> addUnreadCount

> subtractUnreadCount

> messageNotification

> isEarlierLastTime

> dialogUnreadCount 未读统计
/**
  * @description 未读统计
  * @param {object} message 消息
  * @param {object} peer 消息
  * @param {string} spaceId 空间ID
  */
> updateDialogAndPeer
/**
  * @description 
  * @param {object} message 消息
  */
> currentSessionListHandle

> handleError

> reconnectSocketDoh

> sendE2EPinMessage

> keychangeFn

> renameFileName

> ignoreWarnE2EESpaceMsg

> isIgnoreNotExistSpaceMsg

> appendHistoryMessage

> sendWPushMsg

> sendWIntervalPingMsg

> checkHWMeeting

> doWpushRegRes

> doPulldetail

> refreshContactAndChannel

> initSpaceInfo

> wrapSpaceId

> handleMessage

> setTopList

> doFreeLoginAndGetAlice

> errorHandle

> getIKeyAfterSimple

> handleKeyChange

> handleEvent

> paths

> matchRouter

> addSent

> deleteContactRequest

> clearHistory

> changeProfile

> muteLogic

> muteGroupLogic

> readLogic

> deleteLogic

> pinLogic

> deleteContact

> aNewFriendComing

> accpeted

> plainmessageprocess

> preprocess

> setEmojiReplyList

> saveMeetingCardMessage

> handleHyperText

> checkSendQueueAndSendMsg

> checkAndDeleteTempMsg

> enterpriseAdd

> enterpriseRemove

> handleNotification

> refreshBind

> handleTxtStore

> filterText

> wrapMessageNotify

> stopFileProcessAndDelete

> pinMsgHandle

> withdrawSingle

> withdrawMult

> renderName


### peerApi.js
### socketUtil.js ImSocket工具

> normalTempDBMsg
/**
  * @description 通用数据库消息过滤
  * @param {object} singleMsg 消息
  */
> batchSaveTempMsg
/**
  * @description 批量消息缓存
  * @param {array} tempMsgList 消息列表
  */
> getMsgpriority
/**
  * @description 消息优先级转换
  * @param {object} msg 消息
  */
> checkTempMsgAndBatchSend 
/**
  * @description 消息优先级转换
  */
> removeGIdOfUUID 剔除groupserve 带在uuid后的|G 由于其他地方可能出现|G故不用正则匹配
/**
  * @description 消息优先级转换
  * @param {object} originMsg 消息
  */
> doConnectWhenNetworkError export bind参数无效 所以需要两个同样函数
/**
  * @description 弱网络重新建立连接
  * @param {object} sInstance Sockt连接
  */
> doCloseWhenNetworkError 弱网络断开连接
 |
 V
> disconnectedHandle 断开连接

> SocketUtil 类

{
  _init 初始化
  onClose 关闭
  withTimeout 实例超时方法
  _sendMsg 给服务端发送消息方法
  destory 销毁
}

### spaceApi.js
### updaterApi.js
### uploadApi.js
### userInfoApi.js
## assets/
## components/
## config/
## custom/
## dataController/
## directive/
## enum/
## lang/
## logs/
## main/
## mixins/
## mock/
## renderer/
## scss/
## sdk/
## sql/
## staticData/
## store/
### concat.js 当前空间聊天信息

> active: "none" 连接状态

1. none 初始化
1. contacts 连接中
1. channels 连接成功
1. channels 断开连接

> activeChannelDetail: null 空间详情

{id,name,description,members:{isOwner,id,name,avatar,description,satus}}

> isDone: false 是否初始化过一次联系人

> newRequestsNumber: 0 未读数

> requests: [] PeerApi请求列表

[{id,name,time,email,avatar,requestStatus}]

> contacts: [] 联系人列表

[{id,name,status,description,phone,email,blocked,avatar}]

> channels: [] 群列表

[{id,name,avatar}]

> whiteList: [] 系统联系人账户

`getIkeyAndSimpleLogin.simpleLogin[API](doInitMix.js) -> getIKeyAfterSimple(doInitMix.js) -> saveWhiteList.getUserCapability[API](enterprise.js) -> setWhiteList(concat.js)`

> onlineStatus: {} 在线状态

用户在线状态枚举
1. 0：离线offline
1. 1：会议中meeting
1. 2：离开leave
1. 3：online-mobile
1. 4：online-pc
1. 5: online-web
1. 34:online-pc&mobile

> spaceConcatMap: {} 多空间不同通讯录缓存

### customerInfo.js

```js
hidv
ikeyv
vuidv
pwdv
HmacSHA256Keyv
aesKeyv
contentv
// 真实的固定会议id
pmiv
// 显示的固定会议id
vmrIdv
// 默认的固定会议室名称
vmrNamev
// 显示的固定会议密码
vmrGuestPwdv
```

### dialogCollection.js 
### dialogList.js 
### emojiReply.js 表情包
### fileCancelCollection.js 
### fileCollection.js 
### fileProcessCollection.js 
### fileWorking.js 
### forwardCollection.js 
### index.js 
### meetingCollection.js 
### messageCollection.js 
### peerCollection.js 用户信息存储
### searchCollection.js 搜索消息存储

> fromFilter 

> postFilter 

> dateFilter 


### sessionCollection.js 会话信息存储
### setting.js 设置信息

> privateChats: true 

> channels: true 

> autoconnectedAudio:true 

> showingPreview: true 

> videoCheck: true 是否在当前空间加入会议默认开启摄像头

> usePersonalRoom: false 是否使用个人空间会议室

> receiptsSwitch: true 已读未读开关

> allSpaces: {}

### spaceCollection.js 空间信息

> spaceInfoList: _spaceInfoList || [] 空间列表

> currentSpaceId: defaultSpaceId() || '' 空间ID

> showRemoveSpaceAlert: false 

> isTrayCurrentSpace: false 当前空间

> isTrayMultiSpace: false 多空间消息

> isWinFocus: false 窗口是否在前台

> currentIdObj: {} 当前空间未读ID集合

### storage.js 系统用户信息

> platform: '' 系统

> lang: '' 语言

> skipUpdateVersion: '' 

> skipUpdateTime: '' 

> recordPath: ''  文件位置

> joinModalName: '' 

> c_name:'' 

> userData: {} 


### suggestionList.js @相关人员过滤列表

> memberList: [] 群列表
> foundList: [] 群过滤列表
> suggestionHid: "" 群Hid

### uiControl.js UI控制器


> connectState:"connect" connect connecting disconnect
> webContentsFocus: true,
> metionedList: [],
> unreadCount : 0,
> sessionListHeight: "643px",
> currentSession: "AB6aJ4kcKJo",
> sessionList: [],
> activeMenu: 0

> suggestionPannelVisable: false @人员列表展示

> isShowSideBar: false 控制message 对话消息成员开关

> audioDom: '' 通知 audio 标签元素

> actDialogId: '' 当前会话ID

> currentDialogIsBottomed: true 当前Dialog是否置底

> chatName: '' 当前会话名称

> menberCount: '' 当前会话人数

> changeText: '' 监听输入text改变
> sendHidArr: [] 发送 @群成员 详细信息集合  {hid: item.hid,len: 3,start: 0}

> isDialogVisable: false 自定义窗体是否显示
> needSendFileMsgUuid: ''

> range: 0 光标位置 Number

> unReadCount: 0 当前前窗口未度消息数

> scrollContainer: null 消息滚动体容器

> curUuid: '' 当前会话窗口的@消息 uuid

> search: {} Search modle

```
search: {
  sessionsearch: '' 
  groupsearch: '' 
  contactsearch: ''
}
```

> searchStorage: {} 拼音搜索库

> remidUuid: getRemind() || {} 非当前会话窗口 @消息对应的 uuid

> mailItem: {} 通讯录 hid

> CurDialogAcount: 0 当前会话计数

> shortMsg: {} 为了解决点击会话短消息昵称和备注 策略显示问题 刷新还有缺陷

> searchDialogVisable: false 通讯录搜索框可见

> isChangingName: false 修改群名称时会触发2次。

> notifydialog: '' 消息通知得会话窗口对应的id

> uuidRepliedRoot: '' 回复列表的根uuid

> replyListPannelVisible: false 消息回复列表展示

> groupPinPannelVisible: false 群组pin列表展示

> replyListScrollUUID: '' 消息回复列表跳转的uuid

> selfReplyUUID: '' 消息回复的自己uuid用于定位消息

> currentEmojiPanel: false emoji面板可见性

> messageTimeTip: '' 消息面板的浮动时间

> sendDialogVisble: false 转发对话框

> TopMenuBar

```
TopMenuBar: {
  active: "2"
}

0:chat
1:Contact
2:meeting
```

> contentxMenuModel 右键菜单
```
contentxMenuModel: {
  isvisable: true,
  left: 0,
  top: 0
}
```
> meetingModel
```
meetingModel: {
  <!-- audioDialog -->
  audioDialogVisable: false,
  <!-- videoDialogSSSSS -->
  videoDialogVisable: false
}
```
> replyCollection: {} 每个聊天窗口的消息回复信息

> fileisDraging: false

> mettingMemberVisible: false metting add friends

> socketInstance: '' socket instance

> isSignin: false E2E validate is first login ? is true scanApi add needKey parm

> pinList: [] E2E pin message list

> emailLoginLock: ''

> verifyCodeDialogVisable: false verifyCodeDialogVisable

> meetingDialogDisplay: false meetingDilaog visable

> isAppActive:0 是否需要从缓存库中获取数据

> showAnswerDialogUid: '' 接听对话框

> showSearchPannel: false 全局搜搜面板可视

> searchPannelVisable: false 搜索面板可视

> searchValue: '' 搜素关键字

> downloadFileNoSpaceDialogVisible: false 下载没有多余空间选择框

> downloadFileDialogVisible: false 下载目录选择框

> groupPinTopToTenDialogVisible: false 群组置顶超过10条提示框

> groupUnPinDialogVisible: false 取消Pin提示框

> meetingCopyInfoDialogVisible: false 会议复制信息框

> meetingCopyNoLoginDialogVisible: false 会议未登录复制信息框

> isFetchingMeetingCopy: false 正在获取会议黏贴信息

> groupUnPinInfo: '' 当前需要取消pin的信息

> downloadFileDialogUuid: '' 第一次下载，当前下载的uuid

> currentDownloadPath: '' 设置的或者默认下载的目录

> assetsVisible: false 文件列表dialog显示

> customLoadingVisible: false global custom loading

> isMultipleSelected: false, 是否为聊天消息多选状态

> spaceLoading: false 是否正在切换空间

### updater.js 版本更新数据
### userInfo.js 用户信息

> hid: '' 用户Hid

> uid: '' 用户id

> ikey: ''

> PID: ''

> vuid: ''

> name: '' 名字

> countryCode: "971" 城市Code

> loc: "en" 语言

> wdid: ''

> clientver: '' 设备版本

> model: "windows" 

> pkg: "ai.matrx.windows"

> userAgentAppend: '' ua参数
matrx windows v1.3.5 matrxlan/en

> baseApiUrl: ''

> accessToken: ''

> loginStatus: localStorage.getItem('loginStatus') || 'INITIAL'

1. INITIAL 未进行socket connect
1. EMAILMLOGIN 邮件登录完成
1. CONNECTED socket connect
1. PUSHREG 和push 绑定
1. PULLCONTACT 获取最近聊天会话
1. LOGINFINISH 登录完成 ERROR 异常 DISCONNECT 断线

> predisConnectReason: ''

> meetingroomlist: [] 已参加会议列表

> firstName: ''

> lastName: ''

> videoCheck: true

> scheduleList: []

> h_account: []

> idcChangeCount: 0

> pmi: '' 真实的固定会议i

> vmrId: '' 显示的固定会议i

> vmrName: '' 默认的固定会议室名

> vmrGuestPwd: '' 显示的固定会议密

> cHwStatus: "disconnected" 会议状态

> exerciserList: [] 行权人列

> authorizerList: [] 授权人列

> scheduleBy: '' 会议列表当前授权

> spaceExpire: false 当前空间是否过

> call1V1Status: "disconnected" 1v1通话状态

1. disconnected
1. initial
1. connected
1. pending
1. calling

> liveStatus: "disconnected"

> sdk1V1AnswerId: ''

> meetSizeLimit: 0

## styles/
## utils/
### files/
### format/
### ftsDB/
### groupPin/
### meeting/
### opus-to-pcm/
### pointReport/
### report/
### sdk/
### sessions/
### ackDBConnect.js
### ackDBUtil.js
### ackUtil.js
### aes128gcm.js
### base.js
### batchRequest.js
### cache.js
### cancelTokenUtil.js
### caTool.js
### caughtError.js
### changeDBPw.js
### chatUtils.js
### clipboard.js
### ConstantTypes.js
### countries.json
### dataDao.js
### dataUtil.js
> parseXOR

> hidToUid

> numberToHid 发送人ID转码

> hidToNumber

> getCurNAndC

> getPushRegKey

> getPeerType

> getDialogIndex

> renderDisplayName

> isNotificationMsg

> renderWitdrawMsg

> remindSplice

> councilAccountFormate

> batchAccountValidate

> parsePassword

> parsePhonePassword

> prettyTime

> formatDate

> prettySearchTime

> formatMAndY

> transferQueue

> formatDuring

> ByteEncoder

> hex2dec

> searchNameSort

> getUserName

> listUrl

> isCurrentPeer

> getIsWhiteList

> prettyDialogTime

> isEmailAccount

> handleEmailHref

> showEmailAndAccount

> isPhoneNumber

### debounce.js
### deepCopy.js
### deviceInfo.js
### dom.js
### doPolymericPeer.js
> doPolymericPeer 逐级信息查询（Vuex、数据库、服务器）

#### mangePeerList 空间用户列表信息查询

`( spaceId, hidList = [], dataWin = 3, isNeedServe = false, getCustomerInfoOnly = false )`
// dataWin 数据窗口 0:all 1:联系人的人 2:联系人的群组 3:联系人 4:session列表 5:好友请求列表 6:自己个人信息和设置 7:获取一个群的群成员信息

个人信息查询 mangePeerList(spaceId, [], 6)
批量查询用户信息 mangePeerList(spaceId, [], 0)

### downloadSetting.js
### E2EEPingUtil.js
### e2eUtil.js
### fetchAvatarCache.js
### FileSHAModule.js
### FileTool.js
### ForwardSqliteConnect.js
### ForwardSqliteUtil.js
### Function.js
### hwmLogin.js
### icsCreateEvent.js
### index.js
### IndexDBUtil.js
### initVue.js
### logicDBConnect.js
### meeting.js
### menu.js
### MonitorDom.js
### MonitorTime.js
### multipleDBInsMange.js
### notification.js
### QueueManager.js
### replyDBDao.js
### SpaceManager.js
### SqliteConnect.js
### SqliteUtil.js
### systeminformation.js
### TimeZone.js
### undo.js
### userInfoConnect.js
### userInfoDBUtil.js
### voiceUtil.js
### vueBus.js

## views/

App.vue
background.js
IPCRenderChannel.js
main.js
NoticeGlobal.vue
router.js
userInfo.js