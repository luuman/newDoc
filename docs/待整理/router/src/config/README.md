const electron = require('electron');
const envConf = require('./envConf');
const currentConfig = require('../buildConfig/currentConfig');

function getQueryVariable(query, variable) {
let vars = (query || '').substring(1).split('&');
let obj = {};
for (let i = 0; i < vars.length; i++) {
let pair = vars[i].split('=');
if (variable && pair[0] == variable) {
return decodeURIComponent(pair[1]);
} else {
obj[pair[0]] = decodeURIComponent(pair[1]);
}
}
return variable ? false : obj;
}

// console.log('global.userDatapath', global.userDatapath);
const defaultEnv = 'io';
let curEnv = defaultEnv;
let showChangeEnv = process.env.npm_lifecycle_event === 'electron:test' || process.env.NODE_ENV === 'development';
let userDatapath =
global.userDatapath ||
(process.type === 'renderer'
? getQueryVariable(global.location && global.location.search, 'userDatapath')
: electron.app.getPath('userData'));
let documentPath = '';
let storage = {};

let serverConf = null;
let defaultConf = {
serverProtocol: `${new URL(envConf[defaultEnv].websitePath).protocol}//`,
serverIp: `${new URL(envConf[defaultEnv].websitePath).host}`,
serverPort: `${new URL(envConf[defaultEnv].websitePath).port}`
};
// console.log('getQueryString', getQueryVariable(global.location && global.location.search, 'userDatapath'));

try {
if (process.type === 'renderer') {
storage = electron.ipcRenderer.sendSync('getStore-Sync', 'storage');
console.log('env00', storage);
if (!storage) {
electron.ipcRenderer.send('electronStore');
}
storage = electron.ipcRenderer.sendSync('getStore-Sync', 'storage');

        console.log('env11', storage);
    } else {
        const {getStore} = require('../main/store');

        storage = getStore('storage');
        // console.log('env111', storage)
    }

    userDatapath = userDatapath || (storage && storage.userDatapath);
    global.userDatapath = userDatapath;
    documentPath = storage && storage.documentPath;

} catch (e) {
console.error('[error]: ', 'showChangeEnv', e);
}

if (currentConfig.showSettingServer) {
curEnv = 'empty';
showChangeEnv = false;
try {
if (!storage) {
if (process.type === 'renderer') {
storage = electron.ipcRenderer.sendSync('getStore', 'storage');
console.log('env00', storage);
} else {
const {getStore} = require('../main/store');

                storage = getStore('storage');
                // console.log('env111', storage);
            }
        }

        if (storage && storage.serverProtocol && storage.serverIp) {
            let {serverProtocol, serverIp, serverPort} = storage;

            serverPort = serverPort === '80' ? '' : serverPort;
            curEnv = `${serverProtocol}${serverIp}${serverPort ? `:${serverPort}` : ''}`;
            serverConf = {
                serverProtocol,
                serverIp,
                serverPort
            };
            envConf[curEnv] = {
                apiBasePath: `${curEnv}`,
                meetingUrlPrefix: `${curEnv}/`,
                meetingUrlPrefixReg: `${curEnv}`,
                websitePath: curEnv
            };
            if (process.type === 'renderer') {
                localStorage.removeItem('xx_baseUserIdcPath');
                localStorage.setItem('xx_baseUCPath', `${serverIp}${serverPort ? `:${serverPort}` : ''}`);
            }
        } else {
            serverConf = {
                serverProtocol: currentConfig.serverProtocol,
                serverIp: currentConfig.serverIp,
                serverPort: currentConfig.serverPort
            };
            // curEnv = `${serverConf.serverProtocol}${serverConf.serverIp}${serverConf.serverPort ? `:${serverConf.serverPort}` : ''}`;
            //
            // electron.ipcRenderer.send('setStore', 'storage.serverProtocol', serverConf.serverProtocol)
            // electron.ipcRenderer.send('setStore', 'storage.serverIp', serverConf.serverIp)
            // electron.ipcRenderer.send('setStore', 'storage.serverPort', serverConf.serverPort)
            //
            // envConf[curEnv] = {
            //     apiBasePath: `${curEnv}`,
            //     meetingUrlPrefix: `/`,
            //     meetingUrlPrefixReg: ``,
            //     websitePath: curEnv,
            // };
        }
    } catch (e) {
        console.error('showSettingEnv=》', e, storage);
    }

} else if (showChangeEnv) {
if (storage && storage.env && envConf[storage.env]) {
curEnv = storage.env;
}
}

