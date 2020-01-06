<template>
  <div class="relative">
    <div class="search-wrapper">
      <nui-container class="flex justify-between items-center bg-white rounded-lg w-11/12 px-4">
        <input
          id="algolia"
          v-model="q"
          class="nui-search-input"
          type="text"
          name="search"
          placeholder="极客爸妈"
        >
        <a href="#" class="block p-2 -m-2 text-nuxt-gray hover:text-nuxt-lightgreen z-10 lg:hidden pt-3">
          <nui-faq-icon class="block h-5 fill-current"/>
        </a>
      </nui-container>
    </div>
    <van-swipe :autoplay="3000" indicator-color="#fff">
      <van-swipe-item v-for="item in banners" :key="'banner-' + item">
        <van-image :src="item"></van-image>
      </van-swipe-item>
    </van-swipe>
    <nav class="block relative">
      <div class="mx-4 flex justify-between shadow-md rounded-lg py-3 bg-white" style="margin-top: -1.5rem;">
        <nuxt-link v-for="linkItem in links" 
                  :key="linkItem.link" 
                  class="block md:flex md:justify-center w-full md:p-4 text-nuxt-green hover:no-underline text-center visited:text-nuxt-green px-1" 
                  :to="{ name: linkItem.link }">
          <nui-faq-icon class="inline-block h-8 fill-current mb-2"/>
          <span class="block text-base font-normal text-nuxt-gray">{{ linkItem.label }}</span>
        </nuxt-link>
      </div>
    </nav>
    <div class="flex m-4">
      <h4 class="index-h mr-4">育儿<br/>百科</h4>
      <ul class="flex-1 text-base text-nuxt-black">
        <li><span class="inline-block text-nuxt-green">.</span>为白阿爸发烧发烧发放</li>
        <li><span class="inline-block text-nuxt-green">.</span>撒大大大大大撒上点</li>
      </ul>
    </div>
    <nui-container class="card-index border-gray py-5 px-4 text-base">
      <div class="flex justify-between items-center">
        <div class="card-left-title">
          <h4 class="index-h">心理评估</h4>
          <p>专业、深度、全面测</p>
        </div>
        <div class="card-right-more">
          更多 &nbsp;<nui-faq-icon class="inline-block h-5 fill-current"/>
        </div>
      </div>
      <div class="card-box py-4">
        <van-button type="primary">主要按钮</van-button>
      </div>
    </nui-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import cmn from '~/utils/'
import nuiFaqIcon from '@/components/svg/Faq'

export default {
  // middleware: 'authenticated',
  components: {
    Logo,
    nuiFaqIcon
  },
  created() {
    cmn.on('getData', console.log)
  },
  data () {
    return {
      q: '',
      banners: [
        'https://bkw-legacy.oss-cn-shenzhen.aliyuncs.com/cms/hs/banner/2019-12-09/f65rWPODSUCeQJWMJhmS9A.jpg',
        'https://bkw-legacy.oss-cn-shenzhen.aliyuncs.com/cms/hs/banner/2019-11-27/J_tEBvpzRF63eIG0bxav9w.png',
        'https://bkw-legacy.oss-cn-shenzhen.aliyuncs.com/cms/hs/banner/2019-12-09/O4wboDsRQ8-GWb7kSzCk7w.jpg'
      ],
      links: [
        { link: 'index', label: '心理评估' },
        { link: 'course', label: '家长课堂' },
        { link: 'books', label: '育儿百科' },
        { link: 'my', label: '绑定孩子' }
      ]
    }
  },
  mounted () {
    this.$axios.$post('/api/user/getlogin', {
      userName: 'admin',
      password: 'admin'
    }).then(res => {
      cmn.setStore('user', res)
      cmn.trigger('getData', res.data)
    })
  }
}
</script>

<style lang="less">
  @import '../assets/css/color.less';
  .ivu-carousel-dots {
    @apply text-right pr-4;
  }
  .index-h{
    @apply text-2xl text-nuxt-green font-medium;
  }
  .card-index {
    border-top-width: 7px;
  }
  .nui-search-input {
    @apply bg-white flex-1 text-nuxt-gray font-medium h-10 outline-none text-base;
    ::placeholder {
      @apply text-gray-600;
    }
  }
  .search-wrapper {
    @apply absolute z-30 w-full; 
    top: 1rem;
  }
</style>

