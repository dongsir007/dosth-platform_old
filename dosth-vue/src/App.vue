<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <hr/>
    <button @click="flag = !flag">Toggle Flag</button>
    <Lifecycle v-if="flag" info="你好"></Lifecycle>
    <hr/>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Lifecycle from '@/components/Lifecycle.vue'

export default {
  data() {
    return {
      flag: true
    }
  },
  components: {
    Left,
    Right,
    Lifecycle
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