<template>
  <div class="layer-box layer-box0" v-if="layerOptions.isShow">
    <div class="layer-shade" @click="onlayerback('confirm', 'shade')"></div>
    <div class="layer-main">
      <div class="section">
        <div class="layer-child layer-mainim" style="'">
          <button class="layer-end" v-if="layerOptions.type === 'prop'" @click="onlayerback('confirm')"></button>
          <div class="layer-cont" v-html="layerOptions.message">
          </div>
          <div class="layer-fbtn" v-if="layerOptions.type !=='prop'">
            <div v-if="layerOptions.type === 'confirm'" style="display: inline-block">
              <div class="btn btncancel" @click="onlayerback('cancel')">{{cancelBtn}}</div>
            </div>
            <div style="display: inline-block">
              <div class="btn btnok" @click="onlayerback('confirm')">{{confirmBtn}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layerOptions: {
      type: Object
    }
  },
  computed: {
    confirmBtn() {
      // 确定
      var str = '';
      if (this.layerOptions.type === 'alert') {
        str = this.layerOptions.btns[0];
      } else if (this.layerOptions.type === 'confirm') {
        str = this.layerOptions.btns[1];
      }
      return str;
    },
    cancelBtn() {
      // 取消
      var str = '';
      if (this.layerOptions.type === 'confirm') {
        str = this.layerOptions.btns[0]
      }
      return str
    }
  },
  methods: {
    onlayerBack(msg, shade) {
      // 点击蒙版
      if (shade && this.layerOptions.shadeClose) {
        this.layerOptions.isShow = false;
        return
      }
      if (!shade) {
        // 点击非蒙版
        this.layerOptions.isShow = false;
        this.$emit('on-layer-back', msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $border: 0.02rem solid #e3e3e3;
  .layer-box {
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
  }
  .layer-shade,
  .layer-main {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }
  .layer-main {
    font-family: Helvetica, arial, sans-serif;
    display: table;
    pointer-events: none;
  }
  .layer-shade {
    pointer-events: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .layer-main .section {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    padding: 0 1rem;
  }
  .layer-child {
    font-size: 0.28rem;
    position: relative;
    display: inline-block;
    text-align: left;
    pointer-events: auto;
    border-radius: 0.12rem;
    background-color: #fff;
    box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.1);
  }
  .layer-child {
    -webkit-animation-duration: 0.18s;
    animation-duration: 0.18s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .layer-border {
    border: 1px solid #999;
  }
  .layer-manim {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
  }
  .layer-box0 .layer-child {
    width: 100%;
  }
  .layer-box1 .layer-child {
    border: none;
    border-radius: 0;
  }
  .layer-box2 .layer-child {
    width: auto;
    min-width: 0.8rem;
    max-width: 5.2rem;
    color: #fff;
    border: none;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .layer-child h3 {
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 0.9rem;
    height: 0.9rem;
    padding: 0 0.9rem 0 0.2rem;
    border-bottom: 1px solid #ebebeb;
    border-radius: 0.1rem 0.1rem 0 0;
  }
  .layer-cont {
    line-height: 0.42rem;
    padding: 0.6rem 0.36rem;
    text-align: center;
    color: #484c4a;
    border-radius: 0.1rem;
    word-break: break-all;
  }
  .layer-btn {
    font-size: 0;
    line-height: 0.8rem;
    position: relative;
    height: 0.8rem;
    text-align: center;
    border-top: 1px solid #ebebeb;
    span {
      font-size: 0.28rem;
      position: relative;
      display: inline-block;
      width: 50%;
      cursor: pointer;
      text-align: center;
      border-radius: 0 0.1rem 0 0;
    }
    span:first-child {
      height: 0.78rem;
      border-radius: 0 0 0 0.1rem;
      background-color: #fff;
    }
  }
  .layer-btn:before {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 0.78rem;
    content: " ";
    background-color: #ebebeb;
  }
  .layer-fbtn {
    font-size: 0;
    line-height: 0.88rem;
    position: relative;
    height: 0.88rem;
    text-align: center;
    border-top: $border;
    display: flex;
  }
  .layer-fbtn span {
    display: block;
    height: 0.88rem;
    flex: 1;
  }
  .layer-fbtn span:first-child {
    border-right: $border;
  }
  .layer-fbtn span:last-child {
    border-right: 0;
  }
  .layer-fbtn span .btn {
    font-size: 0.28rem;
    line-height: 0.88rem;
    color: #666;
  }
  .layer-end {
    font-size: 0.6rem;
    font-weight: 400;
    position: absolute;
    top: 0.2rem;
    right: 0.14rem;
    width: 0.6rem;
    height: 0.6rem;
    cursor: pointer;
    border: 0;
    background: transparent;
    -webkit-appearance: none;
  }
  .layer-end::before,
  .layer-end::after {
    position: absolute;
    top: 0.26rem;
    left: 0.1rem;
    width: 0.4rem;
    height: 2px;
    content: "";
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    border-radius: 0.6rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .layer-end::after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
</style>

