<template>
  <v-modal title="column name"
           v-bind="$attrs"
           v-on="$listeners">
    <div class="column-name">column name</div>
    <input ref="input"
           type="text"
           class="input"
           placeholder="enter a column"
           v-model="titleText">

    <v-button :disabled="confirmButtonDisabled"
              type="success"
              @click="handleConfirm"
              class="confirm-btn">
      create column
    </v-button>
  </v-modal>
</template>

<script>
import { mapMutations } from 'vuex';

import vButton from '@/components/Button';
import vModal from '@/components/Modal';

export default {
  inheritAttrs: true,

  components: {
    vButton,
    vModal
  },

  data() {
    return {
      titleText: ''
    };
  },

  watch: {
    '$attrs.visible': {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      },

      immediate: true
    }
  },

  computed: {
    confirmButtonDisabled() {
      return this.titleText === '';
    }
  },

  methods: {
    ...mapMutations(['ADD_COLUMN']),

    closeModal() {
      this.$emit('update:visible', false);
    },

    handleConfirm() {
      this.ADD_COLUMN(this.titleText);
      this.closeModal();
      this.titleText = '';
    }
  }
};
</script>

<style lang='scss' scoped>
.column-name {
  margin-bottom: 6px;
  font-weight: 600;
}

.input {
  padding: 8px;
  width: 399px;
  background-color: rgb(250, 251, 252);
  outline: none;
  border: 1px solid #eee;
  border-radius: 2px;
  color: rgb(36, 41, 46);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    background-color: #fff;
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }
}

.confirm-btn {
  margin-top: 15px;
}
</style>