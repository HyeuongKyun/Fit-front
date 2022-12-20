import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
// import { part } from 'core-js/core/function'
// import Swal from 'sweetalert2'

Vue.use(Vuex)

const REST_API = `http://localhost:9999/api`

export default new Vuex.Store({
  state: {
    user: {},
    clickCount: 0,
    videos: [],
    video: {},
    reviews: [],
    review: {},
    access_token: null,
    videoClick:[],
    videoClickPart:"",
    videoClickVideoId: "",
    videoClickEngPart:"",
    forRegistLogId:"",
    forRegistLogPW:"",
  },
  getters: {
    // isLogin:(state)=>{
    //   if(state.user.id!=0){
    //     return true
    //   }
    //   return false
    // },
    // checkToken:(state) => {
    //   state.access_token = sessionStorage.getItem("access-token");
    //   if(state.access_token){
    //     return true;
    //   }
    //   return false;
      
    // }

    
  },
  mutations: {
    SET_VIDEO_CLICK_PART(state, payload){
      state.videoClickPart = payload;
    },
    SET_VIDEO_CLICK_VIDEO_ID(state, payload){
      state.videoClickVideoId = payload;
    },
    SET_VIDEO_CLICK_ENG_PART(state, payload){
      state.videoClickEngPart = payload;
    },
    INCREASE_COUNT(state){
      state.clickCount += 1;
    },
    GET_VIDEOS(state, payload) {
      state.videos = payload
    },
    GET_VIDEO(state, payload) {
      state.video = payload
    },
    GET_REVIEWS(state, payload) {
      state.reviews = payload
    },
    GET_REVIEW(state, payload){
      state.review=payload
    },
    UPDATE_REVIEW(state, payload){
      state.review=payload
    },
    USER_LOGIN(state, payload){
      state.user=payload.user
      
      state.access_token=sessionStorage.getItem("access-token");
      console.log(1);
      console.log(state.user);
      console.log(state.access_token);
      console.log(1);
    },
    USER_LOGOUT(state){
      sessionStorage.removeItem("userInf");
      sessionStorage.removeItem("access-token");
      state.user=sessionStorage.getItem("userInf");
      state.access_token=sessionStorage.getItem("access-token");
      // console.log(2);
      // console.log(state.user);
      // console.log(state.access_token);
      // console.log(2);
    },
    LOGIN_STATE(state){
      state.access_token = sessionStorage.getItem("access-token");
      state.user = JSON.parse(sessionStorage.getItem("userInf"));
      console.log(state.user);
    },
    REGISTER_USER(state,payload){
      state.forRegistLogId=payload.id;
      state.forRegistLogPW=payload.password;
    }
  },
  actions: {
    getVideos({ commit }, part) {
      // let params = null
      // if (payload) params = payload

      const API_URL = `${REST_API}/board/part/${part}`
      axios({
        url: API_URL,
        method: 'GET',
        // params
      }).then((res) => {
        // console.log(res)
        commit('GET_VIDEOS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getVideo({ commit }, id) {
      const API_URL = `${REST_API}/board/${id}`
      axios({
        url: API_URL,
        method: 'GET'
      }).then((res) => {
        console.log(res.data)
        commit('GET_VIDEO', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getReviews({ commit }, id) {
      console.log("리뷰 리스트 불러오깅. 여기까진 됐당 "+id)
      const API_URL = `${REST_API}/board/reviews/all/${id}`
      axios({
        url: API_URL,
        method: 'GET',
      }).then((res) => {
        console.log(res)
        commit('GET_REVIEWS', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    getReview({ commit }, id){
      const API_URL=`${REST_API}/board/reviews/one/${id}`
      axios({
        url: API_URL,
        method: 'GET',
      }).then((res) => {
        console.log(res)
        commit('GET_REVIEW', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },    
    writeReviews({commit}, review){
      console.log(review.videoId)
      const API_URL = `${REST_API}/board/video/${review.videoId}`
      commit
      axios({
        url: API_URL,
        method: 'POST',
        params:review
      }).then(() => {
        console.log("스프링으로 전송 완.")
        router.push({name: 'ReviewList', params: {part:review.part, videoId:review.videoId}})
      }).catch((err) => {
        console.log(err)
      })
    },
    modifyReview({commit},review){
      const API_URL = `${REST_API}/board/review`
      console.log("come in~",review)
      // commit
      axios({
        url: API_URL,
        method: 'PUT',
        params:review
      }).then(() => {
        commit('UPDATE_REVIEW', review)
        console.log("수정 리뷰의 비디오 아이디!", review.videoId)
        router.push({name: 'ReviewList', params: {part:review.part, videoId:review.videoId}})

      }).catch((err) => {
        console.log(err)
      })

    },
    deleteReview({commit}, infos){
      const API_URL = `${REST_API}/board/review/${infos[1]}`
      axios({
        url: API_URL,
        method: 'DELETE'
      }).then(()=>{
        console.log(API_URL)
        commit
        router.push({name: 'ReviewList', params:{part:infos[0], videoId:infos[2]}})
      }).catch((err)=> {
        console.log(err)
      })
    },
    registerUser({commit} , user){
      const API_URL = `${REST_API}/user/join`

      axios({
        url: API_URL,
        method: 'POST',
        params:user,
      }).then(() => {
        alert('회원가입 되었습니다.')
        commit('REGISTER_USER',user)
        router.push({name: 'LoginPage'})
      }).catch(() => {
        console.log()
        alert("이미 등록된 아이디입니다.")
      })
    },
    deleteUser({commit}, userId){
      console.log(userId)
      const API_URL=`${REST_API}/user/delete/${userId}`
      axios({
        url: API_URL,
        method: 'DELETE',
        // params:userId,
      }).then(() => {
        // console("hi",userId)
        alert('회원 탈퇴되었습니다.ㅜㅜ')
        commit('USER_LOGOUT')
        router.push({name: 'home'})
      }).catch((err) => {
        console.log(err)
      })
    },
    login({commit}, user){
      const API_URL = `${REST_API}/user/login`
      console.log(user.id)
      console.log(user.password)
      // commit
      // axios.create({})
      axios({
        url: API_URL,
        method: 'POST',
        params:user,
      }).then(res => {
          console.log("스프링으로 전송 완.")
          console.log(res)
          console.log(res.data)
          
          sessionStorage.setItem("access-token",res.data["access-token"])
          sessionStorage.setItem("userInf",JSON.stringify(res.data["user"]))
          commit('USER_LOGIN', res.data)
          router.push({name: 'home'})
      }).catch(err => {
        console.log(err)
        alert('아이디 혹은 비밀번호를 재확인해주세요.')
      })
    },
  },
  modules: {
  }
})
