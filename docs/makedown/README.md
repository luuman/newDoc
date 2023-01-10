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
