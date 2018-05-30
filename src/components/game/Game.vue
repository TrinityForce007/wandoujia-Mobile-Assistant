<template>
  <div class="game">
    <div class="container">
      <!--第一部分-->
      <div class="row3 clearfix">
        <div class="col-md-10 col-r">
          <!--豌豆荚设计奖-->
          <div class="row3-top-left col-box">
            <div class="title-bar">
              <span>豌豆荚设计奖</span>
            </div>
            <img src="../../assets/img-game/第五人格-sm.png" alt="">
            <div>
              <h3>第五人格</h3>
              <p>新角色监管者蜘蛛侠正在上架</p>
              <button>下载</button>
            </div>
            <img src="../../assets/img-game/第五人格-lr1.jpg" alt="" class="row3-img2">
            <img src="../../assets/img-game/第五人格-lr2.png" alt="" class="row3-img2">
          </div>
          <div class="col-md-3 padding-none col-box">
            <!--游戏分类-->
            <div class="row3-bottom-left">
              <div class="title-bar">
                <span>游戏分类</span>
                <router-link to="game-classification?classification=allGame">
                  <span>查看全部</span>
                </router-link>
              </div>
              <ul class="game-classification">
                <li>
                  <router-link to="/game-classification?classification=o">
                    <span>休闲益智</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=p">
                    <span>跑酷竞速</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=q">
                    <span>扑克棋牌</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=r">
                    <span>动作冒险</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=s">
                    <span>飞行射击</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=t">
                    <span>经营策略</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=u">
                    <span>网络游戏</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=v">
                    <span>体育竞技</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=w">
                    <span>角色扮演</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/game-classification?classification=x">
                    <span>辅助工具</span>
                  </router-link>
                </li>

              </ul>
            </div>
          </div>
          <div class="col-md-9 col-l">
            <!--游戏推荐-->
            <div class="row3-bottom-m col-box">
              <div class="title-bar">
                <span>游戏推荐</span>
              </div>
              <ul class="m-sort">
                <li v-for="gameList2 in gameLists2">
                  <router-link :to="{path:'/game-detail',query:{id:gameList2.id}}">
                    <img :src="'/static/img2/'+gameList2.name+'.png'" alt="">
                  </router-link>
                  <p class="gamelist-name">{{gameList2.name}}</p>
                  <button @click="downLoadNoPlus(gameList2.id)">下载</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2 padding-none col-box">
          <!--游戏下载排行榜-->
          <div class="row3-right">
            <div class="title-bar">
              <span>游戏下载排行榜</span>
            </div>
            <ul class="dailyDownloadRank">
              <li v-for="(gameList,index) in gameLists" :key="gameList.id" v-if="index<7">
                <span class="glyphicon glyphicon-bookmark dailyDownloadRank-icon"></span>
                <span class="dailyDownloadRank-No">{{index+1}}</span>
                <router-link :to="{path:'/game-detail',query:{id:gameList.id}}">
                  <img :src="'/static/img2/'+gameList.name+'.png'" alt="">
                </router-link>
                <div>
                  <h5 style="white-space: nowrap">{{gameList.name}}</h5>
                  <span>{{gameList.downloadNo}}下载</span>
                </div>
                <button @click="downLoadNoPlus(gameList.id)">下载</button>
              </li>
            </ul>
            <div class="title-bar">
              <a href="###">查看全部</a>
            </div>
          </div>
        </div>
      </div>
      <!--第二部分-->
      <div class="row4 clearfix">
        <div class="col-md-2 padding-none">
          <!--新品速递-->
          <div class="col-box row2-left-bottom">
            <div class="title-bar">
              <span>新品速递</span>
            </div>
            <ul>
              <li v-for="(gameList4,index) in gameLists4" v-if="index<4">
                <router-link :to="{path:'/detail',query:{id:gameList4.id}}">
                  <img :src="'/static/img2/'+gameList4.name+'.png'" alt="">
                </router-link>
                <div>
                  <h5>{{gameList4.name}}</h5>
                  <span>{{gameList4.downloadNo}}下载</span>
                </div>
                <button @click="downLoadNoPlus(gameList4ss.id)">下载</button>
              </li>
            </ul>
          </div>
          <!--厂商大作-->
          <div class="row4-bottom-left padding-none col-box">
            <div class="title-bar">
              <span>厂商大作</span>
            </div>
            <ul>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
              <li>
                <router-link to="/vendor?vendor="><span>厂商大作</span></router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8 col-m">
          <!--热门游戏-->
          <div class="row4-top-m col-box">
            <div class="title-bar">
              <span>热门游戏</span>
            </div>
            <ul class="m-sort">
              <li v-for="gameList in gameLists">
                <router-link :to="{path:'/game-detail',query:{id:gameList.id}}">
                  <img :src="'/static/img2/'+gameList.name+'.png'" alt="">
                </router-link>
                <p class="gamelist-name">{{gameList.name}}</p>
                <button @click="downLoadNoPlus(gameList.id)">下载</button>
              </li>
            </ul>
          </div>
          <!--热门专题-->
          <div class="row4-bottom col-r col-box">
            <div class="title-bar">
              <span>热门专题</span>
            </div>
          </div>
          <div>
            <div>
              <h5>赶走春困的提神游戏</h5>
            </div>
            <div>
              <p>模拟真实的钓鱼体验</p>
            </div>
            <div>
              <h5>googlePlay热门新游</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 padding-none">
          <!--网游排行/单机排行-->
          <div class="row4-right  col-box">
            <div class="title-bar">
              <span @click="get_dowmload_rank('1')">网游排行</span>
              <span @click="get_dowmload_rank('0')">单机排行</span>
            </div>
            <ul class="dailyDownloadRank">
              <li v-for="(gameList3,index) in gameLists3" :key="gameList3.id" v-if="index<9">
                <span class="glyphicon glyphicon-bookmark dailyDownloadRank-icon"></span>
                <span class="dailyDownloadRank-No">{{index+1}}</span>
                <router-link :to="{path:'/game-detail',query:{id:gameList3.id}}">
                  <img :src="'/static/img2/'+gameList3.name+'.png'" alt="">
                </router-link>
                <div>
                  <h5 style="white-space: nowrap">{{gameList3.name}}</h5>
                  <span>{{gameList3.downloadNo}}下载</span>
                </div>
                <button @click="downLoadNoPlus(gameList3.id)">下载</button>
              </li>
            </ul>
            <div class="title-bar" style="border-bottom: none">
              <a href="###">查看全部</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/game.css'
  import '../../assets/css/software.css'

  export default {
    name: "Game",
    data() {
      return {
        gameLists: '',
        gameLists2: '',
        gameLists3: '',
        gameLists4: '',
      }
    }, created() {
      this.get_popular_game();//游戏下载排行榜/热门游戏
      this.get_recommend_game();//推荐游戏
      this.get_dowmload_rank();//网游/单机下载排行榜
      this.get_new_game();//新品速递
    },
    methods: {
      //游戏下载排行/热门游戏
      get_popular_game: function () {
        const self = this;
        this.$http.get('/api/select14', {
          params: {}
        }).then(function (response) {
          self.gameLists = response.data;
        }).catch(function (error) {
          console.log(error);
        })
      },
      get_recommend_game: function () {
        const self = this;
        this.$http.get('/api/select15', {
          params: {}
        }).then(function (response) {
          self.gameLists2 = response.data;
        }).catch(function (error) {
          console.log(error);
        })
      },
      get_dowmload_rank: function (ol) {
        let params = '';
        const self = this;
        if (ol) {
          params = ol;
        } else {
          params = "1";
        }
        this.$http.get('/api/select16', {
          params: {
            ol: params
          }
        }).then(function (response) {
          self.gameLists3 = response.data;
        }).catch(function (error) {
          console.log(error);
        })
      },
      //点击下载，应用的下载数量+1
      downLoadNoPlus: function (id) {
        this.$http.get('/api/downloadNoPlus1', {
          params: {
            id: id
          }
        }).then(function (response) {
        }).catch(function (error) {
          console.log(error)
        })
      },
      //新品速递
      get_new_game: function (id) {
        const self = this;
        this.$http.get('/api/select20', {
          params: {}
        }).then(function (response) {
          self.gameLists4 = response.data;
        }).catch(function (error) {
          console.log(error)
        })
      },
    }
  }
</script>

<style scoped>

</style>
