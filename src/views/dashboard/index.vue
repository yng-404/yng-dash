<template>
    <div class="h-screen w-full flex ">
        <nav-external-link />
        <nav-dashboard 
            :isMenuOpen="isMenuOpen"
            @toggleMenu="isMenuOpen = !isMenuOpen" 
        />
        <div class="w-full h-full overflow-auto">
            <nav-header 
                :isMenuOpen="isMenuOpen"
                @toggleMenu="isMenuOpen = !isMenuOpen" 
            />
            <main class="overflow-auto">
                <router-view />
            </main>
            <nav-footer />
        </div>
    </div>
</template>


<script>

import NavDashboard from '@/components/layout/NavDashboard.vue'
import NavExternalLink from '@/components/layout/NavExternalLink.vue'
import NavFooter from '@/components/layout/NavFooter.vue'
import NavHeader from '@/components/layout/NavHeader.vue'

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