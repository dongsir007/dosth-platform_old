<template>
    <div class="right-container">
        <h3>
            Right组件 ---
        </h3>
        <hr/>
    </div>
</template>
<script>
    import bus from './EventBus.js'

    export default {
        name: 'MyRight',
        activated() {
            console.log("组件Right被激活")
        },
        deactivated() {
            console.log("组件Right被缓存了")
        }
    }
</script>
<style lang="less">
    .right-container {
        padding: 0 20px 20px;
        background-color: aqua;
        min-height: 250px;
        flex: 1;
    }
</style>