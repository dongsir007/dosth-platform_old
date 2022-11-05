<template>
    <div class="right-container">
        <h3>
            Right组件 --- {{ count }}
        </h3>
        <hr/>
        <button @click="add">+1</button>
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
                this.$emit('numchange', this.count)
            }
        },
        created() {
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