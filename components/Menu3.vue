<template>
  <div>
   <el-form ref="sensorLimit" label-width="120px" label-position="left">
      <el-form-item>
        <el-col style='width:49%'>
          <span>최소값</span>
        </el-col>
        <el-col style='width:2%'></el-col>
        <el-col style='width:49%'>
          <span>최대값</span>
        </el-col>
      </el-form-item>
      <el-form-item v-for="sensor in sensors" :key="sensor.label" :label="sensor.label" required >
        <el-col style='width:49%'>
          <el-input-number v-model.number='sensor["min"]' controls-position="right" @change="handleChange" :min="0" :max="10"></el-input-number>
        </el-col>
        <el-col style='width:2%'>-</el-col>
        <el-col style='width:49%'>
          <el-input-number v-model.number='sensor["max"]' controls-position="right" @change="handleChange" :min="0" :max="10"></el-input-number>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveEnvData">Save</el-button>
        <el-button @click="getEnvData">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>       
</template>

<script>


export default {
    name: 'Main3',
    data() {
        return {
            sensors: {
              tem: {label:'Temperature', min:0, max:0},
              ph : {label:'PH', min:0, max:0},
              do : {label:'DO', min:0, max:0},
              sal: {label:'Salinity', min:0, max:0},
              nh4: {label:'NH4', min:0, max:0},
              nh3: {label:'NH3', min:0, max:0},
            },
        }
    },
    methods: {
        getEnvData() {
            axios.get('http://34.64.165.112:8081/sensor/env')
            .then(response => {
              this.setEnvData(response.data);                     
            }).catch(error => {
              alert("getEnvData : " + error);
            });
        },
        setEnvData(data) {

        },
        saveEnvData() {
            console.log(sensors);
            axios.post('http://34.64.165.112:8081/sensor/env', this.sensors)
            .then(response => {
              alert(response);                     
            }).catch(error => {
              alert("error" + error);
            });
            
            // this.$refs[formName].validate((valid) => {
            // if (valid) {
            //     alert('submit!');
            // } else {
            //     console.log('error submit!!');
            //     return false;
            // }
            // });
        },
        handleChange(event) {
            console.log(event);
        }
    }

}
</script>

