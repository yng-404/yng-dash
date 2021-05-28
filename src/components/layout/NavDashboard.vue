<template>
    <nav 
        :class="isMenuOpen? 'absolute' : 'lg:block hidden'"
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
        <ul class="space-y-2 lg:pt-8 text-sm tracking-wider">
            <nav-dashboard-item 
                v-for="menu in sortedMenu" 
                :key="menu.name" 
                :menu="menu"
            />
        </ul>
    </nav>
</template>


<script>

import dashboardMenu from '@/api/local/menu.js'
import NavDashboardItem from './NavDashboardItem.vue'

export default {
    components: { 
        NavDashboardItem 
    },
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