<template>
  <div class="forget">
    <div class="login_title">
      <img src="../../../static/image/superSignature/mlogo.png" alt="">

      <div class="login_title_div">
        <router-link to="/" tag="p">首页 </router-link>
        <!--<p>关于我们</p>-->
      </div>
    </div>
    <div class="banner" style="background-image: url('../../../static/image/login/dengluditu.png')">
      <div class="loginDiv" style="background-image: url('../../../static/image/login/denglukuang.png')">
        <div v-show="xianshi"
             style="width:100%;display:flex;align-items:center;position: absolute;padding-left: 20px;font-size: 13px;color: red;margin-top: 0.5vw">
          <img src="../../../static/image/login/tishi.png" alt="">
          <p class="tishiXinxi" style="padding-left: 10px"></p>
        </div>
        <div  class="msgDiv">
          <div class="login_Input">
            <div class="phone_div" :class="{'borderColor':phoneNumberIcon}">
              <img v-if="phoneNumberIcon" src="../../../static/image/login/shouji_s.png" alt="">
              <img v-else src="../../../static/image/login/shouji.png" alt="">
              <input style="font-size: 15px" v-on:input="phoneNumberInput" type="text" placeholder="请输入手机号码" v-model="phoneNumber"
                     onkeyup="this.value=this.value.replace(/\D/g,'')"
                     onafterpaste="this.value=this.value.replace(/\D/g,'')">
            </div>
            <div class="verification_div" :class="{'borderColor':verificationNumberIcon}">
              <img v-if="verificationNumberIcon" src="../../../static/image/login/yanzheng_s.png" alt="">
              <img v-else src="../../../static/image/login/yanzhengma.png" alt="">
              <input v-on:input="verificationNumberInput" type="text" placeholder="请输入短信验证码" v-model="verificationNumber">
              <div v-if="daojiFlag3" @click="send" class="send ">{{yanMsg}}</div>
              <div v-else class="daojishi2" >{{countDown}}</div>

            </div>
            <div class="set_div" :class="{'borderColor':setPasswordIcon}">
              <img v-if="setPasswordIcon" src="../../../static/image/register/mima_s.png" alt="">
              <img v-else src="../../../static/image/register/mima_n.png" alt="">
              <input v-on:input="setPasswordInput" type="password" placeholder="设置6至20位登录密码" v-model="setPassword" >
            </div>
            <div class="password_div" :class="{'borderColor':passwordIcon}">
              <img v-if="passwordIcon" src="../../../static/image/register/mima_s.png" alt="">
              <img v-else src="../../../static/image/register/mima_n.png" alt="">
              <input v-on:input="passwordInput" type="password" placeholder="请再次输入登录密码" v-model="password" >
            </div>
          </div>
          <div class="login_state">
            <div class="login_state_div">
              <div class="login_state_small">
                <img @click="checklist" v-if="isCheck" src="../../../static/image/login/gouxuan1.png" alt="">
                <img v-else @click="noChecklist" src="../../../static/image/login/gouxuan2.png" alt="">
                <p>勾选同意</p>
              </div>
              <p class="agreement">《用户服务协议》</p>
            </div>
          </div>
          <div class="loginBtn">
            <div @click="modify" style="background-image: url('../../../static/image/login/dengluanniu.png')">
              <p>确认修改</p>
            </div>
          </div>
        </div>



      </div>
    </div>
    <Bfooter></Bfooter>
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import Bfooter from '../component/footer'
  import  axios from 'axios'
  import qs from 'qs'
  export default {
    name: "forget",
    data() {
      return {
        phoneNumber: '',//手机号码
        verificationNumber:'',//验证码
        setPassword:'',//密码
        password:'',//确认登录密码
        phoneNumberIcon:false,
        verificationNumberIcon:false,
        setPasswordIcon:false,
        passwordIcon:false,
        isState: true,
        isCheck: true,
        isA:true,
        isB:false,
        xianshi:false,
        daojiFlag3:true,
        yanMsg:"发送验证码",
        countDown:''
      }
    },
    components: {
      Bfooter
    },
    methods: {
      /*手机号码输入框聚焦事件*/
      phoneNumberInput(){
        this.xianshi=false
        if(this.phoneNumber==''){
          this.phoneNumberIcon=false
        }else{
          this.phoneNumberIcon=true
        }
      },
      /*验证码输入框聚焦事件*/
      verificationNumberInput(){
        this.xianshi=false
        if(this.verificationNumber==''){
          this.verificationNumberIcon=false
        }else{
          this.verificationNumberIcon=true
        }
      },
      /*密码输入框聚焦事件*/
      setPasswordInput(){
        this.xianshi=false
        if(this.setPassword==''){
          this.setPasswordIcon=false
        }else{
          this.setPasswordIcon=true
        }
      },
      /*确认密码输入框聚焦事件*/
      passwordInput(){
        this.xianshi=false
        if(this.password==''){
          this.passwordIcon=false
        }else{
          this.passwordIcon=true
        }
      },
      /*发送验证码倒计时*/
      send(){
        if(this.phoneNumber!=''){
          var timeClock2;
          var timer_num = 60;
          var that=this
          timeClock2 = setInterval(function() {
            timer_num--;
            that.daojiFlag3=false
            that.countDown=timer_num+'秒'
            if(timer_num == 0) {
              clearInterval(timeClock2);
              that.daojiFlag3=true
              that.yanMsg='重新发送'
            }
          }, 1000)
          let f={
            mobile:this.phoneNumber,
            event:'resetpwd'
          }
          let config = {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
          };
          axios.post(BASE_URL+'/api/sms/send',qs.stringify(f),config).then(res => {
            console.log(res.data)
            if(timer_num == 0){
              clearInterval(timeClock2);
            }
          }, err => {
            console.log(err)
          })
        }
      },
      checklist() {
        this.isCheck = false
        //alert("勾选了")
      },
      noChecklist() {
        this.isCheck = true
       // alert("取消勾选了")
      },
      modify(){
        if(this.isCheck==true){
          this.xianshi = true
          $(".tishiXinxi").html('请勾选用户服务协议')
        }else{
          let f={
            mobile:this.phoneNumber,
            captcha:this.verificationNumber,
            password:this.setPassword,
            repassword:this.password
          }
          let config = {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
          };
          axios.post(BASE_URL+'/api/User/resetpwd',qs.stringify(f),config).then(res => {
            if(res.data.msg=='用户名不能为空'){
              this.xianshi=true
              $(".tishiXinxi").html('用户名不能为空')
            }else if(res.data.msg=='用户名必须4-20个字符'){
              this.xianshi=true
              $(".tishiXinxi").html('用户名必须4-20个字符')
            }else if(res.data.msg=='手机号码不能为空'){
              this.xianshi=true
              $(".tishiXinxi").html('手机号码不能为空')
            }else if(res.data.msg=='验证码不能为空'){
              this.xianshi=true
              $(".tishiXinxi").html('验证码不能为空')
            }else if(res.data.msg=='手机格式不正确'){
              this.xianshi=true
              $(".tishiXinxi").html(' 手机格式不正确')
            }else if(res.data.msg=='密码不能为空'){
              this.xianshi=true
              $(".tishiXinxi").html('密码不能为空')
            }else if(res.data.msg=='密码必须6-20个字符'){
              this.xianshi=true
              $(".tishiXinxi").html('密码必须6-20个字符')
            }else if(res.data.msg=='确认密码不能为空'){
              this.xianshi=true
              $(".tishiXinxi").html('确认密码不能为空')
            }else if(res.data.msg=='两次密码不一致'){
              this.xianshi=true
              $(".tishiXinxi").html('两次密码不一致')
            }else if(res.data.msg=='User not found'){
              this.xianshi=true
              $(".tishiXinxi").html('没有找到该用户信息')
            }
            if(res.data.code==200){
              this.$Modal.success({
                title: '成功',
                content: '修改成功',
                onOk: () => {
                  this.$router.push({
                    path: '/login'
                  })
                }
              });
            }


            console.log(res.data)

          }, err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .forget {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .login_title {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .login_title img {
    width: 143px;
    height: 39px;
    margin-left: 18.8vw;
  }



  .login_title_div {
    display: flex;
    font-size: 16px;
    color: #999999;
    margin-left: 45vw;
  }

  .login_title_div p:nth-child(1) {
    width: 56px;
    height: 30px;
    /*background-color: #06B2B6;*/
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    /*border-radius: 5px;*/
    cursor: pointer;
  }

  .login_title_div p:nth-child(2) {
    margin-left: 20px;
    width: 56px;
    height: 30px;
    /*background-color: white;*/
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    /*border-radius: 5px;*/
    cursor: pointer;
  }

  .banner {
    width: 100%;
    height: 75%;
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .loginDiv {
    width: 334px;
    height: 417px;
    position: absolute;
    right: 20%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }





  .loginDiv_One div {
    height: 15px;
    border: 1px solid #DCDCDC;
  }

  .login_Input {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    margin-top: 40px;
  }





  .phone_div {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }

  .phone_div img {
    width: 15px;
    height: 23px;
    margin-left: 20px;
  }

  .phone_div input {
    width: 90%;
    height: 40px;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }
  .verification_div{
    width:300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }
  .verification_div img {
    width: 18px;
    height: 22px;
    margin-left: 20px;
  }

  .verification_div input {
    width: 90%;
    height: 40px;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }
  .set_div{
    width: 300px;
    height:40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }
  .set_div img {
    width: 19px;
    height: 22px;
    margin-left: 20px;
  }

  .set_div input {
    width: 90%;
    height: 40px;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }
  .password_div{
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 15px auto 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }
  .password_div img {
    width: 19px;
    height: 22px;
    margin-left: 20px;
  }

  .password_div input {
    width: 90%;
    height:40px;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #999999;
    font-size: 15px;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  .send,.daojishi2 {
    width: 200px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #333333;
    font-size: 15px;
    margin-left: 20px;
    cursor: pointer;
    font-family: "MicrosoftYaHei";

    border-left: 1px solid #E5E5E5;
  }

  .login_state {
    width: 100%;
    margin-top: 26px;
    font-size: 15px;
  }

  .login_state_div {
    width: 90%;
    margin: 0 auto;
    display: flex;

  }

  .login_state_small p {
    margin-left: 0.8vw;
    color: #999999;
    font-family: 'MicrosoftYaHei';
  }

  .login_state_div img {
    width: 19px;
    height: 19px;
    margin-left: 0.5vw;
  }

  .login_state_small {
    display: flex;
  }

  .agreement {
    color: #333333;
  }

  .loginBtn {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
  }

  .loginBtn div {
    width: 300px;
    height: 50px;
    background-size: 100% 50px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 18px;
  }




  .isColor {
    color: #06B2B6;

  }
  .borderColor{
    border: 1px solid #06B2B6;
  }
  .el-input__inner{
    font-size: 15px !important;
  }
</style>
