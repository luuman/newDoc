# 打包命令

| Git                     | 描述         | 值                                                                                                                       |
| ----------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| serve                   |              | `vue-cli-service serve`                                                                                                  |
| build                   |              | `vue-cli-service build --report`                                                                                         |
| lint                    |              | `vue-cli-service lint`                                                                                                   |
| lint-staged             |              | `lint-staged`                                                                                                            |
| lint:fix                | eslint 检测  | `eslint --fix --ext .js,.jsx,.ts,.tsx,.vue src/`                                                                         |
| start                   |              | `concurrently \"npm run rd\" \"npm run dev\"`                                                                            |
| dev                     | 开发模式     | `node --max-old-space-size=10240 node_modules/@vue/cli-service/bin/vue-cli-service.js electron:serve --mode development` |
| rd                      | 联调模式     | `node --max-old-space-size=10240 node_modules/@vue/cli-service/bin/vue-cli-service.js electron:serve --mode rd`          |
| electron:build          | 打包         | `vue-cli-service electron:build`                                                                                         |
| electron:serve          |              | `vue-cli-service electron:serve`                                                                                         |
| electron:generate-icons |              | `electron-icon-builder --input=./public/icon.png --output=build --flatten`                                               |
| package                 |              | `node ./build.js test`                                                                                                   |
| sign-dll                |              | `node ./nsis_build/sign_dll.js`                                                                                          |
| sign-file               |              | `node ./nsis_build/sign_single.js`                                                                                       |
| package-build           |              | `node ./build.js build`                                                                                                  |
| package-msi             |              | `node ./build.js msi`                                                                                                    |
| package-appx            |              | `node ./build.js appx`                                                                                                   |
| replace-icons           |              | `node ./scripts/replace-icons.js`                                                                                        |
| replace-exe-icons       |              | `node ./scripts/replace-exe-icons.js`                                                                                    |
| mock:ws                 |              | `node ./src/mock/wss/index.js`                                                                                           |
| update:sdk              |              | `node ./scripts/update-hwm-sdk.js`                                                                                       |
| update:cst-sdk          |              | `node ./scripts/update-cst-sdk.js`                                                                                       |
| replace:dll             |              | `node ./scripts/replaceDll.js`                                                                                           |
| postinstall             |              | `patch-package && npm run electron-rebuild && husky install`                                                             |
| postinstall-element     |              | `patch-package element-ui`                                                                                               |
| patch                   |              | `patch-package`                                                                                                          |
| rebuild                 |              | `npm rebuild --runtime=electron --target=17.4.4 --disturl=https://atom.io/download/atom-shell --abi=93`                  |
| electron-rebuild        |              | `electron-rebuild -f`                                                                                                    |
| postinstall-builder     |              | `patch-package app-builder-lib`                                                                                          |
| postuninstall           |              | `electron-builder install-app-deps`                                                                                      |
| electron:release        | 打包 Release | `vue-cli-service electron:build`                                                                                         |
| electron:msi            | 打包 MSI     | `vue-cli-service electron:build`                                                                                         |
| electron:test           | 打包测试环境 | `vue-cli-service electron:build`                                                                                         |

# 环境变量配置

| 文件名称         | 描述         | 标签分类 | 更新状态       |
| ---------------- | ------------ | -------- | -------------- |
| .env             | 公共环境变量 |          | 待完善 :punch: |
| .env.development | 开发环境变量 |          | 待完善 :punch: |
| .env.production  | 线上环境变量 |          | 待完善 :punch: |
| .env.rd          | 联调环境变量 |          | 待完善 :punch: |
| vue.config.js    | 打包配置项   |          | 待完善 :punch: |

## 环境变量

| Git              | 描述               | 值                          |
| ---------------- | ------------------ | --------------------------- |
| NODE_ENV         | development        | development、production     |
| VUE_APP_MODE     | 模式（控制多页面） | development、production、rd |
| VUE_APP_PORT     | 端口               | 8080、8081                  |
| VUE_APP_RD_PORT  | 端口               | 8081                        |
| VUE_APP_DEV_PORT | 端口               | 8080                        |

## 打包环境变量配置

| 文件名称         | NODE_ENV    | VUE_APP_MODE | VUE_APP_PORT |
| ---------------- | ----------- | ------------ | ------------ |
| .env.development | development | development  | 8080         |
| .env.production  | production  | production   | 8080         |
| .env.rd          | development | rd           | 8081         |

# 打包不同类型应用配置

## builderOptions

| 文件名称           | 描述      | 标签分类 | 更新状态       |
| ------------------ | --------- | -------- | -------------- |
| config.js          | 公共配置  |          | 待完善 :punch: |
| appxConfig.js      | appx 配置 |          | 待完善 :punch: |
| exeConfig.js       | exe 配置  |          | 待完善 :punch: |
| msiConfig.js       | msi 配置  |          | 待完善 :punch: |
| postcss.config.js  |           |          | 待完善 :punch: |
| prettier.config.js |           |          | 待完善 :punch: |
| babel.config.js    |           |          | 待完善 :punch: |

vue.config.js
