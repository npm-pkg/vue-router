# vue-router-next [![release candidate](https://img.shields.io/npm/v/@npkg/vue-router/next.svg)](https://www.npmjs.com/package/@npkg/vue-router/v/next) 

> This is the repository for Vue Router 4 Extended version (for Vue 3)
> The extension supports automatic jump to external link

---


## Quickstart

- Via CDN: `<script src="https://unpkg.com/@npkg/vue-router@next"></script>`

- Add it to an existing Vue Project:
  ```bash
  npm install @npkg/vue-router@next
  |
  yarn add @npkg/vue-router@next
  ```

## Usage


>Based on the original Vue router, it additionally supports the following writing methods


```html

// Basic usage

<router-link to="/"></router-link>

<router-link to="/list"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router?author=five-great"></router-link>

<router-link to="https://github.com/npm-pkg/vue-router/tree/v4.0.14#readme"></router-link>

//Advanced Usage

<router-link :to="{path: '/'}"></router-link>

<router-link :to="{path: '/list'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router'}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router', query:{author: 'five-great'}}"></router-link>

<router-link :to="{path:'https://github.com/npm-pkg/vue-router/tree/v4.0.14',hash:'#readme'}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo',params:{org:'npm-pkg',repo: 'vue-router'}}"></router-link>

<router-link :to="{path:'https://github.com/:org/:repo/tree/:v',query:{author: 'five-great'},params:{org:'npm-pkg',repo: 'vue-router',v:'v4.0.14'},hash:'#readme'}"></router-link>

```

---

Get started with the [documentation](https://next.router.vuejs.org).


## Changes from Vue Router 3

Please consult the [Migration Guide](https://next.router.vuejs.org/guide/migration/).

## Contributing

See [Contributing Guide](https://github.com/vuejs/vue-router-next/blob/master/.github/contributing.md).

## Contact

> github https://github.com/npm-pkg/vue-router

> Email fivecc@qq.com

> CSDN  [Five-菜鸟级](https://fivecc.blog.csdn.net/)
