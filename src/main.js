// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store/'
import './config/rem'
let RouteMode = 'hash'
Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	RouteMode,
})
/* eslint-disable no-new */
new Vue({
  
  store,
  router,
}).$mount('#app')
