<template>
  <div>
    <div>
    <router-link to="/score">
      スコアー
    </router-link>
    </div>
    <div class="collection">
      <a class="collection-item">楽曲一覧</a>
      <div v-for="(item, index) in lists" :key="index">
        <a href="#!" v-on:click="value" class="collection-item">{{ item.fruit }}</a>
      </div>
    </div>
    <h2 v-show="showText">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lists: [
        {fruit: 'りんご'},
        {fruit: 'バナナ'},
        {fruit: '西瓜'}
      ],
      text: 'Fruit',
      showText: false
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
  margin-left: 300px;
  margin-right: 300px;
}
</style>
