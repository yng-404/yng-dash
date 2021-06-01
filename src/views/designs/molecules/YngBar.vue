<template>
    <yng-card-bar
        :color="color" 
        :inverted="inverted"
        :size="size"
        :customSize="customSize"
        :customColor="customColor"
        >
        <div class="flex space-x-2 items-start">
            <slot>
                <svg class="w-6 h-6 flex-shrink-0 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </slot>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, non ipsam laudantium earum nisi ab libero consectetur temporibus nobis, ducimus explicabo.</p>
        </div>
        <yng-button-exit 
            @click.prevent="$emit('exit')"
            :inverted="inverted" 
        />
    </yng-card-bar>
</template>

<script>

import YngButtonExit from '../atoms/YngButtonExit.vue'
import YngCardBar from '../atoms/YngCardBar.vue'

export default {
    components: { 
        YngButtonExit,
        YngCardBar 
    },
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
        customSize: {
            default: null
        },
        inverted: {
            default: false,
        }
    },
}
</script>