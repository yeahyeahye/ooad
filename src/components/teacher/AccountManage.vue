<template>
    <div>
      <div id="head" class="head">
        <div class="title"><i class="el-icon-back icon1" @click="returnHomePage"></i>账户与设置</div>
      </div>
      <div class="main">

      </div>
    </div>
</template>

<script>
    export default {
        name: "AccountManage",
      methods:{
          returnHomePage(){
            this.$router.push({path:'/teacher/HomePage'});
          }
      }
    }
</script>

<style scoped>
  .head {
    height: 50px;
    width: 100%;
    background-color: #CCCCCC;
  }
  .main{
    margin-top:50px;
    width:100%;
  }

  .title {
    display: block;
    text-align: center;
    line-height: 50px;
  }

  .icon1 {
    float: left;
    margin-left: 3%;
    line-height: 50px;
  }

</style>
