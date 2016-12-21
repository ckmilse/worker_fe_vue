import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'whatwg-fetch';

const NotFound = { template: '<p>Page not found</p>' };
const Home = require('./vue/home.vue');
const About = require('./vue/about.vue');
// console.log(Home);
// console.log(fetch);
console.log('{{testApi}}');
const routes = [
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        }
    ];
// const User = {
//   template: '<div>User</div>'
// }

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);
const app = new Vue({
   router: router
}).$mount('#app');
