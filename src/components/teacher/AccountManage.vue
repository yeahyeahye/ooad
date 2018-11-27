<template>
  <div>
    <div id="head" class="head">
      <div class="title"><i class="el-icon-back icon1" @click="returnHomePage"></i>账户与设置
        <el-dropdown class="plus" trigger="click">
          <i class="el-icon-plus"></i>
          <el-dropdown-menu slot="dropdown">
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
    <div class="main">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.name" disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="教工号">
          <el-input v-model="formLabelAlign.account" disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="formLabelAlign.email">
            <i slot="suffix" class="el-input__icon el-icon-edit" @click="editEmail"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="账户密码">
          <el-input v-model="formLabelAlign.password" type="password" id="pass">
            <i slot="suffix" class="el-input__icon el-icon-edit" @click="editPassword"></i>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="message">
        <label>通知发送间隔</label>
        <el-select v-model="value" placeholder="请选择" class="interval">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="footer">
      <el-button class="btn" type="success" @click="returnHomePage">确认修改</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AccountManage",
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '邱老师',
          account: '123456789',
          email: '12345678@xmu.edu.cn',
          password: '111111',
          interval: '',
          isShow: false
        },
        options: [{
          value: '选项1',
          label: '每6h一次'
        }, {
          value: '选项2',
          label: '每3h一次'
        }, {
          value: '选项3',
          label: '每2h一次'
        }, {
          value: '选项4',
          label: '每1h一次'
        }],
        value: ''
      }
    },
    methods: {
      returnHomePage() {
        this.$router.push({path: '/teacher/HomePage'});
      },
      showPassword() {
        this.isShow = !this.isShow;
        var pass = document.getElementById("pass");
        if (this.isShow) {
          pass.type = "text";
        } else {
          pass.type = "password";
        }
      },
      returnLogin() {
        this.$router.push({path: '/'});
      },
      gotoSeminar() {
        this.$router.push({path: '/teacher/SeminarPage'});
      },
      editPassword() {
        this.$router.push({path: '/teacher/EditPassword'})
      },
      editEmail() {
        this.$router.push({path: '/teacher/EditEmail'});
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

  .main {
    margin-top: 25px;
    width: 100%;
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

  .plus {
    float: right;
    margin-right: 3%;
    line-height: 50px;
  }

  .message {
    width: 100%;
    margin-top: 30px;
    font-size: 14px;
  }

  .interval {
    width: 50%;
    float: right;
  }

  .footer {
    width: 100%;
    margin-top: 80px;
  }

  .btn {
    height: 36px;
    width: 100%;
    border: none;
    background-color: #66CCCC;
  }
</style>
