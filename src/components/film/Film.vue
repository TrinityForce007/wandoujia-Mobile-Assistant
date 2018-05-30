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
                  <img v-bind:src="get_imgUrl(hotFilmlist.images.medium)" alt="">
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
              <span>本周票房排行榜</span>
            </div>
            <ul>
              <li v-for="weekRankList in weekRankLists">
                <span>{{weekRankList.rank}}</span>
                <span>{{this.transform_box(weekRankList.box)}}</span>
                <span>{{weekRankList.box}}</span>
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
          </div>
        </div>
        <div class="col-md-3 col">
          <!--新片榜-->
          <div class="row6-right col-box">
            <div class="title-bar">
              <span>新片榜</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row7">
        <div class="col-md-12 col">
          <div class="row7-m col-box">
            <div class="title-bar">
              <span>豆瓣电影TOP200</span>
            </div>
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
        newFilmRank: '',
        top200List: ''
      }
    },
    created() {
      this.get_film_hot();
      this.get_film_coming();
      this.get_ranK_week();
      this.get_rank_new();
      this.get_top200()
    },
    methods: {
      get_film_hot: function () {
        const self = this;
        this.$http.get('/douban/movie/in_theaterss', {
          params: {
            start:0,
            count:10
          }
        }).then(function (response) {
          self.$nextTick(function () {
            self.$el.getElementsByClassName('hot_film_loading')[0].style.display='none';
          });
          self.hotFilmList=response.data.subjects;
          // console.log('加载成功');
        }).catch(function (error) {
          console.log(error);
          self.$nextTick(function () {
            self.$el.getElementsByClassName('hot_film_loading')[0].style.display='none';
            self.$el.getElementsByClassName('hot_film_fail')[0].style.display='block';
          });
        })

      },
      get_film_coming: function () {
        const self = this;


      },
      get_ranK_week: function () {
        const self = this;

        this.$http.get('/douban/movie/us_box', {
          params: {
            start:0,
            count:10
          }
        }).then(function (response) {
          console.log(response);
          self.$nextTick(function () {
            // self.$el.getElementsByClassName('hot_film_loading')[0].style.display='none';
          });
          self.weekRankLists=response.data.subjects;
          console.log(self.weekRankLists);
          // console.log('加载成功');
        }).catch(function (error) {
          console.log(error);
          self.$nextTick(function () {
            // self.$el.getElementsByClassName('hot_film_loading')[0].style.display='none';
            // self.$el.getElementsByClassName('hot_film_fail')[0].style.display='block';
          });
        })


      },
      get_rank_new: function () {
        const self = this;


      },
      get_top200: function () {
        const self = this;
        this.$http.get('/douban/movie/top250', {
          params: {
            start:0,
            count:20
          }
        }).then(function (response) {
          self.top200List=response.data.subjects;
          // console.log(self.top200List);
        }).then(function (error) {

        })

      },
      get_imgUrl:function (url) {
        console.log(url);
        return 'https://images.weserv.nl/?url='+url.substring(7);
      },
      transform_box:function (number) {
        return 1/number;
      }
    }
  }
</script>

<style scoped>

</style>
