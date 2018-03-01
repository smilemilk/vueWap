import Vue from 'vue'
import App from './App'
import router from './router'

import './utils/resize.js'

import './scss/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  data () {
    return {
    }
  },
  template: '<App/>',
  components: {App}
}).$mount('#app')
