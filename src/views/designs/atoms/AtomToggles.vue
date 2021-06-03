<template>     
    <div class="lg:p-6 p-4 gap-4 flex flex-wrap">
        <template v-for="i in toggles" :key="i">
            <yng-toggle 
                :toggleType="i.type"
                :isOpen="i.show"
                @click="toggle(i.type)"
            />
        </template>
        <yng-button-exit />
    </div>
</template>


<script>

import YngButtonExit from '@/components/core/atoms/YngButtonExit'
import YngToggle from '@/components/core/atoms/YngToggle'

export default {
    components: { 
        YngButtonExit,
        YngToggle,
    },
    data() {
        return {
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