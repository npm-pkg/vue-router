# @npkg/vue-router ![release candidate](https://img.shields.io/npm/v/@npkg/vue-router.svg) [![Build Status](https://img.shields.io/circleci/project/github/vuejs/vue-router/dev.svg)](https://circleci.com/gh/vuejs/vue-router) ![GitHub license](https://img.shields.io/github/license/npm-pkg/vue-router.svg) [![Vue Version](https://img.shields.io/badge/vue-<3.x.x-blue.svg)](https://vuejs.org/) [![Download](https://img.shields.io/badge/downloads-v3-green.svg)](https://codeload.github.com/npm-pkg/vue-router/zip/v3)

> This is `vue-router3.0` Extended version which works only with `Vue 2.0`. For the `Vue3.0` router see the [npm-pkg/vue-router@next](https://github.com/npm-pkg/vue-router).
> The extension supports automatic jump to external link

View [Chinese document](README_CN.md)

## Quickstart

- Via CDN: `<script src="https://unpkg.com/@npkg/vue-router"></script>`

- Add it to an existing Vue Project:
  ```bash
  npm install @npkg/vue-router
  |
  yarn add @npkg/vue-router
  ```

## Usage

> Replace all places of  `vue-router` with `@npkg/vue-router`
 
###   Create routing instance

```js
//# /src/router/index.js

/*
 * Old code
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Create routing instance
export default new Router({
  mode: 'history',
  routes: [
    ...
  ]
})
//---------------------------------
// replace with the following code
//-----------------------------------


/*
 * New code
 */
import Vue from 'vue'
import Router from '@npkg/vue-router'
Vue.use(Router)

// Create routing instance
export default new Router({
  mode: 'history',
  routes: [
    ...
  ]
})

```

>Based on the original Vue router, it additionally supports the following writing methods


```html

// Basic usage

<router-link to="/"></router-link>

<router-link to="/list"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router?author=five-great"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router/tree/v3.5.3#readme"></router-link>

//Advanced Usage

<router-link :to="{path: '/'}"></router-link>

<router-link :to="{path: '/list'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router', query:{author: 'five-great'}}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router/tree/v3.5.3',hash:'#readme'}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo',params:{org:'npm-pkg',repo: 'vue-router'}}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo/tree/:v',query:{author: 'five-great'},params:{org:'npm-pkg',repo: 'vue-router',v:'v3.5.3'},hash:'#readme'}"></router-link>

```

---

Get started with the [documentation](https://v3.router.vuejs.org).

## Contact

> github https://github.com/npm-pkg/vue-router/tree/v3.5.3

> Email fivecc@qq.com

> CSDN  [Five-菜鸟级](https://fivecc.blog.csdn.net/)
