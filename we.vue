<template>
    <div id="app">
        <v-nav></v-nav>
        <div id="box1">
         <div id="box2">
           <div class="box_left">

　              <p>学校地址：广东省广州市白云区江高镇田南路13号创业园乔泰科技</p>
　　            <p>联系电话：13286974817</p>
　　            <p>邮 编：510450</p>
　　
           </div>
           <div class="box_right">
             <ul>
                <h3>姓名</h3>
                <li><el-input class="wo" v-model="input" placeholder="请输入内容"></el-input></li>
                <h3>邮箱</h3>
               <li><el-input class="wo" v-model="input" placeholder="请输入内容"></el-input></li>
               <h3>手机号</h3>
               <li><el-input class="wo" v-model="input" placeholder="请输入内容"></el-input></li>
               <h3>给我们的意见</h3>
               <li><el-input class="inp1" v-model="input" placeholder="请输入内容"></el-input></li>
               <el-button class="butt" type="info" round>提交</el-button>
            </ul>
           </div>
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
			msg:"我们"
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
#box1{width: 1899px;}
#box2{width: 1299px; margin:120px auto; display: flex;justify-content:space-between;align-self:center;
.box_left{width: 500px; height: 500px; p{margin: 20px 0 50px 120px;}font-size: 25px;}
.box_right{width: 500px; height: 500px;
.wo{width: 400px;height:50px;margin-bottom: 20px;}
h3{font-size: 15px;color: #606266;padding-bottom: 5px;}
.inp1{height: 100px;}
.butt{width: 150px;margin: 20px 0 0 245px;}
}
}
</style>
