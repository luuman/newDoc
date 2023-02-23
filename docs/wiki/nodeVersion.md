# node 版本管理

> 安装 nvs

> 修改环境变量

`%LOCALAPPDATA%\nvs\default`

14.20.1/x86
16.15.0/x64

## 64

```sh
#!/usr/bin/env bash

node -v
node -vv
nvs ls

nvs link 16.15.0/x64

nvs ls
node -v
node -p "process.arch"

npm install -g node-gyp

npm install -g node-pre-gyp

npm config set arch x64


node -v
node -vv
nvs ls

```

## 32

```sh
#!/usr/bin/env bash

node -v
node -vv
nvs ls

nvs link 14.20.1/x86

nvs use 14.20.1/x86

nvs ls
node -v
node -p "process.arch"

npm install -g node-gyp

npm install -g node-pre-gyp


npm config set arch ia32
```
