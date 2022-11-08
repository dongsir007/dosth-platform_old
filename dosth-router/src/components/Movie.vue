<template>
  <div class="movie-container">
    <!-- this.$route是路由的参数对象 -->    
    <!-- this.$router是路由的导航对象 -->
    <h3>Movie组件 --- {{ this.$route.params.mid }} --- {{ mid }}</h3>
    <span> {{ this.$route.query.name }} -- {{ this.$route.query.age }}</span>
    <hr/>
    <span> {{ this.$route.path }}</span>
    <hr/>
    <span> {{ this.$route.fullPath }}</span>
    <hr/>
    <button @click="showThis">打印this</button>
    <hr/>
    <button @click="goback">后退</button>
    <hr/>
    <button @click="back">back后退</button>
    <hr/>
    <button @click="forward">forward前进</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: [ 'mid' ],
  methods: {
    showThis() {
      console.log(this)
    },
    goback() {
      this.$router.go(-1)
    },
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  }
}
</script>

<style lang="less" scoped>
  .movie-container {
    background-color: chocolate;
  }
</style>