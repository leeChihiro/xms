import Vue from "vue";
import Router from "vue-router";
// 引入组件

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      components: {
        login: () => import("./components/LoginComponent/XmsLogin"),
        header: () => import("./components/HeaderComponent/XmsHeader"),
        footer: () => import("./components/FooterComponent/XmsFooter"),
        content: () => import("./components/ContentComponent/XmsContent")
      },
      children: [
        {
          path: "index",
          alias: "",
          component: () => import("./components/IndexComponent/XmsIndex")
        },
        {
          path: "upload",
          component: () => import("./components/UploadComponent/XmsUpload")
        }
      ]
    }
  ]
});
