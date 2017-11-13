import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './theme/Login.vue'
import Category from './theme/Category.vue'
import NotFound from './theme/NotFound.vue'

// Lazy Loading - Async
// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({
    // To Page Top
    y: 0

    // To the last Saved Position
    /* if (savedPosition) {
      return savedPosition
    } */

    // To a Specific Element
    /* if (to.hash) {
      return {
        selector: to.hash
      }
    } */
  }),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category
    },
    {
      path: '/',
      redirect: '/category/front-end'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router
