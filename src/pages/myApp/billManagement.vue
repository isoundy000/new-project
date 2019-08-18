<template>
    <div class="billManagement">
      <div class="mask" v-if="isMask">
        <div class="maskDiv" style="background-image: url('../../../static/image/survey/zhiuf_bg.png')">
              <div class="maskDivOne">
                <p>充值</p>
                <img @click="close" src="../../../static/image/survey/guanbi@2x.png" alt="">
              </div>
        </div>
      </div>
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/shouye@2x.png" alt="">
          <p>您当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
            <el-breadcrumb-item>账单管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="secondDiv">
        <p>账号余额：<span>0.00</span>元</p>
        <div @click="recharge">充值</div>
      </div>
      <div class="thirdDiv">
        <div class="header_title">
          <p @click="appClick(index,list.isclass)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass} ">{{list.msg}}</p>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "billManagement",
      data(){
          return{
            isMask:false,
            title: [
              {
                msg: '消费记录',
                isclass: true
              },
              {
                msg: '充值记录',
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
              path:'/billManagement'
            })
          }else if(index==1){
            this.$router.push({
              path:'/billInvest'
            })
          }
        },
        recharge(){
          this.isMask=true
        },
        close(){
          this.isMask=false
        }
      }
    }
</script>

<style scoped>
  .billManagement {
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
    height: 100px;
    margin: 32px auto 0 auto;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .secondDiv p{
    margin-left: 17px;
    color: #999999;
  }
  .secondDiv span{
     color: #333333;
    font-size: 18px;
   }

  .secondDiv div{
    width: 96px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    background-color: #14BEC8;
    border-radius: 5px;
    font-size: 16px;
    color: #FFFFFF;
margin-left: 44px;
    cursor: pointer;
  }
  .thirdDiv{
    width: 78%;
    height: 600px;
    /*border: 1px solid #E5E5E5;*/
    margin:38px auto 0 auto ;
  }
  .header_title{
    width: 100%;
    background-color: #F7F7F7;
    display: flex;
    border: 1px solid #E5E5E5;
  }
  .header_title p{
    width: 140px;
    height: 50px;
    text-align: center;
    font-family:Microsoft YaHei;

    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
  }
  .isColor{
    color: #06B2B6;
    background-color: white;
    border-top: 2px solid #06B2B6;
border-bottom: 0;
  }
  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.5);
    z-index: 1000000;
    top: 0;
  }
  .maskDiv{
    width: 525px;
    height: 339px;
    background-size: 525px 339px;
  }
  .maskDivOne{
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .maskDivOne p{
    font-size: 22px;
    color: #FFFFFF;
    margin: 0 auto;
  }
  .maskDivOne img{
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
</style>
