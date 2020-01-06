# Nuxt-Wechat

> The web project base on Nuxt.js

## Build Setup
---
You need to install **Node**. the recommended version node _v8.11.2_ use **nvm** to manage versions

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

- server => index.js
> Server framework koa entry file

- utils 
> Tool class file include basis of persistent storage(**store2**) event bus for Vue(**wolfy87-eventemitter**) utility function and wechat development sdk

- mocks 
> The Front-end Developer is a good helper for the Front-end to simulate data requests

- tailwind.config.js 
> A utility-first CSS framework for rapidly building custom designs. [tailwind](https://www.tailwindcss.cn/)

- base.config.js 
> Application configuration such as request format, reverse format, exception handling, paging format, etc ...

_**one more thing**..._
### The code is first for people to see and second for machines to run. I wish you good luck -。-