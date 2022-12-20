<template>
    <div class="container">
        <div class="field">
            <label id="id-lab" for="id">아이디</label>
            <input type="text" class="textInp" id="id" name="id" v-model="id" placeholder="아이디를 입력하세요."/>
        </div>
        <div class="field"> 
            <label id="pw-lab" for="pw">비밀번호</label>
            <input @keyup.enter="login" type="password" class="textInp" id="pw" name="pw" v-model="pw" placeholder="비밀번호를 입력하세요."/> 
        </div>
        <div>{{msg}}</div>
        <div id="btn-container">
            <div id="forRight">
                <!-- <input id="firstLog" class="btn" type="button" value="로그인"/> -->
                <input @click="login" id="secondLog" class="btn" type="button" value="로그인"/>
                <router-link :to="`/MembershipRegist`"><input class="btn" type="button" value="회원가입"/></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import {login} from "@/api/user";
export default {
    name:'LoginPage',
    data() {
        return{
            id:"",
            pw:"",
            msg:"",
        }
    },
    computed:{
        ...mapState(["forRegistLogId","forRegistLogPW"])
    },
    methods:{
        login(){
            const user={
                id:this.id,
                password:this.pw
            }
            this.$store.dispatch('login',user)
            // try{
                
            //     // const user=await login(this.id, this.pw)
            //     // this.$store.commit('USER_LOGIN', user.data)
            //     // this.$router.push({name:'home'})
            // }catch(err){
            //     this.msg=err.response.data.msg
            // }
        },
    },
    created(){
        this.id = this.forRegistLogId;
        this.pw = this.forRegistLogPW;
    }
}
</script>

<style scoped>
  @font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.container{
    margin: 130px 0px;
    font-family: "GmarketSansMedium";
}

/* input 태그들 */

.field{
    font-family: "GmarketSansMedium";
    padding: 10px;
}

.textInp {
font-family: "GmarketSansMedium";
  width: 300px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
}

#id-lab{
    font-family: "GmarketSansMedium",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-right: 30px;
    font-weight: 600;
}
#pw-lab{
    font-family: "GmarketSansMedium";
    margin-right: 17px;
    font-weight: 600;
}

/* 버튼 태그 관리 */

/* .textInp {
  width: 300px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
} */
.btn{
    font-weight: 600;
    margin: 20px;
    border-radius: 15px;
    width: 90px;
    height: 30px;
    font-family: "GmarketSansMedium";
    /* background-color: rgb(233, 233, 233); */
}
.btn:hover{
    border: 0;
    color: darkgrey;
    cursor: pointer;
    font-family: "GmarketSansMedium";
}
#btn-container{
    width: 420px;
    display: inline-block;
    justify-content: flex-end;
    font-family: "GmarketSansMedium";
}
#forRight{
    font-family: "GmarketSansMedium";
    display: flex;
    justify-content: flex-end;
}
#firstLog{
    font-family: "GmarketSansMedium";
    display: none;
}

</style>