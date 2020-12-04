require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import AppMain from './components/AppMain.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-main', require('./components/AppMain.vue').default);

const app = new Vue({
    el: '#app',
    router,
    components: [
        AppMain
    ]
});
