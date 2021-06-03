<template>
    <span :class="[defaultColor, defaultSize]" class="rounded-full inline-block w-full overflow-hidden bg-opacity-30 relative">
        <span :class="[defaultColor, defaultSize]" class="absolute rounded-full bg-opacity-90" :style="progressWidth"></span>
    </span>
</template>


<script>

import { progressColor } from '../refs/yng-colors'
import { progressSize } from '../refs/yng-sizes'

export default {
    props: {
        color: {
            default: 'info'
        },
        size: {
            default: 'base'
        },
        customColor: {
            default: null
        },
        customSize: {
            default: null
        },
        inverted: {
            default: false,
        },
        progress: {
            default: '75%'
        }
    },
    computed: {
        defaultColor() {
            return this.customColor 
                ? this.customColor 
                : this.inverted 
                    ? 'bg-white'
                    : progressColor[this.color] || ''
        },
        progressWidth() {
            return `width: ${this.progress}`
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize 
                : progressSize[this.size] || progressSize.base
        }
    }
}
</script>