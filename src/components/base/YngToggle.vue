<template>
    <button class="p-1 hover:bg-gray-50 rounded-md focus:outline-none">
        <svg v-show="isOpen" class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
        <svg v-show="!isOpen" class="w-4 h-4 opacity-50 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
    </button>
</template>

<script>
export default {
    props: {
        isOpen: {
            default: false
        }
    }
}
</script>