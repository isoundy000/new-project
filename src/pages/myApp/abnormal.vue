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
  <div class="abnormalDivOne ">
    <div class="firstTitle">
      <img @click="isNo2" v-if="isChoose2" src="../../../static/image/superSignature/weixuan.png" alt="">
      <img @click="isNo2" v-else src="../../../static/image/superSignature/xuanzhong.png" alt="">

      <p>每日消费限制</p>
    </div>
    <div class="firstDiv" v-show="isOne2">
      <p class="fir">每日该应用的消费达到您的预设值时，该应用将自动下架，您可修改消费上限后再次手动上架，或等待第二日自动重新上架。</p>
      <!--<div class="firstDivOne">-->
        <!--<p class="fff">每日消费限制<span>*</span></p>-->
        <!--<el-input-->
          <!--class="firstInput"-->
          <!--v-model="input5">-->
        <!--</el-input>-->
        <!--<span style="color: black;margin-left: 15px;font-size: 16px">元</span>-->
      <!--</div>-->
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
  <div class="abnormalDivOne ">
    <div class="firstTitle">
      <img @click="isNo3" v-if="isChoose3" src="../../../static/image/superSignature/weixuan.png" alt="">
      <img @click="isNo3" v-else src="../../../static/image/superSignature/xuanzhong.png" alt="">

      <p>总下载消费限制</p>
    </div>
    <div class="firstDiv" v-show="isOne3">
      <p class="fir">总下载该应用的消费达到您的预设值时，该应用将自动下架，您可修改消费上限后再次手动上架。</p>
      <!--<div class="firstDivOne">-->
      <!--<p class="fff">每日消费限制<span>*</span></p>-->
      <!--<el-input-->
      <!--class="firstInput"-->
      <!--v-model="input5">-->
      <!--</el-input>-->
      <!--<span style="color: black;margin-left: 15px;font-size: 16px">元</span>-->
      <!--</div>-->
      <div class="firstDivTwo">
        <p class="fff">总下载次数<span>*</span></p>
        <el-input
          class="secondInput"
          v-model="input7">
        </el-input>
      </div>
      <div class="btn" @click="preservation4"><p>保存</p></div>
    </div>
  </div>
  <div class="abnormalDivOne footer">
    <div class="firstTitle">
      <img @click="isNo4" v-if="isChoose4" src="../../../static/image/superSignature/weixuan.png" alt="">
      <img @click="isNo4" v-else src="../../../static/image/superSignature/xuanzhong.png" alt="">

      <p>防盗刷人机验证 <span style="margin-left: 5px">(开启后用户必须滑动方块解锁后才能下载)</span></p>
    </div>
    <!--<div class="firstDiv" v-show="isOne4">-->

      <!--&lt;!&ndash;<div class="firstDivTwo">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-switch&ndash;&gt;-->
          <!--&lt;!&ndash;v-model="switchValue"&ndash;&gt;-->
          <!--&lt;!&ndash;active-color="#06B2B6"&ndash;&gt;-->
          <!--&lt;!&ndash;inactive-color="#999999"&ndash;&gt;-->
          <!--&lt;!&ndash;@change="swich">&ndash;&gt;-->
        <!--&lt;!&ndash;</el-switch>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--<div class="btn" @click="preservation5"><p>保存</p></div>-->
    <!--</div>-->


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
            switchValue:true,
            switchNum:1,
            isChoose:true,
            isOne:false,
            isChoose1:true,
            isOne1:false,
            isChoose2:true,
            isOne2:false,
            isChoose3:true,
            isOne3:false,
            isChoose4:true,
            isOne4:false,
            input:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:'',
            input7:''
          }
      },
      methods:{
        swich(){
          if(this.switchValue==true){
            this.switchNum=1
          }else{
            this.switchNum=0
          }
        },
        isNo(){
          if(this.isChoose==false){
            this.$confirm('此操作将删除所填内容, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.isOne=false
              this.isChoose=true
              this.input=0
              this.input2=0
            }).catch(() => {
            });
          }else{
            this.isChoose=true
            this.isOne=true
          }
        },
        isNo1(){
          if(this.isChoose1==false){
            this.$confirm('此操作将删除所填内容, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.isOne1=false
              this.isChoose1=true
              this.input3=0
              this.input4=0
            }).catch(() => {
            });
          }else{
            this.isChoose1=true
            this.isOne1=true
          }
        },
        isNo2(){
          if(this.isChoose2==false){
            this.$confirm('此操作将删除所填内容, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.isOne2=false
              this.isChoose2=true
              this.input6=0
            }).catch(() => {
            });
          }else{
            this.isChoose2=true
            this.isOne2=true
          }
        },
        isNo3(){
          if(this.isChoose3==false){
            this.$confirm('此操作将删除所填内容, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.isOne3=false
              this.isChoose3=true
              this.input7=0
            }).catch(() => {
            });
          }else{
            this.isChoose3=true
            this.isOne3=true
          }
        },
        isNo4(){
          this.isChoose4=!this.isChoose4
          if(this.isChoose4==false){
            this.switchNum=1
          }else{
            this.switchNum=0
          }
          this.$nextTick(function() {
            this.preservation1()
          })
        },
        preservation1(){

          let data={
            id:this.$route.query.id,
            down_frequency:this.input,
            down_times:this.input2,
            auto_close:this.input3,
            auto_times:this.input4,
            day_consume:this.input5,
            day_times:this.input6,
            download_limit:this.input7,
            is_vaptcha:this.switchNum
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appEarlyWarning',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              if(this.input!=0 ||this.input2!=0){
                this.isChoose=false
              }else{
                this.isChoose=true
              }
              this.$message({
                message: '保存成功',
                type: 'success'
              });
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })
        },
        preservation2(){
          let data={
            id:this.$route.query.id,
            down_frequency:this.input,
            down_times:this.input2,
            auto_close:this.input3,
            auto_times:this.input4,
            day_consume:this.input5,
            day_times:this.input6,
            download_limit:this.input7,
            is_vaptcha:this.switchNum
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appEarlyWarning',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              if(this.input3!=0 ||this.input4!=0){
                this.isChoose1=false
              }else{
                this.isChoose1=true
              }

              this.$message({
                message: '保存成功',
                type: 'success'
              });
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })
        },
        preservation3(){
          let data={
            id:this.$route.query.id,
            down_frequency:this.input,
            down_times:this.input2,
            auto_close:this.input3,
            auto_times:this.input4,
            day_consume:this.input5,
            day_times:this.input6,
            download_limit:this.input7,
            is_vaptcha:this.switchNum
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appEarlyWarning',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              if(this.input6!=0 ){
                this.isChoose2=false
              }else{
                this.isChoose2=true
              }
              this.$message({
                message: '保存成功',
                type: 'success'
              });
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })
        },
        preservation4(){
          let data={
            id:this.$route.query.id,
            down_frequency:this.input,
            down_times:this.input2,
            auto_close:this.input3,
            auto_times:this.input4,
            day_consume:this.input5,
            day_times:this.input6,
            download_limit:this.input7,
            is_vaptcha:this.switchNum
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appEarlyWarning',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              if(this.input7!=0 ){
                this.isChoose3=false
              }else{
                this.isChoose3=true
              }
              this.$message({
                message: '保存成功',
                type: 'success'
              });
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })
        },
        preservation5(){
          this.$nextTick(function() {
            this.preservation1()
          })
        },
      },
      mounted(){
          /*asas*/
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
          this.input7=res.data.data.download_limit
          if(res.data.data.down_frequency!=0|| res.data.data.down_times!=0){
             this.isChoose=false
            this.isOne=true
          }else{
            this.isChoose=true
            this.isOne=false
          }
          if(res.data.data.auto_close!=0|| res.data.data.auto_times!=0){
            this.isChoose1=false
            this.isOne1=true
          }else{
            this.isChoose1=true
            this.isOne1=false
          }
          if(res.data.data.day_times!=0){
            this.isChoose2=false
            this.isOne2=true
          }else{
            this.isChoose2=true
            this.isOne2=false
          }
          if(res.data.data.download_limit!=0){
            this.isChoose3=false
            this.isOne3=true
          }else{
            this.isChoose3=true
            this.isOne3=false
          }
          if(res.data.data.is_vaptcha==1){
            this.isChoose4=false
          }else{
            this.isChoose4=true
          }
        }, err => {
          // console.log(err)
        })
      }
    }
</script>
<style>
  .abnormalDivOne .el-switch__core {
    width: 60px !important;
  }
  .abnormalDivOne .el-switch{
    width: 60px !important;
    margin-left: 0px !important;
  }
</style>
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
  .newabnormalDivOne{
    width: 100%;
    height: auto;
    margin-left: 42px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #333333;
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
    margin-bottom: 30px;
  }

</style>
