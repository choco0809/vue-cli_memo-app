<template>
  <MemoList />
  <div class="memoContents">
    <textarea v-model="memoContents" placeholder="新規メモ"></textarea>
    <button @click="clearMemo">削除</button>
    <button @click="addNewMemo">登録</button>
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
    ...mapGetters(['fetchMemoList', 'fetchStorageKey', 'maxMemoId'])
  },
  methods: {
    addNewMemo:function () {
      if (this.fetchMemoList[0] === undefined) {
        store.dispatch('addMemoList', { id: 0, contents: this.memoContents })
      } else {
        const maxObj = this.maxMemoId
        store.dispatch('addMemoList', { id: maxObj.id + 1, contents: this.memoContents })
      }
      this.saveMemoListForLocalStorage()
      this.moveToRootPath()
    },
    clearMemo: function () {
      this.moveToRootPath()
    },
    saveMemoListForLocalStorage: function () {
      localStorage.setItem(this.fetchStorageKey, JSON.stringify(this.fetchMemoList))
    },
    moveToRootPath: function () {
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
