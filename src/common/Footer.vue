<template>
  <footer>
    <div class="item" @click="tabChange(1)">
      <span :class="{gray: tabIndex === 1}">首页</span>
    </div>
    <div class="item" @click="tabChange(2)">
      <span :class="{gray: tabIndex === 2}">我的业务</span>
    </div>
    <div class="item" @click="tabChange(3)">
      <span :class="{gray: tabIndex === 3}">我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      tabIndex: {
        type: Number,
        default: 1
      }
    }
  },
  methods: {
    tabChange (index) {
      // this.tabIndex = index
      switch (index) {
        case 1: this.$router.push({name: 'Home'})
          break
        case 2: this.$router.push({name: 'Business'})
          break
        case 3: this.$router.push({name: 'Mine'})
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  footer{
    background: #fff;
    height: 0.98rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    .item{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      span{
        font-size: 20px;
        color: #333;
        &.gray{
          color: #000;
        }
      }
    }
  }
</style>
