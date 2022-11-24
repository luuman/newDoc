# 加密登录

```mermaid
stateDiagram
  state serverConfigInfo.js {
    serverConfigInfo
    setConfigData --> serverConfigInfo
  }
  state cstApi.js {
    getUcConfigServer
  }
  [*] --> getUcConfigServer
  getUcConfigServer --> setConfigData
  state cHwStatus <<choice>>
  serverConfigInfo --> cHwStatus
  state UserLogin.vue {
    cHwStatus --> LdapLogin.vue: .ldapLogin = true
    state LdapLogin.vue {
      ldapToLogin
      setLdapLogin
    }
  }
```

```mermaid
stateDiagram
  state ldapEncrypted.js {
    publicEncrypt
  }
  state loginApi.js {
    getAesLogin
    ldapLogin
  }
  state ipcRenderer {
    ipc_decrypt_public
  }
  state LdapLogin.vue {
    mounted --> initUserName
    [*] --> debounceToLogin
    [*] --> handlePasswordEnter
    emailInput
    verifyPassword
    state cHwStatus <<choice>>
    handlePasswordEnter --> cHwStatus: disableLogin = false
    cHwStatus --> debounceToLogin
    debounceToLogin --> initUUID
    initUUID --> uuidv4
    initUUID --> ldapToLogin: 同步任务
  }
  uuidv4 --> publicEncrypt: 生成UUID
  publicEncrypt --> getAesLogin: RSA公钥加密
  getAesLogin --> ipc_decrypt_public: 获取AESLogin
  ipc_decrypt_public --> ldapToLogin: RSA公钥解密
  state UserLogin.vue {
    ldapToLogin --> CryptoGcmEncrypt: AES加密
    CryptoGcmEncrypt --> preLogin
    postLogin --> MATRX_SIGNIN
    postLogin --> user_platforms
  }
  state localStorage {
    user_platforms --> c_user_name
  }
  ldapLogin --> postLogin: 登录
  preLogin --> publicEncrypt: 获取PreLogin
  publicEncrypt --> ldapLogin: RSA公钥加密
```

```mermaid

stateDiagram
  state ldapEncrypted.js {
    publicEncrypt1: publicEncrypt
    note left of publicEncrypt1: RSA公钥加密
    publicDecrypt1: publicDecrypt
    note left of publicDecrypt1: RSA公钥解密
    CryptoGcmEncrypt1: CryptoGcmEncrypt
    note left of CryptoGcmEncrypt1: AES加密
    CryptoGcmDecrypt1: CryptoGcmDecrypt
    note left of CryptoGcmDecrypt1: AES解密
    publicKey1: publicKey
    note left of publicKey1: 公钥
  }
  state loginApi.js {
    getAesLogin
    ldapLogin
  }
  state ipcRenderer {
    ipc_decrypt_public1: ipc_decrypt_public
  }
  state LdapLogin.vue {
    mounted --> initUserName
    [*] --> debounceToLogin: 点击登录
    [*] --> handlePasswordEnter: 触发回车
    emailInput
    verifyPassword
    state cHwStatus <<choice>>
    handlePasswordEnter --> cHwStatus
    cHwStatus --> debounceToLogin: disableLogin = false
    debounceToLogin --> initUUID: 初始化
    state initUUID {
      uuidv4 --> publicEncrypt: 生成UUID
      publicEncrypt --> getAesLogin: RSA公钥加密
      getAesLogin --> ipc_decrypt_public: 获取AESLogin
      ipc_decrypt_public --> ldapToLogin: RSA公钥解密
    }
  }
  state UserLogin.vue {
    ldapToLogin --> CryptoGcmEncrypt: RSA公钥解密
    CryptoGcmEncrypt --> preLogin: ASE公钥解密
    state postLogin {
      checkValidSpaceList
    }
    postLogin --> MATRX_SIGNIN
    postLogin --> user_platforms
  }
  state localStorage {
    user_platforms --> c_user_name
    note left of user_platforms: ldap标识
    note left of c_user_name: Ldap用户名
  }
  state ssoWin.js {
    MATRX_SIGNIN
    note left of MATRX_SIGNIN: 启动SSO窗口
  }
  ldapLogin --> postLogin: 获取登录信息
  preLogin --> publicEncrypt2: 获取PreLogin
  publicEncrypt2 --> publicEncrypt1
  publicEncrypt1 --> publicEncrypt2
  publicEncrypt2 --> ldapLogin: RSA公钥加密
```

## LdapLogin

