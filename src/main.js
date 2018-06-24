import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import "./assets/js/jquery"
import "./assets/js/jquery.flot"
import "./assets/js/bootstrap.js"
//引入css
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/animate.css'
import './assets/css/app.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
