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
                                :disabled="!field.sortable"
                                :class="field.sortable"
                                class="flex w-full items-center justify-between">
                                <span>
                                    <span>Ic</span>
                                    <span>{{ field.name }}</span>
                                </span>
                                <span>
                                    ics
                                </span>
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
        tableHeadings() {
            return this.fields.map(el => {
                const fieldValues = typeof el === 'string' ? { name: el } : { ...el } 
                return {
                    sortable: true,
                    editable: false,
                    sorted: false,
                    renderAsSlot: false,
                    sortIcon: ``,
                    sortAscIcon: ``,
                    sortDescIcon: ``,
                    ...fieldValues
                }
            })
        }
    }
    
}
</script>