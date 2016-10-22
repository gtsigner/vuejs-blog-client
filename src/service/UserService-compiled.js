'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _apiConfig = require('../api-config');

var _apiConfig2 = _interopRequireDefault(_apiConfig);

require('whatwg-fetch');

var _jsCookie = require('js-cookie');

var Cookies = _interopRequireWildcard(_jsCookie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService = function () {
  function UserService(options) {
    (0, _classCallCheck3.default)(this, UserService);
  }

  (0, _createClass3.default)(UserService, [{
    key: 'loginUser',
    value: function loginUser(options, success, error) {
      var loginUserData = new FormData();
      loginUserData.append('username', options.data.username);
      loginUserData.append('password', options.data.password);
      loginUserData.append('verify_code', options.data.verify_code);

      var self = this;
      fetch(_apiConfig2.default.ApiUrl.SignIn, {
        method: 'POST',
        headers: {},
        body: loginUserData
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (1001 === json.code) {
          self._saveUserToken(json.data);
        }
        success(json);
      }).catch(function (ex) {
        var err = { message: '网络错误', code: 4 };
        error(err);
      });
    }
  }, {
    key: 'regUser',
    value: function regUser(options, success, error) {
      var regUserData = new FormData();
      regUserData.append('username', options.data.username);
      regUserData.append('password', options.data.password);
      regUserData.append('repassword', options.data.repassword);
      regUserData.append('verify_code', options.data.verify_code);

      if (options.data.repassword !== options.data.password) {
        var err = { message: '2次密码不相同', code: 2 };
        error(err);
        return;
      }
      fetch(_apiConfig2.default.ApiUrl.SignUp, {
        method: 'POST',
        headers: {},
        body: regUserData
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        success(json);
      }).catch(function (ex) {
        var err = { message: '网络错误', code: 4 };
        error(err);
      });
    }
  }, {
    key: '_saveUserToken',
    value: function _saveUserToken(data) {
      Cookies.set('access_token', data.access_token);
      console.log('设置Cookie成功');
    }
  }], [{
    key: 'isUserLogin',
    value: function isUserLogin(callback) {
      var token = Cookies.get('access_token');
      if (token) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'LoginOut',
    value: function LoginOut() {
      Cookies.remove('access_token');
    }
  }]);
  return UserService;
}();

exports.default = UserService;

//# sourceMappingURL=UserService-compiled.js.map