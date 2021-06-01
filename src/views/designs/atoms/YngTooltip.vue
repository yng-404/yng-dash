<template>
    <span class="fixed">
        <span 
            :class="defaultSize" 
            class="rounded-md bg-gray-700 tracking-wider text-gray-100 relative">
            <slot></slot>
            <span 
                :class="arrowClass" 
                :style="tooltipStyle"
                class="absolute" 
            ></span>
        </span>
    </span>
</template>

<script>

import { tooltipSize } from '../core/yng-sizes'

export default {
    props: {
        arrow: {
            default: 'down'
        },
        size: {
            default: 'base'
        },
        customSize: {
            default: null
        }
    },
    computed: {
        arrowClass() {
            return {
                up: 'arrow-up top-0 -mt-1',
                down: 'arrow-down bottom-0 -mb-1',
                right: 'arrow-right right-0 -mr-1',
                left: 'arrow-left left-0 -ml-1'
            }[this.arrow]
        },
        tooltipStyle() {
            return this.arrow === 'up' || this.arrow === 'down'
                ? 'left: calc(50% - 5px)'
                : 'top: calc(50% - 5px)'
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize 
                : tooltipSize[this.size] || tooltipSize.base
        }
    }
}
</script>


<style scoped>
    .arrow-up {
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #334155;
    }

    .arrow-down {
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #334155;
    }

    .arrow-right {
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid #334155;
    }

    .arrow-left {
        width: 0; 
        height: 0; 
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent; 
        border-right:5px solid #334155; 
    }
</style>