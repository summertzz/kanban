<template>
  <div class="card">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'VCard',

  props: {
    content: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
</style>