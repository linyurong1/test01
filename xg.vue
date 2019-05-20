<template>
  <div id="app">
 <v-nav></v-nav>
     <!-- <router-view></router-view> -->

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
        msg:"插入的html"
    }
    },components:{
        'v-nav':nav ,
          'v-yewie':yewei
    }
}
</script>

<style lang="scss">
.boxx{display: flex;}
.dagang_left{flex:1;}
.bzt{height: 800px;position: relative;right: 20px;top: 50px;}

</style>
