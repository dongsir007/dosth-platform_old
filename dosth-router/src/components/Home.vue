<template>
  <div class="home-container">
    <h3>Home</h3>
    <hr/>
    <button @click="gotoLk">跳转到"洛基"</button>
    <hr/>
    <button @click="gotoLs">跳转到"雷神"</button>
    <hr/>
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    gotoLk() {
      // 通过编程式导航到"洛基",新增历史记录
      this.$router.push('/movie/1')
    },
    gotoLs() {
      // 通过编程式导航到"洛基",替换当前历史记录
      this.$router.replace('/movie/2')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  background-color: orange;
}
</style>