<template>
  <div class="app-container">
    <Header title="购物车"></Header>
    <Goods v-for="item in list" 
    :key="item.id"
    :id="item.id"
    :title="item.goods_name" 
    :pic="item.goods_img" 
    :price="item.goods_price" 
    :state="item.goods_state"
    :count="item.goods_count"
    @state-change="getNewState"></Goods>
    <Footer :isfull="fullState" :amount="amt" :all="total" @full-change="getFullState"></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'

import bus from '@/components/EventBus.js'

export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    Header,
    Goods,
    Footer
  },
  computed: {
    fullState() {
      return this.list.every(item => item.goods_state)
    },
    amt() {
      return this.list.filter(item => item.goods_state)
        .reduce((total, item) => (total += item.goods_price * item.goods_count), 0)
    },
    total() {
      return this.list.filter(item => item.goods_state)
        .reduce((t, item) => t += item.goods_count, 0)
    }
  },
  created() {
    this.initCartList()
    bus.$on('share', (val) => {
      this.list.some(item => {
        if (item.id === val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  methods: {
    async initCartList() {
      const {data: res} = await axios.get('https://mock.apipost.cn/app/mock/project/b213b00a-68b9-11eb-a95d-1c34da7b354c/')
      if (res.status == 200) {
        this.list = res.list
      }
    },
    getNewState(e) {
    //  console.log(e)
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.value
          return true
        }
      })
    },
    // 接收footer全选的状态
    getFullState(e) {
      this.list.forEach(item => {
        item.goods_state = e
      })
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
