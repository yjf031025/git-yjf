<template>
  <div class="home">
    <el-container>
      <el-header>后台管理系统
        <el-button type="info">退出</el-button>
      </el-header>
      <el-aside width="200px">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span></span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-1"></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <div class="a">
        <el-form>
          <el-form-item>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="work-form">
              <el-input>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <el-button type="primary">添加角色</el-button>
            </div>
          </el-form-item>
        </el-form>
        <div class="aaa">
          <el-table style="width: 100%">
            <el-table-column prop="roleDesc" label="编号" width="180"></el-table-column>
            <el-table-column prop="roleName" label="姓名" width="180"></el-table-column>
            <el-table-column prop="id" label="id"></el-table-column>
            <el-table-column label="操作">
              <el-button type="primary">编辑</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="info">分台管理</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
.home {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: white;
}
.el-container is-vertical {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(10, 10, 68);
  color: white;
  font-size: 20px;
  font-weight: 700;
}
.el-aside {
  height: 660px;
  background-color: gray;
}
.el-input__inner {
  width: 300px;
  margin-left: 200px;
}
.a {
  width: 850px;
  height: 700px;
  position: absolute;
  left: 270px;
  top: 60px;
}
.aa {
  margin-top: 20px;
  margin-left: 20px;
}
.work-form {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  button {
    margin-left: 700px;
  }
}
.el-form {
  padding: 0;
  margin: 0;
}
.el-breadcrumb {
  margin-top: 20px;
}
</style>

