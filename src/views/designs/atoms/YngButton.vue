<template>
    <button
        @click="$emit('clicked')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>