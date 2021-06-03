<template>
    <div class="lg:p-6 p-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2 pt-8">
        <template v-for="i in inputs" :key="i">
            <yng-input :color="i" :value="i" placeholder="Input text here..." />
        </template>
    </div>
</template>

<script>

import YngInput from '@/components/core/atoms/YngInput'

export default {
    components: {
        YngInput,
    },
    data() {
        return {
            inputs: [ 'base', 'disabled', 'error', 'success' ],
        }
    }
}
</script>
