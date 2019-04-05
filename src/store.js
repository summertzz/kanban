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
    },

    // 添加 card
    ADD_CARD(state, {
      columnId,
      content
    }) {
      let column = state.columns.find((item) => item.id === columnId);


      column.cards.push({
        id: shortid.generate(),
        content: content
      })
    },
    // 删除 card
    DELETE_CARD(state, {
      columnId,
      cardId
    }) {
      let column = state.columns.find((item) => item.id === columnId);
      let index = column.cards.findIndex((item) => item.id === cardId);
      column.cards.splice(index, 1);
    },
    // 编辑 card
    UPDATE_CARD(state, {
      columnId,
      cardId,
      content
    }) {
      let column = state.columns.find((item) => item.id === columnId);
      let target = column.cards.find((item) => item.id === cardId);
      target.content = content;
    }

  },

  actions: {

  }
})