<template>
  <div>
    <Modal
      v-model="modal1"
      title="修改密码"
      :mask-closable="false"
      class="motai"
    >
      <div class="demo-input-suffix">
        <p>旧密码：</p>
        <el-input v-model="usedPass" placeholder="请输入旧密码"></el-input>
      </div>
      <div class="demo-input-suffix">
        <p>新密码：</p>
        <el-input v-model="newPass" placeholder="请输入新密码"></el-input>
      </div>
      <div class="demo-input-suffix">
        <p>确认密码：</p>
        <el-input v-model="confirmPass" placeholder="请确认密码"></el-input>
      </div>

      <div @click="ok" class="queOk" slot="footer" >确认</div>
    </Modal>
    <div class="Bheader">
      <div class="login_title">
        <div class="login_title_first">
          <img class="login_title_img" src="../../../static/image/superSignature/hplogo@2x.png" alt="">
        </div>
        <div class="title login_title_second">
          <p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"
             @mouseenter="enter(index)"
             @mouseleave="leave(index)">{{list.msg}}</p>
        </div>

        <div v-if="isLogin" class="login_title_div login_title_third">
          <p @click="loginBtn">登录</p>
          <p @click="registerBtn">注册</p>
        </div>


        <div v-else class="alreadyLogin login_title_third">

          <div @click="myappBtn" class="myappBtn" >
            <p>我的应用</p>
          </div>
          <div style="width: 100px">
            <el-dropdown placement=top>
            <span class="el-dropdown-link">
              <p class="accountNumber">{{userName}}</p>
            </span>
              <el-dropdown-menu placement=top  class="xiala" slot="dropdown">
                <el-dropdown-item @click.native="realName">实名认证</el-dropdown-item>
                <el-dropdown-item @click.native="recharge">充值</el-dropdown-item>
                <el-dropdown-item>我的余额:￥{{money}}</el-dropdown-item>
                <el-dropdown-item @click.native="modify">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="signOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <img class="headUrl" src="../../../static/image/superSignature/touxiang@2x.png" alt="">

        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  export default {
    name: "Bheader",
    data() {
      return {
        usedPass:'',
        newPass:'',
        confirmPass:'',
        modal1:false,
        title: [
          {
            msg: '超级签名',
            isclass: false
          },
          {
            msg: '私有池',
            isclass: false
          },
          {
            msg: 'TF签名',
            isclass: false
          },
          // {
          //   msg: '专属签名',
          //   isclass: false
          // },
          {
            msg: '企业签名',
            isclass: false
          },
          {
            msg: '网页封装',
            isclass: false
          },
          {
            msg: '购买服务',
            isclass: false
          },
          {
            msg: '发布应用',
            isclass: false
          }
        ],
        isLogin:true,
        clickIndex:0,
        money:'',
        userName:'',

      }
    },
    mounted(){
      if(this.$store.state.Authorization=='' || this.$store.state.Authorization==null){
        this.isLogin=true
        this.title[0].isclass=true
      }else{
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.get(BASE_URL+'/api/user/index',config).then(res => {
          this.money=res.data.data.money
          this.userName=res.data.data.username
          // console.log(res.data.data)
          localStorage.setItem('balance', res.data.data.money);
          localStorage.setItem('userName', res.data.data.username);
        }, err => {
          // console.log(err)
        })
        this.isLogin=false
        this.title[localStorage.getItem('clickIndex')].isclass=true
      }
    },
    methods: {
      /*顶部标题点击事件*/
      titleName(index) {
        this.title.forEach((item)=>{
          item.isclass=false
        })
        // this.title[index].isclass=true
        this.clickIndex=index
        this.$store.commit('set_clickIndex',this.clickIndex)
        // alert(index)
       //  alert(this.clickIndex)
        if(this.$store.state.Authorization=='' || this.$store.state.Authorization==null){
          this.$router.push({
            path:'/login'
          })
        }else{
          if (index == 0) {
            this.$router.push({
              name:'superSignatureAread'
            })
          }else if (index == 1) {
            this.$router.push({
              name:'privatePool'
            })
          } else if (index == 2) {
            this.$router.push({
              name:'tf'
            })
          } else if (index == 3) {
            this.$router.push({
              name:'enterprise'
            })
              // this.$store.commit('set_clickIndex',4)
          } else if (index == 4) {
            this.$router.push({
              path:'/encapsulationindex'
            })
             // this.$store.commit('set_clickIndex',5)
          }else if (index == 5) {
            // alert("点击了购买服务")
            this.$router.push({
              name:'myApp',
              params:{
                newid: 0
              }
            })
            this.$store.commit('set_clickIndex',0)
          } else if (index == 6) {
            this.$store.commit('set_clickIndex',0)
            this.title.forEach((item)=>{
              item.isclass=false
            })
            const h = this.$createElement;
            this.$msgbox({
              message: h('p', null, [
                h('p', { style: ' text-align: center;font-weight:bold' }, '服务使用条款 '),
                h('p', { style: 'color: grey;margin-top:30px' }, '请在使用iOS 超级签名服务前，仔细阅读并充分理解以下内容及条款：'),
                h('p', { style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;' }, '您知晓并同意，由我们提供软件签名的技术，您购买此服务是用于您的 App 的内部测试之用途，且需符合苹果iOS 超级签名的所有规定，否则，因此而产生的法律后果由您自行全部承担；'),
                h('p', { style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;' }, '您知晓并同意，苹果iOS 超级签名因受到苹果政策影响，在未来可能会存在被苹果撤销从而导致应用出现无法安装、或已经安装的应用无法打开等情况，您同意并愿意独立承担该风险以及该风险导致的后续一切损失，并接受我们在后续可能为此而做出任何补偿等措施；'),
                h('p', { style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;' }, '您知晓并同意，我们提供签名技术来供您下载您的应用，因您对外分发导致App被滥用、恶意下载、刷量而造成的损失，我们仅提供必要的数据支持和反作弊服务，您同意并愿意独立承担因对外分发和推广而导致的风险和风险后续的一切损失。'),
                h('p', { style: 'color: grey' }, '您已仔细阅读并同意《超级签名服务协议》中的全部内容。'),
                h('p', { style: 'color: grey' }, '点击“我同意”代表您已仔细阅读并同意以上所有内容'),
              ]),
              showCancelButton: true,
              closeOnClickModal:false,
              confirmButtonText: '我同意',
              cancelButtonText: '不同意',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  done();
                  // this.title[index].isclass=true
                  this.$router.push({
                    name:'myApp',
                    params: {
                      newid: 2
                    }
                  })

                } else {
                  done();
                  // this.title[0].isclass=true
                  this.$router.push({
                    path:'/superSignatureAread'
                  })

                }
              }
            })
          }
        }
      },
      /*登录点击事件*/
      loginBtn() {
        this.$router.push({
          path: '/login'
        })
      },
      /*注册点击事件*/
      registerBtn() {
        this.$router.push({
          path: '/register'
        })
      },
      /*顶部标题移入效果*/
      enter(index) {
        for(var i=0;i<this.title.length;i++){
          this.title[i].isclass=false
        }
        this.title[index].isclass=true
      },
      /*顶部标题移出效果*/
      leave() {
        for(var i=0;i<this.title.length;i++){
          this.title[i].isclass=false
        }
        this.title[localStorage.getItem('clickIndex')].isclass=true
      },
      myappBtn(){
        this.$store.commit('set_clickIndex',0)
        this.$router.push({
          path: '/myApp'
        })
      },
      realName(){
        this.$store.commit('set_clickIndex',0)
        this.$router.push({
          path:'/realName'
        })
      },
      /*修改密码*/
      modify(){
        this.modal1=true
      },
      recharge(){
        this.$store.commit('set_clickIndex',0)
        this.$router.push({
          name:'myApp',
          params:{
            newid: 0
          }
        })
      },
      /*退出*/
      signOut(){
        var token=localStorage.getItem('Authorization');
        this.$store.commit('del_token',token)
        this.$router.push({
          path:'/'
        })
      },
      ok(){
        let data = {
          oldpwd: this.usedPass,
          pwd:this.newPass,
          repwd:this.confirmPass
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/user/changePwd', qs.stringify(data), config).then(res => {
          // console.log(res.data.data)

          if(res.data.code==0){
            this.$message.error(res.data.msg);
          }else{
            var token=localStorage.getItem('Authorization');
            this.$store.commit('del_token',token)
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            this.modal1=false
            this.$router.push({
              path:'/login'
            })
          }

        }, err => {
          // console.log(err)
        })


      },

    },


  }
</script>

<style scoped>


  .isColor {
    color: #2F82FF;
    border-bottom: 2px solid #2F82FF;
  }

  .login_title_div {
    display: flex;
    font-size: 16px;
    color: #323232;
    justify-content: center;
  }

  .login_title_div p:nth-child(1) {
    width: 56px;
    height: 30px;
    background-color: #2F82FF;
    font-size: 14px;
    color: white;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .login_title_div p:nth-child(2) {
    margin-left: 20px;
    width: 56px;
    height: 30px;
    background-color: white;
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  }

  .alreadyLogin {
    width: 300px;
    height: 30px;
    margin-top: -5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .myappBtn {
    width: 118px;
    height: 34px;
    background-color:#2F82FF ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
  }

  .tixingBtn {
    width: 18px;
    height: 21px;

    cursor: pointer;
  }

  .accountNumber {
    color: #999999;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }

  .headUrl {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .el-badge {
    width: 30px;
    height: 30px;
    position: relative;
    /* vertical-align: middle; */
    /* display: inline-block; */
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
  }
  .xiala{
    width: 180px;
    margin-left: 30px;
  }
  .login_title {
    width: 80%;
    height: 80px;
    display: flex;
    margin: 0 auto;
    /*justify-content: space-around;*/
    align-items: center;
  }

  .login_title .login_title_img {
    width: 143px;
    height: 39px;

    /*margin-left: 18.8vw;*/
  }

  .title {
    width: 500px;
    /*margin-left: 5vw;*/
    list-style: none;
    display: inline-flex;
    justify-content: space-around;
  }

  .title p:nth-child(1) {

    /*color: #06B2B6;*/
    height: 30px;
    line-height: 30px;
    text-align: center;

  }

  .title p {

    cursor: pointer;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    /*border-bottom: 2px solid transparent;*/
  }

  .isColor {
    color: #2F82FF;
    border-bottom: 2px solid #2F82FF;
  }

  .login_title_div {
    display: flex;
    font-size: 16px;
    color: #323232;
    /*margin-left: 6vw;*/
  }

  .login_title_div p:nth-child(1) {
    width: 56px;
    height: 30px;
    background-color: #2F82FF;
    font-size: 14px;
    color: white;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .login_title_div p:nth-child(2) {
    margin-left: 20px;
    width: 56px;
    height: 30px;
    background-color: white;
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  }
  .login_title_first{
    width: 20%;
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .login_title_second{
    width: 55%;
    height: 80px;
    display: flex;
    align-items: center;
  }
  .login_title_third{
    width: 25%;
    height: 80px;
    display: flex;
    align-items: center;
  }
  .queOk{
    width: 60px;
    background-color: #2F82FF;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    border-radius: 10px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }
  .demo-input-suffix{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .demo-input-suffix p{
    width: 85px;
    font-size: 15px;
    text-align: center;
  }
  .demo-input-suffix .el-input{
    width: 50%;
  }

</style>
