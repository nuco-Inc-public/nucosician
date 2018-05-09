<template>
  <div>

    <div class="col s12 m7 music-list">
      <h1 class="header">楽曲一覧</h1>

      <div class="card horizontal" v-for="(item, index) in search_list" :key="index">
        <div class="card-image">
          <i class="medium material-icons">library_music</i>
          <i class="medium material-icons">supervisor_account</i>
        </div>
        <div class="card-stacked">
          <div class="card-content">
          <a v-bind:href="'score?id=' + item.id">{{ item.title }}</a>
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
import axios from 'axios'
export default {
  data () {
    return {
      search_list: []
    }
  },
  name: 'MainPage',
  async created () {
    try {
      let res = await axios.get(process.env.API_ENDPOINT + '/music_list')
      this.search_list = res.data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

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
  width: 60%;
  margin: 0 auto;
}
@media screen and (max-width:480px) {
  .music-list {
    width: 80%;
    margin: 0 auto;
  }
}
.material-icons {
  display: block;
  color: #ee6e73;
  padding: 20% 0 20% 12%;
}
</style>
