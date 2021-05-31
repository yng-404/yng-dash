<template>
    <blockquote
        :class="[borderClass, colorClass]"
        class="px-4 py-2 rounded-md border-b- text-sm tracking-wider w-full border"
    >
        <slot></slot>
    </blockquote>
</template>

<script>


import { blockQuoteSize } from './yng-sizes'
import { blockQuoteColor } from './yng-colors'

export default {
    props: {
        borderPosition: {
            default: 'left'
        },
        color: {
            default: 'success'
        },
        size: {
            default: 'base'
        }
    },
    computed: {
        colorClass() {
            return  blockQuoteColor[this.color]  || blockQuoteColor.primary
        },
        borderClass() {
            return blockQuoteSize[this.size][this.borderPosition] || blockQuoteSize.base
        }
    }
}
</script>