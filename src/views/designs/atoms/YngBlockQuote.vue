<template>
    <blockquote
        :class="[borderClass, colorClass]"
        class="px-4 py-2 rounded-md border-b- text-sm tracking-wider w-full border"
    >
        <slot></slot>
    </blockquote>
</template>

<script>


import { blockQuoteSize } from '../core/yng-sizes'
import { blockQuoteColor } from '../core/yng-colors'

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
            return  this.customColor 
                ? this.customColor
                : blockQuoteColor[this.color] || blockQuoteColor.primary
        },
        borderClass() {
            return this.customSize 
                ? this.customSize
                : blockQuoteSize[this.size][this.borderPosition] || blockQuoteSize.base
        }
    }
}
</script>