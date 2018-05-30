<template>
  <div class="software">
    <div class="container">
      <!--第一部分-->
      <div class="row row1">
        <!--左-->
        <div class="col-md-2 col">
          <!--左上-->
          <div class="row1-col-l-1 col-box">
            <div class="row1-top-left">
              <div class="title-bar">
                <span>今日推荐</span>
                <a href="###">换一个</a>
              </div>
              <div class="dailyRecommendation">
                <router-link :to="{path:'/detail',query:{id:appLists3.id}}">
                  <img :src="'/static/img2/'+appLists3.name+'.png'" alt="">
                </router-link>
                <p class="text-nowrap" style="color: black;">{{appLists3.name}}</p>
                <p class="text-nowrap" style="color: grey;">{{appLists3.introduce}}</p>
                <button @click="downLoadNoPlus(appLists3.id)">下载</button>
              </div>
            </div>
          </div>
          <!--左下-->
          <div class="row1-col-l-2 col-box">
            <div class="title-bar">
              <span>应用分类</span>
              <router-link to="software-classification?classification=allApp">
                <span>查看全部</span>
              </router-link>
            </div>
            <ul class="software-classification">
              <li>
                <router-link to="/software-classification?classification=a">
                  <i class="icon-music"></i>
                  <span>影音播放</span>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=b">
                  <i class="icon-rss"></i>
                  <a href="###">系统工具</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=c">
                  <i class="icon-comments"></i>
                  <a href="###">通讯社交</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=d">
                  <i class="icon-asterisk"></i>
                  <a href="###">手机美化</a>
                </router-link>

              </li>
              <li>
                <router-link to="/software-classification?classification=e">
                  <i class="icon-book"></i>
                  <a href="###">新闻阅读</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=f">
                  <i class="icon-camera"></i>
                  <a href="###">摄影摄像</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=g">
                  <i class="icon-pencil"></i>
                  <a href="###">考试学习</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=h">

                  <i class="icon-shopping-cart"></i>
                  <a href="###">网上购物</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=i">

                  <i class="icon-money"></i>
                  <a href="###">金融理财</a>
                </router-link>
              </li>
              <li>
                <router-link to="/software-classification?classification=j">
                  <i class="icon-briefcase"></i>
                  <a href="###">生活休闲</a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!--中-->
        <div class="col-md-8 col col-m">
          <!--中上-->
          <div class="row1-col-m-1 col-box">
            <div id="myCarousel" class="carousel slide">
              <!-- 轮播（Carousel）指标 -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
              </ol>
              <!-- 轮播（Carousel）项目 -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="../../assets/img-software/app-轮播图1.jpg" alt="First slide" class="">
                </div>
                <div class="item">
                  <img src="../../assets/img-software/app-轮播图2.jpg" alt="Second slide">
                </div>
                <div class="item">
                  <img src="../../assets/img-software/app-轮播图3.jpg" alt="Third slide">
                </div>
                <div class="item">
                  <img src="../../assets/img-software/app-轮播图4.jpg" alt="Third slide">
                </div>
                <div class="item">
                  <img src="../../assets/img-software/app-轮播图5.jpg" alt="Third slide">
                </div>
                <div class="item">
                  <img src="../../assets/img-software/app-轮播图6.jpg" alt="Third slide">
                </div>
              </div>
              <!-- 轮播（Carousel）导航 -->
              <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <!--中下-->
          <div class="row1-col-m-2 col-box">
            <div class="title-bar">
              <span>优秀新软件</span>
            </div>
            <ul class="newSoftware">
              <li v-for="appList2 in appLists2">
                <router-link :to="{path:'/detail',query:{id:appList2.id}}">
                  <img :src="'/static/img2/'+appList2.name+'.png'" alt="">
                </router-link>
                <p>{{appList2.name}}</p>
                <button @click="downLoadNoPlus(appList2.id)">下载</button>
              </li>
            </ul>
          </div>
        </div>
        <!--右-->
        <div class="col-md-2 col col-box">
          <div class="title-bar">
            <span>应用下载排行</span>
          </div>
          <ul class="dailyDownloadRank">
            <li v-for="(appList1,index) in appLists1" :key="appLists1.id">
              <span class="glyphicon glyphicon-bookmark dailyDownloadRank-icon"></span>
              <span class="dailyDownloadRank-No">{{index+1}}</span>
              <router-link :to="{path:'/detail',query:{id:appList1.id}}">
                <img :src="'/static/img2/'+appList1.name+'.png'" alt="">
              </router-link>
              <div>
                <h5 style="white-space: nowrap">{{appList1.name}}</h5>
                <span>{{appList1.downloadNo}}下载</span>
              </div>
              <button @click="downLoadNoPlus(appList1.id)">下载</button>
            </li>
          </ul>
          <div class="title-bar">
            <a href="###">查看全部</a>
          </div>
        </div>
      </div>
      <!--第二部分-->
      <div class="row row2">
        <!--左-->
        <div class="col-md-2 col">
          <!--左上-->
          <div class="row2-left-top col-box">
            <div class="title-bar">
              <span>热门标签</span>
            </div>
            <ul class="popularTags">
              <li>
                <button>视频</button>
              </li>
              <li>
                <button>浏览器</button>
              </li>
              <li>
                <button>聊天</button>
              </li>
              <li>
                <button>壁纸</button>
              </li>
              <li>
                <button>漫画</button>
              </li>
              <li>
                <button>短视频</button>
              </li>
              <li>
                <button>学习</button>
              </li>
              <li>
                <button>视频</button>
              </li>
              <li>
                <button>育儿</button>
              </li>
              <li>
                <button>商城</button>
              </li>
              <li>
                <button>支付</button>
              </li>
              <li>
                <button>股票</button>
              </li>
            </ul>
          </div>
          <!--左下-->
          <div class="row2-left-bottom col-box">
            <div class="title-bar">
              <span>新品速递</span>
            </div>
            <ul>
              <li v-for="(appList2,index) in appLists2" v-if="index<4">
                <router-link :to="{path:'/detail',query:{id:appList2.id}}">
                  <img :src="'/static/img2/'+appList2.name+'.png'" alt="">
                </router-link>
                <div>
                  <h5>{{appList2.name}}</h5>
                  <span>{{appList2.downloadNo}}下载</span>
                </div>
                <button @click="downLoadNoPlus(appList2.id)">下载</button>
              </li>
            </ul>
          </div>
        </div>
        <!--中-->
        <div class="col-md-8 col col-m">
          <!--中上-->
          <div class="row2-m-top col-box">
            <div class="title-bar">
              <span>热门应用</span>
            </div>
            <ul class="newSoftware">
              <li v-for="appList4 in appLists4">
                <router-link :to="{path:'/detail',query:{id:appList4.id}}">
                  <img :src="'/static/img2/'+appList4.name+'.png'" alt="">
                </router-link>
                <p>{{appList4.name}}</p>
                <button @click="downLoadNoPlus(appList4.id)">下载</button>
              </li>
            </ul>
          </div>
          <!--中下-->
          <div class="row2-m-buttom col-box">
            <div class="title-bar">
              <span>编辑推荐</span>
            </div>
            <ul class="newSoftware">
              <li v-for="appList5 in appLists5">
                <router-link :to="{path:'/detail',query:{id:appList5.id}}">
                  <img :src="'/static/img2/'+appList5.name+'.png'" alt="">
                </router-link>
                <p>{{appList5.name}}</p>
                <button @click="downLoadNoPlus(appList5.id)">下载</button>
              </li>
            </ul>
          </div>
        </div>
        <!--右-->
        <div class="col-md-2 col col-box">
          <div class="title-bar">
            <span>本周热门</span>
            <span>上升最快</span>
          </div>
          <ul class="dailyDownloadRank">
            <li v-for="(appList6,index) in appLists6" :key="appLists6.id">
              <span class="glyphicon glyphicon-bookmark dailyDownloadRank-icon"></span>
              <span class="dailyDownloadRank-No">{{index+1}}</span>
              <router-link :to="{path:'/detail',query:{id:appList6.id}}">
                <img :src="'/static/img2/'+appList6.name+'.png'" alt="">
              </router-link>
              <div>
                <h5 style="white-space: nowrap">{{appList6.name}}</h5>
                <span>{{appList6.downloadNo}}下载</span>
              </div>
              <button @click="downLoadNoPlus(appList6.id)">下载</button>
            </li>

          </ul>
          <div class="title-bar" style="border-bottom: none">
            <a href="###">查看全部</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/software.css'

  export default {
    name: "Software",
    data() {
      return {
        appLists1: '',
        appLists2: '',
        appLists3: '',
        appLists4: '',
        appLists5: '',
        appLists6: ''
      }
    },
    created() {
      this.get_polular_download();
      this.get_daily_recommendation();
      this.get_new_software();
      this.get_popular_app();
      this.get_editor_choice();
      this.get_week_download_rank();

    },
    methods: {
      //点击下载，应用的下载数量+1
      downLoadNoPlus: function (id) {
        this.$http.get('/api/downloadNoPlus', {
          params: {
            id: id
          }
        }).then(function (response) {
        }).catch(function (error) {
          console.log(error)
        })
      },
      //热门下载排行榜
      get_polular_download: function () {
        const self = this;
        this.$http.get('/api/select4', {
          params: {}
        }).then(function (res) {
          self.appLists1 = res.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      //优秀新软件
      get_new_software: function () {
        const self = this;
        this.$http.get('/api/select6', {
          params: {}
        }).then(function (res) {
          self.appLists2 = res.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      //更换每日推荐
      get_daily_recommendation: function () {
        const self = this;
        this.$http.get('/api/select5', {
          params: {}
        }).then(function (res) {
          self.appLists3 = res.data[0];
        }).catch(function (err) {
          console.log(err);
        })
      },
      //更换热门应用
      get_popular_app: function () {
        const self = this;
        this.$http.get('/api/select7', {
          params: {}
        }).then(function (res) {
          self.appLists4 = res.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      //更换编辑推荐
      get_editor_choice: function () {
        const self = this;
        this.$http.get('/api/select8', {
          params: {}
        }).then(function (res) {
          self.appLists5 = res.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
      //最近一周下载排行
      get_week_download_rank: function () {
        const self = this;
        this.$http.get('/api/select9', {
          params: {}
        }).then(function (res) {
          self.appLists6 = res.data;
        }).catch(function (err) {
          console.log(err);
        })
      },
    }
  }
</script>

<style scoped>

</style>
