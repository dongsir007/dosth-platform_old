<template>
  <div class="article-container">
    <!--标题-->
    <div class="header-box">
        <slot name="title"></slot>
    </div>
    <!--内容-->
    <div class="content-box">        
        <slot name="content" 
            msg="hello vue.js"
            :user="userinfo"></slot>
    </div>
    <!--作者-->
    <div class="author-box">
        <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
        return {
            userinfo: {
                name: 'zs',
                age: 18
            }
        }
    }
}
</script>

<style lang="less" scoped>
.article-container {
    > div {
        min-height: 150px;
    }
.header-box {
    background-color: pink;
}
.content-box {
    background-color: lightblue;
}
.author-box {
 background-color: lightsalmon;
}

}
</style>