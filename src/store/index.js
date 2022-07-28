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
    addMemoList (state, contents) {
      state.memoList.push(contents)
    },
    fetchLocalStorageToMemoList(state) {
      state.memoList = JSON.parse(localStorage.getItem(store.state.storageKey)) ?? []
    },
    updateMemoContents(state, index) {
      state.memoContents = state.memoList[index].contents
    }
    // updateMemoList(state, contents) {
    //   state.memoList[this.$route.params.id] = contents
    // }
  }
})

export default store
