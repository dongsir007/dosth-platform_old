<template>
    <div class="left-container">
        <h3>
            Left组件
        </h3>
        <hr/>
        <p>msg的值是: {{ msg }}</p>
        <p>user的值是: {{ user }}</p>
        <button @click="msg = 'abc'">修改msg的值</button>
        <button @click="user.name = 'abc'">修改user的值</button>
        <hr/>        
        <button @click="send">发送好诗给Right</button>
    </div>
</template>
<script>
    import bus from './EventBus.js'
    
    export default {
        props: ['msg','user'],
        data() {
            return {
                str: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。'
            }
        },
        methods: {
            send() {
                // 兄弟之间数据传输--发送方
                bus.$emit('share', this.str)
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