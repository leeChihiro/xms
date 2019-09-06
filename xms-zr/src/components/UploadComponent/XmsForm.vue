<template>
  <div>
    <el-row type="flex" justify="center" :class="{pt35:!$slots.once}">
      <el-col :span="span" class="text-left">
        <span class="l">{{label}}</span>&nbsp;&nbsp;&nbsp;
        <span class="warn" v-show="!!warn">{{warn}}</span>&nbsp;&nbsp;&nbsp;
        <span class="tip" v-show="!!tip">{{tip}}</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" :class="{pt10:!$slots.once}">
      <el-col :span="span">
        <div v-for="(item,index) in new Array(times)" :key="index">
          <slot :index="index"></slot>
        </div>
        <slot name="once"></slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: {
    // 占多宽
    span: {
      type: Number,
      required: false,
      default: 24,
      validator: function(val) {
        return val >= 0 && val < 25;
      }
    },
    // 标签
    label: {
      type: String,
      required: false,
      default: "",
      validator: function(val) {
        return val.length < 7;
      }
    },
    // 建议信息
    tip: {
      type: String,
      required: false,
      default: "",
      validator(val) {
        return val.length < 20;
      }
    },
    // 警告信息
    warn: {
      type: String,
      required: false,
      default: "",
      validator(val) {
        return val.length < 7;
      }
    },
    // 表单内容展示多少次
    times: {
      type: Number,
      required: false,
      default: 1,
      validator(val) {
        return 0 < val && val < 11;
      }
    }
  }
};
</script>
<style scoped>
.l {
  font-size: 16px;
  color: #817c74;
}
.warn {
  font-size: 12px;
  color: #fa7e3e;
  background-color: #f5f7fa;
  padding: 3px;
}
.tip {
  font-size: 12px;
  color: #817c74;
}
</style>