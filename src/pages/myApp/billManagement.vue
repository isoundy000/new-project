<template>
  <div class="billManagement">
    <div class="mask" v-if="isMaskRecharge">
      <div class="maskDiv" style="background-image: url('../../../static/image/survey/zhiuf_bg.png')">
        <div class="maskDivOne">
          <p>充值</p>
          <img @click="close" src="../../../static/image/survey/guanbi@2x.png" alt="">
        </div>
        <div class="maskDivTwo">
          <p>充值金额</p>
          <div @click="money(index,list.value)" class="maskDivTwoSmall" v-for="(list,index) in amount" :key="index" :class="{'isBg':list.isClass} ">
            <p>￥{{list.value}}</p>
          </div>
        </div>
        <div class="maskDivThird">
          <p>自定义金额</p>
          <el-input
            v-on:input="moneyInput"
            class="seachInput"
            placeholder="充值金额为10-5000元整数"
            v-model="input">
          </el-input>
        </div>
        <div class="fourthDiv">
          <div @click="immediately" class="paymentBtn">
            <p>立即支付</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isMaskPayment">
      <div class="maskDiv" style="background-image: url('../../../static/image/survey/zhiuf_bg.png')">
        <div class="maskDivOne">
          <p>支付</p>
          <img @click="close" src="../../../static/image/survey/guanbi@2x.png" alt="">
        </div>
        <div class="maskDivPay">
          <div class="weixin" style="background-image: url('../../../static/image/survey/weixinbg.png')">
           <p>￥{{chongValue}}</p>
            <qrcode-vue :value="weixinvalue" :size="size" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>
            <img class="weixinImg" src="../../../static/image/survey/weixin.png" alt="">
          </div>
          <div class="zhifubao" style="background-image: url('../../../static/image/survey/zhifubaobg.png')">
            <p>￥{{chongValue}}</p>
            <qrcode-vue :value="zhifubaovalue" :size="size" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>
            <img class="zhifubaoImg" src="../../../static/image/survey/zhifubao.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="mask weihu" @click="weihu" style="display: none">
      <div class="maskdiv">
       <p>支付通道维护中</p>
      </div>
    </div>



    <div class="firstDiv">
      <div class="firstDiv_small">
        <img src="../../../static/image/survey/shouye@2x.png" alt="">
        <p>您当前位置：</p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
          <el-breadcrumb-item>账单管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="secondDiv">
      <p>账号余额：<span>{{newmoney}}</span>元</p>
      <div @click="recharge">充值</div>
    </div>
    <div class="thirdDiv">
      <div class="header_title">
        <p @click="appClick(index,list.isclass)" v-for="(list,index) in title" :key="index"
           :class="{'isColor':list.isclass} ">{{list.msg}}</p>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  import QrcodeVue from 'qrcode.vue';
  export default {
    name: "billManagement",
    data() {
      return {
        newmoney:'',
        isFalg:false,
        weixinvalue: 'https://www.baidu.com',
        zhifubaovalue: 'https://www.baidu.com',
        chongValue:'',
        btnchongValue:'',
        size: 100,
        isMaskRecharge: false,
        isMaskPayment:false,
        input:'',
        title: [
          {
            msg: '消费记录',
            isclass: true
          },
          {
            msg: '充值记录',
            isclass: false
          }
        ],
        amount: [
          {
            value: 500,
            isClass:true
          },
          {
            value: 1000,
            isClass:false
          },
          {
            value: 1500,
            isClass:false
          }
        ]
      }
    },
    components: {
      QrcodeVue
    },
    methods: {
      appClick(index) {
        for (var i = 0; i < this.title.length; i++) {
          this.title[i].isclass = false
        }
        this.title[index].isclass = true
        if (index == 0) {
          this.$router.push({
            path: '/billManagement'
          })
        } else if (index == 1) {
          this.$router.push({
            path: '/billInvest'
          })
        }
      },
      recharge() {
        $(".weihu").show()
       // this.isMaskRecharge = true
      },
      weihu(){
        $(".weihu").hide()
      },
      close() {
        this.isMaskRecharge = false
        this.isMaskPayment=false
        this.input=''
        for (var i = 0; i < this.amount.length; i++) {
          this.amount[i].isClass = false
        }
        this.amount[0].isClass = true
        this.chongValue=''
        this.btnchongValue=''
      },
      money(index,value){
        this.isFalg=true
        for (var i = 0; i < this.amount.length; i++) {
          this.amount[i].isClass = false
        }
        this.amount[index].isClass = true
        this.btnchongValue=value
        console.log(value)
        console.log(this.btnchongValue)
      },
      moneyInput(){
        for (var i = 0; i < this.amount.length; i++) {
          this.amount[i].isClass = false
        }
        console.log(this.input)
      },
      immediately(){
        this.isMaskRecharge=false
        this.isMaskPayment=true
        if(this.input==''&& this.isFalg==false){
          this.chongValue=500
        }else if(this.input==''&& this.isFalg==true){
          this.chongValue=this.btnchongValue
        }else if(this.input!=''){
          this.chongValue=this.input
        }
      }
    },
    mounted(){
      this.newmoney=localStorage.getItem('balance');
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

  .secondDiv {
    width: 78%;
    height: 100px;
    margin: 32px auto 0 auto;
    background-color: #F7F7F7;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .secondDiv p {
    margin-left: 17px;
    color: #999999;
  }

  .secondDiv span {
    color: #333333;
    font-size: 18px;
  }

  .secondDiv div {
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

  .thirdDiv {
    width: 78%;
    height: 600px;
    /*border: 1px solid #E5E5E5;*/
    margin: 38px auto 0 auto;
  }

  .header_title {
    width: 100%;
    background-color: #F7F7F7;
    display: flex;
    border: 1px solid #E5E5E5;
  }

  .header_title p {
    width: 140px;
    height: 50px;
    text-align: center;
    font-family: Microsoft YaHei;

    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
  }

  .isColor {
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

  .maskDiv {
    width: 525px;
    height: 339px;
    background-size: 525px 339px;
  }

  .maskDivOne {
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .maskDivOne p {
    font-size: 22px;
    color: #FFFFFF;
    margin: 0 auto;
  }

  .maskDivOne img {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
.maskDivTwo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0 auto;
}
.maskDivTwo p{
  font-size: 16px;
}
.maskDivTwoSmall{
  width: 100px;
  height: 49px;
  border: 1px solid #D1D1D1;
text-align: center;
  line-height: 49px;
  font-size: 20px;
  cursor: pointer;
  margin: 0 10px 0 10px;
border-radius: 5px;
}
  .isBg {
    background-image: url("../../../static/image/survey/xuanzhong.png");
    background-size:99px 47px ;
    background-repeat: no-repeat;
    color: #06B2B6;
  }
  .maskDivThird{
    display: flex;
    align-items: center;
margin-top: 30px;
  }
  .maskDivThird p{
    font-size: 16px;
    margin-left: 47px;
  }
  .seachInput{
    width: 340px;
    margin-left: 10px;
  }
  .paymentBtn{
    width: 140px;
    height: 40px;
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 4px;
    background-color: #14BEC8;
    margin-left: 47px;
    margin-top: 20px;
  }
  .maskDivPay{
    display: flex;
    font-size: 20px;
    color: white;
    margin-top: 30px;
    justify-content: space-evenly;
  }
  .maskDivPay p{
    margin-top: 7px;
  }
  .qrcode{
    margin-top: 30px;
  }
  .weixin{
    width: 160px;
    height: 220px;
    background-size: 160px 220px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .weixinImg{
    width: 140px;
    height: 25px;
    margin-top: 10px;
  }
  .zhifubao{
    width: 160px;
    height: 220px;
    background-size: 160px 220px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .zhifubaoImg{
    width: 140px;
    height: 25px;
    margin-top: 10px;
  }
  .maskdiv{
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
</style>
