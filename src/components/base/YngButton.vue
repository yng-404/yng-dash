<template>
    <button @click="$emit('clicked')"
        :type="type"
        :class="color"
        class="rounded-md focus:outline-none text-2xs tracking-widest-2 font-medium uppercase lg:py-1.5 lg:px-3 p-1"
        >
        <span class="flex items-center lg:space-x-1">
            <span class="lg:inline-flex hidden items-center">
                <slot name="icon-left"></slot>
                <slot></slot>
            </span>
            <slot name="icon-right"></slot>
        </span>
    </button>
</template>

<script>


export default {
    props: {
        type: {
            default: null
        },
        btnColor: {
            default: 'primary'
        }
    },
    computed: {
        color() {
            return {
                primary: 'hover:bg-gray-100 lg:bg-gradient-to-tr lg:hover:from-purple-600 lg:hover:to-blue-500 from-purple-500 to-blue-400 lg:text-white text-blue-600',
                danger: 'hover:bg-gray-100 lg:bg-gradient-to-tr lg:hover:from-red-600 lg:hover:to-pink-500 from-red-500 to-pink-400 lg:text-white text-red-600',
                warning: '',
                info: '',
                secondary: '',
                light: 'hover:bg-gray-50 lg:bg-gradient-to-tr from-bg-gray-50 to-bg-white lg:border lg:text-gray-500 text-gray-600',
                dark: ''
            }[this.btnColor]
        }
    }
}
</script>