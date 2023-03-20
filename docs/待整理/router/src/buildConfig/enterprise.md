```js
import store from "@/store";
import {
  defaultSpaceId,
  isPrivateSpace,
  getHid,
  personalSpaceId,
  enCodeSpaceHid
} from "@/dataController/hid";
const logicDBConnect = require("@/utils/logicDBConnect");
const userDBConnect = require("@/utils/userInfoConnect");
const ackDBConnect = require("@/utils/ackDBConnect");
import { dataUtil } from "@/utils/dataUtil";
import { doWpushRegRes } from "@/api/messageManger";
import { getSpaceList, switchSpace } from "@/api/spaceApi";
import { hwmConnected } from "@/utils/hwmLogin";
import { getSdkUsersInfo } from "@/utils/sdk/meetingUtils";
import Bus from "@/utils/vueBus";
import { getEnterpriseLimit, getUserCapability } from "@/api/meetingApi";
import { getExerciserlist, getAuthorizerlist } from "@/api/sdkApi";

import devLog from "@/logs/devLog";
import { FtsService } from "@/utils/ftsDB/ftsService.js";
import { clearReceiptInfo } from "@/utils/chat/receiptUtils";
import { SocketUtil, disconnectedHandle } from "@/api/socketUtil";
import { getEmialLosginSocketLink } from "@/api/loginApi";
const { ipcRenderer } = require("electron");
import { getSpaceIdcUrl } from "@/utils/base";
import { migrateSessionFromPeer } from "@/utils/sessionMigration/sessionMigration";
import { handleErrorOngoingLiveStatus } from "@/utils/sdk/liveUtil";
import { initDialogs, installContactRequest } from "@/api/peerApi";
import { getSessionList, getDBSessionList } from "@/api/sessionApi";
import { doAvoidDuplicateMethod } from "@/utils/Function";
import { fetchAllChannelAndChannelMember } from "@/utils/ftsDB/groupMemberUtil";
import { userToplist } from "@/api/userApi";
import { getTimestamp } from "@/utils/timestampFix";
import { mangePeerList } from "@/utils/doPolymericPeer";
import sessionDevLog from "@/logs/sessionDevLog";
import { simpleLoginAndSaveIKey } from "@/utils/simpleLogin.js";

import { fireMeetingSwitchSpace } from "@/Firebase";
import { useSdkChange, CrystalSdkName } from "@/utils/sdk/sdkChange";
import { isPrivated } from "@/config/config";
import { cstConnected, refreshMeetingName } from "@/utils/sdk/meetingUtils";
import { lazyLoadAvatar } from "@/utils/avatar/loadAvatar";
import { fetchCountryCode } from "@/api/updaterApi";

let isDoingMigrate = false;
let switchTimer = null;
// 不同idc切换时，在socket connect会做dopushreg，故在enterpriseswitch时需要忽略，避免做两次。
let diffIdcIgnoreDopushReg = false;

// async function migrateMessage(spaceId) {
  let isFinish = await FtsService.isFinishMigrationMsg(spaceId);
  if (!isFinish) {
    // 正在迁移时 避免多个迁移
    if (!isDoingMigrate) {
      isDoingMigrate = true;
      try {
        await FtsService.setupMsg(spaceId);
      } catch (error) {
        devLog.error("setupMsg error", error);
      }
      isDoingMigrate = false;
    }
  }
}

// async function initSpaceDBInsList(vuid, spaceIdList) {
  await userDBConnect.IDBUtil.connect(vuid);
  await ackDBConnect.IDBUtil.connect(vuid);
  for (let index = 0; index < spaceIdList.length; index++) {
    const spaceId = spaceIdList[index];
    await logicDBConnect.IDBUtil.connect(spaceId);
    migrateMessage(spaceId);
    sessionDevLog.log("initSpaceDBInsList before", spaceId);
    await migrateSessionFromPeer(spaceId);
    sessionDevLog.log("initSpaceDBInsList End", spaceId);
  }
}
// init vuex store space info list
// export async function fetchSpaceListAndChangIdcSocket(
  serverRes,
  initSocket = false,
  forceResetSocket = false
) {
  if (
    serverRes &&
    serverRes.spaceInfo &&
    serverRes.spaceInfo.spaces.length > 0
  ) {
    let spaceList = serverRes.spaceInfo.spaces.filter((item) => item);
    let currentSpaceId = serverRes.spaceInfo.currentSpace || defaultSpaceId();
    let isLogin = store.state.userInfo.loginStatus === "LOGINFINISH";

    if (serverRes.hasOwnProperty("telecastSwitch")) {
      spaceList = spaceList.map((space) => {
        if (space.id === currentSpaceId) {
          return {
            ...space,
            telecastSwitch: serverRes.telecastSwitch === 1 ? 1 : 0
          };
        }
        return space;
      });
    }

    let preSpaceId = localStorage.getItem("xx_preSpace");
    let oldIdc = getSpaceIdcUrl(preSpaceId);

    spaceList.forEach((space) => {
      if (space.virtual) {
        // if(space.id === currentSpaceId){
        //   localStorage.setItem('xx_crystalSslPath',space.crystalSsl);
        //   localStorage.setItem('xx_baseUCPath',space.idcUrl);
        // }

        if (!isPrivated) {
          localStorage.setItem("xx_baseUserIdcPath", space.idcUrl);
        }
      } else if (space.id === currentSpaceId) {
        // localStorage.setItem('xx_baseUCPath',space.idcUrl);
        localStorage.setItem("xx_crystalSslPath", space.crystalSsl);
      }
    });

    await store.dispatch("spaceCollection/initSpaceList", {
      spaces: spaceList,
      currentSpaceId
    });

    // 用户是否属于当前IDC，不属于当前IDC时，客户端发起重新连接socketServer
    console.log("oldIdc", oldIdc);
    devLog.log("oldIdc", oldIdc);
    console.log(
      "newIdc",
      getSpaceIdcUrl(currentSpaceId),
      currentSpaceId,
      preSpaceId
    );
    devLog.log(
      "newIdc",
      getSpaceIdcUrl(currentSpaceId),
      currentSpaceId,
      preSpaceId
    );
    // initSocket : 避免userLogin 和 dointMix 重复初始化
    // forceResetSocket: 30007 等 socket protocolerror 重新初始化
    if (
      isLogin &&
      (forceResetSocket ||
        (initSocket && oldIdc !== getSpaceIdcUrl(currentSpaceId)))
    ) {
      diffIdcIgnoreDopushReg = true;
      await initSocketChanel(
        "fetchSpaceListAndChangIdcSocket " + forceResetSocket,
        currentSpaceId
      );
    }
  }
}
// init mutiple space db instances
// export async function initMutipleSpaceDBInstances() {
  let spaceIdList = store.state.spaceCollection.spaceInfoList.map((v) => v.id);
  let vuid = localStorage.getItem("xx_vuid");
  if (!spaceIdList || !vuid) {
    return Error(window.i18n.t("dataController.enterprise.needVuid"));
  }
  return await initSpaceDBInsList(vuid, spaceIdList);
}
// export function isExistSpaceList(spaceId) {
  return (
    store.state.spaceCollection.spaceInfoList.findIndex(
      (item) => item.id === spaceId
    ) !== -1
  );
}

// be invited to join space
// export async function enterpriseAddFromMsg(originMsg) {
  const spaceInfo = originMsg && originMsg.m && originMsg.m.body;
  if (spaceInfo.id) {
    devLog.log("enterpriseAddFromMsg=>", spaceInfo);
    store.dispatch("spaceCollection/addSpace", spaceInfo);
    try {
      // init space db
      await logicDBConnect.IDBUtil.connect(spaceInfo.id);
    } catch (error) {
      console.error("[error]: ", "[enterpriseAddFromMsg]", error);
      return error;
    }
  }
}

// your self kicked by owner
// export async function ForbiddenSpace(originMsg) {
  console.log("ForbiddenSpace=>", originMsg);
  const { id, virtual, name } = originMsg && originMsg.m && originMsg.m.body;
  if (id) {
    try {
      if (id != defaultSpaceId()) {
        devLog.log(
          "ForbiddenSpace==> not this space",
          defaultSpaceId(),
          id,
          virtual,
          name
        );
      } else {
        store.dispatch("spaceCollection/delSpace", {
          id,
          virtual,
          name,
          type: "forbidden"
        });
      }
      devLog.log("ForbiddenSpace==>", id, virtual, name);
    } catch (error) {
      console.error("[error]: ", "[ForbiddenSpace]", error);
      return error;
    }
  }
}
// your self kicked by owner
// export async function enterpriseKickFromMsg(originMsg) {
  // console.log('enterpriseKickFromMsg=>', originMsg);
  const { id, virtual, name } = originMsg && originMsg.m && originMsg.m.body;
  // let uid = dataUtil.hidToNumber(await getHid())
  if (id) {
    try {
      if (id != defaultSpaceId()) {
        devLog.log(
          "enterpriseKickFromMsg==> not this space",
          defaultSpaceId(),
          id,
          virtual,
          name
        );
      } else {
        store.dispatch("spaceCollection/delSpace", {
          id,
          virtual,
          name,
          type: "remove"
        });
      }
      devLog.log("enterpriseKickFromMsg==>", id, virtual, name);
      // await deleteSpaceDBDir(uid,id)
      // await deleteSpaceFDir(hid,id)
      // 切换到个人空间
      // let persionalSpace =  store.state.spaceCollection.spaceInfoList.filter(v=>v.virtual)
      // enterpriseSwitch(persionalSpace[0])
    } catch (error) {
      console.error("[error]: ", "[enterpriseKickFromMsg]", error);
      return error;
    }
  }
}
// other employee kicked by owner
// export async function enterpriseKickOtherUsers({
  spaceId,
  message,
  peerInfoList,
  isMine,
  mangePeerList
}) {
  if (peerInfoList[0]) {
    if (isMine) {
      message.m.body = window.i18n.t(
        "dataController.enterprise.removeworkspace"
      );
    } else {
      let leaveUserList = (message.m && message.m.users) || [];
      let allLeaveUsers = "";
      await Promise.all(
        leaveUserList.map(async (userHid) => {
          let curPeer = await mangePeerList(spaceId, [userHid], 0);
          const peerName =
            curPeer[0].name || curPeer[0].firstName + curPeer[0].lastName;
          allLeaveUsers += peerName;
        })
      );
      leaveUserList.length > 0
        ? (message.m.body = window.i18n.t(
            "dataController.enterprise.leftSpace",
            [allLeaveUsers]
          ))
        : "";
    }
  } else {
    return;
  }
}

// sync current switch space with server
// async function reportSpaceId(prevSpaceId, nextSpaceId) {
  try {
    const res = await switchSpace(prevSpaceId, nextSpaceId);

    console.log("switchSpace", res);
    // if(res?.hasOwnProperty('telecastSwitch')){
    //   let currentSpaceId = res.currentSpace;
    //   let spaceList = store.state.spaceCollection.spaceInfoList;
    //   spaceList = spaceList.map((space)=>{
    //     if(space.id === currentSpaceId){
    //       return {
    //         ...space,
    //         telecastSwitch: res.telecastSwitch === 1 ? 1 : 0
    //       };
    //     }
    //     return space;
    //   })

    //   await store.dispatch('spaceCollection/initSpaceList',{
    //     spaces:spaceList,
    //     currentSpaceId
    //   })
    // }
  } catch (e) {
    console.error("reportSpaceId==>", e);
    devLog.error("reportSpaceId==>", e.message);
  }
}

// get space info list
// export async function getSpaceInfoList(
  spaceId = defaultSpaceId(),
  initSocket = false,
  forceReset = false
) {
  try {
    let spaceListInfo;
    try {
      spaceListInfo = await getSpaceList({ enterpriseId: spaceId });
    } catch (e) {
      console.error("[error]: ", "[getSpaceList]", e);
      devLog.log("getSpaceList==>", e, e.message);
    }
    if (!spaceListInfo && localStorage.getItem("xx_spaceList")) {
      spaceListInfo = {
        spaces: JSON.parse(localStorage.getItem("xx_spaceList"))
      };
    }
    if (spaceListInfo && spaceListInfo.spaces) {
      // 获取企业空间限制文件发送，接收消息配置，并更新 vuex
      store.dispatch("spaceLimit/getSpaceLimitList", spaceListInfo.spaces);

      await fetchSpaceListAndChangIdcSocket(
        {
          spaceInfo: {
            spaces: spaceListInfo.spaces,
            currentSpace: spaceId
          },
          telecastSwitch: spaceListInfo.telecastSwitch
        },
        initSocket,
        forceReset
      );
    }

    return spaceListInfo;
  } catch (e) {
    console.error("[error]: ", "[fetchSpaceInfoList]", e);
    devLog.log("fetchSpaceInfoList==>", e);

    return false;
  }
}

function checkIkeyInit() {
  return new Promise((resolve, reject) => {
    let timer;
    let func = () => {
      if (sessionStorage.getItem("ikeyInit")) {
        clearInterval(timer);
        timer = null;
        resolve();
      }
    };
    timer = setInterval(func, 300);
    func();
  });
}

// clear all store info
// export async function clearStoreCache() {
  store.state.dialogCollection = {};
  store.commit("messageCollection/initState");
  store.commit("suggestionList/initState");
  store.commit("uiControl/initState");
}

// switch space
// export async function enterpriseSwitch(spaceInfo) {
  console.time("enterpriseSwitch");

  ipcRenderer.send(
    "init-Loading-App",
    {
      width: window.innerWidth - 64,
      height: window.innerHeight - 40,
      x: 64,
      y: 40
    },
    window.i18n.t("app.switchingSpace")
  );
  store.commit("uiControl/setSpaceLoading", true);
  sessionStorage.switchSpaceInfo = JSON.stringify(spaceInfo);
  switchTimer = setTimeout(() => {
    if (switchTimer) {
      clearTimeout(switchTimer);
      switchTimer = null;
      return;
    }
    ipcRenderer.send("Remove-Loading-App");
    store.commit("uiControl/setSpaceLoading", false);
  }, 2000);

  try {
    diffIdcIgnoreDopushReg = false;

    console.log("=========我在这里切换空间=========", spaceInfo.id);
    console.time("=========我在这里切换空间=========");
    devLog.log("enterpriseSwitch==>", spaceInfo.id);
    sessionStorage.removeItem("getEnterpriseLimit");
    if (
      store.state.userInfo.loginStatus === "LOGINFINISH" &&
      !sessionStorage.getItem("ikeyInit")
    ) {
      devLog.warn("enterpriseSwitch ikeyInit false==>");
      await checkIkeyInit();
      devLog.warn("enterpriseSwitch ikeyInit true==>");
    }

    await clearStoreCache();
    reportSpaceId(defaultSpaceId(), spaceInfo.id);
    await getSpaceInfoList(spaceInfo.id, true);
    store.commit("spaceCollection/SET_CURRENT_SPACE", spaceInfo.id);
    clearReceiptInfo(spaceInfo.id);
    if (isPrivated) {
      useSdkChange(CrystalSdkName);
    } else {
      useSdkChange(store.getters["spaceCollection/getSpaceSdk"]);
    }
    console.log("=========切换空间=====1====");

    // 切换空间需要强制刷新通讯录？性能优化变成false
    let isForceUpdateContact = true;
    console.log("=========切换空间=====1.5====");
    if (!diffIdcIgnoreDopushReg) {
      await doWpushRegRes(isForceUpdateContact);
    } else {
      console.error("=========不需要切换空间= dopushReg ===", spaceInfo.id);
    }

    console.log("=========切换空间=====2====");

    const whiteList = Array.isArray(store.state.concat.whiteList)
      ? store.state.concat.whiteList.map((item) =>
          typeof item === "object" ? item.uid : item
        )
      : [];
    await saveWhiteList(whiteList);
    await setupSpaceInfo(isForceUpdateContact);
    store.dispatch("concat/fetchNumberForRequests");
    console.log("=========切换空间=====3====");

    // 华为会议不能阻塞住登录....不需要await
    if (!isPrivated) {
      switchHWAccount();
    }
    refreshMeetingName(store.state.userInfo);

    // store.dispatch("concat/refreshContactsByBatch",{spaceId:spaceInfo.id,force:true});
    store.dispatch("setting/refresh");
    // console.warn('userInfo00', JSON.stringify(store.state.userInfo))
    Bus.$emit("clear-saerch");
    Bus.$emit("switched-space");
    store.dispatch("userInfo/updateScheduleList", {
      scheduleBy: "",
      list: []
    });
    // 切换安排的会议列表
    store.dispatch("userInfo/updateUserData", {
      scheduleBy: ""
    });
    store.dispatch("spaceCollection/setPaymentInfo");
    handleErrorOngoingLiveStatus();

    store.dispatch("spaceCollection/setSpaceData", {
      spaceId: spaceInfo.id,
      data: {
        IdcOfflineUnreadCount: 0
      }
    });
    ipcRenderer.send("switch-space");
  } catch (error) {
    console.error("[error]: ", error, "enterpriseSwitch");
    devLog.error(
      "enterpriseSwitch error==>",
      error.message,
      error.name,
      error.stack
    );
  } finally {
    console.timeEnd("=========切换空间=========");
    devLog.log("enterpriseSwitch==> ok");
    console.timeEnd("enterpriseSwitch");
    if (!switchTimer) {
      ipcRenderer.send("Remove-Loading-App");
      store.commit("uiControl/setSpaceLoading", false);
    } else {
      switchTimer = null;
    }
    if (navigator.onLine) {
      sessionStorage.removeItem("switchSpaceInfo");
    }
  }
}
// export async function switchHWAccount() {
  // let updateUserInfo;
  try {
    if (store.state.userInfo.cHwStatus === "pending") {
      store.commit("spaceCollection/SET_IS_SWITCH_HW_ACCOUNT", false);
      fireMeetingSwitchSpace();
    } else {
      store.commit("spaceCollection/SET_IS_SWITCH_HW_ACCOUNT", true);
      hwmConnected(true);
    }
  } catch (error) {
    console.error("[error]: ", error, "hwmLoginFunc");
  }
  // console.log(JSON.stringify(store.state.peerCollection))
}

let socketConnecting = false;

function checkSocketConected() {
  return new Promise((resolve, reject) => {
    let timer;
    let func = () => {
      if (!socketConnecting) {
        clearInterval(timer);
        timer = null;
        resolve();
      }
    };
    timer = setInterval(func, 300);
    func();
  });
}

// export function doCloseWhenNetworkError(sInstance) {
  console.log("=======offline Close Connect======");
  // 断网情况下，断开socket链接服务器接收不到断开指令，需下次connect时先进行断开再连接。
  // if(sInstance && sInstance.close){
  //   sInstance.close()
  // }else if(store.state.uiControl.socketInstance && store.state.uiControl.socketInstance.ioInstance.close){
  //   store.state.uiControl.socketInstance.ioInstance.close()
  //   console.log('======= close pre socket ======')
  // }

  disconnectedHandle();
}
// export bind参数无效 所以需要两个同样函数
// export async function doConnectWhenNetworkError() {
  console.log("=======online Connect start======");
  let forceResetSocket = "doConnectWhenNetworkError";
  devLog.info(
    "simpleLoginAndSaveIKey socketSener",
    sessionStorage.switchSpaceInfo
  );
  if (sessionStorage.switchSpaceInfo) {
    offlineSwitch();
  } else {
    await simpleLoginAndSaveIKey(undefined, forceResetSocket);
  }
  // initSocketChanel('doConnectWhenNetworkError', defaultSpaceId());
  devLog.info("[doh]", "1SET_SOCKET_INSTANCE socketSener");

  if (!isPrivated) {
    hwmConnected();
  }
  cstConnected();
}

// async function offlineSwitch() {
  try {
    diffIdcIgnoreDopushReg = false;
    const spaceInfo = JSON.parse(sessionStorage.switchSpaceInfo);

    console.log("offlineSwitch==>", spaceInfo.id);
    devLog.log("offlineSwitch==>", spaceInfo.id);
    sessionStorage.removeItem("getEnterpriseLimit");
    await clearStoreCache();
    reportSpaceId(defaultSpaceId(), spaceInfo.id);
    await getSpaceInfoList(spaceInfo.id, true, true);
    store.commit("spaceCollection/SET_CURRENT_SPACE", spaceInfo.id);
    clearReceiptInfo(spaceInfo.id);
    console.log("=========切换空间=====1====");
    // 切换空间需要强制刷新通讯录？性能优化变成false
    let isForceUpdateContact = true;
    console.log("=========切换空间=====1.5====");
    if (!diffIdcIgnoreDopushReg) {
      await doWpushRegRes(isForceUpdateContact);
    } else {
      console.error("=========不需要切换空间= dopushReg ===", spaceInfo.id);
    }

    console.log("=========切换空间=====2====");

    const whiteList = Array.isArray(store.state.concat.whiteList)
      ? store.state.concat.whiteList.map((item) =>
          typeof item === "object" ? item.uid : item
        )
      : [];
    await saveWhiteList(whiteList);
    await setupSpaceInfo(isForceUpdateContact);
    store.dispatch("concat/fetchNumberForRequests");
    console.log("=========切换空间=====3====");

    // 华为会议不能阻塞住登录....不需要await
    if (!isPrivated) {
      switchHWAccount();
    }
    // store.dispatch("concat/refreshContactsByBatch",{spaceId:spaceInfo.id,force:true});
    store.dispatch("setting/refresh");
    // console.warn('userInfo00', JSON.stringify(store.state.userInfo))
    Bus.$emit("clear-saerch");
    Bus.$emit("switched-space");
    store.dispatch("userInfo/updateScheduleList", {
      scheduleBy: "",
      list: []
    });
    // 切换安排的会议列表
    store.dispatch("userInfo/updateUserData", {
      scheduleBy: ""
    });
    handleErrorOngoingLiveStatus();

    sessionStorage.removeItem("switchSpaceInfo");
  } catch (error) {
    console.error("[error]: ", error, "enterpriseSwitch");
    devLog.error(
      "enterpriseSwitch error==>",
      error.message,
      error.name,
      error.stack
    );
  }
}
// get scoket server and connect
// export async function initSocketChanel(type, spaceId = defaultSpaceId()) {
  let isError = false;
  try {
    devLog.log(
      "initSocketChanel000,",
      type,
      spaceId,
      store.state.uiControl.connectState
    );
    console.log(
      "initSocketChanel000,",
      type,
      spaceId,
      store.state.uiControl.connectState
    );
    console.time("initSocketChanel");
    if (socketConnecting) {
      await checkSocketConected(spaceId !== defaultSpaceId());
    }
    devLog.warn("checkSocketConected ", store.state.uiControl.connectState);
    if (
      store.state.uiControl.connectState === "connect" &&
      spaceId === defaultSpaceId()
    ) {
      console.warn("checkSocketConected connect");
      devLog.warn("checkSocketConected connect");
      // return;
    }
    console.warn("checkSocketConected start");
    devLog.warn("checkSocketConected start,");
    socketConnecting = true;
    // 打开应用未连接网络需连接。
    console.time("getEmialLosginSocketLink");
    let countryCodeRes = await fetchCountryCode(store.state.userInfo.hid).catch(
      (err) => {
        console.error("fetchCountryCode error", err);
      }
    );
    let countrycode =
      countryCodeRes?.countrycode || localStorage.getItem("countrycode");

    if (countryCodeRes?.countrycode) {
      countrycode = countryCodeRes?.countrycode;
      localStorage.setItem("countrycode", countrycode);
    } else {
      countrycode = localStorage.getItem("countrycode");
    }
    let { socketUrl, instance } = await getEmialLosginSocketLink({
      countryCode: countrycode
    });
    console.timeEnd("getEmialLosginSocketLink");
    if (
      store.state.uiControl.socketInstance &&
      store.state.uiControl.socketInstance.destory
    ) {
      devLog.log(
        "destory initSocketChanel",
        store.state.uiControl?.socketInstance?.ioInstance?.id
      );
      store.state.uiControl.socketInstance.destory();
      store.commit("uiControl/SET_SOCKET_INSTANCE", null);
      console.log("======= destory pre socket ======");
    }
    console.log("socketUrl000", socketUrl);
    devLog.log(
      "socketUrl000",
      socketUrl,
      spaceId,
      "defaultSpaceId:",
      defaultSpaceId()
    );
    localStorage.setItem("c_scoket", socketUrl);
    localStorage.setItem("c_scoket_spaceId", spaceId);
    store.state.uiControl.connectState = "Connecting";
    devLog.log("connectState5", store.state.uiControl.connectState);
    let socketSener = new SocketUtil({
      socketUrl: socketUrl,
      instance
    });
    store.commit("uiControl/SET_SOCKET_INSTANCE", socketSener);
    await socketSener._init();
    devLog.info("initSocketChanel socketSener", socketUrl);
    console.timeEnd("initSocketChanel");
  } catch (error) {
    devLog.error("[initSocketChanel]", error.message, error.stack);
    console.error("[error]: ", "[initSocketChanel]", error);
    isError = error;
  }
  socketConnecting = false;

  if (isError) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    initSocketChanel(isError.message, defaultSpaceId());
  }
}

// export function getSpaceLimit() {
  if (
    !sessionStorage.getItem("getEnterpriseLimit") &&
    !isPrivateSpace(defaultSpaceId())
  ) {
    getEnterpriseLimit({
      enterpriseId: defaultSpaceId()
    })
      .then((res) => {
        // console.log('getParticipantStatus', res)
        if (res) {
          store.dispatch("userInfo/updateUserData", {
            meetSizeLimit: res.capacity
          });
          sessionStorage.setItem("getEnterpriseLimit", 1);
        }
      })
      .catch((err) => {
        console.error("[error]: ", "getParticipantStatus", err);
      });
  }
}
// export function getExerciser() {
  if (isPrivateSpace(defaultSpaceId())) return;
  getExerciserlist()
    .then((res) => {
      // console.log('getExerciserlist', res)
      store.dispatch("userInfo/updateUserData", {
        exerciserList: res?.exercisers || []
        // authorizerList : res,
      });
    })
    .catch((err) => {
      // console.log('getExerciserlist err', err)
      store.dispatch("userInfo/updateUserData", {
        exerciserList: []
      });
    });
}

// export function getAuthorizer() {
  if (isPrivateSpace(defaultSpaceId())) return;
  getAuthorizerlist()
    .then((res) => {
      // console.log('getAuthorizerlist', res)
      const authorizers = res?.authorizers || [];
      store.dispatch("userInfo/updateUserData", {
        authorizerList: authorizers
      });
      const scheduler =
        authorizers &&
        authorizers.find(
          (item) => store.state.userInfo.scheduleBy === item.uid
        );

      if (!scheduler) {
        store.dispatch("userInfo/updateScheduleList", {
          scheduleBy: ""
        });
      }
    })
    .catch((err) => {
      // console.log('getAuthorizerlist err', err)
      store.dispatch("userInfo/updateUserData", {
        authorizerList: [],
        scheduleBy: ""
      });
    });
}

// export async function saveWhiteList(whiteList) {
  try {
    if (Array.isArray(whiteList) && whiteList.length > 0) {
      // first six of whiteList are not used
      // whiteList = whiteList.slice(6);

      const capability = await getUserCapability({
        uids: JSON.stringify(whiteList),
        enterpriseId: defaultSpaceId()
      }).catch((err) => {
        console.error("[error]: ", "getUserCapability err", err);
      });
      // console.log('capability', capability)

      const list = whiteList.map((uid) => {
        const res = capability[uid];
        return {
          hid: dataUtil.numberToHid(uid),
          uid,
          ...res
        };
      });
      // console.log('list000', list)
      store.dispatch("concat/setWhiteList", {
        whiteList: list
      });
    }
  } catch (e) {
    console.error("[error]: ", "saveWhiteList=>", e);
  }
}

// async function setTopList() {
  let spaceId = defaultSpaceId();
  let topList = await userToplist(spaceId);
  let topIdList = topList.map((item) => {
    return dataUtil.numberToHid(item._id.split("|")[1]);
  });
  // console.log('debugSessionC setTopList', topList, topIdList);

  for (let index = 0; index < topIdList.length; index++) {
    const peerHid = topIdList[index];
    // console.log('debugSessionC forSessionC', index, topIdList.length, peerHid);
    let session =
      store.state.sessionCollection[enCodeSpaceHid(peerHid, spaceId)];
    let fakeStime = getTimestamp();

    // console.log('debugSessionC forSessionC', peerHid, session);
    if (!session) {
      session = {
        hid: peerHid,
        isTop: "true",
        lastReactTime: fakeStime
      };
      await store.dispatch("sessionCollection/initOrUpdateSession", {
        session: session,
        spaceId: spaceId
      });
      store.commit("dialogList/spliceDialog", {
        dialogItem: {
          spaceId,
          hid: peerHid
        },
        index: dataUtil.getDialogIndex(spaceId, {
          m: {
            stime: fakeStime
          },
          dialogId: peerHid
        })
      });
      // console.log('变化列表 1');
    }

    if (session) {
      session.isTop = "true";
      session.location = 14;
      await store.dispatch("sessionCollection/changeSession", {
        session: session,
        spaceId
      });
      store.commit("dialogList/makeItReact", {
        dialogItem: {
          hid: peerHid,
          spaceId
        },
        spaceId,
        location: 16
      });

      // console.log('变化列表 6');
    }
  }
}

// async function refreshContactAndChannel(isForceUpdateContact = false) {
  // 判断fts库是否存在并且是否小于9，若真，则需要初始化（insert）
  // console.log('refreshContactAndChannel 1');
  await doAvoidDuplicateMethod(
    defaultSpaceId(),
    store.dispatch,
    "concat/refreshContactsByBatch",
    {
      spaceId: defaultSpaceId()
    }
  );

  await store.dispatch("concat/refreshChannels", {
    spaceId: defaultSpaceId()
  });
  const contacts = store.state.concat.contacts;

  getSdkUsersInfo([
    store.state.userInfo.hid,
    ...Object.values(contacts).map((item) => item.id)
  ]);

  let channels = store.state.concat.channels;
  let res = {};
  await FtsService.setupContactAndGroupName(
    localStorage.getItem("xx_vuid"),
    defaultSpaceId()
  );
  console.log("refreshContactAndChannel channels", channels);

  for (const key in channels) {
    if (Object.hasOwnProperty.call(channels, key)) {
      res[channels[key].id] = channels[key].members;
    }
  }

  console.log("refreshContactAndChannel 2", res);

  // let res = await getSpaceAllChannelAndMembers(defaultSpaceId());
  await fetchAllChannelAndChannelMember(defaultSpaceId(), res);
}

// async function setupSessionList() {
  console.log("这里没有吗触发 setupSessionList");
  let hostHid = await getHid();
  let spaceId = defaultSpaceId();
  // 登录时需获取自己的信息
  let rs = await mangePeerList(spaceId, [hostHid], 6);
  store.dispatch("userInfo/setUserInfo", rs);
  lazyLoadAvatar(hostHid, rs.portraitPath);
  // 初始化会话列表hidList
  let sessionMap = await getSessionList();
  initDialogs(spaceId, sessionMap, false);
  console.log("after initSpaceInfo =====>");
  clearReceiptInfo(spaceId);
  // 初始化sessionCollection
  try {
    let dbSessionList = await getDBSessionList();
    store.commit("sessionCollection/mergeDBSessionsToVuex", {
      peers: dbSessionList,
      spaceId: defaultSpaceId()
    });
  } catch (error) {
    devLog.error("getDBSessionList error", error);
  }
}
/**
 *  初始化空间信息 在登录 二次启动 切换空间时
 * 1. 刷新当前空间的通讯录列表（成员、群组）
 * 2. 刷新当前空间的会话列表
 * 3. 刷新当前空间的行权人或授权人列表
 */
// export async function setupSpaceInfo(isForceUpdateContact = false) {
  devLog.log("[setupSpaceInfo]", diffIdcIgnoreDopushReg);
  console.log("setupSpaceInfo diffIdcIgnoreDopushReg", diffIdcIgnoreDopushReg);

  setupSessionList();

  //   优化切换空间时候 请求服务器缓慢问题
  if (isForceUpdateContact) {
    refreshContactAndChannel(isForceUpdateContact).then(() => {
      setTopList();
    });
  } else {
    await refreshContactAndChannel(isForceUpdateContact);
    await setTopList();
  }

  if (defaultSpaceId() && defaultSpaceId() == personalSpaceId()) {
    await installContactRequest();
    // 个人空间不获取行权人和授权人列表，清空列表
    store.dispatch("userInfo/updateUserData", {
      authorizerList: [],
      exerciserList: []
    });
  } else {
    getExerciser();
    getAuthorizer();
  }
  console.log("after initSpaceInfo===>");
}
```

