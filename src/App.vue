<template>
  <div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <Toast :isShowed="toast.isShow" @on-toast-back="closetoast">{{toast.message}}</Toast>
    <Layer :layer-options="layer" @onlayback="closeLayer"></Layer>
    <Loading :isloading="isloading"></Loading>
  </div>
</template>

<script>
import transition from './transition'
import Toast from '@common/Toast'
import Layer from '@common/Layer'
import Loading from '@common/Loading'

export default {
  components: {
    Toast,
    Layer,
    Loading
  },
  data () {
    return {
      layer: {
        // layer引用：2、属性
        isShow: false, // 是否打开弹框
        btns: [], // 弹框按钮名称
        type: 'alert', // 类型：alert/confirm
        message: '', // 内容
        shadeClose: false, // 是否点击遮罩时关闭层
        yes: function() {}, // 确定回调
        no: function() {} // 取消回调
      },
      toast: {
        isShow: false,
        message: ''
      },
      isloading: false,
      transitionName: 'slide-left'
    }
  },
  created () {
    this.listen()
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.transitionName = transition(from.name, to.name)
      next()
    })
  },
  methods: {
    // 监听事件
    listen() {
      EventVue.$on('showtoast', this.showtoast)
      EventVue.$on('closetoast', this.closetoast)

      EventVue.$on('alertShow', this.alertShow)
      EventVue.$on('confirmShow', this.confirmShow)

      EventVue.$on('loading', (loading) => {
        this.isloading = loading
      })
    },
    closetoast() {
      this.toast.isShow = false;
    },
    showtoast(msg) {
      this.toast.message = msg;
      this.toast.isShow = true;
    },
    showLayer(msg, options) {
      // layer引用：3.显示弹框
      this.layer.type = options.type;
      this.layer.message = msg;
      this.layer.isShow = true;
      this.layer.shadeClose = options.shadeClose;
      this.layer.btns = options.btns;
      this.layer.yes = options.yes;
      this.layer.no = options.no;
    },
    /*
    * param {Object} options {text 文本, btnText 按钮文本, shadeClose 点击遮罩是否关闭}
    * param {Function} callback
    */
    alertShow(options, callback) {
      // alert实例
      this.showLayer(options.text, {
        type: 'alert', // 必填
        btns: [options.btn], // 必填
        shadeClose: options.shadeClose,
        yes: () => {
          // 选填
          callback()
        }
      });
    },
    confirmShow (options, yesCallback, noCallback) { // confirm实例
      this.showLayer(options.text, {
        type: 'confirm',
        btns: [options.cancelBtn, options.confirmBtn],
        yes: function () {
          yesCallback()
        },
        no: function () {
          noCallback()
        }
      })
    },
    closeLayer(type, shade) {
      // layer引用: 4回调函数
      if (type === 'cancel') {
        this.layer.no && this.layer.no()
      } else {
        this.layer.yes && this.layer.yes()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
