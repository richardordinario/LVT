<template>
    <nav class="flex w-full top-0 bg-gray-100 h-14 border-b border-gray-200 fixed">
        <button class=" w-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="22" height="22" viewBox="0 0 24 24" 
            fill="none" stroke="#777" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round">
            <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3"/></svg>
        </button>
        <h3 class="text-white flex items-center justify-center text-gray-500">Laravel Vuex Tailwind</h3>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>
