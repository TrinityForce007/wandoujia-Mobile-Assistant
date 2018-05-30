<template>
  <div id="app">
    <commonHead :nick.sync="nickname"></commonHead>
    <transition>
      <router-view @transferNick="getNickname"></router-view>
    </transition>
    <commonFoot></commonFoot>
  </div>
</template>

<script>
  import CommonHead from "./components/Head";
  import CommonFoot from "./components/Foot"

  export default {
    name: 'App',
    data() {
      return {
        nickname: ''
      }
    },
    components: {
      CommonHead,
      CommonFoot
    },
    methods:{
      getNickname:function (msg) {
        this.nickname=msg;
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
