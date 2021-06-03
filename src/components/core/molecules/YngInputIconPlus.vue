<template>
    <div>
        <label v-if="label" class="text-sm tracking-wider mb-2 inline-block">
            {{ label }}
        </label>
        <div class="flex items-center relative">
            <span :class="colorClass" class="absolute left-0 ml-3 pointer-events-none opacity-40">
                <slot name="icon-left"></slot>
            </span>
            <yng-input 
                v-bind="$attrs"
                :size="size"
                :icon="withIcon"
                :color="color"
                class="w-full"
            />
            <span :class="colorClass" class="absolute right-0 mr-3 pointer-events-none opacity-40">
                <slot name="icon-right"></slot>
            </span>
        </div>
        <span v-if="prompt" :class="colorClass" class="text-xs tracking-wider pt-2 inline-block">
            <slot name="error">{{ prompt }}</slot>
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
        color: {
            default: 'base'
        },
        size: {
            default: 'base'
        },
        prompt: {
            default: null
        },
        label: {
            default: null
        },

    },
    computed: {
        colorClass() {
            return {
                base: '',
                error: 'text-red-500',
                success: 'text-green-500',
                warning: 'text-yellow-500',
                disabled: ''
            }[this.color]
        },
        withIcon() {
            if (this.$slots['icon-left'] && this.$slots['icon-right']) {
                return 'both'
            } else {
                if (this.$slots['icon-right']) {
                    return 'right'
                } else if(this.$slots['icon-left']) {
                    return 'left'
                } else {
                    return 'none'
                }
            }
        }
    }
}
</script>