<template>
  <li class="menu__item"
      @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  inject: ['closeDropdown'],

  data() {
    return {};
  },

  methods: {
    handleClick(e) {
      this.closeDropdown();
      this.$emit('click', e);
    }
  }
};
</script>

<style lang='scss' scoped>
.menu__item {
  height: 29px;
  line-height: 29px;
  padding-left: 15px;
  padding-right: 10px;

  font-size: 14px;
  color: rgb(36, 41, 46);

  &:hover {
    background-color: #0366d6;
    cursor: pointer;
    color: #fff;
  }
}
</style>