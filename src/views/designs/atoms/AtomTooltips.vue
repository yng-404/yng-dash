<template>    
    <the-container :levelTwo="tooltips">
        <template v-slot="{ item } ">
            <yng-tooltip :arrow="item.i" :size="item.j" class="relative">
                {{ item.i }} tooltip
            </yng-tooltip>
        </template>
    </the-container>
</template>


<script>

import YngTooltip from '@/components/core/atoms/YngTooltip'
import TheContainer from '@/components/layout/TheContainer.vue'

export default {
    components: { 
        YngTooltip,
        TheContainer
    },
    data() {
        return {
            tooltips: [ 'up', 'down', 'left', 'right', ],
        }
    },
}
</script>