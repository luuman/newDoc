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
| VUE_APP_PORT     | 代理端口           | 8080、8081                  |
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

## pages

| [页面](/note/Vue/)    | 窗口描述         | 入口                                   | 模板                              | 输出名称                   |
| --------------------- | ---------------- | -------------------------------------- | --------------------------------- | -------------------------- |
| start                 | SDK 通信         | renderer/start/main.js                 | public/start.html                 | start.html                 |
| index                 | 主渲染进程       | renderer/src/main.js                   | public/index.html                 | index.html                 |
| meetingInfo           | 会议信息         | renderer/meetingInfo/main.js           | public/meetingInfo.html           | meetingInfo.html           |
| callfeedback          | 通话质量反馈     | renderer/callfeedback/main.js          | public/callfeedback.html          | callfeedback.html          |
| toast                 | 全局提示         | renderer/toast/index.js                | public/toast.html                 | toast.html                 |
| screenshot            | 截屏截图         | renderer/screenshot/main.js            | public/screenshot.html            | screenshot.html            |
| pictureViewer         | 图片查看器       | renderer/pictureViewer/main.js         | public/pictureViewer.html         | pictureViewer.html         |
| fileViewer            | 音视频文件查看器 | renderer/fileViewer/main.js            | public/fileViewer.html            | fileViewer.html            |
| meetingInvite         | 会议邀请         | renderer/meetingInvite/main.js         | public/meetingInvite.html         | meetingInvite.html         |
| deleteAccountFeedback | 删除账号反馈     | renderer/deleteAccountFeedback/main.js | public/deleteAccountFeedback.html | deleteAccountFeedback.html |
| sso                   | 登录 SSO         | renderer/sso/index.js                  | public/sso.html                   | sso.html                   |
| meetingPwd            | 会议密码         | renderer/meetingPwd/index.js           | public/meetingPwd.html            | meetingPwd.html            |

