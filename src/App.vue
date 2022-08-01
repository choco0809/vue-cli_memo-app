<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
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
