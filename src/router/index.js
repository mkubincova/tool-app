import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/dice',
    name: 'Dice',
    component: function () {
      return import( '../views/Dice.vue')
    }
  },
  {
    path: '/fqa',
    name: 'FAQ',
    component: function () {
       return import( '../views/FAQ.vue')
    }
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: function () {
      return import('../views/FAQ.vue')
    }
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: function () {
      return import('../views/Calculator.vue')
    }
  },
  {
    path: '/clock',
    name: 'Clock',
    component: function () {
     return import('../views/Clock.vue')
    }
  },
  {
    path: '/counter',
    name: 'Counter',
    component: function () {
      return import('../views/Counter.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
