<template>
    <div 
        :class="imgPosition"
        class="flex overflow-hidden">
        <div v-if="imagePosition === 'middle-x' || imagePosition === 'middle-y'"  class="p-4 w-full">
            <slot name=""></slot>
        </div>
        <div 
            :class="[imgClass, imgWidth]"
            class="relative flex-shrink-0 bg-gray-50" :style="imgHeight">
            <img v-if="image" src="@/assets/svg/image.svg" alt="" class="absolute h-full w-full object-fill opacity-10" />
            <img v-else src="@/assets/svg/image.svg" alt="" class="absolute h-full w-full object-fill p-8 opacity-10" />
        </div>
        <div class="p-4 order-2 w-full">
            <slot></slot>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        image: {
            default: null
        },
        ratio: {
            default: '1:2'
        },
        imagePosition: {
            default: 'left'
        }
    },
    computed: {
        imgPosition() {
            return {
                'middle-y': 'flex-col divide-y',
                'middle-x': 'divide-x',
                top: 'flex-col divide-y',
                bottom: 'flex-col',
                left: 'divide-x',
                right: ''
            }[this.imagePosition]
        },
        imgClass() {
            return {
                'middle-x': 'border-r order-1',
                'middle-y': '',
                top: 'order-1',
                bottom: 'order-3 border-t',
                left: 'order-1',
                right: 'order-3 border-l'
            }[this.imagePosition]
        },
        imgWidth() {
            const ratio = this.ratio.split(':')
            const total = parseInt(ratio[0]) + parseInt(ratio[1]) 
            return this.imagePosition === 'left' || this.imagePosition === 'right' || this.imagePosition === 'middle-x'
                ? `w-${parseInt(ratio[0])}/${total}` 
                : 'w-full'
        },
        imgHeight() {
            const ratio = this.ratio.split(':')
            const total = parseInt(ratio[0]) + parseInt(ratio[1]) 
            const height = ( parseInt(ratio[0]) / total ) * 100
            return `padding-bottom: ${height}%`
        },
        
    }
}
</script>