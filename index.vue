<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view></router-view>
    <!-- 轮播图开始 -->
    <div class="swipe" @mouseenter.stop="handleStop" @mouseleave.stop="handleGo">
        <transition-group name="list" tag="ul" class="swipe__list">
            <li v-for="(item,index) in imgList" :key="index" class="list-item" v-show="index===currentIndex">
                <a href="#">
                    <img alt="" src="./img/2.jpg">
                </a>
            </li>
            <li v-for="(item,index) in imgList" :key="index" class="list-item" v-show="index===currentIndex">
                <a href="#">
                    <img alt="" src="./img/1.jpg">
                </a>
            </li>
        </transition-group>
        <div class="swipe__dian"> <span v-for="(item,index) in imgList.length" :class="{'active':index===currentIndex}" @mouseover="handleChange(index)"></span>

        </div>
        <div class="swipe__control" v-show="control">
            <dl-icon class="prev" type="Left" @click.native="handleChange(prevIndex)" size="1.1"></dl-icon>
            <dl-icon class="next" type="youjiantou1" @click.native="handleChange(nextIndex)" size="1.6"></dl-icon>
        </div>
    </div>
    <!-- 轮播图结束 -->
    <!-- Course开始 -->
    <div id="Course">
        <div class="Outline">
            <img class="img1" src="./img/tu1dhuaright.png">
            <img class="img2" src="./img/tu1donhua.png">
             <h2>小程序</h2>

        </div>
        <div class="Subjects">
            <router-link class="dagang" to="dagang">
                <div class="Probably">
                     <h2>课程介绍-大纲</h2>

                </div>
            </router-link>
            <router-link class="xg" to="/xg">
                <div class="footage">
                    <h2>课程效果</h2>
                </div>
            </router-link>
        </div>
        <router-link to="/faculty">
            <div class="Teachers">
                 <h2>师资介绍</h2>

            </div>
        </router-link>
        <!-- <div class="video">
        <div class="Internship"><h2>就业薪资</h2></div>
        <div class="Study"><h2>学习线路图</h2></div>
    </div> -->
        <div class="Employment">
             <h1>截止报名时间:<span v-text="ai"></span></h1>

            <el-input id="inputt" v-model="input" placeholder="请输入内容联系方式"></el-input>
            <el-button id="tijiao" type="success" @click="tijiao()">报名</el-button>
        </div>
    </div>
    <!-- Course结束 -->
    <!-- 师资开始 -->
    <div id="shizi">
    <h1 class="shizi-title">月度优秀教师</h1>
    <div class="shizi-box">
       <div class="shizi-right">
        <ul class="ul1">
          <li class="ul1_li" v-for="itme1 in img"><a href="#"><img  alt="" src="./img/t1.jpg"></a>
          <ul>
        <li class="xm1">{{itme1.xm}}</li>
        <li class="jj1">{{itme1.jj}}</li>
      </ul>
      </li>
        </ul>
      </div>
      <div class="shizi-left">
        <h1 class="h11" >四月优秀教师</h1>
        <h1 class="h12" >
          <ul>
            <li>1.黄老师，带领的班级班风良好，有责任心。</li>
            <li>2.李老师，责任心强，和学生相处的和一家人一样。</li>
            <li>3.王老师，带领的班级班风良好，有责任心。</li>
            <li>4.赵老师，带领的班级班风良好，有责任心。</li>
          </ul>
        </h1>
       <router-link to="/faculty" ><el-button class="but"  type="success">查看更多优秀教师</el-button></router-link>
      </div> -->
    </div>
  </div> -->
    <!-- 师资结束 -->
    <!-- 优秀学子开始 -->
  <div id="xuezi">
    <ul class="ul2">
      <li class="ul2-li" v-for="img in imgxuezi"><a href="#"><img :src="img.src">
      <ul>
        <li class="xm">{{img.xm}}</li>
        <li class="jj">{{img.jj}}</li>
      </ul></a></li>
    </ul>
  </div>
     <!-- 优秀学子结束 -->
    <v-yewie></v-yewie>
