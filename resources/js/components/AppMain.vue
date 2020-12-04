<template>
    <div id="main">
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Body from './templete/Body'
import Header from './templete/Header'

export default {
    name: 'app-main',
    components: [
        Header
    ]
}
</script>
