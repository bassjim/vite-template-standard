<template>
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal text-center">
          請先登入
        </h1>
        <div class="col-8">
          <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input type="email" v-model="user.username" class="form-control" id="username"
                placeholder="name@example.com" required autofocus>
              <label for="username">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" v-model="user.password" class="form-control" id="password" placeholder="Password"
                required>
              <label for="password">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              登入
            </button>
          </form>
        </div>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2023~∞ - 六角學院
      </p>
    </div>
</template>

<script>
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const site = `${VITE_URL}/admin/signin`
      this.$http.post(site, this.user)
        .then(res => {
          const { token, expired } = res.data
          console.log(token, expired)
          document.cookie = `myToken=${token};expires=${new Date(expired)};`
          // window.location = "./products.html";
          this.$router.push('/admin/products')
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
