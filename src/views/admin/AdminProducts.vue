<!-- eslint-disable vue/no-unused-components -->
<template>
    後臺產品列表
    <div class="container">
        <div class="text-end mt-4">
          <button class="btn btn-primary" @click="openModel('create')">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
            <thead>
              <tr>
                <th width="120">
                  分類
                </th>
                <th>產品名稱</th>
                <th width="120">
                  原價
                </th>
                <th width="120">
                  售價
                </th>
                <th width="100">
                  是否啟用
                </th>
                <th width="120">
                  編輯
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td class="text-end">
                  {{ item.origin_price }}
                </td>
                <td class="text-end">
                  {{ item.price }}
                </td>
                <td>
                  <span v-if="item.is_enabled" class="text-success">啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="btn btn-outline-primary btn-sm"
                    @click="openModel('edit',item)">
                      編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                    @click="openModel('delete',item)">
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>
        <pagination :pages = 'page'
          :get-products = "getProducts"
          @change-page = "getProducts"
          ></pagination>
                <!-- Modal -->
          <productModal ref="productModal" :temp-product="tempProduct" :is-new="isNew" @update-products="updateProducts"
          ></productModal>

          <delProductModal ref="delProductModal"  :temp-product="tempProduct" @del-products="delProducts"></delProductModal>

      <!-- Modal -->
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import pagination from '@/components/PaginationLlist.vue'
import productModal from '@/components/ProductModal.vue'
import delProductModal from '@/components/DelProductModal.vue'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      page: {},
      operate: '',
      isLoading: false
    }
  },

  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/products/?page=${page}`
      this.$http.get(`${url}`)
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.isLoading = false
        })
    },
    openModel (operate, item) {
      this.operate = operate
      if (operate === 'create') {
        this.$refs.productModal.showModal()
        this.isNew = true
        // 帶入初始化資料
        this.tempProduct = {
          imagesUrl: []
        }
      } else if (operate === 'edit') {
        this.$refs.productModal.showModal()
        this.isNew = false
        // 會帶入當前要編輯的資料
        this.tempProduct = { ...item }
      } else if (operate === 'delete') {
        this.$refs.delProductModal.showModal()
        this.tempProduct = { ...item }// 等等id使用
      }
    },
    updateProducts () {
      this.isLoading = true
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/product`
      // 用this.isNew判斷API如何運行
      let method = 'post'
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
        this.$refs.productModal.hideModal()
      }
      this.$http[method](`${url}`, { data: this.tempProduct })
        .then((res) => {
          this.getProducts()
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.$refs.productModal.hide()// 關閉Model
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.isLoading = false
        })
    },
    delProducts () {
      const url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(`${url}`)
        .then((res) => {
          this.getProducts()
          this.isLoading = false
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.$refs.delProductModal.hideModal()// 關閉Model
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.isLoading = false
        })
    }

  },
  components: {
    pagination,
    productModal,
    delProductModal
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.getProducts()
  }

}
</script>
