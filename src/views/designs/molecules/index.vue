<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Molecules</h3>

        <ul class="gap-4 flex flex-wrap items-center">
            <li v-for="molecule in molecules" :key="molecule.type">
                <yng-button-icon :color="molecule.done ? 'success' : 'disabled'">
                    <template #icon-left>
                        <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </template>
                    {{ molecule.type }}
                </yng-button-icon>
            </li>
        </ul>

        <div class="divide-y divide-gray-100 space-y-8 pt-8">

            <div class="gap-4 flex flex-wrap pt-8">
                <template v-for="i in buttonGroups" :key="i.label">
                    <yng-button-icon 
                        @click="showCode(i.label)" 
                        :color="i.color"
                        >
                        <template v-if="i.left" #icon-left>
                            <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </template>
                        {{ i.label }}
                        <template #icon-right>
                            <span v-if="i.right" v-html="i.icon" class="opacity-60"></span>
                        </template>
                    </yng-button-icon>
                </template>
            </div>


            <div class="grid gap-4 lg:grid-cols-4 pt-8">
                <yng-input-icon-plus label="Password" error="Invalid password!">
                    <template #icon-left>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </template>
                    <template #icon-right>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </template>
                </yng-input-icon-plus>


                <yng-input-icon-plus label="Email Address">
                    <template #icon-left>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>                    
                    </template>
                    <template #icon-right>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </template>
                </yng-input-icon-plus>

                <yng-input-icon>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>                    
                </yng-input-icon>

            </div>

        </div>

    </div>
</template>


<script>

import YngButtonIcon from './YngButtonIcon.vue'
import YngInputIcon from './YngInputIcon.vue'
import YngInputIconPlus from './YngInputIconPlus.vue'

export default {
    components: { 
        YngButtonIcon,
        YngInputIcon,
        YngInputIconPlus,
    },
    data() {
        return {
            show: true,
            molecules: [
                { done: true, type: 'Button Icon',  },
                { done: true, type: 'Input Group',  },
                { done: false, type: 'Cards',  },
                { done: false, type: 'Notification',  },
                { done: false, type: 'Dropdown Menu',  },
                { done: false, type: 'Menu Item' }
            ],
            buttonGroups: [ 
                { 
                    color: 'danger', 
                    left: false,
                    right: true,
                    label: 'delete',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>` 
                }, 
                { 
                    color: 'info', 
                    left: true,
                    right: true,
                    label: 'edit',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>` 
                }, 
                { 
                    color: '', 
                    left: false,
                    right: true,
                    label: 'save',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>` 
                }, 
                { 
                    color: 'secondary', 
                    left: true,
                    right: true,
                    label: 'exit',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>` 
                }, 
                { 
                    color: 'info', 
                    left: true,
                    right: true,
                    label: 'like',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>` 
                }, 
                { 
                    color: 'warning', 
                    left: true,
                    right: true,
                    label: 'reset',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>` 
                }, 
                { 
                    color: 'dark', 
                    left: false,
                    right: true,
                    label: 'refresh',
                    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>` 
                }, 
                { 
                    color: 'secondary', 
                    left: false,
                    right: true,
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