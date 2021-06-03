<template>
    <button 
        :class="[defaultSize, defaultColor]"
        :disabled="color === 'disabled' || disabled"
        class="bg-gradient-to-tr rounded-md focus:outline-none tracking-widest-2 font-medium uppercase"
        >
        <slot>Primary</slot>
    </button>
</template>

<script>

import { buttonSize } from '../refs/yng-sizes'
import { buttonColor } from '../refs/yng-colors'

export default {
    props: {
        disabled: {
            default: false
        },
        color: {
            default: 'primary'
        },
        borderStyle: {
            default: 'none'
        },
        size: {
            default: 'base'
        },
        customColor: {
            default: null
        },
        customSize: {
            default: null
        }
    },
    computed: {
        defaultColor() {
            return this.customColor 
                ? this.customColor
                : buttonColor[this.color] || buttonColor.primary
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize
                : buttonSize[this.size] || buttonSize.base
        }
    }
}
</script>
