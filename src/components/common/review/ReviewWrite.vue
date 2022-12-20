<template>
    <div class="total">
      <h3 class="rw_write">리뷰 등록</h3>
      <div class="fieldset-container">
        <fieldset class="md-fieldset">
          <div class="md-title">
            <div  for="title">제목</div>
            <input class="md_texts_title" type="text" id="title" v-model="title" /><br />
            <input type="text" id="writer" v-model="user.id" hidden /><br />
          </div>

          <textarea class="rw_texts_cont" id="content" cols="30" rows="10" v-model="content"></textarea>
          <div class="btns">
            <input id="submit" @click="writeReviews" readonly value="등록" class="submit_btn"/>
          </div>
        </fieldset>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'ReviewWrite',
    data() {
      return {
        videoId:0,
        title: '',
        userId: '',
        content: '',
      };
    },
    methods:{
      writeReviews() {
        console.log(111);
        console.log(this.title.trim());
        console.log(111);
        if(!this.title.trim()){
          alert('상현님 제목을 쓰셔야합니다.');
          return;
        }
        const pathName = new URL(document.location).pathname.split('/');
        const videoId = pathName[pathName.length - 1];
        this.part=pathName[pathName.length-3]
        let review = {
          videoId: this.videoId,
          title: this.title,
          userId: this.user.id,
          content: this.content,
          part:this.part
        };

        review.videoId=videoId;
        this.$store.dispatch('writeReviews', review);
      },
    },
    computed: {
      ...mapState(['video', 'reviews','user']),
      checkLogin(){
        return this.$store.getters.isLogin;
      }
    },
  };
  </script>
  
  <style>
  @font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
  .total{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin:  10px;
    width: 100%;
   
  }
  .fieldset-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
  }
  .fieldset{

    border: 2px #a39485 solid;
    font-size: .9em;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    width: 90%;
    border-collapse: collapse;
    border-radius: 5px;
  }
  .rw_write{
    margin-bottom: 10px;
  }
  .btns{
    display: flex;
    justify-content: center;
  }
  .rw_texts_title{
    width:40%;
    border: 2px #a39485 solid;
    border-radius: 2rem;
    padding-left: 10px;
    font-family: 'GmarketSansMedium';
  }
  .rw_texts_cont{
    width: 70%;
    margin-bottom: 10px;
    border: 2px #a39485 solid;
    border-radius: 2rem;
    margin-bottom: 0px;
    padding-left: 15px;
    padding-top:5px;
    font-family: 'GmarketSansMedium';
    margin-bottom: 0px;
    
  }
  .submit_btn{
    display: block;
    text-align: center;
    width:100px;
    height: 30px;
    border:2px solid rgb(141,141,141);
    background-color: white;
    border-radius: 2rem;
    font-family: 'GmarketSansMedium';
  }
  .r_texts_title{
    border:2px solid rgb(141,141,141);
    background-color: white;
    border-radius: 2rem;
  }
  .r_texts_cont{
    border:2px solid rgb(141,141,141);
    background-color: white;
    border-radius: 2rem;
    width: 300px;
    height:150px;
  }
  #submit{
    cursor: pointer;
  }
  #submit:hover{
    background-color: rgba(184, 176, 176, 0.596);
  }
  
  </style>
  