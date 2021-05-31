<template>
    <span 
        :class="colorClass"
        class="inline-flex bg-gradient-to-tr uppercase border px-1.5 py-px text-xs tracking-widest font-mono rounded-md">
        <slot>Badge</slot>
    </span>
</template>

<script>
export default {
    props: {
        color: {
            default: 'danger'
        }
    },
    data() {
        return {
            colors: [
                { label: 'primary', color: 'from-indigo-50 to-blue-50 border-blue-200 text-blue-500' },
                { label: 'secondary', color: 'from-gray-300 to-gray-200 border-gray-400 text-gray-500' },
                { label: 'disabled', color: 'from-gray-300 to-gray-200 border-gray-300 text-gray-50' },
                { label: 'success', color: 'from-green-50 to-teal-50 border-teal-200 text-teal-500'  },
                { label: 'danger', color: 'from-red-50 to-pink-50 border-red-200 text-red-500' },
                { label: 'warning', color: 'from-orange-50 to-yellow-50 border-orange-200 text-orange-500'},
                { label: 'info', color: 'from-blue-50 to-cyan-50 border-cyan-200 text-cyan-500' },
                { label: 'light', color: 'bg-gray-50 to-bg-white border-gray-200 text-gray-500' },
                { label: 'dark', color: 'from-gray-800 to-gray-700 border-gray-700 text-white' }
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
    }
}
</script>