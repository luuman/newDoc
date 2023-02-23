# 通讯录及联系人选择器支持展示组织架构——Desktop

## 修改点

> 每次进入组织结构入口时刷新

> 只在企业空间中存在，P 空间不存在

> 个人详情页修改

字段名：Organization

显示规则：如果该成员在多个部门，分行显示。显示不下折行显示。一个组织结构最多显示三行，显示不下遵循省略规则

省略规则：一个完整层级如果三行显示不下，保留顶层企业名和倒数 2 个层级，其余…隐藏

例子：该成员在 Matrx PM 下的 5 级部门，则显示为：Matrx PM > …>ABC>DFG

> 联系人详情页修改

1. Organization
1. 如果该成员在多个部门，分行显示。显示不下折行显示。一个组织结构最多显示三行，显示不下遵循省略规则

   > 联系人卡片详情页修改

1. 只显示一行，显示不下，只保留一级部门和末级部门，中间用…代替
1. 如果该成员隶属于多个部门，只显示服务器返回的第一个所属部门即可

> 问题

1. p 空间是否显示 organization
1. 默认组织结构展示内容
1.

## 新增

> Index

默认选中组织结构名称

> Organization

## 联系人选择器改造（p 空间不支持）

# 需求评审

组织架构第一个不显示面包屑内容。

## 新建一个表存储链表数据库

```js
//变更前
const arr1 = [
  {
    name: "阿花",
    age: 19,
    city: "北京"
  },
  {
    name: "翠花",
    age: 17,
    city: "上海"
  },
  {
    name: "狗剩",
    age: 30,
    city: "杭州"
  }
];
//变更后
const arr2 = [
  {
    name: "大帅比",
    age: 25,
    city: "西安"
  },
  {
    name: "老帅比",
    age: 35,
    city: "成都"
  }
];

function comparison(previous, current) {
  //previous为变更前的数组，current为变更后的数组

  //定义好函数的返回值
  const result = [];
  //获取变更的组数，len代表变更了多少组数据
  const len = Math.max(arr1.length, arr2.length);
  //获取用来遍历的数组
  const loopArr = arr1.length > arr2.length ? arr1 : arr2;
  //获取用来另一个用来对比的数组
  const preArr = arr1.length > arr2.length ? arr2 : arr1;

  //没有变更直接return
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return;
  }
  //初始化每一组数据的变更
  for (let i = 0; i < len; i++) {
    result[i] = [];
  }
  //遍历比对差异
  loopArr.forEach((item, index) => {
    for (const key in item) {
      //增加和删除的情况默认为空对象
      preArr[index] || (preArr[index] = {});
      //如果不相等就定义一个对象并push到数组中
      if (item[key] !== preArr[index][key]) {
        const changedItem = {
          fieldName: key, //字段名
          preValue: arr1[index][key] || "", //变更前的值，取不到默认为空
          currentValue: arr2[index][key] || "" //变更后的值
        };
        result[index].push(changedItem);
      }
    }
  });
  return result;
}
console.log("comparison", comparison(arr1, arr2));
```

