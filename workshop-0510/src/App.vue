<template>
  <div id="app">
    <h1>Youtube</h1>
    <header>
      <the-search-bar @input-change="onInputChange"></the-search-bar>
    </header>
    <section>
      <video-detail :selected-video="selectedVideo"></video-detail>
      <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import TheSearchBar from './components/TheSearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
  },
  data: function(){
    return {
      inputText: null,
      videos: [],
      selectedVideo: null,
    }
  },
  methods: {
    onInputChange: function(inputText){
      this.inputValue = inputText

      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: this.inputValue
      }
      axios({
        method: 'get',
        url: API_URL,
        params,
      })
      .then(res => {
        console.log(res)
        this.videos = res.data.items
      })
      .catch(err => {
        console.log(err)
      })
    },
    onVideoSelect: function(video){
      this.selectedVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
