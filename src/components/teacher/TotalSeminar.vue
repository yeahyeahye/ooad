<template>
  <div>
    <div id="head" class="head">
      <div class="title"><i class="el-icon-back icon1" @click="returnSeminarPage"></i>我的课程
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-plus"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-bell"></i>&nbsp;&nbsp;个人页</el-dropdown-item>
            <el-dropdown-item>
              <div @click="returnLogin"><i class="el-icon-back"></i>&nbsp;&nbsp;退 出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="main">
      <el-tree
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick">
      </el-tree>
    </div>
    <div class="empty">
      <el-button class="btn" size="small" type="danger" plain @click="gotoSeminar">正在进行的讨论课</el-button>
    </div>
    <div id="pop-box" class="pop-box" style="display:none">
      <el-card class="box-card">
        <div slot="header">
          <span>请选择要进入的讨论课</span>
        </div>
        <table style="width: 100%">
          <tr>
            <td style="width: 100%;text-align: center">
              <el-select v-model="value" placeholder="课程">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td style="width: 100%;text-align: center">
              <el-select v-model="value2" placeholder="班级">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td style="width: 100%;text-align: center">
              <el-select v-model="value3" placeholder="讨论课">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
        </table>
        <table style="width: 100%">
          <tr>
            <td style="width: 50%;text-align: center">
              <el-button type="success" plain @click="gotoStartSeminar">确认</el-button>
            </td>
            <td style="width: 50%;text-align: center">
              <el-button type="warning" plain @click="CancelPopBox">取消</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TotalSeminar",
    data() {
      return {
        data: [{
          label: 'OOAD',
          children: [{
            label: '第一轮',
            children: [{
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
          }]
        }, {
          label: 'J2EE',
          children: [{
            label: '第一轮',
            children: [{
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
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        options: [
          {
            value: '选项1',
            label: 'OOAD'
          }, {
            value: '选项2',
            label: 'J2EE'
          }
        ],
        value: '',
        options2: [
          {
            value: '选项1',
            label: '2016--1'
          }, {
            value: '选项2',
            label: '2016--2'
          }
        ],
        value2: '',
        options3: [
          {
            value: '选项1',
            label: '界面'
          }, {
            value: '选项2',
            label: '模型'
          }
        ],
        value3: '',

      }
    },
    methods: {
      handleNodeClick(data) {
        if (data.label === '2016--1')
          this.$router.push({path: '/teacher/SeminarPage'});
      },
      returnLogin() {
        this.$router.push({path: '/'});
      },
      returnSeminarPage() {
        this.$router.push({path: '/teacher/SeminarPage'});
      },
      gotoSeminar() {
        var show = document.getElementById("pop-box");
        show.style.display = "block";
      },
      gotoStartSeminar() {
        this.$router.push({path: '/teacher/StartSeminar'});
      },
      CancelPopBox() {
        var show = document.getElementById("pop-box");
        show.style.display = "none";
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
    height: 60px;
    text-align: right;
    line-height: 60px;
  }

  .btn {
    margin-right: 5px;
  }

  .main {
    margin-top: 5px;
  }
</style>