```js
//变更前
const arr1 = [
  {
    id: "UAE-971-0000001",
    level: 1,
    pid: "",
    rootId: "UAE-971-0000001",
    size: 271,
    spaceName: "Matrx Team",
    spaceType: 0,
    uidList: [971233079302050800, 65251934196822560, 86187556975331970],
    childList: [
      {
        id: "UAE-971-3961989100",
        level: 2,
        pid: "UAE-971-0000001",
        rootId: "UAE-971-0000001",
        size: 9,
        spaceName: "SupportTeam",
        spaceType: 1,
        uidList: [238735774911950, 86172606176902820],
        childList: []
      },
      {
        id: "UAE-971-3961989101",
        level: 2,
        pid: "UAE-971-0000001",
        rootId: "UAE-971-0000001",
        size: 9,
        spaceName: "SupportTeam",
        spaceType: 1,
        uidList: [238735774911950, 86172606176902820],
        childList: [
          {
            id: "UAE-971-3961989102",
            level: 3,
            pid: "UAE-971-3961989101",
            rootId: "UAE-971-0000001",
            size: 9,
            spaceName: "SupportTeam",
            spaceType: 1,
            uidList: [238735774911950, 86172606176902820]
          },
          {
            id: "UAE-971-3961989103",
            level: 3,
            pid: "UAE-971-3961989101",
            rootId: "UAE-971-0000001",
            size: 9,
            spaceName: "SupportTeam",
            spaceType: 1,
            uidList: [238735774911950, 86172606176902820]
          }
        ]
      }
    ]
  }
];
//变更后
const arr2 = [
  {
    id: "UAE-971-0000001",
    level: 1,
    pid: "",
    rootId: "UAE-971-0000001",
    size: 271,
    spaceName: "Matrx Team",
    spaceType: 0,
    uidList: [971233079302050800, 65251934196822560, 86187556975331970],
    childList: [
      {
        id: "UAE-971-3961989100",
        level: 2,
        pid: "UAE-971-0000001",
        rootId: "UAE-971-0000001",
        size: 9,
        spaceName: "SupportTeam",
        spaceType: 1,
        uidList: [238735774911950, 86172606176902820],
        childList: [
          {
            id: "UAE-971-3961989102",
            level: 3,
            pid: "UAE-971-3961989100",
            rootId: "UAE-971-0000001",
            size: 9,
            spaceName: "SupportTeam",
            spaceType: 1,
            uidList: [238735774911950]
          }
        ]
      },
      {
        id: "UAE-971-3961989101",
        level: 2,
        pid: "UAE-971-0000001",
        rootId: "UAE-971-0000001",
        size: 9,
        spaceName: "SupportTeam",
        spaceType: 1,
        uidList: [238735774911950, 86172606176902820],
        childList: [
          {
            id: "UAE-971-3961989104",
            level: 3,
            pid: "UAE-971-3961989101",
            rootId: "UAE-971-0000001",
            size: 9,
            spaceName: "SupportTeam",
            spaceType: 1,
            uidList: [238735774911950]
          }
        ]
      }
    ]
  }
];

/**
 * @description 递归扁平比
 * @param {array} arr 扁平化数组
 * @param {boolean} isObjBack 是否返回对象
 */
function flatten(arr, isObjBack = false) {
  let arrBack = [];
  let objBack = {};
  arr.map((item) => {
    let newItem = JSON.parse(JSON.stringify(item));
    newItem.organId = newItem.id;
    delete newItem.id;
    delete newItem.childList;
    delete newItem.uidList;
    console.log("newItem", newItem, item);
    if (
      item.childList &&
      Array.isArray(item.childList) &&
      item.childList.length
    ) {
      arrBack.push(newItem);
      objBack[newItem.organId] = newItem;
      if (isObjBack) {
        objBack = Object.assign(objBack, flatten(item.childList, isObjBack));
      } else {
        arrBack = arrBack.concat(flatten(item.childList, isObjBack));
      }
    } else {
      arrBack.push(newItem);
      objBack[newItem.organId] = newItem;
    }
  });
  if (isObjBack) return objBack;
  return arrBack;
}

/**
 * @description 数组对比
 * @param {array} previous 旧数组
 * @param {array} current 新数组
 */
function comparison(previous, current) {
  //previous为变更前的数组，current为变更后的数组

  //定义好函数的返回值
  const result = [];
  //获取变更的组数，len代表变更了多少组数据
  const len = Math.max(previous.length, current.length);
  //获取用来遍历的数组
  const loopArr = previous.length > current.length ? previous : current;
  //获取用来另一个用来对比的数组
  const preArr = previous.length > current.length ? current : previous;

  //没有变更直接return
  if (JSON.stringify(previous) === JSON.stringify(current)) {
    return;
  }
  //初始化每一组数据的变更
  for (let i = 0; i < len; i++) {
    result[i] = [];
  }
  //遍历比对差异
  loopArr.forEach((item, index) => {
    for (const key in item) {
      //增加和删除的情况默认为空对象
      preArr[index] || (preArr[index] = {});
      //如果不相等就定义一个对象并push到数组中
      if (item[key] !== preArr[index][key]) {
        const changedItem = {
          fieldName: key, //字段名
          preValue: previous[index][key] || "", //变更前的值，取不到默认为空
          currentValue: current[index][key] || "" //变更后的值
        };
        result[index].push(changedItem);
      }
    }
  });
  return result;
}

/**
 * @description 数组比对返回数据库处理
 * @param {array} previous 旧数组
 * @param {array} current 新数组
 */
function orgComparison(previous, current) {
  try {
    if (!Array.isArray(previous))
      throw new TypeError("The argument must be a array");
    if (!Array.isArray(current))
      throw new TypeError("The argument must be a array");
    const dbChangeTpe = {
      delete: "delete",
      add: "add",
      change: "change"
    };
    const previousIs = {};
    const previousObj = {};
    const result = {};
    previous.forEach((item) => {
      const itemKey = item.organId;
      previousIs[itemKey] = 0;
      previousObj[itemKey] = item;
    });
    current.forEach((item, index) => {
      const itemKey = item.organId;
      if (previousObj[itemKey]) {
        const newItem = {};
        let isChange = false;
        if (!result[dbChangeTpe.change]) result[dbChangeTpe.change] = [];
        for (const key in item) {
          if (
            JSON.stringify(item[key]) !==
            JSON.stringify(previousObj[itemKey][key])
          ) {
            console.log(
              "change",
              JSON.stringify(item[key]),
              JSON.stringify(previousObj[itemKey][key])
            );
            newItem[key] = item[key];
            newItem.organId = item.organId;
            isChange = true;
          } else {
            // console.log(
            //   "change",
            //   JSON.stringify(item[key]),
            //   JSON.stringify(previousObj[itemKey][key])
            // );
          }
        }
        if (isChange) result[dbChangeTpe.change].push(newItem);
        previousIs[itemKey] = 1;
      } else {
        if (!result[dbChangeTpe.add]) result[dbChangeTpe.add] = [];
        result[dbChangeTpe.add].push(item);
      }
    });
    console.log("previousIs", previousIs);
    for (const key in previousIs) {
      if (!previousIs[key]) {
        if (!result[dbChangeTpe.delete]) result[dbChangeTpe.delete] = [];
        result[dbChangeTpe.delete].push(key);
      }
    }
    return result;
  } catch (err) {
    console.log("orgComparison", err);
  }
}
var flatten1 = flatten(arr1);
var flatten2 = flatten(arr2);
console.log("flatten", flatten1);
console.log("flatten", flatten2);

console.log("comparison", orgComparison(flatten1, flatten2));
console.log("comparison", orgComparison(flatten1, "flatten2"));
```

