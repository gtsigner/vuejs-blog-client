<template>
  <div class="row">
    <div class="col-md-offset-4 col-md-3">
      <div class="form-header">
        <h3>用户登陆</h3>
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
          <label class="ey-ui-form-label" for="verify">验证码：</label>
          <div class="ey-ui-form-control">
            <input id="verify" type="text" v-model="user.verify_code">
          </div>
        </div>
        <div class="ey-ui-form-group text-center">
          <button type="button" class="ey-ui-btn ey-ui-btn-submit" v-on:click="signin">登陆使用</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

  import UserService from '../../service/UserService';
  export default{
    data(){
      return {
        user: {username: '', password: '', verify_code: ''},
      }
    },
    methods: {
      signin(){
        let service = new UserService();
        let self = this;
        service.loginUser({data: this.user}, function (res) {
          if (1001 !== res.code) {
            //跳转
            alert(res.msg);
          } else {
            //跳转
            alert('登陆成功');
            self.$router.replace('/home');
          }
        }, function (err) {
          alert(err.msg);
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

