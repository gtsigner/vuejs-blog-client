/**
 * Created by zhaojunlike on 2016/10/20.
 */

import ApiConfig from '../api-config';
import 'whatwg-fetch';
import * as Cookies from "js-cookie";

export default class UserService {

  constructor(options) {

  }

  loginUser(options, success, error) {

    // 这里可以验证data
    let loginUserData = new FormData();
    loginUserData.append('username', options.data.username);
    loginUserData.append('password', options.data.password);
    loginUserData.append('verify_code', options.data.verify_code);

    let self = this;
    fetch(ApiConfig.ApiUrl.SignIn, {
      method: 'POST',
      headers: {},
      body: loginUserData
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      if (1001 === json.code) {
        self._saveUserToken(json.data);
      }
      success(json);
    }).catch(function (ex) {
      let err = {message: '网络错误', code: 4};
      error(err);
    })
  }

  regUser(options, success, error) {

    // 这里可以验证data
    let regUserData = new FormData();
    regUserData.append('username', options.data.username);
    regUserData.append('password', options.data.password);
    regUserData.append('repassword', options.data.repassword);
    regUserData.append('verify_code', options.data.verify_code);

    if (options.data.repassword !== options.data.password) {
      let err = {message: '2次密码不相同', code: 2};
      error(err);
      return;
    }
    fetch(ApiConfig.ApiUrl.SignUp, {
      method: 'POST',
      headers: {},
      body: regUserData
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      success(json);
    }).catch(function (ex) {
      let err = {message: '网络错误', code: 4};
      error(err);
    });
  }


  /**
   *
   * @param callback
   * @returns {boolean}
   */
  static isUserLogin(callback) {
    let token = Cookies.get('access_token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  //存储用户得信息
  _saveUserToken(data) {
    Cookies.set('access_token', data.access_token);
    console.log('设置Cookie成功');
  }


  static LoginOut() {
    Cookies.remove('access_token');
  }

}
