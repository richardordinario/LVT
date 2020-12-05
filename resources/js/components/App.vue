<template>
   <div class="flex flex-row"> 
        <Sidebar/>
        <div class="flex flex-col bg-gray-100 w-full">
            <Header/>
             <div class="container mx-auto top-16 mt-24"> 
                <router-view></router-view>
            </div>
        </div>
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
