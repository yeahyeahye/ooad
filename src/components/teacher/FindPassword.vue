<template>
  <div>
    <div id="head" class="head">
      <div class="title"><i class="el-icon-arrow-left icon1" @click="returnLogin"></i>找回密码</div>

    </div>
    <div class="main">
      <table class="table0">
        <tr><td class="td0">
          <p>&nbsp;&nbsp;&nbsp;发送验证码: <a href="mailto:qiuming@qq.com">qiuming@qq.com</a></p>
        </td></tr>
        <tr><td class="td0">
          <el-input class="input0" type="text" placeholder="学号/教工号"></el-input>
        </td></tr>

        <tr><td class="td0">
          <el-input class="input0"><el-button slot="append" type="danger" plain>立即验证</el-button></el-input>
        </td></tr>
        <tr>
          <td class="td0"></td>
        </tr>
        <tr>
          <td class="td0"></td>
        </tr>
        <tr>
          <td class="td0"><el-button class="btn" type="success" @click="SetPassword">确认</el-button></td>
        </tr>
      </table>
    </div>


  </div>
</template>

<script>
    export default {
        name: "FindPassword",
        methods:{
          SetPassword(){
            this.$router.push({path:'/teacher/SetPassword'})
          },
          returnLogin(){
            this.$router.push({path:'/'});
          }
        }
    }
</script>

<style scoped>
  .head{
    height: 50px;
    width:100%;
    background-color: #f5f5f5;
  }
  .title{
    display: block;
    text-align: center;
    line-height: 50px;
  }
  .icon1{
    float:left;
    margin-left: 3%;
    line-height: 50px;
  }
  .table0{
    width:50%;
    margin:auto;
  }

  .td0{
    width:100%;
    height:45px;
  }
  .td0 p{
    font-size: 12px;
  }
  .td0 a{
    text-decoration: none;
  }
  .btn{
    height:36px;
    width:50%;
    border: none;
    background-color: rgb(154, 223, 106);
    margin: auto;
  }
  @media (max-width: 640px) {
    .table0{
      width:100%;
    }
    .btn{
      width:100%;
    }

  }
</style>
