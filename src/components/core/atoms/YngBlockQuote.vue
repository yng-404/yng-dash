<template>
    <blockquote
        :class="[borderClass, defaultSize, defaultColor]"
        class="border rounded-md tracking-wider w-full"
    >
        <slot></slot>
    </blockquote>
</template>

<script>


import { blockQuoteSize, globeSize } from '../refs/yng-sizes'
import { blockQuoteColor } from '../refs/yng-colors'

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
        defaultColor() {
            return  this.customColor 
                ? this.customColor
                : blockQuoteColor[this.color] || blockQuoteColor.primary
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize
                : globeSize[this.size] || globeSize.base
        },
        borderClass() {
            return this.customSize 
                ? this.customSize
                : blockQuoteSize[this.size][this.borderPosition] || blockQuoteSize.base
        }
    }
}
</script>