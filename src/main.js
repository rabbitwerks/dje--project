/* eslint-disable no-param-reassign */
// false positive from eslint - changing el styles

import Vue from 'vue';
import App from './App.vue';
import store from './store';

import vToggleNavFloat from './directives/v-toggle-nav-float';

Vue.config.productionTip = false;


new Vue({
  store,
  vToggleNavFloat,
  render: h => h(App),
}).$mount('#app');
