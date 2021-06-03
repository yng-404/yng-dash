<template>
    <div class="lg:p-6 p-4 gap-4 grid lg:grid-cols-4 md:grid-cols-2 pt-8">
        <template v-for="i in blockQuotes" :key="i.type">
            <yng-block-quote 
                :color="i.type" 
                :borderPosition="i.border"
                class="bg-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptariosam? Officia debitis, corrupti, cum consequatur ut deleniti voluptas ab voluptatibus ullam ea illo tempora.
            </yng-block-quote>
        </template>
    </div>
</template>

<script>

import YngBlockQuote from '@/components/core/atoms/YngBlockQuote'

export default {
    components: {
        YngBlockQuote,
    },
    data() {
        return {
            blockQuotes: [ 
                { border: 'left', type: 'success', }, 
                { border: 'top', type: 'info', }, 
                { border: 'bottom', type: 'danger', }, 
                { border: 'right', type: 'warning', }, 
            ],
        }
    }
}
</script>
