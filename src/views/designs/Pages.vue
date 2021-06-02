<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Pages</h3>
        <ul class="space-y-2">
            <li v-for="page in pages" :key="page">
                {{ page }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            pages: [
                'Landing Page', 'Dashboard', 'Checkout Page', 'Fallback Page', 'Login Page', 'Register Page'
            ]
        }
    }
}
</script>