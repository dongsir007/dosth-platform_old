<template>
  <div class="app-container">
    <h1 ref="myH1">App根组件 --- </h1>
    <hr/>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data() {
	return {
	}
  },
  components: {
    Left,
    Right
  },
  methods: {
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