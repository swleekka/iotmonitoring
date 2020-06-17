<template>
    <div class="topMenuWrap">
         <el-col :span="22">     
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            
                <el-menu-item index="1">Monitoring</el-menu-item>
                <el-menu-item index="2">Chart</el-menu-item>
                <el-menu-item index="3">Settings</el-menu-item>
            </el-menu>   
        </el-col>
        <el-col :span="2">
            <el-menu
                :default-active="loginIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            
                <el-menu-item index="4"> Login </el-menu-item>
            </el-menu>   
        </el-col>
    </div>
</template>


<script>
  export default {
    name: 'topmenu',
    data() {
      return {
        activeIndex: '1',
        loginIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$emit("selectMenu", key);
      }
    }
  }
</script>

