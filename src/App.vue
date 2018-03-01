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
@import './scss/base.scss';
</style>
