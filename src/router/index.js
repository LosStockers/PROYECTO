// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/subir',
        name: 'subir',
        component: () => import('@/views/SubirProd.vue')
      },
      {   
      path: '/subirpru',
      name: 'prod',
      component: () => import('@/views/subirprueba.vue')
    },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login.vue')
      },
      {
        path: '/Pagina',
        name: '/Pagina',
        component: () => import ('@/views/Pagina.vue')
      },
      {
        path: '/PapasHelado',
        name: '/PapasHelado',
        component: () => import ('@/views/Pagina.vue')
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
