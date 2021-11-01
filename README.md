# C 端小程序

## 启动项目

```bash
yarn install
```

### 编译为小程序

```bash
yarn build
```

## 文档

uni-app：https://uniapp.dcloud.io/

开发规范：https://confluence.dragonpass.com.cn/pages/viewpage.action?pageId=28021093

## 基础功能

- [x] 集成 vuex
- [x] 集成 less
- [x] 集成常用工具函数
- [x] 区分环境变量
- [x] 封装公用请求
- [x] 封装全局 toast
- [x] request、api 挂载到全局
- [x] build 时压缩代码
- [x] 项目文档
- [ ] 版本更新提示

## 目录结构

```
│  README.md
└─src
    │  App.vue
    │  main.js
    │  manifest.json
    │  pages.json
    │  uni.scss
    │
    ├─components  // 公用组件
    ├─pages  // 页面
    │  └─hello  // 演示页面
    │      index.less
    │      index.vue
    │
    ├─service  // api
    │   activity.js
    │   index.js
    │   login.js
    │   user.js
    │
    ├─static
    │   logo.png
    │
    ├─store  // vuex
    │   index.js
    │
    └─utils
         config.js  // 配置信息
         index.js  // 工具函数
         request.js   // 网络请求
```

## 组件

`<AuthorizePopup />` 授权弹窗

`<BasePage />` 基础配置页，用于全局控制每个页面。每个页面必须引用，页面内容以插槽形式插入改组件内。

## 图片 OSS 地址

常规图片地址
`import { OSS_URL } from '@/utils/config'`;

活动图片地址
`import { OSS_URL_ACTIVITY } from '@/utils/config'`;
