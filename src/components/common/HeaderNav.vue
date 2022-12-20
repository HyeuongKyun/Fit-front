<template>
  <header>
    <nav class="container">

      <div class="item">
        <!--메뉴 드롭-->
        <div id="forHover">
          <img id="menu-icon" src="../../assets/menu-icon.png"/>
          <div class="drop_absol">
            <div class="drop_menu">
              <ul>
                <li><router-link to="/homevideo/upperbody">상체</router-link></li>
                <li><router-link to="/homevideo/lowerbody">하체</router-link></li>
                <li><router-link to="/homevideo/wholebody">전신</router-link></li>
                <li><router-link to="/homevideo/abdominalmucles">복부</router-link></li>
                <li><router-link to="/homevideo/thediet">식단</router-link></li>
                <li><router-link to="/homevideo/theequipment">기구</router-link></li>
                <li v-if="access_token==null" class="login_text"><router-link :to="`/LoginPage`">로그인</router-link></li>
                <li v-if="access_token==null"><router-link :to="`/MemberShipRegist`">회원가입</router-link></li>
                <li class="login_text" v-if="access_token!=null">{{user.name}}님, 환영합니다!</li>
                <li v-if="access_token!=null" @click="logout"><router-link :to="`/MemberShipRegist`">로그아웃</router-link></li>
                <li v-if="access_token!=null" @click="quit(user.id)">회원탈퇴</li>
              </ul>
            </div>
          </div>
        </div>
        <!--메뉴 드롭-->
      </div>
      <div class="item"><router-link :to="`/`"><img id="ssafit-logo" src="../../assets/ssafit-logo.png" /></router-link></div>
      <div class="item">
        <img id="search-icon" src="../../assets/search-icon.png" />
        <img id="zzim-icon" src="../../assets/zzim-icon.png" />
      </div>  
    </nav>
    
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name:"headerNav",
  
  computed:{
    ...mapState([
      "user",
      "access_token",
    ])
  },
  methods:{
    logout(){
      alert('로그아웃 되었습니다.')
      this.$store.commit("USER_LOGOUT")
      this.$router.push({name:'home'})
    },
    headerMove(part){
      this.$router.push(`/homevideo/${part}`)
    },
    quit(userId){
      this.$store.dispatch("deleteUser",userId);
    }
  },
  created() {
    console.log(sessionStorage.getItem(("access-token")));
    if(sessionStorage.getItem(("access-token"))){
      this.$store.commit("LOGIN_STATE")
    }
  },
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
*, body{
  margin: 0px;
  padding: 0px;
  font-family: "GmarketSansMedium";
}

/* 메인 Nav */

.container{
  display: flex;
  justify-content: space-between;
  padding: 5px;
  padding-left: 0px;
  padding-bottom: 30px;
}

#menu-icon{
  width: 30px;
  height: 25px;
  padding-top: 8px;
  padding-left: 8px;
}

#ssafit-logo{
  height: 50px;
  width: auto;
  padding-left: 37px;
}

#search-icon{
  width: 28px;
  height: 28px;
}

#search-icon:hover{
  display: none;
}
#zzim-icon{
  padding-left: 10px;
  padding-right: 8px;
  width: 33px;
  height: 33px;
}
#zzim-icon:hover{
  display: none;
}
/* Side Bar */
/* Side Bar */
/* Side Bar */

.drop_absol {
  position: absolute;
  width: 350px;
  height: 920px;
  z-index: 1;
  display: none;
}

#forHover:hover .drop_absol{
  display: block;
}

.drop_menu {
  display: flex;
  width: 200px;
  height: 900px;
  padding: 5px 50px 0 0;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.93);
}
.drop_menu > ul {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 0.83em;
  font-weight: bold;
  padding-left: 13px;
  margin-top: 5px;
  list-style: none;
}
.drop_menu > ul > li {
  cursor: pointer;
  margin-bottom: 20px;
  text-align: left;
}
.drop_menu > ul:first-child {
  margin-top: 15px;
}
.drop_menu > ul > li > a {
  
  text-decoration-line: none;
  color: black;
}
.drop_menu > ul > li > a:hover{
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 100;
}

.login_text{
  margin-top: 480px;
}


</style>
