<template>
  <div id="app">
    <headerItem></headerItem>
    <router-view></router-view>
  </div>
</template>

<script>
import headerItem from './components/HeaderItem'

export default {
  name: 'App',
  components: {
    headerItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
