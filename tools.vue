<template>
    <div id="app">
        <v-nav></v-nav>
            <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item5 in imgList" :key="item">
      <h3><img  :src="item5.src" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
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
      msg:"我是学习工具",
      imgList: [
        {src:'src/img/1.jpg'},
        {src:'src/img/2.jpg'},
        {src:'src/img/3.jpg'},
        {src:'src/img/4.jpg'},
        {src:'src/img/5.jpg'},
        {src:'src/img/6.jpg'}
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
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    img{height: 500px;width: 1080px;}
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
