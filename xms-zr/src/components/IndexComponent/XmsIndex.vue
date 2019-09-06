<template>
  <div>
    <div style="display:flex">
      <div style="flex-grow:1">
      </div>
      <div style="flex-grow:0;width:300px">
        <login></login>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "../../components/LoginComponent/XmsLogin"
export default {
  components:{
    Login
  }
};
</script>
<style scoped>
</style>