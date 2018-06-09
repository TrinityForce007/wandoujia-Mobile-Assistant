<template>
  <div class="film">
    <div class="container">
      <div class="row5">
        <div class="col-md-9 col-r">
          <!--正在热映-->
          <div class="row5-left col-box">
            <div class="title-bar">
              <span>正在热映</span>
            </div>
            <ul class="hot_film_ul">
              <li v-for="hotFilmlist in hotFilmList">
                <div>
                  <router-link :to="{path:'/film-detail',query:{id:hotFilmlist.id}}">
                    <img v-bind:src="get_imgUrl(hotFilmlist.images.medium)" alt="">
                  </router-link>
                  <div>
                    <span class="hot_film_ul_name">{{hotFilmlist.title}}</span>
                    <span>{{hotFilmlist.rating.average}}</span>
                  </div>
                </div>
              </li>
              <div class="hot_film_loading">
                <span>正在请求豆瓣开放api...</span>
              </div>
              <div class="hot_film_fail">
                <span @click="get_film_hot">加载失败，重新加载</span>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col">
          <!--本周票房排行榜-->
          <div class="row5-right col-box">
            <div class="title-bar">
              <span>北美票房排行榜</span>
              <span>{{weekRankLists_date}}/美元</span>
            </div>
            <ul class="us_box">
              <li v-for="(weekRankList,index) in weekRankLists" :key="weekRankList.box">
                <router-link :to="{path:'/film-detail',query:{id:weekRankList.subject.id}}">
                  <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                  <span class="rank-No">{{index+1}}</span>
                  <span>{{weekRankList.subject.title}}</span>
                  <span>{{transform_box(weekRankList.box)}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row6">
        <div class="col-md-9 col-r">
          <!--即将上映-->
          <div class="row6-left col-box">
            <div class="title-bar">
              <span>即将上映</span>
            </div>
            <ul class="hot_film_ul">
              <li v-for="comingFilmlist in ComingFilmList">
                <div>
                  <router-link :to="{path:'/film-detail',query:{id:comingFilmlist.id}}">
                    <img v-bind:src="get_imgUrl(comingFilmlist.images.medium)" alt="">
                  </router-link>
                  <div style="text-align: center">
                    <span class="hot_film_ul_name" style="width: 86%">{{comingFilmlist.title}}</span>
                    <span style="display: none">{{comingFilmlist.rating.average}}</span>
                  </div>
                </div>
              </li>
              <div class="hot_film_loading2">
                <span>正在请求豆瓣开放api...</span>
              </div>
              <div class="hot_film_fail2">
                <span @click="get_film_hot">加载失败，重新加载</span>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col">
          <!--新片榜-->
          <div class="row6-right col-box">
            <div class="title-bar">
              <span>本周口碑榜</span>
            </div>
            <ul class="us_box">
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">1</span>
                <span>燃烧</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">2</span>
                <span>超感猎杀：完美特别篇</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">3</span>
                <span>爱你，西蒙</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">4</span>
                <span>信筏故事</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">5</span>
                <span>派对搭讪秘诀</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">6</span>
                <span>护垫侠</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">7</span>
                <span>无所不能</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">8</span>
                <span>德黑兰禁忌</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">9</span>
                <span>十二冠之心</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">10</span>
                <span>厕所英雄</span>
                <span></span>
              </li>
              <li>
                <span class="glyphicon glyphicon-bookmark rank-icon"></span>
                <span class="rank-No">11</span>
                <span>读书会</span>
                <span></span>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="row7">
        <div class="col-md-12 col">
          <div class="row7-m col-box">
            <div class="title-bar">
              <span>豆瓣电影TOP200</span>
            </div>
            <ul class="hot_film_ul top200">
              <li v-for="top200 in top200List">
                <div>
                  <router-link :to="{path:'/film-detail',query:{id:top200.id}}">
                    <img v-bind:src="get_imgUrl(top200.images.medium)" alt="">
                  </router-link>
                  <div>
                    <span class="hot_film_ul_name">{{top200.title}}</span>
                    <span>{{top200.rating.average}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/film.css'

  export default {
    name: "Film",
    data() {
      return {
        hotFilmList: '',
        ComingFilmList: '',
        weekRankLists: '',
        weekRankLists_date: '',
        top200List: '',
        newFilmRank: '',

      }
    },
    created() {
      this.get_film_hot();
      this.get_film_coming();
      this.get_ranK_us();
      this.get_top200();
      this.get_rank_new();
    },
    methods: {
      get_film_hot: function () {
        const self = this;
        this.$http.get('/douban/movie/in_theaters', {
          params: {
            start: 0,
            count: 10
          }
        }).then(function (response) {
          self.$nextTick(function () {
            self.$el.getElementsByClassName('hot_film_loading')[0].style.display = 'none';
          });
          self.hotFilmList = response.data.subjects;
        }).catch(function (error) {
          console.log(error);
          self.$nextTick(function () {
            self.$el.getElementsByClassName('hot_film_loading')[0].style.display = 'none';
            self.$el.getElementsByClassName('hot_film_fail')[0].style.display = 'block';
          });
        })

      },
      get_film_coming: function () {
        const self = this;
        this.$http.get('/douban/movie/coming_soon', {
          params: {
            start: 0,
            count: 10
          }
        }).then(function (response) {
          self.$nextTick(function () {
            self.$el.getElementsByClassName('hot_film_loading2')[0].style.display = 'none';
          });
          self.ComingFilmList = response.data.subjects;
        }).catch(function (error) {
          console.log(error);
          self.$nextTick(function () {
            self.$el.getElementsByClassName('hot_film_loading2')[0].style.display = 'none';
            self.$el.getElementsByClassName('hot_film_fail2')[0].style.display = 'block';
          });
        })


      },
      get_ranK_us: function () {
        const self = this;
        this.$http.get('/douban/movie/us_box', {
          params: {
            start: 0,
            count: 10
          }
        }).then(function (response) {
          self.$nextTick(function () {
          });
          self.weekRankLists = response.data.subjects;
          self.weekRankLists_date = response.data.date;
          console.log(self.weekRankLists)
        }).catch(function (error) {
          console.log(error);
          self.$nextTick(function () {
          });
        })
      },
      //新片榜
      get_rank_new: function () {
        const self = this;
        this.$http.get('/douban/movie/weekly', {
          // params: {
          //   start: 0,
          //   count: 10
          // }
        }).then(function (response) {
          self.$nextTick(function () {
          });
          self.newFilmRank = response.data.subjects;
          console.log("新片榜", self.newFilmRank);
          // console.log('加载成功');
        }).catch(function (error) {
          console.log(error);
          self.$nextTick(function () {
          });
        })

      },
      get_top200: function () {
        const self = this;
        this.$http.get('/douban/movie/top250', {
          params: {
            start: 0,
            count: 14
          }
        }).then(function (response) {
          self.top200List = response.data.subjects;
        }).then(function (errosr) {

        })

      },
      get_imgUrl: function (url) {
        return 'https://images.weserv.nl/?url=' + url.substring(7);
      },
      transform_box: function (number) {
        let n = Math.round(number / 10000);
        return n + "万";
      }
    }
  }
</script>

<style scoped>

</style>
