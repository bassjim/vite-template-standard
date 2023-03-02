<template>
    產品列表
    <table class="table">
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td><img :src="product.imageUrl" width="200" alt=""></td>
            <td><router-link :to="`product/${product.id}`" >查看單一產品</router-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          console.log(res.data.products)
        })
    },
    mounted () {
      this.getProducts()
    }
  }
}
</script>
