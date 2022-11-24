转至元数据结尾
由 jixiong li 创建, 最后修改于七月 25, 2022 转至元数据起始
集成方式
Zoom
无

zoom/xxsdk jquery/vue/react/angular 的集成 demo
不允许 iframe 集成，未来也无版本规划

腾讯云
TUIKit (多人视频会议 Vue2/Vue3)

trtc-js-sdk vue demo

Agora（声网）
agora-react-uikit

agora-rtc-sdk-ng vue react jquery demo
web meeting
规划中 (React)

规划中 react demo 由于暴露整个 ui+service，目前采用 iframe 集成
会前会中功能
通过 iframe 方式集成，通过 iframe 连接参数传递必要 sdk 必要信息，通过 postMessage 方式通讯。

连接参数 形如：

iframe demo

<iframe id="demo"
   title="Crystal Web Meeting"
   width="1000"
   height="1000"
   allow="camera 'src'; microphone 'src'; fullscreen "
   frameborder="0"
   src="http://localhost:5020/meetingweb/room?mid=274709963&pwd=312564&env=HKTest&token=0d3c5f98645934656082ada57f7a6df2&uid=1-UA-203700418245840896&nickname=web&audio_status=1&video_status=1"
/>
连接参数

mid
会议 id

pwd
会议密码（长/短）

token
sdk token

uid
sdk 用户 id

nickname 入会昵称
audio_status 麦克风 状态
1 开启 0 关闭

video_status 摄像头 状态
1 开启 0 关闭

external 外部联系人
1 是 0 不是 不填 不是

iframe 初始化 allow 能力

camera
src

允许使用摄像头
microphone
src

允许使用麦克风
fullscreen

允许全屏

postMessage 父子通讯 见 demo

id
uuid

避免异步处理不同消息导致异常
type
枚举

meetingEnd 会议结束 跳转会前反馈
meetingRmove 被移除 跳转会前页面提示
meetingReject 等候室不批准 跳转会前页面提示
msg
内容

具体内容

设备管理能力
navigator.mediaDevices.getUserMedia 获得权限后 调用
navigator.mediaDevices.enumerateDevices // 设备列表

异常场景
跳转逻辑

SDK Token 失效刷新 会前页面重新登录或点击 join
SDK Token 未失效刷新 会中页面

浏览器兼容
Zoom
Chrome 69+

Firefox 56+

Safari 11+

Edge 79+

https
虚拟背景 仅 Chrome 支持
屏幕共享 Safari 不支持

在 2021 Aug 17 不再支持 IE11

腾讯云
Chrome 56+

Firefox 56+

Safari 11+

Edge 80+

Opera 46+

https
不同功能支持要求不一，详见如下：

https://cloud.tencent.com/document/product/647/17249

Agora（声网）
Chrome 69+

Firefox 56+

Safari 11+

Edge 79+

https
web meeting
Chrome 69+

Firefox 56+

Safari 11+

Edge 79+

https
需测试最低支持版本，提示用户下载最新版本，
以提供更好质量更多功能。
mediasoup 最低支持
https://github.com/versatica/mediasoup-client/blob/ae7cff4fd43f8e9f93225dfaa9348cfdd73a82d6/lib/Device.js#L48

Chrome 55 +
firefox 60 +
safari11 +

iframe 父子通讯 Demo

iframe demo
// 父页面 即 会前页面
mounted(){
function messageListener (event) {
// 安全: 非同域剔除
if (event.origin !== origin) {
return;
}
const data = JSON.parse(event.data);
// meetingEnd: 会议结束 会前反馈
// meetingRmove: 被移除 会前页面提示
// meetingReject: 等候室不批准 会前页面提示
switch (data.type) {
case 'meetingEnd':
break;
case 'meetingRmove':
break;
case 'meetingReject':
break;
}
}
const meetingFrame = meetingFrameRef.contentWindow;
window.addEventListener('message', messageListener, false);
const postPayLoad = {
id: uuid(),
type: 'meetingRmove' | 'meetingEnd' | 'meetingReject',
msg: {
xxx: xx
}
}
meetingFrame.postMessage(postPayLoad)
}
iframe demo
// 被嵌入页面 即 会中页面
useEffect(() => {
const handleFrameMessage = (event)=> {
// 安全: 非同域剔除
if (event.origin !== "http://会前连接") {
return;
}
const message = JSON.parse(event.data);
const postPayLoad = {
id: uuid(),
type: 'meetingRmove' | 'meetingEnd' | 'meetingReject',
msg: {
xxx: xx
}
}
// 发送消息 给 父
event.source.postMessage(JSON.stringify(postPayLoad), parentMessageEvent.origin);
}

    window.addEventListener('message', handleFrameMessage);

    return () => {
      window.removeEventListener('message', handleFrameMessage);
    };

}, []);