</div>
</template>
<script>
import nav from"./Public.vue";
 import yewei from"./yewei.vue";
 export default {
    name:'app', data () {
        return {
            pickerOptions2: {
                shortcuts:[ {
                    text:'最近一周', onClick(picker) {
                        const end=new Date();
                        const start=new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }
                , {
                    text:'最近一个月', onClick(picker) {
                        const end=new Date();
                        const start=new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }
                , {
                    text:'最近三个月', onClick(picker) {
                        const end=new Date();
                        const start=new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }
                ]
            }
            , value4:[new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)], value5:'', msg:'231', imgList:[ {
                src:'src/img/1.jpg'
            }
            , {
                src:'src/img/2.jpg'
            }
            ], index: 0, currentIndex: 0, timer:'', control: false, img:[ {
                src:'src/img/t1.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期老师，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/t2.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期老师，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/t3.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期老师，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/t4.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            ], imgxuezi:[ {
                src:'src/img/g1.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g2.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g3.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g4.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g5.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g6.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g7.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g8.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            , {
                src:'src/img/g9.jpg', xm:"陈某某", a:"www.baidu.com", jj:"第一期学员，现在已经毕业在北京享阅**有限公司Web前端开发工程师"
            }
            ], ai:"2019.04.01", input:"", temp_index:"", list_index:[],
        }
    }
    , methods: {
        autoPlay () {
            this.currentIndex++ ;
            if (this.currentIndex > this.imgList.length - 1) {
                this.currentIndex=0
            }
        }
        , handleStop () {
            this.control=true;
            clearInterval(this.timer);
            this.timer=null;
        }
        , handleGo () {
            this.control=false;
             this.timer=setInterval(()=> {
                this.autoPlay();
            }
            , 3000)
        }
        , handleChange (index) {
            this.currentIndex=index
        }
        , tijiao() {
            var tj=document.getElementById("inputt").value;
            if(tj==null) {
                alert("提交失败");
            }
            else {
                if(tj.length==11 && tj.substring(0, 1)==1) {
                    alert("提交成功");
                }
                else {
                    alert("提交失败");
                }
            }
        }
    }
    , created () {
        this.$nextTick(()=> {
            this.handleGo
        }
        )
    }
    , computed: {
        prevIndex () {
            if (this.currentIndex===0) {
                return this.imgList.length - 1
            }
            else {
                return this.currentIndex - 1
            }
        }
        , nextIndex () {
            if (this.currentIndex===this.imgList.length - 1) {
                return 0
            }
            else {
                return this.currentIndex + 1
            }
        }
    }
    , components: {
        'v-nav':nav, 'v-yewie':yewei
    }
    , mounted() {
        var api='http://www.goodlearn.club/train/index.php/home/api/getTeachers';
        this.$http.get(api).then((res)=> {
            console.log(res);
            this.temp_index=eval("("+res.bodyText+")");
            console.log(this.temp_index);
            this.list_index=this.temp_index.course;
            console.log(this.temp_index.rooturl);
            this.i=this.temp_index.rooturl;
            this.imgList1.push( {
                src:this.i+this.list_index.pic
            }
            );
        }
        , function(err) {
            console.log(err);
            alert("失败");
        }
        )
        containerStyle()
         return {
            transform:"translate3d(${this.distance}px, 0, 0)"
        }
    }
}
</script>

<style lang="scss">
.swipe {
    margin: auto;
    position: relative;
    height: 700px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    &__list {
        width: 100%;
        height: 100%;
        li {
            position: absolute;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    &__dian {
        position: absolute;
        z-index: 10;
        bottom: 50px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 0;
        span {
            display: inline-block;
            height: 10px;
            width: 30px;
            margin: 0 6px;
            background-color: #49b23c;
            cursor: pointer;
        }
        .active {
            background-color: #B20F12;
        }
    }
    &__control {
        position: absolute;
        z-index: 10;
        top: 206px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .prev {
            &:hover {
                color: red;
                font-weight: bold;
            }
        }
        .next {
            &:hover {
                color: red;
                font-weight: bold;
            }
        }
    }
    .list-enter-to {
        transition: all 1s ease;
        transform: translateX(0);
    }
    .list-leave-active {
        transition: all 1s ease;
        transform: translateX(-100%)
    }
    .list-enter {
        transform: translateX(100%)
    }
    .list-leave {
        transform: translateX(0)
    }
    //白色动画 .list-enter-active, .list-leave-active {
        transition: opacity 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
    }
#Course {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5% auto;
    width: 90%;
    height: 10%;
    a {
        text-decoration: none;
    }
}
.Outline {
    width: 23%;
    background:url(./img/tu1.png) no-repeat bottom rgb(251, 217, 173);
    background-size:100% 100%;
    height: 80%;
    margin-right: 15px;
}
.Outline:hover {
    .img1 {
        padding-left: 5px;
    }
    .img2 {
        padding-left: 68%;
    }
}
.Outline img {
    height: 130px;
}
.Outline .img1 {
    padding: 37% 0 0 5%;
    display: block;
    float: left;
}
.Outline .img2 {
    padding: 37% 0 0 63%;
    display: block;
    float: left;
}
.Outline h2 {
    width: 100%;
    text-align: center;
    height: 45px;
    padding-top: 210px;
    color: #fff;
    font-size: 24px;
    margin-top: 190px;
}
.Subjects {
    width: 17%;
    height: 80%;
    margin-right: 15px;
}
.Teachers {
    width: 350px;
    background-color: rgb(255, 255, 255);
    height: 80%;
    margin-right: 15px;
    background:url(./img/tu4.png) no-repeat center rgb(251, 217, 173);
    background-size:100% 100%;
    img {
        height: 130px;
    }
    .img3 {
        padding: 0 0 0 20px;
    }
    .img4 {
        padding: 0 0 0 150px;
    }
}
.video {
    width: 17%;
    height: 80%;
    margin-right: 15px;
}
.Employment {
    width: 20%;
    background:url(./img/tu7.png) rgb(255, 255, 255);
    background-size:100% 100%;
    height: 80%;
    margin-right: 15px;
    position: relative;
    left:0;
    bottom: -5%;
    input {
        width: 80%;
        margin-left: 10%
    }
}
.Probably {
    width:100%;
    height: 220px;
    margin-bottom: 15px;
    background:url(./img/tu2.png) no-repeat center rgb(255, 255, 255);
    background-size: 70% 70%;
}
.footage {
    width:100%;
    height: 215px;
    background:url(./img/tu3.png) no-repeat center rgb(255, 255, 255);
    background-size: 70% 70%;
}
.Internship {
    width:300px;
    height: 220px;
    margin-bottom: 15px;
    background:url(./img/tu5.png) no-repeat center rgb(255, 255, 255);
    background-size: 70% 70%;
}
.Study {
    width:300px;
    height: 215px;
    background:url(./img/tu6v.png) no-repeat center rgb(255, 255, 255);
    background-size: 70% 70%;
}
.Study h2, .Internship h2, .Probably h2, .Internship h2 {
    width: 100%;
    text-align: center;
    height: 45px;
    padding-top: 187px;
    font-size: 20px;
}
.Teachers h2 {
    width: 350px;
    text-align: center;
    height: 45px;
    padding-top: 400px;
    color: azure;
}
.Study h2, .footage h2 {
    width: 100%;
    text-align: center;
    height: 45px;
    padding-top: 183px;
    font-size: 20px;
}
.Employment h1 {
    padding-top: 65%;
    padding-bottom: 20px;
    text-align: center;
    font-size: 20px;
    color: rgb(78, 78, 78);
    width: 100%;
}
#shizi {
    width: 100%;
    height: 566px;
    background:url("./img/7.jpg");
    margin-bottom: 10px;
    margin: auto;
}
.shizi-title {
    height: 40px;
    color: rgb(82, 255, 111);
    font-size:50px;
    text-align: center;
    padding-bottom:45px;
}
.shizi-box {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}
.shizi-left {
    width: 500px;
    height: 460px;
    a {
        color: azure;
        text-decoration: none;
    }
}
.but {
    width: 350px;
    height: 50px;
    margin:20px 0 0 50px;
}
.shizi-right {
    width: 500px;
    height: 460px;
}
.h11 {
    width: 400px;
    color: ghostwhite;
    padding: 25px 0 0 50px;
}
.h12 {
    color: #ccc;
    padding:50px;
    font-size: 8px;
    ul li{width: 100%;text-overflow:ellipsis;white-space:nowrap;
        color: rgb(255, 255, 255);
        font-size: 18px;
        line-height: 40px;
        overflow: hidden;
    }
}
.ul1 {
    display: flex;
    flex-wrap:wrap;
    margin: 20px 0 0 20px;
}
.ul1 li {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: 1px solid rgb(111, 201, 118);
    img {
        height: 255px;
        ;
    }
}
.ul1_li a {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
}
.ul1_li ul {
    position: absolute;
    width: 375px;
    color: #000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
}
.ul1_li a:hover {
    .ul1_li ul {
        opacity: 1;
        background: rgba(0, 0, 0, 0.247);
    }
}
#xuezi {
    width: 1899px;
    height: 800px;
    margin: auto;
}
.ul2 {
    width: 1290px;
    height: 800px;
    display: flex;
    flex-wrap:wrap;
    margin: auto;
    padding-top: 50px;
}
.ul2 .ul2-li {
    width: 430px;
    height: 250px;
    overflow: hidden;
    position: relative;
    ul {
        position: absolute;
        width: 375px;
        color: #000;
        background: rgba(211, 211, 211, 0.5);
        z-index: 10;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        .xm {
            text-align: center;
            padding: 50px 0 5px 15px;
            color: rgb(255, 255, 255);
            font-size: 28px;
        }
        .jj {
            padding: 5px 0 5px 15px;
            color: rgb(255, 255, 255);
            font-size: 20px;
        }
    }
}
.ul2 li a:hover {
    ul {
        opacity: 1;
        background: rgba(0, 0, 0, 0.247);
    }
}
.ul2 li a img {
    height: 250px;
}
.dagang, .xg {
    text-decoration: none;
    color: black;
}
.el-date-editor--datetimerange.el-input, .el-date-editor--datetimerange.el-input__inner {
    margin-top: 135px;
    ;
    width: 350px;
}
#tijiao {
    margin: 5% 0 0 65%;
}
</style>
