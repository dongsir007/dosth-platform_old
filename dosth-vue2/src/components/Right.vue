<template>
    <div class="right-container">
        <h3>
            Right组件 --- {{ count }}
        </h3>
        <hr/>
        <button @click="add">+1</button>
        <hr/>
        
        <p>{{ msgFromLeft }}</p>
    </div>
</template>
<script>
    import bus from './EventBus.js'

    export default {
        data() {
            return {
                count: 0,
                msgFromLeft: ''
            }
        },
        methods: {
            add() {
                this.count++
                // 子向父传值
                this.$emit('numchange', this.count)
            }
        },
        created() {
                // 兄弟之间数据传输--接收方
            bus.$on('share', val => {
                console.log('Right组件被触发了', val)
                this.msgFromLeft = val
            })
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