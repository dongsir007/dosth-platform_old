<template>
    <div class="left-container">
        <h3>
            Left组件
        </h3>
        <hr/>
        <Count></Count>
    </div>
</template>
<script>
import Count from './Count.vue'
    export default {
  components: { Count },
        data() {
            return {
                username: '张三'
            }
        }
    }
</script>
<style lang="less">
    .left-container {
        padding: 0 20px 20px;
        background-color: orange;
        min-height: 250px;
        flex: 1;
    }
</style>