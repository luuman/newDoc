# figma 图标自动化导出

Figma 图标自动化插件是一个可以帮助你将设计文件中的图标组件转换为 React/vue 组件代码

## 工作流程

![](https://github.com/leadream/figma-icon-automation/raw/master/imgs/flow.jpg)

1. 开发安装或更新：一般前端都会使用 NPM 来管理自己项目中的依赖库，上述步骤完成后他们就可以通过执行命令来安装或者更新图标库了，并在代码中直接引入使用了。
1. 创建组件： 首先，设计师应该创建一个 Figma 文件，并在里面来设计所有的图标。需要注意的是，最后要将图标转换为组件，因为整个过程只会转换组件。
1. 插件生成 Pull Request：安装好插件之后，填写自己对应的 GitHub 仓库信息，每次更新之后通过插件来发布版本更新，这会在你的仓库中生成一个 Pull Request，也就是一个合并请求。
1. 合并 PR，触发 Actions：前往 GitHub 页面，将这个 PR 合并至主分支，这会触发仓库内定义好的一连串 GitHub Actions（GitHub 的自动化流程）。
1. 处理转换 SVG 代码：这一连串 GitHub Actions 会做这么几件事，首先它会通过 Figma API 自动获取组件的 SVG 代码，接着将 SVG 代码中的冗余代码移除，再将其转换为 React 组件格式的代码。
1. 生成 GitHub Pages 来展示图标: GitHub Actions 还会生成 GitHub Pages 代码来展示你的图标，你可以在示例仓库中修改这些代码。
1. 发布至 NPM：NPM 是一个前端的包管理工具，你可以将你的组件库上传至它的云端存储中，这样开发同学就可以使用熟悉的命令行安装使用或者更新了。上述 Actions 的最后一步就是将生成的图标组件库上传至 NPM。
1. 开发安装或更新：一般前端都会使用 NPM 来管理自己项目中的依赖库，上述步骤完成后他们就可以通过执行命令来安装或者更新图标库了，并在代码中直接引入使用了。

## 配置功能

### 条件

1. GitHub 账号
1. NPM 账号
1. Figma 账号

### 配置

> Fork 仓库

Fork 仓库，[React](https://github.com/leadream/juuust-react-icon)和[Vue](https://github.com/leadream/juuust-vue-icon)技术栈。

> 生成 token

Figma：打开 Figma 的个人设置页面 Personal access tokens，创建一个新的 token。

GitHub：打开 [GitHub token](https://github.com/settings/tokens) 页面，生成一个 token，复制下来备用。此处需要注意，记得要勾选下面的 repo scope。

NPM：前往 NPM 的个人 Access Tokens - classic Token 页面，生成一个 token，复制下来备用。

> 填写 Secrets

进入 GitHub 的仓库下 Settings -> [Secrets](https://github.com/luuman/juuust-vue-icon/settings/secrets/actions) 页面中，添加四个 New repository secret

1. FIGMA_FILE_URL：第一步创建的 Figma 文件地址。
1. FIGMA_TOKEN：上一步创建的 Figma token。
1. NPM_AUTH_TOKEN：上一步创建的 NPM token。
1. GH_TOKEN：上一步创建的 GitHub token（为了 gh-pages）。

> 在插件中填写仓库地址和 token

右键依次选择 Plugins -> Development -> icon-automation

GitHub Repo URL
GitHub token

```yml
name: icon-automation
on:
  push:
    branches:
      - master
    # file paths to consider in the event. Optional; defaults to all.
    paths:
      - package.json

jobs:
  icon_automation:
    name: figma icon automation
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: "10.x"
      - run: yarn install
      - name: Figma Action
        uses: primer/figma-action@v1.0.0-alpha.2
        with:
          args: "format=svg outputDir=./src/"
        env:
          FIGMA_FILE_URL: ${{ secrets.FIGMA_FILE_URL }}
          FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
      - run: yarn generate
      - run: yarn build
      - run: yarn build-bundle
      - name: GitHub Pages
        uses: crazy-max/ghaction-github-pages@v1.2.5
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
      - run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_AUTH_TOKEN }}" > ~/.npmrc
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_AUTH_TOKEN }}
    # - name: WeChat Work notification
    # uses: chf007/action-wechat-work@master
    # env:
    # WECHAT_WORK_BOT_WEBHOOK: ${{secrets.WECHAT_WORK_BOT_WEBHOOK}}
    # with:
    # msgtype: text
    # content: |
    # 兄弟们，咱们的图标更新啦！
    # 请使用 yarn upgrade juuust-vue-icon --latest 更新。
    # 在线查看图标：https://leadream.github.io/juuust-vue-icon/
```

[figma-icon-automation](https://github.com/leadream/figma-icon-automation)
