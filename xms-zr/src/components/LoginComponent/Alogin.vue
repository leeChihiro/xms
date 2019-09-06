<template>
  <div>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <el-row>
          <el-col :span="22" :offset="1">
            <el-avatar :size="100" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564907551&di=1085c1603abded4349a1c34ff1fee97d&src=http://hbimg.b0.upaiyun.com/9fcf11927003f6763997b92829b0f04a28008adc24262-YHo65H_fw658"></el-avatar>
          </el-col>
          <el-col :span="1">
            <!-- <el-button type="primary" size="large" circle icon="el-icon-setting"></el-button> -->
            <a href="javascript:;"><i class="el-icon-setting" style="font-size:22px"></i></a>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <p class="mgt10">{{$store.getters.uname||"没有用户名"}}</p>
          </el-col>
        </el-row>
      </div>
      <div class="pl35 pr35">
        <el-row>
          <el-col class="bdb p10" :span="12">
            <div class="grid-content bg-purple">
              <a href="javascript:;">我的收藏</a>
            </div>
          </el-col>
          <el-col class="bdb bdl p10" :span="12">
            <div class="grid-content bg-purple-light">
              <a href="javascript:;">我的厨房</a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="bdb p10" :span="12">
            <div class="grid-content bg-purple">
              <a href="javascript:;">我的问题</a>
            </div>
          </el-col>
          <el-col class="bdb bdl p10" :span="12">
            <div class="grid-content bg-purple-light">
              <a href="javascript:;">我的消息</a>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="p10" :span="12">
            <div class="grid-content bg-purple">
              <a href="javascript:;">上传食谱</a>
            </div>
          </el-col>
          <el-col class="bdl p10" :span="12">
            <div class="grid-content bg-purple-light">
              <a href="javascript:;">我的草稿</a>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>
<style scoped>
.bdb {
  border-bottom: 1px solid #eae6e3;
}
.bdl {
  border-left: 1px solid #eae6e3;
}
</style>