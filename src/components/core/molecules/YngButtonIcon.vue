<template>
    <yng-button 
        :color="color" 
        class="flex items-center">
        <slot name="icon-left"></slot>
        <span :class="padding">
            <slot></slot>
        </span>
        <slot name="icon-right"></slot>
    </yng-button>
</template>

<script>


import YngButton from '../atoms/YngButton'

export default {
    props: {
        color: {
            default: 'primary'
        }
    },
    components: { 
        YngButton 
    },
    computed: {
        padding() {
            if (this.$slots['icon-left'] && this.$slots['icon-right']) {
                return 'px-2'
            } else {
                if (this.$slots['icon-right']) {
                    return 'pr-2'
                } else if(this.$slots['icon-left']) {
                    return 'pl-2'
                } else {
                    return ''
                }
            }
        }
    }
}
</script>