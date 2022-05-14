<template>
  <li @click="selectVideo">
    <img :src="videoUrl" alt="youtube-thumbnail-image">
    {{ videoTitle }}
  </li>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'VideoListItem',
  props: {
    videoItem: {
      type: Object,
      required: true,
    }
  },
  computed:{
    videoTitle(){
      const title = _.unescape(this.videoItem.snippet.title)
      return title
    },
    videoUrl(){
      return this.videoItem.snippet.thumbnails.default.url
    }
  },
  methods: {
    selectVideo: function(){
      this.$emit('select-video', this.videoItem)
    }
  },
}
</script>

<style>

</style>