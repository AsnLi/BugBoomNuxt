import { Notify } from 'vant';
import Cookies from 'js-cookie'

const ERRORS = new Map([
  [500, '服务器异常...'],
  [404, '未找到对应资源'],
  [401, '未鉴权']
])

export default function ({ $axios, redirect, store }) {
  // 基本配置
  $axios.defaults.timeout = 10000

  // 请求回调
  $axios.onRequest((config) => {
    const { baseURL, url, params, data, method } = config
    console.log(baseURL + url + (method === 'get' ? params : data))
    $axios.setHeader('x-auth-token', Cookies.get('token'))
    return config
  })

  // 返回回调
  $axios.onResponse((response) => {
    const { config, data, headers } = response
    const { errcode, errmsg } = data
    if (~config.url.indexOf('/login')) {
      Cookies.set('token', headers['x-auth-token'], { expires: 7 })
    }
    if (errcode && errmsg) {
      Notify(errmsg)
    }
    return response
  })

  // 错误回调
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (ERRORS.has(code)) {
      Notify('请求失败-' + ERRORS.get(code) + error.response.statusText)
    } else {
      Notify(error.response.statusText)
    }
    return Promise.reject(error.response)
  })
}
