<template>
  <div class="body">
    <div id="head" class="login_head">
      <div class="title"><i class="el-icon-close icon1"></i>课堂管理系统登录</div>

    </div>
    <div class="login_main">
      <form>
        <table class="table0">
          <tr>
            <td class="td0"></td>
          </tr>
          <tr>
            <td class="td0">
              <el-input class="input0" type="text" placeholder="学号/教工号/管理员账号"></el-input>
            </td>
          </tr>
          <tr>
            <td class="td0">
              <div class="bottom">
                <el-tooltip class="item" effect="dark" content="可包含字母、数字、下划线，长度不少于6位" placement="bottom">
                  <el-input class="input0" id="pass" type="password" placeholder="输入密码"
                            suffix-icon="el-icon-view"></el-input>
                </el-tooltip>
              </div>
            </td>
          </tr>
          <tr>
            <td class="td0"></td>
          </tr>
          <tr>
            <td class="td0">
              <el-button class="btn" type="success" @click="Login">登录</el-button>
            </td>
          </tr>
          <tr>
            <td class="td0"><a @click="FindPassword" class="find_pass">忘记密码</a></td>
          </tr>

        </table>
      </form>
    </div>
    <div class="footer">
      <p>默认密码为123456</p>
    </div>
  </div>

</template>

<script>
  export default {
    methods: {
      Login() {

        this.$router.push({path: '/teacher/Activate'});

      },
      FindPassword() {
        this.$router.push({path: '/teacher/FindPassword'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login_head {
    height: 50px;
    width: 100%;
    background-color: #CCCCCC;
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

  .table0 {
    width: 50%;
    margin: auto;
  }

  @media (max-width: 640px) {
    .table0 {
      width: 100%;
    }
  }

  .td0 {
    width: 100%;
    height: 45px;


  }

  .btn {
    height: 36px;
    width: 100%;
    border: none;
    background-color: #99CCCC;
  }

  .find_pass {
    float: right;
    font-size: 12px;
    text-decoration: none;
  }

  .footer {
    position: fixed;
    height: 60px;
    width: 100%;
    bottom: 5px;
  }

  .footer p {
    text-align: center;
    line-height: 60px;
    color: rgb(11, 255, 139);
    font-size: 12px;
  }


</style>
