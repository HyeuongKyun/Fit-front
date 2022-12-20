import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeVideo from '../views/HomeVideo.vue'
import UpperBody from '@/components/common/video/UpperBody'
import TheDiet from '@/components/common/video/TheDiet'
import TheEquipment from '@/components/common/video/TheEquipment'
import TheHome from '../views/TheHome.vue'
import VideoView from '../views/VideoView.vue'
import VideoDetail from '../components/common/video/VideoDetail.vue'
// import VideoMain from '../components/common/video/VideoMain'
import ReviewView from '../views/ReviewView'
import ReviewWrite from '../components/common/review/ReviewWrite'
import ReviewDetail from '../components/common/review/ReviewDetail'
import LoginPage from '../views/LoginPage.vue'
import MembershipRegist from '../views/MembershipRegist.vue'
import ReviewList from '@/components/common/review/ReviewList.vue'
import ReviewModify from '@/components/common/review/ReviewModify.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    component: TheHome,
  },
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/membershipregist',
    name: 'MembershipRegist',
    component: MembershipRegist,
  },

  {
    path: '/homevideo',
    name:'HomeVideo',
    component:HomeVideo,
    children:[
      {
        path: ':part',
        name: 'UpperBody',
        component: UpperBody,
        
      },
      {
        path: 'reviewlist/:part/:videoId',
        name: 'ReviewList',
        component: ReviewList,
      },
      {
        path:'reviewlist/:part/detail/:reviewId',
        name:'ReviewDetail',
        component:ReviewDetail
      },
      {
        path:'/update/:part/:reviewId',
        name:'ReviewModify',
        component:ReviewModify,
      },
      {
        path:'reviewlist/:part/write/:videoId',
        name:'ReviewWrite',
        component:ReviewWrite
      },
      {
        path:'upperbody',
        name:'UpperBody',
        component:UpperBody,
      },
      {
        path:'thediet',
        name:'TheDiet',
        compnent:TheDiet,
      },
      {
        path:'theequipment',
        name:'TheEquipment',
        compnent:TheEquipment,
      },
    ]
  },
  {
    path:'/review',
    component:ReviewView,
    name:'ReviewView',
    children:[
      

    ]
  },
  {
    path: '/board',
    component:VideoView,
    name:'VideoView',
    children: [
      {
        path: ':videoId',
        name: 'VideoDetail',
        component: VideoDetail
      },

    ]
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
