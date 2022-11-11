// 文章相关的API接口

import request from '@/utils/request.js'

// 向外导出一个API函数
export const getArticleListAPI = function(page, limit) {
  return request.get('/article/list', {
    params: {
      page,
      limit
    }
  })
}
