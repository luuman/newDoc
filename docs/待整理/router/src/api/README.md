# API

## API 不同环境服务器地址

测试环境域名： https://mapi.svc.matrx.work

预发布环境域名： https://mapi.svc.matrx.tech

线上环境域名： https://mapi.svc.matrx.io

## API 统计

| API                             | 域名    | url                                                                        | parem          | 描述                                                    |
| ------------------------------- | ------- | -------------------------------------------------------------------------- | -------------- | ------------------------------------------------------- |
|                                 |         |                                                                            |                |                                                         |
| :book: `account.js`             |         |                                                                            |                |                                                         |
| ~accountUserSearch~             | G UC    | <i title="/account/user/search">Copy</i>                                   |                |                                                         |
| :book: `apiUtil.js`             |         |                                                                            |                |                                                         |
| filterRequestUrl                |         |                                                                            |                |                                                         |
| ~filterRequestAllUrl~           |         |                                                                            |                |                                                         |
| :book: `avrRiskApi.js`          |         |                                                                            |                |                                                         |
| getFingerPrintList              | G UC    | <i title="/config/server/info">Copy</i>                                    |                |                                                         |
| :book: `axiosInstance.js`       |         |                                                                            |                |                                                         |
| :book: `callApi.js`             |         |                                                                            |                |                                                         |
| getCmeeting                     | P UC    | <i title="/cmeeting/v2/gettoken">Copy</i>                                  |                |                                                         |
| createCmeeting                  | P UC    | <i title="/cmeeting/v2/creatroom">Copy</i>                                 |                |                                                         |
| :book: `callFeedbackApi.js`     |         |                                                                            |                | 质量上报                                                |
| getFeedbackReasionList          | G UC    | <i title="/mssu/meetingreport/getConfig">Copy</i>                          |                | 获取通话质量回报列表                                    |
| postFeedbackReasionList         | P UC    | <i title="/clientlog/loginreport">Copy</i>                                 |                | 已登录                                                  |
| postFeedbackReasionList         | P UC    | <i title="/clientlog/nologinreport">Copy</i>                               |                |                                                         |
| logBatchReport                  | P UC    | <i title="/clientlog/loginbatchreport">Copy</i>                            |                | Report User Feedback                                    |
| logFeedbackSubmit               | P SC    | <i title="/customer/feedback/submit">Copy</i>                              |                | log Report Feedback                                     |
| :book: `channelApi.js`          |         |                                                                            |                |                                                         |
| channelConfig                   | P UC    | <i title="/channel/config">Copy</i>                                        |                |                                                         |
| channelIsMember                 | G UC    | <i title="/channel/isMember">Copy</i>                                      |                |                                                         |
| channelGetList                  | G UC    | <i title="/channel/getlist">Copy</i>                                       |                |                                                         |
| channelGetEnterprisegroup       | G UC    | <i title="/channel/getenterprisegroup">Copy</i>                            |                |                                                         |
| channelCreate                   | P UC    | <i title="/channel/create">Copy</i>                                        |                |                                                         |
| channelLeave                    | P UC    | <i title="/channel/leave">Copy</i>                                         |                |                                                         |
| channelEditProfile              | P UC    | <i title="/channel/editprofile">Copy</i>                                   |                |                                                         |
| channelAdd                      | P UC    | <i title="/channel/add">Copy</i>                                           |                |                                                         |
| channelRemove                   | P UC    | <i title="/channel/remove">Copy</i>                                        |                |                                                         |
| :book: `contactApi.js`          |         |                                                                            |                |                                                         |
| contactBlocklist                | P UC    | <i title="/contact/blocklist">Copy</i>                                     |                |                                                         |
| contactMute                     | P UC    | <i title="/contact/mute">Copy</i>                                          |                |                                                         |
| contactGetList                  | P UC    | <i title="/contact/getlist">Copy</i>                                       |                |                                                         |
| contactReqList                  | P UC    | <i title="/contact/reqlist">Copy</i>                                       |                |                                                         |
| contactDelReq                   | P UC    | <i title="/contact/delreq">Copy</i>                                        |                |                                                         |
| contactAccept                   | P UC    | <i title="/contact/accept">Copy</i>                                        |                |                                                         |
| contactRequest                  | P UC    | <i title="/contact/request">Copy</i>                                       |                |                                                         |
| contactDelete                   | P UC    | <i title="/contact/delete">Copy</i>                                        |                |                                                         |
| contactIsFriend                 | P UC    | <i title="/contact/isFriend">Copy</i>                                      |                |                                                         |
| contactDescribe                 | P UC    | <i title="/contact/describe">Copy</i>                                      |                |                                                         |
| contactInvite                   | P UC    | <i title="/contact/invite">Copy</i>                                        |                |                                                         |
| contactReport                   | P UC    | <i title="/contact/report">Copy</i>                                        |                |                                                         |
| :book: `cstApi.js`              |         |                                                                            |                |                                                         |
| getCstConfig                    | P       | <i title="http://crystal-meeting-login.crystal:9996/user/v1/auth">Copy</i> |                |                                                         |
| getUcConfigServer               | P UC    | <i title="/config/server/info">Copy</i>                                    |                |                                                         |
| :book: `deleteApi.js`           |         |                                                                            |                |                                                         |
| postSendCode                    | P UC    | <i title="/account/deleteaccount">Copy</i>                                 |                | 注销账号发送验证码                                      |
| postAccountVerify               | P UC    | <i title="/account/verify">Copy</i>                                        |                | 邮箱验证码校验                                          |
| deleteAccountFeedbackSubmit     | P SC    | <i title="/customer/feedback/delAccountSubmit">Copy</i>                    |                | log Report Feedback                                     |
| :book: `document.js`            |         |                                                                            |                |                                                         |
| postDocumentDpslink             | P UC    | <i title="/document/dpslink">Copy</i>                                      |                | 获取 office                                             |
| postDocumentGetDpslink          | P UC    | <i title="/document/getDpsLink">Copy</i>                                   |                |                                                         |
| :book: `dohApi.js`              |         |                                                                            |                |                                                         |
| :book: `FileApi.js`             |         |                                                                            |                |                                                         |
| :book: `forceCloseHandle.js`    |         |                                                                            |                |                                                         |
| :book: `liveApi.js`             |         |                                                                            |                |                                                         |
| :book: `loginApi.js`            |         |                                                                            |                |                                                         |
| :book: `loopConnectSocket.js`   |         |                                                                            |                |                                                         |
| :book: `meetingApi.js`          |         |                                                                            |                |                                                         |
| :book: `messageApi.js`          |         |                                                                            |                |                                                         |
| :book: `messageManger.js`       |         | [messageManger.js](/router/src/api/messageManger)                          |                |                                                         |
| :book: `peerApi.js`             |         |                                                                            |                |                                                         |
| initUserInfo                    | FN      |                                                                            |                |                                                         |
| runTask\*                       | FN      |                                                                            |                |                                                         |
| runTask                         | FN      |                                                                            |                |                                                         |
| peerSetDBItem                   | EX      |                                                                            |                |                                                         |
| togglePeerMute                  | P UC    | <i title="/contact/mute">Copy</i>                                          |                | 静音                                                    |
| togglePeerMute                  | P UC    | <i title="/channel/config">Copy</i>                                        |                | 静音                                                    |
| getMeetingInfo                  | G UC    | <i title="/hwm/findMeeting">Copy</i>                                       |                | 獲取會議状态                                            |
| checkMeetingInfo                | G UC    | <i title="/hwm/checkMeeting">Copy</i>                                      |                | 获取会议信息轻量级接口                                  |
| markDialogUnread2               | G UC    | <i title="/user/message">Copy</i>                                          |                | 设为未读                                                |
| markDialogRead2                 | G UC    | <i title="/user/message">Copy</i>                                          |                | 设为已读                                                |
| deleteChatOnly                  | EX      |                                                                            |                |                                                         |
| deleteChat                      | G UC    | <i title="/user/remove">Copy</i>                                           |                | 请求删除接口                                            |
| toggleDialogPin                 | G UC    | <i title="/user/top">Copy</i>                                              |                | 置顶                                                    |
| updatePeers                     | EX      |                                                                            |                |                                                         |
| dbPeers                         | EX      |                                                                            |                |                                                         |
| serverPeers                     | EX      |                                                                            |                |                                                         |
| formatePeer                     | EX      |                                                                            |                |                                                         |
| formateCustomerInfo             | EX      |                                                                            |                |                                                         |
| getPeersWithDatabase            | EX      |                                                                            |                |                                                         |
| peerHid                         | EX      |                                                                            |                |                                                         |
| getFriendAndChannelWithDatabase | EX      |                                                                            |                |                                                         |
| updateContactItem               | EX      |                                                                            |                |                                                         |
| getPeerInfoWithDatabase         | EX      |                                                                            |                |                                                         |
| get                             | EX      |                                                                            |                |                                                         |
| initGroupAdditional             |         |                                                                            |                |                                                         |
| batchUpdateSession              |         |                                                                            |                |                                                         |
| getPeersWithServer              |         |                                                                            |                |                                                         |
| initDialogs                     |         | <i title="/channel/getlist">Copy</i>                                       |                |                                                         |
| getGroupUidList                 | G UC    | <i title="/channel/getlist">Copy</i>                                       |                | 获取群成员列表                                          |
| getGroupListInfo                | G UC    | <i title="/uc/channel/getlistinfo">Copy</i>                                |                | 获取群成员列表和简介                                    |
| getSpaceAllChannelAndMembers    | G UC    | <i title="/channel/getGroupListInfo">Copy</i>                              |                | 获取企业下所有群组和对应群成员 ID                       |
| getContactList                  | G UC    | <i title="/contact/getlist">Copy</i>                                       |                | 获取联系人列表                                          |
| getChannelList                  | G UC    | <i title="/channel/getenterprisegroup">Copy</i>                            |                | 获取 channels 列表                                      |
| getMineHWIDList                 | G UC    | <i title="/hwm/find">Copy</i>                                              |                | 获取自己的华为账号信息                                  |
| getHWIDList                     |         | <i title="/hwm/findMany">Copy</i>                                          |                | 获取华为的账号                                          |
| getContactInfoList              | P UC    | <i title="/contact/describe">Copy</i>                                      |                | 获取联系人详细信息                                      |
| getProfileListScan              | P UC    | <i title="/profile/scan">Copy</i>                                          |                | 获取联系人简略信息                                      |
| getContactSimpleInfoList        | EX      |                                                                            |                |                                                         |
| getContactStatus                | G UC    | <i title="/company/status">Copy</i>                                        |                | 获取联系人在线状态                                      |
| makeVuexNewest                  | DB      | [URL](/note/DB/DBExec?id=makeVuexNewest "123123")                          |                |                                                         |
| getAllSearchPeer                | DB      | [URL](/note/DB/DBExec?id=getAllSearchPeer)                                 |                |                                                         |
| findPeerIn                      | DB      | [URL](/note/DB/DBExec?id=findPeerIn)                                       |                |                                                         |
| findAvailableForwarders         | DB      | [URL](/note/DB/DBExec?id=findAvailableForwarders)                          |                |                                                         |
| findAvailablePersonsByLike      | DB      | [URL](/note/DB/DBExec?id=findAvailablePersonsByLike)                       |                |                                                         |
| findAvailablePersonsByHids      | DB      | [URL](/note/DB/DBExec?id=findAvailablePersonsByHids)                       |                |                                                         |
| findPersonsByHids               | DB      | [URL](/note/DB/DBExec?id=findPersonsByHids)                                |                |                                                         |
| findAvailablePersons            | DB      | [URL](/note/DB/DBExec?id=findAvailablePersons)                             |                |                                                         |
| updateOrAdd                     | DB      | [URL](/note/DB/DBExec?id=updateOrAdd)                                      |                | mtime 会影响到 Requests 排序                            |
| saveOrUpdate                    | FN      |                                                                            |                |                                                         |
| saveOrUpdateWith                | EX      |                                                                            |                |                                                         |
| batchFetchContacts              | G FP    | <i title="/contact/blocklist">Copy</i>                                     |                | 优化大体量通讯录首次获取时缓慢问题                      |
| updateFriendTypeToPeer          | DB      | [URL](/note/DB/DBExec?id=updateFriendTypeToPeer)                           |                |                                                         |
| updateNotYourFriendList         | DB      | [URL](/note/DB/DBExec?id=updateNotYourFriendList)                          |                |                                                         |
| allContacts                     | EX      |                                                                            |                |                                                         |
| isNotIn                         | EX      |                                                                            |                |                                                         |
| allChannels                     | DB      | [URL](/note/DB/DBExec?id=allChannels)                                      |                |                                                         |
| allChannels                     | DB      | [URL](/note/DB/DBExec?id=allChannels)                                      |                |                                                         |
| channel                         | EX      |                                                                            |                |                                                         |
| fetchSummaryByhids              | DB      | [URL](/note/DB/DBExec?id=fetchSummaryByhids)                               |                |                                                         |
| fetchSummary                    |         |                                                                            |                |                                                         |
| diffXBaseOn                     | EX      |                                                                            |                |                                                         |
| fetchSummaryForStatus           |         |                                                                            |                |                                                         |
| getPeerWhereAsyncDBWithSummary  | DB      | [URL](/note/DB/DBExec?id=getPeerWhereAsyncDBWithSummary)                   |                |                                                         |
| setSinglePeerOnlineStatus       |         |                                                                            |                |                                                         |
| updatePeerStatus                |         |                                                                            |                |                                                         |
| fetchSummaryInner               |         |                                                                            |                |                                                         |
| installContactRequest           | G FP    | <i title="/contact/reqlist">Copy</i>                                       |                |                                                         |
| sendInvitation                  | P FP    | <i title="/contact/invite">Copy</i>                                        |                |                                                         |
| sendInvitation                  | DB      | [URL](/note/DB/DBExec?id=haveJustRead)                                     |                |                                                         |
| haveJustRead                    | DB      | [URL](/note/DB/DBExec?id=fetchNumber)                                      |                |                                                         |
| fetchNumber                     | EX      |                                                                            |                |                                                         |
| fetchRequests                   | DB      | [URL](/note/DB/DBExec?id=fetchRequests)                                    |                |                                                         |
| removeRequest                   | G FP    | <i title="/contact/delreq">Copy</i>                                        |                |                                                         |
| newFriendComing                 |         |                                                                            |                |                                                         |
| accpetedBySomeone               |         |                                                                            |                |                                                         |
| findContactWithPhone            | G UC    | <i title="/account/user/search">Copy</i>                                   |                |                                                         |
| accpetFriend                    | P FP    | <i title="/contact/accept">Copy</i>                                        |                |                                                         |
| addFriendLocally                | EX      |                                                                            |                |                                                         |
| addFriend                       | P FP    | <i title="/contact/request">Copy</i>                                       |                |                                                         |
| findContact                     | G FP    | <i title="/account/user/search">Copy</i>                                   |                |                                                         |
| updateBlock                     | P FP    | <i title="/contact/blocklist">Copy</i>                                     |                | Contacts                                                |
| fetchWholeForContactKeepType    | G FP    | <i title="/contact/blocklist">Copy</i>                                     |                | 点击个人详情 更新并拉取你完整的个人信息, 保存 type 信息 |
| fetchWholeForContact            | P FP    | <i title="/contact/blocklist">Copy</i>                                     |                | 点击个人详情 更新并拉取你完整的个人信息                 |
| blockMe                         | EX      |                                                                            |                |                                                         |
| unBlockMe                       | EX      |                                                                            |                |                                                         |
| deleteContactDB                 | DB      | [URL](/note/DB/DBExec?id=deleteContactDB)                                  |                |                                                         |
| deleteContact                   | P FP    | <i title="/contact/delete">Copy</i>                                        |                |                                                         |
| listToMap                       | EX      |                                                                            |                |                                                         |
| createChannel                   | P FP    | <i title="/channel/create">Copy</i>                                        |                |                                                         |
| fetchWholeForChannel            | DB      | [URL](/note/DB/DBExec?id=fetchWholeForChannel)                             |                |                                                         |
| updateWholeForChannel           | EX      |                                                                            |                |                                                         |
| areWeFriend                     | DB      | [URL](/note/DB/DBExec?id=areWeFriend)                                      |                |                                                         |
| isItMe                          | EX      |                                                                            |                |                                                         |
| leaveChannel                    | P FP    | <i title="/channel/leave">Copy</i>                                         |                |                                                         |
| updateProfile                   | P FP    | <i title="/channel/editprofile">Copy</i>                                   |                |                                                         |
| addContactForChannel            | P FP    | <i title="/channel/add">Copy</i>                                           |                |                                                         |
| removeContactFromChannel        | P FP    | <i title="/channel/remove">Copy</i>                                        |                |                                                         |
| fetchFiles                      | DB      | [URL](/note/DB/DBExec?id=fetchFiles)                                       |                |                                                         |
| saveMentioned                   | DB      | [URL](/note/DB/DBExec?id=saveMentioned)                                    |                |                                                         |
| fetchMetioned                   | DB      | [URL](/note/DB/DBExec?id=fetchMetioned)                                    |                |                                                         |
| takeLastMessage                 | DB      | [URL](/note/DB/DBExec?id=takeLastMessage)                                  |                |                                                         |
| takeUUIDOrder                   | DB      | [URL](/note/DB/DBExec?id=takeUUIDOrder)                                    |                |                                                         |
| fetchMessageAfterAToB           | DB      | [URL](/note/DB/DBExec?id=fetchMessageAfterAToB)                            |                |                                                         |
| fetchMessageFrom                | DB      | [URL](/note/DB/DBExec?id=fetchMessageFrom)                                 |                |                                                         |
| fetchMessageByUUID              | DB      | [URL](/note/DB/DBExec?id=fetchMessageByUUID)                               |                |                                                         |
| refshAvatar                     | EX      |                                                                            |                |                                                         |
| getPeersByHids                  | DB      | [URL](/note/DB/DBExec?id=getPeersByHids)                                   |                |                                                         |
| getSinglePeerByHid              | DB      | [URL](/note/DB/DBExec?id=getSinglePeerByHid)                               |                |                                                         |
| showMe                          | DB      | [URL](/note/DB/DBExec?id=showMe)                                           |                |                                                         |
| assertWhatBeNotDeleted          | DB      | [URL](/note/DB/DBExec?id=assertWhatBeNotDeleted)                           |                |                                                         |
| assertNoMyself                  | EX      |                                                                            |                |                                                         |
| setStatus                       | P SC FP | <i title="/user/status">Copy</i>                                           |                |                                                         |
| makeMessageFail                 | DB      | [URL](/note/DB/DBExec?id=makeMessageFail)                                  |                |                                                         |
| makeMessageSuccess              | DB      | [URL](/note/DB/DBExec?id=makeMessageSuccess)                               |                |                                                         |
| deleteAMessage                  | DB      | [URL](/note/DB/DBExec?id=deleteAMessage)                                   |                |                                                         |
| checkIfsendMsg                  | DB      | [URL](/note/DB/DBExec?id=checkIfsendMsg)                                   |                |                                                         |
| readSettings                    | DB      | [URL](/note/DB/DBExec?id=readSettings)                                     |                |                                                         |
| isMyfriend                      | G UC    | <i title="/channel/isMember">Copy</i>                                      |                |                                                         |
| isMyfriend                      | G UC    | <i title="/contact/isFriend">Copy</i>                                      |                |                                                         |
| spaceId                         | EX      |                                                                            |                |                                                         |
| peer                            | EX      |                                                                            |                |                                                         |
| isMyGroup\*                     | EX      |                                                                            |                |                                                         |
| isMyfriend\_                    | EX      |                                                                            |                |                                                         |
| getTwoFactorUrl                 | G SC    | <i title="/user/getPersonalUrl">Copy</i>                                   |                |                                                         |
| reporting                       | P FP    | <i title="/contact/report">Copy</i>                                        |                |                                                         |
| checkReporting                  | P FP    | <i title="/contact/report">Copy</i>                                        |                |                                                         |
| getEnterpriseMember             | EX      |                                                                            |                |                                                         |
| setEnterpriseMember             | EX      |                                                                            |                |                                                         |
| :book: `profile.js`             |         |                                                                            |                |                                                         |
| profileScan                     | P UC    | <i title="/profile/scan">Copy</i>                                          |                |                                                         |
| :book: `receiveMessage.js`      |         |                                                                            |                |                                                         |
| :book: `retryRun.js`            |         |                                                                            |                |                                                         |
| :book: `sdkApi.js`              |         |                                                                            |                | 会议接口                                                |
| getCstMeetingServerList         | P UC    | <i title="/server/list">Copy</i>                                           |                |                                                         |
| getCstMeetingBatchBindingInfo   | P UC    | <i title="/binding/info/batch">Copy</i>                                    |                |                                                         |
| getCstMeetingBindingInfo        | P UC    | <i title="/binding/info">Copy</i>                                          |                |                                                         |
| getCstMeetingSdkToken           | P UC    | <i title="/token">Copy</i>                                                 |                |                                                         |
| createCstMeeting                | P UC    | <i title="/createmeeting">Copy</i>                                         |                |                                                         |
| joinCstMeetingByPwd             | P UC    | <i title="/joinMeetingByPwd">Copy</i>                                      |                |                                                         |
| cstMeetingAuthorizeJoin         | P UC    | <i title="/authorize/join">Copy</i>                                        |                |                                                         |
| cstMeetingAuthorizeInvite       | P UC    | <i title="/authorize/invite">Copy</i>                                      |                |                                                         |
| cstMeetingJoinAnonymous         | P UC    | <i title="/join/anonymous">Copy</i>                                        |                |                                                         |
| userAddExercisers               | P UC    | <i title="/meeting/exerciser/add">Copy</i>                                 |                |                                                         |
| getExerciserlist                | P UC    | <i title="/meeting/exerciser/list">Copy</i>                                |                |                                                         |
| userRemoveExerciser             | P UC    | <i title="/meeting/exerciser/remove">Copy</i>                              |                |                                                         |
| getAuthorizerlist               | P UC    | <i title="/meeting/authorizer/list">Copy</i>                               |                |                                                         |
| userRemoveAuthorizer            | P UC    | <i title="/meeting/authorizer/remove">Copy</i>                             |                |                                                         |
| createCstMeetingAppoint         | P UC    | <i title="/createmeeting/appoint">Copy</i>                                 |                |                                                         |
| editCstMeeting                  | P UC    | <i title="/meeting/edit">Copy</i>                                          |                |                                                         |
| createCstMeetingCycle           | P UC    | <i title="/createmeeting/cycle">Copy</i>                                   |                |                                                         |
| editCstMeetingSub               | P UC    | <i title="/meeting/edit/sub">Copy</i>                                      |                |                                                         |
| getCstParticipants              | P UC    | <i title="/meeting/accept/detail">Copy</i>                                 |                |                                                         |
| updateCstMeetingStatus          | P UC    | <i title="/meeting/accept/update">Copy</i>                                 |                |                                                         |
| cancelCstAppointedMeeting       | P UC    | <i title="/meeting/cancel">Copy</i>                                        |                |                                                         |
| getCstMeetingList               | P UC    | <i title="/meeting/list">Copy</i>                                          |                |                                                         |
| getCstMeetingInfo               | P UC    | <i title="/meeting/detail">Copy</i>                                        |                |                                                         |
| checkCstMeetingInfo             | P UC    | <i title="/meeting/check">Copy</i>                                         |                |                                                         |
| checkNoLoginCstMeetingInfo      | P UC    | <i title="/meeting/check/nologin">Copy</i>                                 |                |                                                         |
| getMeetingListSub               | P UC    | <i title="/meeting/list/sub">Copy</i>                                      |                |                                                         |
| getMeetingCalendarList          | P UC    | <i title="/meeting/list/calendar">Copy</i>                                 |                |                                                         |
| cancelCstSubMeeting             | P UC    | <i title="/meeting/cancel/sub">Copy</i>                                    |                |                                                         |
| getMeetingDetailSub             | P UC    | <i title="/meeting/detail/sub">Copy</i>                                    |                |                                                         |
| :book: `sessionApi.js`          |         |                                                                            |                |                                                         |
| :book: `socketUtil.js`          |         | [socketUtil.js](/router/src/api/socketUtil)                                |                |                                                         |
| :book: `spaceApi.js`            |         |                                                                            |                | 空间请求                                                |
| getSpaceList                    | G UC    | <i title="/company/space">Copy</i>                                         | {enterpriseId} | 获取个人空间列表接口                                    |
| switchSpace                     | G UC    | <i title="/company/switched">Copy</i>                                      |                | 企业空间切换接口                                        |
| getCompanyMembers               | G UC    | <i title="/company/getlist">Copy</i>                                       |                | 企业空间联系人列表                                      |
| getCompanydepart                | G UC    | <i title="/company/list">Copy</i>                                          |                | 企业部门组织列表                                        |
| getDepartMembers                | G UC    | <i title="/company/members">Copy</i>                                       |                | 企业部门部门成员列表                                    |
| getSpaceLimitList               | P UC    | <i title="/matrx-user/commonConfig/getMessageFilterConfig">Copy</i>        |                | 获取企业空间限制文件发送，接收消息配置                  |
| :book: `ucApi.js`               |         |                                                                            |                |                                                         |
| ucChannelGetList                | G UC    | <i title="/uc/channel/getlistinfo">Copy</i>                                |                |                                                         |
| :book: `updaterApi.js`          |         |                                                                            |                | 自动升级                                                |
| fetchCountryCode                | P UC    | <i title="/account/countrycode">Copy</i>                                   |                |                                                         |
| getVersionInfo                  | P SC    | <i title="/configUpdate/v1/info">Copy</i>                                  |                | 获取新版本信息，以及个人权限信息等，是否更新            |
| :book: `uploadApi.js`           |         |                                                                            |                | 日志分片上传                                            |
| uploadLogInit                   | P P/UC  | <i title="/pfm/log/init">Copy</i>                                          | {},idcUrl      | 文件上传初始化                                          |
| uploadLogComplete               | P P/UC  | <i title="/pfm/log/complete">Copy</i>                                      | {},idcUrl      | 文件上传中                                              |
| uploadLog                       | P P/UC  | <i title="/pfm/log/upload">Copy</i>                                        | {},idcUrl      | 文件上传完成生成地址                                    |
| uploadLogInit                   | P P/UC  | <i title="/pfm/logFile/init">Copy</i>                                      | {},idcUrl      | 文件上传初始化                                          |
| uploadLogComplete               | P P/UC  | <i title="/pfm/logFile/complete">Copy</i>                                  | {},idcUrl      | 文件上传中                                              |
| uploadLog                       | P P/UC  | <i title="/pfm/logFile/upload">Copy</i>                                    | {},idcUrl      | 文件上传完成生成地址                                    |
| :book: `userApi.js`             |         |                                                                            |                | 登陆接口                                                |
| userToplist                     | G UC    | <i title="/user/toplist">Copy</i>                                          |                |                                                         |
| setUserTop                      | G UC    | <i title="/user/top">Copy</i>                                              |                |                                                         |
| userMessage                     | G UC    | <i title="/user/message">Copy</i>                                          |                |                                                         |
| userRemove                      | G UC    | <i title="/user/remove">Copy</i>                                           |                |                                                         |
| userStatus                      | P SC    | <i title="/user/status">Copy</i>                                           |                |                                                         |
| userGetPersonalUrl              | G SC    | <i title="/user/getPersonalUr">Copy</i>                                    |                |                                                         |
| userPreLoginCheck               | G UC    | <i title="/user/preLoginCheck">Copy</i>                                    |                |                                                         |
| userSignin                      | P SC    | <i title="/user/signin">Copy</i>                                           |                |                                                         |
| userVerifyTwoStepCode           | G SC    | <i title="/user/verifyTwoStepCode">Copy</i>                                |                |                                                         |
| userSmsTwoStepCode              | P SC    | <i title="/user/smsTwoStepCode">Copy</i>                                   |                |                                                         |
| userFreeLogin                   | P SC    | <i title="/user/freelogin">Copy</i>                                        |                |                                                         |
| userSocketServer                | G UC    | <i title="/wecs/user/socketServer">Copy</i>                                |                |                                                         |
| userLogout                      | P SC    | <i title="/user/logout">Copy</i>                                           |                |                                                         |
| userPreLogin                    | P UC    | <i title="/user/prelogin">Copy</i>                                         |                |                                                         |
| userSetKeys                     | P UC    | <i title="/keys/setKeys">Copy</i>                                          |                |                                                         |
| userInfoApi                     |         |                                                                            |                |                                                         |
| setPwdChange                    | P SC    | <i title="/account/verify/changepwd">Copy</i>                              |                |                                                         |
| changePreference                | P SC    | <i title="/preference/changePreference">Copy</i>                           |                | 设置消息回执开关                                        |
| queryPreference                 | P SC    | <i title="/preference/queryPreference">Copy</i>                            |                | 查询消息回执开关                                        |
| queryReceiptInfo                | P UC    | <i title="/mrps/HistoryReceiptMsg/queryReceiptInfo">Copy</i>               |                | 查询群回执信息                                          |
|                                 |         |                                                                            |                |                                                         |

