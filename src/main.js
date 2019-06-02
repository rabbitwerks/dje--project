/* eslint-disable no-param-reassign */
// false positive from eslint - changing el styles

import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.directive('toggle-nav-float', {
  bind(el) {
    const viewHeight = window.innerHeight;
    window.addEventListener('scroll', () => {
      const positionFromTop = window.scrollY;
      if (positionFromTop > viewHeight) {
        el.style.opacity = 1;
      } else if (positionFromTop < viewHeight) {
        el.style.opacity = 0;
      }
    });
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
