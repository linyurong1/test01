<template>
    <div id="app">
        <div id="top"> <span><img class="logo_img" src="./img/logo.png" alt=""></span>
 <span class="sp1">
        <el-button type="text" @click="dialogTableVisible = true"><a>在线报名</a></el-button>
<el-dialog title="在线报名" :visible.sync="dialogTableVisible">
 姓      名:<input class="lxfs" type="text"><br>
 联系方式:<input class="lxfs" type="text"><br>
 课      程：<input class="lxfs" type="text" list="itemlist" name=""><br>
<datalist id="itemlist">
    <option>小程序</option>
    <option>java</option>
</datalist>
 <input class="bu" type="button" value="提交">
</el-dialog>
<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true"><a>项目定制</a></el-button>

<el-dialog title="项目定制" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <p>项目介绍:<input class="input4" type="text"><br></p>
    <p>联系方式:<input class="input3"  type="text"></p>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog></span>

        </div>
        <div id="nav">
            <ul>
                <li>
                    <router-link to="/kecheng">首页</router-link>
                </li>
                <li>
                    <router-link to="/course/small_program">课程专区</router-link>
                </li>
                <li>
                    <router-link to="/faculty">师资力量</router-link>
                </li>
                <li>
                    <router-link to="/system">超级学习系统</router-link>
                </li>
                <!-- <li><router-link to="/tools">学习工具</router-link></li> -->
                <!-- <li><router-link to="/students">学员专区</router-link></li> -->
                <li>
                    <router-link to="/we">关于我们</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import css1 from "./css/public.css";
export default {
  data(){
    return{
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          radio: '1',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          lx:'',
          input: '',
          lx:'',


        },
        formLabelWidth: '120px'
      };
    }
  }


</script>
<style lang="scss">
.sp1 {
    text-align:center;
    a {
        width: 50px;
        height: 50px;
        line-height: 50px;
        display: block;
        color: #000;
    }
    display: flex;
    justify-content: space-between;
}
.sp1 a:hover {
    background-color: rgb(79, 161, 216);
}
.lx {
    width: 500px;
    padding: 100px;
}
.el-input {
    height: 10px;
}
.el-dialog__body {
    height: 400px;
    ;
}
.input4 {
    width: 600px;
    height: 145px;
}
.butt1 {
    width: 250px;
    margin: 50px;
    position: relative;
    right: 0px;
    top: 100px;
    ;
}
.bu {
    width: 100px;
    height: 35px;
    ;
    margin-left: 60px;
}
.el-input__inner {
    width: 350px;
}
.el-form-item__content {
    width: 400px;
}
.el-form-item {
    width: 500px;
}
.input3 {
    width: 300px;
    height: 50px;
    ;
}
.lxfs {
    width: 300px;
    height: 50px;
    ;
}
.logo_img {
    height: 100px;
}
</style>