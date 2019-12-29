// // -> Developer mock data
// if (process.env.NODE_ENV === 'development') {
//   require('../mocks/')
// }

import mocks from '../mocks/'
import $$ from '~/utils/index'
import Mock from 'mockjs'

const MockAdapter = require('axios-mock-adapter')
const config = require('../base.config.js').default
const mock = Mock.mock

/**
 * 模拟延时请求
 * @param {any} response 模拟响应数据
 * @param {number} time 延时多少毫秒，省略这个省数将会生成100ms内的一个延时
 */
const delay = (response, time) => {
  return $$.delay(time || Math.random() * 100).then(() => response);
};

// 模拟数据时包装反回数据
// MockAdapter 返回格式要求[200, {}]
const toSuccess = (response, time, code = 200) => {
  if (time) {
    return delay(config.mock.toSuccess(response, code), time);
  } else {
    return config.mock.toSuccess(response, code);
  }
};
const toError = (message, time, code = 200) => {
  if (time) {
    return delay(config.mock.toError(message, code), time)
  } else {
    return config.mock.toError(message, code)
  }
};

export default function ({ $axios }) {
  const axiosMock = new MockAdapter($axios);

  Object.values(mocks).forEach(mockFile => {
    let mockAPIs = {}
    if ($$.isFunction(mockFile)) {
      mockAPIs = mockFile({ axiosMock, delay, mock, toSuccess, toError });
    } else if ($$.isObject(mockFile)) {
      mockAPIs = mockFile;
    } else {
      throw new Error('mock file require both Function or Object');
    }

    for (const key in mockAPIs) {
      const method_url = key.split(' ');
      const apiItem = mockAPIs[method_url[0]]
      const method = 'on' + (method_url[1] != 'get' ? 'Post' : 'Get')
      
      if ($$.isFunction(apiItem)) {
        axiosMock[method](method_url[0]).reply(config => {
          const query = config.data ? JSON.parse(config.data) : {}
          return apiItem(config, query)
        })
      } else {
        axiosMock[method](method_url[0]).reply(200, apiItem)
      }
    }
  })
}