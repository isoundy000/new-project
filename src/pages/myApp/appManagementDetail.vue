<template>
<div class="appManagementDetail">
  <div class="firstDiv">
    <div class="firstDiv_small">
      <img src="../../../static/image/survey/hpshouye.png" alt="">
      <p>您当前位置：</p>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
        <el-breadcrumb-item>应用管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
  <div class="secondDiv">
    <div class="header_title">
      <p @click="appClick(index,list.isclass,list.isHide)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass,'ishide':list.isHide} ">{{list.msg}}</p>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>

</div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL} from "../../api";
  import qs from 'qs'

    export default {
        name: "appManagementDetail",
      data(){
          return{
            title: [
              {
                msg: '应用简介',
                isclass: true,
                isHide:false
              },
              {
                msg: '版本记录',
                isclass: false,
                isHide:false
              },
              {
                msg: '下载记录',
                isclass: false,
                isHide:false
              },
              {
                msg: '消费记录',
                isclass: false,
                isHide:false
              },
              // {
              //   msg: '补签收费记录',
              //   isclass: false,
              //   isHide:false
              // },
              {
                msg: '统计',
                isclass: false,
                isHide:false
              },

              {
                msg: '防盗刷设置',
                isclass: false,
                isHide:false
              },
              {
                msg: '应用合并',
                isclass: false,
                isHide:false
              },
              {
                msg: '下载码',
                isclass: false,
                isHide:false
              },
              {
                msg: '消息推送',
                isclass: false,
                isHide:false
              },

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
              path:'/appManagementDetail',
              query:{
                id:this.$route.query.id
              }
            })
          }else if(index==1){
            this.$router.push({
              path:'/versionRecord',
              query:{
                id:this.$route.query.id
              }
            })
          }else if(index==2){
            this.$router.push({
              path:'/downLoadRecord',
              query:{
                id:this.$route.query.id
              }
            })
          }else if(index==3){
            this.$router.push({
              path:'/consumptionRecord',
              query:{
                id:this.$route.query.id
              }
            })
          }else if(index==444444){
            this.$router.push({
              path:'/buqianRecord',
              query:{
                id:this.$route.query.id
              }
            })
          } else if(index==4){
            this.$router.push({
              path:'/statistics',
              query:{
                id:this.$route.query.id,
                name:this.$route.query.name
              }
            })
          }else if(index==5){
            this.$router.push({
              path:'/abnormal',
              query:{
                id:this.$route.query.id
                // name:this.$route.query.name
              }
            })
          }else if(index==6){
            this.$router.push({
              path:'/applicationMerge',
              query:{
                id:this.$route.query.id,
                apk_url:this.$route.query.apk_url
              }
            })
          }else if(index==7){
            this.$router.push({
              path:'/downloadCode',
              query:{
                id:this.$route.query.id
              }
            })
          }else if(index==8){
            this.$router.push({
              path:'/messagePush',
              query:{
                id:this.$route.query.id,
                package_name:this.$route.query.package_name,
                cert_path:this.$route.query.cert_path
                // name:this.$route.query.name
              }
            })
          }
        },
      },
      mounted(){
        // alert(this.$route.query.cert_path)
        if(this.$route.query.push_type==0){
          this.title[8].isHide=true
        }else{
          this.title[8].isHide=false
        }


         // alert(this.$route.query.id)
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
  border-bottom: 1px solid #2F82FF;
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
    max-width: 1482px;
    background-color: #F7F7F7;
    display: flex;
  }
  .header_title p{
    width: 100%;
    max-width: 115px;
    height: 50px;
    text-align: center;
    font-family:Microsoft YaHei;
    color: #333333;
    line-height: 50px;
    font-size: 15px;
    cursor: pointer;
  }
  .isColor{
    color: #2F82FF;
    background-color: white;
    border-top: 2px solid #2F82FF;
  }
  .ishide{
    display: none;
  }
</style>
