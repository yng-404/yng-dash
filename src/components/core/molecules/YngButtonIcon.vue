<template>
    <yng-button class="flex items-center">
        <slot name="icon-left"></slot>
        <span :class="padding">
            <slot></slot>
        </span>
        <slot name="icon-right"></slot>
    </yng-button>
</template>

<script>


import YngButton from '../atoms/YngButton'

export default {
    components: { 
        YngButton 
    },
    computed: {
        padding() {
            if (this.$slots['icon-left'] && this.$slots['icon-right']) {
                return {
                    sm:     'px-1.5',
                    base:   'px-2',
                    md:     'px-2.5',
                    lg:     'px-3',
                    xl:     'px-4',
                }[this.$attrs.size]
            } else {
                if (this.$slots['icon-right']) {
                    return {
                        sm:     'pr-1.5',
                        base:   'pr-2',
                        md:     'pr-2.5',
                        lg:     'pr-3',
                        xl:     'pr-4',
                    }[this.$attrs.size]
                } else if(this.$slots['icon-left']) {
                    return {
                        sm:     'pl-1.5',
                        base:   'pl-2',
                        md:     'pl-2.5',
                        lg:     'pl-3',
                        xl:     'pl-4',
                    }[this.$attrs.size]
                } else {
                    return ''
                }
            }
        }
    }
}
</script>