// nuxt.config.js 文件配置
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js' },
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js' }
    ]
    // 不对<script>标签中内容做转义处理
    ,  __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  axios: {
    proxy: true,
    // prefix: '/api-', // baseURL
    credentials: true
  },
  proxy: {
    '/api-wx/': {
      target: 'https://api.weixin.qq.com/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api-wx/': ''
      }
    },
    '/api-slcms/': {
      target: 'https://slcms.bakclass.com/api/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api-slcms/': ''
      }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vant-ui',
    '@/plugins/axios',
    { src: '@/plugins/mock', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  router: {
    middleware: 'authenticated'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@/modules/components/',
    '@nuxtjs/axios'
  ],
  styleResources: {
    less: '@/assets/**/*.less'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      if (isClient) {
        // // 添加 alias 配置
        // Object.assign(config.resolve.alias, {
        //   'utils': path.resolve(__dirname, 'utils')
        // })
      }
    },
    loaders: {
      less: {
        // javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './assets/css/theme.less'
          )}";`
        }
      },
    }
  }
}
