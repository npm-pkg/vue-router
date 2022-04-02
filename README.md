# @npkg/vue-router@next [![release candidate](https://img.shields.io/npm/v/@npkg/vue-router/next.svg)](https://www.npmjs.com/package/@npkg/vue-router/v/next) [![GitHub license](https://img.shields.io/github/license/npm-pkg/vue-router.svg)](https://github.com/npm-pkg/vue-router/blob/main/LICENSE) [![Download](https://img.shields.io/badge/downloads-main-green.svg)](https://codeload.github.com/npm-pkg/vue-router/zip/main) [![Hexo Version](https://img.shields.io/badge/vue-%3E%3D%203.x.x-blue.svg)](https://vuejs.org/) 

> This is the repository for `Vue Router 4` Extended version (for `Vue 3`)  For the `Vue2.0` router see the [npm-pkg/vue-router](https://github.com/npm-pkg/vue-router/tree/v3).
> The extension supports automatic jump to external link

---
View [Chinese document](README_CN.md)


## Quickstart

- Via CDN: `<script src="https://unpkg.com/@npkg/vue-router@next"></script>`

- Add it to an existing Vue Project:
  ```bash
  npm install @npkg/vue-router@next
  |
  yarn add @npkg/vue-router@next
  ```

## Usage

> Replace all places of  `vue-router` with `@npkg/vue-router`
 
###   Create routing instance

```js
//# /src/router/index.js

/*
 * Old code
 */
import {
  createRouter,
  createWebHistory,
} from "vue-router";

// Create routing instance
export const router = createRouter({
  history: createWebHistory(),
  routes: [{
      ...
  }]
  }
});


//---------------------------------
// replace with the following code
//-----------------------------------


/*
 * New code
 */
import {
  createRouter,
  createWebHistory,
} from "@npkg/vue-router";

// Create routing instance
export const router = createRouter({
  history: createWebHistory(),
  routes: [{
       ...
  }]
  }
});

/*
 * Other 
 */

 import { useRoute, useLink } from "@npkg/vue-router";
 let router = useRouter()
 router.push({path:'/'})

```

>Based on the original Vue router, it additionally supports the following writing methods


```html

// Basic usage

<router-link to="/"></router-link>

<router-link to="/list"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router?author=five-great"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router/tree/v4.0.15#readme"></router-link>

//Advanced Usage

<router-link :to="{path: '/'}"></router-link>

<router-link :to="{path: '/list'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router', query:{author: 'five-great'}}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router/tree/v4.0.15',hash:'#readme'}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo',params:{org:'npm-pkg',repo: 'vue-router'}}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo/tree/:v',query:{author: 'five-great'},params:{org:'npm-pkg',repo: 'vue-router',v:'v4.0.15'},hash:'#readme'}"></router-link>

```

---

Get started with the [documentation](https://next.router.vuejs.org).

## Contact

> github https://github.com/npm-pkg/vue-router

> Email fivecc@qq.com

> CSDN  [Five-菜鸟级](https://fivecc.blog.csdn.net/)
