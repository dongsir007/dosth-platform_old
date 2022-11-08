<template>
  <div class="about-container">
    <h3>关于我们</h3>
    <router-link to="/about">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .about-container {
    background-color: skyblue;
    > a {
      padding: 5px 5px;
    }
  }
</style>