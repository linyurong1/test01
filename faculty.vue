<template>
    <div id="app">
        <v-nav></v-nav>

         <div id="video">

           <img src="../img/shizi.png" alt="">
         </div>
           <div id="box">
            <ul class="ul4" v-for="(itme,key) in list_shizi">
               <li class="ul4_left">
                 <img :src="list_shizi[0].pic">
               </li>
               <li class="ul4_right">
                   <ul>
                       <li class="jianjie">教师职称</li>
                       <li>{{list_shizi[0].title}}</li>
                       <li class="tedian">授课特点</li>
                       <li>{{list_shizi[0].des}}</li>
                   </ul>
               </li>
            </ul>
            <ul class="ul4" v-for="(itme,key) in  list_shizi">

               <li class="ul4_right">
                   <ul>
                       <li class="jianjie">教师职称</li>
                       <li>{{list_shizi[0].title}}</li>
                       <li class="tedian">授课特点</li>
                       <li>{{list_shizi[0].des}}</li>
                   </ul>
               </li>
                <li class="ul4_left">
                 <img :src="list_shizi[0].pic">
               </li>
            </ul>
          </div>
         <v-yewie></v-yewie>
    </div>
</template>
<script>
import nav from "../Public.vue";
import yewei from "../yewei.vue";
export default {
  name: 'app',
  data () {
    return {
            list:[{src:"src/img/shizi2.png",
            jianjie:"移动互联网行业从业10年，专注iOS和Java开发10年,对相关领域有深厚的项目经验，在Python， JavaScript， PHP也有很深入的研究。曾在中国建设银行数据中心任职。熟悉Java项目的技术体系和架构设...",
            tedian:"讲课内容层次分明，竭尽所能地让学员吃透该部分知识点。而且讲课方式非常新颖。在课堂上，经常用提问题的方式引起学员的思考，以达到深刻理解的效果。同时，他还注重拓展一些书本以外的知识点，让大家灵活地运用。",
            src1:"src/img/shizi2.png",
            jianjie1:"移动互联网行业从业10年，专注iOS和Java开发10年,对相关领域有深厚的项目经验，在Python， JavaScript， PHP也有很深入的研究。曾在中国建设银行数据中心任职。熟悉Java项目的技术体系和架构设...",
            tedian1:"讲课内容层次分明，竭尽所能地让学员吃透该部分知识点。而且讲课方式非常新颖。在课堂上，经常用提问题的方式引起学员的思考，以达到深刻理解的效果。同时，他还注重拓展一些书本以外的知识点，让大家灵活地运用。"}
            ],
            temp_shizi:"",
            list_shizi:[]
   }

  },methods: {


  },components:{
          'v-nav':nav ,
          'v-yewie':yewei
    },boforeCreate(){

    },mounted(){
              var api = "http://www.goodlearn.club/train/index.php/home/api/getTeachers"
              this.$http.get(api).then((res)=>{
                        console.log(res);
                         this.temp_shizi = eval("("+res.bodyText+")");
                          console.log(this.temp_shizi);
                          this.list_shizi = this.temp_shizi.teachers;

                    },function(err){
                            console.log(err);
                            alert("失败");
                    })
    }
    }


</script>
<style lang="scss">
  #box{width: 1899px; margin: 40px auto;}
  #box .ul4{margin: auto; width: 1388px;display: flex;justify-content: space-between;align-items: center;margin-top: 50px;}
  .ul4_left{ width: 570px; height: 570px;background: url("../img/shizi1.png")no-repeat bottom right;background-size: 96% 96%;img{height: 550px;} }
  .ul4_right{ width: 570px; height: 570px; li{font-size: 20px;}}
  .jianjie{height: 45px;padding: 20px 0 0 15px;font-size: 28px;color:chocolate;}
  .tedian{height: 45px;padding: 80px 0 0 15px;font-size: 28px;color: chocolate;}
  #video{margin:2px auto;width: 1899px;height: 500px;img{height: 500px;width: 1899px;margin:2px auto;}}
</style>
