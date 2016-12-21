const NotFound = {
    template: '<p>Page not found</p>'
};

const appRoutes = [{
    path: '/about',
    component: require('./vue/about.vue')
}, {
    path: '/',
    component: require('./vue/home.vue')
}, {
    path: '/home',
    component: require('./vue/home.vue')
}];



export default appRoutes;
