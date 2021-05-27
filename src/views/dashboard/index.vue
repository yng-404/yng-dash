<template>
    <div class="h-screen w-full flex">
        <nav-external-link />
        <nav-dashboard 
            :isMenuOpen="isMenuOpen"
            @toggleMenu="isMenuOpen = !isMenuOpen" 
        />
        <main class="flex-1 w-full h-full">
            <nav-header 
                :isMenuOpen="isMenuOpen"
                @toggleMenu="isMenuOpen = !isMenuOpen" 
            />
            <div class="lg:p-6 p-4">
                <router-view />
            </div>
        </main>
        <nav-footer />
    </div>
</template>


<script>

import NavDashboard from '../../components/NavDashboard.vue'
import NavExternalLink from '../../components/NavExternalLink.vue'
import NavFooter from '../../components/NavFooter.vue'
import NavHeader from '../../components/NavHeader.vue'

export default {
    components: { 
        NavExternalLink,
        NavDashboard,
        NavFooter,
        NavHeader,
    },
    data() {
        return {
            isMenuOpen: false,
        }
    }
    
}
</script>