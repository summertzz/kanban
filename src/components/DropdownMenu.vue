<template>
  <ul class="menu__content">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.menu__content {
  position: absolute;
  top: 14px;
  right: -6px;

  width: 178px;
  padding: 5px 0;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 4px;

  list-style: none;
  background-color: #fff;
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);

  &::before {
    position: absolute;
    top: -16px;
    right: 12px;

    content: '';
    display: block;

    border: 8px solid transparent;
    border-bottom-color: #fff;
  }

  &::after {
    position: absolute;
    top: -14px;
    right: 12px;

    content: '';
    display: block;

    border: 7px solid transparent;
    border-bottom-color: #fff;
  }

  .menu__divider {
    height: 0;
    margin: 8px 0;
    border: 0;
    border-bottom: 1px solid #dfe2e5;

    overflow: hidden;
    background: transparent;
  }
}
</style>