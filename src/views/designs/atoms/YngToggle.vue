<template>
    <button 
        class="rounded-md focus:outline-none flex items-center">
        <slot></slot>
        <span class="p-1 hover:bg-gray-200 rounded-md">
            <template v-if="toggleType === 'arrow'">
                <svg v-show="isOpen" :class="defaultSize" class="opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                <svg v-show="!isOpen" :class="defaultSize" class="opacity-50 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
            </template>
            <template v-if="toggleType === 'plus'">
                <svg v-show="isOpen" :class="defaultSize" class="opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>            
                <svg v-show="!isOpen" :class="defaultSize" class="opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </template>
        </span>
    </button>
</template>

<script>

import { toggleSize } from '../core/yng-sizes'

export default {
    props: {
        isOpen: {
            default: false
        },
        label: {
            default: null
        },
        toggleType: {
            default: 'arrow'
        },
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