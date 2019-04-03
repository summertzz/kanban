<template>
  <button class="btn"
          :class="[type, { disabled }]"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },

    type: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {};
  },

  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit('click', e);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.btn {
  display: flex;
  justify-content: flex-end;
  height: 34px;

  color: rgb(36, 41, 46);
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  border: 1px solid rgba(27, 31, 35, 0.35);
  outline: none;
  background-color: #fff;
  cursor: pointer;

  &.disabled {
    cursor: default;
  }

  @mixin make-button(
    $themeName,
    $color,
    $backgroundColor,
    $hoverColor,
    $hoverBackgroundColor
  ) {
    &.#{$themeName} {
      color: $color;
      background-color: $backgroundColor;

      &.disabled {
        filter: grayscale(0.5);
      }

      &:not(.disabled):hover {
        color: $hoverColor;
        background-color: $hoverBackgroundColor;
      }
    }
  }

  $themes: (
    success: (
      #fff,
      rgb(40, 167, 69),
      #fff,
      rgb(38, 159, 66)
    ),
    danger: (
      rgb(203, 36, 49),
      rgb(250, 251, 252),
      #fff,
      rgb(203, 36, 49)
    )
  );

  @include make-button(success, #fff, rgb(40, 167, 69), #fff, rgb(38, 159, 66));

  @include make-button(
    danger,
    rgb(203, 36, 49),
    rgb(250, 251, 252),
    #fff,
    rgb(203, 36, 49)
  );
}
</style>