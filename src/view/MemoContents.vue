<template>
  <div class="main">
    <textarea v-model="this.$store.state.memoContents" placeholder="メモの内容"></textarea>
    <button>削除</button>
    <button @click="saveLocalStorage">更新</button>
  </div>
</template>

<script>

export default ({
  methods: {
    moveTop: function () {
      this.$router.push('/')
    },
    saveLocalStorage: function () {
      console.log(this.$store.state.memoContents)
      // store.commit('updateMemoList', {contents: })
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