if (storage && storage.env !== curEnv) {
if (process.type === 'renderer') {
electron.ipcRenderer.send('setStore', 'storage.env', curEnv);
if (storage.loginStatus === 'LOGINFINISH') {
storage.loginStatus = 'INITIAL';
setTimeout(() => {
console.log('storage.loginStatu33', storage.loginStatus);
window.handleReload && window.handleReload('', 'curEnv INITIAL');
}, 8 \* 1000);
}
}
storage.env = curEnv;
}

global.storage = storage;
// console.log('process.type', process.type);
// console.log('userDatapath', userDatapath);
// console.log('documentPath', documentPath);

// console.log('serverConf', serverConf);
// console.log('defaultConf', defaultConf);
// console.log('envConf', envConf)
// console.log('curEnv', curEnv);

const payPlanlinkConfig = {
scheduleTimelimit: '/plans?utm_source=desktop&utm_medium=schedule&utm_campaign=timelimit',
popupMeetinglimit: '/plans?utm_source=personal&utm_medium=popup&utm_campaign=meetinglimit',
profileBasic: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=basic',
profileLicensed: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=licensed',
profileBusiness: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=business',
profileEnterprise: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=enterprise',
profilePro: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=pro',
profileBusinessExpire: '/plans?utm_source=desktop&utm_medium=business&utm_campaign=resubcribe',
profileEnterpriseExpire: '/plans?utm_source=desktop&utm_medium=enterprise&utm_campaign=resubcribe',
profileProExpire: '/plans?utm_source=desktop&utm_medium=pro&utm_campaign=resubcribe',
meetingBasicLimit: '/plans?utm_source=desktop&utm_medium=meeting&utm_campaign=basic'
};

const config = {
env: envConf[curEnv],
version: require('../../package.json').version,
isDev: process.env.NODE*ENV === 'development',
forwardDbVersion: 1,
ackVersion: 2,
userInfoVersion: 4,
dbVersion: 15,
configDir: userDatapath,
documentPath,
MEMORYTIMEOUT: 1000 * 60 \_ 41760, // 内存缓存过期时间，一个月目前
requestTimeout: 1000 \* 30, // 请求登陆超时时间
learnMorePath: '/faq/detail?id=4',
liveLearnMore: '/webinar',
openMsgLogFlag: 'Matrx 最棒最好最牛皮',
loginPath: '/signin',
envConf,
curEnv,
showChangeEnv,
serverConf,
defaultConf,
isPrivated: currentConfig.privatization,
payPlanlinkConfig
};

module.exports = config;

# const electron = require('electron');

const envConf = require('./envConf');
const currentConfig = require('../buildConfig/currentConfig');

function getQueryVariable(query, variable) {
let vars = (query || '').substring(1).split('&');
let obj = {};
for (let i = 0; i < vars.length; i++) {
let pair = vars[i].split('=');
if (variable && pair[0] == variable) {
return decodeURIComponent(pair[1]);
} else {
obj[pair[0]] = decodeURIComponent(pair[1]);
}
}
return variable ? false : obj;
}

// console.log('global.userDatapath', global.userDatapath);
const defaultEnv = 'io';
let curEnv = defaultEnv;
let showChangeEnv = process.env.npm_lifecycle_event === 'electron:test' || process.env.NODE_ENV === 'development';
let userDatapath =
global.userDatapath ||
(process.type === 'renderer'
? getQueryVariable(global.location && global.location.search, 'userDatapath')
: electron.app.getPath('userData'));
let documentPath = '';
let storage = {};

