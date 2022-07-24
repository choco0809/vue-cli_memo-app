<template>
  <div class="main">
    <MemoList/>
    <router-view/>
  </div>
</template>

<script>

import MemoList from '@/view/MemoList'
export default {
  name: 'App',
  components: {MemoList}
}
</script>

<style>
  body {
    font-family: 'Helvetica Neue','Helvetica','Arial',sans-serif;
    background-color: #E8DDD2;
  }

  .main {
    height: 950px;
    width: 960px;
    margin: auto;
  }
</style>
