<template>
    <div class="text-end">
          <button class="btn btn-outline-danger" type="button" @click="clearCart">清空購物車</button>
    </div>
    <h3 class="mt-5 mb-3 text-center">購物車</h3>
    <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                  :disabled="item.id === loadingItem"
                  @click="deleteItem(item.id)">
                    <i class="fas fa-spinner fa-pulse" v-if="isLoading"></i>
                    x
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <select class="form-select" v-model="item.qty"
                    :disabled="item.id === loadingItem"
                    @change="updateCartItem(item)">
                      <option :value="i" v-for="i in 20" :key="i+'123456'">{{i}}</option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                  </div>
                </td>
                <td class="text-end">
                  <small class="text-success">折扣價：</small>
                  {{ item.total }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <OrderForm :cart="cart" :get-cart="getCarts"></OrderForm>
</template>

<script>
import Swal from 'sweetalert2'
import OrderForm from '../../components/OrderForm.vue'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      itemId: '',
      product: {},
      cart: {},
      loadingItem: '', // 存ID
      isLoading: false

    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      const url = `${VITE_URL}/api/${VITE_PATH}/cart/${item.id}`
      this.$http.put(`${url}`, { data })
        .then((res) => {
          this.cart = res.data.data
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteItem (id) {
      this.loadingItem = id
      this.$http
        .delete(`${VITE_URL}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          this.getCarts()
          this.isLoading = true
          setTimeout(() => {
            // 0.3 秒後結束 loading
            this.isLoading = false
          }, 300)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    clearCart () {
      this.$http.delete(`${VITE_URL}/api/${VITE_PATH}/carts`)
        .then((res) => {
          Swal.fire({
            title: '購物車目前沒有商品', // 標題
            icon: 'question'
          }
          )
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  mounted () {
    this.getCarts()
  },
  components: { OrderForm }
}
</script>
<style scoped></style>
