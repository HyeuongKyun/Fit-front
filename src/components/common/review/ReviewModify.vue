<template>
    <div>
      <h3 class="rw_modify">리뷰 수정</h3>
      <div class="md-fieldset-container">
        <div class="div-for-field">
          <fieldset class="md-fieldset">
            <div class="md-title">
              <div for="title">제목</div>
              <input class="md_texts_title" type="text" id="title" v-model="review.title" /> <br />
              <input type="text" id="writer" v-model="user.id" hidden /><br />
            </div>

            <textarea class="rw_texts_cont" v-model="review.content" cols="30" rows="10"></textarea>
            <div class="btns">
              <input id="submit" @click="updateReview" readonly value="수정" class="submit_btn"/>
            </div>

          </fieldset>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    name: 'ReviewModify',
    computed: {
      ...mapState(['review','user']),
    },
    created(){
        const pathName = new URL(document.location).pathname.split("/");
        this.engPart=pathName[1];
    },
    methods: {
      updateReview() {
        let updatedReview = {
          reviewId: this.review.reviewId,
          title: this.review.title,
          userId: this.review.userId,
          content: this.review.content,
          videoId:this.review.videoId,
          part:this.engPart
        };
        this.$store.dispatch('modifyReview', updatedReview);
      },
    },
  };
  </script>
  
  <style>
  .md-fieldset-container{
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .md-fieldset{
    border: 2px #a39485 solid;
    font-size: .9em;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    width: 90%;
    border-collapse: collapse;
    border-radius: 5px;
  }
  .md-title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50%;
    margin-bottom: 15px;
    margin-top: 9px;
    /* margin-left: 16%; */
  }
  .md_texts_title{
    width:40%;
    border: 2px #a39485 solid;
    border-radius: 2rem;
    padding-left: 10px;
    font-family: 'GmarketSansMedium';
    margin-left: 20px;
  }
  </style>
