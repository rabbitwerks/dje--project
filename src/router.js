import Vue from 'vue';
import Router from 'vue-router';
import Client from './views/client/Client.vue';
import Admin from './views/admin/Admin.vue';
import Login from './views/admin/Login.vue';
import Register from './views/admin/Register.vue';
import Profile from './views/admin/Profile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Client,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next('/admin');
        } else {
          next();
        }
      },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) {
          next('/admin');
        } else {
          next();
        }
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (!localStorage.token) {
          next('/login');
        } else {
          next();
        }
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        if (!localStorage.token) {
          next('/login');
        } else {
          next();
        }
      },
    },
  ],
});
