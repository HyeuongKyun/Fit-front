<template>
  <div >
    <div class="ReviewListContainer">
      <h3>리뷰목록</h3>
      <hr />
      <div>
        <table>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>등록일</th>
          </tr>
          <tr v-for="review in reviews" :key="review.reviewId">
            <td>
              <router-link :to="`detail/${review.reviewId}`">
                {{
                review.title
                }}
              </router-link>
            </td>
            <td>{{ review.userId }}</td>
            <td>{{ review.reviewViewCnt }}</td>
            <td>{{ review.createAt }}</td>
          </tr>
        </table>
      </div>
      <div class="btns">
        <input id="submit" @click="reviewWrite(id)" readonly value="리뷰 작성하기" class="submit_btn"/>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";

export default {
  name: "ReviewList",
  data(){
    return{
      id:"",
      engPart:"",
    }
  },
  computed: {
    ...mapState(["reviews","user","videoClickEngPart"])
  },
  created() {
    this.id = this.$store.state.videoClickVideoId;
    this.engPart = this.$store.state.videoClickEngPart;
    console.log(this.engPart)
    this.$store.dispatch("getReviews", this.id);
  },
  methods: {
    reviewWrite(videoId){
      console.log(this.user.name)
      if(this.user){
        if(this.user.name){
          console.log(videoId)
          this.$router.push(`/homevideo/reviewlist/${this.engPart}/write/${videoId}`)
        }else{
          alert("리뷰는 로그인 후 작성 가능합니다.(상현님 신분을 밝혀주세요.)");
        }
      }
      else{
        alert("리뷰는 로그인 후 작성 가능합니다.(상현님 신분을 밝혀주세요.)");
      }
    },
  }
};
</script>
  
  <style scoped>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "GmarketSansLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

table {
  font-family: "GmarketSansMedium";
  border: 1px #a39485 solid;
  font-size: .9em;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}
th {
  text-align: center;
}
  
thead {
  font-weight: bold;
  color: #fff;
  background: #73685d;
}
  
 td, th {
  padding: 1em .5em;
  vertical-align: middle;
}
  
 td {
  border-bottom: 1px solid rgba(0,0,0,.1);
  background: #fff;
}

a {
  color: #73685d;
}

@media all and (max-width: 768px) {
    
    table, thead, tbody, th, td, tr {
      display: block;
    }
    
    th {
      text-align: right;
    }
    
    table {
      position: relative; 
      padding-bottom: 0;
      border: none;
      box-shadow: 0 0 10px rgba(0,0,0,.2);
    }
    
    thead {
      float: left;
      white-space: nowrap;
    }
    
    tbody {
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      white-space: nowrap;
    }
    
    tr {
      display: inline-block;
      vertical-align: top;
    }
    
    th {
      border-bottom: 1px solid #a39485;
    }
    
    td {
      border-bottom: 1px solid #e5e5e5;
    }
    
    
    }
</style>
  