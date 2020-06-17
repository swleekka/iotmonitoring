<template>
    <div class="menu1Wrap">
        <div class="panel-area">
            <el-col style="padding:5px;" :span="6" v-for="(item, index) in panelDataObj" :key="'panel'+index">
                <Panel :panelData="item" />
            </el-col>
        </div>
        <div class="chart-area">
            <el-col class="chartPanel" :span="8" v-for="(item, index) in chartDataObj" :key="'chart'+index">
                <!-- <div class="chartStyle"> -->
                    <line-chart :colors="[color1[index], color2[index]]" height="calc(100% - 10px)" :data="item" :points= "true" />
                <!-- </div> -->
            </el-col>
        </div>
        <!-- <div class="error-area">   
            <span class="table-title">Error List</span>
            <ErrorList></ErrorList>        
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';
import Panel from "../components/Panel"
import ErrorList from "../components/ErrorList"
import Chart from "../components/Chart"

export default {
    name: 'Main1',
    data() {
        return {
            color1 : ['#b00', 'green', 'purple'],
            color2 : ['cyan', 'pink', 'red'],

            panelDataObj: {
                "temper" : {
                    title: "Temperature",
                    value: "0",
                    unit:  "℃"
                },
                "ph" : {
                    title: "Ph",
                    value: "0",
                    unit:  "ph"
                },
                "sal" : {
                    title: "Salinity",
                    value: "0",
                    unit:  "mg/L"
                },
                "do" : {
                    title: "DO",
                    value: "0",
                    unit:  "mg/L"
                },
                "nh3" : {
                    title: "NH3",
                    value: "0",
                    unit:  "mg/L"
                },
                "nh4" : {
                    title: "NH4",
                    value: "0",
                    unit:  "mg/L"
                },
                "air_temper" : {
                    title: "AirTemper",
                    value: "0",
                    unit:  "℃"
                },
                "humidity" : {
                    title: "Humidity",
                    value: "0",
                    unit:  "g/m3"
                },
            },
            
            maxCnt : 20,        // 차트에 뿌릴 데이타 최대 갯수
            originSensorData : [],    // 센서데이타 array
            chartDataObj : [],          // 차트 데이타

        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
        }
    },
    components: {
        Panel,
        ErrorList,
        Chart
    },
    methods: {
        getSensorData() {
            var self = this;
            var sensorData = this.originSensorData;
            axios.get('http://34.64.165.112:8081/sensor/current')
            .then(response => {

                var row = response.data[0];
                for(var key in row) {
                    if(key != "no" && key != "datetime") {
                        self.panelDataObj[key].value = row[key];
                    }
                }
                var arrLeng = sensorData.length;
                if(arrLeng == 0 || 
                    row.datetime.substring(0, 19) != sensorData[arrLeng-1].datetime.substring(0, 19)) {
                    if(arrLeng >= this.maxCnt) {
                        sensorData.shift();
                    }
                    sensorData.push(row);

                    self.setSensorData();
                }
            }) 
            .catch(error => (alert("error", error)));
        },
        setSensorData()
        {
            var temperData = {};
            var salData    = {};
            var phData     = {};
            var doData     = {};
            var nh3Data    = {};
            var nh4Data    = {};

            this.originSensorData.forEach( row => {
                var chartkey = row.datetime.substring(0, 19);
                temperData[chartkey] = row.temper;
                salData[chartkey] = row.sal;
                phData[chartkey] = row.ph;
                doData[chartkey] = row.do;
                nh3Data[chartkey] = row.nh3;
                nh4Data[chartkey] = row.nh4;
            });

            this.chartDataObj = [];
            var chartData1 = [];
            var chartData2 = [];
            var chartData3 = [];

            chartData1.push({ name : "Temper",      data:temperData })
            chartData1.push( { name : "Salinity",   data:salData })
            chartData2.push({ name : "PH",          data:phData })
            chartData2.push( { name : "DO",         data:doData })
            chartData3.push({ name : "NH3",         data:nh3Data })
            chartData3.push( { name : "NH4",        data:nh4Data })

            this.chartDataObj.push(chartData1);
            this.chartDataObj.push(chartData2);
            this.chartDataObj.push(chartData3);
        },
    },
    created () {
    },
    mounted() {
        this.getSensorData()
        setInterval(() => {
           this.getSensorData()
    	}, 10000)
    }
}
</script>


<style lang="scss" scoped>
.menu1Wrap {
    height: 100%;

    .panel-area, .chart-area, .error-area {
        height: 32.5%;
        margin: 0;
        padding: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .chartPanel {
        height: 100%;
        padding: 5px;
    }
    .chartStyle {
        height: 100%;
        border: 1px solid windowtext;
    }
    .error-area {
        
        .table-title {
            line-height: 40px
        }
        .error-list {
            height: calc(100% - 50px);
        }
    }
}
</style>