| 文件名称                        | 描述 | 来自          | 描述                   | 备注                    |
| ------------------------------- | ---- | ------------- | ---------------------- | ----------------------- |
| migrateMessage                  | As   |               |                        | 正在迁移时 避免多个迁移 |
| initSpaceDBInsList              | As   |               | 初始化空间列表         |                         |
| fetchSpaceListAndChangIdcSocket | As   |               | 存储空间信息列表       |                         |
| initMutipleSpaceDBInstances     | As   |               | 初始化多空间数据库实例 |                         |
| enterpriseAddFromMsg            | As   | enterpriseAdd |                        |                         |
| ForbiddenSpace                  | As   |               |                        |                         |
| enterpriseKickFromMsg           | As   |               |                        |                         |
| enterpriseKickOtherUsers        | As   |               |                        |                         |
| reportSpaceId                   | As   |               |                        |                         |
| getSpaceInfoList                | As   | enterpriseAdd | 获取空间信息列表       |                         |
| clearStoreCache                 | As   |               |                        |                         |
| enterpriseSwitch                | As   |               |                        |                         |
| switchHWAccount                 | As   |               |                        |                         |
| doConnectWhenNetworkError       | As   |               |                        |                         |
| offlineSwitch                   | As   |               |                        |                         |
| initSocketChanel                | As   |               |                        |                         |
| saveWhiteList                   | As   |               |                        |                         |
| setTopList                      | As   |               |                        |                         |
| refreshContactAndChannel        | As   |               |                        |                         |
| setupSessionList                | As   |               |                        |                         |
| setupSpaceInfo                  | As   |               |                        |                         |
| isExistSpaceList                | As   |               |                        |                         |
| doCloseWhenNetworkError         | As   |               |                        |                         |
| getSpaceLimit                   | As   |               |                        |                         |
| getExerciser                    | Ex   |               |                        |                         |
| getAuthorizer                   | Ex   |               |                        |                         |
| checkIkeyInit                   | Fn   |               |                        |                         |
| checkSocketConected             | Fn   |               |                        |                         |

