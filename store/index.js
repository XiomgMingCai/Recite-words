import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 状态
var state = {
  newbi: 1,//注册否
  serverIP: '127.0.0.1',
  leftmenuShow: 1//
  //
};
/**
 * 用原生 ajax
 */
/*var stare, xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    state = eval('(' + xmlhttp.responseText + ')')
  }else {
    state = {serverIP:0}
  }
};

/!**
 * http://127.0.0.1/
 * @false :同步获取 默认异步
 *!/
xmlhttp.open("http://127.0.0.1/json/users.php",false);*/

export default new Vuex.Store({
  state
})
