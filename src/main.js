import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

const appVue = createApp(App);
appVue.use(router);
appVue.mount('#app');

/*
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
*/