> migrateMessage

> initSpaceDBInsList

> fetchSpaceListAndChangIdcSocket

> initMutipleSpaceDBInstances

> enterpriseAddFromMsg

> ForbiddenSpace

> enterpriseKickFromMsg

> enterpriseKickOtherUsers

> reportSpaceId

> getSpaceInfoList

通过 API[getSpaceList]()获取空间列表数据，获取失败使用本地缓存数据库。同步企业限制功能[getSpaceLimitList]()、[fetchSpaceListAndChangIdcSocket]()

```json
{
  spaces: [
    {
      id: "MO-853-4217846100",
      name: "Tech02",
      capacity: 0,
      virtual: false,
      ctime: 1666257314922,
      capacity: 0
      crystalSsl: "t-m-abu.crystalclear.dev"
      ctime: 1666257314922
      currentSDK: "hw"
      expiration: 4099541932000
      id: "MO-853-4217846100"
      idcIdx: 2
      idcUrl: "tech02-mapi.svc.matrx.tech"
      mtime: 1666257314922
      name: "Tech02"
      virtual: false
    },
    {
      id: "UAE-971-1000000",
      name: "Personal",
      capacity: 2147483647,
      virtual: true,
      ctime: 1657784978165,
      capacity: 2147483647
      crystalSsl: "t-m-abu.crystalclear.dev"
      ctime: 1657784978165
      currentSDK: "crystal"
      id: "UAE-971-1000000"
      idcIdx: 1
      idcUrl: "tech01-mapi.svc.matrx.tech"
      mtime: 1669607339853
      name: "Personal"
      virtual: true
    }
  ],
  telecastSwitch: 1
}
```

> clearStoreCache

> enterpriseSwitch

> switchHWAccount

> doConnectWhenNetworkError

> offlineSwitch

> initSocketChanel

> saveWhiteList

> setTopList

> refreshContactAndChannel

> setupSessionList

> setupSpaceInfo

> isExistSpaceList

> doCloseWhenNetworkError

> getSpaceLimit

> getExerciser

> getAuthorizer

> checkIkeyInit

> checkSocketConected
