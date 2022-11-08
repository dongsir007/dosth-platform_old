<template>
  <div>
    <h1>Login 登录页面</h1>

    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem('token', 'zs123')
      this.$router.replace("/main")
    }
  }
}
</script>

<style>

</style>