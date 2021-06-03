<template>     
    <div class="lg:p-6 p-4 gap-4 grid lg:grid-cols-3 pt-8">
        <template v-for="i in bars" :key="i">
            <yng-card-bar :color="i" />
        </template>
        <template v-for="i in bars" :key="i">
            <yng-card-bar :color="i" :inverted="true" />
        </template>
    </div>
</template>


<script>

import YngCardBar from '@/components/core/atoms/YngCardBar'

export default {
    components: { 
        YngCardBar,
       
    },
    data() {
        return {
            bars: [ 'primary', 'success', 'info', 'danger', 'warning', 'light', 'plain' ],
        }
    },
}
</script>