import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

Vue.use(Router);

const router = new Router({
  mode: process.env.VUE_APP_ROUTER_MODE || 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/dict',
      component: () => import(/* webpackChunkName: "system_dict" */ './views/dict.vue'),
    },
    {
      path: '/unit',
      component: () => import(/* webpackChunkName: "system_unit" */ './views/unit-lite.vue'),
    },
    {
      path: '/dept',
      component: () => import(/* webpackChunkName: "system_dept" */ './views/dept.vue'),
    },
    {
      path: '/tag',
      component: () => import(/* webpackChunkName: "system_tag" */ './views/tag.vue'),
    },
    {
      path: '/user',
      component: () => import(/* webpackChunkName: "system_user" */ './views/user.vue'),
    },
  ],
});

export default router;
