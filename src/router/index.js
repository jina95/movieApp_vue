import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('@/views/MovieSearchPage.vue'),
    },
    {
      path: '/result',
      component: () => import('@/views/MovieResultPage.vue'),
    },
    {
      path: '/information',
      component: () => import('@/views/MovieInforPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
