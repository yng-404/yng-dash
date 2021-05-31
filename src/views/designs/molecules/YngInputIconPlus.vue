<template>
    <div>
        <label v-if="label" :for="id" class="text-sm tracking-wider mb-2 inline-block">
            {{ label }}
        </label>
        <div class="flex items-center relative">
            <span 
                :class="[
                 error ? 'text-red-300' : 'text-gray-300', 
                    { 'text-teal-300' : success }
                ]" 
                class="absolute left-0 ml-3 pointer-events-none">
                <slot name="icon-left"></slot>
            </span>
            <yng-input 
                :type="type"
                :id="id"
                :padding="padding"
                :placeholder="placeholder"
                :class="[{ 'border-red-300' : error, 'border-teal-300' : success }, borderColor]"
                class="w-full"
            />
            <span 
                :class="[
                    error ? 'text-red-300' : 'text-gray-300', 
                    { 'text-teal-300' : success }
                ]" 
                class="absolute right-0 mr-3 pointer-events-none">
                <slot name="icon-right"></slot>
            </span>
        </div>
        <span v-if="error" class="text-xs tracking-wider text-red-500 pt-2 inline-block">
            <slot name="error">{{ error }}</slot>
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
        error: {
            default: null
        },
        success: {
            default: false
        },
        placeholder: {
            default: null
        },
        label: {
            default: null
        },
        type: {
            default: 'text'
        },
        id: {
            default: 'input-with-icon'
        },
        borderColor: {
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
        padding() {
            if (this.$slots['icon-left'] && this.$slots['icon-right']) {
                return 'px-9 py-1.5'
            } else {
                if (this.$slots['icon-right']) {
                    return 'pr-9 pl-3 py-1.5'
                } else if(this.$slots['icon-left']) {
                    return 'pr-3 pl-9 py-1.5'
                } else {
                    return 'px-3 py-1.5'
                }
            }
        }
    }
}
</script>