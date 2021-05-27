<template>
    <nav 
        :class="isMenuOpen? '' : 'lg:block hidden'"
        class="lg:w-64 w-14 border-r space-y-4">
        <button 
            @click="$emit('toggleMenu')"
            class="lg:hidden px-4 py-3 h-14 w-full flex justify-center items-center focus:outline-none">
            <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
        </button>
        <ul class="space-y-4 lg:pt-16">
            <li v-for="menu in dashboardMenu" :key="menu.name">
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
    }
    
}
</script>