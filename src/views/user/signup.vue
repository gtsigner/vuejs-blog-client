<template>
  <div class="col-md-offset-4 col-md-3">
    <div class="form-header">
      <h3>用户注册</h3>
    </div>
    <form class="ey-ui-form" action="" method="get">
      <div class="ey-ui-form-group">
        <label class="ey-ui-form-label" for="username">用户名：</label>
        <div class="ey-ui-form-control">
          <input id="username" type="text" name="username"
                 v-model="user.username">
        </div>
      </div>
      <div class="ey-ui-form-group">
        <label class="ey-ui-form-label" for="password">密码：</label>
        <div class="ey-ui-form-control">
          <input id="password" type="text" v-model="user.password">
        </div>
      </div>
      <div class="ey-ui-form-group">
        <label class="ey-ui-form-label" for="repassword">确认密码：</label>
        <div class="ey-ui-form-control">
          <input id="repassword" type="text" v-model="user.repassword">
        </div>
      </div>
      <div class="ey-ui-form-group">
        <label class="ey-ui-form-label" for="verify">验证码：</label>
        <div class="ey-ui-form-control">
          <input id="verify" type="text" v-model="user.verify_code">
        </div>
      </div>
      <div class="ey-ui-form-group text-center">
        <button type="button" class="ey-ui-btn ey-ui-btn-submit" v-on:click="signup">注册系统</button>
      </div>
    </form>
  </div>
</template>
<script>

  import UserService from '../../service/UserService';
  export default{
    data(){
      return {
        user: {username: '', password: '', repassword: '', verify_code: ''},
      }
    },
    methods: {
      signup(){
        let service = new UserService();
        service.regUser({data: this.user}, function (res) {
          alert(res.msg);
          if (1001 !== res.code) {

          }
        }, function (err) {
          console.log(err);
          alert(err.message);
        })
      }
    },
    components: {}
  }
</script>
<style lang="scss">
  @import "../../assets/sass/variable";

  .ey-ui-form {
    padding: 15px;
  }

  .form-header {
    margin-bottom: 20px;
    padding: 5px;
  }

  .form-header {

  h3 {
    font-size: 20px;
    padding: 10px;
    border-bottom: 3px solid #{$color-main-green};
  }

  }

</style>

