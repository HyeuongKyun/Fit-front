<template>
  <div>
    <table>
      <tr>
        <th>썸네일</th>
        <th>비디오 제목</th>
        <!-- <th>조회수</th> -->
        <!-- <th>리뷰</th> -->
      </tr>
      <tr v-for="video in videos" :key="video.videoId">
        <td>
          <img @click="sendData(video.videoId)" class="thumbnail" :src="`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`"/>
          <!-- // <video>
          //     <source src="https://www.youtube.com/watch?v=Sm80PTHRgkU"/>
          // </video> -->
        </td>
        <td>
          <div @click="sendData(video.videoId)" class="a-tag">
          {{video.title}}
          </div>
        </td>
       
        <td>
          <div>
            <!-- <button @click="sendList(video.videoId)">RevIEWw</button> -->
            <!-- <router-link class="a-tag" to="{name:'ReviewList',params:{video.part}}">리뷰 작성</router-link> -->
            <!-- <router-link class="a-tag" :to="`./reviewlist/${engPart}/${video.videoId}`">리뷰 보기</router-link> -->
          </div> 
        </td>
      </tr>
    </table>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name:"UpperBody",
  data(){
    return{
      // videoData:"",
    }
  },
  computed: {
    // ...mapState(["videos","videoClick", "clickCount"])
    ...mapState(["videos","videoClick"])
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    this.engPart = pathName[2];
    // this.$set(this.videoClick,this.engPart,null)
    this.$store.dispatch("getVideos", this.engPart);
    // // console.log("어퍼바디다!!!!!!!!!",this.videoClick)
    // console.log(this.$store.state.videos[0].part);
    // this.$store.state.videoClick[0] = this.$store.state.videos[0].part;
    // this.$store.state.videoClick[1] = this.$store.state.videos[0].videoId;
  },
  watch: {
    videos(val, oldVal){
      console.log(val, oldVal);
      let temp = this.$store.state.videos;
      this.$store.state.videoClick[0] = [...temp][0].part;
      this.$store.state.videoClick[1] = [...temp][0].videoId;
      console.log(temp);
      console.log([...temp][0].part);
      console.log([...temp][0].videoId);
      let tempPart = [...temp][0].part;
      let tempVideoId = [...temp][0].videoId;
      this.$store.commit("SET_VIDEO_CLICK_PART",  tempPart);
      this.$store.commit("SET_VIDEO_CLICK_VIDEO_ID",  tempVideoId);
      if(tempPart=="상체"){
        this.$store.commit("SET_VIDEO_CLICK_ENG_PART", "upperbody");
      }
      else if(tempPart=="하체"){
        this.$store.commit("SET_VIDEO_CLICK_ENG_PART", "lowerbody");
      }
      else if(tempPart=="전신"){
        this.$store.commit("SET_VIDEO_CLICK_ENG_PART", "wholebody");
      }
      else if(tempPart=="복부"){
        this.$store.commit("SET_VIDEO_CLICK_ENG_PART", "abdominalmucles");
      }
      
    },
    // clickCount(val, oldVal){
    //   console.log(val, oldVal);
    //   let temp = this.$store.state.videos;
    //   this.$store.state.videoClick[0] = [...temp][0].part;
    //   this.$store.state.videoClick[1] = [...temp][0].videoId;
    //   console.log(temp);
    //   console.log([...temp][0].part);
    //   console.log([...temp][0].videoId);
    //   this.$store.commit("SET_VIDEO_CLICK_PART",  [...temp][0].part);
    //   this.$store.commit("SET_VIDEO_CLICK_VIDEO_ID",  [...temp][0].videoId);
    // }
  },
  // watch:{
  //   '$route.params.part': function(){
  //     console.log('route change')
  //     this.$store.state.videoClick[0] = this.$store.state.videos[0].part;
  //     this.$store.state.videoClick[1] = this.$store.state.videos[0].videoId;
  //   }
  // },
  methods:{
    sendData(videoId){
      // const videoData=[this.engPart,videoId];
      this.$store.commit("SET_VIDEO_CLICK_VIDEO_ID",videoId);
      this.$store.commit("SET_VIDEO_CLICK_ENG_PART",this.engPart);
    }, 
  }
}
</script>

<style>
.a-tag{
  text-decoration-line: none;
  color: darkolivegreen;
  cursor: pointer;
}

.thumbnail{
  width: 120px;
  height: 80px;
  cursor: pointer;
}
</style>