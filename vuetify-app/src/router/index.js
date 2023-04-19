import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token) {
        next()
      } else {
        next({ name: 'Login' })
      }
    },
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      if (token) {
        next({ name: 'Home' })
      } else {
        next()
      }
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/cadastrar',
    name: 'Cadastro',
    component: () => import('@/views/Cadastro.vue'),
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
