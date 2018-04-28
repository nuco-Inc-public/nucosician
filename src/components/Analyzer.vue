<template>
  <div class="analyzer">
    <h1>音響認識テスト画面</h1>
    <button v-on:click="start">start</button>
    <button v-on:click="stop">stop</button>
  </div>
</template>

<script>
import { Analyzer } from '../models/music/analyzer'
var analyzer = new Analyzer()

const start = () => {
  analyzer.start()
}

const stop = () => {
  analyzer.stop()
}

export default {
  name: 'Analyzer',
  // data () {
  //   return {
  //   }
  // },
  methods: {
    start: start,
    stop: stop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
