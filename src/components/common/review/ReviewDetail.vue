r<template>
  <div>
  <h3 class="r_title">리뷰 제목 : {{ review.title }}</h3>
    <div class="detail-total">
      <div class="infos">
        <!-- <div></div> -->
        <div>조회수 : {{ review.reviewViewCnt }} |&nbsp; </div>
        <div>글쓴이 : {{ review.userId }}  |&nbsp;</div>
        <div>작성 날짜 : {{ review.createAt}}</div>
      </div>
      <div class="r-content-container">
        <div class="r-content">{{ review.content }}</div>
      </div>
      <div class="btns">
        <button class="submit_btn1 btn" @click="reviewEdit(review.reviewId,review.userId)">수정</button>
        <button class="submit_btn2 btn" @click="deleteReview(review.userId)">삭제</button>
        <button class="submit_btn3 btn" @click="back(review.userId)">이전</button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  // import { link } from 'fs';
import { mapState } from 'vuex';
  
  export default {
    name: 'ReviewDetail',
    data(){
      return{
        reviewId:"",
        engPart:"",
      }
    },
    computed: {
      ...mapState(['user','review', 'video','videoClickEngPart']),
    },
    created() {
      const pathName = new URL(document.location).pathname.split('/');
      this.reviewId=pathName[pathName.length-1];
      console.log(this.reviewId)
      this.engPart =this.$store.state.videoClickEngPart;
      this.$store.dispatch('getReview', this.reviewId);

    },
    methods:{
      deleteReview(reUserId) {
        
        const infos = [this.engPart, this.review.reviewId, this.review.videoId];

        if(this.user){
          console.log(this.user.id)
          console.log(reUserId)
          if(this.user.id==reUserId){
            this.$store.dispatch('deleteReview', infos);
          }
          else{
            alert('상현님 다른 사람의 글은 함부로 삭제하시면 안됩니다~')
          }
        }
        else{
          alert('상현님 로그인 하세요~')
        }
      }, 
      reviewEdit(reviewId,reUserId){
        console.log(this.user)
        if(this.user){
          if(this.user.id==reUserId){
            this.$router.push(`/update/${this.engPart}/${reviewId}`)
          }
          else{
            alert('상현님 본인 글만 수정할 수 있어요~')
          }
        }
        else{
          alert('상현님 로그인 하세요.')
        }
      },
      back(reviewId){
        this.$router.push(`/homevideo/reviewlist/${this.engPart}/${reviewId}`)
      }
      
    },
  
  };
  </script>
  
  <style>
  .detail-total{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin:  10px;
    
    border: 2px #a39485 solid;
    font-size: .9em;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    width: 90%;
    border-collapse: collapse;
    border-radius: 5px;
    /* overflow: scroll; */
  }
  .r_title{
    margin-bottom: 10px;
  }
  .infos{
    display: flex;
    flex-direction:row;
    justify-content: center;
    margin-top:10px;

  }
  .r-content-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    
  }
  .r-content{
    border: 2px #a39485 solid;
    background-color: white;
    border-radius: 2rem;
    width: 70%;
    height:150px;
    margin-left: 15%;
    margin-top: 20px;
    padding-top:20px;
  }
  .btns{
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .btn{
    cursor: pointer;
  }
  .btn:hover{
    background-color: rgba(184, 176, 176, 0.596);
  }
  .submit_btn1{
    display: block;
    text-align: center;
    width:100px;
    height: 30px;
    border:2px solid rgb(141,141,141);
    background-color: white;
    border-radius: 2rem;
    font-family: 'GmarketSansMedium';
    margin-right: 10%;
  }
  .submit_btn2{
    display: block;
    text-align: center;
    width:100px;
    height: 30px;
    border:2px solid rgb(141,141,141);
    background-color: white;
    border-radius: 2rem;
    font-family: 'GmarketSansMedium';
    margin-right: 10%; 
  }
  .submit_btn3{
    display: block;
    text-align: center;
    width:100px;
    height: 30px;
    border:2px solid rgb(141,141,141);
    background-color: white;
    border-radius: 2rem;
    font-family: 'GmarketSansMedium';
    /* margin-right: 10%; */
  }
  </style>
  