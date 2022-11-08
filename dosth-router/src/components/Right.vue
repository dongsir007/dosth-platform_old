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
        data() {
			return {
			}
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