<template>
    <div class="rounded-md tracking-wider">
        <div :class="defaultSize">
            <slot name="header">Title Here</slot>
        </div>
        <div :class="[defaultSize, { 'border-b border-t' : withBorder }]">
            <slot>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam enim hic nesciunt officiis, labore ducimus illum maiores quos asperiores cum! Vel dolor eligendi iusto quasi repellat deleniti officiis consectetur cum.
                </p> 
            </slot>
        </div>
        <div :class="defaultSize">
            <slot name="footer">
                    Footer here
            </slot>
        </div>
    </div>
</template>

<script>

import { globeSize } from '../refs/yng-sizes'

export default {
    props: {
        size: {
            default: 'base'
        },
        customSize: {
            default: null
        },
    },
    computed: {
        withBorder() {
            return this.$attrs.class.match(/\bborder\b/)
        },
        defaultSize() {
            return this.customSize 
                ? this.customSize
                : globeSize[this.size] || globeSize.base
        },
    }
    
}
</script>