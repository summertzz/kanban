<template>
  <div class="card">
    <the-card-delete-modal :visible.sync="cardDeleteModalVisible"
                           :card-id="id" />

    <the-card-update-modal :visible.sync="cardUpdateModalVisible"
                           :card-id="id"
                           :content="content" />

    <div class="left">
      <v-icon name="card" />
    </div>

    <div class="middle">
      <article>
        <vue-markdown :source="content">
        </vue-markdown>
      </article>
    </div>

    <div class="right">
      <v-dropdown class="dropdown">
        <v-icon slot="activitor"
                class="activator"
                name="emphasis"
                color="rgb(106, 115, 125)" />
        <v-dropdown-menu>
          <v-dropdown-menu-item @click="showCardUpdateModal">Edit card</v-dropdown-menu-item>
          <v-divider />
          <v-dropdown-menu-item @click="showCardDeleteModal">Delete card</v-dropdown-menu-item>
        </v-dropdown-menu>
      </v-dropdown>
    </div>

  </div>
</template>

<script>
import VIcon from '@/components/Icon';
import VDivider from '@/components/Divider';
import VDropdown from '@/components/Dropdown';
import VDropdownMenu from '@/components/DropdownMenu';
import VDropdownMenuItem from '@/components/DropdownMenuItem';
import TheCardDeleteModal from '@/components/TheCardDeleteModal';
import TheCardUpdateModal from '@/components/TheCardUpdateModal';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'VCard',

  components: {
    VIcon,
    VDivider,
    VDropdown,
    VDropdownMenu,
    VDropdownMenuItem,
    TheCardDeleteModal,
    TheCardUpdateModal,
    VueMarkdown
  },

  props: {
    id: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {
      cardInputBlockVisible: false,
      cardDeleteModalVisible: false,
      cardUpdateModalVisible: false
    };
  },

  methods: {
    toggleCardInputBlock() {
      this.cardInputBlockVisible = !this.cardInputBlockVisible;
    },

    showCardDeleteModal() {
      this.cardDeleteModalVisible = true;
    },

    showCardUpdateModal() {
      this.cardUpdateModalVisible = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.card {
  display: flex;

  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;

  background-color: #fff;

  .middle {
    flex: 1;
    padding: 0 8px;

    p {
      margin: 0;
      white-space: wrap;
      word-break: break-all;
    }
  }

  .right {
    .dropdown {
      // transform: translateY(-4px);
    }
  }
}
</style>