<template>
  <div class="music">
    <h1>music</h1>
  </div>
</template>

<script>
  export default {
    name: "Music",
    data() {
      return {}
    },
    created() {
      this.get_film_hot()
    },
    methods: {
      get_film_hot: function () {
        const self = this;
        this.$http.get('/baidu/?_t=1468380543284&format=json',
          {
            params:{
              size:'20',
              type:'2',
              method:'baidu.ting.billboard.billList',
            }
          }).then(function (response) {
          console.log(response);
          console.log(response.data.song_list)
        }).catch(function (error) {
          console.log(error);
        })

      },
    }
  }
</script>

<style scoped>

</style>
