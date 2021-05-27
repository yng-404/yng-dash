<template>
    <div class="relative">
        <yng-table 
            :fields="fields"
            :localData="mockData"
            @sortTable="sortTable($event)"
        >
            <template v-slot:productItemsSlot="{ dataItem }">
                {{ dataItem[0].catalog.title }}
            </template>
            <template v-slot:isPublishedSlot="{ dataItem }">
                <span v-if="dataItem === 1 || dataItem === true">Yes</span>
                <span v-else>No</span>
            </template>
        </yng-table>
    </div>
</template>

<script>

import YngTable from './components/YngTable.vue'
import mockData from '../../api/data.json'

export default {
    components: {
        YngTable
    },
    data() {
        return {
            mockData,
            fields: [
                {
                    title: 'Product',
                    name: 'productItems',
                    renderAsSlot: true,  
                },
                {
                    title: 'Published',
                    name: 'isPublished',
                    sortable: false,
                    width: 'w-24',
                    tdAlign: 'text-center',
                    thAlign: 'text-center',
                    hideBreadpoint: 'md',
                    renderAsSlot: true,  
                },
                {
                    title: 'Date Posted',
                    name: 'datePosted',
                    sorted: true,
                    hideBreadpoint: 'lg'
                },
                {
                    title: 'Stock',
                    name: 'stock',
                    width: 'w-24',
                    tdAlign: 'text-center',
                    thAlign: 'text-center',

                },
                {
                    title: 'Price',
                    name: 'price',
                }
            ]
        }
    },
    // methods: {
    //     sortTable(event) {
    //         alert(`${event.orderBy}: ${event.sortOrder}`)
    //     }
    // }
}
</script>