<template>
    <router-link :to="{ ...routeTo }" :class="{ 'text-red-500 font-medium' : routeTo.name === $route.name }">
        <slot></slot>
        <yng-router-link-active 
            :active="routeTo.name === $route.name"
        />
    </router-link>
</template>

<script>

import YngRouterLinkActive from './YngRouterLinkActive.vue'

export default {
    components: { 
        YngRouterLinkActive 
    },
    props: {
        name: {
            default: null
        },
        params: {
            default: null
        },
        route: {
            default: null
        }
    },
    computed: {
        routeTo() {
            return this.route && typeof this.route === 'object'
                ? this.route
                : { name: this.name, params: this.params }
        }
    }
}
</script>