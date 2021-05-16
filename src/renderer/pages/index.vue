<template>
  <div>
    <Video :video-list="videos" />
  </div>
</template>

<script>
import Video from '@/components/Video.vue'
export default {
  components: {
    Video
  },
  data () {
    return {
      videos: []
    }
  },
  async fetch () {
    // for local

    // this.videos = await fetch(
    //   'http://localhost:5000/videos'
    // ).then(res => res.json())

    // for server n heroku or other platform
    this.videos = await fetch(
      'https://bingeplus.herokuapp.com/videos'
    ).then(res => res.json())
  },
  head: {
    title: 'Home'
  }

}
</script>
