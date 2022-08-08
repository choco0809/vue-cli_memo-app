<template>
  <div class="main">
    <h2>メモ一覧</h2>
    <table class="ellipsis">
      <div>
        <tr>
          <td>
            <router-link to="/new" @click="newMemoTextArea">＋ 新規メモ</router-link>
          </td>
        </tr>
      </div>
      <div class="memoList">
        <tr v-for="(memo) in memoList " :key="memo">
          <td>
            <router-link :to="{ name: 'memoContents', params: {id: memo.id + 1} }" @click="showMemoContents(memo.id)">{{ fetchFirstLine(memo.contents) }}</router-link>
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>

  import store from '@/store'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        memoList: []
      }
    },
    computed: {
      ...mapGetters(['fetchMemoList'])
    },
    name: 'memoList',
    mounted: function () {
      store.commit('fetchLocalStorageToMemoList')
      this.memoList = this.fetchMemoList
    },
    methods: {
      showMemoContents: function (index) {
        store.commit('updateMemoContents', { index: index })
        store.commit('updateNewMemoTextArea', {boolean: false})
      },
      fetchFirstLine: function (contents) {
        return contents.split('\n')[0]
      },
      newMemoTextArea: function () {
        store.commit('updateNewMemoTextArea', {boolean: true})
      }
    }
  }
</script>

<style lang="scss" scoped>
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
