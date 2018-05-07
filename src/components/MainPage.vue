<template>
  <div>

    <div class="col s12 m7 music-list">
      <h1 class="header">楽曲一覧</h1>

      <div class="card horizontal" v-for="(item, index) in lists" :key="index">
        <div class="card-image">
          <!-- <img src="https://lorempixel.com/100/190/nature/6"> -->
          <i class="medium material-icons">library_music</i>
          <i class="medium material-icons">supervisor_account</i>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <a href="#">{{ item.title }}</a>
          </div>
          <div class="card-action">
            <p>{{ item.artist }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Musicinfo from '../assets/music_list.json';
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists: Musicinfo
    }
  },
  methods: {
    value: function () { this.showText = !this.showText }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.collection {
  margin:0 15%
}
.music-list {
  width: 80%;
  margin: 0 auto;
}
.material-icons {
  display: block;
  color: #ee6e73;
  height: 50%;
}
.card-image {
  margin-top: 2%;
  margin-left: 2%;
}
</style>
