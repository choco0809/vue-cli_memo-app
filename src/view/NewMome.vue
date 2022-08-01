<template>
  <div class="main">
    <textarea v-model="memoContents" placeholder="新規メモ"></textarea>
    <button @click="deleteMemo">削除</button>
    <button @click="addNewMemo">登録</button>
  </div>
</template>

<script>

import store from '@/store'

export default ({
  data(){
    return{
      memoContents: ''
    }
  },
  methods: {
    addNewMemo: function () {
      store.commit('addMemoList', { contents: this.memoContents })
      this.saveMemoListForLocalStorage()
      this.memoContents = ''
      this.$router.push('/')
    },
    clearMemo: function () {

    },
    deleteMemo:function () {
      this.memoContents = ''
      this.$router.push('/')
    },
    saveMemoListForLocalStorage: function () {
      localStorage.setItem(this.$store.state.storageKey, JSON.stringify(this.$store.state.memoList))
    }
  }
})


</script>

<style scoped>
  .main {
    width: 600px;
    height: 400px;
    margin-top: 10px;
    background-color: white;
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
