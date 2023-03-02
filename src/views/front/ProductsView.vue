<template>
    產品列表
    <table class="table">
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td><img :src="product.imageUrl" width="200" alt=""></td>
            <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          console.log(res)
        })
    },
    mounted () {
      this.getProducts()
    }
  }
}
</script>
