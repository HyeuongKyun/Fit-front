<template>
    <div class="container">
        <div class="field">
            <label id="id-lab" for="id">아이디</label>
            <input autocomplete="off" type="text" class="textInp" id="id" v-model="id" placeholder="아이디를 입력하세요."/>
        </div>
        <div class="field"> 
            <label id="pw-lab" for="password">비밀번호</label>
            <input autocomplete="off" type="password" class="textInp" id="password" v-model="password" placeholder="비밀번호를 입력하세요."/> 
        </div>
        <div class="field"> 
            <label id="pwcheck-lab" for="pwcheck">비밀번호 확인</label>
            <input type="password" class="textInp" id="pwcheck" v-model="pwcheck" placeholder="비밀번호를 확인하세요."/> 
        </div>
        <div class="field"> 
            <label id="name-lab" for="name">닉네임</label>
            <input type="text" class="textInp" id="name" v-model="name" placeholder="닉네임을 입력하세요."/> 
        </div>
        <div class="field"> 
            <label id="email-lab" for="email">이메일</label>
            <input @keyup.enter="registerUser" type="text" class="textInp" id="email" v-model="email" placeholder="이메일을 입력하세요."/> 
        </div>
        <div id="btn-container">
            <div id="forRight">
                <input id="firstLog" @click="registerUser" class="btn" type="button" value="제출"/>
                <input id="secondLog" @click="registerUser" class="btn" type="button" value="제출"/>
                <router-link :to="`/LoginPage`"><input class="btn" type="button" value="로그인"/></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'LoginPage',
    data() {
        return{
            id:"",
            password:"",
            pwcheck:"",
            name:"",
            email:"",
        }
    },
    methods:{
        registerUser(){
            if(!(this.id&&this.password&&this.pwcheck&&this.name&&this.email)){
                this.id='';
                this.password='';
                this.pwcheck='';
                this.name='';
                this.email='';
                alert("정보를 모두 기입해주세요");
                return;
            }            
            

            if(this.password!=this.pwcheck) {
                // this.id='';
                this.password='';
                this.pwcheck='';
                // this.name='';
                // this.email='';
                alert("비밀번호를 다시 확인하세요.");
                return;
            }


            let user = {
                // createdAt:'0',
                id:this.id,
                password:this.password,
                name:this.name,
                email:this.email,
            }
            this.$store.dispatch('registerUser',user)
        },

        // 글자수가 3개 이하일 때

        moveLeft(){
            let bnt1 = document.querySelectorAll(".bnt")[0];
            let bnt2 = document.querySelectorAll(".bnt")[1];
            if(this.password.length<3){
                // alert(12);
                bnt1.setAttribute('id','firstLog');
                bnt2.setAttribute('id','secondLog');
            }
        },
        moveRight(){
            
            let bnt1 = document.querySelectorAll(".bnt")[0];
            let bnt2 = document.querySelectorAll(".bnt")[1];
            bnt1.removeAttribute('id');
            bnt2.removeAttribute('id');
        }
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
    padding: 10px;
    font-family: "GmarketSansMedium";
}

.textInp {
  width: 300px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  font-family: "GmarketSansMedium";
}

#id-lab{
    font-family: "GmarketSansMedium",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-right: 56px;
    font-weight: 600;
}
#pw-lab{
    margin-right: 41px;
    font-weight: 600;
    font-family: "GmarketSansMedium";
}
#pwcheck-lab{
    margin-right: 5px;
    font-weight: 600;
    font-family: "GmarketSansMedium";
}
#name-lab{
    margin-right: 56px;
    font-weight: 600;
    font-family: "GmarketSansMedium";
}
#email-lab{
    margin-right: 56px;
    font-weight: 600;
    font-family: "GmarketSansMedium";
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
    width: 450px;
    display: inline-block;
    justify-content: flex-end;
}
#forRight{
    display: flex;
    justify-content: flex-end;
}
#firstLog{
    display: none;
}

</style>