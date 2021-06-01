<template>
    <span 
        :class="[defaultSize, colorClass]"
        class="inline-flex bg-gradient-to-tr uppercase border tracking-widest font-mono rounded-md">
        <slot>Badge</slot>
    </span>
</template>

<script>


import { badgeSize } from '../core/yng-sizes'
import { badgeColor } from '../core/yng-colors'

export default {
    props: {
        color: {
            default: 'danger'
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
                : badgeColor[this.color] || badgeColor.primary
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize 
                : badgeSize[this.size] || badgeSize.base
        }
    }
}
</script>