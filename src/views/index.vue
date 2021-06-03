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
            <main class="overflow-auto bg-gradient-to-tr h-full from-gray-100 to-gray-50">
                <router-view />
            </main>
            <nav-footer />
        </div>
    </div>
</template>


<script>

import NavDashboard from '@/components/nav/NavDashboard'
import NavExternalLink from '@/components/nav/NavExternalLink'
import NavFooter from '@/components/nav/NavFooter'
import NavHeader from '@/components/nav/NavHeader'

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