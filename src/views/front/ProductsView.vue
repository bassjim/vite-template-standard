<template>
      <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :color="color"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
  <div>產品列表</div>
  <table class="table">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td><img :src="product.imageUrl" width="200" alt="" /></td>
        <td><router-link :to="`product/${product.id}`" class="btn  btn-outline-secondary">查看單一產品</router-link></td>
        <td><router-link :to="`product/${product.id}`" class="btn btn-secondary">查看單一產品</router-link>
          <button type="button" class="btn btn-primary"
          @click="addTOCart(product.id)"><i class="bi bi-cart-check"></i>加入購物車</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
import Swal from 'sweetalert2'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink,
    Loading
  },
  methods: {
    getProducts () {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
    },
    addTOCart (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data })
        .then((res) =>
          Swal.fire('成功加入購物車')
        )
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