会议接口

/hwm/bind
/hwm/createrealtimemeeting
/hwm/stopmeeting

/hwm/exerciserlist
/hwm/addexerciser
/hwm/removeexerciser

/hwm/authorizerlist
/hwm/removeauthorizer

/mssu/meetingsync/getAuthUrl

/hwm/createmeeting
/hwm/editmeeting
/hwm/getMeetings
/hwm/updatemeetingstatus
/hwm/findmeetingparticipants
/hwm/getEnterpriseCapacity
/hwm/getParticipantStatus
/hwm/getParticipants

/user/capability

/hwm/cancelappointmeeting
/hwm/cancelrecurringmeeting
/hwm/cancelsubrecurringMeeting

/hwm/applyhost

/hwm/applyhostByVmrUrl

/hwm/findMeeting
/hwm/find
/hwm/findMany

/profile/scanforaccount

直播接口
/meeting/telecast/bind/account
/meeting/telecast/room/status
/meeting/telecast/author
1v1 呼叫接口
/cmeeting/v2/gettoken
/cmeeting/v2/creatroom

质量上报
/mssu/meetingreport/getConfig
clientlog/loginreport
clientlog/nologinreport
clientlog/loginbatchreport
doh 接口
/dns-query
/domain/get
/api/idc/probe_domain
idc 接口
/api/idc/find

