<template>
    <button 
        :type="type"
        :class="[borderClass, colorClass, paddingX, paddingY]"
        class="bg-gradient-to-tr rounded-md focus:outline-none text-2xs tracking-widest-2 font-medium uppercase"
        >
        <slot>Primary</slot>
    </button>
</template>

<script>

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
        paddingX: {
            default: 'px-3'
        },
        paddingY: {
            default: 'py-1.5'
        }
    },
    data() {
        return {
            colors: [
                { label: 'primary', color: 'from-indigo-500 to-blue-400 hover:from-indigo-600 hover:to-blue-500 text-white', },
                { label: 'secondary', color: 'from-gray-500 to-gray-400 hover:from-gray-600 hover:to-gray-500 text-white', },
                { label: 'success', color: 'from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white', },
                { label: 'danger', color: 'from-red-500 to-pink-400 hover:from-red-600 hover:to-pink-500 text-white', },
                { label: 'warning', color: 'from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white', },
                { label: 'info', color: 'from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white', },
                { label: 'light', color: 'from-bg-gray-50 to-bg-white hover:bg-gray-100  border text-gray-600', },
                { label: 'dark', color: 'from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-700 text-white'},
            ]
        }
    },
    computed: {
        defaultColor() {
            return this.colors.find(el => el.label === this.color) ? this.color : 'primary'
        },
        colorClass() {
            return this.colors.find(el => el.label === this.defaultColor).color
        },
        borderClass() {
            return {
                none: '',
                thick: 'border-b-4'
            }[this.borderStyle]
        }
    }
}
</script>
