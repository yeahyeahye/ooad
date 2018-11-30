<template>
  <div>
    <div id="head" class="head">
      <div class="title">OOAD
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-plus icon1"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="returnHomePage"><i class="el-icon-bell"></i>&nbsp;&nbsp;个人页</div>
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
      <div class="new">
        <div class="new_round" @click="NewRound">
          <i class="el-icon-plus icon2">新建轮次</i>
        </div>
        <div class="new_seminar" @click="NewSeminar">
          <i class="el-icon-plus">新建讨论课</i>
        </div>
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
    name: "SeminarPage",
    data() {
      return {
        data: [{
          label: '第一轮',
          children: [{
            label: '该轮轮次设置',
          }, {
            label: '业务流程分析',
            children: [{
              label: '2016--1'
            }, {
              label: '2016--2'
            }, {
              label: '2016--3'
            }]
          }, {
            label: '领域模型设计',
            children: [{
              label: '2016--1'
            }, {
              label: '2016--2'
            }, {
              label: '2016--3'
            }]
          }]
        }, {
          label: '第一轮',
          children: [{
            label: '该轮轮次设置',
          },
            {
              label: '业务流程分析',
              children: [{
                label: '2016--1'
              }, {
                label: '2016--2'
              }, {
                label: '2016--3'
              }]
            },
            {
              label: '领域模型设计',
              children: [{
                label: '2016--1'
              }, {
                label: '2016--2'
              }, {
                label: '2016--3'
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
      NewRound() {

      },
      NewSeminar() {
        this.$router.push({path: '/teacher/NewSeminar'});
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

  .new {
    height: 50px;
  }

  .new_round {
    float: left;
  }

  .new_seminar {
    float: left;
    margin-left: 10px;
  }

</style>