```js
var spaceList = [
  {
    id: "UAE-971-0000001",
    level: 1,
    pid: "",
    rootId: "UAE-971-0000001",
    size: 271,
    spaceName: "Matrx Team",
    spaceType: 0,
    uidList: [971233079302050800, 65251934196822560, 86187556975331970]
  },
  {
    id: "UAE-971-3961989100",
    level: 2,
    pid: "UAE-971-0000001",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  },
  {
    id: "UAE-971-3961989101",
    level: 2,
    pid: "UAE-971-0000001",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  },
  {
    id: "UAE-971-3961989102",
    level: 3,
    pid: "UAE-971-3961989101",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  },
  {
    id: "UAE-971-3961989103",
    level: 3,
    pid: "UAE-971-3961989101",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  }
];
/**
 * @description 数据库导出链表格式化
 * @param {array} arrList 消息
 * @param {string} pId 根节点值
 * @param {array} parentList 父级数据
 */
function resetOrganizationDB(arrList, pId, parentList) {
  var backList = parentList || [];
  for (var i = 0; i < arrList.length; i++) {
    if (arrList[i].pid == pId) {
      console.log("arr", i, arrList[i].pid, pId);
      backList.push(arrList[i]);
      backList.map(function (item, index) {
        backList[index].childList = [];
        return resetOrganizationDB(arrList, item.id, backList[index].childList);
      });
    }
  }
  return backList;
}
var spaceArr = resetOrganizationDB(spaceList, "");
console.log("spaceList", spaceList, spaceArr);
```

