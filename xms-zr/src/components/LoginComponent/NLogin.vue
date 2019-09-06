<template>
  <div class="root" @keyup.13="login" v-loading="isLoading">
    <slot name="zr" :loading="isLoading"></slot>
    <!-- 表头 -->
    <el-row class>
      <div class="title-bg">
        <span class="title">登录</span>
      </div>
    </el-row>
    <!-- 用户名 -->
    <el-row class="mt20">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-input
            ref="uname"
            clearable
            maxlength="16"
            placeholder="请输入用户名/邮箱"
            v-model.trim="uname"
          >
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <!-- 密码 -->
    <el-row class="mt10">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-input
            ref="upwd"
            clearable
            maxlength="16"
            type="password"
            placeholder="请输入密码"
            v-model.trim="upwd"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <!-- 免费注册 -->
    <el-row class="mt10">
      <el-col :span="24" class="text-right">
        <span>
          <a href="javascript:;">免费注册</a>
        </span>
      </el-col>
    </el-row>
    <!-- 登录按钮 -->
    <el-row class="mt15">
      <el-col :span="24">
        <el-button @click="login" type="warning" style="width:100%;font-size:16px">登录</el-button>
      </el-col>
    </el-row>
    <!-- 提示信息 -->
    <el-row class="mt10">
      <!-- 登录失败 -->
      <el-alert
        v-if="!!msg&&!(+code==600000)"
        :title="msg"
        type="error"
        center
        show-icon
        @close="close()"
      ></el-alert>
      <!-- 登录成功 -->
      <el-alert
        v-else-if="!!msg&&(+code==600000)"
        :title="msg"
        type="success"
        center
        show-icon
        :closable="false"
      ></el-alert>
    </el-row>
  </div>
</template>
<script>
export default {
  beforeRouterEnter: (to, from, next) => {
    // ...
    next();
  },
  mounted() {},
  data() {
    return {
      uname: "",
      unameMaxLength: 16,
      upwd: "",
      upwdMaxLength: 16,
      // 登录信息
      msg: "",
      // 登录码
      code: "",
      // 登录转圈圈
      isLoading: false
    };
  },
  watch: {
    uname() {
      this.msg = "";
      this.code = "";
    },
    upwd() {
      this.msg = "";
      this.code = "";
    }
  },
  methods: {
    // 登录
    async login() {
      let canPass = true;
      // 本地验证
      if (this.uname.trim().length < 4 || this.uname.trim().length > 16) {
        this.msg = "账号格式不正确！";
        canPass = false;
        return;
      }
      if (this.upwd.trim().length < 6 || this.upwd.trim().length > 16) {
        this.msg = "密码格式不正确！";
        canPass = false;
        return;
      }
      // 服务器端验证
      if (canPass) {
        this.isLoading = true;
        try {
          let res = Object.freeze(
            await this.axios.post("/user/login", {
              uname: this.uname,
              upwd: this.upwd
            })
          );
          this.msg = res.data.msg;
          this.code = res.data.code;
        } catch (error) {
          this.msg = "" + error;
        }
        this.isLoading = false;
      }
    },
    // 关闭错误提示
    close() {
      this.upwd = "";
      this.$refs.upwd.focus();
    }
  }
};
</script>

<style scoped>
.root {
  border-radius: 0px;
  border: 1px solid #dcdfe6;
  padding: 15px;
}
.title {
  font-size: 16px;
  background-color: #fff;
  padding: 0 14px;
  line-height: 1.3;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #a69f96;
}
.title-bg {
  background: url("../../assets/image/page_bg.gif") no-repeat center -82px;
}
</style>

