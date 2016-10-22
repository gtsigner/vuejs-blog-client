<template>
  <div id="app">
    <cus-navbar isLogin="isLogin" v-if="isShowBar"></cus-navbar>
    <div id="content" class="content">
      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
    </div>
    <cus-footer></cus-footer>
  </div>
</template>
<script>

  import CusNavbar from './components/CusNavbar';
  import './assets/sass/base.scss';
  import * as Cookies from "js-cookie";
  import UserService from './service/UserService';
  import CusFooter from './components/CusFooter';


  export default {
    name: 'app',
    data(){
      return {isLogin: false,isShowBar:true};
    },
    components: {
      CusNavbar,CusFooter
    },
    created(){
      //获取数据
      //判断用户是否已经登陆系统
      //this.isLogin = UserService.isUserLogin();
      //auto调整窗体得高度
    },
    isLogin(){
      return false;
    }
  }

</script>
<style>
  #content{
    min-height: 700px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
