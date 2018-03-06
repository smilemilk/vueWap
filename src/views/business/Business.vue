<template>
  <div class="container">
    业务
    <div>
      <router-link to="Mine">
        go to mine
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/color.scss';
.container {
  flex: 1;
}
</style>
