<template>
  <div style="display:flex;justify-content:space-around;align-items:center">
    <div>
      <router-link to="/upload">
        <i class="el-icon-upload"></i>&nbsp;上传
      </router-link>
    </div>
    <div>
      <a href="javascript:;">
        <i class="el-icon-question"></i>&nbsp;提问
      </a>
    </div>
    <!-- 如果没有登录 -->
    <div v-show="!$store.getters.isLogin">
      <a href="javascript:;">
        <i class="el-icon-lock"></i>&nbsp;登录
      </a>
    </div>
    <div v-show="!$store.getters.isLogin">
      <a href="javascript:;">
        <i class="el-icon-edit-outline"></i>&nbsp;注册
      </a>
    </div>
    <!-- 如果已经登录 -->
    <transition name="fade">
      <div v-show="$store.getters.isLogin" style="display:flex;align-items:center">
        <!-- 获取用户头像 -->
        <el-avatar :size="32" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564907551&di=1085c1603abded4349a1c34ff1fee97d&src=http://hbimg.b0.upaiyun.com/9fcf11927003f6763997b92829b0f04a28008adc24262-YHo65H_fw658"></el-avatar>
        <el-dropdown>
          <!-- 获取用户名 -->
          <span class="el-dropdown-link" v-cloak>
            &nbsp;{{$store.getters.uname}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="javascript:;">
              <el-dropdown-item v-for="(item,index) of dropdownItem" :key="index" v-cloak>{{item}}</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdownItem: [
        "我的厨房",
        "我的收藏",
        "我的消息",
        "我的草稿",
        "特批食谱",
        "我的设置",
        "退出"
      ]
    };
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
.el-dropdown-menu__item {
  padding: 0 25px;
  font-size: 16px;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #ecf5ff;
  color: #fa7e3e;
}
.fade-enter-active,
.fade-leave-active {
  transition: filter .5s;
}
.fade-enter,
.fade-leave-active {
  filter: blur(1px);
}
</style>