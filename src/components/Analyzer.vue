<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { Analyzer } from '../models/music/analyzer'

export default {
  name: 'Analyzer',
  data () {
    return {
      msg: analyze()
    }
  }
}

function analyze () {
  return new Analyzer().run()
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
