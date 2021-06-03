<template>
    <nav class="text-sm tracking-wider flex">
        <div class="flex items-center space-x-6 overflow-x-scroll">
            <div v-for="(i, j) in menu" :key="j" class="hover:text-red-500 whitespace-nowrap relative w-full py-2.5">
                <slot :menuItem="i"></slot>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {
    props: {
        menu: {
            default: null
        }
    }
}
</script>