<template>
<div>
    <div class="HomeVideoContainer">
      <h2>{{videoClickPart}} 운동</h2>
      <!-- <h2>{{ videos[0].part }} 운동</h2> -->
        <div class="container">
          <div class="scroll-box">
            <div>
              <router-view class="frame" :key="$route.fullPath"></router-view>
            </div>
          </div>
          <!-- 선, 비디오 -->
          <div class="line"></div>
          <div class="playing-video">
            <div>
              <img @click="toggleForReview" v-if="this.toggle==0" class="toggle-icon" src="@/assets/review.png">
              <img @click="toggleForList" v-if="this.toggle!=0" class="toggle-icon" src="@/assets/list.png">
              <!-- <router-link id="reviewImg" class="a-tag" :to="`./reviewlist/${videoClickEngPart}/${videoClickVideoId}`"><img class="toggle-icon" src="@/assets/review.png"></router-link>
              <router-link id="listImg" class="a-tag" :to="`./reviewlist/${videoClickEngPart}/${videoClickVideoId}`"><img class="toggle-icon" src="@/assets/list.png"></router-link> -->
            </div>
            <!-- <img v-if="!videoData" id="tempImg" src="@/assets/S-logo.png"/>
            <iframe v-if="videoData" width="517" height="346" :src="`https://www.youtube.com/embed/${videoData}`" ></iframe> -->
            <img v-if="!videoClickPart" id="tempImg" src="@/assets/S-logo.png"/>
            <iframe v-if="videoClickPart" width="517" height="346" :src="`https://www.youtube.com/embed/${videoClickVideoId}`" ></iframe>
          </div>
        </div>
    </div>
    
</div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name:'HomeVideo',
  data(){
    return{
      toggle:0,
    }
  },
  computed: {
    ...mapState(["videoClick","videoClickPart","videoClickVideoId","videoClickEngPart"])
  },
  watch:{
    
  },
  created() {
    this.vidoeClick[0]=""
  },

  methods:{
    toggleForReview(){
      this.toggle += 1;
      this.$router.push(`./reviewlist/${this.videoClickEngPart}/${this.videoClickVideoId}`)
    },
    toggleForList(){
      this.toggle -= 1;
      this.$router.push(`/homevideo/${this.videoClickEngPart}`)
      // this.$router.push({name:'ReviewList'})
      // location.href = `/homevideo/${this.videoClickEngPart}`;
    }
  }
  };
  </script>

  <style scoped>
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  h2{
    margin:30px;
    margin-bottom: 90px;
  }
  .HomeVideoContainer{
    font-family: "GmarketSansMedium";
  }
  .container{
    display: flex;
    justify-content: center;
    justify-items: center;
    overflow: auto;
  }
  .line{
    border-left: 5px solid black;
    margin: 0px 70px;
  }
  .scroll-box {
    overflow: auto;
  }
  .scroll-box::-webkit-scrollbar{
    overflow: scroll;
    scrollbar-color: #D4AA70 #e4e4e4;
    width: 6px;
    height: 6px;
  }

  .scroll-box::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }
  .scroll-box::-webkit-scrollbar-thumb {
      background-color: #d4aa70;
      border-radius: 100px;
  }
  .scroll-box::-webkit-scrollbar-thumb {
      background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%);
      box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
      border-radius: 100px;
  }

  /* 동영상 빈자리용 이미지 */
  #tempImg{
    width: 500px;
    height: 330px;
    border: 1px solid gray;
  }

  .frame{
    width: 700px;
    height: 381px;
  }

  .toggle-icon{
    width: 64px;
    height: 64px;
    display: inline-block;
    position: absolute;
    right: 120px;
    top: 150px;
  }
  #listImg{
    display: none;
  }
</style>