import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      storageKey: 'MyMemo',
      memoList: [],
      memoContents: ''
    }
  },
  getters: {
    fetchMemoList(state) {
      return state.memoList
    },
    fetchMemoContents(state) {
      return state.memoContents
    },
    fetchStorageKey(state) {
      return state.storageKey
    },
    maxMemoId(state) {
      return state.memoList.reduce( (max, obj) => (max.id > obj.id) ? max : obj )
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
      const targetId = state.memoList.findIndex( (v) => v.id === payload.index )
      state.memoContents = state.memoList[targetId].contents
    },
    updateMemoList(state, payload) {
      const targetId = state.memoList.findIndex( (v) => v.id === payload.index )
      state.memoList[targetId].contents = payload.contents
    },
    deleteMemoList(state, payload) {
      const targetId = state.memoList.findIndex( (v) => v.id === payload.index )
      state.memoList.splice(targetId, 1)
    }
  }
})

export default store
