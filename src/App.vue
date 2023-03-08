<template>
  <VueLoading :active="isLoading"></VueLoading>
  <router-view />

</template>

<script>
export default {
  methods: {
    showLoading () {
      const loader = this.$loading.show({
        loader: 'dots',
        color: '#999',
        width: 64,
        height: 64,
        fullPage: true,
        canCancel: false
      })
      setTimeout(() => {
        // setTimeout 設定關閉時間
        loader.hide()
      }, 1500)
    }
  }
}
</script>

<style lang="scss">

</style>
