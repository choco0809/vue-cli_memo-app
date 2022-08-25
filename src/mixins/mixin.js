export default {
  methods: {
    saveMemoListForLocalStorage: function () {
      localStorage.setItem(this.fetchStorageKey, JSON.stringify(this.fetchMemoList))
    },
    moveToRootPath: function () {
      this.$router.push('/')
    }
  }
}
