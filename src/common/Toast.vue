<template>
  <div class="form-info" v-if="isShowed">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isShowed: Boolean
  },
  data() {
    return {
      time: 3000 // 3s自动关闭
    }
  },
  watch: {
    isShowed() {
      if (this.isShowed) {
        setTimeout(() => {
          this.$emit('on-toast-back')
        }, this.time)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/color.scss";
  .form-info {
    position: fixed;
    z-index: 99999;
    top: 40%;
    left: 15%;
    width: 70%;
    padding: 8px 0;
    line-height:0.4rem;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 0.28rem;
  }
</style>




