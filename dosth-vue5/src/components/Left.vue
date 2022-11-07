<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button @click="getInfo">发起Get请求</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async getInfo() {
      const { data: res } = await this.$http.get('/books')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  background-color: orange;
  min-height: 200px;
  flex: 1;
}
</style>
