<template>
  <div>
    <main>
      <nuxt />
    </main>
    <nui-header v-model="action" />
  </div>
</template>

<script>
import nuiHeader from '@/components/partials/Header'

export default {
  name: 'Layout',
  components: {
    nuiHeader
  },
  data () {
    return {
      action: ''
    }
  },
  watch: {
    $route () {
      this.action = ''
    }
  },
  mounted() {
    // this.statisticsForBaidu()
  },
  methods: {
    statisticsForBaidu() {
      //统计脚本
      var _hmt = _hmt || [];
      (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?02736a493e850835a7c343e9edd17e88";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
      })(); 
    }
  }
};
</script>


<style>
</style>
