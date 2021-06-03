<template>
    <div 
        :class="[defaultColor, defaultSize]" 
        class="rounded-md tracking-wider">
        <slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non ipsam laudantium earum nisi ab libero consectetur temporibus nobis, ducimus explicabo.</p>
        </slot>
    </div>
</template>

<script>

import { barColor } from '../refs/yng-colors'
import { globeSize } from '../refs/yng-sizes'

export default {
    props: {
        color: {
            default: 'plain'
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
        defaultColor() {
            return this.customColor 
                ? this.customColor 
                : this.inverted 
                    ? barColor.inverted[this.color] || ''
                    : barColor.normal[this.color] || ''
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize 
                : globeSize[this.size] || ''
        }
    }
}
</script>