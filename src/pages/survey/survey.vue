<template>
  <div class="survey">
    <surveyHeader></surveyHeader>
    <div class="firstDiv">
      <div class="firstDiv_small">
        <img src="../../../static/image/survey/shouye@2x.png" alt="">
        <p>您当前位置：</p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">我的应用</a></el-breadcrumb-item>
          <el-breadcrumb-item>概括</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="secondDiv">
      <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
        <img class="jineIcon" src="../../../static/image/survey/jine@2x.png" alt="">
        <div class="secondDivText">
          <p>总消费金额</p>
          <p>4,235</p>
        </div>
      </div>
      <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
        <img class="liulanIcon" src="../../../static/image/survey/liulan@2x.png" alt="">
        <div class="secondDivText">
          <p>页面总浏览量</p>
          <p>4,235</p>
        </div>
      </div>
      <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
        <img class="xiazaiIcon" src="../../../static/image/survey/xiazai@2x.png" alt="">
        <div class="secondDivText">
          <p>总下载量</p>
          <p><span>4,235</span><span>4,235</span></p>
        </div>
      </div>
      <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
        <img class="shebeiIcon" src="../../../static/image/survey/shebei@2x.png" alt="">
        <div class="secondDivText">
          <p>页面总浏览量</p>
          <p>4,235</p>
        </div>
      </div>

    </div>
    <div class="thirdDiv">
      <div class="recently7" style="background-image: url('../../../static/image/survey/anniu_s@2x.png')">
        <p>最近7天</p>
      </div>
      <div class="recently1" style="background-image: url('../../../static/image/survey/anniu_n@2x.png')">
        <p>最近1月</p>
      </div>
      <div class="recently3" style="background-image: url('../../../static/image/survey/anniu_n@2x.png')">
        <p>最近3月</p>
      </div>
      <DatePicker size="large" @on-change="aa(value=$event)" v-model="value"  format="yyyy-MM-dd" :clearable=false type="daterange" split-panels placeholder="Select date" style="width: 280px;height: 48px"></DatePicker>


    </div>
  </div>
</template>

<script>
  import surveyHeader from '../component/surveyHeader'

  export default {
    name: "survey",
    data() {
      return {
        value:''
      }
    },
    components: {
      surveyHeader
    },
    methods:{
      aa(a){
        console.log(a)
      }
    }
  }
</script>

</style>
<style scoped>
  .firstDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .firstDiv_small {
    width: 1200px;
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

  .secondDiv {
    width: 1200px;
    margin: 48px auto 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .secondDivBg {
    width: 290px;
    height: 100px;
    background-size: 290px 100px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .jineIcon {
    width: 52px;
    height: 52px;
    margin-left: 39px;
  }

  .liulanIcon {
    width: 58px;
    height: 37px;
    margin-left: 39px;
  }

  .xiazaiIcon {
    width: 44px;
    height: 44px;
    margin-left: 39px;
  }

  .shebeiIcon {
    width: 34px;
    height: 52px;
    margin-left: 39px;
  }

  .secondDivText {
    height: 50px;
    position: relative;
    margin-left: 34px;
    font-size: 16px;
    color: #333333;
  }

  .secondDivText p:nth-child(2) {
    margin-top: 15px;
  }

  .thirdDiv {
    width: 1200px;
    height: 80px;
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5;
  }

  .recently7 {
    width: 120px;
    height: 48px;
    background-size: 120px 48px;
    background-repeat: no-repeat;
    color: white;
    line-height: 48px;
    text-align: center;
    margin-left: 17px;
  }

  .recently1 {
    width: 120px;
    height: 48px;
    background-size: 120px 48px;
    background-repeat: no-repeat;
    color: #06B2B6;
    line-height: 48px;
    text-align: center;
    margin-left: 19px;
  }

  .recently3 {
    width: 120px;
    height: 48px;
    background-size: 120px 48px;
    background-repeat: no-repeat;
    color: #06B2B6;
    line-height: 48px;
    text-align: center;
    margin-left: 18px;
  }


</style>
<style>
  .ivu-input{
    height: 48px !important;
  }
  .ivu-input-wrapper{
    height: 48px;
  }
  .ivu-date-picker-rel{
    height: 48px !important;
  }
