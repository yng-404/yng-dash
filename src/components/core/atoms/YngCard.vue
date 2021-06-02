<template>
    <div 
        :class="imgPosition"
        class="flex overflow-hidden">
        <div 
            :class="[imgClass, imgWidth]"
            class="relative flex-shrink-0 bg-gray-50" :style="imgHeight">
            <img v-if="image" :src="image" alt="" class="absolute h-full w-full object-fill opacity-10" />
            <img v-else src="@/assets/svg/image.svg" alt="" class="absolute h-full w-full object-fill p-8 opacity-10" />
        </div>
        <div 
            :style="contentHeight"
            class="p-4 order-2 w-full">
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
        imageAspectRatio: {
            default: '1:3'
        },
        imagePosition: {
            default: 'left'
        }
    },
    computed: {
        imgPosition() {
            return {
                top: 'flex-col divide-y',
                bottom: 'flex-col',
                left: 'divide-x',
                right: ''
            }[this.imagePosition]
        },
        imgClass() {
            return {
                top: 'order-1',
                bottom: 'order-3 border-t',
                left: 'order-1',
                right: 'order-3 border-l'
            }[this.imagePosition]
        },
        imgWidth() {
            const ratio = this.imageAspectRatio.split(':')
            const total = parseInt(ratio[0]) + parseInt(ratio[1]) 
            return this.imagePosition === 'left' || this.imagePosition === 'right'
                ? `w-${parseInt(ratio[0])}/${total}` 
                : 'w-full'
        },
        imgHeight() {
            const ratio = this.imageAspectRatio.split(':')
            const total = parseInt(ratio[0]) + parseInt(ratio[1]) 

            let pb = ''

            if(parseInt(ratio[0]) > parseInt(ratio[1])) {
                pb = 100 + ( parseInt(ratio[1]) / total ) * 100
            } else {
                pb = ( parseInt(ratio[0]) / total ) * 100
            }
            return `padding-bottom: ${pb}%`
        },
        contentHeight() {
            if(this.imagePosition === 'left' || this.imagePosition === 'right') {
                return ''
            } else {
                const ratio = this.imageAspectRatio.split(':')
                const total = parseInt(ratio[0]) + parseInt(ratio[1]) 
                const h = 100 - ( parseInt(ratio[0]) / total ) * 100
                return `height: ${h}%`
            }
        }
        
    }
}
</script>