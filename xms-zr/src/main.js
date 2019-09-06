import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
// import "../public/theme/index.css";
import "element-ui/lib/theme-chalk/index.css";
import axios from "./axios";
import router from "./router";
import Vuex from "vuex";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(axios);
Vue.use(Vuex);

// 全局守卫
router.beforeEach((to, from, next) => {
  /* 修改导航栏菜单选中项
     ======================================================================== */
  let data = [{ path: "/upload", name: "上传" }, { path: "/", name: "首页" }];
  for (let d of data) {
    if (to.path == d.path) {
      store.commit("setActiveItem", d.name);
    }
  }
  next(true);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
