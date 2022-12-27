# Host 创建及发起投票

> 不用用户展示区别

1. host
1. 参会人
1. 无套餐门槛

## Host 创建及发起投票

> new poll

1. 已创建未发布：
1. 已发布：
1. 已结束：

> my recent polls

1. 点击该投票跳转至编辑该投票的创建页面

### 创建

注意：

1. 作为会议 Host，点击 Polls 弹出如左图弹窗页面，该弹窗可随意拖动，窗口层级高于会议窗口，若窗口为打开的状态时关闭会议，窗口也随会议关闭
1. 弹窗底部为新建投票按钮 Add Poll，当投票个数为 50 个时，再点击 Add Poll，toast 提示：You can create maximum 50 polls

#### Untitled Poll

下方为投票标题输入框，支持编辑，若选择 Poll，则输入框默认文案为 Untitled Poll，若选择 Quiz，则输入框默认文案为 Untitled Quiz，标题最多支持 64 个字符，超过不能输入，若标题输入全部为空格，则保存时保存为默认的标题文案

> 12313

支持编辑，最多支持 300 个字符，超过不能输入，若标题输入全部为空格，则保存时保存为默认的标题文案

> 123123

#### Add Option

当选项个数为 10 时，Add Option 按钮消失，无法再添加新的选项，问题卡复制按钮消失

#### Anonymous 是否匿名投票（记名）

#### Timer 定时器（非定时）

1. 秒的时长输入框，默认为 10 分钟
1. 点击 OK，若勾选了 Enable Timer，则时间设定成功
1. toast 提示：The timer should be set between 00:00:01 and 24:00:00 设置不成功，保留弹窗点击 Cancel，关闭弹窗
1. 输入时间格式不对，弹窗提示

#### Back 返回

#### Save 保存(进入预览)

#### Untitled Question

### 预览

1. 表示 Poll 或 Quiz 的图标
1. 投票标题
1. 若设置了投票时长，则展示 Time limit: 后跟设置的时长
1. 投票类型，记名投票标识为 Non-anonymous，匿名投票标识为 Anonymous
1. 若设置了投票时长，则展示 Time limit: 后跟设置的时长
1. 展示问题和选项，此处选项处理成不可选，Quiz 要标识正确的选项
1. 弹窗下方操作按钮
1. Launch，点击按钮发布投票，成功后，跳转至如下页面

#### 倒计时

#### Edit

> Duplicate poll
> Delete poll

#### Launch 发布

### Launch 发布后

#### 投票统计

#### End Poll

### 投票结果文件

## Host 通过最近使用的投票新建投票

## 参会人投票及查看分享的投票结果

### 投票弹窗列表

若会中 Host 发起了新的投票，那么在会议窗口上给除发起人之外的所有参会人弹出如左图通知，通知文案：The host has launched a poll. View
若参会人还未 view 或关闭投票通知，host 又发起了另一个投票，则新的投票通知覆盖旧的投票通知，点击 view 后进入最新发起的投票详情页面

若点击 View 时，该投票已被结束或删除，则弹出 toast 提示：This poll has been closed or deleted

### Submit

在所有问题都被答完前，Submit 按钮为置灰状态
点击提交后，弹出 toast 提示：Submitted. Thank you for your participation. 并返回至 Polls 列表，且该投票展示为 Voted 状态
投票已被结束或删除，则弹出 toast 提示：This poll has been closed or deleted 依然返回至 Polls 列表

### view 弹窗进人口

1. 会中接收投票通知：The host is sharing the poll results. View
1. 若参会人还未 view 或关闭投票通知，host 又发起分享了另一个投票结果，则新的通知覆盖旧的通知，点击 view 后进入最新分享的投票结果详情页面
1. 刷新当前窗口投票窗口
1. 检测 View 是否结果 弹出 toast 提示：The host has stopped sharing the poll results
1. 如果是 Quiz 的情况，注意普通参会人只有在结果分享中才能看到正确答案的标识
