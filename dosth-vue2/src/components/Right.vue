<template>
    <div class="right-container">
        <h3>
            Right组件 --- {{ count }}
        </h3>
        <hr/>
        <button @click="add">+1</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            add() {
                this.count++
                this.$emit('numchange', this.count)
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