<template>
  <div class="myApp">
    <div class="surveyHeader">
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
      <div class="login_title">
        <div class="login_title_first">
          <img @click="logoHome" class="login_title_img" src="../../../static/image/superSignature/hplogo@2x.png" alt="">
        </div>
        <div class="title login_title_second">
          <p @click="appClick(index,list.isclass)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass} ">{{list.msg}}</p>
        </div>
        <div class="alreadyLoginP login_title_third" >
            <div @click="goHome" class="myappBtn" >
              <p>返回首页</p>
            </div>
            <!--<el-badge :value="3" class="item">-->
              <!--<img class="tixingBtn" src="../../../static/image/superSignature/tixing@2x.png" alt="">-->
            <!--</el-badge>-->
            <div style="width: 100px;text-align: center">
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
    <router-view></router-view>

  </div>
</template>

<script>
  import surveyHeader from '../component/surveyHeader'
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  export default {
    name: "myApp",
    data() {
      return {
        modal1:false,
        usedPass:'',
        newPass:'',
        confirmPass:'',
        title: [
          {
            msg: '概况',
            isclass: true
          },
          {
            msg: '应用管理',
            isclass: false
          },
          {
            msg: '账单管理',
            isclass: false
          },
          {
            msg: '发布应用',
            isclass: false
          }
        ],
        money:'',
        userName:'',
        shoyiMoney:''
      }
    },

    mounted() {

      let config = {
        headers:{'token':localStorage.getItem('Authorization')}
      };
      axios.get(BASE_URL+'/api/user/index',config).then(res => {
        this.money=res.data.data.money
        this.userName=res.data.data.username
        this.shoyiMoney=res.data.data.balance
        // console.log(res.data.data)
        localStorage.setItem('balance', res.data.data.money);
        localStorage.setItem('shoyiMoney', res.data.data.balance);
        localStorage.setItem('userName', res.data.data.username);
      }, err => {
        // console.log(err)
      })
      if(this.$route.params.newid ==1){
        this.title[3].isclass=true
        this.title[0].isclass=false
        this.$router.push({
          name:'publishingApplications',
          params: {
            xianid: 1,
            display_name:this.$route.params.display_name,
            icon:this.$route.params.icon,
            ipa_data_bak:this.$route.params.ipa_data_bak,
            bundle_name:this.$route.params.bundle_name,
            package_name:this.$route.params.package_name,
            version_code:this.$route.params.version_code,
            version_name:this.$route.params.version_name,
            domain:this.$route.params.domain,
            path:this.$route.params.path,
            filesize:this.$route.params.filesize
          }
        })
      }else if(this.$route.params.newid ==2){
        this.title[3].isclass=true
        this.title[0].isclass=false
        this.$router.push({
          name:'publishingApplications',
          params: {
            xianid: 2,
            ipa_data_bak:this.$route.params.ipa_data_bak,
            display_name:this.$route.params.display_name,
            icon:this.$route.params.icon,
            bundle_name:this.$route.params.bundle_name,
            package_name:this.$route.params.package_name,
            version_code:this.$route.params.version_code,
            version_name:this.$route.params.version_name,
            domain:this.$route.params.domain,
            path:this.$route.params.path,
            filesize:this.$route.params.filesize
          }
        })
      } else if(this.$route.params.newid ==0){
        this.title[2].isclass=true
        this.title[0].isclass=false
        this.$router.push('/billManagement')
      } else{
        this.$router.push('/survey')
      }


    },


    methods: {
      logoHome(){
        this.$router.push({
          path:'/superSignatureAread'
        })
      },
      appClick(index){
        for(var i=0;i<this.title.length;i++){
          this.title[i].isclass=false
        }

        if(index==0){
          this.title[index].isclass=true
          this.$router.push({
            path:'/survey'
          })
        }else if(index==1){
          this.title[index].isclass=true
          this.$router.push({
            path:'/appManagement'
          })
        }else if(index==2){
          this.title[index].isclass=true
          this.$router.push({
            path:'/billManagement'
          })
        }else if(index==3){
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
                this.title[index].isclass=true
                this.$router.push({
                  path:'/publishingApplications'
                })
              } else {
                done();
                 this.title[0].isclass=true
                this.$router.push({
                  path:'/survey'
                })
              }
            }
          })
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

      goHome(){
        this.$router.push({
          path: '/superSignatureAread'
        })
      },
      realName(){
        this.$router.push({
          path:'/realName'
        })
      },
      recharge(){
        this.$router.push({
          name:'billManagement'
        })
      },
      /*修改密码*/
      modify(){
        this.modal1=true
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
      /*退出*/
      signOut(){
        var token=localStorage.getItem('Authorization');
        this.$store.commit('del_token',token)
        this.$router.push({
          path:'/'
        })
      }

    },
    watch:{
      '$route'(to, from) {
        if(to.name=='appManagement'){
          for(var i=0;i<this.title.length;i++){
            this.title[i].isclass=false
          }
          this.title[1].isclass=true
        }else if(to.name=='survey'){
          for(var i=0;i<this.title.length;i++){
            this.title[i].isclass=false
          }
          this.title[0].isclass=true
        }
        // console.log(to)
        // console.log(from)
      }
    }
  }
</script>
<style scoped>
  .surveyHeader{
    width: 100%;
    display: flex;

    justify-content: center;
  }
  .login_title {
    width:78%;
    height: 80px;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
    border: 1px solid transparent;
  }

  .login_title .login_title_img {
    width: 143px;
    height: 39px;

  }

  .title {

    /*margin-left: 120px;*/
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
.titleOne:hover{
  color: #2F82FF;
  border-bottom: 2px solid #2F82FF;
}
.titleTwo:hover{
  color: #2F82FF;
  border-bottom: 2px solid #2F82FF;
}
.titleThree:hover{
  color: #2F82FF;
  border-bottom: 2px solid #2F82FF;
}
.titleFourth:hover{
  color: #2F82FF;
  border-bottom: 2px solid #2F82FF;
}
  .isColor {
    color: #2F82FF;
    border-bottom: 2px solid #2F82FF;
  }

  .login_title_div {
    display: flex;
    font-size: 16px;
    color: #323232;
    margin-left: 6vw;
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
    /*width: 400px;*/
    height: 30px;
    margin-top: -5px;
    /*margin-left: 20px;*/
    display: flex;
    align-items: center;
    position: relative;
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
    /*margin-left: 50px;*/
    cursor: pointer;
  }
  .alreadyLoginP{
    /*margin-left: 190px;*/
  }


  .el-badge {
    width: 30px;
    height: 30px;
    position: relative;
    /* vertical-align: middle; */
    /* display: inline-block; */
    display: flex;
    margin-left: 35px;
    justify-content: center;
    align-items: center;
  }
  .xiala{
    width: 180px;
    margin-left: 30px;
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
    justify-content: space-evenly;
  }
  .login_title_third{
    width: 25%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .headUrl {
    width: 50px;
    height: 50px;
    /*position: absolute;*/
    /*right: 0;*/
    cursor: pointer;
  }
</style>
<style>
  .motai .ivu-modal-content{
    position: relative;

  }
  .motai .ivu-modal-footer{
    height: 60px !important;
  }

</style>



