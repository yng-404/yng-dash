<template>
    <button @click="$emit('clicked')" class="focus:outline-none p-1 opacity-50 hover:opacity-90 rounded-md hover:bg-gray-100 hover:text-red-600">
        <slot></slot>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>

</template>

<script>
export default {
    
}
</script>