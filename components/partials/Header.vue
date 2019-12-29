<template>
  <!-- Mobile Main Navigation -->
  <div class="absolute">
    <nav class="header_mobile_nav block">
      <nui-container>
        <div class="flex justify-between">
          <nuxt-link v-for="linkItem in links" 
                    :key="linkItem.link" 
                    class="block md:flex md:justify-center w-full p-2 md:p-4 text-nuxt-gray hover:no-underline hover:text-nuxt-lightgreen text-center visited:text-nuxt-gray" 
                    :to="{ name: linkItem.link, params: { section: linkItem.link } }" 
                    @click.prevent.native="getActive(linkItem)">
            <nui-faq-icon class="inline-block h-5 fill-current mb-1"/>
            <span class="block text-xs md:text-base md:pl-3 font-medium text-nuxt-gray">{{ linkItem.label }}</span>
          </nuxt-link>
        </div>
      </nui-container>
    </nav>
  </div>
</template>

<script>
import nuiFaqIcon from '@/components/svg/Faq'

export default {
  name: 'Header',
  components: {
    nuiFaqIcon
  },
  model: {
    prop: 'action',
    event: 'change'
  },
  props: {
    action: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      links: [
        { link: 'index', label: '首页' },
        { link: 'course', label: '课程' },
        { link: 'books', label: '书籍' },
        { link: 'my', label: '我的' }
      ]
    }
  },
  methods: {
    getActive(linkItem) {
      this.$emit('change', this.action === linkItem.link ? '' : (this.$route.params.section !== linkItem.link ? '' : linkItem.link))
    }
  }
};
</script>

<style lang="less">
.header_mobile_nav {
  @apply fixed bg-white border-t border-gray-300 left-0 bottom-0 right-0 z-30;
}
</style>
