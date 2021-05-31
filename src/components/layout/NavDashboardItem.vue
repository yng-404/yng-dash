<template>
    <li class="relative">
        <div :class="{ 'border-red-600 bg-red-300 bg-opacity-10' : $route.name === menu.route }"
            class="border-l-4 hover:border-red-600 border-transparent lg:px-4 px-3 justify-between flex lg:w-full w-14 items-center hover:bg-red-300 hover:bg-opacity-20">
            <nav-dashboard-subitem  :menu="menu">
                <yng-toggle
                    v-if="menu.children !== undefined" 
                    @click="isOpen = !isOpen" 
                    :isOpen="isOpen"
                    class="lg:inline hidden transition-all ease-in duration-500 delay-200"
                />
            </nav-dashboard-subitem>
        </div>
        <ul v-if="menu.children !== undefined" class="">
            <li v-for="child in menu.children" :key="child.name">
                <router-link :to="{ name: child.route}" 
                    :class="{ 'bg-red-300 bg-opacity-10' : $route.name === child.route }"
                    class="lg:px-4 px-3 py-3 flex lg:w-full w-14 text-xs tracking-widest items-center hover:bg-red-200 hover:bg-opacity-10 lg:space-x-3">
                    <span class="w-7 rounded-full h-7 bg-gray-300"></span>
                    <span class="lg:inline-flex hidden">{{ child.name }}</span>
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>

import YngToggle from '../base/YngToggle.vue'
import NavDashboardSubitem from './NavDashboardSubitem.vue'

export default {
    components: { 
        NavDashboardSubitem,
        YngToggle 
    },
    props: {
        menu: {
            default: null
        }
    },
    data() {
        return {
            isOpen: false
        }
    }
}
</script>