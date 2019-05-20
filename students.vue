<template>
    <div id="app">
        <v-nav></v-nav>
          <div id="tab">
          <h4>往期优秀学员</h4>
            <el-table
      :data="tableData" class="tab"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="毕业时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="就业岗位">
      </el-table-column>
      <el-table-column
        prop="xizi"
        label="薪资">
      </el-table-column>
       <el-table-column
        prop="zhiwei"
        label="职位">
      </el-table-column>
    </el-table>
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
			msg:"我是学员专区",
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            xizi:888888,
            zhiwei:"总经理"
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            xizi:888888,
            zhiwei:"总经理"
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            xizi:888888,
            zhiwei:"总经理"
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            xizi:888888,
            zhiwei:"总经理"
          },]
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
#tab{width: 1399px;margin:10px auto;h4{padding: 5px 0 10px 20px;}}
</style>
