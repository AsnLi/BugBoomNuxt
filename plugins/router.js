
export default ({ app, store, $axios }) => {
  // 页面请求hook
  app.router.beforeEach((to, from, next) => {
    const isClient = process.client
    if (isClient) {
      const currentUrl = location.href
      console.log(currentUrl)
    }

    next()
  })
}