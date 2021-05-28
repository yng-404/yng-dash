<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Atoms</h3>
        <ul class="space-y-2">
            <li v-for="atom in atoms" :key="atom">
                {{ atom }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            atoms: [
                'Typography', 'Button', 'Form Elements', 'Icons', 'Colors', 'Badge', 'Tooltip', 'Toggles', 'Images', 'Table'
            ]
        }
    }
}
</script>