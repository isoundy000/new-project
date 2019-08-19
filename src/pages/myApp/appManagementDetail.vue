<template>
<div class="appManagementDetail">
  <div class="firstDiv">
    <div class="firstDiv_small">
      <img src="../../../static/image/survey/shouye@2x.png" alt="">
      <p>您当前位置：</p>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
        <el-breadcrumb-item>应用管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
  <div class="secondDiv">
    <div class="header_title">
      <p @click="appClick(index,list.isclass)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass} ">{{list.msg}}</p>
    </div>
    <router-view></router-view>
  </div>

</div>
</template>

<script>
    export default {
        name: "appManagementDetail",
      data(){
          return{
            title: [
              {
                msg: '应用简介',
                isclass: true
              },
              {
                msg: '版本记录',
                isclass: false
              },
              {
                msg: '下载记录',
                isclass: false
              },
              {
                msg: '消费记录',
                isclass: false
              },
              {
                msg: '统计',
                isclass: false
              }
            ]
          }
      },
      methods:{
        appClick(index){
          for(var i=0;i<this.title.length;i++){
              this.title[i].isclass=false
          }
          this.title[index].isclass=true
          if(index==0){
            this.$router.push({
              path:'/appManagementDetail'
            })
          }else if(index==1){
            this.$router.push({
              path:'/versionRecord'
            })
          }else if(index==2){
            this.$router.push({
              path:'/downLoadRecord'
            })
          }else if(index==3){
            this.$router.push({
              path:'/consumptionRecord'
            })
          }else if(index==4){
            this.$router.push({
              path:'/statistics'
            })
          }
        },
      }
    }
</script>

<style scoped>
.appManagementDetail{
  width: 100%;
  height: 100%;
  position: relative;
}
.firstDiv {
  width: 100%;
  display: flex;
  justify-content: center;
}

.firstDiv_small {
  width: 78%;
  height: 30px;
  margin-top: 30px;
  border-bottom: 1px solid #06B2B6;
  display: flex;
  align-items: center;
  color: #999999;
}

.firstDiv_small img {
  width: 18px;
  height: 18px;
}

.firstDiv_small p {
  margin-left: 21px;
}
  .secondDiv{
    width: 78%;
    height: auto;
    border: 1px solid #E5E5E5;
    margin:48px auto 0 auto ;
  }
  .header_title{
    width: 100%;
    background-color: #F7F7F7;
    display: flex;
  }
  .header_title p{
    width: 140px;
    height: 50px;
    text-align: center;
    font-family:Microsoft YaHei;
    color: #333333;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
  }
  .isColor{
    color: #06B2B6;
    background-color: white;
    border-top: 2px solid #06B2B6;
  }
</style>
