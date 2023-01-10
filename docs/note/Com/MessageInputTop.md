# 输入框

## 思维导图

<script>

</script>

```mermaid
graph LR;
	A-->B;
	click A callback "Tooltip for a callback"
	click B "http://cikaros.gitee.io" "This is a tooltip for a link"
```

```mermaid
stateDiagram-v2
	state message_sendbox_container {
		state message_sendboxwrap_faile {
			null
		}
		state replyPannel {
			replyPannels
		}
    state blocked_message_sendboxwrap {
			unblock_span
		}
    state message_box_remove {
			person_removed
		}
    state message_sendboxwrap {
			action_icon_group1: action_icon_group
    	MessageInput
    	Icon
		}
		state Y1 <<choice>>
		Y1 --> blocked_message_sendboxwrap: isBeBlockInE2EE 或 isFriend
		blocked_message_sendboxwrap --> message_box_remove: !isExistFromDBMemberInCurrentSpace 或 contactsInitDone
		message_box_remove --> message_sendboxwrap: else
		message_sendboxwrap_faile --> replyPannel: 同级
		note left of blocked_message_sendboxwrap: 被拉黑
		note left of message_box_remove: 被移除空间
		note left of replyPannel: reply回复
  }
	state div {
		message_hidden_input
  }
	state actionIconGroup {
		emoji_icon
  }
	state Y2 <<choice>>
	Y2 --> message_sendbox_container: !isSubscribe则显示
	Y2 --> div: isSubscribe则显示
	note right of message_sendbox_container: 输入框变化
	action_icon_group1 --> actionIconGroup
```

<!-- tabs:start -->

<!-- tab:actionIconGroup -->

```mermaid
stateDiagram-v2
	state action_icon_group {
		emoji_icon --> emojiMouseEnterHandle: 表情
		state messageInputer {
			emojiClick --> emojiSelected: 表情框
			emojiSelected --> setRichFocus1: 移动框光标
			insertText1: insertText
			setRichFocus1: setRichFocus
			setRichFocus1 --> insertText1: 添加表情
			insertText1 --> hideSuggestions: 隐藏@群列表（无作用）
			hideSuggestions --> onChange: 调整输入框高度

			addMentionHandle --> refEditorAddMention: ref
			setRichFocus2: setRichFocus
			refEditorAddMention --> setRichFocus2: 移动框光标
			insertText2: insertText
			setRichFocus2 --> insertText2: 添加@
			insertText2 --> checkAutocomplete: 检测输入内容
			checkAutocomplete --> onChange: 调整输入框高度
		}
		emojiMouseEnterHandle --> emojiClick: ref

		state Y1 <<choice>>
		Y1 --> fileIcon_icon: !imageLimitInfo || !fileAcceptInfo
		fileIcon_icon --> fileClickHandle
		fileClickHandle --> inputStyle: 唤起 inputStyle
		inputStyle --> fileChangeHandle_: @change
		fileChangeHandle_ --> fileChangeHandle
		fileChangeHandle --> produceFile
		produceFile --> sendDialogDisplay: 发送弹窗
		sendDialogDisplay --> SendFileDialog: sendDialogVisble = true
		state SendFileDialog {
			SendFileDialog1
		}

		namecard_icon --> nameCardHandle: 名片
		nameCardHandle --> membersToBeForward: namecardDialogVisable = true
		membersToBeForward --> nextTick: 数据重置
		nextTick --> closeRightPanel: 关闭右键菜单

		mention_icon --> addMentionHandle: @

		down_icon --> setHideMainWindow: 截图设置
		state shortcut {
			setHideMainWindow2: setHideMainWindow
			setHideMainWindow2 --> SCREEN_CAPTURE_HideMainWindow
		}
		setHideMainWindow --> shortcut: 1

		screen_capture_wrap --> startScreenCapture: 截屏
		startScreenCapture --> ipc_capture_screen
		note right of ipc_capture_screen: capture-screen
  }
```

<!-- tab:Icon -->

Icon

<!-- tabs:end -->

## inputStyle 文件选择

```
<label for="upimfile" v-if="!imageLimitInfo || !fileAcceptInfo" class="chat_icon upimfile">按钮</label>
<input type="file" multiple="multiple" class="inputStyle" id="upimfile" name="upimfile" :accept="fileAcceptValue" @change="fileChangeHandle_" ref="fileInput">

<label for="peas">Do you like peas?</label>
<input type="file" name="peas" id="peas">
```
