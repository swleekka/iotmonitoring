<template>
    <ag-grid-vue style="width: 100%; height: calc(100% - 40px);"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData">
    </ag-grid-vue>

</template>

<script>

import { AgGridVue } from 'ag-grid-vue';

export default {
    name: 'Main3',
    data() {
        return {
            columnDefs: null,
            rowData: null

        }
    },
    components: {
        AgGridVue,
    },
    beforeMount() {
        this.columnDefs = [
            {headerName: 'Make', field: 'make'},
            {headerName: 'Model', field: 'model'},
            {headerName: 'Price', field: 'price'}
        ];

        this.rowData = [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ];
    },

}
</script>

<style lang="scss">
  @import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

</style>