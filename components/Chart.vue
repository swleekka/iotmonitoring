<template>
 <div class="chartWrap"> 
  
    <line-chart :data="chartData" :points= "true" height="220px" ></line-chart>
 </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'chart',
    data() {
        return {
            // chartData :[],
        }
    },
    methods: {
        getChartData() {

            var me = this;
            var temperData = {};
            var nh4Data = {};
            var doData = {};

            axios.get('http://34.64.165.112:8081/sensor')
            .then(response => {
              // for(var i = 0 ; i < respose.data.length ; i++) {
              //   var row = response.data[i];
              // }
                  response.data.forEach( row => {
                    var key = row.datetime.substring(0, 16);
                    temperData[key] = row.temper;
                    nh4Data[key] = row.nh4;
                    doData[key] = row.do;
                });
                me.chartData.push({ name : "temper", data:temperData })
                me.chartData.push( { name : "nh4", data:nh4Data })
                me.chartData.push( { name : "do", data:doData })
                // me.chartData["temper"] = temperData;
                // me.chartData["nh4"] = nh4Data;
                console.log( "convert complete")
                console.log( this.chartData);

            }) 
            .catch(error => (this.info = error));
        }    
    },
    props: [
        "chartData"
    ]
}
</script>
<style lang="scss">
.chartWrap {
    height: 100%;
    padding:7px;
    border: 1px solid windowtext;
}
</style>