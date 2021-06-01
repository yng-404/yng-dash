<template>
    <input 
        :class="[defaultColor, defaulSize]"
        :id="inputId"
        class="rounded-md border tracking-wider placeholder-gray-400"
    />
</template>

<script>

import { inputSize } from '../core/yng-sizes'
import { inputColor } from '../core/yng-colors'

export default {
    props: {
        size: {
            default: 'base'
        },
        color: {
            default: 'base'
        },
        customSize: {
            default: null
        },
        customColor: {
            default: null
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
                : inputColor[this.color] || inputColor.base
        },
        defaulSize() {
            return this.customSize 
                ? this.customSize 
                : inputSize[this.size]
        }
    }
}
</script>