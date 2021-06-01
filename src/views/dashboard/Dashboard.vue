<template>
    <div class="space-y-4 lg:p-6 p-4">
        <h2 class="text-xl tracking-wider">Welcome</h2>
        <section class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <dashboard-card v-for="i in 8" :key="i" />
        </section>
    </div>
</template>

<script>

import DashboardCard from './components/DashboardCard.vue'

export default {
    name: 'Dashboard',
    components: { 
        DashboardCard 
    },
}
</script>
