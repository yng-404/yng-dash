<template>
    <div class="lg:flex items-center justify-between w-full lg:space-y-0 space-y-4">
        <h3 class="lg:w-auto whitespace-nowrap">
            <slot></slot>
        </h3>
        <div class="flex items-center lg:justify-end justify-between space-x-4 w-full">
            <div class="relative xl:w-1/3 lg:w-1/2 w-full flex items-center">
                <input type="text" name="" id="" class="pl-4 pr-8 py-1 border w-full rounded-lg focus:ring-2 focus:outline-none" placeholder="Search here...">
                <svg class="w-5 h-5 opacity-20 absolute right-0 transform rotate-90 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div class="flex items-center relative lg:space-x-3 space-x-2">
                <yng-button v-if="checked.length > 0" btnColor="danger">
                    Delete {{ checkedAll? 'All' : '' }}
                    <template #icon-right>
                        <svg class="lg:w-4 lg:h-4 w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </template>
                </yng-button>
                <yng-button v-if="checked.length === 1">
                    Edit
                    <template #icon-right>
                        <svg class="lg:w-4 lg:h-4 w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </template>
                </yng-button>
                <button @click="isOpen = true" class="p-1 rounded-md hover:bg-gray-50 focus:outline-none">
                    <svg class="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </button>
                <div @mouseleave="isOpen = false" v-if="isOpen" class="absolute right-0 top-0 mt-8 space-y-2 border rounded-md bg-white z-20 p-4">
                    <span class="text-sm tracking-wider whitespace-nowrap">Table Border Style</span>
                    <div class="block space-y-2 tracking-wide">
                        <label for="boxed" class="block whitespace-nowrap space-x-2">
                            <input type="radio" v-model="borderStyle" value="boxed" id="boxed" name="borderStyle">
                            <span>Boxed</span>
                        </label>
                        <label for="vertical" class="block whitespace-nowrap space-x-2">
                            <input type="radio" v-model="borderStyle" value="vertical" id="vertical" name="borderStyle">
                            <span>Vertical</span>
                        </label>
                        <label for="horizontal" class="block whitespace-nowrap space-x-2">
                            <input type="radio" v-model="borderStyle" value="horizontal" id="horizontal" name="borderStyle">
                            <span>Horizontal</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import YngButton from '../../../components/base/YngButton.vue'

export default {
    name: 'TableTopbar',
    components: { 
        YngButton 
    },
    props: {
        checkedAll: {
            type: Boolean
        },
        checked: {
            type: Array
        },
        internalBorderStyle: {
            default: null
        }
    },
    watch: {
        borderStyle() {
            this.$emit('selectBorderStyle', this.borderStyle)
            this.isOpen = false
        }
    },
    data() {
        return {
            isOpen: false,
            borderStyle: this.internalBorderStyle
        }
    }
}
</script>