<template>
  <div class="home">
    <div>
      <router-link :to="`/homevideo/upperbody`" class="imgA" href="">
        <span>Upper-body</span>
        <img id="upper-body" src="@/assets/upper-body.jpg"/>
      </router-link>
      <router-link :to="`/homevideo/lowerbody`" class="imgA" href="">
        <span>Lower-body</span>
        <img id="lower-body" src="@/assets/lower-body.jpg"/>
      </router-link>
    </div>
    <div>
      <!-- <div @click="countAndGo('/homevideo/wholebody')" class="imgA" href="">
        <span>Whole-body</span>
        <img id="whole-doby" src="@/assets/whole-body.jpg"/>
      </div> -->
      <router-link :to="`/homevideo/wholebody`" class="imgA" href="">
        <span>Whole-body</span>
        <img id="whole-doby" src="@/assets/whole-body.jpg"/>
      </router-link>
      <router-link :to="`/homevideo/abdominalmucles`" class="imgA" href="">
        <span id="Abs">Abs</span>
        <img id="abs" src="@/assets/abs.jpg"/>
      </router-link>
    </div>
    <div>
      <a :href="'https://www.rankingdak.com'" class="imgA" target="_blank">
        <span id="Diet">Diet</span>
        <img id="diet" src="@/assets/diet.jpg"/>
      </a>
      <a :href="'https://www.bodyx.co.kr'" class="imgA" target="_blank">
        <span>Equipment</span>
        <img id="equipment" src="@/assets/equipment.jpg"/>
      </a>
    </div>

  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  // name: "HomeVideo",
  // computed: {
  //   ...mapState(["videos"])
  // },
  // created() {
  //   this.$store.dispatch("getVideos");
  // }
  methods: {
    count(){
      this.$store.commit("INCREASE_COUNT")
    },
    countAndGo(path){
      this.$store.commit("INCREASE_COUNT");
      this.$router.push(path);
    }
  }
};
</script>

<style>

img{
  width: 410px;
  height: 540px;
  padding: 10px;
  position : relative;
}

div span{
  display: none;
  position: absolute;
  color: white;
  z-index: 1;
  margin-left: 143px;
  margin-top: 245px;
  font-size: xx-large;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
#Abs {
  margin-left : 206px;
}
#Diet{
  margin-left : 190px;
}

.imgA:hover img{
  filter: brightness(50%);
}
.imgA:hover span{
  display: inline;
}



</style>