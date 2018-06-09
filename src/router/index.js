import Vue from 'vue'
import Router from 'vue-router'
// import Home from  '../components/Home'
// import SoftWare from '../components/software/Software'
// import SoftwareDetail from '../components/software/Software-detail'
// import SoftwareClassification from '../components/software/Software-classification'
// import Game from '../components/game/Game'
// import GameClassificaiton from '../components/game/game-classification'
// import GameDetail from '../components/game/game-detail'
import Wallpaper from '../components/wallPaper/Wallpaper'
import Music from '../components/Music'
import Film from '../components/film/Film'
import Forum from '../components/Forum'
import FilmDetail from '../components/film/film-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {//home主界面
      path: '/',
      name: 'Home',
      component: resolve => require(['../components/Home.vue'], resolve)
    },
    {//software页面
      path: '/software',
      name: 'SoftWare',
      component: resolve => require(['../components/software/Software.vue'], resolve)

    }, {//分类列表界面
      path: '/software-classification',
      component: resolve => require(['../components/software/Software-classification.vue'], resolve)
    },
    {//应用详情界面
      path: '/detail',
      name: "SoftwareDetail",
      component: resolve => require(['../components/software/Software-detail.vue'], resolve)

    },
    {//game界面
      path: '/game',
      name: "Game",
      component: resolve => require(['../components/game/Game.vue'], resolve)

    },
    {//game-classification
      path: '/game-classification',
      name: 'gameClassification',
      component: resolve => require(['../components/game/game-classification.vue'], resolve)

    },
    {//game-detail
      path: '/game-detail',
      name: 'gameDetail',
      component: resolve => require(['../components/game/game-detail.vue'], resolve)

    },
    {//wallpaper界面
      path: '/wallpaper',
      name: "Wallpaper",
      component: Wallpaper
    },
    {//music界面
      path: '/music',
      name: "Music",
      component: Music
    },
    {//film界面
      path: '/film',
      name: "Film",
      component: Film
    },
    {
      path:'/film-detail',
      component:FilmDetail
    },
    {//forum界面
      path: '/forum',
      name: "Forum",
      component: Forum
    },
    {
      path:'/login',
      component: resolve => require(['../components/login.vue'], resolve)
    },
    {
      path:'/register',
      component: resolve => require(['../components/register.vue'], resolve)
    }
  ]
})
