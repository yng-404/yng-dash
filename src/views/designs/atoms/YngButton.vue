<template>
    <button 
        :class="[defaultClass, colorClass]"
        :disabled="color === 'disabled' || disabled"
        class="bg-gradient-to-tr rounded-md focus:outline-none tracking-widest-2 font-medium uppercase"
        >
        <slot>Primary</slot>
    </button>
</template>

<script>

import { buttonSize } from '../core/yng-sizes'
import { buttonColor } from '../core/yng-colors'

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
        colorClass() {
            return this.customColor 
                ? this.customColor
                : buttonColor[this.color] || buttonColor.primary
        },
        defaultClass() {
            return this.customSize 
                ? this.customSize
                : buttonSize[this.size] || buttonSize.base
        }
    }
}
</script>
