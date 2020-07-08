<template>
    <div class="menu2Wrap">
      <div class="search-area">
        <span class="search-title">차트 조회 조건 : </span>
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-date-picker v-model="searchDate"
            type="daterange"
            range-separator="-"
            start-placeholder="Start date"
            end-placeholder="End date"
            unlink-panels
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            :clearable="false"
            :picker-options="pickerOptions">
        </el-date-picker>
        <!-- <el-button  type="success" @click="chart_query()">Query</el-button> -->
      </div>
      <div class="chart-area">
        <div class="chartStyle">
          <line-chart :colors="[colors[value]]" :data="chartDataObj"  height="calc(100% - 20px)" :points= "false" />
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Main2',
    data(){
      return {
        colors : {'temper':'#b00', 'ph':'green', 'do':'purple', 
                  'sal':'cyan',    'nh3':'pink', 'nh4':'red'},

        pickerOptions: {
          shortcuts: [{
            text: 'last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(end.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(end.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'last 3 month ',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(end.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'last year',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
         options: [{
            value: 'temper',
            label: 'Temperature'
          }, {
            value: 'ph',
            label: 'PH'
          }, {
            value: 'do',
            label: 'DO'
          }, {
            value: 'sal',
            label: 'Salinity'
          }, {
            value: 'nh3',
            label: 'NH3'
          }, {
            value: 'nh4',
            label: 'NH4'
        }],
        value: 'temper',

        searchDate : [],
        chartDataObj : [],
      }
    },
    computed: {
      ChangeValue() {
        return this.value + this.searchDate;
      }
    },
    watch: {
      ChangeValue() {
        this.chart_query();
      }
    },
    methods: {
      chart_query: function (event) {
        // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
        axios.get('http://34.64.165.112:8081/sensor/chart', {
          params: {
            "sensor": this.value,
            "start": this.searchDate[0],
            "end": this.searchDate[1]
          }
        }).then(response => {
          this.setSensorData(response.data);                     
        }).catch(error => {
          alert("error" + error);
        });
      },
      setSerchDate() {
        const end = new Date();
        const start = new Date();
        start.setTime(end.getTime() - 3600 * 1000 * 24 * 90);
        this.searchDate = [this.$moment(start).format("YYYY-MM-DD"), this.$moment().format("YYYY-MM-DD")];
      },
      setSensorData(data)
      {
          var tempData = {};

          data.forEach( row => {
              var chartkey = row.datetime.substring(0, 19);
              var sensorKey = Object.keys(row)[0];
              tempData[chartkey] = row[sensorKey];
          });

          this.chartDataObj = [];
          this.chartDataObj.push({ name : this.value,      data:tempData })
      },
    },
    mounted() {

      this.setSerchDate();
    }
}
</script>

<style lang="scss" scoped>
.menu2Wrap {
    height: 100%;

    .search-area, .chart-area {
        margin: 0;
        //padding: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .search-area {
      height: 60px;
      line-height: 60px;
      
      .search-title {
        color : dark-blue;
      }
    }
    .chart-area {
        height: calc(100% - 60px);
    
      .chartStyle {
        height : calc(100% - 10px);
        padding: 10px;
      }
    }
}
</style>