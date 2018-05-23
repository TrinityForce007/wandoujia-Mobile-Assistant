<template>
  <div class="home">
    <div class="home-box" v-bind:style='{height:bbb}'>
      <img src="../assets/img-software/home.jpg" alt="" id="home-bg" v-bind:style='{width:aaa,height:bbb}'>
      <div class="home-title">
        <h1>大千世界 尽在豌豆荚</h1>
        <p>应用、音乐、电影、壁纸、图书，一站全搞定</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Home",
    data() {
      return {}
    },
    computed: {
      aaa: function () {
        return window.screen.availWidth + "px";
      }, bbb: function () {
        return +window.screen.availHeight - 100 + "px";
      }
    }
  }
</script>

<style scoped>
  .home-box {
    position: relative;
    overflow: hidden;
  }

  .home-box img {
    position: absolute;
    z-index: -1;
  }

  .home-title {
    width: 100%;
    height: 150px;
    text-align: center;
  }

  .home-box .home-title {
    position: absolute;
    color: white;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  .home-title h1 {
    font-size: 50px;
  }
</style>
