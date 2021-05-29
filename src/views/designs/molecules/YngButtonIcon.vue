<template>
    <yng-button :btnColor="btnColor">
        <slot></slot>
        <template #icon-right>
            <slot name="icon"></slot>
        </template>
    </yng-button>
</template>

<script>


import YngButton from '../atoms/YngButton'

export default {
    props: {
        btnColor: {
            default: 'primary'
        }
    },
    components: { 
        YngButton 
    },
}
</script>