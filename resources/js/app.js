require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.component('app-main', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
