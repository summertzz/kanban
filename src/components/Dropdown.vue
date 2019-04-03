<template>
  <details class="dropdown"
           :open="dropdownMenuVisible">
    <div class="dropdown__mask"
         @click="closeDropdown"></div>

    <summary class="dropdown__activator"
             @click="toggleDropdown">
      <slot name="activitor"></slot>
    </summary>
    <slot></slot>
  </details>
</template>

<script>
export default {
  data() {
    return {
      dropdownMenuVisible: false
    };
  },

  provide() {
    return {
      closeDropdown: this.closeDropdown
    };
  },

  methods: {
    toggleDropdown(e) {
      e.preventDefault();
      this.dropdownMenuVisible = !this.dropdownMenuVisible;
    },

    closeDropdown() {
      this.dropdownMenuVisible = false;
    }
  }
};
</script>

<style lang='scss' scoped>
.dropdown {
  position: relative;

  &__activator {
    width: 24px;
    height: 24px;
    line-height: 24px;
    outline: none;

    &::-webkit-details-marker {
      display: none;
    }
  }

  .dropdown__mask {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: transparent;
  }
}
</style>