<template>
  <div class="home">
    <div class="log-box">
      <h1>后台管理</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-button>登录</el-button>
        <el-button>重置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      form: {},
    };
  },
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(43, 95, 138);
  .log-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 500px;
    height: 300px;
    background-color: #fff;
  }
}
</style>
