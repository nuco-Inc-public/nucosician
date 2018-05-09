<template>
  <div class="analyzer">
    <h3>音響認識テスト画面</h3>
    <canvas id="canvas" height="500"></canvas>
    <button class="waves-effect waves-light btn" v-on:click="start">start</button>
    <button class="waves-effect waves-light btn" v-on:click="stop">stop</button>
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
#canvas {
  width: 90%;
}
canvas {
  display: block;
  margin: 0% auto;
}

button {
  margin-top: 20px;
}
</style>
