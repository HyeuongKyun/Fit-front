<template>
  <div id="app">
    <div id="body-contents">
      <header-nav></header-nav>
      <router-view />
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
import FooterNav from "@/components/common/FooterNav.vue";
export default {
  components: {
    HeaderNav,
    FooterNav,
  },
};
</script>

<style scoped>

body{
  margin: 0px;
}

#app{
  min-height: 100%;
  position: relative;
}

#body-contents{
  margin: 0px;
  padding-bottom: 240px;
  text-align: center;
  /* margin-left:0px; */
}

footer-nav{
  width: 100%;
  height: 240px;
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>
