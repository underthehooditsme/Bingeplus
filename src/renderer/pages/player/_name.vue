
 // for local replace
// https://bingeplus.herokuapp.com/videos/video/${vidName}
// http://localhost:5000/videos/video/${vidName}
<template>
  <div class="player">
    <video controls muted autoPlay crossOrigin="anonymous">
      <source :src="`https://bingeplus.herokuapp.com/videos/video/${vidName}`" type="video/mp4">
      <track label="English" kind="captions" srcLang="en" :src="`https://bingeplus.herokuapp.com/videos/video/${vidName}/caption`" default>
    </video>
  </div>
</template>

<script>
// const socket=io("http://localhost:5001")
// socket.on("connection")

// const sendMessage=()=>{
//     socket.emit("message","I am watching")
// }
export default {
  data () {
    return {
      vidName: ''
    }
  },
  mounted () {
    this.vidName = this.$route.params.name
  }
}
</script>
<style scoped>
.player{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
}
</style>
