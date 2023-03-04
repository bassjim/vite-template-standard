<template>
            <div class="my-5 row justify-content-center">
          <v-form ref="form" class="col-md-6" v-slot="{ errors }" >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field id="email" name="email" type="email" class="form-control"
                       :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="required|email"
                      ></v-field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                       placeholder="請輸入姓名" rules="required"></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <v-field id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                       placeholder="請輸入電話"  :rules="isPhone"></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                       placeholder="請輸入地址" rules="required" ></v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea id="message" class="form-control" cols="30" rows="10" ></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-danger"
              @submit="createOrder" >送出訂單</button>
            </div>
          </v-form>
      </div>
</template>

<script>

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
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
          this.getCarts()
          this.$refs.form.resetForm()
          this.clearCart('')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  props: ['getCart', 'cart']
}
</script>
