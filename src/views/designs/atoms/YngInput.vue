<template>
    <input 
        :class="[defaultColor, defaulSize]"
        :id="inputId"
        :disabled="color === 'disabled' || disabled"
        class="rounded-md border tracking-wider placeholder-gray-400"
    />
</template>

<script>

import { inputSize, inputSizeIcon } from '../core/yng-sizes'
import { inputColor, inputColorFocus } from '../core/yng-colors'

export default {
    props: {
        disabled: {
            default: false
        },
        size: {
            default: 'base'
        },
        color: {
            default: 'base'
        },
        colorFocus: {
            default: 'base'
        },
        customSize: {
            default: null
        },
        customColor: {
            default: null
        },
        icon: {
            default: 'none'
        }
    },
    data() {
        return {
            inputId: null
        }
    },
    mounted() {
        this.inputId = this._uid
    },
    computed: {
        defaultColor() {
            return this.customColor
                ? this.customColor
                : `${inputColor[this.color]} ${inputColorFocus[this.colorFocus]}` 
                    || `${inputColor.base} ${inputColorFocus[this.colorFocus]}`
        },
        defaulSize() {
            return this.customSize 
                ? this.customSize 
                : `${inputSizeIcon[this.icon][this.size]} ${inputSize[this.size]}`
        }
    }
}
</script>