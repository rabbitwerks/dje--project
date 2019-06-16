/* eslint-disable no-param-reassign */
// false positive from eslint - changing el styles

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import vToggleNavFloat from './directives/v-toggle-nav-float';

import viewportDimensions from './mixins/viewport';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vToggleNavFloat,
  viewportDimensions,
  render: h => h(App),
}).$mount('#app');
