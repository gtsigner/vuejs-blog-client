import Vue from 'vue'
import App from './App'
import VueRoute from 'vue-router'

Vue.use(VueRoute);
const routes = [
  {
    path: '/index', component: resolve => require(['./views/index.vue'], resolve), beforeEnter: (to, from, next) => {
    console.log(to + ":" + "from");
    //this.$router.app.isShowBar = false;
    next();
  }
  },
  {path: '/signin', component: resolve=>require(['./views/user/signin.vue'], resolve)},
  {path: '/signup', component: resolve=>require(['./views/user/signup.vue'], resolve)},
  {path: '/home', component: resolve=>require(['./views/home.vue'], resolve)},
  {path: '/user/:id', component: resolve=>require(['./views/user/profiles.vue'], resolve)},
  {path: '/about', component: resolve=>require(['./views/pages/about.vue'], resolve)},
  {path: '*', component: resolve => require(['./views/welcome.vue'], resolve)}
];

const router = new VueRoute({
  routes: routes
});

var vm = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
