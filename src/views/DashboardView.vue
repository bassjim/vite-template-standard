<template>
    這是後台頁面
    <router-link to="/admin/products">後台產品列表</router-link> |
    <router-link to="/admin/orders">後台訂單列表</router-link>|
    <router-link to="/">返回首頁</router-link>|
    <a href="" @click.prevent="logout">登出</a>
    <hr>
    <RouterView></RouterView>
</template>

<script>
const { VITE_URL } = import.meta.env
export default {
  methods: {
    logout () {
      document.cookie = `myToken=;expires=${new Date()};`
      this.$router.push('/login')
    },
    checkAdmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_URL}/api/user/check`
      this.$http.post(url)
        .then((res) => {
          console.log(res.data)
          if (!res.data.success) {
            this.$route.push('/login')
          }
        })
        .catch((_err) => {
          alert('登入失敗，將返回登入頁')
          // window.location = 'login.html';
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
