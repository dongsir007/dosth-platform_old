<template>
  <div class="footer-container">
    <div class="footer-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="cbFull" :checked="isfull" @change="fullChange">
        <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <div>
        <span> 合计: </span>
        <span class="total-price">￥{{ amount.toFixed(2) }}</span>
    </div>

    <button type="button" class="btn btn-primary btn-settle">结算({{ all }})</button>
  </div>
</template>

<script>
export default {
    props: {
        isfull: {
            type: Boolean,
            default: true
        },
        amount: {
            type: Number,
            default: 0
        },
        all: {
            type: Number,
            default: 0
        }
    },
    methods: {
        fullChange(e) {
            this.$emit('full-change', e.target.checked)
        }
    }
}
</script>

<style lang="less" scoped>
    .footer-container {
        border: 2px solid green;
        font-size: 12px;
        height: 50px;
        width: 100%;
        border-top: 1px solid #efefef;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
    }
</style>