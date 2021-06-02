<template>
    <div class="lg:p-6 p-4 space-y-6">
        <h3 class="text-xl">Templates</h3>
        <ul class="space-y-2">
            <li v-for="template in templates" :key="template">
                {{ template }}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            templates: [
                'Header', 'Footer', 'Sidebar', 'Main Page', 'Login Form', 'Registration Form'
            ]
        }
    }
}
</script>