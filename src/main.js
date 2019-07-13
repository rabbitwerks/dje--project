/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// false positive from eslint - changing el styles

import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';

// directives
import vToggleNavFloat from './directives/v-toggle-nav-float';

// mixins
import viewport from './mixins/viewport';
import pageLocation from './mixins/pageLocation';

// filters
import capitalize from './filters/capitalize';

const importGroup = {
  vToggleNavFloat,
  viewport,
  pageLocation,
  capitalize,
};

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  importGroup,
  render: h => h(App),
}).$mount('#app');
