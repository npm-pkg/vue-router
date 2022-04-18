# @npkg/vue-router ![release candidate](https://img.shields.io/npm/v/@npkg/vue-router.svg) [![Build Status](https://img.shields.io/circleci/project/github/vuejs/vue-router/dev.svg)](https://circleci.com/gh/vuejs/vue-router) ![GitHub license](https://img.shields.io/github/license/npm-pkg/vue-router.svg) [![Vue Version](https://img.shields.io/badge/vue-<3.x.x-blue.svg)](https://vuejs.org/) [![Download](https://img.shields.io/badge/downloads-v3-green.svg)](https://codeload.github.com/npm-pkg/vue-router/zip/v3)


>这是 `vue-router3.0` 扩展版，仅适用于 `vue2.0`。有关适合 `Vue3.0` 路由器，请参阅 [@npm-pkg/vue-router@next](https://github.com/npm-pkg/vue-router).

>扩展支持自动跳转到外部链接

查看 [英文文档](README.md)

---


## 快速入门

- 通过CDN: `<script src="https://unpkg.com/@npkg/vue-router"></script>`

- 将其添加到现有的Vue项目中:
  ```bash
  npm install @npkg/vue-router
  |
  yarn add @npkg/vue-router
  ```

## 用法

> 将所有引用 `vue-router` 的地方用  `@npkg/vue-router` 去替代
 
###  创建路由实例

```js
//# /src/router/index.js

/*
 * 原代码
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 创建路由实例
export default new Router({
  mode: 'history',
  routes: [
    ...
  ]
})


//----------------
// 替换为以下代码
//----------------


/*
 * 新代码
 */
import Vue from 'vue'
import Router from '@npkg/vue-router'
Vue.use(Router)

// 创建路由实例
export default new Router({
  mode: 'history',
  routes: [
    ...
  ]
})

```

> 除了 Vue Router 原有用法，它还支持以下扩展写法


```html

// 基础使用

<router-link to="/"></router-link>

<router-link to="/list"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router?author=five-great"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router/tree/v4.0.15#readme"></router-link>

//高级使用

<router-link :to="{path: '/'}"></router-link>

<router-link :to="{path: '/list'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router', query:{author: 'five-great'}}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router/tree/v3.5.3',hash:'#readme'}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo',params:{org:'npm-pkg',repo: 'vue-router'}}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo/tree/:v',query:{author: 'five-great'},params:{org:'npm-pkg',repo: 'vue-router',v:'v3.5.3'},hash:'#readme'}"></router-link>

```


---

 去查看 [文档](https://v3.router.vuejs.org/zh/).

## 联系

> github https://github.com/npm-pkg/vue-router/tree/v3.5.3

> 邮件 fivecc@qq.com

> CSDN  [Five-菜鸟级](https://fivecc.blog.csdn.net/)
