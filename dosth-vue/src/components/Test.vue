<template>
    <div>        
        <div id="test-box">
            <h3>这个自定义vue组件 --- {{ username }}</h3>
            <button @click="changeName">修改用户名</button>
        </div>
        <div>
            123
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: 'zs'
            }
        },
        methods: {
            changeName() {
                this.username = 'admin'
            }
        },
        // 侦听器
        watch: {
            username(newVal, oldVal) {
                    if (newVal === '') return
                    console.log(newVal, oldVal)
                }
        },
        // 计算属性
        computed: {

        },
        // 过滤器
        filters: {

        }
    }
</script>

<style lang="less">
    #test-box {
        background-color: pink;
    }
    h3 {
        color: red;
    }
</style>