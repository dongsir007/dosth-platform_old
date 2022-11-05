<template>
  <div class="app-container">
    <h1 ref="myH1">App根组件 --- {{ countFromSon }}</h1>
    <p>userinfo的值: {{ userinfo }}</p>
    <hr/>
    <button @click="showThis">打印 This</button>
    <button @click="resetLeftCount">重置Left组件的count为1</button>
    <hr/>
    <input v-if="inputVisiable" type="text" @blur="showButton" ref="iptRef">
    <button v-else @click="showInput">展示输入框的内容</button>
    <hr/>
    <div class="box">
      <Left ref="left" :msg="message" :user="userinfo"></Left>
      <!-- 子向父传值--父 -->
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data() {
    return {
      message: 'hello world',
      userinfo: {
        name: 'zs',
        age: 18
      },
      countFromSon: 0,
      inputVisiable: false
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
    },
    showThis() {
    //  console.log(this.$refs.myH1)
      this.$refs.myH1.style.color = 'red'
    },
    resetLeftCount() {
      this.$refs.left.count = 1
    },
    showInput() {
      this.inputVisiable = true
      this.$nextTick(() => {
        this.$refs.iptRef.focus()
      })
    },
    showButton() {
      this.inputVisiable = false
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