登陆接口
/user/signin
/user/preLoginCheck
/user/prelogin
/user/verifyTwoStepCode
/user/smsTwoStepCode
/user/freelogin
/keys/setKeys
/wecs/user/socketServer
/user/logout
/user/getPersonalUrl

空间接口
/channel/config
/channel/getlist
/uc/channel/getlistinfo
/contact/getlist
/channel/getenterprisegroup
channel/isMember
/channel/remove
channel/add
channel/editprofile
channel/leave
channel/create
/company/status
company/space
company/switched
company/getlist
company/list
company/members

个人信息修改
profile/modify
profile/upload
profile/downloadv2
联系人接口
user/toplist
/user/remove
/user/top
/user/status
/contact/describe 取联系人详细信息
/profile/scan
/contact/mute
/contact/blocklist
/contact/reqlist
/contact/invite
/contact/delreq
/contact/accept
/contact/request
contact/report
contact/isFriend
contact/delete

/account/user/search
account/countrycode
account/verify/changepwd

message 接口
/history/remove/session
/user/message

文件发送
/pfm/file/send
/pfm/zip/merge
/pfm/zip/particular
/pfm/byte/urlv2

日志分片上传
pfm/log/send
pfm/log/init
/pfm/log/upload
pfm/log/complete

customer/feedback/submit

