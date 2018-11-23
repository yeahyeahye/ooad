<template>
    <div>
      <div id="head" class="head">
        <div class="title">我
          <el-dropdown class="plus" trigger="click">
            <i class="el-icon-plus icon1"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="el-icon-message"></i>&nbsp;&nbsp;待  办</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-bell"></i>&nbsp;&nbsp;个人页</el-dropdown-item>
              <el-dropdown-item><i class="el-icon-setting"></i>&nbsp;&nbsp;设  置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="empty"></div>
      <div>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-card shadow="hover" class="card">
              <i class="el-icon-menu"></i>
              我的课程
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover" class="card">
              <i class="el-icon-service"></i>
              讨论课
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="12">
            <el-card shadow="hover" class="card">
              <i class="el-icon-menu"></i>
              我的课程
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover" class="card">
              <i class="el-icon-service"></i>
              讨论课
            </el-card>
          </el-col>
        </el-row>

      </div>

    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>
  .head{
    height: 50px;
    width:100%;
    background-color: rgb(154, 223, 106);
  }
  .title{
    display: block;
    text-align: center;
    line-height: 50px;
  }
  .plus{
    float:right;
    margin-right: 3%;
    line-height: 50px;
  }
  .empty{
    width:100%;
    height:50px;
  }
  .card{
    height:100px;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
    background-color: lavenderblush;
  }
</style>
