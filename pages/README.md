# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

To navigate between pages, we recommend to use the `<nuxt-link>` component. params or props instructions you can see [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation.html)

## Dynamic Nested Routes
---
This file tree
```
pages/
--| people/
-----| _id.vue
-----| index.vue
--| _.vue
--| index.vue
```

Will handle requests like this:
Path         | File
------------ | -------------
/                      | index.vue
/people                | people/index.vue
/people/123            | people/_id.vue
/about                 | _.vue
/about/careers         | _.vue
/about/careers/chicago | _.vue

## Navigation Guards
---
Create a router.js under the plugins file. The following code is for reference only. more detail for [Vue-Router-Navigation-Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)

~~~javascript
export default ({ app, store, $axios }) => {
  // page request hook
  app.router.beforeEach((to, from, next) => {
    const isClient = process.client
    if (isClient) {
      const currentUrl = location.href
      console.log(currentUrl)
      // you code ...
    }

    next()
  })
}
~~~

Distinguish the client from the server by judging the process.client property. link [process.client or server](https://blog.csdn.net/weixin_38312502/article/details/95308301)
~~~javascript
// nuxt.config.js
{
  plugins: [
    { src: String, ssr: Boolean }
  ]
}
~~~

one last word. start enjoying coding ：）
