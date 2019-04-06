<template>
  <v-modal :title="modalTitle"
           v-bind="$attrs"
           v-on="$listeners">
    <div class="column-name">Column name</div>

    <textarea ref="input"
              rows="10"
              v-model="contentText"
              class="textarea" />

    <v-button :disabled="confirmButtonDisabled"
              type="success"
              @click="handleConfirm"
              class="confirm-btn">
      Save note
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

  inject: ['columnId'],

  props: {
    content: {
      type: String,
      required: false,
      default: ''
    },

    cardId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      contentText: ''
    };
  },

  computed: {
    modalTitle() {
      return 'Edit note';
    },

    confirmButtonDisabled() {
      return this.contentText === '';
    }
  },

  watch: {
    '$attrs.visible': {
      handler(val) {
        if (val) {
          this.contentText = this.content;

          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      },

      immediate: true
    }
  },

  methods: {
    ...mapMutations(['UPDATE_CARD']),

    closeModal() {
      this.$emit('update:visible', false);
    },

    handleConfirm() {
      this.UPDATE_CARD({
        columnId: this.columnId,
        cardId: this.cardId,
        content: this.contentText
      });
      this.closeModal();
      this.contentText = '';
    }
  }
};
</script>

<style lang='scss' scoped>
.column-name {
  margin-bottom: 6px;
  font-weight: 600;
}

.textarea {
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