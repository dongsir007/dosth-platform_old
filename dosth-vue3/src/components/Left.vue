<template>
    <div class="left-container">
        <h3>
            Left组件 --- {{ count }}
        </h3>
        <hr/>
        <button @click="count+=1">+1</button>
    </div>
</template>
<script>
    import bus from './EventBus.js'
    
    export default {
        name: 'MyLeft',
        data() {
            return {
                count: 0
            }
        },
        activated() {
            console.log("组件Left被激活")
        },
        deactivated() {
            console.log("组件Left被缓存了")
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