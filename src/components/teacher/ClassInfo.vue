<template>
  <div>
    <div id="head" class="head">
      <div class="title"><i class="el-icon-back icon1 icon0" @click="returnCourseManage"></i>班级信息
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-menu icon0"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-bell icon0"></i>&nbsp;&nbsp;个人页</el-dropdown-item>
            <el-dropdown-item>
              <div @click="gotoSeminar"><i class="el-icon-service icon0"></i>&nbsp;&nbsp;讨论课</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="returnLogin"><i class="el-icon-back icon0"></i>&nbsp;&nbsp;退 出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="main">
      <div style="margin-top: 10px;margin-bottom: 10px">
        <el-button type="success" plain
                   style="width: 100%"
                   @click="addClass">
          <i class="el-icon-plus icon0"></i>&nbsp;新增班级
        </el-button>
      </div>
      <div style="width: 100%"
           v-for="(item,index) in classInfo"
           :key="index">
        <el-card>
          <div slot="header">
            <span>{{item.classId}}</span>
          </div>
          <table style="width: 100%">
            <tr>
              <td style="width: 35%">讨论课时间:</td>
              <td>{{item.time}}</td>
            </tr>
            <tr>
              <td style="width: 35%">讨论课地点:</td>
              <td>{{item.address}}</td>
            </tr>
            <tr>
              <td style="width: 35%">学生名单:</td>
              <td>{{item.nameList.name}}</td>
            </tr>
            <tr>
              <td style="width: 35%"></td>
              <td>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed">
                  <el-button size="mini" type="info">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip" style="float:right">未选择任何文件</div>
                </el-upload>
              </td>
            </tr>
          </table>
          <table style="width: 100%;text-align: center">
            <tr style="height: 20px">
              <td></td>
            </tr>
            <tr style="height: 20px">
              <td>
                <el-button type="danger" plain style="width: 50%">删除班级</el-button>
              </td>
            </tr>
            <tr style="height: 20px">
              <td></td>
            </tr>
          </table>
        </el-card>

      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "ClassInfo",
    data() {
      return {
        classInfo: [
          {
            classId: '2016--1',
            time: '周三7，8节',
            address: '海韵教学楼',
            nameList:
              {
                name: 'student.xlsx',
                url: 'E:/name.xlsx'
              }
          },
          {
            classId: '2016--2',
            time: '周三7，8节',
            address: '海韵教学楼',
            nameList:
              {
                name: 'student.xlsx',
                url: 'E:/name.xlsx'
              }
          },
          {
            classId: '2016--3',
            time: '周三7，8节',
            address: '海韵教学楼',
            nameList:
              {
                name: '当前无名单',
                url: 'E:/name.xlsx'
              }
          }
        ]
      }
    },
    methods: {
      returnLogin() {
        this.$router.push({path: '/'});
      },
      returnCourseManage() {
        this.$router.push({path: '/teacher/CourseManage'});
      },
      gotoSeminar() {
        this.$router.push({path: '/teacher/SeminarPage'});
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      addClass() {
        this.$router.push({path: '/teacher/NewClass'});
      }
    }
  }
</script>

<style scoped>
  .head {
    height: 70px;
    width: 100%;
    background-color: #CCFF99;
  }

  .title {
    display: block;
    text-align: center;
    line-height: 70px;
  }

  .plus {
    float: right;
    margin-right: 3%;
    line-height: 70px;
  }

  .icon1 {
    float: left;
    margin-left: 3%;
    line-height: 70px;
  }

  .icon0 {
    font-weight: bolder;
  }

  .main {
    width: 50%;
    margin: auto;
  }

  @media (max-width: 640px) {
    .main {
      width: 100%;
    }
  }
</style>
