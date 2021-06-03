<template>
    <div class="gap-4 grid lg:grid-cols-3 pt-8">
        <template v-for="i in bars" :key="i">
            <yng-bar :color="i" />
        </template>
        <template v-for="i in bars" :key="i">
            <yng-bar :color="i" :inverted="true" />
        </template>
    </div>
</template>


<script>

import YngBar from '@/components/core/molecules/YngBar'

export default {
    components: { 
        YngBar,
    },
    data() {
        return {
            bars: [ 'primary', 'success', 'info', 'danger', 'warning', 'light', ],
        }
    },
}
</script>