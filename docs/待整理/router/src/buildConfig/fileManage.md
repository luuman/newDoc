import {commonUCRequest} from '../api/axiosInstance';
import {defaultSpaceId} from './hid';
import {outputFile, remove} from 'fs-extra';
import {join} from 'path';
import {dataUtil} from '@/utils/dataUtil';
import path from 'path';
import * as F from '@/utils/Function';
import {getUCBaseURL} from '@/utils/base';
import assistantIcons from '@/assets/icons/ic_assistant.png';
import {configDir} from '@/config/config';
import {fetchPlainRequest} from '@/api/messageApi';
const sha256 = require('js-sha256').sha256;
import Jimp from 'jimp/es';
// import fs from 'fs';
import devLog from '@/logs/devLog';

let BASEDIR = configDir;

function imgToBuffer(filepath) {
    return new Promise(resolve => {
        if (filepath) {
            let imageTpe = 'image/' + path.extname(assistantIcons).slice(1);
            let img = new Image();
            img.src = filepath;
            let c = document.createElement('canvas');
            // width、height
            img.onload = function () {
                c.width = img.width;
                c.height = img.height;
                let ctx = c.getContext('2d');
                ctx.drawImage(this, 0, 0, img.width, img.height);
                let url = c.toDataURL(imageTpe, 1);
                // let img1 = new Image();
                // img1.src = url;
                // img1.id = 'test-img';
                // document.body.append(img1)
                url = url.replace(/^data:image\/\w+;base64,/, '');
                let buf = new Buffer(url, 'base64');
                img = null;
                resolve(buf);
            };
            img.onerror = function (e) {
                resolve('');
            };
        } else {
            resolve('');
        }
    });
}
export async function uploadAvatar(file, spaceId) {
    let buffers = [];
    let sha256desc = await bigFileSha256(file, buffers);
    // let formData = new FormData();

    let data = buffers.reduce((prev, curr) => concatBuffer(prev, curr));
    // let hid = await getHid();
    return commonUCRequest({
        baseURL: getUCBaseURL(spaceId),
        url: `/profile/upload`,
        method: 'POST',
        data: data,
        params: {
            nctick: 0,
            sha256: sha256desc,
            enterpriseId: spaceId
        },
        headers: {
            'Content-Type': 'image/jpeg'
        }
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
}

// 删除用户/群组的关联文件
export async function deleteFiles(hid) {
    if (hid == null) {
        return null;
    } else {
        let targetPath = join(BASEDIR, hid, 'file/');
        await remove(targetPath);
    }
}

export function makeProtocalBy(hid, digit = Date.now(), spaceId = defaultSpaceId()) {
    if (hid) {
        let targetPath = join(BASEDIR, hid, hid + '_' + spaceId + '_avatar?' + digit);
        targetPath = targetPath.replace(/\\/g, '/');
        // console.warn('targetPath', hid, targetPath);
        return encodeURI('file://' + targetPath);
    } else {
        console.error('makeProtocalBy', hid);
    }
}

async function reqAvatar(hid, spaceId = defaultSpaceId()) {
    let isGroup = dataUtil.getPeerType(hid) === 'group';

    if (isGroup) return null;
    try {
        let getUrlRes = await commonUCRequest({
            baseURL: getUCBaseURL(),
            method: 'GET',
            url: '/profile/downloadv2',
            params: {
                user: hid,
                enterpriseId: spaceId
            },
            headers: {
                'Content-Type': ''
            }
        });
        // let res = await fetchPlainRequest({
        //     url: getUrlRes.download.url,
        //     // responseType: "blob"
        //     responseType: 'arraybuffer'
        // });
        // if (res.byteLength > 0) {
        //     return res;
        // } else {
        //     F.info(`error download fail1 ${hid} ${spaceId}`);
        //     return null;
        // }
        return getUrlRes?.download?.url || null;
    } catch (e) {
        F.info(`error download fail2 ${hid} ${spaceId} ${e.message}`);
        if (hid === 'AAAAAAAMWh0') return await imgToBuffer(assistantIcons);

        return null;
    }
}
const imageDefaultSize = 60;
async function saveImage(url, filePath) {
    try {
        try {
            if (url.toLowerCase().includes('.webp')) {
                let res = await fetchPlainRequest({
                    url,
                    responseType: 'arraybuffer'
                });
                // console.log('fetchPlainRequest', res);
                if (res.byteLength > 0) {
                    // console.warn('outputFile', file);
                    await outputFile(filePath, Buffer.from(res));
                    res = null;
                    return 1;
                } else {
                    return null;
                }
            } else {
                let image = await Jimp.read({
                    url // Required!
                    //   headers: {},
                });

                let minPath = filePath;
                if (image.bitmap.width > image.bitmap.height) {
                    await image.resize(Jimp.AUTO, imageDefaultSize).writeAsync(minPath); // save
                    // console.log('Res11', res);
                } else {
                    await image.resize(imageDefaultSize, Jimp.AUTO).writeAsync(minPath); // save
                    // console.log('res00', res);
                }
                // console.log('saveImage minPath', minPath);

                // console.log('image', image);
                image = null;
                minPath = null;
            }

            filePath = null;
        } catch (e) {
            console.error('saveImage catch error', e);
            devLog.error('saveImage catch error', e.message, filePath);

            let res = await fetchPlainRequest({
                url,
                responseType: 'arraybuffer'
            });
            // console.log('fetchPlainRequest', res);
            if (res.byteLength > 0) {
                // console.warn('outputFile', file);
                await outputFile(filePath, Buffer.from(res));
                res = null;
                return 1;
            } else {
                return null;
            }
        }

        return 1;
    } catch (error) {
        console.error('saveImage error', error);

        devLog.error('saveImage error', error.message, filePath);
    }
}

async function outputFiles(file, hid, spaceId = defaultSpaceId()) {
    if (file == null) {
        return null;
    } else {
        let targetPath = join(BASEDIR, hid, hid + '_' + spaceId + '_avatar');

        // let bna = Buffer.from(file);
        // await outputFile(targetPath, bna);
        let res;
        if (Buffer.isBuffer(file)) {
            // console.warn('outputFile', file);
            await outputFile(targetPath, file);
            res = 1;
        } else {
            res = await saveImage(file, targetPath);
        }

        if (res) {
            // let digit = bna.slice(100, 110).join('-');
            let resPath = join(targetPath + '?' + Date.now());
            resPath = resPath.replace(/\\/g, '/');
            // digit = null;
            // bna = null;
            targetPath = null;
            res = null;
            console.log('resPath', resPath);
            // file.pipe(createWriteStream(targetPath))
            return encodeURI('file://' + resPath);
        } else {
            return null;
        }
    }
}

export async function exchangeAvatar(hidMap, returnObject = true, spaceId = defaultSpaceId()) {
    // 减少头像请求，noProtraitMtimeList 标识从来没有修改过头像的用户，noNeedFetchHidList 需要获取本地旧头像的用户
    let {hids = [], noNeedFetchHidList = [], noProtraitMtimeList = []} = hidMap;

    let files = await Promise.all(hids.map(a => reqAvatar(a, spaceId)));
    let localPaths = await Promise.all(files.map((a, idx) => outputFiles(a, hids[idx], spaceId)));
    // console.warn('localPaths', hids, localPaths);
    // devLog.log('formatHidArgByProtraitMtime', hids, localPaths);

    files = null;
    // 之前获取过，即有ProtraitMtime的用户
    let noChangePaths = noNeedFetchHidList.map(hid => makeProtocalBy(hid, undefined, spaceId));
    let nullPaths = noProtraitMtimeList.map(hid => null);

    if (returnObject) {
        let returnObj = {};
        // 从没有修改过头像的用户
        for (let i = 0; i < noProtraitMtimeList.length; i++) {
            returnObj[noProtraitMtimeList[i]] = null;
        }
        nullPaths = null;

        // 不需要修改头像
        for (let i = 0; i < noChangePaths.length; i++) {
            returnObj[noNeedFetchHidList[i]] = noChangePaths[i];
        }
        noChangePaths = null;

        // 更新头像
        for (let i = 0; i < hids.length; i++) {
            returnObj[hids[i]] = localPaths[i];
        }

        localPaths = null;
        returnObj.spaceId = spaceId;
        return returnObj;
    } else {
        localPaths = [...nullPaths, ...noChangePaths, ...localPaths];
        return localPaths;
    }
}

async function bigFileSha256(file, output = []) {
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    let chunkSize = 2097152; // 2M
    let currentChunk = 0;
    let chunks = Math.ceil(file.size / chunkSize);
    let hash = sha256.create();
    return new Promise((resolve, reject) => {
        onload = e => {
            // spark.append(e.target.result);
            hash.update(e.target.result);
            output.push(e.target.result);
            currentChunk++;
            if (currentChunk < chunks) {
                readMore();
            } else {
                // resolve(spark.end());
                resolve(hash.hex());
            }
        };

        function readMore() {
            let fileReader = new FileReader();
            fileReader.onload = onload;
            fileReader.onerror = reject;
            let start = currentChunk * chunkSize,
                end = start + chunkSize >= file.size ? file.size : start + chunkSize;
            fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
        }
        readMore();
    });
}
function concatBuffer(buffer1, buffer2) {
    var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
}
