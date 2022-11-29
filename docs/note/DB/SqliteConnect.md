# SqliteConnect

| 文件名称                | 描述 | 命名规则                    | 描述           |
| ----------------------- | ---- | --------------------------- | -------------- |
| ackDBConnect.js         |      | `${vuid}.ackdb.enc`         | 消息缓存数据库 |
| ackDBUtil.js            |      |                             |                |
| logicDBConnect.js       |      | `${vuid}.${spaceId}.db.enc` | 空间数据库     |
| SqliteUtil.js           |      |                             |                |
| userInfoConnect.js      |      | `${vuid}.user.enc`          | 个人信息数据库 |
| userInfoDBUtil.js       |      |                             |                |
| ForwardSqliteConnect.js |      | forward.db.enc              |                |
| ForwardSqliteUtil.js    |      |                             |                |

## 数据库实例化

```mermaid
graph TD
  subgraph enterprise[enterprise.js]
    initSpaceDBInsList --> ackDBConnect[ackDBConnect.js]
    initSpaceDBInsList --> logicDBConnect[logicDBConnect.js]
    initSpaceDBInsList --> userInfoConnect[userInfoConnect.js]
    enterpriseAddFromMsg --> |被邀请加入空间|logicDBConnect
  end
  subgraph DBUtil
    ackDBUtil[ackDBUtil.js] --> |并列关系|SqliteUtil[SqliteUtil.js] --> |并列关系|userInfoDBUtil[userInfoDBUtil.js] --> |并列关系|ForwardSqliteUtil[ForwardSqliteUtil.js] --> |并列关系|sessionMigration[sessionMigration.js] --> |并列关系|loadSdk[loadSdk.js]
  end
  subgraph DBConnects
    ackDBConnect1[ackDBConnect.js] --> |并列关系|logicDBConnect1[logicDBConnect.js] --> |并列关系|userInfoConnect1[userInfoConnect.js] --> |并列关系|ForwardSqliteConnect1[ForwardSqliteConnect.js]
  end
  ackDBUtil --> |引用|ackDBConnect1
  SqliteUtil --> |引用|logicDBConnect1
  userInfoDBUtil --> |引用|userInfoConnect1
  ForwardSqliteUtil --> |引用|ForwardSqliteConnect1
  DBUtil --> getDBInstance
  ackDBConnect --> connect
  logicDBConnect --> connect
  userInfoConnect --> connect
  subgraph DBConnect[_DBConnect.js]
    subgraph DB
      getDbIns
      connectDB
      initDB
      exec
      closeDB
      getDB
    end
    subgraph IDBUtil
      connect
      getDBInstance
      disConnect
    end
    IDBUtil --> DB
    disConnect --> closeDB
    connect --> connectDB
    connect --> initDB
    getDBInstance --> getDbIns
    initDB --> InitialFile
    getDBPath
    getDBPassword
    InitialFile[Initial_createTableFromInitialFileFile] --> _doUpgrade --> _getDBInitFiles
  end
```

| name                  | L             | A    | U    | F   | 描述               |
| --------------------- | ------------- | ---- | ---- | --- | ------------------ |
| getDBPath             | spaceId、vuid | vuid | vuid | :x: | 计算数据库文件路径 |
| getDBPassword         | vuid          | vuid | vuid | :x: | 获取密码           |
| TableFromInitialFile  |               |      |      |     |                    |
| \_doUpgrade           |               |      |      |     |                    |
| \_getDBInitFiles      |               |      |      |     |                    |
| DB                    |               |      |      |     | 数据库实例         |
| DB.getDbIns           |               |      |      |     | 数据库创建与连接   |
| DB.connectDB          |               |      |      |     | 数据库连接         |
| DB.initDB             |               |      |      |     | 数据库初始化       |
| DB.exec               |               |      |      |     | SQL 查询           |
| DB.closeDB            |               |      |      |     | 关闭数据库         |
| DB.getDB              |               |      |      |     |                    |
| IDBUtil               |               |      |      |     |                    |
| IDBUtil.connect       |               |      |      |     |                    |
| IDBUtil.getDBInstance |               |      |      |     |                    |
| IDBUtil.disConnect    | :x:           |      |      |     |                    |

initDB

- [x] .
- [ ] 功能冗余，可以封装实例化
