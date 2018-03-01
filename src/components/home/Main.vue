<template>
  <div class="page">
    <Home v-if="tabIndex === 1"></Home>
    <MyBill v-if="tabIndex === 2"></MyBill>
    <Mine v-if="tabIndex === 3"></Mine>
    <Footer @changeTab="changeTab"></Footer>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Mine from '../mine/Mine.vue'
import MyBill from '../myBill/MyBill.vue'
import Home from './Home.vue'

export default {
  components: {
    Footer,
    Mine,
    MyBill,
    Home
  },
  data () {
    return {
      tabIndex: 1
    }
  },
  methods: {
    changeTab (index) {
      console.log('====================')
      console.log(index)
      // console.log(typeof(index))
      this.tabIndex = index
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
