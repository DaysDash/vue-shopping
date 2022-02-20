import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/list',
    meta: {
      title: '商品列表'
    },
    component: () => import('../views/list.vue')
  },
  {
    path: '/list/:id',
    meta: {
      title: '商品详情'
    },
    component: () => import('../views/product.vue')
  },
  {
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: () => import('../views/cart.vue')
  },
  {
    path: '*',
    redirect: '/list'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title;
  next();
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // to and from are both route objects.
  window.scrollTo(0,0);
})

export default router
