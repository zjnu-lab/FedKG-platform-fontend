<template>
  <div id="app">
    <el-container>
      <el-header style="height: 100%;">
        <div class="flex-between">
          <div class="logo">
            <img :src="logoimg" />
          </div>
          <div clss="menu">
            <el-menu default-active="/" mode="horizontal" :router="true" :ellipsis="false" @select="handleSelect">
              <el-menu-item index="home">首页</el-menu-item>
              <el-sub-menu index="1">
                <template #title>知识图谱</template>
                <el-menu-item index="knowledgeMapShow">展示</el-menu-item>  
                <el-menu-item index="knowledgeMapSearch">搜索</el-menu-item>  
                <el-menu-item index="knowledgeMapAdd">添加</el-menu-item>  
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>实体添加</template>
                <el-menu-item index="realityUserList">待审实体(用户)</el-menu-item>  
                <el-menu-item index="realityAdminList">待审实体(管理员)</el-menu-item>  
                <el-menu-item index="realityPassList">已通过实体</el-menu-item>  
                <el-menu-item index="realityWaitSyncList">等待同步实体</el-menu-item>  
                <el-menu-item index="realityModify">修改实体</el-menu-item>  
                <el-menu-item index="integral">积分</el-menu-item>  
              </el-sub-menu>
              <el-sub-menu index="3">
                <template #title>用户</template>
                <el-menu-item index="login">登陆</el-menu-item>  
                <el-menu-item index="signUp">注册用户</el-menu-item>  
                <el-menu-item index="changePassword">修改密码</el-menu-item>  
              </el-sub-menu>
            </el-menu>
          </div>
        </div>
      </el-header>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import logoimg from "@/assets/zslogo.jpg";
export default {
  name: "App",
  setup(props, ctx) {
    return {
      logoimg,
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  .logo{ img{
    width: 64px;
    height: 64px;
  }}
}
.content{
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: calc(100vh - 100px);
}
</style>
