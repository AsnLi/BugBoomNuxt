import Vue from 'vue'
import { 
  Button, Swipe, SwipeItem, Image, Lazyload 
} from 'vant';

const Vant = {
  Button, Swipe, SwipeItem, Image, Lazyload
}

import 'vant/lib/index.less'

Object.entries(Vant).forEach(item => {
  const [key, value] = item
  Vue.use(value)
})