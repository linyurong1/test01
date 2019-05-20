<template>
    <div id="app">
        <v-nav></v-nav>

    <div id="indextop">
    <div class="logo">
        <a href="/"></a>
    </div>
    <div class="nav">
    	<a href="" target="">软件简介</a>
      <a href="http://www.3dvr-wz.com/" target="_blank">软件试用</a>
      <a href="http://www.3dvr-wz.com/ems/index.php/admin/user/login" target="_blank">管理后台</a>
      <a href="mobile.html" target="">教研教学</a>
      <a href="abouts.html" target="">关于我们</a>
      <a href="help/index.html" target="">帮助中心</a>
		</div>
       </div>

    <div id="indexzhong">
      <div class="zhong">
       <h1>学习要有精华浓缩的笔记</h1>
       <h3>提供系统化、结构化、联系化的"名师笔记"，让你学有所依，目标明确，摆脱"一无所获"的学习困惑</h3>
       <img src="../img/sx.png">
       </div>
    </div>
    <div id="indexxia">
      <div class="xia">
          <h1>有了笔记要能轻松记牢</h1>
          <h3>为此针对大脑遗忘机制，采用"主动召回测试"和"间隔重复"的记忆卡片和抗遗忘的曲线重复法进行知识记忆。每天20分，记忆长保存</h3>
          <img src="../img/jy.png">
          <h1>记住了要能运用解决问题</h1>
          <h3>逻辑的提升依赖"实践"和"复盘"来建模，我们的办法是逻辑运用展示及自由闯关运用</h3>
          <img src="../img/lj.png">
      </div>
    </div>
    <div id="xia1">
      <div class="xia1">
          <h1>有学习方法，过程也要轻松有趣</h1>
          <h3>为此我们将玩游戏吸引人的元素引入，使学习过程趣味化、游戏化，以求轻轻松松学技能</h3>
          <ul>
            <li>针对事实性知识、概念性知识、规则性知识、流程性知识提供匹配游戏，寓教于乐</li>
            <li>游戏化挑战、反馈的任务激励机制</li>
            <li>成就设计:积分，技能，社会认同，排行榜，曝光，能力导向</li>
            <li>多形式的学习活动：答题竞赛</li>
          </ul>
          </div>
    </div>
    <div id="xia2">
     <div class="xia2">
       <div class="xia2_left">
          <h1>轻松化设计</h1>
          <ul>
            <li>趣味性、多样性结合的翻卡片</li>
            <li>随机性、挑战性结合的闯关游戏</li>
            <li>多人合作、竞争学习氛围的营造</li>
          </ul>
       </div>
       <img src="../img/cc.jpg">
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
      msg:"我是超级学习系统",
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
#indextop{width: 100%;height: 500px; background: url("../img/sec2.jpg") no-repeat center ;background-size: 100% 150%;}
.log-reg{width: 100%; height: 500px;}
.nav{margin-left: 50px; width: 600px;height: 50px;background-color: rgba(240, 255, 255, 0.377); display: flex;justify-content: space-between;align-items: center;}
.nav a{width: 100px;height: 50px;line-height: 50px;text-align: center;text-decoration: none;color: #000;}
.nav a:hover{background: burlywood;}
#indexzhong{width: 1899px;}
.zhong{padding-top: 50px; width: 1000px;margin: auto;h1,h3,img{text-align: center;padding-bottom: 40px;}}
#indexxia{width: 1899px;}
.xia{width: 1000px;margin: auto;h1,h3,img{padding-bottom: 40px;}}
#xia1{height: 580px;; background: url(../img/hudong.jpg)}
.xia1{color: azure; width: 1000px;margin: auto;ul,h1,h3{padding-bottom: 70px;}h1{padding-top: 150px;}ul{font-size: 20px;list-style:square; padding-left: 25px;  }}
#xia2{width: 1899px; .xia2{
                            margin: auto; width: 1000px; display: flex;justify-content: space-between;
                            h1,ul{padding-top: 70px;list-style:square;}
                            img{padding-top: 70px;}
                            ul li{padding-top: 10px;font-size: 20px;}
                            h1{padding-top: 150px;}
                            }}
</style>
