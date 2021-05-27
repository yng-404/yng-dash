<template>
    <nav 
        :class="isMenuOpen? '' : 'lg:block hidden'"
        class="xl:w-72 lg:w-64 w-14 border-r space-y-4 sticky top-0 h-full">
        <button 
            @click="$emit('toggleMenu')"
            class="lg:hidden px-4 py-3 h-14 w-full flex justify-center items-center focus:outline-none">
            <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
        </button>
        <div class="lg:flex hidden flex-col items-center justify-center">
            <svg class="w-24 h-24 opacity-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h2 class="text-lg tracking-wider font-medium">Your Name</h2>
            <p class="text-xs tracking-wider text-gray-400">@handle</p>
        </div>
        <ul class="space-y-3 lg:pt-8 text-sm tracking-wider">
            <li v-for="menu in sortedMenu" :key="menu.name">
                <router-link :to="{ name: menu.route}" 
                    :class="{ 'border-red-600 bg-red-300 bg-opacity-10' : $route.name === menu.route }"
                    class="border-l-4 hover:border-red-600 border-transparent lg:px-4 px-3 py-3 flex lg:w-full w-14 items-center hover:bg-red-300 hover:bg-opacity-20 lg:space-x-3">
                    <span v-html="menu.icon"></span>
                    <span class="lg:inline-flex hidden">{{ menu.name }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>


<script>

import { dashboardMenu } from '../api/data.js'

export default {
    props: {
        isMenuOpen: {
            default: false,
        }
    },
    data() {
        return {
            dashboardMenu
        }
    },
    computed: {
        sortedMenu() {
            return this.dashboardMenu.map(el => el).sort((a, b) => a.order - b.order)
        }
    }
    
}
</script>