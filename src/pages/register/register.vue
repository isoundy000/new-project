<template>
  <div class="register">
    <div class="login_title">
      <img src="../../../static/image/superSignature/mumuunlogo.png" alt="">

      <div class="login_title_div">
        <router-link to="/" tag="p">首页</router-link>
        <p>关于我们</p>
      </div>
    </div>
    <div class="banner" style="background-image: url('../../../static/image/login/dengluditu.png')">
      <div class="loginDiv" style="background-image: url('../../../static/image/login/denglukuang.png')">
        <div v-show="xianshi"
             style="width:20%;display:flex;align-items:center;position: absolute;padding-left: 20px;font-size: 1.1vw;color: red;margin-top: 0.5vw">
          <img src="../../../static/image/login/tishi.png" alt="">
          <p class="tishiXinxi" style="padding-left: 10px"></p>
        </div>
        <div class="msgDiv">
          <div class="login_Input">
            <div class="phone_div" :class="{'borderColor':phoneNumberIcon}">
              <div class="img_div">
                <img v-if="phoneNumberIcon" src="../../../static/image/login/shouji_s.png" alt="">
                <img v-else src="../../../static/image/login/shouji.png" alt="">
              </div>
              <input v-on:input="phoneNumberInput" type="text" placeholder="请输入手机号码" v-model="phoneNumber"
                     onkeyup="this.value=this.value.replace(/\D/g,'')"
                     onafterpaste="this.value=this.value.replace(/\D/g,'')">
            </div>
            <div class="verification_div" :class="{'borderColor':verificationNumberIcon}">
              <div class="img_div">
                <img v-if="verificationNumberIcon" src="../../../static/image/login/yanzheng_s.png" alt="">
                <img v-else src="../../../static/image/login/yanzhengma.png" alt="">
              </div>
              <input v-on:input="verificationNumberInput" type="text" placeholder="请输入短信验证码"
                     v-model="verificationNumber">
              <div @click="send" class="send ">发送验证码</div>
              <div class="daojishi3" style="display: none"></div>
            </div>
            <div class="set_div" :class="{'borderColor':setPasswordIcon}">
              <div class="img_div">
                <img v-if="setPasswordIcon" src="../../../static/image/register/mima_s.png" alt="">
                <img v-else src="../../../static/image/register/mima_n.png" alt="">
              </div>
              <input v-on:input="setPasswordInput" type="password" placeholder="设置6至20位登录密码" v-model="setPassword"
                     onkeyup="this.value=this.value.replace(/\D/g,'')"
                     onafterpaste="this.value=this.value.replace(/\D/g,'')">
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
          <div class="loginBtn" @click="registerBtn">
            <div style="background-image: url('../../../static/image/login/dengluanniu.png')">
              <p>注册</p>
            </div>
          </div>
          <div class="login_footer">
            <p>已有账号，<span @click="login">直接登录</span></p>
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
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: "register",
    data() {
      return {
        userName: '',//用户名称
        phoneNumber: '',//手机号码
        verificationNumber: '',//验证码
        setPassword: '',//密码
        userNameIcon: false,
        phoneNumberIcon: false,
        verificationNumberIcon: false,
        setPasswordIcon: false,

        isState: true,
        isCheck: true,
        isA: true,
        isB: false,
        xianshi: false
      }
    },
    components: {
      Bfooter
    },
    methods: {
      /*用户输入框聚焦事件*/
      // userNameInput() {
      //   this.xianshi = false
      //   if (this.userName == '') {
      //     this.userNameIcon = false
      //   } else {
      //     this.userNameIcon = true
      //   }
      // },
      /*手机号码输入框聚焦事件*/
      phoneNumberInput() {
        this.xianshi = false
        if (this.phoneNumber == '') {
          this.phoneNumberIcon = false
        } else {
          this.phoneNumberIcon = true
        }
      },
      /*验证码输入框聚焦事件*/
      verificationNumberInput() {
        this.xianshi = false
        if (this.verificationNumber == '') {
          this.verificationNumberIcon = false
        } else {
          this.verificationNumberIcon = true
        }
      },
      /*密码输入框聚焦事件*/
      setPasswordInput() {
        this.xianshi = false
        if (this.setPassword == '') {
          this.setPasswordIcon = false
        } else {
          this.setPasswordIcon = true
        }
      },
      /*发送验证码倒计时*/
      send() {
        var timeClock3;
        var timer_num = 60;
        timeClock3 = setInterval(function () {
          timer_num--;
          $(".send").hide()
          $(".daojishi3").show()
          $('.daojishi3').html(timer_num + '秒');
          if (timer_num == 0) {
            clearInterval(timeClock3);
            $(".send").show()
            $(".daojishi3").hide()
            $('.send').html('重新发送');
          }
        }, 1000)
        let data = {
          mobile: this.phoneNumber,
          event: 'register'
        }

        axios.post(BASE_URL+'/api/sms/send', qs.stringify(data)).then(res => {
          console.log(res)
          if (res.data.msg == '已被注册') {
            clearInterval(timeClock3);
            this.xianshi = true
            $(".tishiXinxi").html('手机号码已经被注册')
          }
        }, err => {
          console.log(err)
        })
      },
      checklist() {
        this.isCheck = false
        alert("勾选了")
      },
      noChecklist() {
        this.isCheck = true
        alert("取消勾选了")
      },
      registerBtn() {
        let f = {
          username: this.userName,
          mobile: this.phoneNumber,
          captcha: this.verificationNumber,
          password: this.setPassword
        }
        let config = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        };
        axios.post(BASE_URL+'/api/User/register', qs.stringify(f), config).then(res => {
          if (res.data.msg == '用户名不能为空') {
            this.xianshi = true
            $(".tishiXinxi").html('用户名不能为空')
          } else if (res.data.msg == '用户名必须4-20个字符') {
            this.xianshi = true
            $(".tishiXinxi").html('用户名必须4-20个字符')
          } else if (res.data.msg == '手机号码不能为空') {
            this.xianshi = true
            $(".tishiXinxi").html('手机号码不能为空')
          } else if (res.data.msg == '验证码不能为空') {
            this.xianshi = true
            $(".tishiXinxi").html('验证码不能为空')
          } else if (res.data.msg == '手机格式不正确') {
            this.xianshi = true
            $(".tishiXinxi").html(' 手机格式不正确')
          } else if (res.data.msg == '密码不能为空') {
            this.xianshi = true
            $(".tishiXinxi").html('密码不能为空')
          } else if (res.data.msg == '密码必须6-20个字符') {
            this.xianshi = true
            $(".tishiXinxi").html('密码必须6-20个字符')
          }
          console.log(res.data)
          this.$router.push({
            path: '/login'
          })
        }, err => {
          console.log(err)
        })
      },
      login() {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

<style scoped>
  .register {
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
    width: 99px;
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

    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .loginDiv {
    width: 22%;
    height: 77%;
    margin-left: 55vw;
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

  .user_div {
    width: 90%;
    height: 2.5vw;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;

  }

  .img_div {
    width: 30px;
    height: 23px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
  }

  .user_div img {
    width: 20px;
    height: 22px;
  }

  .user_div input {
    width: 90%;
    height: 2.5vw;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .phone_div {
    width: 90%;
    height: 2.5vw;
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

  }

  .phone_div input {
    width: 90%;
    height: 2.5vw;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .verification_div {
    width: 90%;
    height: 2.5vw;
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
  }

  .verification_div input {
    width: 50%;
    height: 2.5vw;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .set_div {
    width: 90%;
    height: 2.5vw;
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
  }

  .set_div input {
    width: 90%;
    height: 2.5vw;
    border: 0;
    font-size: 1vw;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #999999;
    font-size: 1vw;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  .send, .daojishi3 {
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #333333;
    font-size: 1vw;
    margin-left: 20px;
    cursor: pointer;
    font-family: "MicrosoftYaHei";

    border-left: 1px solid #E5E5E5;
  }

  .login_state {
    width: 100%;
    margin-top: 26px;
    font-size: 1vw;
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
    height: 4vw;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
  }

  .loginBtn div {
    width: 90%;
    height: 4vw;
    background-size: 100% 4vw;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 4vw;
    color: white;
    font-size: 1.1vw;
  }

  .login_footer {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.8vw;
    margin-top: 20px;
    cursor: pointer;
  }

  .login_footer span {
    color: #06B2B6;
  }

  .isColor {
    color: #06B2B6;

  }

  .borderColor {
    border: 1px solid #06B2B6;
  }
</style>
