<template>
  <v-modal :title="modalTitle"
           v-bind="$attrs"
           v-on="$listeners">
    <p class="desc">This will remove this note from the project</p>

    <div class="modal-footer">
      <v-button @click="handleConfirm"
                type="danger"
                class="detete-btn">
        Delete card
      </v-button>
      <v-button @click="closeModal">
        Cancel
      </v-button>
    </div>
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

  props: {
    cardId: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      titleText: ''
    };
  },

  inject: ['columnId'],

  computed: {
    modalTitle() {
      return 'Delete card';
    },

    confirmButtonDisabled() {
      return this.titleText === '';
    }
  },

  watch: {},

  methods: {
    ...mapMutations(['DELETE_CARD']),

    closeModal() {
      this.$emit('update:visible', false);
    },

    handleConfirm() {
      this.DELETE_CARD({
        columnId: this.columnId,
        cardId: this.cardId
      });
      this.closeModal();
    }
  }
};
</script>

<style lang='scss' scoped>
.desc {
  color: #24292e;
  font-size: 14px;
}

.modal-footer {
  display: flex;
  align-items: center;

  .detete-btn {
    margin-right: 5px;
  }
}
</style>