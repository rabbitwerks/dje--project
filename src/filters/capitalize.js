/* eslint-disable consistent-return */
import Vue from 'vue';

export default Vue.filter('capitalize', (value) => {
  if (!value) return;
  return value.charAt(0).toUpperCase() + value.slice(1);
});
