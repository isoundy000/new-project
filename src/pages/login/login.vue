<template>
  <div class="login">
    <div class="login_title">
      <img src="../../../static/image/superSignature/mumuunlogo.png" alt="">

      <div class="login_title_div">
        <router-link to="/" tag="p">首页 </router-link>
        <p>关于我们</p>
      </div>
    </div>
    <div class="banner" style="background-image: url('../../../static/image/login/dengluditu.png')">
      <div class="loginDiv" style="background-image: url('../../../static/image/login/denglukuang.png')">
        <div class="loginDiv_One">
          <p @click="accountLogin"  :class="{'isColor':isA}" class="msg_login">账号登录</p>
          <div></div>
          <p @click="msgLogin"  :class="{'isColor':isB}" class="account_login">短信登录</p>
        </div>
        <div v-if="isState" class="msgDiv">
          <div class="tishi" v-if="isTishi">
            <div class="tishiDiv">
              <img src="../../../static/image/login/tishi.png" alt="">
              <p class="textTishi">用户名或验证码错误</p>
              <!--<p >用户名或验证码不能为空</p>-->
            </div>

          </div>
          <div class="login_Input">

            <div class="user_div" :class="{'borderColor':phoneIcon}">
              <img v-if="phoneIcon" src="../../../static/image/login/shouji_s.png" alt="">
              <img v-else src="../../../static/image/login/shouji.png" alt="">
              <input v-on:input="phoneInput" type="text"  placeholder="请输入手机号" v-model="phonenumber"
                     onkeyup="this.value=this.value.replace(/\D/g,'')"
                     onafterpaste="this.value=this.value.replace(/\D/g,'')">
            </div>
            <div class="password_div" :class="{'borderColor':yanzIcon}">
              <img v-if="yanzIcon" src="../../../static/image/login/yanzheng_s.png" alt="">
              <img v-else src="../../../static/image/login/yanzhengma.png" alt="">
              <input v-on:input="yanzInput" type="text" placeholder="请输入短信验证码" v-model="verificationCode">
              <div v-if="daojiFlag" @click="send" class="send">{{yanMsg}}</div>
              <div v-else class="daojishi1">{{countDown}}</div>
            </div>
          </div>
          <div class="login_state">
            <div class="login_state_div">
              <div class="login_state_small">
                <!--<img @click="checklist" v-if="isCheck" src="../../../static/image/login/gouxuan1.png" alt="">-->
                <!--<img v-else @click="noChecklist" src="../../../static/image/login/gouxuan2.png" alt="">-->
                <!--<p>记住登录状态</p>-->
              </div>
              <p class="forget" @click="forget">忘记密码？</p>
            </div>
          </div>
          <div @click="login" class="loginBtn">
            <div style="background-image: url('../../../static/image/login/dengluanniu.png')">
              <p>登录</p>
            </div>
          </div>
          <div class="login_footer">
            <p>没有账号？<span @click="register">去注册</span></p>
          </div>
        </div>
        <div v-else class="accountDiv">
          <div class="tishi" v-if="isTishi1">
            <div class="tishiDiv">
              <img src="../../../static/image/login/tishi.png" alt="">
              <p class="textTishi1" style="color: red">{{tishi1}}</p>
            </div>

          </div>
          <div class="login_Input">
            <div class="user_div" :class="{'borderColor':accountIcon}">
              <img v-if="accountIcon" src="../../../static/image/login/shouji_s.png" alt="">
              <img v-else src="../../../static/image/login/shouji.png" alt="">
              <input class="login-form-input" v-on:input="accountInput" type="text" autocomplete="off" placeholder="请输入账户/手机/邮箱" v-model="account">
            </div>
            <div class="password_div" :class="{'borderColor':passwordIcon}">
              <img v-if="passwordIcon" src="../../../static/image/register/mima_s.png" alt="">
              <img v-else src="../../../static/image/register/mima_n.png" alt="">
              <input v-on:input="passwordInput" type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="math_div" :class="{'borderColor':mathInputIcon}">
              <input v-on:input="mathInput" type="text" placeholder="请输入验证码" v-model="mathvalue">
              <img @click="mathImg" :src="src" alt="">
            </div>
          </div>
          <div class="login_state">
            <div class="login_state_div">
              <div class="login_state_small">
                <img @click="checklist" v-if="isCheck" src="../../../static/image/login/gouxuan1.png" alt="">
                <img v-else @click="noChecklist" src="../../../static/image/login/gouxuan2.png" alt="">
                <p>记住登录状态</p>
              </div>
              <p class="forget" @click="forget">忘记密码？</p>
            </div>
          </div>
          <div class="loginBtn" @click="accountLoginBtn">
            <div style="background-image: url('../../../static/image/login/dengluanniu.png')">
              <p>登录</p>
            </div>
          </div>
          <div class="login_footer">
            <p>没有账号？<span @click="register">去注册</span></p>
          </div>
        </div>


      </div>
    </div>
    <Bfooter></Bfooter>
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  import { mapMutations } from 'vuex';
  import Bfooter from '../component/footer'
  // import {send} from "../../api";
  export default {
    name: "login",
    data() {
      return {
        phonenumber: '',//电话
        verificationCode: '',//验证码
        account:'',//账户、手机、邮箱
        password:'',//密码
        phoneIcon:false,//绿色手机icon
        yanzIcon:false,//绿色验证码icon
        accountIcon:false,//绿色账号手机icon
        passwordIcon:false,//绿色账号密码icon
        mathInputIcon:false,
        isState: false,//显示短信登录还是账号登录界面，默认是短信登录
        isCheck: true,//复选框的选择，默认是不选中
        isTishi:false,//短信登录里面提示
        isTishi1:false,//账号登录里面提示
        tishi1:'',
        isA:true,//点击短信登录的字体颜色，默认是true，是绿色
        isB:false,//点击账号登录的字体颜色，默认是false，是黑色
        userToken:'',
        funTime:'',
        mathvalue:'',
        src:'',
        daojiFlag:true,
        yanMsg:"发送验证码",
        countDown:'',//倒计时时间
        codeId:''//后台传的base码id
      }
    },
    components: {
      Bfooter
    },
    methods: {
      ...mapMutations(['changeLogin']),
      /*短信登录title*/
      msgLogin(){
        /*清空输入框数据*/
        // this.phonenumber=''
        this.verificationCode=''
        this.account=''
        this.password=''
        /*验证码和手机border颜色和icon的颜色清空*/
        this.yanzIcon=false
        this.phoneIcon=false

        this.isTishi=false
        this.isTishi1=false
        this.isState=true
        this.isA=false
        this.isB=true
      },
      /*账号登录title*/
      accountLogin(){
        /*清空输入框数据*/
        // this.phonenumber=''
        this.verificationCode=''
        this.account=''
        this.password=''

        /*验证码和手机border颜色和icon的颜色清空*/
        this.accountIcon=false
        this.passwordIcon=false

        this.isTishi=false
        this.isTishi1=false
        this.isState=false
        this.isB=false
        this.isA=true
      },
      /*短信登录里面手机号输入框聚焦事件*/
      phoneInput(){
        this.isTishi=false
        if(this.phonenumber==''){
          this.phoneIcon=false
        }else{
          this.phoneIcon=true
        }
      },
      /*短信登录里面验证码输入框聚焦事件*/
      yanzInput(){
        this.isTishi=false
        if(this.verificationCode==''){
          this.yanzIcon=false
        }else{
          this.yanzIcon=true
        }
      },
      /*账号登录里面手机号输入框聚焦事件*/
      accountInput(){
        this.isTishi1=false
        if(this.account==''){
          this.accountIcon=false
        }else{
          this.accountIcon=true
        }
      },
      /*账号登录里面密码输入框聚焦事件*/
      passwordInput(){
        this.isTishi1=false
        if(this.password==''){
          this.passwordIcon=false
        }else{
          this.passwordIcon=true
        }
      },
      /*数字验证码输入框事件*/
      mathInput(){
        this.isTishi1=false
        if(this.mathvalue==''){
          this.mathInputIcon=false
        }else{
          this.mathInputIcon=true
        }
      },
      /*发送验证码倒计时*/
       send(){
        var that=this
        var timeClock1;
        var timer_num = 60;
        timeClock1 = setInterval(function() {
          timer_num--;
          that.daojiFlag=false
          that.countDown=timer_num+'秒'
          if(timer_num == 0) {
            clearInterval(timeClock1);
            that.daojiFlag=true
            that.yanMsg='重新发送'
          }
        }, 1000)
         let f={
           mobile:Number(this.phonenumber),
           event:'mobilelogin'
         }
         let config = {
           headers:{'Content-Type':'application/x-www-form-urlencoded'}
         };
          axios.post(BASE_URL+'/api/sms/send',qs.stringify(f),config).then(res => {
            console.log(res.data)
          }, err => {
            console.log(err)
          })
      },

      /*数字验证码*/
      mathImg(){
        axios.get(BASE_URL+'/api/index/verify').then(res => {
          console.log(res.data.data.id)
          this.src = 'data:image/png;base64,'+res.data.data.data
          this.codeId=res.data.data.id
          // alert(this.src)
        }, err => {
          console.log(err)
        })
      },

      /*由没选中变选中状态*/
      checklist() {
        this.isCheck = false
        localStorage.setItem('account',JSON.stringify(this.account))
        localStorage.setItem('password',JSON.stringify(this.password))
        localStorage.setItem('isCheck',JSON.stringify(this.isCheck))
       // alert("勾选了")
      },
      /*由选中变没选中状态*/
      noChecklist() {
        this.isCheck = true
        localStorage.setItem('isCheck',JSON.stringify(this.isCheck))
        localStorage.setItem('account',JSON.stringify(''))
        localStorage.setItem('password',JSON.stringify(''))
       // alert("取消勾选了")
      },
      /*短信登录按钮*/
      login(){
        /*账号或验证码为空*/
        let _this = this;
        if(this.phonenumber=='' || this.verificationCode==''){
            this.isTishi=true
           $(".textTishi").html('用户名或验证码不能为空')
        }else{
          this.isTishi=false
          let f={
            mobile:this.phonenumber,
            captcha:this.verificationCode
          }
          let config = {
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
          };
          axios.post(BASE_URL+'/api/user/mobilelogin',qs.stringify(f),config).then(res => {
            console.log(res.data)
            console.log(res.data.data.userinfo.token)
            _this.userToken =  res.data.data.userinfo.token;
            var balance= res.data.data.userinfo.money
            var username= res.data.data.userinfo.mobile
            if(res.data.code==0){
              this.isTishi=true
              $(".textTishi").html('验证码不正确')
            }else{
              this.$Modal.success({
                title: '成功',
                content: '登录成功',
                onOk: () => {
                  _this.changeLogin({ Authorization: _this.userToken });
                  this.$store.commit('set_money',balance)
                  this.$store.commit('set_userName',username)
                  this.$router.push({
                    path:'/superSignatureAread'
                  })
                }
              });


            }

          }, err => {
            console.log(err)
          })


        }
        /*账号或验证码错误*/

      },
      /*账号登录按钮*/
      accountLoginBtn(){
        /*账号或密码为空*/
        let data={
          account:this.account,
          password:this.password,
          captcha:this.mathvalue,
          code:this.codeId
        }
        axios.post(BASE_URL+'/api/user/login',qs.stringify(data))
          .then(res => {
          console.log(res.data)
          if(res.data.code==0){
            if(res.data.msg=='账户不正确'){
              this.isTishi1=true
              this.tishi1='账户不正确'
            }else if(res.data.msg=='验证码错误'){
              this.isTishi1=true
              this.tishi1='验证码不正确'
            }else if(res.data.msg=='密码不正确'){
              this.isTishi1=true
              this.tishi1='密码不正确'
            }
          }else{
            this.userToken =  res.data.data.token;
            var balance= res.data.data.money
            var username= res.data.data.mobile
            this.$Modal.success({
              title: '成功',
              content: '登录成功',
              onOk: () => {
                this.changeLogin({ Authorization: this.userToken });
                this.$store.commit('set_count',100)
                this.$store.commit('set_money',balance)
                this.$store.commit('set_userName',username)
                this.$router.push({
                  path:'/superSignatureAread'
                })
              }
            });
          }
        })
          .catch(err=>{
            console.log(err);
          })
        /*账号或密码错误*/
      },
      /*注册*/
      register(){
        this.$router.push({
          path: '/register'
        })
      },
      /*w忘记密码*/
      forget(){
        this.$router.push({
          path: '/forget'
        })
      }
    },
    mounted(){
      /*获取验证码图片*/
      axios.get(BASE_URL+'/api/index/verify').then(res => {
        // console.log(res.data.data.id)
        this.src = 'data:image/png;base64,'+res.data.data.data
        this.codeId=res.data.data.id
      }, err => {
        console.log(err)
      })

      let checkState= JSON.parse(localStorage.getItem('isCheck'))
      let account= JSON.parse(localStorage.getItem('account'))
      let password= JSON.parse(localStorage.getItem('password'))

     // alert(checkState)
      if(checkState==false){
        this.isCheck=false
        this.accountIcon=true
        this.passwordIcon=true
        this.account=account
        this.password=password
      }else{
        this.phonenumber=''
        this.verificationCode=''
      }

    }
  }
