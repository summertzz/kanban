<template>
  <span :class="['iconfont', `icon-${name}`]"
        :style="{ color }"
        @click="handleClick"></span>
</template>

<script>
export default {
  props: {
    name: String,

    color: String
  },

  data() {
    return {};
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang='scss' scoped>
@import '~@/assets/iconfont/iconfont.css';
</style>