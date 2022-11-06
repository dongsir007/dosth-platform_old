<template>
  <div class="header-container">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        }
    }
}
</script>

<style lang="less" scoped>
    .header-container {
        font-size: 12px;
        height: 45px;
        width: 100%;
        background-color: blue;
        color: white;
        text-align: center;
        display: inline-block;
    }
</style>