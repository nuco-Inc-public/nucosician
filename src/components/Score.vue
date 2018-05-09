<template>
  <div>
    <img src="../assets/rod.png" alt="棒線" title="棒">
    <div id="container"></div>
  </div>
</template>
<script src="osmd.js"></script>
<script>
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import { Parser } from 'xml-parser'

window.onload = () => {
  let osmd = new OpenSheetMusicDisplay(document.getElementById('container'))
  osmd.load('http://localhost:8888/kaerunouta.xml')
  .then(_ => osmd.render())
  .then(_ => console.log(osmd.drawer))
  .catch(e => console.log(e))
}

export default {
  name: 'Score',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

img {
  position: absolute;
  left: 110px;
  top: 190px;
  z-index: 1;
}
</style>
