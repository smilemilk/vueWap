<template>
  <div class="container">
    <div>
      <router-link to="Other">
        go to detail
      </router-link>
    </div>
    <div>
      <router-link to="Auth">
        go to Auth
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
