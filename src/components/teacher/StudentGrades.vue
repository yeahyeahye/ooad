<template>
  <div>
    <div id="head" class="head">
      <div class="title"><i class="el-icon-back icon1" @click="returnCourseManage"></i>我的课程
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-menu icon1"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="el-icon-bell"></i>&nbsp;&nbsp;个人页</el-dropdown-item>
            <el-dropdown-item>
              <div @click="gotoSeminar"><i class="el-icon-service"></i>&nbsp;&nbsp;讨论课</div>
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
      <el-collapse accordion v-for="(round,index) in grades"
                   :key="index">
        <el-collapse-item>
          <template slot="title">
            {{round.name}}<i class="header-icon el-icon-info"></i>
          </template>
          <el-col>
            <el-menu v-for="(item0,index) in round.groups"
                     :key="index"
                     default-active="2"
                     class="el-menu-vertical-demo"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
              <el-submenu index="index">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{item0.groupId}}</span>
                </template>
                <el-menu-item-group v-for="(item1,index1) in item0.item"
                                    :key="index1">
                  <template slot="title">{{item1.topic}}</template>
                  <el-menu-item index="index-1">展示:{{item1.pre}}&nbsp;提问:{{item1.question}}&nbsp;报告:{{item1.report}}
                  </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">{{item0.total.name}}</template>
                  <el-menu-item index="index-1">展示:{{item0.total.pre}}&nbsp;提问:{{item0.total.question}}&nbsp;报告:{{item0.total.report}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-collapse-item>
      </el-collapse>

    </div>
  </div>
</template>

<script>
  export default {
    name: "CourseManage",
    data() {
      return {
        grades: [
          {
            name: '第一轮',
            groups: [
              {
                groupId: '1-1',
                item: [
                  {
                    topic: '用例分析',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'

                  },
                  {
                    topic: '界面原型',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'
                  }
                ],
                total: {
                  name: '总成绩',
                  pre: '5.0',
                  question: '5.0',
                  report: '5.0'
                }
              },
              {
                groupId: '1-2',
                item: [
                  {
                    topic: '用例分析',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'
                  },
                  {
                    topic: '界面原型',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'
                  }
                ],
                total: {
                  name: '总成绩',
                  pre: '5.0',
                  question: '5.0',
                  report: '5.0'
                }
              }
            ],

          },
          {
            name: '第二轮',
            groups: [
              {
                groupId: '1-1',
                item: [
                  {
                    topic: '用例分析',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'
                  },
                  {
                    topic: '界面原型',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'
                  }
                ],
                total: {
                  name: '总成绩',
                  pre: '5.0',
                  question: '5.0',
                  report: '5.0'
                }
              },
              {
                groupId: '1-2',
                item: [
                  {
                    topic: '用例分析',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'
                  },
                  {
                    topic: '界面原型',
                    pre: '5.0',
                    question: '5.0',
                    report: '5.0'

                  }
                ],
                total: {
                  name: '总成绩',
                  pre: '5.0',
                  question: '5.0',
                  report: '5.0'
                }
              }
            ],

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

  .btn {
    width: 100%;
  }
</style>

