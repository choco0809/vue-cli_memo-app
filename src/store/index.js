import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      storageKey: 'MyMemo',
      memoList: [],
      memoContents: ''
    }
  },
  mutations: {
    addMemoList (state, payload) {
      state.memoList.push(payload)
    },
    fetchLocalStorageToMemoList(state) {
      state.memoList = JSON.parse(localStorage.getItem(store.state.storageKey)) ?? []
    },
    updateMemoContents(state, payload) {
      state.memoContents = state.memoList[payload.index].contents
    },
    updateMemoList(state, payload) {
      state.memoList[payload.index].contents = payload.contents
    },
    deleteMemoList(state, payload) {
      state.memoList.splice(payload.index, 1)
    }
  }
})

export default store
