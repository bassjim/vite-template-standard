<template>
    產品頁面
    <hr>
    <div class="card mb-3 container">
        <div class="row g-0">
          <div class="col-md-4 mr-3 mt-3">
            <img :src="product.imageUrl" class="img-fluid rounded-start " alt="product.category" >
            <div class="d-flex flex-row bd-highlight m-1 mr-3">
                <div v-for="(item,key) in product.imagesUrl" :key="key"  class="d-flex flex-nowrap" >
                  <img :src="item" alt="" class="images m-2 img-fluid " >
                </div>
            </div>
          </div>
          <div class="col-md-8 mt-5">
            <div class="card-body align-items-stretch">
              <h1 class="card-title">
                    {{product.title}}
                    <span class="badge bg-primary ms-2">{{product.category}}</span>
                  </h1>
                  <p class="card-text">商品描述：{{product.description}}</p>
                  <p class="card-text">商品內容：{{product.content}}</p>
                  <p class="card-text mb-">{{product.price}}</p> 元 / {{product.unit}}
            </div>
          </div>
            <button type="button" class="btn btn-primary"
                      @click="addTOCart(product.id)"><i class="bi bi-cart-check"></i>加入購物車</button>
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
<style>
.box.stretch, .box.stretch {
  width: 200px
}
</style>
