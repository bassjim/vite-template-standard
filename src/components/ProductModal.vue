<template>
    <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="mb-2">
                        <div class="mb-3">
                            <label for="imageUrl" class="form-label">輸入圖片網址</label>
                            <input type="text" class="form-control"
                            v-model="innerProduct.imageUrl"     placeholder="請輸入圖片連結">
                        </div>
                        <img class="img-fluid" :src="innerProduct.imageUrl" alt="">
                        </div>
                        <!-- 如果(!tempProduct.imagesUrl陣列有無東西)||(tempProduct.imagesUrl最後一個有無值)  -->
                        <!-- 如果(!tempProduct.imagesUrl陣列有東西)false||(tempProduct.imagesUrl最後一個無值)false  叫出delet按鈕-->
                        <!-- 如果(!tempProduct.imagesUrl陣列無東西)true||(tempProduct.imagesUrl最後一個無值)false  叫出新增按鈕-->
                        <h3 class="mb-3">多圖新增</h3>
                        <div v-if="Array.isArray(innerProduct.imagesUrl)">
                        <template v-for="(image, key) in innerProduct.imagesUrl" :key="key +1234">
                            <div class="mb-3">
                            <label for="imageUrl" class="form-label">圖片網址</label>
                            <input v-model="innerProduct.imagesUrl[key]" type="text" class="form-control"
                                placeholder="請輸入圖片連結">
                            </div>
                            <img class="img-fluid" :src="innerProduct.image">
                        </template>
                        <div v-if="!innerProduct.imagesUrl.length || innerProduct.imagesUrl[innerProduct.imagesUrl.length - 1]">
                            <button class="btn btn-outline-primary btn-sm d-block w-100"
                            @click="addImg">
                            新增圖片
                            </button>
                        </div>
                        <div v-else>
                            <button class="btn btn-outline-danger btn-sm d-block w-100" @click="deleteImg">
                            刪除圖片
                            </button>
                        </div>
                        </div>
                        <div v-else>
                        <button class="btn btn-outline-primary btn-sm d-block w-100" @click="createImages">
                            新增圖片
                        </button>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="mb-3">
                        <label for="title" class="form-label">標題</label>
                        <input id="title" type="text" class="form-control" placeholder="請輸入標題"
                        v-model="innerProduct.title">
                        </div>

                        <div class="row">
                        <div class="mb-3 col-md-6">
                            <label for="category" class="form-label">分類</label>
                            <input id="category" type="text" class="form-control"
                            v-model="innerProduct.category"     placeholder="請輸入分類">
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="price" class="form-label">單位</label>
                            <input id="unit" type="text" class="form-control" placeholder="請輸入單位"
                            v-model="innerProduct.unit">
                        </div>
                        </div>

                        <div class="row">
                        <div class="mb-3 col-md-6">
                            <label for="origin_price" class="form-label">原價</label>
                            <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價"
                            v-model.number="innerProduct.origin_price">
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="price" class="form-label">售價</label>
                            <input id="price" type="number" min="0" class="form-control"
                            v-model.number="innerProduct.price"     placeholder="請輸入售價">
                        </div>
                        </div>
                        <hr>

                        <div class="mb-3">
                        <label for="description" class="form-label">產品描述</label>
                        <textarea id="description" type="text" class="form-control"
                                    placeholder="請輸入產品描述">
                        </textarea>
                        </div>
                        <div class="mb-3">
                        <label for="content" class="form-label">說明內容</label>
                        <textarea id="description" type="text" class="form-control"
                                    placeholder="請輸入說明內容">
                        </textarea>
                        </div>
                        <div class="mb-3">
                        <div class="form-check">
                            <input id="is_enabled" class="form-check-input" type="checkbox"
                                v-model="innerProduct.is_enabled"   :true-value="1" :false-value="0">
                            <label class="form-check-label" for="is_enabled">是否啟用</label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    取消
                    </button>
                    <button type="button" class="btn btn-primary" @click="updateProducts">
                    確認
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['tempProduct', 'isNew'],
  emits: ['updateProducts'],
  data () {
    return {
      productModal: '',
      innerProduct: ''
    }
  },
  methods: {
    addImg () {
      this.innerProduct.imagesUrl.push('')
    },

    deleteImg () {
      this.innerProduct.imagesUrl.pop()
    },
    createImg () {
      // 當多圖的地方沒有東西
      // 建立一個陣列初始化，並且放入一筆空的資料
      this.innerProduct.imagesUrl = []
      this.innerProduct.imagesUrl.push('')
    },

    showModal () {
      this.productModal.show()
    },
    hideModal () {
      this.productModal.hide()
    }
  },
  mounted () {
    // dom 生成後，再取得 model
    this.productModal = new Modal(this.$refs.productModal, { keyboard: false })
  }

}
</script>
