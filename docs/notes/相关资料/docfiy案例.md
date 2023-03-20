Readme.md

# docfiy 案例

## mermaid

### stateDiagram

```mermaid
stateDiagram-v2
	state 块 {
		A --> B: 注释
        state Y1 <<choice>>
		A --> Y1: 判断
		Y1 --> 子集: 注释
		Y1 --> C: 注释
		state 子集 {
			C --> D: 注释
      D: D更改名称
      state join_state <<join>>
      D --> join_state: 注释
		}
    %% 注释：下面为描述内容
		note right of A: 右描述
		note left of B: 左描述
    note right of B
      Important information! You can write
      notes.
    end note
  }
```

```mermaid
stateDiagram
  direction TB

  accTitle: This is the accessible title
  accDescr: This is an accessible description

  classDef notMoving fill:white
  classDef movement font-style:italic;
  classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

  [*] --> Still:::notMoving
  Still --> [*]
  Still --> Moving:::movement
  Moving --> Still
  Moving --> Crash:::movement
  Crash:::badBadEvent --> [*]
```

```
stateDiagram
  direction TB

  accTitle: This is the accessible title
  accDescr: This is an accessible description

  classDef notMoving fill:white
  classDef movement font-style:italic;
  classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

  [*] --> Still:::notMoving
  Still --> [*]
  Still --> Moving:::movement
  Moving --> Still
  Moving --> Crash:::movement
  Crash:::badBadEvent --> [*]
```

```mermaid
stateDiagram
  classDef yourState font-style:italic,font-weight:bold,fill:white

  yswsii: Your state with spaces in it
  [*] --> yswsii:::yourState
  [*] --> SomeOtherState
  SomeOtherState --> YetAnotherState
  yswsii --> YetAnotherState
  YetAnotherState --> [*]
```

```
stateDiagram
  classDef yourState font-style:italic,font-weight:bold,fill:white

  yswsii: Your state with spaces in it
  [*] --> yswsii:::yourState
  [*] --> SomeOtherState
  SomeOtherState --> YetAnotherState
  yswsii --> YetAnotherState
  YetAnotherState --> [*]
```

### stateDiagram-v2

#### 简单状态

```mermaid
stateDiagram-v2
direction LR
s1 --> s2
```

#### 别名

```
stateDiagram-v2
direction LR
state "this is state s1" as s1
s2: this is state s2
s1 --> s2: 连接描述
```

#### 开始和结束

```mermaid
stateDiagram-v2
direction LR
%% [*]在左边表示开始右边表示结束
[*] --> [*]
```

#### 复合状态

```mermaid
stateDiagram-v2
[*] --> First

state First {
    [*] --> Second

    state Second {
        [*] --> second
        second --> Third

        state Third {
            [*] --> third
            third --> [*]
        }
    }
}
```

#### 选择

```mermaid
stateDiagram-v2
    %% 关键语法
    state if_state <<choice>>
    [*] --> IsPositive
    IsPositive --> if_state
    if_state --> False: if n < 0
    if_state --> True : if n >= 0
    False --> [*]
    True --> [*]
```

#### fork/join 状态

```mermaid
stateDiagram-v2
    state fork_state <<fork>>
    %% fork语法
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3
    %% join语法
    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```

#### 并发状态

```mermaid
stateDiagram-v2
    [*] --> Active
    state Active {
        [*] --> NumLockOff
        NumLockOff -->
        NumLockOn : EvNumLockPressed
        NumLockOn -->
        NumLockOff : EvNumLockPressed
        --
        [*] --> CapsLockOff
        CapsLockOff -->
        CapsLockOn : EvCapsLockPressed
        CapsLockOn -->
        CapsLockOff : EvCapsLockPressed
    }
```

#### 备注

```mermaid
stateDiagram-v2
    State1: The state with a note
    %% 多行备注
    note right of State1
        Important information!
        You can write break line
        notes.
    end note
    State1 --> State2
    %% 单行备注
    note left of State2 : note left
```

## 综合示例

以 java 线程状态为例

```mermaid
stateDiagram-v2
    [*] --> Runnable: start()
    Runnable --> Running: cpu schedule
    Running --> Runnable: cpu schedule
    bwp: Blocked in object's wait pool
    blp: Blocked in object's lock pool
    Running --> bwp: wait() must have lock
    bwp --> blp: notify()/interrupt()
    blp --> Runnable: acquires lock
    Running --> blp: synchronized
    Running --> Block: block event
    Block --> Runnable: block event end
    Running --> [*]: run() complete
```

### graph

```mermaid
graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
  click index "/#/note/Vue/router?id=index" _black
```

```
graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
  click B "https://mermaid-js.github.io/"

graph LR
	A-->B
	click A callback "Tooltip for a callback"
	click B "http://cikaros.gitee.io" "This is a tooltip for a link"
```

```mermaid
graph LR
	A-->B
	click A callback "Tooltip for a callback123123"
	click B "http://cikaros.gitee.io" "This is a tooltip for a link"
```

## tab

<!-- tabs:start -->

<!-- tab:MessageInput -->

Hello!

<!-- tab:action_icon_group -->

Bonjour!

<!-- tab:Italian -->

Ciao!

<!-- tabs:end -->

<!-- tabs:start -->

```
<!-- tabs:start -->

<!-- tab:MessageInput -->

Hello!

<!-- tab:action_icon_group -->

Bonjour!

<!-- tab:Italian -->

Ciao!

<!-- tabs:end -->

<!-- tabs:start -->
```

## makedown

[mermaid](https://mermaid.js.org/syntax/flowchart.html)
