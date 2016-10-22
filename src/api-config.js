/**
 * Created by zhaojunlike on 2016/10/19.
 */

const API_BASE = 'http://localhost/oeynet_blog/public/api.php';
export default{
  ApiUrl: {
    SignIn: API_BASE + '/oauth/getToken',
    SignUp: API_BASE + "/oauth/reg"
  }
}
