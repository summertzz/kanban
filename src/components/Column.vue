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
                color="rgb(88, 96, 105)" />
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
  </div>
</template>

<script>
import VIcon from '@/components/Icon';
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
      columnUpdateModalVisible: false
    };
  },

  provide() {
    return {
      columnName: this.title,
      columnId: this.id
    };
  },

  methods: {
    handleDeleteClick() {
      this.clolumnDeleteModalVisible = true;
    },
    handleUpdateClick() {
      this.columnUpdateModalVisible = true;
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
      }

      .edit-card {
        vertical-align: center;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>