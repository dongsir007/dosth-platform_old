<template>
  <div class="app-container">
    <h1 ref="myH1">App2根组件 --- </h1>
    <hr/>

    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->
    <router-link to="/home">首页</router-link>
    <!-- <router-link to="/movie">电影</router-link> -->
    <!-- 路径参数 -->
    <!-- this.query 查询参数 -->
    <router-link to="/movie/1?name=zs&age=12">洛基</router-link>
    <router-link to="/movie/2">雷神</router-link>    
    <router-link to="/movie/3">复联</router-link>
    <router-link to="/about">关于</router-link>

    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  name: 'App',
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
  overflow: hidden;
  margin: 10px;
  padding: 15px;

  >a {
    text-underline-position: auto;
    margin: 10px 10px;
  }
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