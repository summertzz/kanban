<template>
  <v-modal :title="modalTitle"
           v-bind="$attrs"
           v-on="$listeners">
    <p class="desc">This action will remove any cards and automation preset associated with the column.</p>

    <div class="modal-footer">
      <v-button @click="handleConfirm"
                type="danger"
                class="detete-btn">
        Delete column
      </v-button>
      <v-button @click="closeModal">
        Cancel
      </v-button>
    </div>
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

  data() {
    return {
      titleText: ''
    };
  },

  inject: ['columnName', 'columnId'],

  computed: {
    modalTitle() {
      return 'Delete ' + this.columnName;
    },

    confirmButtonDisabled() {
      return this.titleText === '';
    }
  },

  watch: {},

  methods: {
    ...mapMutations(['DELETE_COLUMN']),

    closeModal() {
      this.$emit('update:visible', false);
    },

    handleConfirm() {
      this.DELETE_COLUMN(this.columnId);
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