```mermaid
stateDiagram
  state ipcRenderer {
    ipc_decrypt_public1: ipc_decrypt_public
  }
  ipc_decrypt_public1 --> ipc_decrypt_public
  ipc_decrypt_public --> ipc_decrypt_public1
  state LdapLogin.vue {
    mounted --> initUserName
    [*] --> debounceToLogin: 点击登录
    [*] --> handlePasswordEnter: 触发回车
    emailInput
    verifyPassword
    state cHwStatus <<choice>>
    handlePasswordEnter --> cHwStatus
    cHwStatus --> debounceToLogin: disableLogin = false
    debounceToLogin --> initUUID: 初始化
    state initUUID {
      uuidv4 --> publicEncrypt: 生成UUID
      publicEncrypt --> getAesLogin: RSA公钥加密
      getAesLogin --> ipc_decrypt_public: 获取AESLogin
    }
  }
  initUUID --> ldapToLogin: RSA公钥解密
```

## UserLogin - ldapToLogin

```mermaid
stateDiagram
  initUUID --> CryptoGcmEncrypt: AES加密
  state UserLogin.vue {
    state ldapToLogin {
      CryptoGcmEncrypt --> preLogin: PreLogin
      ldapLogin --> postLogin: 配置登录信息
      preLogin --> publicEncrypt: RSA公钥加密
      publicEncrypt --> ldapLogin: 登录信息
    }
    state preLogin {
      checkValidSpaceList1
    }
  }
```

## UserLogin - ldapToLogin

```mermaid
stateDiagram
  [*] --> postLogin
  state postLogin {
    DBHelpMethod: DB-Help-Method
    E2EEHelpMethod: E2EE-Help-Method
    DBHelpMethod --> E2EEHelpMethod
    E2EEHelpMethod --> closeLockLoading: !save_result
    E2EEHelpMethod --> setCustomerInfo: send ping
    --
    setCustomerInfo --> setUserInfo
    setUserInfo --> c_email: emailAddress
    setUserInfo --> c_phone
    setUserInfo --> keepLogin: keepLogin
    setUserInfo --> uid: uid
    setUserInfo --> getContactList: if (needProcess)
    --
    uid
    c_email
    c_phone
    keepLogin
    --
    getContactList
    note left of getContactList: E2EE 获取个人空间的好友
  }
  postLogin --> MATRX_SIGNIN: 启动SSO窗口
  postLogin --> user_platforms: ldap标识
  postLogin --> c_user_name: Ldap用户名
  state localStorage {
    user_platforms
    c_user_name
  }
  state ssoWin.js {
    MATRX_SIGNIN
  }
```

## 加密方式 AES

### aes128gcm.js

```js
"use strict";

const crypto = require("crypto");

// AES256加密算法 MAC信息验证
const ALGORITHM = "aes-256-gcm";

const TAG_SIZE = 16;
const KEY_SIZE = 32;
const PAYLOAD_MIN_SIZE = TAG_SIZE + 1;

const VALID_PLAINTEXT_ENCODING = ["ascii", "utf8", "buffer"];
const VALID_PAYLOAD_ENCODING = ["base64", "hex", "buffer"];

// one _encryptionKey WeakMap entry per instance!
let _encryptionKey = new WeakMap();

export class CryptoGcm {
  constructor(options) {
    if (!options || !options.key || !options.encoding)
      throw new Error("missing options");

    const { key, encoding } = options;

    if (
      !encoding.plaintext ||
      VALID_PLAINTEXT_ENCODING.indexOf(encoding.plaintext) === -1
    )
      throw new Error("plaintext encoding should be ascii, utf8 or buffer");

    if (
      !encoding.payload ||
      VALID_PAYLOAD_ENCODING.indexOf(encoding.payload) === -1
    )
      throw new Error("payload encoding should be base64, hex or buffer");

    this.encoding = Object.freeze(encoding);

    // - save encryption key in WeakMap at key = THIS INSTANCE
    //   when this instance is destroyed, and encryption key was not deleted
    //   from the WeakMap, the key will be set for garbage collection, so will
    //   be deleted, so no private key leak!
    //
    // - this could happen if destroy() is not called but this instance goes out
    //   of scope and thus is garbage collected
    _encryptionKey.set(this, key);
  }

  destroy() {
    if (!_encryptionKey.has(this))
      throw new Error("instance has been destroyed");

    _encryptionKey.delete(this);
  }

  _createBufferWithEncoding(input, inputType) {
    const encoding = this.encoding[inputType];

    if (!input) return false;

    if (encoding !== "buffer") input = Buffer.from(input, encoding);

    return input;
  }

  encrypt(plaintext, iv) {
    if (!_encryptionKey.has(this))
      throw new Error("instance has been destroyed");

    plaintext = this._createBufferWithEncoding(plaintext, "plaintext");

    if (!plaintext) return false;
    // 加密模块的内置应用程序编程接口，用于创建具有指定算法， key 和初始化向量(iv)的Cipher对象。
    const cipher = crypto.createCipheriv(
      ALGORITHM,
      _encryptionKey.get(this),
      iv
    );
    cipher.end(plaintext);
    const ciphertext = cipher.read();
    const tag = cipher.getAuthTag();

    const payload = Buffer.concat([ciphertext, tag]);

    const encoding = this.encoding.payload;

    return encoding === "buffer"
      ? payload // buffer
      : payload.toString(encoding); // hex or base64
  }

  decrypt(payload, iv) {
    if (!_encryptionKey.has(this))
      throw new Error("instance has been destroyed");

    payload = this._createBufferWithEncoding(payload, "payload");

    if (!payload) return false;

    if (payload.length < PAYLOAD_MIN_SIZE) return false;

    const plaintext_size = payload.length - TAG_SIZE;
    const ciphertext = payload.slice(0, plaintext_size);
    const tag = payload.slice(plaintext_size);

    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      _encryptionKey.get(this),
      iv
    );
    decipher.setAuthTag(tag);
    try {
      decipher.end(ciphertext);
    } catch (e) {
      return false;
    }

    const plaintext = decipher.read();

    const encoding = this.encoding.plaintext;

    return encoding === "buffer"
      ? plaintext // buffer
      : plaintext.toString(encoding);
  }
}
```

