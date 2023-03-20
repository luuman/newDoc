export function getLogoutType() {
    return localStorage.getItem('xx_lgType');
}
export function defaultSpaceId() {
    return localStorage.getItem('xx_currentSpace');
}
// e2ee 空间，现默认为971 先写死。
export function personalSpaceId() {
    return 'UAE-971-1000000';
}
export function isPrivateSpace(spaceId) {
    return personalSpaceId() == spaceId;
}
export function enCodeSpaceHid(hid, spaceId) {
    if (!spaceId) {
        console.trace('no spaceID', hid, spaceId);
    }
    if (hid) {
        if (hid.includes('|')) {
            return hid;
        } else {
            return hid + '|' + spaceId;
        }
    }
}
export function deCodeSpaceHid(hid) {
    if (hid.includes('|')) {
        return hid.split('|')[1];
    } else {
        return hid;
    }
}
// 会有缓存问题
// let uid = null;
let getDBCustomer;
export async function getHid(spaceId = defaultSpaceId()) {
    // if(uid != null){
    //   console.log('[getHid from cache]===>',uid)
    //   return uid
    // };
    try {
        // import {getDBCustomer} from '@/api/loginApi';

        if (!getDBCustomer) {
            getDBCustomer = require('@/api/loginApi').getDBCustomer;
        }
        let content = await getDBCustomer(spaceId);
        // uid = content && content.hid
        return content && content.hid;
    } catch (error) {
        // console.error('[error]: ',error);
        return error;
    }
}
export async function getRid() {
    return localStorage.getItem('c_rid');
}

export async function processURLForHid(url) {
    let hid = await getHid();
    return url.replace('<HID>', hid);
}
