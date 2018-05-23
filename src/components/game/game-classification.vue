<template>
  <div class="gameClassification">
    <div class="container">
      <div class="col-md-2 col-box col">
        <div class="title-bar">
          <span>分类列表</span>
        </div>
        <ul class="software-classification2">
          <li @click="selectLabel($event)" data-name="allGame">
            <i class="icon-th-large"></i>
            <a href="###">全部游戏</a>
          </li>
          <li @click="selectLabel($event)" data-name="o">
            <i class="icon-music"></i>
            <a href="###">休闲益智</a>
          </li>
          <li @click="selectLabel($event)" data-name="p">
            <i class="icon-rss"></i>
            <a href="###">跑酷竞速</a>
          </li>
          <li @click="selectLabel($event)" data-name="q">
            <i class="icon-comments"></i>
            <a href="###">扑克棋牌</a>
          </li>
          <li @click="selectLabel($event)" data-name="r">
            <i class="icon-asterisk"></i>
            <a href="###">动作冒险</a>
          </li>
          <li @click="selectLabel($event)" data-name="s">
            <i class="icon-book"></i>
            <a href="###">飞行射击</a>
          </li>
          <li @click="selectLabel($event)" data-name="t">
            <i class="icon-camera"></i>
            <a href="###">经营策略</a>
          </li>
          <li @click="selectLabel($event)" data-name="u">
            <i class="icon-pencil"></i>
            <a href="###">网络游戏</a>
          </li>
          <li @click="selectLabel($event)" data-name="v">
            <i class="icon-shopping-cart"></i>
            <a href="###">体育竞技</a>
          </li>
          <li @click="selectLabel($event)" data-name="w">
            <i class="icon-money"></i>
            <a href="###">角色扮演</a>
          </li>
          <li @click="selectLabel($event)" data-name="x">
            <i class="icon-play-circle"></i>
            <a href="###">辅助工具</a>
          </li>
        </ul>
      </div>
      <div class="col-md-10">
        <div class="classification-right-top col-box">
          <ul class="list-inline software-classification3">
            <li v-for="classificationList in classificationLists">
              <span @click="selectList2(classificationList.id)">{{classificationList.name}}</span>
            </li>
          </ul>
        </div>
        <div class="classification-right-bottom col-box">
          <div class="title-bar">
            <span>最热</span>
            <span>最新</span>
          </div>
          <ul>
            <li v-for="applist in appLists" :key="applist.id">
              <router-link :to="{path:'/game-detail',query:{id:applist.id}}">
                <img :src="'/static/img2/'+applist.name+'.png'" alt="">
              </router-link>

              <div>
                <span class="app-name">{{applist.name}}</span><br>
                <span>{{applist.downloadNo}}次下载安装</span>
                <br>
                <button @click="downLoadNoPlus(applist.id)">安装</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/software.css'
  import '../../assets/css/game.css'
  export default {
    name: "game-classification",
    data() {
      return {
        classification: this.$route.query.classification,
        classificationLists: '',
        appLists: '',
        appListsImg: ''
      }
    },
    created() {
      this.selectLabel();
    },
    methods: {
      selectLabel: function (e) {
        var self = this;
        this.loading = true;
        var classification = '';
        if (e) {
          var i = e.currentTarget.dataset.name;
          if (i === "allGame") {
            this.classificationLists = '';
            classification = e.currentTarget.dataset.name;
          } else {
            classification = e.currentTarget.dataset.name;
          }
        } else {
          classification = this.classification;
        }
        //改变顶部标签的值
        this.$http.get('/api/selectLabel', {
          params: {
            classification: classification,
          }
        }).then(function (response) {
          self.classificationLists = response.data;
        }).catch(function (error) {
          console.log(error);
        })

        //查询游戏列表
        this.$http.get('/api/select11', {
          params: {
            label: classification + 1
          }
        }).then(function (response) {
          self.appLists = response.data;
          console.log(self.appLists)
        }).catch(function (error) {
          console.log(error)
        })
      },

      //点击标签查询应用列表
      selectList2: function (label) {
        this.$http.get('/api/selectList', {
          params: {
            label: label
          }
        }).then(function (response) {
          self.appLists = response.data;
          console.log(appLists);
          console.log(response)
        }).catch(function (error) {
          console.log(error)
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
    }
  }
</script>

<style scoped>

</style>
