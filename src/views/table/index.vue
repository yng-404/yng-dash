<template>
    <div class="relative lg:p-6 p-4">
        <yng-table 
            :fields="fields"
            :localData="mockData"
            uniqueIdentifier="productId"
            @sortTable="sortTable($event)"
        >
            <!-- requestURL="http://127.0.0.1:8000/api/products" -->
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

import axios from 'axios'

export default {
    components: {
        YngTable
    },
    mounted() {
        this.fetchDataFromAPI()
    },
    data() {
        return {
            URL: "http://127.0.0.1:8000/api/products?page=1",
            mockData,
            dataFromAPI: null,
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
                    width: 'w-32',
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
                    width: 'w-32',
                    hideBreadpoint: 'md',
                    tdAlign: 'text-center',
                    thAlign: 'text-center',

                },
                {
                    title: 'Price',
                    name: 'price',
                    width: 'w-28',
                    tdAlign: 'text-right',
                }
            ]
        }
    },
    methods: {
        sortTable(event) {
            alert(`${event.orderBy}: ${event.sortOrder}`)
        },
        fetchDataFromAPI() {
            this.loading = true
            axios.get(this.URL).then(response => {
                this.dataFromAPI = response.data
                setTimeout(() => {
                    this.loading = false
                }, 300)
            })
        },
    }
}
</script>