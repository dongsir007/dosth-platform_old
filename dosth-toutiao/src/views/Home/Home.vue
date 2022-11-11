<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <van-nav-bar title="头条" fixed />
    <!-- 导入、注册并使用ArticleInfo组件 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <ArticleInfo v-for="item in artList"
          :key="item.artId"
          :title="item.title"
          :aut-id="item.autId"
          :aut-name="item.autName"
          :comm-count="item.commCount"
          :pub-date="dateFormatter(item.pubDate)"
          :cover="item.cover"></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
import '@/utils/date.js'

export default {
  name: 'Home',
  components: {
    ArticleInfo
  },
  data() {
    return {
      page: 1,
      limit: 10,
      // 文章列表
      artList: [],
      // 是否正在加载下一页数据,true则不会反复触发load事件
      loading: true,
      // 所有数据加载完毕了,如果没有更多数据了,一定要把finished改成true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      //  this.artList = res

      if (isRefresh) { // 下拉刷新
        this.artList = [...res, ...this.artList]
        this.isLoading = false
      } else { // 上拉刷新
        this.artList = [...this.artList, ...res]
        this.loading = false
      }
      if (res.length === 0) {
        // 没有下一页数据了,直接把finished设置成true
        this.finished = true
      }
    },
    dateFormatter(val) {
      return this.dayjs(val).format('YYYY-MM-DD HH:mm:ss')
    },
    onLoad() {
      console.log('上拉加载新数据')
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      console.log('下拉加载刷新')
      this.page++
      this.initArticleList(true)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: #007bff;
  }

  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>
