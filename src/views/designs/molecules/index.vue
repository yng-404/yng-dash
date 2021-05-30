<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Molecules</h3>

        <ul class="gap-4 flex flex-wrap items-center">
            <li v-for="molecule in molecules" :key="molecule">
                {{ molecule }}
            </li>
        </ul>

        <div class="gap-4 flex flex-wrap" ref="aaaa">
            <div v-for="i in buttonGroups" :key="i.label" class="flex relative">
                <yng-button-icon 
                    @click="showCode(i.label)" 
                    :color="i.color"
                    >
                    {{ i.label }}
                    <template #icon-right>
                        <span v-html="i.icon" class="opacity-60"></span>
                    </template>
                </yng-button-icon>
            </div>
        </div>

    </div>
</template>


<script>

import YngButtonIcon from './YngButtonIcon.vue'
export default {
    components: { 
        YngButtonIcon 
    },
    data() {
        return {
            show: true,
            molecules: [
                'Cards', 'Notification', 'Dropdown Menu', 'Input Group', 'Menu Item'
            ],
            buttonGroups: [ 
                { 
                    color: 'danger', 
                    label: 'delete',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>` 
                }, 
                { 
                    color: 'info', 
                    label: 'edit',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>` 
                }, 
                { 
                    color: '', 
                    label: 'save',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>` 
                }, 
                { 
                    color: 'secondary', 
                    label: 'exit',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>` 
                }, 
                { 
                    color: 'info', 
                    label: 'like',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>` 
                }, 
                { 
                    color: 'warning', 
                    label: 'reset',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>` 
                }, 
                { 
                    color: 'dark', 
                    label: 'refresh',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>` 
                }, 
                { 
                    color: 'secondary', 
                    label: 'ignore',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>` 
                }, 
            ]
        }
    },
    methods: {
        showCode(i) {
            this.printed = this.$refs[i]
        }
    }
}
</script>