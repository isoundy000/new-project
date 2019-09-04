<template>
<div class="abnormal">
  <div class="abnormalDivOne">
    <p style="font-size: 16px;color: #999999">请在账户设置-通知设置内设置接收触发短信的手机号</p>
    <div class="firstTitle">
      <img @click="isNo" v-if="isChoose" src="../../../static/image/superSignature/weixuan.png" alt="">
      <img @click="isNo" v-else src="../../../static/image/superSignature/xuanzhong.png" alt="">

      <p>下载超量预警</p>
    </div>
    <div class="firstDiv" v-show="isOne">
      <p class="fir">按照您设置的规则，新用户下载达到您设置的下载数时，将会给您发送一条预警短信。</p>
      <div class="firstDivOne">
        <p class="fff">检测频率/分钟<span>*</span></p>
        <el-input
          class="firstInput"
          v-model="input">
        </el-input>
      </div>
      <div class="firstDivTwo">
        <p class="fff">下载次数<span>*</span></p>
        <el-input
          class="secondInput"
          v-model="input2">
        </el-input>
      </div>
      <div class="btn" @click="preservation1"><p>保存</p></div>
    </div>
  </div>
  <div class="abnormalDivOne">
    <div class="firstTitle">
      <img @click="isNo1" v-if="isChoose1" src="../../../static/image/superSignature/weixuan.png" alt="">
      <img @click="isNo1" v-else src="../../../static/image/superSignature/xuanzhong.png" alt="">

      <p>下载超量自动下架</p>
    </div>
    <div class="firstDiv" v-show="isOne1">
      <p class="fir">按照您设置的规则，新用户下载达到您设置的下载数时，该应用将自动下架，您可重新手动上架。</p>
      <div class="firstDivOne">
        <p class="fff">检测频率/分钟<span>*</span></p>
        <el-input
          class="firstInput"
          v-model="input3">
        </el-input>
      </div>
      <div class="firstDivTwo">
        <p class="fff">下载次数<span>*</span></p>
        <el-input
          class="secondInput"
          v-model="input4">
        </el-input>
      </div>
      <div class="btn" @click="preservation2"><p>保存</p></div>
    </div>
  </div>
  <div class="abnormalDivOne footer">
    <div class="firstTitle">
      <img @click="isNo2" v-if="isChoose2" src="../../../static/image/superSignature/weixuan.png" alt="">
      <img @click="isNo2" v-else src="../../../static/image/superSignature/xuanzhong.png" alt="">

      <p>每日消费限制</p>
    </div>
    <div class="firstDiv" v-show="isOne2">
      <p class="fir">每日该应用的消费达到您的预设值时，该应用将自动下架，您可修改消费上限后再次手动上架，或等待第二日自动重新上架。</p>
      <div class="firstDivOne">
        <p class="fff">每日消费限制<span>*</span></p>
        <el-input
          class="firstInput"
          v-model="input5">
        </el-input>
        <span style="color: black;margin-left: 15px;font-size: 16px">元</span>
      </div>
      <div class="firstDivTwo">
        <p class="fff">下载次数<span>*</span></p>
        <el-input
          class="secondInput"
          v-model="input6">
        </el-input>
      </div>
      <div class="btn" @click="preservation3"><p>保存</p></div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import {BASE_URL} from "../../api";
    export default {
        name: "abnormal",
      data(){
          return{
            isChoose:true,
            isOne:false,
            isChoose1:true,
            isOne1:false,
            isChoose2:true,
            isOne2:false,
            input:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:''
          }
      },
      methods:{
        isNo(){
          this.isChoose=!this.isChoose
          if(this.isChoose==false){
            this.isOne=true
          }else{
            this.isOne=false
          }
        },
        isNo1(){
          this.isChoose1=!this.isChoose1
          if(this.isChoose1==false){
            this.isOne1=true
          }else{
            this.isOne1=false
          }
        },
        isNo2(){
          this.isChoose2=!this.isChoose2
          if(this.isChoose2==false){
            this.isOne2=true
          }else{
            this.isOne2=false
          }
        },
        preservation1(){
          alert("000")
          let data={
            id:this.$route.query.id,
            down_frequency:this.input,
            down_times:this.input2,
            auto_close:this.input3,
            auto_times:this.input4,
            day_consume:this.input5,
            day_times:this.input6,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appEarlyWarning',qs.stringify(data),config).then(res => {
            console.log(res.data)
            if(res.data.code==200){
              this.$message({
                message: '保存成功',
                type: 'success'
              });
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            console.log(err)
          })
        },
        preservation2(){
          this.$nextTick(function() {
            this.preservation1()
          })
        },
        preservation3(){
          this.$nextTick(function() {
            this.preservation1()
          })
        },
      },
      mounted(){
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appEarlyWarningInfo',qs.stringify(data),config).then(res => {
          console.log(res.data.data)
          this.input=res.data.data.down_frequency
          this.input2=res.data.data.down_times
          this.input3=res.data.data.auto_close
          this.input4=res.data.data.auto_times
          this.input5=res.data.data.day_consume
          this.input6=res.data.data.day_times
        }, err => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  .abnormal{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .abnormalDivOne{
    width: 100%;
    height: auto;
    margin-left: 42px;
    margin-top: 61px;
  }
  .abnormalDivOne .fff{
    color:#999999 ;
    font-size: 16px;
  }
  .firstTitle{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
    margin-top: 20px;
  }
  .firstTitle p{
    margin-left: 8px;
  }
  .firstDiv{
    width: 90%;
    height: auto;
  }

  /*.firstDiv p{*/
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*display: flex;*/
    /*align-items: center;*/
  /*}*/
  .fir{
    margin-top: 22px;
    color:#999999 ;
    font-size: 16px;

  }
  .firstDiv span{
    color: red;
    margin-left: 5px;
  }
  .firstDivOne{
    height: 60px;
    margin-top: 41px;
    display: flex;
    align-items: center;

  }
  .firstDivOne p{
    width: 150px;
    text-align: right;
    color: #666666 !important;
  }
  .firstDivTwo p{
    width: 150px;
    text-align: right;
    color: #666666 !important;
  }
  .firstDivTwo{
    display: flex;
    margin-top: 20px;
    align-items: center;

  }
  .firstInput{
    width: 400px;
    margin-left: 22px;
  }
  .secondInput{
    width: 400px;
    margin-left: 22px;
  }
  .btn{
    width: 120px;
    height: 45px;
    background-color: #06B2B6;
    border-radius: 2px;
    color: white;
    text-align: center;
    line-height: 45px;
    margin-left: 171px;
    margin-top: 36px;
    cursor: pointer;
  }
  .footer{
    margin-bottom: 50px;
  }
</style>