### 使用

```js
passwordInput() {
	// const key = CryptoJS.enc.Utf8.parse('秘钥'); //十六位十六进制数作为密钥
	// const iv = CryptoJS.enc.Utf8.parse('偏移量'); //十六位十六进制数作为密钥偏移量
	const key = Buffer.from('9c3225ea8eb9c07e613e164be68cebd72d68e7c94e8dd44163ffd0e6f868287f', 'hex');
	const iv = Buffer.from('22a40dbc8d74652b1a0cc239dbd907ec', 'hex');

	const cg = new CryptoGcm({
	key,
	encoding: {
		plaintext: 'buffer', // also supported: ascii, buffer
		payload: 'buffer' // also supported: base64, hex
	}
	});
	let result = cg.decrypt(Buffer.from('a4be5040b1d1ac06428b0f5d742cc7779f958392', 'hex'), iv);

	console.log('LdapLogin [click login]', cg, result, Buffer.from(result).toString());
	this.passwordInputs();
},
passwordInputs() {

	const key = Buffer.from('9c3225ea8eb9c07e613e164be68cebd72d68e7c94e8dd44163ffd0e6f868287f', 'hex');
	const iv = Buffer.from('22a40dbc8d74652b1a0cc239dbd907ec', 'hex');

	const cg = new CryptoGcm({
	key,
	encoding: {
		plaintext: 'buffer', // also supported: ascii, buffer
		payload: 'buffer' // also supported: base64, hex
	}
	});
	let result = cg.encrypt('abcd', iv);

	console.log('LdapLogin [click login]', cg, Buffer.from(result).toString('hex'));
},
```

```js
// key十六位十六进制数作为密钥
// iv 十六位十六进制数作为密钥偏移量
// AES加密
export function CryptoGcmEncrypt(aesKeyData1, str) {
  const { CryptoGcm } = require("@/utils/aes128gcm.js");
  const MatrxAesUtils = new CryptoGcm({
    key: Buffer.from(aesKeyData1.key, "hex"),
    encoding: {
      plaintext: "buffer",
      payload: "buffer"
    }
  });
  const result = MatrxAesUtils.encrypt(str, Buffer.from(aesKeyData1.iv, "hex"));
  return Buffer.from(result).toString("hex");
}

// AES解密
export function CryptoGcmDecrypt(aesKeyData1, str) {
  const MatrxAesUtils = new CryptoGcm({
    key: Buffer.from(aesKeyData1.key, "hex"),
    encoding: {
      plaintext: "buffer",
      payload: "buffer"
    }
  });
  const result = MatrxAesUtils.decrypt(
    Buffer.from(str, "hex"),
    Buffer.from(aesKeyData1.iv, "hex")
  );
  return Buffer.from(result).toString();
}
```

## 加密方式 RSA

