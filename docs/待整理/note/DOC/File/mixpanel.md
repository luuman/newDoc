[mixpanel](https://developer.mixpanel.com/docs/javascript)



# mixpanel

## 概况

## 入门

> 发送事件

```js
mixpanel.track(
  "Played song",
  {"genre": "hip-hop"}
);
```



## API
```js
```

### 属性
#### add_group 新建组
为该用户添加一个新组
```js
mixpanel.add_group(group_key, group_id, callback)
```

```js
mixpanel.add_group('company', 'mixpanel')
mixpanel.add_group('company', 'mixpanel'， () => {})
```

#### alias
创建一个别名，Mixpanel 将使用该别名将一个 id 重新映射到另一个。多个别名可以指向同一个标识符
```js
mixpanel.alias(alias, original);
```

```js
mixpanel.alias('new_id', 'existing_id');
// You can add multiple id aliases to the existing ID
mixpanel.alias('newer_id', 'existing_id');

mixpanel.alias('new_id', 'existing_id');
// chain newer_id - new_id - existing_id
mixpanel.alias('newer_id', 'new_id');

mixpanel.alias('new_id', 'existing_id');
// this is invalid as 'new_id' already points to 'existing_id'
mixpanel.alias('new_id', 'newer_id');
```

#### clear_opt_in_out_tracking
清除此 Mixpanel 实例的数据跟踪和 cookie/本地存储的用户选择加入/退出状态

#### disable
禁用 Mixpanel 对象上的事件。如果不传递任何参数，此函数将禁用任何事件的跟踪。如果传递事件名称数组，这些事件将被禁用，但其他事件将继续被跟踪

#### get_config
返回库的当前配置对象

#### get_distinct_id 获取distinctID
返回用户当前的不同 id。这要么是库自动生成的 id，要么是通过调用 identify() 传递的 id。

#### get_group
查找对 Mixpanel 组的引用
```js
mixpanel.get_group(group_key, group_id)
```

#### get_property
返回名为 property_name 的超级属性的值。如果没有设置这样的属性，get_property() 将返回未定义的值
```js
// grab value for 'user_id' after the mixpanel library has loaded
mixpanel.init('YOUR PROJECT TOKEN', {
    loaded: function(mixpanel) {
        user_id = mixpanel.get_property('user_id');
    }
});
```
// register 'Gender' as a super property
mixpanel.register({'Gender': 'Female'});

// register several super properties when a user signs up
mixpanel.register({
    'Email': 'jdoe@example.com',
    'Account Type': 'Free'
});
#### has_opted_in_tracking
检查用户是否为此 Mixpanel 实例选择了数据跟踪和 cookie/本地存储

#### has_opted_out_tracking
检查用户是否选择退出此 Mixpanel 实例的数据跟踪和 cookie/localStorage

#### identify 标识
```js
```

#### init
此函数初始化 Mixpanel 跟踪对象的新实例。所有新实例都作为子属性（例如 mixpanel.library_name）添加到主 mixpanel 对象，并且也由该函数返回
```js
mixpanel.init('new token', { your: 'config' }, 'library_name');
```

#### opt_in_tracking
为用户选择此 Mixpanel 实例的数据跟踪和 cookie/本地存储

#### opt_out_tracking
选择用户退出此 Mixpanel 实例的数据跟踪和 cookie/本地存储

### push
push() 在加载 lib 后保持标准的 async-array-push 行为。这仅对不希望依赖我们的便捷方法（在代码片段中创建）的外部集成有用
```js
mixpanel.push(['register', { a: 'b' }]);
```

### register 注册
```js
// register 'Gender' as a super property
mixpanel.register({'Gender': 'Female'});

// register several super properties when a user signs up
mixpanel.register({
    'Email': 'jdoe@example.com',
    'Account Type': 'Free'
});
```

#### register_once
只注册一组超级属性一次。与 register() 不同，这不会覆盖以前的超级属性值
```js
// register a super property for the first time only
mixpanel.register_once({
    'First Login Date': new Date().toISOString()
});
```

#### remove_group
从此用户中删除组
```js
mixpanel.remove_group('company', 'mixpanel')
```

### reset
清除超级属性并为此实例生成一个新的随机 distinct_id。用于在用户注销时清除数据

#### set_config
更新 mixpanel 库实例的配置
```js
{
  // HTTP method for tracking requests
  api_method: 'POST'

  // transport for sending requests ('XHR' or 'sendBeacon')
  // NB: sendBeacon should only be used for scenarios such as
  // page unload where a &quot;best-effort&quot; attempt to send is
  // acceptable; the sendBeacon API does not support callbacks
  // or any way to know the result of the request. Mixpanel
  // tracking via sendBeacon will not support any event-
  // batching or retry mechanisms.
  api_transport: 'XHR'

  // turn on request-batching/queueing/retry
  batch_requests: false,

  // maximum number of events/updates to send in a single
  // network request
  batch_size: 50,

  // milliseconds to wait between sending batch requests
  batch_flush_interval_ms: 5000,

  // milliseconds to wait for network responses to batch requests
  // before they are considered timed-out and retried
  batch_request_timeout_ms: 90000,

  // override value for cookie domain, only useful for ensuring
  // correct cross-subdomain cookies on unusual domains like
  // subdomain.mainsite.avocat.fr; NB this cannot be used to
  // set cookies on a different domain than the current origin
  cookie_domain: ''

  // super properties cookie expiration (in days)
  cookie_expiration: 365

  // if true, cookie will be set with SameSite=None; Secure
  // this is only useful in special situations, like embedded
  // 3rd-party iframes that set up a Mixpanel instance
  cross_site_cookie: false

  // super properties span subdomains
  cross_subdomain_cookie: true

  // debug mode
  debug: false

  // if this is true, the mixpanel cookie or localStorage entry
  // will be deleted, and no user persistence will take place
  disable_persistence: false

  // if this is true, Mixpanel will automatically determine
  // City, Region and Country data using the IP address of
  //the client
  ip: true

  // opt users out of tracking by this Mixpanel instance by default
  opt_out_tracking_by_default: false

  // opt users out of browser data storage by this Mixpanel instance by default
  opt_out_persistence_by_default: false

  // persistence mechanism used by opt-in/opt-out methods - cookie
  // or localStorage - falls back to cookie if localStorage is unavailable
  opt_out_tracking_persistence_type: 'localStorage'

  // customize the name of cookie/localStorage set by opt-in/opt-out methods
  opt_out_tracking_cookie_prefix: null

  // type of persistent store for super properties (cookie/
  // localStorage) if set to 'localStorage', any existing
  // mixpanel cookie value with the same persistence_name
  // will be transferred to localStorage and deleted
  persistence: 'cookie'

  // name for super properties persistent store
  persistence_name: ''

  // names of properties/superproperties which should never
  // be sent with track() calls
  property_blacklist: []

  // if this is true, mixpanel cookies will be marked as
  // secure, meaning they will only be transmitted over https
  secure_cookie: false

  // the amount of time track_links will
  // wait for Mixpanel's servers to respond
  track_links_timeout: 300

  // if you set upgrade to be true, the library will check for
  // a cookie from our old js library and import super
  // properties from it, then the old cookie is deleted
  // The upgrade config option only works in the initialization,
  // so make sure you set it when you create the library.
  upgrade: false

  // extra HTTP request headers to set for each API request, in
  // the format {'Header-Name': value}
  xhr_headers: {}

  // protocol for fetching in-app message resources, e.g.
  // 'https://' or 'http://'; defaults to '//' (which defers to the
  // current page's protocol)
  inapp_protocol: '//'

  // whether to open in-app message link in new tab/window
  inapp_link_new_window: false

  // whether to ignore or respect the web browser's Do Not Track setting
  ignore_dnt: false
}
```

#### set_group
将当前用户注册到一个/多个组中
```js
mixpanel.set_group('company', ['mixpanel', 'google']) // an array of IDs
mixpanel.set_group('company', 'mixpanel')
mixpanel.set_group('company', 128746312)
```

#### time_event
通过在与事件一起发送的属性中包含此调用与稍后对同一事件的“跟踪”调用之间的时间来为事件计时。请注意，对于相同的事件名称，每次调用 time_event 都会重新启动启动计时器
```js
// time an event named 'Registered'
mixpanel.time_event('Registered');
mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
```

### track
跟踪事件。这是最重要和最常用的 Mixpanel 功能
```js
// track an event named 'Registered'
mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});

// track an event using navigator.sendBeacon
mixpanel.track('Left page', {'duration_seconds': 35}, {transport: 'sendBeacon'});
```

#### track_forms
跟踪表单提交。选择器必须是有效的查询
```js
// track submission for form id 'register'
mixpanel.track_forms('#register', 'Created Account');
```

#### track_links
跟踪对一组文档元素的点击。选择器必须是有效的查询。在调用 track_links 时元素必须存在于页面上
```js
// track click for link id #nav
mixpanel.track_links('#nav', 'Clicked Nav Link');
```

#### track_with_groups
跟踪特定组的事件
```js
 mixpanel.track_with_groups('purchase', {'product': 'iphone'}, {'University': ['UCB', 'UCLA']})
```

#### unregister
删除与当前用户一起存储的超级属性
```js

```


### people 用户
```js
{
  // 用户ID
  USER_ID: USER_ID,
  TEST_AGAIN: "TEST2",
  // 只有特殊属性需要 $
  $first_name: "Billy21323",
  $last_name: "Bob",
  $email: "current2345675@jober.io",
  // 以ISO时间戳格式发送日期（例如“2020-01-02T21:07:03Z”）
  "Sign up date": USER_SIGNUP_DATE,
  // 升级日期 Updated at
  'Upgrade date': new Date(),
  // Browser 浏览器
  // Browser Version 版本
  // City 城市
  // Country Code 国家
  // Initial Referrer 域名
  // Initial Referring Domain 域名
  // Operating System 系统
  // Region 区域
  // Sign up date 更新时间
  // timezone 时区
  // 自定义
  'Company': 'Acme',
  'Plan': 'Premium',
}
```

#### append
将值附加到具有列表值的人员分析属性
```js
// append a value to a list, creating it if needed
mixpanel.people.append('pages_visited', 'homepage');

// like mixpanel.people.set(), you can append multiple
// properties at once:
mixpanel.people.append({
    list1: 'bob',
    list2: 123
});
```

#### clear_charges（失效）
从当前用户的人员分析资料中永久清除所有收入报告交易
```js
// mixpanel.people.clear_charges();
```

#### delete_user（失效）
从 Mixpanel 中永久删除当前人员分析配置文件（使用当前 distinct_id）
```js
// remove the all data you have stored about the current user
// mixpanel.people.delete_user();
```

#### increment
增加/减少 计数器分析属性
```js
增加
mixpanel.people.increment('page_views', 1);
mixpanel.people.increment('page_views');
// 减少
mixpanel.people.increment('credits_left', -1);
// 初始化一次
mixpanel.people.increment({
    counter1: 1,
    counter2: 6
});
```

#### remove
从列表值人员分析属性中删除一个值
```js
mixpanel.people.remove('School', 'UCB');
```

#### set
在用户记录上设置属性
```js
mixpanel.people.set('gender', 'm');

// 或者一次设置多个属性
mixpanel.people.set({
    'Company': 'Acme',
    'Plan': 'Premium',
    'Upgrade date': new Date()
});
// 属性可以是字符串、整数、日期或列表
```

#### set_once
在用户记录上设置属性，仅当它们尚不存在时。与 people.set() 不同，这不会覆盖以前的 people 属性值
```js
mixpanel.people.set_once('First Login Date', new Date());

// or set multiple properties at once
mixpanel.people.set_once({
    'First Login Date': new Date(),
    'Starting Plan': 'Premium'
});

// properties can be strings, integers or dates
```

#### track_charge
记录您已向当前用户收取一定金额的费用。使用 track_charge() 记录的费用将出现在 Mixpanel 收入报告中
```js
// charge a user $50
mixpanel.people.track_charge(50);

// charge a user $30.50 on the 2nd of january
mixpanel.people.track_charge(30.50, {
    '$time': new Date('jan 1 2012')
});
```

#### union
将给定列表与列表值人员分析属性合并，不包括重复值
```js
// merge a value to a list, creating it if needed
mixpanel.people.union('pages_visited', 'homepage');

// like mixpanel.people.set(), you can append multiple
// properties at once:
mixpanel.people.union({
    list1: 'bob',
    list2: 123
});

// like mixpanel.people.append(), you can append multiple
// values to the same list:
mixpanel.people.union({
    list1: ['bob', 'billy']
});
```

#### unset
取消设置用户记录的属性（从配置文件中永久删除属性及其值）
```js
mixpanel.people.unset('gender');

// or unset multiple properties at once
mixpanel.people.unset(['gender', 'Company']);
```


### group 群组
```js
```

#### remove
从组中删除属性。如果不存在该值将被忽略
```js
mixpanel.get_group('company', 'mixpanel').remove('Location', 'London');
```

#### set
在组上设置属性
```js
mixpanel.get_group('company', 'mixpanel').set('Location', '405 Howard');

// or set multiple properties at once
mixpanel.get_group('company', 'mixpanel').set({
     'Location': '405 Howard',
     'Founded' : 2009,
});
// properties can be strings, integers, dates, or lists
```

#### set_once
设置组的属性，仅当它们尚不存在时。与 group.set() 不同，这不会覆盖以前的组属性值
```js
mixpanel.get_group('company', 'mixpanel').set_once('Location', '405 Howard');

// or set multiple properties at once
mixpanel.get_group('company', 'mixpanel').set_once({
     'Location': '405 Howard',
     'Founded' : 2009,
});
// properties can be strings, integers, lists or dates
```

#### union
将给定列表与列表值组属性合并，不包括重复值
```js
// merge a value to a list, creating it if needed
mixpanel.get_group('company', 'mixpanel').union('Location', ['San Francisco', 'London']);
```

#### unset
永久取消设置组的属性
```js
mixpanel.get_group('company', 'mixpanel').unset('Founded');
```


### register
```js
```

## 扩展

[mixpanel API](https://developer.mixpanel.com/docs/javascript)
[mixpanel](https://mixpanel.com)
