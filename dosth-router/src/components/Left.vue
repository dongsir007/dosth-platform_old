<template>
    <div class="left-container">
        <h3>
            Left组件 ---
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