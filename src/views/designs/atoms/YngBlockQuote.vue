<template>
    <blockquote
        :class="[borderClass, colorClass]"
        class="px-4 py-2 rounded-md text-sm tracking-wider w-full border"
    >
        <slot></slot>
    </blockquote>
</template>

<script>
export default {
    props: {
        borderPosition: {
            default: 'left'
        },
        color: {
            default: 'success'
        }
    },
    data() {
        return {
            colors: [
                { label: 'primary', color: 'from-indigo-50 to-blue-50 border-blue-400' },
                { label: 'secondary', color: 'from-gray-300 to-gray-200 border-gray-400' },
                { label: 'disabled', color: 'from-gray-300 to-gray-200 border-gray-400' },
                { label: 'success', color: 'from-green-50 to-teal-50 border-teal-400'  },
                { label: 'danger', color: 'from-red-50 to-pink-50 border-red-400' },
                { label: 'warning', color: 'from-yellow-50 to-yellow-50 border-yellow-400'},
                { label: 'info', color: 'from-blue-50 to-cyan-50 border-cyan-400' },
                { label: 'light', color: 'bg-gray-50 to-bg-white border-gray-400' },
                { label: 'dark', color: 'from-gray-800 to-gray-700 border-gray-700' }
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
                top: 'border-t-8',
                bottom: 'border-b-8',
                left: 'border-l-8',
                right: 'border-r-8'
            }[this.borderPosition]
        }
    }
}
</script>