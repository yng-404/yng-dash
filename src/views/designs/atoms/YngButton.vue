<template>
    <button 
        :type="type"
        :class="[borderClass, colorClass]"
        class="px-3 py-1.5 rounded-md focus:outline-none text-2xs tracking-widest-2 font-medium uppercase"
        >
        <span class="flex items-center space-x-1">
            <span class="inline-flex items-center">
                <slot name="icon-left"></slot>
                <slot>Primary</slot>
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
        },
        borderStyle: {
            default: 'none'
        }
    },
    data() {
        return {
            colors: [
                { label: 'primary', color: 'bg-gradient-to-tr from-indigo-500 to-blue-400 hover:from-indigo-600 hover:to-blue-500 text-white', },
                { label: 'secondary', color: 'bg-gradient-to-tr from-gray-500 to-gray-400 hover:from-gray-600 hover:to-gray-500 text-white', },
                { label: 'success', color: 'bg-gradient-to-tr from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white', },
                { label: 'danger', color: 'bg-gradient-to-tr from-red-500 to-pink-400 hover:from-red-600 hover:to-pink-500 text-white', },
                { label: 'warning', color: 'bg-gradient-to-tr from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white', },
                { label: 'info', color: 'bg-gradient-to-tr from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white', },
                { label: 'light', color: 'hover:bg-gray-100 bg-gradient-to-tr from-bg-gray-50 to-bg-white border text-gray-600', },
                { label: 'dark', color: 'bg-gradient-to-tr from-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-700 text-white'},
            ]
        }
    },
    computed: {
        defaultColor() {
            return this.colors.find(el => el.label === this.btnColor) ? this.btnColor : 'primary'
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
