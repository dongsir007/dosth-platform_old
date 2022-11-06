<template>
  <div class="app-container">
    <h1 ref="myH1">App根组件 --- </h1>
    <hr/>
    <Article>
      <template #title>
        <h3>一首诗</h3>
      </template>
      <!-- 作用域插槽 -->
      <template #content="{ msg, user }">
        <div>
          <p>啊，大海，全是水。</p>
          <p>啊，蜈蚣，全是腿。</p>
          <p>啊，辣椒，净辣嘴。</p>
          <p>{{ msg }}</p>
          <p>{{ user }}</p>
        </div>
      </template>
      <template #author>
        <h3>打油诗</h3>
      </template>
    </Article>
    <hr/>
    <Left style="display: none">
      <template v-slot:default>
        <p>这个Left的p标签</p>
      </template>
      <template #default1>
        <p>这个Left的另一个p标签</p>
      </template>
    </Left>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Article from '@/components/Article.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Left,
    Right,
    Article
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