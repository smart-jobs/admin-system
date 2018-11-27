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
      component: () => import(/* webpackChunkName: "dict" */ './views/dict.vue'),
    },
    {
      path: '/unit',
      component: () => import(/* webpackChunkName: "unit" */ './views/unit.vue'),
    },
    {
      path: '/dept',
      component: () => import(/* webpackChunkName: "dept" */ './views/dept.vue'),
    },
    {
      path: '/tag',
      component: () => import(/* webpackChunkName: "tag" */ './views/tag.vue'),
    },
    {
      path: '/user',
      component: () => import(/* webpackChunkName: "user" */ './views/user.vue'),
    },
  ],
});

export default router;
