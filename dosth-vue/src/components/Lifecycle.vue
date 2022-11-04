<template>
  <div class="test-container">
    <h1 id="myH1">生命周期 -- {{ info }}</h1>
    <span>有{{ books.length }}本图书</span>
    <p id="pp">message的值是:{{ message }}</p>
    <button @click="message += '~'">修改</button>
  </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {
            message: 'hello vue.js',
            books: []
        }
    },
    methods: {
        show() {
            console.log('调用了show方法')
        },
        initBookList() {
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                const result = JSON.parse(xhr.responseText)
                // console.log(result)
                this.books = result
                // console.log(this.books.length)
            })
            xhr.open('GET', 'https://mock.apipost.cn/app/mock/project/b213b00a-68b9-11eb-a95d-1c34da7b354c//books')
            xhr.send()
        }
    },
    beforeCreate() {
        console.log('++beforeCreate')
    },
    created() {// 数据
        console.log('++created')
        console.log(this.info)
        console.log(this.message)
        this.show()
        this.initBookList()
    },
    beforeMount() {

    },
    mounted() { // dom
        console.log('++mounted')
        const dom = document.querySelector('#myH1')
        console.log(dom)
    },
    // 运行阶段
    beforeUpdate() {
        console.log('++beforeUpdate')
        console.log(this.message)
        const dom = document.querySelector('#pp')
        console.log(dom.innerHTML)
    },
    updated() {        
        console.log('++updated')
        console.log(this.message)
        const dom = document.querySelector('#pp')
        console.log(dom.innerHTML)
    },
    // 销毁阶段
    beforeDestroy() {
        console.log('++beforeDestroy')
        console.log(this.message)
    },
    destroyed() {
        console.log('++destroyed')
    }
}
</script>

<style lang="less" scoped>
    .test-container {
        color: red;
        background-color: pink;
        height: 200px;
    }
</style>