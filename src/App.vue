<template>
  <scroll-page id="app">
    <div class="weui-loadmore" v-if="loading">
      <i class="weui-loading"></i>
      <span class="weui-loadmore__tips">正在加载</span>
    </div>
    <router-view v-else/>
  </scroll-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ScrollPage from '@naf/layouts/scroll-page';

export default {
  components: {
    ScrollPage,
  },
  name: 'App',
  metaInfo: {
    title: '系统管理',
    titleTemplate: '系统管理 - %s',
  },
  async mounted() {
    // const res = await this.load();
    // this.$checkRes(res, () => {});
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style scoped>
.weui-loadmore {
  position: absolute;
  top: 40%;
  width: 100%;
}
</style>
