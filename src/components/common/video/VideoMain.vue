<template>
   
    </template>
    
    <script>
    // import router from "@/router";
    import { mapState } from "vuex";
    // import VideoDetailVue from "@/components/common/video/VideoDetail.vue";
    export default {
    name: "VideoMain",
    data() {
      return{
        videoData:"",
        videoList:"",
        engPart:"",
      }
    },
    computed: {
        ...mapState(["videos","video","reviews"])
    },
    created() {
        const pathName = new URL(document.location).pathname.split("/");
        this.engPart = pathName[2];
        this.$store.dispatch("getVideos", this.engPart);
        // this.$store.dispatch('getReviews', id);
    },
    methods: {
        writeReview(id) {
            // const pathName = new URL(document.location).pathname.split('/');
            // const part = pathName[pathName.length - 1];
            console.log(id);
            this.$router.push({
                name: "ReviewWrite",
                params: { id }
            });
        },
        sendData(videoId){
          this.videoData=videoId;
          console.log(this.videoData);
        },
        sendList(videoId){
          this.videoList=videoId;
          console.log("리뷰 보기 눌렀어잉")
        }
    },
    // components: { router }
};
    </script>
    
    <style scoped>
    
    h2{
      margin-bottom: 30px;
    }
    .container{
      display: flex;
      justify-content: center;
      justify-items: center;
    }
    .a-tag{
      text-decoration-line: none;
      color: darkolivegreen;
    }
    .line{
      border-left: 5px solid black;
      margin: 0px 70px;
    }
    .scroll-box{
      overflow: scroll;
      width: 500px;
      height: 350px;
    }
    
    /* 동영상 빈자리용 이미지 */
    #tempImg{
      width: 500px;
      height: 330px;
    }
    .thumbnail{
      width: 120px;
      height: 80px;
    }
    </style>