<template>
    <header class="h-14 border-b py-3 flex items-center justify-between sticky top-0 bg-white z-10">
        <nav class="flex items-center">
            <button 
                @click="$emit('toggleMenu')"
                :class="isMenuOpen? 'hidden' : ''"
                class="lg:hidden py-3 w-14 h-14 flex justify-center items-center focus:outline-none">
                <svg class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <h1 :class="isMenuOpen? 'lg:px-6 px-4' : 'lg:px-6'" class="text-xl -mt-2.5 font-light tracking-widest flex items-center">
                yng<span class="font-bold text-sm mt-1.5 text-red-700">DASH</span>
            </h1>
        </nav>
        <div class="px-6 flex items-center space-x-6">
            <div class="border-r px-6 flex items-center space-x-4">
                <svg class="w-6 h-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <svg class="w-6 h-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                <svg class="w-6 h-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                <svg class="w-6 h-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <a href="https://github.com/yng-404/yng-dash" target="_blank">
                <svg class="w-7 h-7 text-gray-500 fill-current opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 31.21"><title>Untitled-1</title><path d="M16,.4a16,16,0,0,0-5.06,31.18c.8.14,1.09-.35,1.09-.77s0-1.39,0-2.73c-4.45,1-5.39-2.14-5.39-2.14A4.2,4.2,0,0,0,4.85,23.6c-1.46-1,.11-1,.11-1a3.36,3.36,0,0,1,2.45,1.65,3.41,3.41,0,0,0,4.65,1.33,3.42,3.42,0,0,1,1-2.14c-3.55-.41-7.29-1.78-7.29-7.91a6.17,6.17,0,0,1,1.65-4.29A5.7,5.7,0,0,1,7.6,7S8.94,6.6,12,8.67a15.12,15.12,0,0,1,8,0C23.06,6.6,24.4,7,24.4,7a5.75,5.75,0,0,1,.16,4.24,6.13,6.13,0,0,1,1.65,4.29c0,6.15-3.74,7.5-7.31,7.89a3.81,3.81,0,0,1,1.09,3c0,2.14,0,3.86,0,4.39s.29.92,1.1.77A16,16,0,0,0,16,.4Z" transform="translate(0 -0.4)" style="fill:#191717;fill-rule:evenodd"/></svg>
            </a>
        </div>
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