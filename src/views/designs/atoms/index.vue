<template>
    <div class="space-y-6">
        <div class="border-b lg:px-6 px-4 pt-8 space-y-6">
            <h3 class="text-xl">Atoms</h3>
            <yng-tab :menu="atoms">
                <template v-slot="{ menuItem }">
                    <yng-router-link :name="menuItem.route">
                        {{ menuItem.type }}
                    </yng-router-link>
                </template>
            </yng-tab>
        </div>
        <section class="lg:p-6 p-4">
            <router-view />
        </section>
    </div>
</template>

<script>

import YngTab from '@/components/core/organisms/YngTab.vue'
import YngRouterLink from '@/components/core/atoms/YngRouterLink.vue'

export default {
    name: 'Atoms',
    components: { 
        YngTab,
        YngRouterLink, 
    },
    data() {
        return {
            atoms: [ 
                { route: 'atomButtons', type: 'Buttons', done: true }, 
                { route: 'atomBadges', type: 'Badges', done: true }, 
                { route: 'atomTooltips', type: 'Tooltips', done: true }, 
                { route: 'atomProgress', type: 'Progress',  done: true },
                { route: 'atomBlockQuotes', type: 'Block Quote',  done: true },
                { route: 'atomCards', type: 'Cards', done: true },
                { route: 'atomToggles', type: 'Toggles', done: true }, 
                { route: 'atomBars', type: 'Bars',  done: true },
                { route: 'atomInputs', type: 'Inputs', done: true },
                // { route: '', type: 'Sizes',  done: true },
                // { route: '', type: 'Colors', done: true }, 
                // { route: '', type: 'Typography', done: false }, 
                // { route: '', type: 'Icons', done: false }, 
                // { route: '', type: 'Images', done: false }, 
                // { route: '', type: 'Tables',  done: false },
                // { route: '', type: 'Tab Items',  done: false },
                // { route: '', type: 'Animations',  done: false },
            ],
        }
    },
}
</script>