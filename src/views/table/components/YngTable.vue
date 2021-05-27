<template>
    <div class="space-y-4 sticky">
        <table-topbar>
            {{ tableName }}
        </table-topbar>
        <div class="border rounded-md overflow-y-scroll relative max-height y-scroll-bar">
            <table class="table-fixed w-full">
                <thead>
                    <tr :class="innerBorderX" class="sticky top-0 bg-gray-100 z-10">
                        <th class="w-12 text-center">
                            <input type="checkbox" name="" id="" />
                        </th>
                        <th v-for="field in headings" :key="field.name" 
                            :class="[padding, field.hiddenWhen, field.width, field.thAlign]">
                            <button
                                @click.prevent="toggleSort(field.name, field.sortAsc)"
                                :disabled="!field.sortable"
                                :class="[{ 'cursor-default' : !field.sortable }, thFontSize]"
                                class="flex w-full items-center justify-between focus:outline-none">
                                <span>
                                    <span v-if="field.icon" v-html="field.icon"></span>
                                    <span class="text-xs uppercase tracking-widest">{{ field.title || field.name }}</span>
                                </span>
                                <template v-if="field.sortable">
                                    <template v-if="field.sorted">
                                        <span v-if="field.sortAsc" v-html="field.sortAscIcon" class=""></span>
                                        <span v-else v-html="field.sortDescIcon" class=""></span>
                                    </template>
                                    <span v-else v-html="field.sortIcon" class=""></span>
                                </template>
                            </button>
                        </th>
                        <th class="w-12 text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataTable.data" :key="index" 
                        :class="[innerBorderX, { 'bg-gray-50 bg-opacity-40' : index % 2 === 0 }]">
                        <td :class="innerBorderY" class="text-center w-12">
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td v-for="field in headings" :key="field.name" 
                            class=" whitespace-nowrap truncate tracking-wide"
                            :class="[padding, innerBorderY, field.hiddenWhen, field.tdAlign, tdFontSize]">
                            <template v-if="field.renderAsSlot">
                                <slot :name="`${field.name}Slot`" :dataItem="item[field.name]"></slot>
                            </template>
                            <span v-else>
                                {{ item[field.name] }}
                            </span>
                        </td>
                        <td :class="innerBorderY" class="w-12 text-center">
                            <button class="focus:outline-none">
                                <svg class="w-5 h-5 opacity-50 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <table-pagination 
            :pagination="dataTable.meta"
            :loading="loading"
            :paginationOrder="paginationOrder"
        />
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
        },
        paginationPosition: {
            default: 'right'
        },
        thFontSize: {
            default: 'text-sm'
        },
        tdFontSize: {
            default: 'text-sm'
        }

    },
    data() {
        return {
            dataFromAPI: null,
            loading: false,
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
        },
        paginationOrder() {
            return {
                right: 'order-2',
                left: 'order-0'
            }[this.paginationPosition]
        },
        dataTable() {
            return this.requestURL ? this.dataFromAPI : this.localData
        }
    },
    methods: {
        fetchDataFromAPI(URL) {
            this.loading = true
            axios.get(URL, { params: this.requestParams }).then(response => {
                this.dataFromAPI = response.data
                setTimeout(() => {
                    this.loading = false
                }, 300)
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
                    hiddenWhen: el.hideBreadpoint !== undefined ? `${el.hideBreadpoint}:table-cell hidden` : '',
                    sortIcon: `<svg class="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>`,
                    sortAscIcon: `<svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>`,
                    sortDescIcon: `<svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path></svg>`,
                    ...fieldValues,
                }
            })
        }
    }
    
}
</script>

<style scoped>
    .max-height {
        max-height: 720px;
    }
    table {
        border-collapse: separate;
        border-spacing: 0;
    }

    table th {
        border-bottom: 1px solid rgb(229, 231, 235);
    }
    ::-webkit-scrollbar {
        height: 0px;
        width: 0px; 
        background: transparent;
    }
    .y-scroll-bar::-webkit-scrollbar-track {
        background-color: #e4e4e4;
    }

    .y-scroll-bar::-webkit-scrollbar {
        width: 12px;
        background-color: #E7E5E4;
    }

    .y-scroll-bar::-webkit-scrollbar-thumb {
        background-color: #c7c7c7;
        border-radius: 4px;
    }
 </style>