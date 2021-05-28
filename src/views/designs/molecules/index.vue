<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Moleculess</h3>
        <ul class="space-y-2">
            <li v-for="molecules in moleculess" :key="molecules">
                {{ molecules }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            moleculess: [
                'Cards', 'Notification', 'Dropdown Menu', 'Input Group', 'Menu Item'
            ]
        }
    }
}
</script>