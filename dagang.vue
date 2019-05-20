<template>
  <div id="app">
 <v-nav></v-nav>
     <router-view></router-view>
     <div class="boxx">
       <div class="qqq">
          <ul><li v-for="it in listtt">{{it}}</li></ul>
       </div>
     <div class="dagang_left">
       <p v-html="list_dagang.introduce"></p>
        <p v-html="list_dagang.project"></p>
     </div>

</div>
     <v-yewie></v-yewie>
</div>

</template>
<script>
import Axios from 'axios';
import nav from "../Public.vue";
import yewei from "../yewei.vue";
export default {
  name: 'app',
  data () {
    return {
        msg:"插入的html",
        listtt:[],
        temp_dagang:"",
        list_dagang:[]
    }
    },methods:{


    },components:{
        'v-nav':nav ,
          'v-yewie':yewei
    },mounted() {
       var api='http://www.goodlearn.club/train/index.php/home/api/getCourseById/id/21';
                    this.$http.get(api).then((res)=>{
                        console.log(res);
                         this.temp_dagang = eval("("+res.bodyText+")");
                          console.log(this.temp_dagang);
                          this.list_dagang = this.temp_dagang.course;
                    },function(err){
                            console.log(err);
                            alert("失败");
                    })
    },
}
</script>

<style lang="scss">
.boxx{width: 1899px;}
.dagang_left{width: 1080px;flex:1;margin: auto;}
</style>
