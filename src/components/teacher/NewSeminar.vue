<template>
  <div class="body0">
    <div id="head" class="head">
      <div class="title"><i class="el-icon-close icon1" @click="returnSeminarPage"></i>新建讨论课</div>
    </div>
    <div class="main">
      <el-card class="box-card">
        <table style="width: 100%">
          <tr>
            <td style="width: 28%">讨论课主题</td>
            <td>
              <el-input v-model="name">
                <i slot="suffix" class="el-input__icon el-icon-edit"></i>
              </el-input>
            </td>
          </tr>
          <tr>
            <td style="width: 28%">讨论课要求</td>
            <td>
              <el-input class="textArea"
                        type="textarea"
                        placeholder="讨论课详情"
                        :autosize="{ minRows: 2, maxRows: 9}"
                        v-model="textarea1">
              </el-input>
            </td>
          </tr>
          <tr>
            <td style="width: 28%">讨论课次序号:</td>
            <td>
              <el-input-number size="mini"></el-input-number>
            </td>
          </tr>
          <tr>
            <td style="width: 28%">讨论课可见:</td>
            <td>
              <el-switch
                v-model="isVisible"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </td>
          </tr>
        </table>
      </el-card>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            2016--1<i class="header-icon el-icon-info"></i>
          </template>
          <el-card class="box-card">
            <table
              style="width:100%">
              <tr>
                <td style="width: 28%">报名开始:</td>
                <td style="text-align: right">
                  <el-date-picker
                    v-model="startTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    style="width:100%">
                  </el-date-picker>
                </td>
              </tr>
              <tr>
                <td style="width: 28%">报名截止:</td>
                <td style="text-align: right">
                  <el-date-picker
                    v-model="endTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    style="width: 100%">
                  </el-date-picker>
                </td>
              </tr>
              <tr>
                <td style="width: 28%">报名小组:</td>
                <td style="text-align: right">
                  <el-input-number size="mini" v-model="signUpNum"></el-input-number>
                </td>
              </tr>

            </table>
          </el-card>
        </el-collapse-item>
        <el-collapse-item title="2016--2">
          <el-card class="box-card">
            <table
              style="width:100%">
              <tr>
                <td style="width: 28%">报名开始:</td>
                <td style="text-align: right">
                  <el-date-picker
                    v-model="startTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    style="width:100%">
                  </el-date-picker>
                </td>
              </tr>
              <tr>
                <td style="width: 28%">报名截止:</td>
                <td style="text-align: right">
                  <el-date-picker
                    v-model="endTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    style="width: 100%">
                  </el-date-picker>
                </td>
              </tr>
              <tr>
                <td style="width: 28%">报名小组:</td>
                <td style="text-align: right">
                  <el-input-number size="mini" v-model="signUpNum"></el-input-number>
                </td>
              </tr>
            </table>
          </el-card>
        </el-collapse-item>
      </el-collapse>

      <div style="width: 100%;margin-top: 20px">
        <el-button class="btn" type="success" @click="NewSuccess">发布</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "NewSeminar",
    data() {
      return {
        isVisible: true,
        startTime: '',
        endTime: '',
        signUpNum: 1
      }
    },
    methods: {
      returnSeminarPage() {
        this.$router.push({path: '/teacher/SeminarPage'});
      }
    }
  }
</script>

<style scoped>

</style>
