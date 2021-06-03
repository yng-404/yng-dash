<template>     
    <div class="lg:p-6 p-4 gap-x-4 gap-y-12 grid md:grid-cols-3 pt-8">
        <template v-for="(i, j) in progress" :key="i">
            <yng-progress :color="i" :progress="`${(8 - j)*10}%`" />
        </template>
        <template v-for="(i, j) in progress" :key="i">
            <yng-progress :size="sizes[j]" :progress="`${(j + 1)*10}%`" color="light" />
        </template>
    </div>
</template>


<script>

import YngProgress from '@/components/core/atoms/YngProgress.vue'

export default {
    components: { 
        YngProgress,
       
    },
    data() {
        return {
            sizes: [ 'sm', 'base', 'md', 'lg', 'xl' ],
            progress: [ 'primary', 'success', 'danger', 'warning', 'light', ],
        }
    },
}
</script>