<template>
  <div class="goods-container">
    <div class="thumb">
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input"
            :id="'cb' + id" :checked="state" @change="stateChange">
            <label class="custom-control-label" :for="'cb' + id">
                <img :src="pic" alt="">                
            </label>
        </div>
    </div>
    <div class="goods-info">
        <h6 class="goods-title">{{ title }}</h6>
        <div class="goods-info-bottom">
            <span class="goods-price">￥{{ price.toFixed(2) }}</span>
            <!-- 商品数量 -->
            <!--
            <Counter :num="count" :id="id"></Counter>
            -->
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>

import Counter from '@/components/Counter/Counter.vue';

export default {
    components: {
        Counter
    },
    props: {
        id: {
            require: true,
            type: String
        },
        title: {
            default: '',
            type: String
        },
        pic: {
            default: '',
            type: String
        },
        price: {
            default: 0,
            type: Number
        },
        state: {
            default: true,
            type: Boolean
        },
        count: {
            default: 1,
            type: Number
        }
    },
    methods: {
        stateChange(e) {
            const newState = e.target.checked
        //    console.log(newState)
            this.$emit('state-change', { id:this.id, value:newState })
        }
    }
}
</script>

<style lang="less" scoped>
    .goods-container {
        padding: 10px;
    }

    .thumb {
        padding-left: 15px;
        width: 120px;
        height: 120px;
        flex: 1;
        float: left;
        border: 1px solid salmon;
    }

    .goods-info {
        flex: 1;
        float: right;
    }
</style>