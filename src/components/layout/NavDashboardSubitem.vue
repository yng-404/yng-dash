<template>
    <router-link 
        @mouseover="showTooltip = true" 
        @mouseleave="showTooltip = false" 
        :to="{ name: menu.route}" 
        class="flex items-center lg:space-x-3 py-3"
    >
        <span v-html="menu.icon"></span>
        <span class="lg:inline-flex hidden">{{ menu.name }}</span>
    </router-link>
    <slot></slot>
    <span v-show="menu.children !== undefined" class="lg:hidden absolute right-0 p-1">
        <svg class="w-3 h-3 opacity-30 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
    </span>
    <yng-tooltip 
        v-show="showTooltip && menu.children === undefined" 
        arrow="left" 
        class="ml-9 lg:hidden"
    >
        {{ menu.name }}
    </yng-tooltip>
</template>

<script>

import YngTooltip from '@/views/designs/atoms/YngTooltip.vue'

export default {
    components: {
        YngTooltip,
    },
    props: {
        menu: {
            default: null
        }
    },
    data() {
        return {
            showTooltip: false
        }
    }
}
</script>