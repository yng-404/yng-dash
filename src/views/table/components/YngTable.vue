<template>
    <div class="space-y-4">
        <table-topbar>
            {{ tableName }}
        </table-topbar>
        <div class="border rounded-md">
            <table class="table-fixed w-full">
                <thead class="border-b">
                    <tr :class="innerBorderX">
                        <th v-for="field in headings" :key="field.name" 
                            :class="padding">
                            <button
                                @click.prevent="toggleSort(field.name, field.sortAsc)"
                                :disabled="!field.sortable"
                                :class="{ 'cursor-default' : !field.sortable }"
                                class="flex w-full items-center justify-between focus:outline-none">
                                <span>
                                    <span v-if="field.icon" v-html="field.icon"></span>
                                    <span>{{ field.name }}</span>
                                </span>
                                <template v-if="field.sortable">
                                    <template v-if="field.sorted">
                                        <span v-if="field.sortAsc" v-html="field.sortAscIcon"></span>
                                        <span v-else v-html="field.sortDescIcon"></span>
                                    </template>
                                    <span v-else v-html="field.sortIcon"></span>
                                </template>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="innerBorderX">
                        <td :class="[padding, innerBorderY]">
                            afdsf
                        </td>
                        <td :class="[padding, innerBorderY]">
                            affds
                        </td>
                        <td :class="[padding, innerBorderY]">
                            asfdsfds
                        </td>
                    </tr>
                
                    <tr :class="innerBorderX">
                        <td :class="[padding, innerBorderY]">
                            afdsf
                        </td>
                        <td :class="[padding, innerBorderY]">
                            affds
                        </td>
                        <td :class="[padding, innerBorderY]">
                            asfdsfds
                        </td>
                    </tr> 
                </tbody>
            </table>
        </div>

        <table-pagination />
    </div>
</template>

<script>

// import TableItem from './TableItem.vue'
import TablePagination from './TablePagination.vue'
import TableTopbar from './TableTopbar.vue'

import axios from 'axios'

export default {
    components: { 
        TableTopbar,
        TablePagination,
        // TableItem 
    },
    props: {
        tableName: {
            default: 'YNG Table'
        },
        fields: {
            type: Array,
            required: true
        },
        localData: {
            default: null
        },
        requestURL: {
            default: null
        },
        requestParams: {
            default: null
        },
        borderStyle: {
            default: 'box'
        },
        paddingX: {
            default: 'px-4'
        },
        paddingY: {
            default: 'py-2'
        }
    },
    data() {
        return {
            dataFromAPI: null,
            headings: this.tableHeadings()
        }
    },
    mounted() {
        if(this.requestURL) {
            this.fetchDataFromAPI(`${this.requestURL}?page=1`)
        }
    },
    watch: {
        requestParams() {
            this.fetchDataFromAPI(`${this.requestURL}?page=1`)
        }
    },
    computed: {
        innerBorderX() {
            return this.borderStyle !== 'horizontal' ? 'divide-x' : ''
        },
        innerBorderY() {
            return this.borderStyle === 'vertical' ? 'divide-x' : 'border-t'
        },
        padding() {
            return `${this.paddingX} ${this.paddingY}`
        }
    },
    methods: {
        fetchDataFromAPI(URL) {
            axios.get(URL, { params: this.requestParams }).then(response => {
                this.dataFromAPI = response.data
            })
        },
        toggleSort(name, sortAsc) {
            const sort = this.headings.find(el => el.name === name)
            this.headings.forEach(el => el.sorted = false)
            sort.sorted = true
            sort.sortAsc = !sort.sortAsc
            this.$emit('sortTable', {
                orderBy: name,
                sortOrder: sortAsc? 'DESC' : 'ASC'
            })
        },
        tableHeadings() {
            return this.fields.map(el => {
                const fieldValues = typeof el === 'string' ? { name: el } : { ...el } 
                return {
                    sortable: true,
                    editable: false,
                    sorted: false,
                    sortAsc: true,
                    renderAsSlot: false,
                    icon: null,
                    sortIcon: `<svg class="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>`,
                    sortAscIcon: `<svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>`,
                    sortDescIcon: `<svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path></svg>`,
                    ...fieldValues
                }
            })
        }
    }
    
}
</script>