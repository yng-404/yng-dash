<template>
    <div class="">
        <yng-table 
            :fields="fields"
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
                    name: 'Date'
                }
            ]
        }
    }
}
</script>