```js
import crypto from "crypto";

const pv = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyMzxI3CU2TRRBz1XrGvXIpwHuKD/ELUHv7qEqV01g0rC1i/XdfkaesXPImoViRAoCSI+l4aNIAtzgR3GuyXA/Xoqs8E2tbRiYQg93xwrZfuUXYVLkxr643dPxhAKf3VXQuW98Ncsp1lGMwIbmNbUHuuDGXWxhe8L7oFxkRv5NQ9+Q7bm1O+xP22iCdtrBLbmajR9yO262/86jmd5A8mJjPRcUu1Z0ImMNCbahGk7LV596bpk/22NwRxm6GuePKymyoYgOcL4F7Hu96mGlPjU9s85zVW4ubORe5MNn/SQY+SdywQAdQQin2KeiyjLEqWXrgV/pfNcZbWMJv0cIeIBdAgMBAAECggEBAJzbrL0Vy0u5HZOwRhjlamRtXa2dkEPG8ruYehUjM+F+lD26LXoCpXcbDKgQHEkbSxQnewqxS2Ef4/0n5lHMzxl4xujjvfxig7vCqorskghRQqcJ7EWlDEz+NonpgcXmtps8H35ee68gEDitYBFURT3AqgryQWyt3DxSNAGw3Dh1hX51v6okxYjd5i+E2HoKdcsJHXI9XOrLjjMENrignky1N9bA5i0TvjKtLv6gXl0t7zP4B9Qun5Tsuf4LU31RyvjgpE2hPoGv9+/GWG6Eqg9XdsMVwp/ivjZoXPy/UAJXQ6vJ5AaCNllDTpAQRqB3eZ3W3OXG8jj9lvyvJQ1qNqECgYEA5HflhRGv64BaMTMg/9G7i6g/p5b3w92DVkAwyToARzMFRv8tL/Dcev5GN7bvOx5s1up/6XRR8fF/UnVUKtA1XfVR66+gZ5M4zJiIjdLXi3uCCgH7HOVf/TuStrsVdDZb2olXJFA3ldgdcor1lPmpzymJh65SIqO2SCC+bK41+pMCgYEAx6yYvWPxwFnEY4U/mI2FNXvgA/ce0h0B82gfFvVN8++N9FA8VWItZWJjxtvmSeWX+ZTDkj1BJV1awjcVr3cwQ+ZMiONHtdO7155g1R0k6YBMFQ4SMGLWBrqiKTIfVP6XvE0lxJTPhjcakJCljCVATG4KeH+9AX96nGisotgCP08CgYEAucN+/JaoCn0fWJexAjBfJKvVrgeDR1+KFYw13rfpV/r1FIgRDsTyEJNFNrHojJItfwXGoWRx6J4qnzpFCFaovc/lHxR7ARxkd36isWY42fG/hzGbIyChzr4siaVOSWKVhvhawWzz9UN2lhbEna/uUUH90DN+Fyoz4Su2iZmQzD8CgYB7gK4YtrDZIKzwQYLMgPxb0HsG+Nr/ayHBxC02rhPBRfKvotEunsMlam38mhcerfwKS5GL6odY7R0t85ReK4KW/ONp5+p69LPC8htCtfwW0Vw9ya5Gb1uiXd3fTTlEARUpSy6JIOIbSgoMUOuUe5YBsC6ZyajGPGtCQxxEvQbm0QKBgG9qvA6aMFhgtk3VMiPAsIq23uWAkE6b1Ei3f42VwtRUwGqM5uhoT+gFz2ZxBqrObHA8oby44lTPEtS1akgmY/gFcPC6D7E8FN9OlLLjCLoc2auIVeJqO+T7QFEKaRFtXFJEuk4yXXSVcFholT6wwoX7V6iCBpO7INAl4UIQorb+
-----END PRIVATE KEY-----`;

