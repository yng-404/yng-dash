<template>
    <yng-button 
        :color="color" 
        padding-x="px-2"
        class="flex items-center">
        <slot name="icon-left"></slot>
        <span class="px-1.5">
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
}
</script>