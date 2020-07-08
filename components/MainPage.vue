<template>
  <el-container>
  
    <TopMenu @selectMenu="setMenuId" />

    <el-main>
      <Menu1 v-show='menuId == "1"' />
      <Menu2 v-show='menuId == "2"' />
      <Menu3 v-show='menuId == "3"' />
      <Login v-show='menuId == "4"' />
    </el-main>

    <el-footer> {{  footerText }}</el-footer>

  </el-container>

</template> 

<script>
import TopMenu from '../components/TopMenu'
import Menu1 from '../components/Menu1'
import Menu2 from '../components/Menu2'
import Menu3 from '../components/Menu3'
import Login from '../components/Login'

export default {
  name: 'MainPage',
  data() {
    return {
      menuId: "1",
      footerText : "효림솔루션"
    }
  },
  props: {
    msg: String   
  },
  components : {
      TopMenu,
      Menu1,
      Menu2,
      Menu3,
      Login,
  },
  methods: {
    setMenuId(id) {
      this.menuId = id || "1";
    },
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    // margin: 0 10%;
    height: 100%;
    overflow: hidden;
  }
  .el-container {
    margin-bottom: 40px;
    height: 100%;

    .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: right;
      line-height: 60px;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      // height: 700px;
    }
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      // padding: 7px;
      height: calc(100% - 120px);
    }
  
  }
 
</style>