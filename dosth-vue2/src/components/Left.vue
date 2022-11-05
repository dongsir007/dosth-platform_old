<template>
    <div class="left-container">
        <h3>
            Left组件 -- {{ count }}
        </h3>
        <hr/>
        <p>msg的值是: {{ msg }}</p>
        <p>user的值是: {{ user }}</p>
        <button @click="msg = 'abc'">修改msg的值</button>
        <button @click="user.name = 'abc'">修改user的值</button>
        <hr/>        
        <button @click="send">发送好诗给Right</button>
        <hr/>
        <button @click="count+=1">+1</button>
        <button @click="resetCount">重置</button>
    </div>
</template>
<script>
    import bus from './EventBus.js'
    
    export default {
        props: ['msg','user'],
        data() {
            return {
                count: 0,
                str: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。'
            }
        },
        methods: {
            send() {
                // 兄弟之间数据传输--发送方
                bus.$emit('share', this.str)
            },
            resetCount() {
                this.count = 0
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