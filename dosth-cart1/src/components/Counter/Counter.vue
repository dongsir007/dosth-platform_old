<template>  
  <div class="counter-container">
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <span class="number-box">{{ num }}</span>
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>
<script>
import bus from '@/components/EventBus.js'
export default {
    props: {
        id: {
            require: true,
            type: String
        },
        num: {
            type: Number,
            default: 1
        }
    },
    methods: {
        add() {
        //    bus.$emit('share', {id : this.id, value: this.num + 1})
            this.$emit('num-change', this.num + 1)
        },
        sub() {
            if (this.num - 1 === 0) return
        //    bus.$emit('share', {id : this.id, value: this.num - 1})
            this.$emit('num-change', this.num - 1)
        }
    }
}
</script>

<style lang="less" scoped>
    .counter-container {
        background-color:aliceblue;
        height: 30px;
        flex: 1;
    }

    .number-box {
        min-width: 30px;
        text-align: center;
        margin: 0 5px;
        font-size: 12px;
        border: 0;
        max-width: 30px;
    }
</style>