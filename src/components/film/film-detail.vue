<template>
  <div class="film-detail">
    <div class="container">
      <div class="film-detail-content">
        <div class="film-detail-head col-box ">
          <div class="title-bar">
            <span>{{filmDetail.title}}</span>
          </div>
          <ul>
            <li>
              <img src="../../../static/image.jpg" alt="">
            </li>
            <li>
              <span>导演：</span>
              <span>编剧：</span>
              <span>主演：雷佳音/佟丽娅/张衣/王正佳/</span>
              <span>类型：</span>
              <span>制片国家/地区</span>
              <span>语言：</span>
              <span>上映日期</span>
              <span>片名：</span>
              <span>又名：</span>
            </li>
            <li>
              <div class="film-detail-rate">
                <span></span>
                <span>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star-half"></i>
                </span><br>
                <span>
                  {{filmDetail.ratings_count}}人评分
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="film-detail-intr col-box">
          <div class="title-bar">
            <span>剧情简介</span>
          </div>
          <div>
            <p style="text-indent: 2em">{{filmDetail.summary}}</p>
          </div>
        </div>
        <div class="film-detail-person col-box">
          <div class="title-bar">
            <span>影片主创</span>
          </div>
        </div>
        <div class="film-detail-photo col-box">
          <div class="title-bar">
            <span>剧照</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "film-detail",
    data(){
      return{
        filmDetail:'',
      }
    },
    created(){
      this.get_film_detail();
    },
    methods:{
      get_film_detail: function () {
        const self = this;
        const id = this.$route.query.id;
        const url='/douban/movie/subject/'+id;
        this.$http.get(url, {
        }).then(function (response) {
          self.filmDetail=response.data;
          console.log(self.filmDetail)
        }).catch(function (error) {
          console.log(error);
        })
      },
    }
  }
</script>

<style scoped>

</style>
