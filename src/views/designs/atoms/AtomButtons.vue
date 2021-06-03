<template>
    <the-container>
        <template v-slot="{ item } ">
            <yng-button :color="item.i" :size="item.j">
                {{ item.i }}
            </yng-button>
        </template>
    </the-container>
</template>

<script>

import YngButton from '@/components/core/atoms/YngButton'
import TheContainer from '@/components/layout/TheContainer.vue'

export default {
    components: {
        YngButton,
        TheContainer
    },
}
</script>
