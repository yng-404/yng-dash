<template>
    <header class="h-14 border-b py-3 flex items-center">
        <nav class="flex items-center">
            <button 
                @click="$emit('toggleMenu')"
                :class="isMenuOpen? 'hidden' : ''"
                class="lg:hidden py-3 w-14 h-14 flex justify-center items-center focus:outline-none">
                <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <h1 :class="isMenuOpen? 'lg:px-6 px-4' : 'lg:px-6'">Home</h1>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        isMenuOpen: {
            default: true
        }
    }
}
</script>