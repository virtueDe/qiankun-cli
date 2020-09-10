<template>
  <div id="app">
    <div class="menu">
      <div 
        v-for="(item, idx) in appList" 
        :key="idx"
        @click="jump(item)">{{item.name}}</div>
    </div>
    <div id="container">
      <router-view  />
    </div>
  </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';

export default {
  components: {
  },
  data() {
    return {
      activeIndex: 'vue',
      appList: [
        {
          name: '应用vue_01',
          path: 'vue_01/',
        },
      ],
    };
  },
  created() {
    // this.init();
  },
  methods: {
    jump({path}) {
      this.$router.push({path});
    },
    init() {
      registerMicroApps([
        {
          name: 'vue_01', // app name registered
          entry: '//localhost:8101',
          container: '#container',
          activeRule: '/vue_01/',
        },
      ]);
      start();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
  #container {
    width: 100%;
    height: calc(100% - 21px);
  }
}
</style>
