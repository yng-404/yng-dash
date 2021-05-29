<template>
    <li>
        <div :class="{ 'border-red-600 bg-red-300 bg-opacity-10' : $route.name === menu.route }"
            class="border-l-4 hover:border-red-600 border-transparent lg:px-4 px-3 justify-between flex lg:w-full w-14 items-center hover:bg-red-300 hover:bg-opacity-20">
            <router-link :to="{ name: menu.route}" class="flex items-center lg:space-x-3 py-3">
                <span v-html="menu.icon"></span>
                <span class="lg:inline-flex hidden">{{ menu.name }}</span>
            </router-link>
            <yng-toggle
                v-if="menu.children !== undefined" 
                @click="isOpen = !isOpen" 
                :isOpen="isOpen"
                class="lg:inline hidden"
            />                        
        </div>
        <ul v-if="menu.children !== undefined && isOpen" class="lg:block hidden">
            <li v-for="child in menu.children" :key="child.name">
                <router-link :to="{ name: child.route}" 
                    :class="{ 'bg-red-300 bg-opacity-10' : $route.name === child.route }"
                    class="lg:px-4 px-3 py-3 flex lg:w-full w-14 text-xs tracking-widest items-center hover:bg-red-200 hover:bg-opacity-10 lg:space-x-3">
                    <span class="w-7"></span>
                    <span class="lg:inline-flex hidden">{{ child.name }}</span>
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>

import YngToggle from '../base/YngToggle.vue'

export default {
    components: { 
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