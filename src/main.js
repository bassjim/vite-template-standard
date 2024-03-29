import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import './assets/all.scss'
import moment from 'moment'
// vue-moment
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
// vue-loading
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// vee-validate

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)

app.use(LoadingPlugin)
app.use(createPinia())

app.config.globalProperties.$showLoading = function () {
  const loader = this.$loading.show({
    loader: 'bars',
    color: '#999',
    width: 64,
    height: 64,
    fullPage: true,
    canCancel: false
  })
  setTimeout(() => {
    loader.hide()
  }, 1500)
}
// vue-Loading
app.config.globalProperties.$moment = moment
// vue-moment
app.use(moment)
app.use(VueAxios, axios)
app.use(router)
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
