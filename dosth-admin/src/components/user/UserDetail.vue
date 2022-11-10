<template>
  <div class="user-detail-container">
    <h5 class="text-center">用户详情 -- {{ this.$route.params.id }} -- {{ id }}</h5>
    <button type="button" class="btn btn-light btn-sm"
      @click="$router.back()">后退</button>
  </div>
</template>

<script>
export default {
  name: 'userDetail',
  props: [ 'id' ]
}
</script>

<style type="less" scoped>
.user-detail-container {
  background-color: gainsboro;
}
</style>