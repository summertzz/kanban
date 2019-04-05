<template>
  <div class="column">
    <the-column-delete-modal :visible.sync="clolumnDeleteModalVisible" />
    <the-column-update-modal :visible.sync="columnUpdateModalVisible"
                             :title="title" />

    <div class="column-header">
      <div class="left">
        <span class="count">{{cardsCount}}</span>
        <span class="title">{{title}}</span>
      </div>

      <div class="right">
        <v-icon class="add-card"
                name="add"
                color="rgb(88, 96, 105)"
                @click="toggleCardInputBlock" />
        <v-dropdown>
          <v-icon slot="activitor"
                  class="edit-card"
                  name="emphasis"
                  color="rgb(106, 115, 125)" />
          <v-dropdown-menu>
            <v-dropdown-menu-item @click="handleUpdateClick">Edit column</v-dropdown-menu-item>
            <v-divider />
            <v-dropdown-menu-item @click="handleDeleteClick">Delete column</v-dropdown-menu-item>
          </v-dropdown-menu>
        </v-dropdown>
      </div>
    </div>

    <div class="column__body">
      <div v-show="cardInputBlockVisible"
           class="card-input-block">
        <textarea rows="2"
                  placeholder="Enter a note"
                  v-model="cardContentInputText"></textarea>
        <div class="buttons">
          <v-button class="btn"
                    type="success"
                    :disabled="cardInputDisabled"
                    @click="handleCardAddButtonClick">Add</v-button>
          <v-button class="btn"
                    @click="handleCardCancelButtonClick">Cancel</v-button>
        </div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import VIcon from '@/components/Icon';
import VButton from '@/components/Button';
import VDivider from '@/components/Divider';
import VDropdown from '@/components/Dropdown';
import VDropdownMenu from '@/components/DropdownMenu';
import VDropdownMenuItem from '@/components/DropdownMenuItem';
import TheColumnDeleteModal from '@/components/TheColumnDeleteModal';
import TheColumnUpdateModal from '@/components/TheColumnUpdateModal';

export default {
  name: 'VColumn',

  components: {
    VIcon,
    VButton,
    VDivider,
    VDropdown,
    VDropdownMenu,
    VDropdownMenuItem,
    TheColumnDeleteModal,
    TheColumnUpdateModal
  },

  props: {
    title: String,
    cardsCount: Number,
    id: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      clolumnDeleteModalVisible: false,
      columnUpdateModalVisible: false,
      cardInputBlockVisible: false,
      cardContentInputText: ''
    };
  },

  computed: {
    cardInputDisabled() {
      return this.cardContentInputText === '';
    }
  },

  provide() {
    return {
      columnName: this.title,
      columnId: this.id
    };
  },

  methods: {
    ...mapMutations(['ADD_CARD']),

    handleDeleteClick() {
      this.clolumnDeleteModalVisible = true;
    },

    handleUpdateClick() {
      this.columnUpdateModalVisible = true;
    },

    toggleCardInputBlock() {
      this.cardInputBlockVisible = !this.cardInputBlockVisible;
    },

    handleCardAddButtonClick() {
      this.ADD_CARD({
        columnId: this.id,
        content: this.cardContentInputText
      });
      this.cardContentInputText = '';
    },

    handleCardCancelButtonClick() {
      this.cardInputBlockVisible = false;
    }
  }
};
</script>

<style lang='scss' scoped>
.column {
  flex-shrink: 0;

  width: 353px;
  height: 100%;
  margin-right: 16px;
  border-radius: 6px;

  background-color: rgb(239, 241, 243);

  .column-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;

    padding: 8px;
    font-size: 14px;
    font-weight: 600;

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .count {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 2px 5px;
        margin-right: 8px;
        border-radius: 20px;

        color: #24292e;
        font-size: 12px;
        background-color: rgba(27, 31, 35, 0.15);
      }
    }

    .right {
      display: flex;
      align-items: center;

      line-height: 14px;
      font-size: 16px;

      .add-card {
        margin-right: 8px;
        &:hover {
          cursor: pointer;
          color: #2188ff !important;
        }
      }

      .edit-card {
        vertical-align: center;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .column__body {
    padding: 8px;

    .card-input-block {
      textarea {
        width: 100%;
        min-height: 34px;
        line-height: 25px;
        padding: 6px 8px;
        border: 1px solid rgb(209, 213, 218);
        border-radius: 3px;
        outline: none;

        vertical-align: middle;
        resize: vertical;

        font-size: 14px;
        color: #24292e;
        box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);

        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }

        &:focus {
          background-color: #fff;
          border-color: #2188ff;
          box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
            0 0 0 0.2em rgba(3, 102, 214, 0.3);
          outline: none;
        }
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        .btn {
          flex: 1;

          &:first-child {
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>