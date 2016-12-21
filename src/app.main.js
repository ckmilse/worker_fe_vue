import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'
import appRoutes from './app.route.js'
import 'whatwg-fetch';
import './commonStyle/app.reset.css';
import './commonStyle/worker.common.scss';
const routes = appRoutes;
const router = new VueRouter({
  routes
});

Vue.use(VueRouter);
const app = new Vue({
   router: router
}).$mount('#app');
