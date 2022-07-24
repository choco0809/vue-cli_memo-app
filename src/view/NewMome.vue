<template>
  <div class="main">
    <textarea v-model="memoContents" placeholder="新規メモ"></textarea>
    <button>削除</button>
    <button @click="moveTop">登録</button>
  </div>
</template>

<script>
import router from '@/router'

export default ({
  data(){
    return{
      memoContents: ''
    }
  },
  methods: {
    moveTop: function () {
      router.push('/')
    }
  }
})


</script>

<style scoped>
  .main {
    background-color: coral;
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
