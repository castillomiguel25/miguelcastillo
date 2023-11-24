import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './views/router'
import 'animate.css';
import './index.css'
import VueMeta from 'vue-meta';
import VueI18n from 'vue-i18n';

import enMessages from './locales/En';
import esMessages from './locales/Es';

Vue.use(VueI18n, VueMeta);

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en: enMessages,
    es: esMessages,
  },
});


Vue.config.productionTip = false

new Vue({
  VueMeta,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
