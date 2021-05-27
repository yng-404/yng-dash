<template>
    <div class="flex items-center justify-between w-full">
        <h3 class="lg:w-auto whitespace-nowrap">
            <slot></slot>
        </h3>
        <div class="flex items-center justify-end space-x-2 w-full">
            <div class="relative xl:w-1/3 flex items-center">
                <input type="text" name="" id="" class="pl-4 pr-8 py-1 border w-full rounded-lg focus:ring-2 focus:outline-none" placeholder="Search here...">
                <svg class="w-5 h-5 opacity-20 absolute right-0 transform rotate-90 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button class="p-1 rounded-md hover:bg-gray-50 focus:outline-none">
                <svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>