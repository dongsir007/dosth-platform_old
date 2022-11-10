<template>
  <div class="layout-header-container d-flex justify-content-between align-items-center p-3">
    <!-- 左侧logo和标题栏区域 -->
    <div class="layout-header-left d-flex align-items-center user-select-none">
      <!-- logo -->
      <img class="layout-header-left-img" src="../../assets/logo.png">
      <!-- 标题 -->
      <h4 class="layout-header-left-title ml-3">后台管理系统</h4>
    </div>
    <!-- 右侧按钮区域 -->
    <div class="layout-header-right">
      <button type="button" class="btn btn-light" @click="logout">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  .layout-header-container {
    height: 60px;
  }
</style>