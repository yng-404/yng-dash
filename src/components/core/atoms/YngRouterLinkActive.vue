<template>
    <span :class="{ 'bg-red-300' : active }" 
        class="flex absolute bottom-0 w-full h-0.5 rounded-full">
    </span>
</template>

<script>
export default {
    props: {
        active: {
            default: false
        }
    }
}
</script>