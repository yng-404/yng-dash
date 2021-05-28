<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Organisms</h3>
        <ul class="space-y-2">
            <li v-for="organism in organisms" :key="organism">
                {{ organism }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            organisms: [
                'Hero', 'Call to Action', 'Pricing', 'Menus', 'Navbars', 'Modal', 'Form Groups', 'Pagination', 'Table'
            ]
        }
    }
}
</script>