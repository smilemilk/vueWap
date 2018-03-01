<template>
  <footer>
    <div class="item" @click="tabChange(1)">
      <span :class="{gray: tabIndex === 1}">首页</span>
    </div>
    <div class="item" @click="tabChange(2)">
      <span :class="{gray: tabIndex === 2}">我的借款</span>
    </div>
    <div class="item" @click="tabChange(3)">
      <span :class="{gray: tabIndex === 3}">我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      tabIndex: 1
    }
  },
  methods: {
    tabChange (index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/color.scss';

  footer{
    background: $bg-color-white;
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
        font-size: $font-size-20;
        color: $text-color-normalGray;
        &.gray{
          color: $text-color-deepBlue;
        }
      }
    }
  }
</style>
