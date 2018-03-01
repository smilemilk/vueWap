<template>
 <transition :name="transitionName">
   <router-view class="child-view"></router-view>
 </transition>
</template>

<script>
import transition from './transition'
export default {
  date () {
    return {
      transitionName: 'slide-left'
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.transitionName = transition(from.name, to.name)
      next()
    })
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
