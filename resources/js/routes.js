import Home from './components/templete/Home.vue'
import About from './components/templete/About.vue'
import Course from './components/templete/Course.vue'

export default {
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/course', component: Course },
    ]
}
