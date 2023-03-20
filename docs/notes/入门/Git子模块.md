```js
// 添加子模块
$ git submodule add git@gitlab.corp.matrx.team:web/module-common.git

// 添加完成初始化
$ git submodule init

// 更新项目内子模块到最新版本
$ git submodule update

// 更新子模块为远程项目的最新版本
$ git submodule update --remote

// 查看子模块
git submodule

// 删除子模块文件夹
$ git rm --cached assets
$ rm -rf assets

// 删除.gitmodules 文件中相关子模块信息
[submodule "assets"]
path = assets
url = https://github.com/maonx/vimwiki-assets.git

// 删除.git/config 中的相关子模块信息
[submodule "assets"]
url = https://github.com/maonx/vimwiki-assets.git

// 删除.git 文件夹中的相关子模块文件
$ rm -rf .git/modules/assets
```
