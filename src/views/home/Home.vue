<template>
  <div class="page">
    Home
    <Footer :tabIndex="1"></Footer>
  </div>
</template>

<script>
import Footer from '@common/Footer'

export default {
  components: {
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
