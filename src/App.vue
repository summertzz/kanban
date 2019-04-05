<template>
  <div id="app">
    <div class="content">
      <the-column-add-modal :visible.sync="columnAddModalVisible" />

      <v-column v-for="column in columns"
                :key="column.id"
                :id="column.id"
                :title="column.title"
                :cards-count="column.cards.length">
        <v-card v-for="card in column.cards"
                :key="card.id"
                :content="card.content" />
      </v-column>

      <div class="add-column-button"
           @click="handleAddColumnButtonClick">
        <span>Add column</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import VColumn from '@/components/Column';
import VCard from '@/components/Card';
import theColumnAddModal from '@/components/TheColumnAddModal';

export default {
  components: {
    VColumn,
    VCard,
    theColumnAddModal
  },

  data() {
    return {
      columnAddModalVisible: false
    };
  },

  computed: {
    ...mapState(['columns'])
  },

  methods: {
    handleAddColumnButtonClick() {
      this.columnAddModalVisible = true;
    }
  }
};
</script>

<style lang='scss' scoped>
#app {
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
  overflow-x: auto;

  .content {
    display: inline-flex;
    flex-basis: auto;

    height: 100%;
    padding: 16px;
  }
}

.add-column-button {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 315px;
  height: 103px;

  border: dashed 1px rgb(149, 157, 165);
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    span {
      text-decoration: underline;
    }
  }
}
</style>