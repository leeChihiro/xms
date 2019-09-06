<template>
  <div>
    <!-- 已经登录 -->
    <transition name="fade">
      <a-login v-if="$store.getters.isLogin"></a-login>
    </transition>
    <!-- 未登录 -->
    <n-login v-if="!$store.getters.isLogin"></n-login>
  </div>
</template>
<script>
import ALogin from "./Alogin";
import NLogin from "./NLogin";
export default {
  components: {
    ALogin,
    NLogin
  },
  mounted() {}
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: filter .5s;
}
.fade-enter,
.fade-leave-active {
  filter: blur(1px);
}
</style>

