<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Atoms</h3>
        
        <ul class="gap-4 flex flex-wrap items-center">

            <li v-for="atom in atoms" :key="atom.type">
                <yng-button-icon :color="atom.done ? 'success' : 'light'">
                    <template #icon-left>
                        <svg class="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </template>
                    {{ atom.type }}
                </yng-button-icon>
            </li>
        </ul>

        <div class="divide-y divide-gray-100 space-y-8 pt-8">
            <div class="gap-4 flex flex-wrap">
                <template v-for="i in buttons" :key="i">
                    <yng-button :color="i">
                        {{ i }}
                    </yng-button>
                </template>
            </div>
            
            <div class="gap-4 flex flex-wrap pt-8">
                <template v-for="i in buttons" :key="i">
                    <yng-badge :color="i">
                        {{ i }}
                    </yng-badge>
                </template>
            </div>

            <div class="gap-4 flex flex-wrap pt-8">
                <template v-for="i in tooltips" :key="i">
                    <yng-tooltip :arrow="i" class="relative">
                        {{ i }} tooltip
                    </yng-tooltip>
                </template>
            </div>

            <div class="gap-4 flex flex-wrap pt-8">
                <template v-for="i in toggles" :key="i">
                    <yng-toggle 
                        :toggleType="i.type"
                        :isOpen="i.show"
                        @click="toggle(i.type)"
                    />
                </template>
            </div>

        </div>

    </div>
</template>


<script>


import YngButtonIcon from '../molecules/YngButtonIcon.vue'
import YngBadge from './YngBadge.vue'
import YngButton from './YngButton.vue'
import YngToggle from './YngToggle.vue'
import YngTooltip from './YngTooltip.vue'

export default {
    components: { 
        YngButton,
        YngTooltip,
        YngToggle,
        YngBadge,
        YngButtonIcon 
    },
    data() {
        return {
            atoms: [ 
                { type: 'Typography', done: false }, 
                { type: 'Buttons', done: true }, 
                { type: 'Form Elements', done: false },
                { type: 'Icons', done: false }, 
                { type: 'Colors', done: false }, 
                { type: 'Badges', done: true }, 
                { type: 'Tooltips', done: true }, 
                { type: 'Toggles', done: true }, 
                { type: 'Images', done: false }, 
                { type: 'Tables',  done: false },
                { type: 'Scale',  done: false },
            ],
            buttons: [ 'primary', 'success', 'info', 'danger', 'warning', 'dark', 'secondary', 'light', ],
            tooltips: [ 'up', 'down', 'left', 'right', ],
            toggles: [
                { type: 'arrow', show: false, },
                { type: 'plus', show: false, },
            ]
        }
    },
    methods: {
        toggle(type) {
            this.toggles.find(el => el.type === type).show = ! this.toggles.find(el => el.type === type).show
        }
    }
}
</script>