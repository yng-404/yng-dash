<template>
    <input 
        :class="padding"
        class="rounded-md border text-sm tracking-wider border-opacity-70 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-30 focus:border-blue-500 focus:ring-light-blue-400 bg-warm-gray-100 focus:bg-white"
    />
</template>

<script>
export default {
    props: {
        padding: {
            default: 'px-3 py-1'
        },
    },
}
</script>