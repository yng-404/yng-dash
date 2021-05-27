<template>
    <div class="flex items-center justify-between w-full">
        <h3 class=" whitespace-nowrap">
            <slot></slot>
        </h3>
        <div class="flex items-center justify-end space-x-4 w-full">
            <input type="text" name="" id="" class="px-4 py-1 border rounded-md w-1/3" placeholder="Search here...">
            <button class="p-1 rounded-md hover:bg-gray-50">
                <svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>