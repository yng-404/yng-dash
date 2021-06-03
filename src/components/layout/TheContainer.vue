<template>
    <div v-for="j in levelOne" :key="j" class="pt-8 space-y-4">
        <h4 class="text-sm font-mono tracking-widest space-x-3">
            <span>{{ j }}</span>
            <yng-badge v-if="j === 'base'" color="info" size="sm">default</yng-badge>
        </h4>
        <div class="gap-4 flex flex-wrap">  
            <template v-for="(i, k) in levelTwo" :key="k">
                <slot :item="{ i, j }"></slot>
            </template>
        </div>
    </div>
</template>


<script>

import YngBadge from '@/components/core/atoms/YngBadge'

export default {
    components: {
        YngBadge
    },
    props: {
        levelOne: {
            default: [ 'sm', 'base', 'md', 'lg', 'xl' ],
        },
        levelTwo: {
            default: [ 'primary', 'success', 'info', 'danger', 'warning', 'dark', 'secondary', 'disabled', 'light', ]
        }
    }
}
</script>