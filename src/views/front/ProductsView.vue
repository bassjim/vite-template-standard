<template>
<VueLoading :active="isLoading"></VueLoading>
<div class="d-flex mt-5 justify-content-around container">
  <ul class="nav nav-pills mb-3 flex-column" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
      </li>
      <li class="nav-item" role="presentation"  v-for="item in categories" :key="item">
        <router-link
                    :to="{
                      query: { category: item, page: 1 },
                    }"
                    :key="item"
                  >
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{{ item }}</button>
          </router-link>
      </li>
    </ul>
  <div class="d-flex row row-cols row-cols-md-3 flex-wrap col-md-8"  v-if="filteredProducts[filteredProducts.length - 1]">
          <div class="tab-pane fade show active mb-3 row " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"  v-for="product in filteredProducts"
                :key="product.id">
                <RouterLink
                  :to="`/product/${product.id}`"
                  class="card overflow-hidden"
                >
                <div class="card-flex" >
                <div class="row g-0 ">
                  <div class="mx-auto card-img-top">
                    <img :src="product.imageUrl" class="img-fluid rounded-star" alt="...">
                  </div>
                  <div class="">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.title }}</h5>
                      <p class="card-text">{{product.description}}</p>
                    </div>
                    <div class="card-footer bg-transparent border-success d-flex justify-content-evenly pb-1">
                      <router-link :to="`product/${product.id}`" class="btn btn-secondary">查看單一產品</router-link>
                        <button type="button" class="btn btn-primary"
                        @click="addTOCart(product.id)"><i class="bi bi-cart4"></i>加入購物車</button>
                    </div>
                  </div>
                </div>
              </div>
              </RouterLink>
          <!-- <td><img :src="product.imageUrl" width="200" alt="" /></td> -->
    </div>
    <PaginationComponent :pagination="pagination" @change-page="getProducts"></PaginationComponent>
  </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Swal from 'sweetalert2'
import PaginationComponent from '@/components/PaginationComponent.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      filteredProducts: [],
      isLoading: false,
      pagination: {},
      categories: [],
      pageNum: 1
    }
  },
  components: {
    RouterLink,
    PaginationComponent
  },
  methods: {
    getProducts (pageNum = 1) {
      this.pageNum = pageNum
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/products/?page=${pageNum}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
    },
    filterProducts (page = 1) {
      let url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}`
      const category = this.$route.query.category
      if (category && category !== '全部') {
        url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`
      }
      this.$http
        .get(url)
        .then((res) => {
          this.filteredProducts = res.data.products
          this.pagination = res.data.pagination
          this.$router.push({ path: 'products', query: { category, page } })
        })
        .catch((err) => console.dir(err))
    },
    getCategories () {
      const categories = [
        ...new Set(this.products.map((item) => item.category))
      ]
      this.categories = categories
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
    },
    async loadData () {
      this.isLoading = true
      this.data = null
      const response = await fetch('https://api.example.com/data')
      const data = await response.json()
      this.data = data
      this.isLoading = false
    }

  },
  mounted () {
    this.getProducts()
    this.filterProducts()
    this.$showLoading()
  },

  watch: {
    $route: {
      handler (val) {
        if (val.name === 'products') {
          this.filterProducts(this.$route.query.page)
        }
      },
      deep: true
    }
  }
}
</script>
