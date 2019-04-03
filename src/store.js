import Vue from 'vue'
import Vuex from 'vuex'
import shortid from 'shortid';

import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    columns: [
      // {
      //   id: '01',
      //   title: '01',
      //   cards: [
      //     {
      //       id: '',
      //       content: ''
      //     }
      //   ]
      // },
      // {
      //   id: '02',
      //   title: '02',
      //   cards: [
      //     {
      //       id: '',
      //       content: ''
      //     }
      //   ]
      // }
    ]
  },

  mutations: {
    // 添加 column
    ADD_COLUMN(state, name) {
      state.columns.push({
        id: shortid.generate(),
        title: name,
        cards: []
      });
    },
    // 删除 column
    DELETE_COLUMN(state, id) {
      let index = state.columns.findIndex((item) => item.id === id);
      state.columns.splice(index, 1);
    },
    // 编辑 column
    UPDATE_COLUMN(state, {
      id,
      title
    }) {
      let target = state.columns.find((item) => item.id === id);

      target.title = title;
    }
  },

  actions: {

  }
})