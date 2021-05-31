<template>
    <div class="flex items-center relative">
        <yng-input 
            :type="type"
            :padding="padding"
            :id="id"
            class="w-full"
        />
        <span :class="iconClass" class="absolute opacity-20 pointer-events-none">
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
        id: {
            default: 'input-with-icon'
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
            return this.iconPosition === 'right' 
                ? 'pr-9 pl-3 py-1.5'
                : 'pr-3 pl-9 py-1.5'
        }
    }
}
</script>