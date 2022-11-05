<template>
  <div class="app-container">
    <h1>App根组件 --- {{ countFromSon }}</h1>
    <p>userinfo的值: {{ userinfo }}</p>
    <hr/>
    <div class="box">
      <Left :msg="message" :user="userinfo"></Left>
      <!-- 子向父传值--父 -->
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'

export default {
  data() {
    return {
      message: 'hello world',
      userinfo: {
        name: 'zs',
        age: 18
      },
      countFromSon: 0
    }
  },
  components: {
    Left,
    Right
  },
  methods: {
    // 子向父传值--父
    getNewCount(val) {
      this.countFromSon = val
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.box > div {
  height: 100%;
  flex: 1;
}
</style>