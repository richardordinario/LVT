<template>
    <div class="flex">
        <Sidebar/>
        <Header/>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import Header from './templete/Header.vue'
import Sidebar from './templete/Sidebar.vue'

export default {
    name: 'App',
    components: {
        Header,
        Sidebar
    }
}
</script>
