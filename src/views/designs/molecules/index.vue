<template>
    <div class="space-y-6">
        <div class="border-b lg:px-6 px-4 pt-8 space-y-6">
            <h3 class="text-xl">Molecules</h3>
            <yng-tab :menu="molecules">
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
    name: 'Molecules',
    components: { 
        YngTab,
        YngRouterLink, 
    },
    data() {
        return {
            show: true,
            molecules: [
                { route: 'moleculeWidgets', done: true, type: 'Widgets',  },
                { route: 'moleculeBars', done: true, type: 'Bars',  },
                { route: 'moleculeCards', done: true, type: 'Cards',  },
                { route: 'moleculeInputs', done: true, type: 'Inputs',  },
                { route: 'moleculeButtons', done: true, type: 'Buttons',  },
                // { route: 'widgets', done: false, type: 'Notification',  },
                // { route: 'widgets', done: false, type: 'Dropdown Menu',  },
                // { route: 'widgets', done: false, type: 'Menu Item' }
            ],
        }
    },
}
</script>