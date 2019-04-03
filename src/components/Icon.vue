<template>
  <span :class="['iconfont', `icon-${name}`]"
        :style="{ color }"></span>
</template>

<script>
export default {
  props: {
    name: String,

    color: String
  },

  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
@import '~@/assets/iconfont/iconfont.css';
</style>