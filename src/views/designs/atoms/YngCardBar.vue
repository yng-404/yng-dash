<template>
    <div 
        :class="[colorClass, defaultSize]" 
        class="bg-gradient-to-tr rounded-md flex items-center justify-between tracking-wider">
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non ipsam laudantium earum nisi ab libero consectetur temporibus nobis, ducimus explicabo.</p>
        </slot>
    </div>
</template>

<script>

import { barColor } from '../core/yng-colors'
import { barSize } from '../core/yng-sizes'

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
        },
        inverted: {
            default: false,
        }
    },
    computed: {
        colorClass() {
            return this.customColor 
                ? this.customColor 
                : this.inverted 
                    ? barColor.inverted[this.color] || barColor.inverted.primary
                    : barColor.normal[this.color] || barColor.normal.primary
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize 
                : barSize[this.size] || barSize.base
        }
    }
}
</script>