Pin 消息列表
/msgmgr/pinnedList
/msgmgr/publishPin
消息回复列表
/msgmgr/v1/replylist
/sticker/${hid}/giphyInfo
/sticker/${hid}/downurl
自动升级
configUpdate/v1/info

全局消息通知
wapi/notice/poll
https://matrx-prod.obs.ae-ad-1.g42cloud.com/notice/error.json

## API 通用参数

| Error Code | 说明        | 描述                                                                                    |
| ---------- | ----------- | --------------------------------------------------------------------------------------- |
| path       | 公共参数    |                                                                                         |
|            | clientver   | 客户端版本 格式 %d.%d.%d 类似 4.0.2310，可以传超过和少于 3 个数字，缺省默认 0，超过无效 |
|            | rid         | 登录的时间戳                                                                            |
|            | loc         | 语言                                                                                    |
|            | osver       | 操作系统版本号                                                                          |
|            | pkg         | 包名                                                                                    |
|            | model       | 设备 model（pattern）                                                                   |
|            | deviceId    | 设备 ID（目前为随机字符串，未来用设备指纹）。                                           |
| header     | 公共参数    |                                                                                         |
|            | COUNTRYCODE | 用户国家码                                                                              |
|            | CLIENTTYPE  | clienttype 枚举值：[ios、android、mac、windows]                                         |
|            | TOKEN       | 校验信息                                                                                |

