<template>
    <button 
        :type="type"
        :class="[defaultClass, colorClass]"
        class="bg-gradient-to-tr rounded-md focus:outline-none tracking-widest-2 font-medium uppercase"
        >
        <slot>Primary</slot>
    </button>
</template>

<script>

import { buttonSize } from './yng-sizes'
import { buttonColor } from './yng-colors'

export default {
    props: {
        type: {
            default: null
        },
        color: {
            default: 'primary'
        },
        borderStyle: {
            default: 'none'
        },
        size: {
            default: 'base'
        }
    },
    computed: {
        colorClass() {
            return buttonColor[this.color] || buttonColor.primary
        },
        defaultClass() {
            return buttonSize[this.size] || buttonSize.base
        }
    }
}
</script>
