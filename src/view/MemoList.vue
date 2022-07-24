<template>
  <div class="main">
    <h2>メモ一覧</h2>
    <table class="ellipsis">
      <div class="newMemo">
        <tr>
          <td>
            <router-link to="/new">＋ 新規メモ</router-link>
          </td>
        </tr>
      </div>
      <div class="memoList">
        <tr v-for="(memo, index) in memoList" :key="index">
          <td>
            <router-link :to="{ name: 'memoContents', params: {id: index + 1} }">{{ memo.contents }}</router-link>
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'memoList',
    data() {
      return {
        memoList: [
          {contents: 'メモ1'},
          {contents: 'メモ2'},
          {contents: 'メモ3'},
          {contents: 'メモ4'},
          {contents: 'メモ5'},
          {contents: 'メモ6'},
          {contents: 'メモ7'},
          {contents: 'メモ8'},
          {contents: 'メモ9'}
        ]
      }
    }
  }
</script>

<style scoped>
  .main {
    height: 250px;
    width: 600px;
    text-align: center;
    background-color: white;
    border: 5px #15B1AC solid;
  }

  .memoList {
    height: 100px;
    overflow-y: auto;
  }

  table.ellipsis {
    table-layout: fixed;
    width: 500px;
  }

  table.ellipsis td {
    font-size: 15px;
    text-align: left;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
</style>
