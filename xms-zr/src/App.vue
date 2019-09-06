<template>
  <div id="app" class="w980">
    <!-- 头部 -->
    <router-view name="header"></router-view>
    <!-- 内容区域 -->
    <router-view name="content"></router-view>
    <!-- 尾部 -->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import "./assets/css/base.scss";
export default {
  name: "app",
  mounted() {},
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
}
</style>