let serverConf = null;
let defaultConf = {
serverProtocol: `${new URL(envConf[defaultEnv].websitePath).protocol}//`,
serverIp: `${new URL(envConf[defaultEnv].websitePath).host}`,
serverPort: `${new URL(envConf[defaultEnv].websitePath).port}`
};
// console.log('getQueryString', getQueryVariable(global.location && global.location.search, 'userDatapath'));

try {
if (process.type === 'renderer') {
storage = electron.ipcRenderer.sendSync('getStore-Sync', 'storage');
console.log('env00', storage);
if (!storage) {
electron.ipcRenderer.send('electronStore');
}
storage = electron.ipcRenderer.sendSync('getStore-Sync', 'storage');

        console.log('env11', storage);
    } else {
        const {getStore} = require('../main/store');

        storage = getStore('storage');
        // console.log('env111', storage)
    }

    userDatapath = userDatapath || (storage && storage.userDatapath);
    global.userDatapath = userDatapath;
    documentPath = storage && storage.documentPath;

} catch (e) {
console.error('[error]: ', 'showChangeEnv', e);
}

if (currentConfig.showSettingServer) {
curEnv = 'empty';
showChangeEnv = false;
try {
if (!storage) {
if (process.type === 'renderer') {
storage = electron.ipcRenderer.sendSync('getStore', 'storage');
console.log('env00', storage);
} else {
const {getStore} = require('../main/store');

                storage = getStore('storage');
                // console.log('env111', storage);
            }
        }

        if (storage && storage.serverProtocol && storage.serverIp) {
            let {serverProtocol, serverIp, serverPort} = storage;

            serverPort = serverPort === '80' ? '' : serverPort;
            curEnv = `${serverProtocol}${serverIp}${serverPort ? `:${serverPort}` : ''}`;
            serverConf = {
                serverProtocol,
                serverIp,
                serverPort
            };
            envConf[curEnv] = {
                apiBasePath: `${curEnv}`,
                meetingUrlPrefix: `${curEnv}/`,
                meetingUrlPrefixReg: `${curEnv}`,
                websitePath: curEnv
            };
            if (process.type === 'renderer') {
                localStorage.removeItem('xx_baseUserIdcPath');
                localStorage.setItem('xx_baseUCPath', `${serverIp}${serverPort ? `:${serverPort}` : ''}`);
            }
        } else {
            serverConf = {
                serverProtocol: currentConfig.serverProtocol,
                serverIp: currentConfig.serverIp,
                serverPort: currentConfig.serverPort
            };
            // curEnv = `${serverConf.serverProtocol}${serverConf.serverIp}${serverConf.serverPort ? `:${serverConf.serverPort}` : ''}`;
            //
            // electron.ipcRenderer.send('setStore', 'storage.serverProtocol', serverConf.serverProtocol)
            // electron.ipcRenderer.send('setStore', 'storage.serverIp', serverConf.serverIp)
            // electron.ipcRenderer.send('setStore', 'storage.serverPort', serverConf.serverPort)
            //
            // envConf[curEnv] = {
            //     apiBasePath: `${curEnv}`,
            //     meetingUrlPrefix: `/`,
            //     meetingUrlPrefixReg: ``,
            //     websitePath: curEnv,
            // };
        }
    } catch (e) {
        console.error('showSettingEnv=》', e, storage);
    }

} else if (showChangeEnv) {
if (storage && storage.env && envConf[storage.env]) {
curEnv = storage.env;
}
}

if (storage && storage.env !== curEnv) {
if (process.type === 'renderer') {
electron.ipcRenderer.send('setStore', 'storage.env', curEnv);
if (storage.loginStatus === 'LOGINFINISH') {
storage.loginStatus = 'INITIAL';
setTimeout(() => {
console.log('storage.loginStatu33', storage.loginStatus);
window.handleReload && window.handleReload('', 'curEnv INITIAL');
}, 8 \* 1000);
}
}
storage.env = curEnv;
}

