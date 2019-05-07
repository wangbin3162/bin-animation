<template>
  <div id="app">
    <demo/>
  </div>
</template>

<script>
  import Demo from './components/Demo.vue'

  export default {
    name: 'app',
    components: {
      Demo
    }
  }
</script>


<style scoped lang="stylus">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
