import Vue from 'vue';
import Router from 'vue-router';
import Client from './views/client/Client.vue';
import Admin from './views/admin/Admin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Client,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
  ],
});
