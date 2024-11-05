import { localCache } from '@/utils/cache'
import { createRouter, createWebHistory } from 'vue-router'

//vue 全家桶路由配置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //路由重定向进入登陆页
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/Login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not_found/not_found.vue')
    }
  ]
})

// 导航守卫
// router.beforeEach((to, from) => {
//   const token = localCache.getCache('token')
//   if (to.path === '/home' && !token) {
//     return '/Login'
//   }
// })
export default router