const pb = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsjM8SNwlNk0UQc9V6xr1yKcB7ig/xC1B7+6hKldNYNKwtYv13X5GnrFzyJqFYkQKAkiPpeGjSALc4EdxrslwP16KrPBNrW0YmEIPd8cK2X7lF2FS5Ma+uN3T8YQCn91V0LlvfDXLKdZRjMCG5jW1B7rgxl1sYXvC+6BcZEb+TUPfkO25tTvsT9tognbawS25mo0fcjtutv/Oo5neQPJiYz0XFLtWdCJjDQm2oRpOy1efem6ZP9tjcEcZuhrnjyspsqGIDnC+Bex7vephpT41PbPOc1VuLmzkXuTDZ/0kGPkncsEAHUEIp9inosoyxKll64Ff6XzXGW1jCb9HCHiAXQIDAQAB
-----END PUBLIC KEY-----`;

const testEndataDePrivate = `cMhx3SZjXeK3LxtoKc94rZBjUkl6FEH0AbBixRYwrfmCxeC9DABlVcVaNvnNdTb7Bk1VBBA9WOZIj+SE+5pkEvQyvyFv04rhr5blsgx6Fo+t5RkyOJd6RlxJ7/djgm5aOYz6fNabb2mMzwRC0FKCevL//CGMamrwnAwgdZWI4mc7bLeuzcsCVh78VReUXHLarcWlH2hl9uzq5YdZS221RfMOlAQ6UvfqxNoxpclJmewnX0/YxM+6xHLbWpq9C8w17PNpHaxZNAWwPRxDaVua74U8nsD+3Wk4r79aV8sISQR3H4+VSfoOD3ldcn9QCIO2WttmZqjelz/tkDGahLu5Iw==`;

const testEndataDePublic = `Ej1h+3GB4keRSygb1GZiZ+SzjZqDQ3YEnA8MH/eUOnm5E8z0upZIsKsrNuU+iA2ZtyZXSpkTOWIcHi7LT5nG9VhXwnjs5kwYd7apSPc65bAywJJRNy7H+0r6+fkTMJHJh7VhI47jxKVJogD0MiJe1p+66bxAAhtKcGipUzu6uilZHUVQosg8O0DHVkfc6ep3+SrIuqihQXmqVzec8qJ4rkcCYTLNEaW7YqLLS91VzGOHh4lZ5Ke5hy5FZAUvCcsJ6jmKfQ4fuLFSKRS8hrYu5jBstf4w7BVCrUxOfPhs9Hg287j5H6Ntlx5zk1LvjCBEVci5F51T6DN6vgBd7V/Jzg==`;

export function publicEncrypt(plaintext: string): string {
  return crypto
    .publicEncrypt(
      {
        key: pb,
        passphrase: "",
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(plaintext, "utf8")
    )
    .toString("base64");
}

export function privateDecrypt(plaintext: string): string {
  return crypto
    .privateDecrypt(
      {
        key: pv,
        passphrase: "",
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(plaintext, "base64")
    )
    .toString("utf8");
}

export function privateEncrypt(plaintext: string): string {
  return crypto
    .privateEncrypt(pv, Buffer.from(plaintext, "utf8"))
    .toString("base64");
}

export function publicDecrypt(plaintext: string): string {
  return crypto
    .publicDecrypt(pb, Buffer.from(plaintext, "base64"))
    .toString("utf8");
}

console.log("📢 [rsa.ts:42]", privateDecrypt(testEndataDePrivate));
console.log("📢 [rsa.ts:42]", publicDecrypt(testEndataDePublic));
```

[nodejs 付费](http://nodejs.cn/api/crypto/crypto_publicencrypt_key_buffer.html)
[nodejs 官方](https://nodejs.org/dist/latest-v18.x/docs/api/crypto.html#cryptopublicencryptkey-buffer)

```js
// RSA公钥加密
export function publicEncrypt(plaintext) {
  const crypto = require("crypto");
  return (
    crypto
      .publicEncrypt(
        {
          // PEM 编码的公钥或私钥
          key: publicKey,
          // 私钥的可选密码
          passphrase: "",
          // 用于 OAEP 填充和 MGF1 的哈希函数
          // oaepHash: 'sha1',
          // 在 crypto.constants 中定义的可选填充值 crypto.constants.RSA_NO_PADDING, crypto.constants.RSA_PKCS1_PADDING, or crypto.constants.RSA_PKCS1_OAEP_PADDING.
          padding: crypto.constants.RSA_PKCS1_PADDING
        },
        Buffer.from(plaintext, "utf8")
      )
      // 加密内容的新缓冲区
      .toString("base64")
  );
}

// RSA公钥解密
export function publicDecrypt(plaintext) {
  const crypto = require("crypto");
  return crypto
    .publicDecrypt(publicKey, Buffer.from(plaintext, "base64"))
    .toString("utf8");
}

crypto.publicEncrypt(key, buffer);
// 用 key 加密 buffer 的内容，并返回带有加密内容的新 Buffer。 返回的数据可以使用相应的私钥解密，例如使用 crypto.privateDecrypt()。
crypto.privateDecrypt(privateKey, buffer);
// 用 privateKey 解密 buffer。 buffer 之前使用相应的公钥加密，例如使用 crypto.publicEncrypt()。
```
