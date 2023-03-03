<template>
    產品頁面
    <hr>
<div class="card mb-3 container" style="max-width: 800px;max-height:800px">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.imageUrl" class="img-fluid " alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <div class="card-footer bg-transparent border-success">Footer</div>
    </div>
  </div>
</div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route)
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          console.log('產品', res.data.product)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
