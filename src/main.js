import Vue from 'vue'
import App from './App'
import router from './router/index'
import $ from 'jquery'
import './assets/css/base.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '../static/Font-Awesome-3.2.1/css/font-awesome.min.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
