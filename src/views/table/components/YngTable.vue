<template>
    <div class="space-y-4 sticky" v-if="dataTable">

        <!-- TOPBAR -->

        <table-topbar 
            @selectBorderStyle="internalBorderStyle = $event"
            :internalBorderStyle="borderSetting"
            :checkedAll="checkedAll"
            :filters="filters"
            :checked="checked">
            {{ tableName }}
        </table-topbar>

        <!-- MAIN TABLE -->

        <div class="border rounded-md overflow-y-auto relative max-height y-scroll-bar">
            <table class="table-fixed w-full">
                <thead>
                    <tr :class="innerBorderX" class="sticky top-0 bg-gray-100 z-10">
                        <th v-if="uniqueIdentifier" class="w-12 text-center">
                            <input 
                                type="checkbox" 
                                id="checkAllEntries" 
                                v-model="checkedAll" 
                                @change.prevent="toggleChecked" 
                            />
                        </th>
                        <th v-for="field in headings" :key="field.name" 
                            :class="[padding, field.hiddenWhen, field.width, field.thAlign]">
                            <button
                                @click.prevent="toggleSort(field.name, field.sortAsc)"
                                :disabled="!field.sortable"
                                :class="[
                                    thFontSize,
                                    { 'cursor-default' : !field.sortable }, 
                                    { 'justify-between' : borderSetting !== 'horizontal' }
                                ]"
                                class="flex w-full items-center space-x-4 focus:outline-none truncate">
                                <span class="inline-flex items-center space-x-2">
                                    <span v-if="field.icon" v-html="field.icon"></span>
                                    <span class="text-2xs uppercase tracking-widest">{{ field.title || field.name }}</span>
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
                        <th class="md:w-24 w-12 text-center whitespace-nowrap">
                            <span class="md:inline hidden text-2xs uppercase tracking-widest font-normal">
                                Action
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataTable.data" :key="index" 
                        :class="[
                            { 'bg-gray-50 animate-pulse' : loading },
                            innerBorderX, index % 2 === 0? 'bg-gray-50 bg-opacity-50' : 'bg-white bg-opacity-50'
                        ]">
                        <td v-if="uniqueIdentifier" :class="innerBorderY" class="text-center w-12">
                            <input 
                                type="checkbox" 
                                :value="item[uniqueIdentifier]" 
                                v-model="checked" 
                                :name="`${item}-${index}`" 
                            />
                        </td>
                        <td v-for="field in headings" :key="field.name" 
                            class=" whitespace-nowrap truncate tracking-wide"
                            :class="[padding, innerBorderY, field.hiddenWhen, field.tdAlign, tdFontSize]">
                            <template v-if="field.renderAsSlot">
                                <slot :name="`${field.name}Slot`" :dataItem="item[field.name]"></slot>
                            </template>
                            <template v-else>
                                <span v-if="field.format !== undefined">
                                    {{ field.format(item[field.name]) }}
                                </span>
                                <span v-else>
                                    {{ item[field.name] }}
                                </span>
                            </template>
                        </td>
                        <td :class="{ 'border-t' : borderSetting !== 'vertical' }" class="md:w-24 w-12 text-right">
                            <div class="space-x-1 md:flex hidden items-center justify-end pr-4">
                                <button class="focus:outline-none opacity-30 hover:opacity-90 text-red-600 inline-flex text-center hover:bg-gray-100 p-1 rounded-md">
                                    <svg class="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                                <button class="focus:outline-none opacity-30 hover:opacity-90 text-blue-600 inline-flex text-center hover:bg-gray-100 p-1 rounded-md">
                                    <svg class="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                            </div>
                            <!-- <table-action /> -->
                            <div class="flex items-center justify-center relative md:hidden">
                                <button @click.prevent="show.actionModal = true" class="focus:outline-none flex">
                                    <svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- PAGINATION -->

        <table-pagination 
            @goToPage="fetchDataFromAPI($event)"
            :pagination="dataTable.meta"
            :loading="loading"
            :paginationOrder="paginationOrder"
        />

        <!-- ACTION MODAL -->
        <teleport  to="#modals">
            <yng-modal :show="show.actionModal" @close="show.actionModal = false" class="md:hidden">
                <template #title>Action</template>
                <button class="px-6 py-3 hover:bg-red-300 hover:bg-opacity-20 w-full flex items-center space-x-3">
                    <svg class="w-6 h-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    <span class="text-sm tracking-wider">Edit</span>
                </button>
                <button class="px-6 py-3 hover:bg-red-300 hover:bg-opacity-20 w-full flex items-center space-x-3">
                    <svg class="w-6 h-6 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    <span class="text-sm tracking-wider">Delete</span>
                </button>
            </yng-modal>
        </teleport>

    </div>
</template>

<script>

import TablePagination from './TablePagination.vue'
import TableTopbar from './TableTopbar.vue'
import YngModal from '@/components/base/YngModal.vue'

import axios from 'axios'


import { mapState } from 'vuex'

export default {
    name: 'YngTable',
    components: { 
        TableTopbar,
        TablePagination,
        YngModal,
    },
    props: {
        tableName: {
            default: 'YNG Table'
        },
        uniqueIdentifier: {
            default: null
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
        actionType: {
            default: 'button'
        },
        requestParams: {
            default: null
        },
        borderStyle: {
            default: null
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
            internalBorderStyle: 'vertical',
            headings: this.tableHeadings(),
            checkedAll: false,
            checked: [],
            show: {
                actionModal: false,
                optionModal: false,
            }
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
        ...mapState(['tableDefaultConfig']),
        filters() {
            const filterable = this.headings.filter(el => el.filterable).map(item => item.name)
            const filter = this.dataTable.data.map(el => el[filterable[0]])
            return [...new Set(filter)]
        },
        borderSetting() {
            return this.borderStyle ? this.borderStyle : this.internalBorderStyle
        },
        innerBorderX() {
            return this.borderSetting !== 'horizontal' ? 'divide-x' : ''
        },
        innerBorderY() {
            return this.borderSetting === 'vertical' ? 'divide-x' : 'border-t'
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
        },
        checkedIn() {
            return this.dataTable.data.map(el => el[this.uniqueIdentifier])
        },
    },
    methods: {
        fetchDataFromAPI(URL) {
            this.loading = true
            axios.get(URL).then(response => {
                this.dataFromAPI = response.data
                setTimeout(() => {
                    this.loading = false
                }, 300)
            })
        },
        toggleChecked() {
            if(this.checkedAll) {
                if(this.checked.length < this.dataTable.data.length) {
                    const allId = this.dataTable.data.map(el => el[this.uniqueIdentifier])
                    this.checked = allId
                }
            } else {
                this.checked = []
            }
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
                    filterable: false,
                    searchable: false,
                    icon: null,
                    sortIcon: `<svg class="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>`,
                    sortAscIcon: `<svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>`,
                    sortDescIcon: `<svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`,
                    hiddenWhen: el.hideBreadpoint !== undefined ? `${el.hideBreadpoint}:table-cell hidden` : '',
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
        width: 10px;
        background-color: #E7E5E4;
    }

    .y-scroll-bar::-webkit-scrollbar-thumb {
        background-color: #c7c7c7;
        border-radius: 4px;
    }
 </style>