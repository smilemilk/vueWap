import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/home/Main'
import Other from '@/components/home/Other'
import Auth from '@/components/myBill/Auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
})
