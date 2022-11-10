<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <Header></Header>
    <!-- 页面主体-->
    <div class="home-main-box">
      <!-- 左侧侧边栏 -->
      <Aside></Aside>
      <!-- 右侧主体 -->
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './subcomponents/Header.vue'
import Aside from './subcomponents/Aside.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  background-color: skyblue;
  height: 100%;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>