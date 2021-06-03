<template>
    <span 
        :class="[defaultSize, defaultColor]"
        class="inline-flex bg-gradient-to-tr uppercase border tracking-widest font-mono rounded-md">
        <slot>Badge</slot>
    </span>
</template>

<script>


import { badgeSize } from '../refs/yng-sizes'
import { badgeColor } from '../refs/yng-colors'

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
        defaultColor() {
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