<template>
    <div class="lg:p-6 p-4">
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
import mockData from '@/api/data.json'
import { month } from '@/api/local/month.js'
import axios from 'axios'

export default {
    name: 'Table',
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
                    title: 'Date Posted',
                    name: 'datePosted',
                    icon: `<svg class="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
                    sorted: true,
                    hideBreadpoint: 'lg',
                    format(date) {
                        const replacer = (match, group1, group2, group3) => {
                            const a = month
                            const val = a.find(el => el.value === group2).short
                            return `${group3} ${val} ${group1}|`
                        }
                        const reg = /(\d{4})-(\d{2})-(\d{2})/g
                        const s = date.replace(reg, replacer)
                        const b = s.split('|')[0]
                        return b
                    }
                },
                {
                    title: 'Published',
                    name: 'isPublished',
                    sortable: false,
                    width: 'w-32',
                    filterable: true,
                    tdAlign: 'text-center',
                    thAlign: 'text-center',
                    hideBreadpoint: 'md',
                    renderAsSlot: true,  
                },
                {
                    name: 'productType',
                    title: 'Category',
                    width: 'w-32',
                    // filterable: true,
                    tdAlign: 'text-center',
                    thAlign: 'text-center',
                    hideBreadpoint: 'md',
                    format(type) {
                        let category = 'Regular'
                        if(type === 2) { category = 'Bundle' } 
                        else if (type === 3) { category = 'Book Set' }
                        return category
                    }
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
                    format(price) {
                        const value = (parseInt(price) / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                        return `P ${value.split('.')[0]}.${value.split('.')[1]}`
                    }
                },
                
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