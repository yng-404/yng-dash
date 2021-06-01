<template>
<div class="xl:grid xl:grid-cols-3">
    <div v-if="tempLayout" @click.prevent="tempLayout = null" class="absolute inset-0 bg-transparent w-full h-screen"></div>

    <div class="lg:p-6 p-4 space-y-6 col-span-2">
        <h2>Configurations</h2>

        <h3>Preview</h3>

        <div :class="gridLayout" class="z-30 relative grid border h-3/4 rounded-md bg-gray-50 border-gray-300 overflow-hidden">
            <button 
                v-for="i in layout.grid" :key="i" 
                @click.prevent="selectGrid(i)"
                :class="{
                    'border-r border-gray-300' : i < layout.grid && layout.flow === 'cols', 
                    'border-b border-gray-300' : i < layout.grid && layout.flow === 'rows', 
                    'bg-red-50' : i === tempLayout
                }"
                class="w-full focus:outline-none focus:bg-red-50">
                <div v-if="layout[i] !== undefined" 
                    :class="layouts.find(el => el.cols === layout[i].grid && el.flow === layout[i].flow).grid"
                    class="grid w-full h-full">
                    <button
                        v-for="j in layout[i].grid" :key="j" 
                        :class="{ 
                            'border-b border-gray-300' : layout[i].flow === 'rows' && j < layout[i].grid, 
                            'border-r border-gray-300' : layout[i].flow === 'cols' && j < layout[i].grid   
                        }"
                        class="h-full w-full focus:bg-red-100 focus:outline-none">
                    </button>
                </div>
                <!-- <div class="">{{ `${1}/${layout.grid}` }} or {{ (( 1 / layout.grid ) * 100).toFixed(1) }}%</div> -->
            </button>
        </div>
    </div>

    <div class="space-y-3 lg:p-6 p-4 border-l h-screen bg-gray-50 bg-opacity-50 ">
            <h3 for="" class="">Base Layout</h3>
            <div class="gap-6 grid grid-cols-3">
                <template v-for="i in layouts" :key="i.cols" :value="i.cols">
                    <button 
                        @click="selectLayout(i)" 
                        v-if="tempLayout === null || i.firstOnly"
                        :class="[
                            i.grid, 
                            { 'border-red-200' : i.cols === layout.grid && i.flow === layout.flow && tempLayout === null }
                        ]" 
                        class="grid border rounded-md hover:border-red-300 h-24 focus:outline-none relative bg-white">
                        <span 
                            v-for="j in i.cols" :key="j" 
                            :class="{ 
                                'border-r' : j < i.cols && i.flow === 'cols', 
                                'border-b' : j < i.cols && i.flow === 'rows',
                                'h-24' : i.flow === 'cols',
                                'h-full' : i.flow === 'rows'
                            }" 
                            class=""></span>
                        <!-- <span class="absolute inset-x-0 bottom-0 -mb-6 inline w-auto text-xs tracking-wider">
                            {{ i.grid }}
                        </span> -->
                    </button>
                </template>
            </div>

            <div v-if="tempLayout" class="pt-8">
                <h3 for="" class="">Grid Division</h3>
                <div class="space-x-4 flex flex-wrap mt-2">
                    <button v-for="i in layout.grid" :key="i" class="px-3 py-1 rounded-md border">
                        {{ i }}
                    </button>
                </div>
            </div>

         
        </div>
</div>
</template>

<script>


export default {
    computed: {
        gridLayout() {
           return this.layouts.find(el => el.cols === this.layout.grid && el.flow === this.layout.flow).grid
        },
        gridLayoutSub() {
           return this.layouts.find(el => el.cols === this.layout.grid && el.flow === this.layout.flow).grid
        },
        grids() {
            let i, aa = ''
            const a = this.layout.grid
            for(i = 1; i < a; i++) {
                aa += `
                <div>
                    ${i}
                </div>`
            }
            return aa
        },
        final() {
            return`<template>
                    <div class="grid ${this.gridLayout}">
                    ${this.grids}
                    </div>
            </template>`
        }
    },
    data() {
        return {
            processed: '',
            tempLayout: null,
            layout: {
                grid: 2,
                flow: 'cols',
            },
            flow: 'cols',
            layouts: [
                { 
                    cols: 1, 
                    flow: 'cols',
                    firstOnly: false,
                    grid: 'grid-cols-1' 
                },
                { 
                    cols: 2, 
                    flow: 'cols',
                    firstOnly: true,
                    grid: 'grid-cols-2' 
                },
                { 
                    cols: 3, 
                    flow: 'cols',
                    firstOnly: true,
                    grid: 'grid-cols-3' 
                },
                { 
                    cols: 4, 
                    flow: 'cols',
                    firstOnly: true,
                    grid: 'grid-cols-4' 
                },
                { 
                    cols: 5, 
                    flow: 'cols',
                    firstOnly: true,
                    grid: 'grid-cols-5' 
                },
                { 
                    cols: 6, 
                    flow: 'cols',
                    firstOnly: true,
                    grid: 'grid-cols-6' 
                },
                { 
                    cols: 2, 
                    flow: 'rows',
                    firstOnly: true,
                    grid: 'grid-rows-2' 
                },
                { 
                    cols: 3, 
                    flow: 'rows',
                    firstOnly: true,
                    grid: 'grid-rows-3' 
                },
                { 
                    cols: 4, 
                    flow: 'rows',
                    firstOnly: true,
                    grid: 'grid-rows-4' 
                },
                { 
                    cols: 5, 
                    flow: 'rows',
                    firstOnly: false,
                    grid: 'grid-rows-5' 
                },
                { 
                    cols: 6, 
                    flow: 'rows',
                    firstOnly: false,
                    grid: 'grid-rows-6' 
                },
                
            ]
        }
    },
    methods: {
        selectGrid(i) {
            this.tempLayout = i
        },
        roundIt(val) {
            val.toFixed(2)
        },
        selectLayout(i) {
            if(!this.tempLayout) {
                this.layout = {}
                this.layout.grid = i.cols
                this.layout.flow = i.flow
            } else {
                this.layout[this.tempLayout] = {
                    grid: i.cols,
                    flow: i.flow
                }
            }
        }
    },
}
</script>