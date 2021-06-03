<template>
    <yng-card-bar
        class="relative overflow-hidden"
        :style="cardAspectRatio"
    >
        <div :class="titleX" class="absolute opacity-75 text-5xl md:px-6 px-3 md:py-4 py-2.5">
            <slot></slot>
        </div>
        <div :class="iconX" class="absolute md:px-6 px-3 md:py-4 py-2.5 opacity-30">
            <slot name="icon"></slot>
        </div>
        <div class="absolute bottom-0 inset-x-0 md:py-4 py-2.5 md:px-6 px-3 w-full">
            <h3 class="tracking-widest-2 uppercase font-medium truncate">
                <slot name="heading"></slot>
            </h3>
            <p class="tracking-widest font-light truncate">
                <slot name="subHeading"></slot>
            </p>
            <slot name="progress">
                <yng-progress 
                    :progress="progress"
                    :size="progressSize" 
                />
            </slot>
            <span class="text-xs tracking-widest opacity-70 truncate">
                <slot name="footnote"></slot>
            </span>
        </div>
    </yng-card-bar>
    
</template>

<script>

import YngCardBar from '../atoms/YngCardBar.vue'
import YngProgress from '../atoms/YngProgress.vue'

export default {
    components: { YngCardBar, YngProgress },
    props: {
        progressSize: {
            default: 'base'
        },
        progress: {
            default: '75%'
        },
        aspectRatio: {
            default: '4:3'
        },
        iconPlacement: {
            default: 'right'
        }
    },
    computed: {
        cardAspectRatio() {
            const ratio = this.aspectRatio.split(':')
            const pb = ( parseInt(ratio[1]) / parseInt(ratio[0])) * 100
            return `padding-bottom: ${pb}%`
        },
        iconX() {
            return {
                right: 'right-0',
                left: 'left-0'
            }[this.iconPlacement]
        },
        titleX() {
            return {
                right: 'left-0',
                left: 'right-0'
            }[this.iconPlacement]
        }
    }
}
</script>