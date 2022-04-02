# @npkg/vue-router@next [![release candidate](https://img.shields.io/npm/v/@npkg/vue-router/next.svg)](https://www.npmjs.com/package/@npkg/vue-router/v/next) [![GitHub license](https://img.shields.io/github/license/npm-pkg/vue-router.svg)](https://github.com/npm-pkg/vue-router/blob/main/LICENSE) [![Download](https://img.shields.io/badge/downloads-main-green.svg)](https://codeload.github.com/npm-pkg/vue-router/zip/main) [![Hexo Version](https://img.shields.io/badge/vue-%3E%3D%203.x.x-blue.svg)](https://v3.cn.vuejs.org/) 


> 这是Vue Router 4扩展版（适用于Vue 3）的存储库 
>
> 扩展支持自动跳转到外部链接

[🇺🇸English Document](README.md)

---


## 快速入门

- 通过CDN: `<script src="https://unpkg.com/@npkg/vue-router@next"></script>`

- 将其添加到现有的Vue项目中:
  ```bash
  npm install @npkg/vue-router@next
  |
  yarn add @npkg/vue-router@next
  ```

## 用法

> 将所有引用 `vue-router` 的地方用  `@npkg/vue-router` 去替代
 
###  创建路由实例

```js
//# /src/router/index.js

/*
 * 原代码
 */
import {
  createRouter,
  createWebHistory,
} from "vue-router";

// 创建路由实例
export const router = createRouter({
  history: createWebHistory(),
  routes: [{
      ...
  }]
  }
});


//----------------
// 替换为以下代码
//----------------


/*
 * 新代码
 */
import {
  createRouter,
  createWebHistory,
} from "@npkg/vue-router";

//  创建路由实例
export const router = createRouter({
  history: createWebHistory(),
  routes: [{
       ...
  }]
  }
});

/*
 * 其他使用
 */

 import { useRoute, useLink } from "@npkg/vue-router";
 let router = useRouter()
 router.push({path:'/'})

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

<router-link :to="{path:'https://github.com/npm-pkg/vue-router/tree/v4.0.15',hash:'#readme'}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo',params:{org:'npm-pkg',repo: 'vue-router'}}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo/tree/:v',query:{author: 'five-great'},params:{org:'npm-pkg',repo: 'vue-router',v:'v4.0.15'},hash:'#readme'}"></router-link>

```


---

 去查看 [文档](https://router.vuejs.org/zh/index.html).

## 联系

> github https://github.com/npm-pkg/vue-router

> 邮件 fivecc@qq.com

> CSDN  [Five-菜鸟级](https://fivecc.blog.csdn.net/)
