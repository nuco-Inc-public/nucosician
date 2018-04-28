<template>
  <div class="analyzer">
    <h1>音響認識テスト画面</h1>
    <button v-on:click="start">start</button>
    <button v-on:click="stop">stop</button>
    <canvas id="canvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
import { Analyser } from '../models/music/analyzer'
let analyser = null

const start = () => {
  analyser = new Analyser()
  analyser.setCanvas(document.getElementById('canvas'))
  analyser.start()
}

const stop = () => {
  analyser.stop()
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
