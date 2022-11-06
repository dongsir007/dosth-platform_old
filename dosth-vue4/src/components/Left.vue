<template>
    <div class="left-container">
        <h3>
            Left组件 ---
        </h3>
        <hr/>
        <slot name="default"></slot>
        <slot name="default1"></slot>
        <slot name="default2">这个default插槽默认内容</slot>
    </div>
</template>
<script>
    import bus from './EventBus.js'
    
    export default {
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