</script>
<style>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;


  }
  .vertical-center-modal .ivu-modal{
    top: 0;
  }



</style>
<style scoped>
  *{

  }
  .login {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: 0 !important;
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
    position: relative;
  }

  .loginDiv {
    width: 334px;
    height: 417px;
    position: absolute;
    right: 20%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .loginDiv_One {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 17px;

    border-bottom: 1px solid #DCDCDC;
  }
.msgDiv,.accountDiv{
  position: relative;
}
  .msg_login {
    /*color: #06B2B6;*/
    font-weight: bold;
    cursor: pointer;
  }

  .account_login {
    color: #333333;
    font-weight: bold;
    cursor: pointer;
  }
.tishi{
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* margin-top: 20px; */
  top: -40px;
  position: absolute;
}
.tishiDiv{
  width: 90%;
  display: flex;
  align-items: center;
}
.tishiDiv img{
  width: 24px;
  height: 24px;
}
.tishiDiv p{
  font-size: 1.1vw;
  color: #FF0000;
  margin-left: 10px;
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
    margin-top:40px;
  }

  .user_div {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #DCDCDC;
    border-radius: 8px;
    box-sizing: content-box;
  }

  .user_div img {
    width: 15px;
    height: 23px;
    margin-left: 20px;
  }

  .user_div input {
    width: 90%;
    height:40px;
    border: 0;
    font-size: 15px;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }

  .password_div {
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
    width: 18px;
    height: 22px;
    margin-left: 20px;
  }

  .password_div input {
    width: 92%;
    height: 40px;
    border: 0;
    font-size: 15px;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }
.math_div{
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 15px auto 0 auto;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
  box-sizing: content-box;
}
  .math_div input {
    width: 60%;
    height: 40px;
    border: 0;
    font-size: 15px;
    padding-left: 20px;
    border-radius: 8px;
    outline: none;
  }
  .math_div img{
    width: 110px;
    height: 40px;
    margin-left: 10px;
  }
  input::-webkit-input-placeholder {
    color: #999999;
    font-size: 15px;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  .send,.daojishi1 {
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
    font-size: 1vw;
  }

  .login_state_div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    font-size: 15px;
    justify-content: space-between;
  }

  .login_state_small p {
    margin-left: 0.8vw;
    color: #666666;
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

  .forget {
    color: #278DFE;
    cursor: pointer;
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

  .login_footer {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.8vw;
    margin-top: 8px;
    cursor: pointer;
  }

  .login_footer span {
    color: #06B2B6;
  }
  .isColor {
    color: #06B2B6;

  }
  .borderColor{
    border: 1px solid #06B2B6;
  }

</style>

