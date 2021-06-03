<template>
    <div :class="[defaultColor, cardHeight]" class="text-sm tracking-wider relative bg-white rounded-md overflow-hidden flex w-full">
        <div :class="[
                imgSize, 
                iconPosition,
                iconDisplay === 'full'? `${iconColor} bg-opacity-20` : ''
            ]" 
            class="sm:p-3 p-2.5 flex-shrink-0 flex items-center justify-center ">
            <div :class="iconDisplay === 'offset'? `${iconColor} bg-opacity-20 rounded-md p-2.5` : ''" class="opacity-50 w-full h-full">
                <slot name="icon">
                    <svg class="fill-current w-full h-full rounded-md"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419.08 354"><title>13_store</title><path d="M129.08,281.54H81.58a10,10,0,0,0-10,10v45a10,10,0,0,0,10,10h47.5a10,10,0,0,0,10-10v-45A10,10,0,0,0,129.08,281.54Zm-10,45H91.58v-25h27.5Z" transform="translate(0 -32.54)" /><path d="M336.58,281.54h-47.5a10,10,0,0,0-10,10v45a10,10,0,0,0,10,10h47.5a10,10,0,0,0,10-10v-45A10,10,0,0,0,336.58,281.54Zm-10,45h-27.5v-25h27.5Z" transform="translate(0 -32.54)" /><path d="M419.08,177.54a10,10,0,0,0-2.86-7c-9.78-25.76-49-105-58.85-131.48A10,10,0,0,0,348,32.54H70.17a10,10,0,0,0-9.37,6.52C51,65.57,10.83,146.57.62,174.06a10.12,10.12,0,0,0-.54,4.77v43.71a10,10,0,0,0,10,10,47.18,47.18,0,0,0,21.5-4.62V376.54a10,10,0,0,0,10,10h335a10,10,0,0,0,10-10V227.44a47.41,47.41,0,0,0,22.5,5.1,10,10,0,0,0,10-10Zm-25.51-10H336.51C331,144,310.05,73.45,305,52.54h36.07C350.49,76.86,385.52,147.58,393.57,167.54Zm-203-115h37c1.79,22.69,8.78,93.24,10.5,115h-58C181.79,145.78,188.78,75.22,190.57,52.54Zm67.6,115h0c-1.79-22.67-8.78-93.23-10.5-115h36.79c5.51,23.56,26.46,94.09,31.49,115Zm-98.17,0H102.22c5-20.9,26-91.44,31.49-115H170.5C168.77,74.31,161.79,144.86,160,167.54Zm-82.93-115h36.08c-5,20.92-26,91.44-31.49,115H24.59C32.65,147.58,67.67,76.86,77.07,52.54Zm102,314v-96h60v96Zm80,0v-106a10,10,0,0,0-10-10h-80a10,10,0,0,0-10,10v106H51.58v-144c6.5.22,9.65,1.79,13.88,3.91,5.39,2.7,12.09,6.06,24.43,6.06s19-3.36,24.44-6.06c4.56-2.29,7.86-3.94,15.46-3.94s10.91,1.65,15.47,3.94c5.39,2.7,12.09,6.06,24.44,6.06s19-3.36,24.43-6.06c4.56-2.29,7.86-3.94,15.47-3.94s10.9,1.65,15.46,3.94c5.39,2.7,12.09,6.06,24.43,6.06s19.05-3.36,24.43-6.06c4.57-2.29,7.86-3.94,15.47-3.94s10.9,1.65,15.47,3.94c5.38,2.7,12.09,6.06,24.43,6.06s19-3.36,24.43-6.06c4-2,7-3.52,12.87-3.87V366.54Zm110.11-164c-12.34,0-19.05,3.36-24.44,6.06-4.56,2.29-7.86,3.94-15.46,3.94s-10.91-1.65-15.47-3.94c-5.39-2.7-12.09-6.06-24.43-6.06S270.34,205.9,265,208.6c-4.56,2.29-7.86,3.94-15.47,3.94s-10.9-1.65-15.47-3.94c-5.38-2.7-12.09-6.06-24.43-6.06s-19,3.36-24.43,6.06c-4.56,2.29-7.86,3.94-15.47,3.94s-10.9-1.65-15.47-3.94c-5.38-2.7-12.09-6.06-24.43-6.06s-19,3.36-24.43,6.06c-4.56,2.29-7.86,3.94-15.47,3.94S79,210.89,74.42,208.6C69,205.9,62.33,202.54,50,202.54s-19,3.36-24.44,6.06a45.22,45.22,0,0,1-5.47,2.46V187.54h379v23.52a46.65,46.65,0,0,1-5.47-2.46C388.23,205.9,381.53,202.54,369.19,202.54Z" transform="translate(0 -32.54)" /><path d="M129.08,249.54H81.58a10,10,0,1,0,0,20h47.5a10,10,0,0,0,0-20Z" transform="translate(0 -32.54)" /><path d="M336.58,249.54h-47.5a10,10,0,0,0,0,20h47.5a10,10,0,0,0,0-20Z" transform="translate(0 -32.54)" /></svg>
                </slot>
            </div>
        </div>
        <div :class="iconDisplay === 'full' || iconPlacement !== 'left' ? 'px-4' : 'px-1'" 
            class="truncate py-3 flex-1 order-2 h-full flex flex-col justify-center">
            <h3 class="tracking-widest-2 uppercase font-medium truncate">
                <slot name="heading">Heading</slot>
            </h3>
            <p class="tracking-widest font-light truncate">
                <slot name="subHeading">Subheading...</slot>
            </p>
            <span class="text-xs tracking-widest opacity-70">
                <slot name="footnote"></slot>
            </span>
        </div>
    </div>
    
</template>

<script>

import { barColor, progressColor } from '../refs/yng-colors'

export default {
    props: {
        color: {
            default: 'danger'
        },
        size: {
            default: 'base'
        },
        customColor: {
            default: null
        },
        inverted: {
            default: true,
        },
        iconPlacement: {
            default: 'left'
        },
        iconDisplay: {
            default: 'full'
        }
    },
    computed: {
        iconColor() {
            return this.inverted
                ? 'bg-white'
                : progressColor[this.color] || ''
        },
        
        defaultColor() {
            return this.customColor 
                ? this.customColor 
                : this.inverted 
                    ? barColor.inverted[this.color] || ''
                    : barColor.normal[this.color] || ''
        },
        cardAspectRatio() {
            const ratio = this.aspectRatio.split(':')
            const pb = ( parseInt(ratio[1]) / parseInt(ratio[0])) * 100
            return `padding-bottom: ${pb}%`
        },
        imgSize() {
            return {
                sm:     'w-20 h-20',
                base:   'w-24 h-24',
                md:     'w-32 h-32',
                lg:     'w-40 h-40',
                xl:     'w-52 h-52',
            }[this.size]
        },
        cardHeight() {
            return {
                sm:     'h-20',
                base:   'h-24',
                md:     'h-32',
                lg:     'h-40',
                xl:     'h-52',
            }[this.size]
        },
        iconPosition() {
            return this.iconPlacement === 'right' ? 'order-3' : ''
        },
    }
}
</script>