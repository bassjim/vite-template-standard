<template>
        <div class="my-5 row justify-content-center">
          <v-form ref="form" class="col-md-6" v-slot="{ errors }"  @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field id="email" name="email" type="email" class="form-control"
                       :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email"
                       v-model="form.user.email"
                      ></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                       placeholder="請輸入姓名" rules="required"
                       v-model="form.user.name"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                       placeholder="請輸入電話"  :rules="isPhone"
                       v-model="form.user.tel"></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                       placeholder="請輸入地址" rules="required"
                       v-model="form.user.address"></v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <v-field id="message" name="附註" type="text" class="form-control" :class="{ 'is-invalid': errors['附註'] }" placeholder="請輸入 附註"
                v-model="form.message"  as="textarea"  cols="10"  rows="10">
                <textarea id="message" class="form-control" cols="30" rows="10" ></textarea></v-field>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger"
               >送出訂單</button>
            </div>
          </v-form>
      </div>
</template>

<script>

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      cartItems: [],
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''

      }

    }
  },
  methods: {

    // 自訂驗證
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    createOrder () {
      this.$http.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: this.form })
        .then((res) => {
          alert(res.data.message)
          this.getCart()
          this.$refs.form.resetForm()
          this.cartItems = []
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  props: ['getCart', 'cart']
}
</script>
