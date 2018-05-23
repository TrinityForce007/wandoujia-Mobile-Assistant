<template>
  <div class="header">
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand hover-green" to="/">豌豆荚</router-link>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <router-link to="/software" class="hover-green">
                  <i class="icon-tablet"></i>
                  <span>找应用</span>
                </router-link>
              </li>
              <li>
                <router-link to="/game" class="hover-green">
                  <i class="icon-group"></i>
                  <span>玩游戏</span>
                </router-link>
              </li>
              <li>
                <router-link to="/wallpaper" class="hover-green">
                  <i class="icon-picture"></i>
                  <span>找壁纸</span>
                </router-link>
              </li>
              <li>
                <router-link to="/music" class="hover-green">
                  <i class="icon-music"></i>
                  <span>找音乐</span>
                </router-link>
              </li>
              <li>
                <router-link to="/film" class="hover-green">
                  <i class="icon-camera-retro"></i>
                  <span>找电影</span>
                </router-link>
              </li>
              <li>
                <router-link to="forum" class="hover-green">
                  <i class="icon-comment-alt"></i>
                  <span>论坛</span>
                </router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right" v-if="nick==='' && nickname===''">
              <li class="nav-login navbar-right">
                <a class="hover-green" @click="login">
                  <span>登录</span>
                </a>
              </li>
              <li class="nav nav-register navbar-right">
                <router-link to="register" class="hover-green">
                  <span>注册</span>
                </router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right" v-else>
              <li class="nav navbar-right nav-nickname" v-if="nick!==''">
                <a>
                  <span>{{nick}}</span>
                  <span @click="loginOut">退出登录</span>
                </a>
              </li>
              <li class="nav navbar-right nav-nickname" v-else>
                <a>
                  <span>{{nickname}}</span>
                  <span @click="loginOut">退出登录</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import '../assets/css/Common.css'

  export default {
    name: "CommonHead",
    data() {
      return {
        nickname: '',
      }
    },
    props: ['nick'],
    created() {
      this.loginCheck()
    },
    methods: {
      login: function () {
        var redirect = window.location.href.replace("http://localhost:8080/#/", '');
        this.$router.push({
          path: '/login',
          query: {redirect: redirect}
        });
      },
      //每次刷新页面都验证是否登录
      loginCheck: function () {
        this.nick = '';
        this.username = '';
        if (document.cookie.indexOf('username') < 0) {
          //  没有用户登录
        } else {
          // 有用户登录
          var self = this;
          this.$http.post('/api/login', {
            username: document.cookie.split(";")[0].split("=")[1],
            password: document.cookie.split(";")[1].split("=")[1]
          }).then(function (response) {
            if (response.data === 'login-failed') {
              //如果验证失败，跳转到登录界面
              // 验证失败;
              self.$router.push({path: '/login?redirect=register'})
            } else {
              //登录成功,将昵称复制给nickname 页面如果
              // 验证成功
              self.nickname = response.data[0].nickname;
            }
          }).catch(function (error) {
            console.log(error)
          })
        }
      },
      loginOut: function () {
        //删除cookie
        document.cookie = 'username' + '=;  expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'password' + '=;  expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'nickname' + '=;  expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        this.loginCheck()
      }
    }
  }
</script>

<style scoped>
  /*.container{*/
  /*width: 1200px !important;*/
  /*border: 1px solid #d1d1d1;*/
  /*border-top: none;*/
  /*}*/
</style>
