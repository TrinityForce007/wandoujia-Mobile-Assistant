<template>
  <div class="register">
    <div class="register-box" v-bind:style='{height:bbb}'>
      <img src="../assets/img-software/home.jpg" alt="" id="home-bg" v-bind:style='{width:aaa,height:bbb}'>
      <div class="register-warp">
        <div class="title-bar">
          <span>注册豌豆荚用户</span>
        </div>
        <div>
          <i class="icon-user"></i>
          <input type="text" v-model="username" placeholder="请输入要注册的手机号">
          <i class="icon-lock"></i>
          <input type="password" v-model="password" placeholder="请输入密码">
          <i class="icon-user"></i>
          <input type="text" v-model="nickname" placeholder="设定一个昵称">
          <select class="form-control" v-model="sex">
            <option>男</option>
            <option>女</option>
          </select>
          <button @click="submit">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/css/register.css'
  export default {
    name: "register",
    data() {
      return {
        username:'',
        password:'',
        nickname:'',
        sex:''
      }
    },
    methods:{
      submit:function () {
        var self=this;
        this.$http.post('/api/register', {
          username:this.username,
          password:this.password,
          sex:this.sex,
          nickname:this.nickname,
        }).then(function (response) {
          self.$router.push({path:'/login?redirect=register'})
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    computed: {
      aaa: function () {
        return window.screen.availWidth + "px";
      },
      bbb: function () {
        return +window.screen.availHeight - 100 + "px";
      }
    }
  }
</script>

<style scoped>

</style>
