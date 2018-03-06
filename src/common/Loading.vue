<template>
  <div class="loading-box" v-if="isLoading">
    <div class="loading">
      <div class="inner">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
        <div class="line line5"></div>
        <div class="line line6"></div>
        <div class="line line7"></div>
        <div class="line line8"></div>
        <!-- <div class="line line9"></div>
        <div class="line line10"></div> -->
        <!-- <div class="line line11"></div>
        <div class="line line12"></div> -->
      </div>
      <!-- <img src="../assets/images/loading.gif" alt=""> -->
      <div class="des">请稍候</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  /*@import "../scss/color.scss";*/
  $loadingbox: 100px;
  $loading: $loadingbox / 2;
  $linewidth: $loading / 5;
  $lineheight: $loading / 20;

  $time: 2s;
  $interval: $time / 8;

  $deg: 45deg;

  .loading-box{
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .loading{
    width: $loadingbox;
    height: $loadingbox;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .inner{
      width: $loading;
      height: $loading;
      border-radius: 50%;
      position: relative;
      animation: rotate $time * 1.2 linear infinite;
      .line{
        position: absolute;
        width: $linewidth;
        height: $lineheight;
        background: #fff;
        border-radius: 2px;
      }
      .line1{
        animation: fade $time linear 1 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate($deg) translate(-$linewidth);
      }
      .line2{
        animation: fade $time linear 2 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) translateX(-$linewidth);
      }
      .line3{
        animation: fade $time linear 3 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-$deg) translate(-$linewidth);
      }
      .line4{
        animation: fade $time linear 4 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-2 * $deg) translate(-$linewidth);
      }
      .line5{
        animation: fade $time linear 5 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-3 * $deg) translate(-$linewidth);
      }
      .line6{
        animation: fade $time linear 6 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-4 * $deg) translate(-$linewidth);
      }
      .line7{
        animation: fade $time linear 7 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-5 * $deg) translate(-$linewidth);
      }
      .line8{
        animation: fade $time linear 8 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-6 * $deg) translate(-$linewidth);
      }
      .line9{
        animation: fade $time linear 9 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-7 * $deg) translate(-$linewidth);
      }
      .line10{
        animation: fade $time linear 10 * $interval infinite;
        transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-8 * $deg) translate(-$linewidth);
      }
      // .line11{
      //   animation: fade $time linear 11 * $interval infinite;
      //   transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-9 * $deg) translate(-$linewidth);
      // }
      // .line12{
      //   animation: fade $time linear 12 * $interval infinite;
      //   transform: translate(($loading - $linewidth) / 2, ($loading - $lineheight) / 2) rotate(-10 * $deg) translate(-$linewidth);
      // }
    }
  }
  .des{
    color: #fff;
    font-size: 0.28rem;
  }
  @keyframes fade {
    // 0% {
    //   background: #fff;
    // }
    // 50% {
    //   background: #999;
    // }
    // 100% {
    //   background: #fff;
    // }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
