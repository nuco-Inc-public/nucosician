<template>
  <div class="score">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Score',
  data () {
    return {
      msg: 'score'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
