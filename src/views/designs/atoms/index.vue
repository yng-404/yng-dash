<template>
    <div class="lg:p-6 p-4 space-y-6 bg-gray-100">
        <h3 class="text-xl">Atoms</h3>
        
        <ul class="gap-4 flex flex-wrap items-center">
            <li v-for="atom in atoms" :key="atom.type">
                <yng-button-icon :color="atom.done ? 'success' : 'disabled'">
                    <template #icon-left>
                        <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </template>
                    {{ atom.type }}
                </yng-button-icon>
            </li>
        </ul>

        <div class="divide-y divide-gray-100 space-y-8 pt-8 pb-16">

            <div class="gap-4 flex flex-wrap">
                <template v-for="i in toggles" :key="i">
                    <yng-toggle 
                        :toggleType="i.type"
                        :isOpen="i.show"
                        @click="toggle(i.type)"
                    />
                </template>
                <yng-button-exit />
            </div>

            <div class="gap-4 flex flex-wrap pt-8">
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

            <div class="gap-4 grid lg:grid-cols-3 md:grid-cols-2 pt-8">
                <template v-for="i in inputs" :key="i">
                    <yng-input :color="i" :value="i" />
                </template>
            </div>
            

            <div class="gap-4 flex flex-wrap pt-8">
                <yng-menu-item>
                    hahahah
                </yng-menu-item>
            </div>
            <div class="gap-4 grid lg:grid-cols-3 pt-8">
                <template v-for="i in bars" :key="i">
                    <yng-card-bar :color="i" />
                </template>
                <template v-for="i in bars" :key="i">
                    <yng-card-bar :color="i" :inverted="true" />
                </template>
            </div>


            <div class="gap-4 grid lg:grid-cols-4 md:grid-cols-2 pt-8">
                <template v-for="i in blockQuotes" :key="i.type">
                    <yng-block-quote :color="i.type" :borderPosition="i.border">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptariosam? Officia debitis, corrupti, cum consequatur ut deleniti voluptas ab voluptatibus ullam ea illo tempora.
                    </yng-block-quote>
                </template>
            </div>

            <div class="gap-4 grid lg:grid-cols-4 md:grid-cols-2 pt-8">
                <template v-for="i in cards" :key="i">
                    <yng-card 
                        :imagePosition="i" 
                        class="border rounded-md"
                    >
                        {{ i }}
                    </yng-card>
                </template>
            </div>

            <div class="gap-4 grid lg:grid-cols-4 md:grid-cols-2 pt-8">
                <yng-card-basic class="border rounded-md">
                </yng-card-basic>
            </div>

        </div>

    </div>
</template>


<script>

import YngButtonIcon from '../molecules/YngButtonIcon.vue'
import YngBadge from './YngBadge.vue'
import YngCardBar from './YngCardBar.vue'
import YngBlockQuote from './YngBlockQuote.vue'
import YngButton from './YngButton.vue'
import YngButtonExit from './YngButtonExit.vue'
import YngCard from './YngCard.vue'
import YngCardBasic from './YngCardBasic.vue'
import YngToggle from './YngToggle.vue'
import YngTooltip from './YngTooltip.vue'
import YngMenuItem from './YngMenuItem.vue'
import YngInput from './YngInput.vue'

export default {
    components: { 
        YngButton,
        YngTooltip,
        YngToggle,
        YngBadge,
        YngButtonIcon,
        YngBlockQuote,
        YngCard,
        YngCardBasic,
        YngButtonExit,
        YngCardBar,
        YngMenuItem,
        YngInput 
    },
    data() {
        return {
            atoms: [ 
                { type: 'Toggles', done: true }, 
                { type: 'Buttons', done: true }, 
                { type: 'Badges', done: true }, 
                { type: 'Tooltips', done: true }, 
                { type: 'block Quote',  done: true },
                { type: 'Cards', done: true },
                { type: 'Inputs', done: true },
                { type: 'Sizes',  done: true },
                { type: 'Bars',  done: true },
                { type: 'Typography', done: false }, 
                { type: 'Icons', done: false }, 
                { type: 'Colors', done: false }, 
                { type: 'Images', done: false }, 
                { type: 'Tables',  done: false },
                { type: 'Tab Items',  done: false },
                { type: 'Animations',  done: false },
            ],
            buttons: [ 'primary', 'success', 'info', 'danger', 'warning', 'dark', 'secondary', 'disabled', 'light', ],
            bars: [ 'primary', 'success', 'info', 'danger', 'warning', 'light', ],
            blockQuotes: [ 
                { border: 'left', type: 'success', }, 
                { border: 'top', type: 'info', }, 
                { border: 'bottom', type: 'danger', }, 
                { border: 'right', type: 'warning', }, 
            ],
            inputs: [ 'base', 'disabled', 'error', 'success' ],
            tooltips: [ 'up', 'down', 'left', 'right', ],
            toggles: [
                { type: 'arrow', show: false, },
                { type: 'plus', show: false, },
            ],
            cards: [ 'top', 'bottom', 'left', 'right', ],
            typography: [ 'main heading (h1)', 'heading (h2)', 'subheading', 'subtitle', 'title', 'caption', 'content', 'subcontent', 'link' ]
        }
    },
    methods: {
        toggle(type) {
            this.toggles.find(el => el.type === type).show = ! this.toggles.find(el => el.type === type).show
        }
    }
}
</script>