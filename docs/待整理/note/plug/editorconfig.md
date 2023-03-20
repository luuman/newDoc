# editorconfig

并不是所有的编辑器都默认支持 editorconfig。
有些编辑器默认支持 editorConfig，如 webstorm；而有些编辑器则需要安装 editorConfig 插件，如 ATOM、Sublime、VS Code 等

## VSCode

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```

```
<!-- 表示是最顶层的配置文件，发现为 true 时，才会停止查找.editorconfig 文件 -->
root

<!-- 设置缩进风格，可选值有制表符 tab 和空格 space -->
indent_style

<!-- 设置缩进空格数，一般为整数 2 或 4 -->
indent_size

<!-- 设置 tab 类型的缩进列数，一般为整数 2 或 4 -->
tab_width

<!-- 编码格式，可选值有 latin1、utf-8（一般使用它）、utf-16be、utf-16le -->
charset

<!-- 保存文件时是否在文件的最后插入一个空行。可为 true 和 false -->
insert_final_newline

<!-- 是否删除行尾的空格，可为 true 和 false -->
trim_trailing_whitespace

<!-- 设置换行符格式，可选值 lf(一般为它)、cr、crlf -->
end_of_line
```

### 通配符

| 通配符       | 描述                                                           |
| ------------ | -------------------------------------------------------------- |
| -            | 匹配除/之外的任意字符                                          |
| \*\*         | 匹配任意字符串                                                 |
| ？           | 任何单个字符，路径分隔符 ( /)除外                              |
| [name]       | 匹配名称 name 中的任何单个字符                                 |
| [!name]      | 匹配名称中没有 name 的任何单个字符                             |
| {s1,s2,s3}   | 匹配任何给定的字符串（以逗号分隔，可以嵌套）                   |
| {num1..num2} | num1 和之间的任何整数 num2，其中 num1 和 num2 可以是正数或负数 |

### 案例

```
[*]
charset=utf-8
end_of_line=lf
insert_final_newline=false
indent_style=space
indent_size=4

<!-- # 对后缀名为 vue 的文件有效 -->

[*.vue]
indent_style=space
indent_size=4

<!-- # 对.analysis_options 文件以及后缀名为 yml 和 yaml 文件有效 -->

[{.analysis_options,*.yml,*.yaml}]
indent_style=space
indent_size=4

<!-- # 对后缀名为 js,jsx,ts,tsx 的文件有效，也可以写成[{*.js, *.jsx, *.ts, *.tsx}],相同的部分\*.可以提出去 -->

[*.{js,jsx,ts,tsx}]
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```
