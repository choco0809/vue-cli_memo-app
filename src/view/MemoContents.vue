<template>
  <MemoList />
  <div class="memoContents">
    <div v-if="this.$route.path == '/new' ">
      <textarea v-model="memoContents" placeholder="新規メモ"></textarea>
      <button @click="clearMemo">削除</button>
      <button @click="addNewMemo">登録</button>
    </div>
    <div v-else>
      <textarea v-model="this.$store.state.memoContents" placeholder="メモの内容"></textarea>
      <button @click="deleteMemoList">削除</button>
      <button @click="updateMemoContents">更新</button>
    </div>
  </div>
</template>

<script>

import store from '@/store'
import MemoList from '../view/MemoList'
import { mapGetters } from 'vuex'

export default ({
  components: { MemoList },
  data() {
    return {
      memoContents: ''
    }
  },
  computed: {
    ...mapGetters(['fetchMemoList', 'fetchMemoContents', 'fetchStorageKey', 'maxMemoId'])
  },
  mounted: function () {
    if (this.$route.path === '/new') {
      this.memoContents = ''
    } else {
      store.commit('updateMemoContents', { index:this.$route.params.id-1 })
      this.memoContents = this.fetchMemoContents
    }
  },
  methods: {
    addNewMemo:function () {
      if (this.$store.state.memoList[0] === undefined) {
        store.commit('addMemoList', { id: 0, contents: this.memoContents })
      } else {
        const maxObj = this.maxMemoId
        store.commit('addMemoList', { id: maxObj.id + 1, contents: this.memoContents })
      }
      this.saveMemoListForLocalStorage()
      this.moveToRootPath()
    },
    clearMemo: function () {
      this.moveToRootPath()
    },
    updateMemoContents: function () {
      store.commit('updateMemoList', { index:this.$route.params.id-1, contents: this.fetchMemoContents })
      this.saveMemoListForLocalStorage()
      this.moveToRootPath()
    },
    deleteMemoList: function () {
      store.commit('deleteMemoList', { index:this.$route.params.id-1 })
      this.saveMemoListForLocalStorage()
      this.moveToRootPath()
    },
    saveMemoListForLocalStorage: function () {
      localStorage.setItem(this.fetchStorageKey, JSON.stringify(this.fetchMemoList))
    },
    moveToRootPath: function () {
      this.memoContents = ''
      this.$router.push('/')
    }
  }
})

</script>

<style scoped>
.memoContents {
  width: 600px;
  height: 400px;
  margin: 10px auto auto auto;
  background-color: rebeccapurple;
  border: 5px #15B1AC solid;
}
textarea {
  font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif;
  resize: none;
  font-size: 15px;
  width: 595px;
  height: 395px;
  outline: none;
}
</style>
