<template>

    <aside class="h-screen sticky top-0 w-64 left-0 bg-gray-200">
        <section class="flex ml-3 pt-3 pb-1 border-b border-gray-300">
            <span class="inline-block w-10 h-10 rounded-full overflow-hidden">
                <img class="w-full object-fit rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="">
            </span>
            <div class="ml-3">
                <h2 class="text-bold">Admin Name</h2>
                <p class="text-gray-400 text-sm">Admin</p>
            </div>
        </section> 
        <ul class="mt-10">
            <li class="flex items-center p-3 hover:bg-indigo-500 hover:text-white">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="w-4 h-4 ml-3"
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                </span>
                <span class="text-base ml-3">
                    <router-link to='/'>Dashboard</router-link>
                </span>
            </li>
            <li class="flex items-center p-3 hover:bg-indigo-500 hover:text-white">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="w-4 h-4 ml-3"
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </span>
                <span class="text-base ml-3">
                    <router-link to='/course'>Courses</router-link>
                </span>
            </li>
        </ul>
        <hr class="text-gray-700 my-3">
        <ul>
            <li class="flex items-center p-3 hover:bg-indigo-500 hover:text-white">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="w-4 h-4 ml-3"
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                    </path><circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                <span class="text-base ml-3">Students</span>
            </li>
            <li class="flex items-center p-3 hover:bg-indigo-500 hover:text-white">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="w-4 h-4 ml-3"
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                    </path><circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                <span class="text-base ml-3">Teachers</span>
            </li>   
        </ul>
    </aside>
 
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>
