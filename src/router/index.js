import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Business from '@/views/business/Business'
import Mine from '@/views/mine/Mine'

Vue.use(Router)

const layout = {
  template: '<router-view></router-view>'
}

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