[多窗口梳理](https://wiki.corp.matrx.team/pages/viewpage.action?pageId=32536616)

## vue.config.js

```js
const path = require("path");
const appxConfig = require("./appxConfig");
const exeConfig = require("./exeConfig");
const msiConfig = require("./msiConfig");

const isAppx = process.env.npm_lifecycle_event === "electron:release";
const isMsi = process.env.npm_lifecycle_event === "electron:msi";

// const {version} = require('./package.json');
// const SentryPlugin = require('@sentry/webpack-plugin');
// const WorkerPlugin = require('worker-plugin')

// TODO: 打包是否会影响sql版本语句
// function resolve(dir) {
//     return path.join(__dirname, dir);
// }

// 构建多页面应用，页面的配置
const pages = {
  index: {
    // page 的入口
    entry: "src/index/main.js",
    // 模板来源
    template: "public/index.html",
    // 在 dist/index.html 的输出
    filename: "index.html",
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: "Index Page",
    // 在这个页面中包含的块，默认情况下会包含
    // 提取出来的通用 chunk 和 vendor chunk。
    chunks: ["chunk-vendors", "chunk-common", "index"]
  },
  // 当使用只有入口的字符串格式时，
  // 模板会被推导为 `public/subpage.html`
  // 并且如果找不到的话，就回退到 `public/index.html`。
  // 输出文件名会被推导为 `subpage.html`。
  subpage: "src/subpage/main.js"
};
// 环境变量
const VUE_APP_MODE = process.env.VUE_APP_MODE;
// 是否为开发环境
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // indexPath: 'index.html',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  // productionSourceMap: false,
  // 部署应用包时的基本 URL
  // publicPath: './',
  // build 时输出的文件目录
  // outputDir: 'dist',
  // 放置静态文件夹目录
  // assetsDir: 'assets',
  // 部署应用时的基本 URL
  // publicPath: process.env.NODE_ENV === 'production' ? '192.168.60.110:8080' : '192.168.60.110:8080',
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  // outputDir: 'dist',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: '',
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  // filenameHashing: true,
  pages,
  // 所有 webpack-dev-server 的选项都支持
  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
    //  忽略公共文件夹
    watchOptions: {
      ignored: [path.resolve(__dirname, "public/sdk")]
    }
    //   proxy: {
    //    "/ucapi": {
    //      target: "https://capi.im.matrixmeeting.xyz",
    //      // target: "https://capi.im.matrx.us",
    //      changeOrigin: true,
    //      pathRewrite: {
    //       "^/ucapi": ""
    //      }
    //    }
    //   }
  },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: true,
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  // chainWebpack: () => {},
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
  // crossorigin: '',

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  // integrity: false,

  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  // configureWebpack: {},
  // 不管是render还是main 都会应用
  configureWebpack: {
    devtool: isDevelopment ? "eval" : "source-map",
    // module: {
    //    rules: [
    //      {
    //       test: /\.worker\.js$/,
    //       use: { loader: 'worker-loader' }
    //      }
    //    ]
    // },
    plugins: [
      // new WorkerPlugin()
    ],
    externals: [
      { CKEDITOR: "window.CKEDITOR" },
      { "@journeyapps/sqlcipher": "commonjs @journeyapps/sqlcipher" },
      { "ffi-napi": "ffi-napi" },
      { "ref-napi": "ref-napi" },
      { "ref-array-napi": "ref-array-napi" },
      { "ref-struct-di": "ref-struct-di" },
      { "ref-struct-napi": "ref-struct-napi" },
      { "screenshot-desktop": "screenshot-desktop" },
      function (context, request, callback) {
        if (request.match(/devtron/)) {
          return callback(null, "commonjs " + request);
        }
        callback();
      }
    ]
  },
  // 可以用来传递任何第三方插件选项
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      externals: [
        "devtron",
        "@journeyapps/sqlcipher",
        "ffi-napi",
        "ref-napi",
        "ref-array-napi",
        "ref-struct-di",
        "ref-struct-napi",
        "screenshot-desktop"
      ],
      chainWebpackMainProcess: (config) => {
        // Chain webpack config for electron main process only
        //解决 运行 yarn run electron:serve 报[DEP0128] DeprecationWarning: Invalid 'main' field in '\dist_electron\package.json' of 'background.js'.
        config.output.filename("background.js");
        config.plugin("define").tap((args) => {
          args[0]["process.env"] = {
            npm_lifecycle_event: JSON.stringify(
              process.env.npm_lifecycle_event
            ),
            Path: JSON.stringify(process.env.Path)
          };
          return args;
        });
      },
      chainWebpackRendererProcess: (config) => {
        config.plugin("define").tap((args) => {
          args[0]["process.env"].npm_lifecycle_event = JSON.stringify(
            process.env.npm_lifecycle_event
          );
          args[0]["process.env"].Path = JSON.stringify(process.env.Path);
          return args;
        });
        // if (!isDevelopment) {
        // 	config.plugin('sentry-plugin').use(SentryPlugin, [{
        // 		ignore: ['*.js'],
        // 		include: './dist_electron/bundled/js', //上传dist文件的js
        // 		configFile: 'sentry.properties', //配置文件地址
        // 		release: `matrx@${version}`, //版本号
        // 		urlPrefix: 'http://tym369.top/source-map/js',
        // 		// deleteAfterCompile: true,
        // 		// urlPrefix: 'https://s.xx.com/fe-static/learning/student-pk' //cdn js的代码路径前缀
        // 	}])
        // }
        // Chain webpack config for electron renderer process only
      },
      builderOptions: isMsi ? msiConfig : isAppx ? appxConfig : exeConfig,
      // rendererProcessFile: 'src/main.js',
      mainProcessFile:
        VUE_APP_MODE === "rd" ? "src/background.rd.js" : "src/background.js",
      mainProcessWatch: ["src/main", "src/sdk"],
      // mainProcessArgs: ['--arg-name', 'arg-value']
      mainProcessArgs: []
      // preload: 'src/main/preload/preload.js',
      // Or, for multiple preload files:
      // preload: {
      // screenshot: 'src/main/preload/screenshot.js'
      // }
    }
  }
};
```

### 单页面案例

```js
const path = require("path");
const HotHashWebpackPlugin = require("hot-hash-webpack-plugin");
const WebpackBar = require("webpackbar");
const resolve = (dir) => path.join(__dirname, ".", dir);

module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    port: 9999,
    host: "0.0.0.0",
    https: false,
    open: true
  },

  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => {
      let rule = config.module.rule("less").oneOf(type);
      rule
        .use("style-resource")
        .loader("style-resources-loader")
        .options({
          patterns: [path.resolve(__dirname, "./lessVariates.less")]
        });
    });

    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/apis"))
      .set("common", resolve("src/common"));

    config.module
      .rule("images")
      .use("url-loader")
      .tap((options) => ({
        name: "./assets/images/[name].[ext]",
        quality: 85,
        limit: 0,
        esModule: false
      }));

    config.module
      .rule("svg")
      .test(/\.svg$/)
      .include.add(resolve("src/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader");

    config.plugin("define").tap((args) => [
      {
        ...args,
        "window.isDefine": JSON.stringify(true)
      }
    ]);

    // 生产环境配置
    if (process.env.NODE_ENV === "production") {
      config.output.filename("./js/[name].[chunkhash:8].js");
      config.output.chunkFilename("./js/[name].[chunkhash:8].js");
      config.plugin("extract-css").tap((args) => [
        {
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css"
        }
      ]);
      config
        .plugin("hotHash")
        .use(HotHashWebpackPlugin, [{ version: "1.0.0" }]);
      config.plugin("webpackBar").use(WebpackBar);

      config.optimization
        .minimize(true)
        .minimizer("terser")
        .tap((args) => {
          let { terserOptions } = args[0];
          terserOptions.compress.drop_console = true;
          terserOptions.compress.drop_debugger = true;
          return args;
        });
      config.optimization.splitChunks({
        cacheGroups: {
          common: {
            name: "common",
            chunks: "all",
            minSize: 1,
            minChunks: 2,
            priority: 1
          },
          vendor: {
            name: "chunk-libs",
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          }
        }
      });
    }
  }
};
```

## 相关资料

[vue.config.js 的完整配置（超详细）！](https://www.cnblogs.com/onesea/p/15745040.html)
