<template>    
    <the-container>
        <template v-slot="{ item }">
            <yng-badge :color="item.i" :size="item.j">
                {{ item.i }}
            </yng-badge>
        </template>
    </the-container>
</template>


<script>

import YngBadge from '@/components/core/atoms/YngBadge'
import TheContainer from '@/components/layout/TheContainer.vue'

export default {
    components: { 
        YngBadge,
        TheContainer,
       
    }
}
</script>