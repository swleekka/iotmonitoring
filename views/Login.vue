<template>
    <div class="LoginWrap">
        <fieldset >
            <legend class="login-title"> 로 그 인 </legend>

            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" 
                        label-width="80px" class="demo-ruleForm">

                <el-form-item label="ID" prop="id">
                    <el-input v-model="ruleForm.id"></el-input>
                </el-form-item>

                <el-form-item label="Password" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>  
            </el-form>
            
        </fieldset>
    </div>
</template>

<script>
  export default {
    data() {
     var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          id: ''
        },
        rules: {
          id: [
            { required: true, min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.LoginWrap {
    width: 100%;
    // height: 100%;
    position: relative;
    // padding-top: 150px;
    color: dark-blue;
    fieldset {
        margin: 150px 20% 25px;   
        border: none;//1px solid gray;  
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .login-title {
        font-size: 1.3em;
        font-weight: bold;
    }
    .demo-ruleForm {
        margin: 10px;
        padding: 25px;
        // width: 60%;
        height: 160px;
        // box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
}
</style>