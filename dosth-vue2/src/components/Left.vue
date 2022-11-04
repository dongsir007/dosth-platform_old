<template>
    <div class="left-container">
        <h3>
            Left组件
        </h3>
        <hr/>
        <p>msg的值是: {{ msg }}</p>
        <p>user的值是: {{ user }}</p>
        <button @click="msg = 'abc'">修改msg的值</button>
        <button @click="user.name = 'abc'">修改user的值</button>
    </div>
</template>
<script>
    
    export default {
        props: ['msg','user']
    }
</script>
<style lang="less" scoped>
    .left-container {
        padding: 0 20px 20px;
        background-color: orange;
        min-height: 250px;
        flex: 1;
    }

    h3 {
        color: red;
    }

    /deep/ h5 {
        color: pink;
    }
</style>