'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
var routes = [{
  path: '/index', component: function component(resolve) {
    return require(['./views/index.vue'], resolve);
  }, beforeEnter: function beforeEnter(to, from, next) {
    console.log(to + ":" + "from");

    next();
  }
}, { path: '/signin', component: function component(resolve) {
    return require(['./views/user/signin.vue'], resolve);
  } }, { path: '/signup', component: function component(resolve) {
    return require(['./views/user/signup.vue'], resolve);
  } }, { path: '/home', component: function component(resolve) {
    return require(['./views/home.vue'], resolve);
  } }, { path: '/user/:id', component: function component(resolve) {
    return require(['./views/user/profiles.vue'], resolve);
  } }, { path: '/about', component: function component(resolve) {
    return require(['./views/pages/about.vue'], resolve);
  } }, { path: '*', component: function component(resolve) {
    return require(['./views/welcome.vue'], resolve);
  } }];

var router = new _vueRouter2.default({
  routes: routes
});

var vm = new _vue2.default({
  router: router,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app');

//# sourceMappingURL=main-compiled.js.map