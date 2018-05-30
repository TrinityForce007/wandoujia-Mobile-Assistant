<template>
  <div class="software-classification">
    <div class="container">
      <div class="row">
        <!--左-->
        <div class="col-md-2 col-box col">
          <div class="title-bar">
            <span>分类列表</span>
          </div>
          <ul class="software-classification2">
            <li @click="selectLabel($event)" data-name="allApp">
              <i class="icon-th-large"></i>
              <span>全部软件</span>
            </li>
            <li @click="selectLabel($event)" data-name="a">
              <i class="icon-music"></i>
              <a href="###">影音播放</a>
            </li>
            <li @click="selectLabel($event)" data-name="b">
              <i class="icon-rss"></i>
              <a href="###">系统工具</a>
            </li>
            <li @click="selectLabel($event)" data-name="c">
              <i class="icon-comments"></i>
              <a href="###">通讯社交</a>
            </li>
            <li @click="selectLabel($event)" data-name="d">
              <i class="icon-asterisk"></i>
              <a href="###">手机美化</a>
            </li>
            <li @click="selectLabel($event)" data-name="e">
              <i class="icon-book"></i>
              <a href="###">新闻阅读</a>
            </li>
            <li @click="selectLabel($event)" data-name="f">
              <i class="icon-camera"></i>
              <a href="###">摄影摄像</a>
            </li>
            <li @click="selectLabel($event)" data-name="g">
              <i class="icon-pencil"></i>
              <a href="###">考试学习</a>
            </li>
            <li @click="selectLabel($event)" data-name="h">
              <i class="icon-shopping-cart"></i>
              <a href="###">网上购物</a>
            </li>
            <li @click="selectLabel($event)" data-name="i">
              <i class="icon-money"></i>
              <a href="###">金融理财</a>
            </li>
            <li @click="selectLabel($event)" data-name="j">
              <i class="icon-play-circle"></i>
              <a href="###">生活休闲</a>
            </li>
            <li @click="selectLabel($event)" data-name="k">
              <i class="icon-plane"></i>
              <a href="###">旅游出行</a>
            </li>
            <li @click="selectLabel($event)" data-name="l">
              <i class="icon-plus-sign"></i>
              <a href="###">健康运动</a>
            </li>
            <li @click="selectLabel($event)" data-name="m">
              <i class="icon-briefcase"></i>
              <a href="###">办公商务</a>
            </li>
            <li @click="selectLabel($event)" data-name="n">
              <i class="icon-heart"></i>
              <a href="###">育儿亲子</a>
            </li>

          </ul>
        </div>
        <!--右-->
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
                <router-link :to="{path:'/detail',query:{id:applist.id}}">
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
  </div>
</template>

<script>
  import '../../assets/css/software.css'
  import '../../assets/css/game.css'
  export default {
    name: "softwareClassification",
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
          if (i == "allApp") {
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

        //查询应用列表
        this.$http.get('/api/selectList', {
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
        this.$http.get('/api/downloadNoPlus', {
          params: {
            id: id
          }
        }).then(function (response) {
        }).catch(function (error) {
          console.log(error)
        })
      },
    },
    computed: {}
  }
</script>

<style scoped>

</style>
