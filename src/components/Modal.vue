<template>
  <div v-show="visible"
       class="modal__wrapper"
       @click.self="closeModal">

    <transition name="fade">
      <div v-show="visible"
           class="modal">

        <div class="header">
          <span>{{ title }}</span>
          <span class="close-button"
                @click="closeModal">
            <v-icon name="close"
                    color="rgb(106, 115, 125)" />
          </span>
        </div>

        <div class="main">
          <slot></slot>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import vButton from '@/components/Button';
import vIcon from '@/components/Icon';

export default {
  components: {
    vButton,
    vIcon
  },

  props: {
    visible: {
      type: Boolean
    },

    title: String
  },

  data() {
    return {
      titleText: ''
    };
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms;
}

.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    width: 446px;
    margin: 0 auto;
    margin-top: 55px;

    background-color: #fff;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);

    .header {
      display: flex;
      justify-content: space-between;

      padding: 16px;

      border-bottom: 1px solid #d1d5da;
      background-color: #f8f6fa;

      .close-button {
        cursor: pointer;
      }
    }

    .main {
      padding: 16px;

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
    }
  }
}
</style>