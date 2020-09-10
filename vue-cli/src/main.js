import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

let instance = null;

function render() {
  // const { container } = props;
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
  //   mode: 'history',
  //   routes,
  // });
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#vue-app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
}

export async function mount() {
  render();
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
