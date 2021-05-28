<template>
    <aside :class="{ 'w-20 border-r' : isOpen }" class="lg:flex hidden flex-col justify-between items-center">
        <nav :class="{ 'lg:flex ' : isOpen }"  class="hidden p-4 flex-col items-center">
            <ul class="space-y-5">
                <li class="">
                   <a href="#" class="rounded-lg bg-gray-50 hover:bg-gray-100 p-2 inline-flex">
                        <svg class="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </a> 
                </li>
                <li class="">
                   <a href="#" class="rounded-lg bg-gray-50 hover:bg-gray-100 p-2 inline-flex">
                        <svg class="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </a> 
                </li>
                <li class="">
                   <a href="#" class="rounded-lg bg-gray-50 hover:bg-gray-100 p-2 inline-flex">
                        <svg class="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    </a> 
                </li>
                <li class="">
                   <a href="#" class="rounded-lg bg-gray-50 hover:bg-gray-100 p-2 inline-flex">
                       <svg class="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                    </a> 
                </li>
                <li class="">
                   <a href="#" class="rounded-lg bg-gray-50 hover:bg-gray-100 p-2 inline-flex">
                        <svg class="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </a> 
                </li>
            </ul>
        </nav>
        <div class="p-4 py-5 z-10" :class="{ 'fixed bottom-0 left-0' : !isOpen }">
            <button @click="isOpen = !isOpen" class="focus:outline-none p-2 rounded-md hover:bg-gray-200">
                <svg v-show="isOpen" class="w-6 h-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                <svg v-show="!isOpen" class="w-6 h-6 opacity-50 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
            </button>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            isOpen: true
        }
    }
}
</script>