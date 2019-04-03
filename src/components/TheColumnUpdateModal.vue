<template>
  <v-modal :title="modalTitle"
           v-bind="$attrs"
           @update:visible="closeModal">
    <div class="column-name">Column name</div>
    <input ref="input"
           type="text"
           class="input"
           placeholder="Enter a column name (To Do, In Progress, Done)"
           v-model="titleText">

    <v-button :disabled="confirmButtonDisabled"
              type="success"
              @click="handleConfirm"
              class="confirm-btn">
      update column
    </v-button>
  </v-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import vButton from '@/components/Button';
import vModal from '@/components/Modal';

export default {
  inheritAttrs: true,

  components: {
    vButton,
    vModal
  },

  inject: ['columnId'],

  props: {
    title: String
  },

  data() {
    return {
      titleText: ''
    };
  },

  computed: {
    modalTitle() {
      return 'Update  ' + this.title;
    },

    confirmButtonDisabled() {
      return this.titleText === '';
    }
  },

  watch: {
    '$attrs.visible': {
      handler(val) {
        if (val) {
          this.titleText = this.title;

          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      },

      immediate: true
    }
  },

  methods: {
    ...mapMutations(['UPDATE_COLUMN']),

    closeModal() {
      this.$emit('update:visible', false);
    },

    handleConfirm() {
      this.UPDATE_COLUMN({
        id: this.columnId,
        title: this.titleText
      });
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