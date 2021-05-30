<template>
    <span class="fixed">
        <span class="rounded-md bg-gray-700 text-sm tracking-wider px-2 pt-px pb-0.5 text-gray-100 relative">
            <slot></slot>
            <span 
                :class="arrowClass" 
                class="absolute" 
                :style="tooltipStyle"
            ></span>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        arrow: {
            default: 'down'
        },
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