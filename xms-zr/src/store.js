import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 登陆是否过期
    isLogin: !!sessionStorage.getItem("token"),
    // 用户名
    uname: sessionStorage.getItem("uname")||"",
    // 选中项
    activeItem:"首页"
  },
  getters: {
    isLogin: state => {
      return state.isLogin;
    },
    uname:state=>{
      return state.uname;
    },
    activeItem:state=>{
      return state.activeItem;
    }
  },
  mutations: {
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
    setUname(state, uname) {
      state.uname = uname;
    },
    setActiveItem(state,activeItem){
      state.activeItem = activeItem;
    }
  },
  actions: {}
});
