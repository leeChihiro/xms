import axios from "axios";
import qs from "querystring";
import store from "./store";

const Axios = axios.create({
  // 服务器地址
  baseURL: "http://127.0.0.1:9999",
  // 携带 session 信息
  withCredentials: true,
  // timeout: 3000
});

// 拦截 request
Axios.interceptors.request.use(req => {
  // 配置 post 请求
  if (req.method.toLowerCase() == "post") {
    req.data = qs.stringify(req.data);
  }
  // 获取 token 信息
  req.headers.token = sessionStorage.getItem("token") || "";
  return req;
});
// 拦截 response
Axios.interceptors.response.use(res => {
  // 登录成功 状态码 600000
  if (+res.data.code == 600000) {
    // 设置 用户名
    store.commit("setUname", res.data.uname);
    // 把用户名保存到 session 中
    sessionStorage.setItem("uname", res.data.uname);
    // 登陆状态设置为 true
    store.commit("setIsLogin", true);
    // 把 token 保存到 session 中
    sessionStorage.setItem("token", res.data.token);
  }
  return res;
});
export default {
  install(Vue) {
    // 把 Axios 放到 Vue 原型中
    Object.defineProperty(Vue.prototype, "axios", { value: Axios });
  }
};
