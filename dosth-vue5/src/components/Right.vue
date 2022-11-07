<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <button @click="postInfo">发起POST请求</button>
    <button @click="getBooks">获取图书信息</button>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post('/books')
      console.log(res)
    },
    async getBooks() {
      const { data: res } = await this.$http.get('/')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.right-container {
  background-color: skyblue;
  min-height: 200px;
  flex: 1;
}
</style>
