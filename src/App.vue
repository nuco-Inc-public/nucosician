<template>
  <div id="app">
    <header id="header">
      <headerItem/>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <footerItem/>
    </footer>
  </div>
</template>

<script>
import headerItem from './components/HeaderItem'
import footerItem from './components/FooterItem'

export default {
  name: 'App',
  components: {
    headerItem,
    footerItem
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}

main {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
