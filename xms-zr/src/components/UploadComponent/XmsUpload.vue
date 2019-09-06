<template>
  <div>
    <!-- 登陆过了 -->
    <div v-if="!$store.getters.isLogin">
      <el-tabs type="border-card">
        <el-tab-pane label="特色上传">
          <!-- 标题 -->
          <el-row>
            <el-col :span="24" style="display:flex;justify-content:flex-start">
              <h2 style="color:#A69F96">基本信息</h2>
            </el-col>
          </el-row>
          <!-- 中间横线 -->
          <el-row>
            <div class="mt15" style="border:1px solid #EAE6E3"></div>
          </el-row>
          <!-- 内容 -->
          <!-- 标题 -->
          <xms-form :span="17" warn="必填" label="标题">
            <el-input placeholder="请输入内容"></el-input>
          </xms-form>
          <!-- 材料 -->
          <xms-form :span="17" :times="times" warn="必填" label="材料" #default="{index}">
            <el-row class="pt3">
              <el-col :span="6">
                <el-input placeholder="材料" v-model.trim="material[2*index].name"></el-input>
              </el-col>
              <el-col :span="5">
                <el-input placeholder="重量" v-model.number="material[2*index].weight">
                  <template slot="append">g</template>
                </el-input>
              </el-col>
              <el-col :span="6" :offset="2">
                <el-input placeholder="材料" v-model.trim="material[2*index+1].name"></el-input>
              </el-col>
              <el-col :span="5">
                <el-input placeholder="重量" v-model.number="material[2*index+1].weigth">
                  <template slot="append">g</template>
                </el-input>
              </el-col>
            </el-row>
          </xms-form>
          <!-- 继续添加 -->
          <xms-form #once :span="17" class="text-left" v-show="this.times<10">
            <el-button type="primary" icon="el-icon-plus" @click="addMaterial">继续添加</el-button>
          </xms-form>
          <!-- 步骤 -->
          <xms-form :span="17" warn="必填" label="步骤" tip="最后一步图片做封面">
            <el-input placeholder="请输入内容"></el-input>
          </xms-form>
          <!-- 验证 -->
          <xms-form :span="17" warn="发布必填" label="验证">
            <el-input placeholder="请输入内容"></el-input>
          </xms-form>
        </el-tab-pane>
        <el-tab-pane label="传统上传">传统上传</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 没有登录 -->
    <el-row v-else>
      <el-col :span="24">没有登录</el-col>
    </el-row>
  </div>
</template>
<script>
import XmsForm from "./XmsForm";
export default {
  async beforeRouteLeave(to, from, next) {
    const answer = await confirm(
      "确认离开么？\r\n你有【未保存】的内容"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    addMaterial() {
      this.material.push({});
      this.material.push({});
      this.times++;
    }
  },
  watch: {},
  data() {
    return {
      // 存储用户输入的材料信息
      material: [{}, {}],
      times: 1
    };
  },
  components: {
    XmsForm
  }
};
</script>
<style scoped>
</style>