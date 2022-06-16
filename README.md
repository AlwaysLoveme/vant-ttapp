<p align="center">
  <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">轻量、可靠的抖音小程序 UI 组件库</h3>

<p align="center">
  🔥 <a href="https://vant-contrib.gitee.io/vant-weapp">文档网站（国内）</a>
</p>

参照 `Vant-Weapp` 改造的适用于抖音小程序版本

### 目前暂无法使用的组件
1. `radio`、  `radio-group`
2. `checkbox-group`
3. `dropdown-menu`、`dropdown-item`
4. `grid`、`grid-item`
5. `tree-select`
6. `tabs`、`tabbar`

> 无法使用的原因是此类组件用到了`Component`中`relation`属性，抖音小程序中暂未支持该属性
---

### 介绍

Vant 是一个**轻量、可靠的移动端组件库**，于 2017 年开源。

目前 Vant 官方提供了 [Vue 2 版本](https://vant-contrib.gitee.io/vant/v2)、[Vue 3 版本](https://vant-contrib.gitee.io/vant)和[微信小程序版本](http://vant-contrib.gitee.io/vant-weapp)，并由社区团队维护 [React 版本](https://github.com/3lang3/react-vant)和[支付宝小程序版本](https://github.com/ant-move/Vant-Aliapp)。

## 预览

扫描下方小程序二维码，体验组件库示例：

<img src="https://img.yzcdn.cn/vant-weapp/qrcode-201808101114.jpg" width="200" height="200" style="margin-top: 10px;" >

## 使用之前

使用 Vant Weapp 前，请确保你已经学习过抖音官方的 [小程序简易教程](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/guide/start/introduction) 和 [自定义组件介绍](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/guide/custom-component/custom-component)。

## 安装

### 方式一. 通过 npm 安装 (推荐)

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/framework/npm)

```bash
# 通过 npm 安装
npm i @zhuxian/ttapp -S --production

# 通过 yarn 安装
yarn add @zhuxian/ttapp --production


### 方式二. 下载代码

直接通过 git 下载 Vant Ttapp 源代码，并将 `dist` 目录拷贝到自己的项目中。

```bash
git clone https://github.com/AlwaysLoveme/vant-ttapp.git
```

## 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "van-button": "/path/to/vant-ttapp/dist/button/index"
  }
}
```

接着就可以在 ttml 中直接使用组件

```html
<van-button type="primary">按钮</van-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[字节开发者工具](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/developer-instrument/download/developer-instrument-update-and-download)，把`vant-ttapp/example`目录添加进去就可以预览示例了。

## 基础库版本

Vant Ttapp 最低支持到小程序基础库 2.6.5 版本。

## 链接

- [意见反馈](https://github.com/AlwaysLoveme/vant-ttapp/issues)


## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。
