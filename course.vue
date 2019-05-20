<template>
    <div id="app">
        <v-nav></v-nav>
         <div class="user">
              <div class="left">
                <ul>
                  <li class="li1">课程</li>
                  <li v-for="itme in list"><router-link :to="itme.to">{{itme.name}}</router-link></li>
                </ul>
              </div>
              <div class="right">
               <router-view></router-view>
              </div>
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
      msg:"我是课程",
      list:[{to:"/course/small_program",name:"小程序"},

          ],
    }
  },methods: {

  },components:{
          'v-nav':nav ,
          'v-yewie':yewei
    },mounted(){

    }
   }

</script>
<style lang="scss">

.user{
  display: flex;
}
.left{
    width: 400px;
    height: 1000px;;
    border-right: 1px solid #ccc;
    .li1{width: 400px;height: 70px;background-color: cornflowerblue;line-height: 70px;margin-bottom: 15px;font-size: 20px;}
    ul li{height: 70px; text-align: center;}
    ul li a{ width:400px; text-decoration: none;font-size: 20px;color: #000;line-height: 70px;}
    ul li:hover{background-color: rgb(173, 173, 173);}
    .mui-active{ width:400px; text-decoration: none;font-size: 20px;color: #000;line-height: 70px;}
  }
  .right{
    flex: 1;
  }
</style>
