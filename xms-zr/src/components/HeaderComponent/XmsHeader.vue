<template>
  <header>
    <el-row class="mb15">
      <el-col :span="4" class="center">
        <!-- logo -->
        <router-link to="/">
          <el-image
            style=" width: 160px; height: 51px;"
            :src="require('../../assets/image/logo.png')"
            fit="contain"
          ></el-image>
        </router-link>
        <!-- 搜索框 -->
      </el-col>
      <el-col :span="12" class="pt7 pl25" style="display:flex">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
        <el-button type="primary" icon="el-icon-search"></el-button>
      </el-col>
      <el-col class="pt15 pl5" :span="8">
        <!-- 上传 / 提问 / 登录 / 注册 -->
        <login-tab></login-tab>
      </el-col>
    </el-row>

    <!-- 导航菜单 -->
    <el-row
      style="margin-left:-9999px;padding-left:9999px;margin-right:-9999px;padding-right:9999px;background-color:#fa7e3e;"
      type="flex"
      class="mb10 pt5"
    >
      <el-col :span="24">
        <el-menu
          :default-active="activeItem"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#fa7e3e"
          text-color="#ffffff"
          active-text-color="#fa7e3e"
          @select="item=>this.activeItem=item"
          :router="true"
        >
          <el-menu-item
            v-for="(val,key,index) of menuItem"
            :key="index"
            :index="val.name"
            :route="val.url"
          >
            <span style="font-size:16px">{{val.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </header>
</template>
<script>
import LoginTab from "./LoginTab";
export default {
  data() {
    return {
      search: "",
      menuItem: [
        { name: "首页", url: { path: "/" } },
        { name: "菜谱大全", url: { path: "/" } },
        { name: "家常菜谱", url: { path: "/" } },
        { name: "美食问答", url: { path: "/" } },
        { name: "食谱分类", url: { path: "/" } },
        { name: "健康食疗", url: { path: "/" } },
        { name: "厨友排行", url: { path: "/" } },
        { name: "用户搜索", url: { path: "/" } },
        { name: "公告", url: { path: "/" } }
      ]
    };
  },
  computed: {
    activeItem: {
      get() {
        return this.$store.getters.activeItem;
      },
      set(val) {
        this.$store.commit("setActiveItem", val);
      }
    }
  },
  components: {
    LoginTab
  }
};
</script>
<style scoped>
.pt7 {
  padding-top: 7px;
}
[v-cloak] {
  display: none;
}
/* 修改element样式 */
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #fff !important;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 35px;
  line-height: 35px;
}
</style>
