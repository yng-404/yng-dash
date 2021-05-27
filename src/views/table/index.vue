<template>
    <div class="">
        <yng-table 
            :fields="fields"
            @sortTable="sortTable($event)"
        />
    </div>
</template>

<script>



import YngTable from './components/YngTable.vue'

export default {
    components: {
        YngTable
    },
    data() {
        return {
            fields: [
                'Title',
                {
                    name: 'Author',
                    sortable: false,
                },
                {
                    name: 'Date',
                    sorted: true,
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