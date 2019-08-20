<template>
<div class="applicationProfile">
  <div class="applicationProfileDiv">
    <div class="firstDiv">
      <div class="firstDivOne">
        <img src="../../../static/image/survey/app.png" alt="">
        <div>
          <p>全民大冒险 <span>已上架</span></p>
          <p>版本：v1.2.0</p>
        </div>
      </div>
      <div class="firstDivTwo">
          <p>下载地址</p>
          <div>BallEndlessJump.ipa</div>
      </div>
    </div>
    <div class="secondDiv">
      <p class="firstP">包名</p>
      <p class="secondP">BallEndlessJump.ipa</p>
    </div>
    <div class="thirdDiv">
      <p class="firstP">是否启用</p>
      <p class="secondP">是</p>
    </div>
    <div class="fourDiv">
      <p class="firstP">评分人数</p>
      <p class="secondP">30</p>
    </div>
    <div class="fiveDiv">
      <p class="firstP">产品类型</p>
      <p class="secondP">游戏类</p>
    </div>
    <div class="sixDiv">
      <p class="firstP">应用截图</p>
      <div class="sixDivImg" v-for="(list,index) in imgList">
        <img class="secondP"  :src="list.img" alt="">
      </div>

    </div>
    <div class="sevenDiv">
      <p class="firstP">应用介绍</p>
      <p class="secondP">这个游戏很好玩，全民大冒险是一个好用的APP</p>
    </div>
    <div class="eightDiv">
      <p class="firstP">功能介绍</p>
      <p class="secondP">这个游戏很好玩，全民大冒险是一个好用的APP</p>
    </div>
    <div class="nineDiv">
      <div style="background-image: url('../../../static/image/survey/anniu_xuanzhong.png')">编辑</div>
      <div style="background-image: url('../../../static/image/survey/anniu.png')">删除</div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "applicationProfile",
      data(){
          return{
            imgList:[
              {
                img:'../../../static/image/survey/tu1.png'
              },
              {
                img:'../../../static/image/survey/tu2.png'
              },
              {
                img:'../../../static/image/survey/tu1.png'
              },
              {
                img:'../../../static/image/survey/tu2.png'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .applicationProfile{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .applicationProfileDiv{
    width: 93%;
    height: auto;
    margin: 30px auto 0 auto;
  }
  .firstDiv,.secondDiv,.thirdDiv,.fourDiv,.fiveDiv,.sixDiv,.sevenDiv,.eightDiv{
    display: flex;
    align-items: center;
    color: #333333;
    font-size: 14px;
  }
  .secondDiv{
    margin-top: 30px;
  }
  .thirdDiv,.fourDiv,.fiveDiv,.sixDiv,.sevenDiv,.eightDiv{
    margin-top: 30px;
  }
  .firstP{
    width: 60px;
    text-align: left;
    color: #999999;

  }
  .secondP{
   margin-left: 30px;
  }
  .firstDivOne{
    width: 230px;
    display: flex;
    align-items: center;
  }
  .firstDivOne img{
    width: 80px;
    height: 80px;
  }
  .firstDivOne p{
    margin-left: 10px;
  }
  .firstDivTwo{
    display: flex;
    align-items: center;
    margin-left: 120px;
  }
  .firstDivTwo div{
    width:300px;
    height: 45px;
    line-height: 45px;
    padding-left: 20px;
    border: 1px solid #B5B5B5;
    margin-left: 20px;
  }
  .sixDivImg{
    width: 105px;
    height: 130px;

  }
  .sixDiv .sixDivImg:nth-child(3){
    margin-left: 10px;
  }.sixDiv .sixDivImg:nth-child(4){
     margin-left: 10px;
   }
  .sixDiv .sixDivImg:nth-child(5){
    margin-left: 10px;
  }
  .sixDiv .sixDivImg:nth-child(6){
    margin-left: 10px;
  }


  .sixDivImg img{
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;

  }
  .nineDiv{
    display: flex;
    margin: 60px auto 80px auto;
  }
  .nineDiv div{
    width: 180px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    background-size: 180px 40px;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .nineDiv div:nth-child(1){
    color: white;
    margin-left: 90px;
  }
  .nineDiv div:nth-child(2){
    color: #06B2B6;
    margin-left: 40px;
  }
</style>
