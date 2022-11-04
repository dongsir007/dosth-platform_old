<template>
    <div>
        <h5>Count组件</h5>
        <p>Count的值是: {{ count }}</p>
        <button @click="count += 1">+1</button>
    </div>
</template>

<script>
export default {
    // props: [ 'init' ],
    props: {
        init: {
            default: 0,
            type: Number,
            required: true
        }
    },
    data() {
        return {
            count: this.init
        }
    }
}
</script>

<style lang="less">
    h5 {
        color: brown;
    }
</style>