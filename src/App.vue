<template>
 <transition :name="transitionName">
   <router-view class="child-view"></router-view>
 </transition>
</template>

<script>
export default {
  date () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<style lang="scss">
@import './scss/color.scss';
.page {
  a {
    color: $text-color-pink;
  }
}
</style>
