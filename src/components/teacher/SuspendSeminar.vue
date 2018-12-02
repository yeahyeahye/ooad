<template>
  <div>
    <div id="head" class="head">
      <div class="title">
        <router-link :to="{name:'StartSeminar'}"><i class="el-icon-back icon1"></i></router-link>
        {{$route.params[2].course}}--讨论课
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-plus"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-bell"></i>&nbsp;&nbsp;个人页</el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{name:'Login'}"><i class="el-icon-back"></i>&nbsp;&nbsp;退 出</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-card>
      <div slot="header">
        <span>主题:{{$route.params[1].name}}</span>
      </div>
      <table style="width: 100%;text-align: center">
        <tr style="line-height: 40px">
          <td style="width: 30%">课次序号:</td>
          <td>{{$route.params[0].id}}</td>
        </tr>
        <tr>
          <td style="width: 30%">要求:</td>
          <td style="text-align: left">{{$route.params[3].desc}}</td>
        </tr>
        <tr>
          <td style="width: 30%">课程情况:</td>
          <td><span style="color: red">暂停</span></td>
        </tr>
      </table>
    </el-card>
    <el-button type="success" class="btn" plain>继续讨论课</el-button>
  </div>
</template>

<script>
  export default {
    name: "SuspendSeminar",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .head {
    height: 50px;
    width: 100%;
    background-color: #CCFF99;
  }

  .title {
    display: block;
    text-align: center;
    line-height: 50px;
  }

  .plus {
    float: right;
    margin-right: 3%;
    line-height: 50px;
  }

  .icon1 {
    float: left;
    margin-left: 3%;
    line-height: 50px;
  }

  .empty {
    width: 100%;
    height: 60px;
    text-align: right;
    line-height: 60px;
  }

  .btn {
    width: 100%;
    border: none;

    color: white;
    background-color: #66cccc;
    margin-top: 100px;
  }

  .main {
    margin-top: 5px;
  }
</style>
