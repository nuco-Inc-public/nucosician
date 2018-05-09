<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script src="osmd.js"></script>
<script>
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'

window.onload = () => {
  let osmd = new OpenSheetMusicDisplay(document.getElementById('container'))
  osmd.load('http://localhost:8888/kaerunouta.xml').then(_ => osmd.render())
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
</style>
