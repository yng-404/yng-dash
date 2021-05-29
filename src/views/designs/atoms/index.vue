<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Atoms</h3>
        
        <ul class="gap-4 flex flex-wrap items-center">
            <li v-for="atom in atoms" :key="atom">
                {{ atom }}
            </li>
        </ul>

        <div class="gap-4 flex flex-wrap">
            <template v-for="i in buttons" :key="i">
                <yng-button :btnColor="i">
                    {{ i }}
                </yng-button>
            </template>
        </div>

        <div class="gap-4 flex flex-wrap">
            <template v-for="i in tooltips" :key="i">
                <yng-tooltip :arrow="i">
                    {{ i }} tooltip
                </yng-tooltip>
            </template>
        </div>
    </div>
</template>


<script>

import YngButton from './YngButton.vue'
import YngTooltip from './YngTooltip.vue'

export default {
    components: { 
        YngButton,
        YngTooltip 
    },
    data() {
        return {
            atoms: [
                'Typography', 
                'Buttons', 
                'Form Elements', 
                'Icons', 
                'Colors', 
                'Badges', 
                'Tooltips', 
                'Toggles', 
                'Images', 
                'Tables'
            ],
            buttons: [
                'primary',
                'success',
                'info',
                'danger',
                'warning',
                'dark',
                'secondary',
                'light',
            ],
            tooltips: [
                'up',
                'down',
                'left',
                'right',
            ]
        }
    }
}
</script>