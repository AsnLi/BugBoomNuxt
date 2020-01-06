# PLUGINS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/plugins).

## The Context
___

Parameters that for [the documentation](https://nuxtjs.org/api/context/)

~~~javascript
// or { store, isDev }
export default function (context) { 
  // Universal keys
  const {
    app,
    store,
    $axios,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error
  } = context
  // Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }
  // Client-side
  if (process.client) {
    const { from, nuxtState } = context
  }
}
~~~
