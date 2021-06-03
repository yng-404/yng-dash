<template>
    <div 
        :class="[imgPosition, imgHeight]"
        class="flex border divide-gray-300 rounded-md border-gray-300 overflow-hidden relative bg-white">
        <div 
            :class="[imgWidth, imgHeight]" class="relative flex-shrink-0 border-12 border-transparent" :style="imgAspectRatio">
            <img v-if="image" :src="image" alt="" class="absolute rounded-md h-full w-full object-fill opacity-10" />
        </div>
        <div 
            :class="contentHeight"
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
            default: '1:1'
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
        imgAspectRatio() {
            const ratio = this.imageAspectRatio.split(':')
            const pb = ( parseInt(ratio[1]) / parseInt(ratio[0])) * 100
            return `padding-bottom: ${pb}%`
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