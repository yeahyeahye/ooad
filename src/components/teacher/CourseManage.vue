<template>
  <div>
    <div id="head" class="head">
      <div class="title"><i class="el-icon-back icon1" @click="returnHomePage"></i>我的课程
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-menu icon1"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-bell"></i>&nbsp;&nbsp;个人页</el-dropdown-item>
            <el-dropdown-item>
              <div @click="returnLogin"><i class="el-icon-service"></i>&nbsp;&nbsp;讨论课</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="returnLogin"><i class="el-icon-back"></i>&nbsp;&nbsp;退 出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="empty"></div>
    <div class="main">
      <div class="new_course" @click="NewCourse">
        <i class="el-icon-plus icon2">新建课程</i>
      </div>
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick">
      </el-tree>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CourseManage",
    data() {
      return {
        data: [{
          label: 'OOAD',
          children: [{
            label: '学生成绩',
            children: [{
              label: '第一轮',
              children: [{
                label: '1-1',
                children: [{}]
              }, {
                label: '1-2',
                children: [{}]
              }]
            }]
          },
            {
              label: '学生组队',
              children: [{
                label: '第一轮'
              }]
            },
            {
              label: '课程信息',
              children: [{
                label: '第一轮'
              }]
            },
            {
              label: '班级信息',
              children: [{
                label: '第一轮'
              }]
            },
            {
              label: '讨论课'
            },
            {
              label: '共享设置',
              children: [{
                label: '第一轮'
              }]
            }]
        }, {
          label: 'J2EE',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        if (data.label === '讨论课')
          this.$router.push({path: '/teacher/SeminarPage'});
      },
      returnLogin() {
        this.$router.push({path: '/'});
      },
      returnHomePage() {
        this.$router.push({path: '/teacher/HomePage'});
      },
      NewCourse() {
        this.$router.push({path: '/teacher/NewCourse'});
      }

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
    height: 30px;
  }

  .new_course {
    height: 50px;
  }

  .icon2 {
    float: right;
  }
</style>
