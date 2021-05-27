<template>
    <section class="flex md:flex-row flex-col items-center md:justify-between lg:space-y-0 space-y-3 justify-center w-full">
        <div :class="paginationOrder" class="inline-flex justify-center items-center rounded-md border overflow-hidden divide-x">
            <button 
                v-for="(page, index) in pagination.links" :key="index" 
                :disabled="page.active || !page.url || loading"
                :class="{ 
                    'bg-gray-300' : page.active,
                    'hover:bg-gray-400' : page.url && page.label !== '...',
                    'cursor-default' : !page.url || page.label === '...'
                }"
                class="px-3 py-1 focus:outline-none">
                <span v-html="page.label" class=" whitespace-nowrap"></span>
            </button>
        </div>
        <div class="order-1 text-sm tracking-wider text-center">
            Showing <span class="font-medium">{{ pagination.per_page }}</span> 
            (from {{ pagination.from }} to {{ pagination.to }}) of
            <span class="font-medium">{{ pagination.total }}</span>
            results
        </div>
    </section>
</template>

<script>
export default {
    props: {
        pagination: {
            default: null
        },
        loading: {
            default: false
        },
        paginationOrder: {
            default: 'order-2'
        }
    }
}
</script>