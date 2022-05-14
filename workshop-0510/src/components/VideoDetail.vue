<template>
  <div class="video-detail">
    <iframe v-if="selectedVideo" :src="videoURI" frameborder="0" allow='autoplay'></iframe>
  </div>  
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    selectedVideo: {
      type: Object
    }
  },
  computed: {
    videoURI: function () {
      const videoId = this.selectedVideo.id.videoId
      return `https://www.youtube.com/embed/${videoId}`+'?autoplay=1'
    }
  }
}
</script>

<style>

</style>