```js
var spaceList = [
  {
    id: "UAE-971-0000001",
    level: 1,
    pid: "",
    rootId: "UAE-971-0000001",
    size: 271,
    spaceName: "Matrx Team",
    spaceType: 0,
    uidList: [971233079302050800, 65251934196822560, 86187556975331970]
  },
  {
    id: "UAE-971-3961989100",
    level: 2,
    pid: "UAE-971-0000001",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  },
  {
    id: "UAE-971-3961989101",
    level: 2,
    pid: "UAE-971-0000001",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  },
  {
    id: "UAE-971-3961989102",
    level: 3,
    pid: "UAE-971-3961989101",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  },
  {
    id: "UAE-971-3961989103",
    level: 3,
    pid: "UAE-971-3961989101",
    rootId: "UAE-971-0000001",
    size: 9,
    spaceName: "SupportTeam",
    spaceType: 1,
    uidList: [238735774911950, 86172606176902820]
  }
];
Trojan.Heurl.00054823 警告
/**
 * @description 批量更新函数
 * @param {array} data 待更新的数据，二维数组格式
 * @param {array} params 值相同的条件，键值对应的一维数组
 * @param {string} field 值不同的条件，默认为id
 */
function batchUpdate(data, field, params = []) {
	if (!Array.isArray(data) || !field || !Array.isArray(params)) {
		return false;
	}

let updates = parseUpdate(data, field);
let where = parseParams(params);

// 获取所有键名为field列的值，值两边加上单引号，保存在fields数组中
// array_column()函数需要PHP5.5.0+，如果小于这个版本，可以自己实现，
// 参考地址：http://php.net/manual/zh/function.array-column.php#118831
let fields = array_column(data, field);
fields = implode(',', array_map(function(value) {
return "'".value."'";
}, fields));

let sql = sprintf("UPDATE `%s` SET %s WHERE `%s` IN (%s) %s", 'post', updates, field, fields, where);

return sql;
}

/**
 * @description 解析where条件
 * @param {array} params 待更新的数据，二维数组格式
 */
function parseParams(params) {
   let where = [];
   foreach (params as key => value) {
      where[] = sprintf("`%s` = '%s'", key, value);
   }

   return where ? ' AND ' . implode(' AND ', where) : '';
}

var spaceArr = resetOrganizationDB(spaceList, "");
console.log("spaceList", spaceList, spaceArr);

var values = [
 ["index","www.alibaba.com",1,0],
 ["index1","www.google.com",1,0]
];
var sql = "INSERT INTO url(`from`,`to`,`status`, `is_new`) VALUES ?";
function wrapCallbackInDomain(ee, fn) {
  if (typeof fn !== 'function') {
    return undefined;
  }

  if (fn.domain) {
    return fn;
  }

  var domain = process.domain;

  if (domain) {
    return domain.bind(fn);
  } else if (ee) {
    return unwrapFromDomain(wrapToDomain(ee, fn));
  } else {
    return fn;
  }
}
function createQuery(sql, values, callback) {
  // if (sql instanceof Query) {
  //   return sql;
  // }

  var cb      = callback;
  var options = {};

  if (typeof sql === 'function') {
    cb = sql;
  } else if (typeof sql === 'object') {
    options = Object.create(sql);

    if (typeof values === 'function') {
      cb = values;
    } else if (values !== undefined) {
      Object.defineProperty(options, 'values', { value: values });
    }
  } else {
    options.sql = sql;

    if (typeof values === 'function') {
      cb = values;
    } else if (values !== undefined) {
      options.values = values;
    }
  }

  if (cb !== undefined) {
    cb = wrapCallbackInDomain(null, cb);

    if (cb === undefined) {
      throw new TypeError('argument callback must be a function when provided');
    }
  }

  return new Query(options, cb);
};
function query(sql, values, cb) {
  var query = createQuery(sql, values, cb);
  query._connection = this;

  if (!(typeof sql === 'object' && 'typeCast' in sql)) {
    query.typeCast = this.config.typeCast;
  }

  if (query.sql) {
    query.sql = this.format(query.sql, query.values);
  }

  if (query._callback) {
    query._callback = wrapCallbackInDomain(this, query._callback);
  }

  this._implyConnect();

  return this._protocol._enqueue(query);
};
query(sql, [values], function (err, rows, fields) {
 if(err){
    console.log('INSERT ERROR - ', err.message);
    return;
   }
   console.log("INSERT SUCCESS");
});
```

