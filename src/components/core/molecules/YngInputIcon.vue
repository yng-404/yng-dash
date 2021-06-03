<template>
    <div class="flex items-center relative">
        <yng-input 
            v-bind="$attrs"
            :size="size"
            :color="color"
            :icon="iconPosition"
            :colorFocus="colorFocus"
            :customSize="customSize"
            :customColor="customColor"
            class="w-full"
        />
        <span :class="iconClass" class="absolute opacity-30 pointer-events-none">
            <slot></slot>
        </span>
    </div>
</template>


<script>

import YngInput from '../atoms/YngInput.vue'

export default {
    components: { 
        YngInput 
    },
    props: {
        type: {
            default: 'text'
        },
        iconPosition: {
            default: 'left'
        },
        size: {
            default: 'base'
        },
        color: {
            default: 'base'
        },
        colorFocus: {
            default: 'base'
        },
        customSize: {
            default: null
        },
        customColor: {
            default: null
        }
    },
    computed: {
        iconClass() {
            return {
                right: 'right-0 mr-3',
                left: 'left-0 ml-3',
            }[this.iconPosition]
        },
    }
}
</script>