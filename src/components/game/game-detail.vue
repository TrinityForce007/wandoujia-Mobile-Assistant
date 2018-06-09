<template>
  <div class="game-detail">
    <div class="container">
      <div class="software-detail-head col-box">
        <img :src="'/static/img2/'+gameDetail.name+'.png'" alt="">
        <div>
          <h1>{{gameDetail.name}}</h1>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <p>下载量{{gameDetail.downloadNo}}/大小：58.52M/版本:6.66</p>
          <i class="icon-exclamation-sign"></i><span>权限：2</span><i class="icon-caret-down"></i><i
          class="icon-ok-circle"></i><span>无广告</span>
        </div>
        <div>
          <img src="../../assets/img-software/qr.png" alt="">
          <button>安全下载</button>
          <button>扫码下载</button>
        </div>
      </div>
      <div class="col col-box">
        <div class="title-bar">
          <span>小编点评：{{gameDetail.introduce}}</span>
        </div>
      </div>
      <div class="software-detail-img col-box">
        <div class="title-bar">
          <span>应用截图</span>
        </div>
        <div>
          <img :src="'/static/img2/'+gameDetail.name+'-1.jpg'" alt="">
          <img :src="'/static/img2/'+gameDetail.name+'-2.jpg'" alt="">
          <img :src="'/static/img2/'+gameDetail.name+'-3.jpg'" alt="">
          <img :src="'/static/img2/'+gameDetail.name+'-4.jpg'" alt="">
        </div>
      </div>
      <div class="software-detail-intr col-box">
        <div class="title-bar">
          <span>应用简介</span>
        </div>
        <div>
          <p>{{gameDetail.detailIntroduce}}</p>
        </div>

      </div>
      <div class="col-box">
        <div class="title-bar">
          <span>用户评论</span>
        </div>
        <ul class="app-detail-comment" v-if="noComment">
          <li v-for="commentlist in commentList">
            <span class="comment-nickname"><i class="icon-user"></i></span>
            <span class="comment-nickname">{{commentlist.nickname}}</span>
            <div class="comment-p">
              <p>
                {{commentlist.content}}
              </p>
            </div>
            <span><i class="icon-time"></i></span>
            <span class="comment-time">{{commentlist.upTime}}</span>
            <span class="comment-approve" @click="updatePro(commentlist.id)">{{commentlist.approve}}&nbsp;<i class="icon-thumbs-up"></i></span>
          </li>
        </ul>
        <div v-else class="noComment">
          <span>暂无评论,快来评论吧</span>
        </div>
        <div class="addComment">
          <div class="addComment-success-hide" v-bind:class="{addCommentSuccess:addCommentSuccess}">
            评论成功
          </div>
          <span>添加评论</span>
          <textarea class="form-control" rows="3" v-model="content" placeholder="这个应用666啊！"></textarea>
          <button type="button" class="btn btn-success" @click="addComment">提交</button>
        </div>
        <nav aria-label="Page navigation" style="text-align: center">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">7</a></li>
            <li><a href="#">8</a></li>
            <li><a href="#">9</a></li>
            <li><a href="#">10</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/software.css'
  import '../../assets/css/game.css'
  import '../../assets/css/Common.css'

  export default {
    name: "game-detail",
    data() {
      return {
        gameDetail: '',
        content: '',
        addCommentSuccess: false,
        noComment: false,
        commentList: ''
      }
    },
    created() {
      this.getAppDetail();
      this.selectComment()
    },
    methods: {
      getAppDetail: function () {
        var self = this;
        var id = this.$route.query.id;
        this.$http.get('/api/select13', {
          params: {
            id: id
          }
        }).then(function (response) {
          var detail = response.data[0];
          self.gameDetail = detail;
          // console.log(self.gameDetail)
        }).catch(function (error) {
          console.log(error)
        })
      },
      //提交评论
      addComment: function () {
        var self = this;
        var username = document.cookie.split(";")[0].split("=")[1];
        var appid = this.gameDetail.id;
        this.$http.post('/api/addComment', {
          username: document.cookie.split(";")[0].split("=")[1],
          appId: self.gameDetail.id,
          content: this.content,
        }).then(function (response) {
          console.log('添加成功', response);
          self.addCommentSuccess = true;
          setTimeout(function () {
            self.addCommentSuccess = false;
            self.selectComment();
          }, 1000);
          self.content = ''
        }).catch(function (err) {
          console.log(err)
        })
      },
      //查找该应用的评论
      selectComment: function () {
        var self = this;
        var id = this.$route.query.id;
        this.$http.post('/api/selectComment', {
          appId: id,
        }).then(function (response) {
          //无评论
          if (response.data.length === 0) {
            //有评论
          } else {
            self.noComment = true;
            self.commentList = response.data;
            console.log(self.commentList);
          }
        }).catch(function (error) {
          console.log(error)
        })
      },
      //更新赞的数量
      updatePro:function (id) {
        console.log(id);
        this.$http.post('./api/updatePro',{
          id:id
        }).then(function (response) {
          console.log(response)
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
  }
</script>

<style scoped>

</style>
