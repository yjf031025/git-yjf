<template>
  <div class="big">
    <div class="Login">
      <el-form ref="loginForm" :model="loginForm" :rules="rules">
        <img src="@/assets/logo.png" alt="">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">&emsp;
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="a">
            <el-button type="primary" @click="GoLogin">登录</el-button>
            <el-button type="info">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import LoginApi from "@/http/api";
import { isIP } from "net";
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 5, max: 20, message: "用户名长度在5-20个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 16, message: "密码长度在6-16个字符", trigger: "blur" },
        ],
      },
      list: "",
    };
  },
  methods: {
    GoLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return false;
        //开始调用后台接口进行验证
        const res = await LoginApi(this.loginForm);
        console.log("登录成功或失败", res);
        if (
          this.loginForm.username === "admin" &&
          this.loginForm.password === "123456"
        ) {
          this.$router.push("/home");
        } else {
          alert("用户名或密码错误");
        }
      });
    },
  },
  components: {},
};
</script>
<style lang="scss">
.big {
  width: 100%;
  height: 100%;
  background-color: rgb(27, 21, 65);
  position: absolute;
  left: 0;
  top: 0;
  .Login {
    width: 31.25rem;
    height: 18.75rem;
    background-color: white;
    position: relative;
    left: 33%;
    top: 25%;
    .el-input {
      width: 300px;
    }
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      position: absolute;
      left: 180px;
      top: -50px;
      display: inline-block;
      border: 1px solid white;
      border-radius: 55px;
    }
  }
  .el-form {
    padding-top: 80px;
  }
  .el-form-item {
    margin-left: 50px;
  }
  .a {
    margin-left: 7rem;
  }
}
</style>
