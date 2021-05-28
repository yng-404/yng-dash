<template>
    <div v-if="show" class="fixed hidden md:block z-10">
        <div class="fixed inset-0 h-screen w-full" @click.prevent="close"></div>
        <div :class="margin" class="whitespace-nowrap absolute right-0">
            <slot></slot>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ContextMenu',
    props: {
        show: {
            default: false
        },
        margin: {
            default: ''
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
}
</script>