global.storage = storage;
// console.log('process.type', process.type);
// console.log('userDatapath', userDatapath);
// console.log('documentPath', documentPath);

// console.log('serverConf', serverConf);
// console.log('defaultConf', defaultConf);
// console.log('envConf', envConf)
// console.log('curEnv', curEnv);

const payPlanlinkConfig = {
scheduleTimelimit: '/plans?utm_source=desktop&utm_medium=schedule&utm_campaign=timelimit',
popupMeetinglimit: '/plans?utm_source=personal&utm_medium=popup&utm_campaign=meetinglimit',
profileBasic: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=basic',
profileLicensed: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=licensed',
profileBusiness: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=business',
profileEnterprise: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=enterprise',
profilePro: '/plans?utm_source=desktop&utm_medium=profile&utm_campaign=pro',
profileBusinessExpire: '/plans?utm_source=desktop&utm_medium=business&utm_campaign=resubcribe',
profileEnterpriseExpire: '/plans?utm_source=desktop&utm_medium=enterprise&utm_campaign=resubcribe',
profileProExpire: '/plans?utm_source=desktop&utm_medium=pro&utm_campaign=resubcribe',
meetingBasicLimit: '/plans?utm_source=desktop&utm_medium=meeting&utm_campaign=basic'
};

const config = {

};

module.exports = config;

## config 全局配置

| 名称              | 关联                                               | 标签分类 | 描述             |
| ----------------- | -------------------------------------------------- | -------- | ---------------- |
| env               | envConf[curEnv]                                    |          |                  |
| version           | require('../../package.json').version              |          |                  |
| isDev             | process.env.NODE_ENV === 'development'             |          |                  |
| forwardDbVersion  | 1                                                  |          | 数据版本         |
| ackVersion        | 2                                                  |          | 缓存会话版本     |
| userInfoVersion   | 4                                                  |          | 个信息版本       |
| dbVersion         | 15                                                 |          | 数据库版本       |
| configDir         | userDatapath                                       |          | 缓存地址         |
| documentPath      |                                                    |          | 文档地址         |
| MEMORYTIMEOUT     | 1000 _ 60 _ 41760, // 内存缓存过期时间，一个月目前 |          | 内存缓存过期时间 |
| requestTimeout    | 1000 \* 30, //                                     |          | 请求登陆超时时间 |
| learnMorePath     | '/faq/detail?id=4'                                 |          |                  |
| liveLearnMore     | '/webinar'                                         |          | 直播地址         |
| openMsgLogFlag    | 'Matrx 最棒最好最牛皮'                             |          |                  |
| loginPath         | '/signin'                                          |          | 登录地址         |
| envConf           |                                                    |          | 代理服务器       |
| curEnv            |                                                    |          | 代理             |
| showChangeEnv     |                                                    |          | 是否切换环境     |
| serverConf        |                                                    |          | 本地服务端配置   |
| defaultConf       |                                                    |          | 默认服务端配置   |
| isPrivated        | currentConfig.privatization                        |          | 是否开启私有化   |
| payPlanlinkConfig |                                                    |          | 付款链接配置     |

## envConf 服务环境地址配置

| 名称                 | 描述       |
| -------------------- | ---------- |
| apiBasePath          |            |
| dohBaseName          |            |
| meetingUrlPrefix     |            |
| websitePath          |            |
| meetingUrlPrefixReg  |            |
| reportMeetingApiBase |            |
| avrRiskToken         | 直播 Token |
| avrRiskUrl           | 直播地址   |

| 名称      | moi | private | public |
| --------- | --- | ------- | ------ |
| io        |     |         | x      |
| solutions |     |         | x      |
| tech      |     |         | x      |
| work      |     |         | x      |
| empty     |     |         |        |