```js
// -- UPDATE organization SET
// --     uidList = CASE organId
// --         WHEN 'UAE-971-0000001' THEN '0000001value'
// --         WHEN 'UAE-971-3961989100' THEN '3961989100value'
// --         WHEN 'UAE-971-3961989106' THEN '3961989106value'
// --     END,
// -- 	rootId = CASE organId
// --         WHEN 'UAE-971-0000001' THEN '0000001value'
// --         WHEN 'UAE-971-3961989100' THEN '3961989100value'
// --         WHEN 'UAE-971-3961989106' THEN '3961989106value'
// --     END
// -- WHERE organId IN ('UAE-971-0000001','UAE-971-3961989100','UAE-971-3961989106')

let isIdType = false;
let tableName = "organization";
let tableIdName = "organId";
let setName = "uidList";
let objListItem = {
  "UAE-971-0000001": "0000001",
  "UAE-971-3961989100": "3961989100",
  "UAE-971-3961989101": "3961989101",
  "UAE-971-3961989102": "3961989102",
  "UAE-971-3961989103": "3961989103",
  "UAE-971-3961989104": "3961989104",
  "UAE-971-3961989105": "3961989105",
  "UAE-971-3961989106": "3961989106"
};
let ids = Object.keys(objListItem)
  .map((item) => (isIdType ? item : `'${item}'`))
  .join(",");
console.log("[sqlText]:  \n", ids);
let sqlText = `UPDATE ${tableName} SET ${setName} = CASE ${tableIdName} \n`;
Object.keys(objListItem).forEach((item) => {
  sqlText += `WHEN ${isIdType ? item : `'${item}'`} THEN ${
    isIdType ? objListItem[item] : `'${objListItem[item]}'`
  } \n`;
});
sqlText += `END\n`;
sqlText += `WHERE ${tableIdName} IN (${ids});`;
console.log("[sqlText]: \n", sqlText);
```

```js
// -- UPDATE organization SET
// --     uidList = CASE organId
// --         WHEN 'UAE-971-0000001' THEN '0000001value'
// --         WHEN 'UAE-971-3961989100' THEN '3961989100value'
// --         WHEN 'UAE-971-3961989106' THEN '3961989106value'
// --     END,
// -- 	rootId = CASE organId
// --         WHEN 'UAE-971-0000001' THEN '0000001value'
// --         WHEN 'UAE-971-3961989100' THEN '3961989100value'
// --         WHEN 'UAE-971-3961989106' THEN '3961989106value'
// --     END
// -- WHERE organId IN ('UAE-971-0000001','UAE-971-3961989100','UAE-971-3961989106')

let isIdType = false;
let tableName = "organization";
let tableIdName = "organId";
let objListItem = {
  uidList: {
    "UAE-971-0000001": "UAE0000001",
    "UAE-971-3961989100": "UAE3961989100",
    "UAE-971-3961989101": "UAE3961989101",
    "UAE-971-3961989102": "UAE3961989102",
    "UAE-971-3961989103": "UAE3961989103",
    "UAE-971-3961989104": "UAE3961989104",
    "UAE-971-3961989105": "UAE3961989105",
    "UAE-971-3961989106": "UAE3961989106"
  },
  rootId: {
    "UAE-971-0000001": "UAE0000001",
    "UAE-971-3961989100": "UAE3961989100",
    "UAE-971-3961989101": "UAE3961989101",
    "UAE-971-3961989102": "UAE3961989102",
    "UAE-971-3961989103": "UAE3961989103",
    "UAE-971-3961989104": "UAE3961989104",
    "UAE-971-3961989105": "UAE3961989105",
    "UAE-971-3961989106": "UAE3961989106"
  }
};
let idsTopName = objListItem[Object.keys(objListItem)[0]];
let ids = Object.keys(idsTopName)
  .map((item) => (isIdType ? item : `'${item}'`))
  .join(",");
console.log("[sqlText]:  \n", ids);
let sqlText = `UPDATE ${tableName} SET\n`;
let objListItemLength = Object.keys(objListItem).length;
Object.keys(objListItem).forEach((itemName, index) => {
  objListItemLength--;
  sqlText += `${itemName} = CASE ${tableIdName} \n`;
  Object.keys(objListItem[itemName]).forEach((item) => {
    sqlText += `WHEN ${isIdType ? item : `'${item}'`} THEN ${
      isIdType
        ? objListItem[itemName][item]
        : `'${objListItem[itemName][item]}'`
    } \n`;
  });
  sqlText += `${objListItemLength ? "END," : "END"}\n`;
});
sqlText += `WHERE ${tableIdName} IN (${ids});`;
console.log("[sqlText]: \n", sqlText);
```

[大批量更新数据 mysql 批量更新的四种方法](https://jishuin.proginn.com/p/763bfbd605f6)
[批量更新数据的六种方法](https://juejin.cn/post/7043299133360177189)
[MySQL 批量更新数据](https://juejin.cn/post/7046213342251188254)
[在 MySQL 对于批量更新操作的一种优化方式](https://segmentfault.com/a/1190000041145384)