## API 返回

所有的接口的返回形式都是统一为：

> 正常返回

```js
{
	"responseHeader": {
		"status": 200,
		"msg": "",
		"version": "1.0"
	},
	"response": {}
}
```

> 错误返回

```js
{
	"responseHeader": {
		"status": 具体的错误码,
		"msg": "具体的错误信息字符串",
		"version": "1.0"
	},
	"response": {}
}
```

> 错误码

| Error Code | 说明                          | 描述 |
| ---------- | ----------------------------- | ---- |
| 626        | STATUS_USER_EXISTS            |      |
| 836        | STATUS_ERROR_DEVICED_CHANGED  |      |
| 635        | STATUS_CLIENT_VERSION_TOO_OLD |      |
| 400        | CLIENT_ERROR_BAD_REQUEST      |      |

# [socketUtil.js](/router/src/api/socketUtil)

account
apiUtil
avrRiskApi
axiosInstance
callApi
callFeedbackApi
channelApi
contactApi
cstApi
deleteApi
document
dohApi
FileApi
forceCloseHandle
liveApi
loginApi
loopConnectSocket
meetingApi
messageApi
messageManger
peerApi
profile
receiveMessage
retryRun
sdkApi
sessionApi
socketUtil
spaceApi
ucApi
updaterApi
uploadApi
userApi
