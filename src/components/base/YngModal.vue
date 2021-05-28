<template>
    <div v-if="show" :class="outerClass" class="z-50">
        <div class="fixed inset-0" @click="close">
            <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
        </div>
        <div 
            class="bg-gray-50 w-full overflow-auto y-scroll-bar z-50 pt-4 pb-6" 
            :class="[maxWidthClass, innerClass]">
            <div v-if="withTitle" class="pl-6 pr-4 pb-4 flex items-center justify-between w-full">
                <span class="text-xs uppercase tracking-widest-2 whitespace-nowrap">
                    <slot name="title"></slot>
                </span>
                <yng-exit-button @clicked="$emit('close')" />                        
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

import YngExitButton from './YngExitButton.vue'

export default {
    components: { 
        YngExitButton 
    },
    props: {
        show: {
            default: false
        },
        maxWidth: {
            default: '3xl'
        },
        closeable: {
            default: true
        },
        usage: {
            default: 'nav'
        },
        withTitle: {
            default: true
        }
    },

    methods: {
        close() {
            if (this.closeable) {
                this.$emit('close')
            }
        }
    },

    created() {
        const closeOnEscape = (e) => {
            if (e.key === 'Escape' && this.show) {
                this.close()
            }
        }

        document.addEventListener('keydown', closeOnEscape)
    },

    computed: {
        maxWidthClass() {
            return {
                'sm': 'sm:max-w-sm',
                'md': 'sm:max-w-md',
                'lg': 'sm:max-w-lg',
                'xl': 'sm:max-w-xl',
                '2xl': 'sm:max-w-2xl',
                '3xl': 'sm:max-w-3xl',
                '4xl': 'sm:max-w-4xl',
                '5xl': 'sm:max-w-5xl',
            }[this.maxWidth]
        },
        outerClass() {
            return {
                basic: 'top-0 px-3 md:pt-6 pt-4 lg:px-0 flex sm:items-top sm:justify-center fixed flex inset-x-0 w-full max-h-screen pb-20',
                multipurpose: 'md:px-3 md:pt-6 md:top-0 md:bottom-auto bottom-0 md:items-top md:justify-center fixed flex inset-x-0 w-full max-h-screen',
                nav: 'md:top-0 md:bottom-auto bottom-0 md:items-top md:justify-center fixed flex inset-x-0 w-full max-h-screen',
                full: 'top-0 items-top justify-center fixed flex inset-x-0 w-full max-h-screen'
            }[this.usage]
        },
        innerClass() {
            return {
                basic: 'rounded-md sm:shadow-xl',
                multipurpose: 'rounded-t-md md:rounded-md sm:shadow-xl',
                nav: 'rounded-t-md',
                full: ''
            }[this.usage]
        }
    }
}
</script>


<style scoped>
    .y-scroll-bar::-webkit-scrollbar-track {
        background-color: #A8A29E;
    }

    .y-scroll-bar::-webkit-scrollbar {
        width: 5px;
        background-color: #E7E5E4;
    }

    .y-scroll-bar::-webkit-scrollbar-thumb {
        background-color: #44403C;
    }
</style>