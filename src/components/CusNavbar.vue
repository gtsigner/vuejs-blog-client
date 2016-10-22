<template>
  <nav class="ey-ui-navbar">
    <ul>
      <li class="ey-ui-navbar-item" v-for="menu in menus">
        <router-link tag="a" v-bind:to="{path: menu.path, replace: true}">{{menu.title}}</router-link>
      </li>
      <div class="pull-right">
        <li class="ey-ui-navbar-item">
          <router-link to="/signin">登陆</router-link>
        </li>
        <li class="ey-ui-navbar-item">
          <router-link to="/signup" style="margin-left:-4px;">注册</router-link>
        </li>
      </div>
      <div class="pull-right">
        <li class="ey-ui-navbar-item">
          <router-link to="/user/center">个人中心</router-link>
        </li>
        <li class="ey-ui-navbar-item" style="margin-left:-4px;">
          <a v-on:click="logout">退出</a>
        </li>
      </div>
      <span class="ey-ui-nav-bar" style="left: 20px; top: 55px; width: 0px; opacity: 0;"></span>
    </ul>
    <div class="ey-ui-user-panel">


    </div>
  </nav>
</template>
<style lang="scss">
  @import "../assets/sass/variable";

  .#{$prefix}navbar {
    display: block;
    position: relative;
    width: 100%;
    height: 60px;

    ul {
      position: relative;
      padding: 0 60px;
      background-color: #393D49;
      color: #c2c2c2;
      border-radius: 2px;
      font-size: 0;
      line-height: 60px;
      box-sizing: border-box !important;

      .#{$prefix}navbar-item {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 60px;
        margin: 0px;
        padding: 0px;
        a {
          display: block;
          padding: 0 20px;
          color: #c2c2c2;
          transition: all .2s;
          font-size: 16px;
          line-height: 60px;
          margin: 0px;
          -webkit-transition: all .2s;
          text-decoration: none;
        }
        a:hover, .router-link-active {
          color: #fff;
          background-color: $color-main-green;
        }

      }
    }
  }
</style>
<script>
  import UserService from '../service/UserService';
  export default{
    data () {
      return {
        menus: [
          {title: '首页', path: '/index', icon: ''},
          {title: '博客', path: '/blog', icon: ''},
          {title: '校园', path: '/school', icon: ''},
          {title: '交友', path: '/friend', icon: ''},
          {title: '兼职', path: '/works', icon: ''},
          {title: '简历', path: '/our', icon: ''},
          {title: '分享', path: '/share', icon: ''},
        ]
      }
    },
    components: {},
    created(){
    },
    methods: {
      logout(){
        UserService.LoginOut();
        this.$router.replace('/');
      }
    }
  }

</script>
