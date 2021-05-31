<template>
    <span 
        :class="[defaultSize, colorClass]"
        class="inline-flex bg-gradient-to-tr uppercase border tracking-widest font-mono rounded-md">
        <slot>Badge</slot>
    </span>
</template>

<script>

import { badgeSize } from './yng-sizes'
import { badgeColor } from './yng-colors'


export default {
    props: {
        color: {
            default: 'danger'
        },
        size: {
            default: 'base'
        }
    },
    computed: {
        colorClass() {
            return badgeColor[this.color] || badgeColor.primary
        },
        defaultSize() {
            return badgeSize[this.size] || badgeSize.base
        }
    }
}
</script>