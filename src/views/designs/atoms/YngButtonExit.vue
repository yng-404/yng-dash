<template>
    <button class="rounded-md focus:outline-none flex items-center">
        <slot></slot>
        <span class="p-1 hover:bg-gray-200 rounded-md">
            <svg :class="defaultSize" class="opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </span>
    </button>
</template>

<script>

import { toggleSize } from './yng-sizes'

export default {
    props: {
        size: {
            default: 'base'
        }
    },
    computed: {
        defaultSize() {
            return toggleSize[this.size]
        },
    }
}
</script>