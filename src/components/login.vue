<template>
  <div class="login">
    <div class="login-box" v-bind:style='{height:bbb}'>
      <img src="../assets/img-software/home.jpg" alt="" id="home-bg" v-bind:style='{width:aaa,height:bbb}'>
      <div class="login-warp">
        <div class="title-bar">
          <span style="font-weight: bold">豌豆荚用户登录</span>
        </div>
        <div>
          <span class="login-password-warn-hide" v-bind:class="{loginPasswordWarn:warn}">用户名或密码输入有误，请重新输入!</span>
          <i class="icon-user"></i>
          <input type="text" v-model="username" class="login-username" placeholder="手机号/用户名/邮箱"><br>
          <i class="icon-lock"></i>
          <input type="password" v-model="password" class="login-password" placeholder="密码"><br>
          <a>
            <span>找回密码?</span>
          </a>
          <router-link to="register">
            <span>注册账号</span>
          </router-link>
          <button @click="login_submit">登录</button>
        </div>
      </div>
      <div class="login-title">
        <h1>大千世界 尽在豌豆荚</h1>
        <p>应用、音乐、电影、壁纸、图书，一站全搞定</p>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/css/login.css'

  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        warn: false,
        nickname: '',
      }
    }, watch: {
      // 监听用户输入的用户名
      username: function (val) {

      },
      //监听用户输入的密码
      password: function (val) {
        // console.log("password",val)

      }
    },
    methods: {
      login_submit: function () {
        var self = this;
        if (this.username === '') {
          console.log("用户名不得为空");
          return
        } else if (this.password === '') {
          console.log("密码不得为空");
          return
        } else {
          this.$http.post('/api/login', {
            username: this.username,
            password: this.password,
          }).then(function (response) {
            if (response.data === 'login-failed') {
              //登录失败
              self.username = '';
              self.password = '';
              self.warn = true;
            } else {
              var redirect = window.location.href.replace("http://localhost:8080/#/login?redirect=", '');
              redirect = redirect.replace('%3Fid%3D', '?id=');
              if (redirect === 'register') {
                redirect = ''
              }
              self.$router.push({path: '/' + redirect});
              document.cookie = 'username=' + response.data[0].username;
              document.cookie = 'password=' + response.data[0].password;
              document.cookie = 'nickname=' + response.data[0].nickname;
              self.nickname = response.data[0].nickname;
              self.setNickname();
            }
          }).catch(function (error) {
            console.log(error)
          })
        }
      },
      setNickname: function () {
        this.$emit('transferNick', Math.random().toString(36).substr(2))
      }
    },
    computed: {
      aaa: function () {
        return window.screen.availWidth + "px";
      }
      ,
      bbb: function () {
        return +window.screen.availHeight - 100 + "px";
      }
    }
  }
</script>

<style scoped>

</style>
