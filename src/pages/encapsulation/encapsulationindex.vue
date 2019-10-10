<template>
<div class="encapsulationindex">
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
  <div class="Bheader" >
    <div class="login_title">
      <div class="login_title_first">
        <img @click="logoHome" class="login_title_img" src="../../../static/image/superSignature/mlogo.png" alt="">
      </div>

      <div class="title login_title_second">
        <p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"
           @mouseenter="enter(index)"
           @mouseleave="leave(index)">{{list.msg}}</p>
      </div>




      <div class="alreadyLogin login_title_third">

        <div @click="myappBtn" class="myappBtn" >
          <p>我的应用</p>
        </div>

        <!--<el-badge :value="3" class="item">-->
        <!--<img class="tixingBtn" src="../../../static/image/superSignature/tixing@2x.png" alt="">-->
        <!--</el-badge>-->
        <div style="width: 100px">
          <el-dropdown placement=top>
            <span class="el-dropdown-link">
              <p class="accountNumber">{{userName}}</p>
            </span>
            <el-dropdown-menu placement=top  class="xiala" slot="dropdown">
              <!--<el-dropdown-item @click.native="realName">实名认证</el-dropdown-item>-->
              <!--<el-dropdown-item>实名认证</el-dropdown-item>-->
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
  <div style="width: 100%;display: flex;justify-content: center;">
    <img style="width: 80%" src="../../../static/image/encapsulation/guanggao.jpg" alt="">
  </div>
  <div class="daoTitle">
    <div @click="daoTitleTwo" class="daoTitleTwo" :class="{ 'color': isCo2 }">
      <img v-if="isPutong" src="../../../static/image/encapsulation/putong_s.png" alt="">
      <img v-else src="../../../static/image/encapsulation/putong_n@2x.png" alt="">
      <p>普通版封装</p>
    </div>
    <div @click="daoTitleOne" class="daoTitleOne" :class="{ 'color': isCo1 }">
      <img v-if="isApple" src="../../../static/image/encapsulation/ios_s@2x.png" alt="">
      <img v-else src="../../../static/image/encapsulation/ios_n.png" alt="">
      <p>免签名网页封装</p>
    </div>

    <div @click="daoTitleThree" class="daoTitleThree" :class="{ 'color': isCo }">
      <img v-if="isApplist" src="../../../static/image/encapsulation/liebiao_s.png" alt="">
      <img v-else src="../../../static/image/encapsulation/liebiao_n@2x.png" alt="">
      <p>应用列表</p>
    </div>
  </div>
  <router-view></router-view>


</div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "encapsulationindex",
      data(){
          return{
            isPutong:false,
            isApple:false,
            isApplist:true,
            total:0,
            pageNumber:'',
            current:1,
            input:'',
            appName:'',
            value:'',
            downSumOptions: [
              {
                value: '已完成',
              }, {
                value: '补签',
              }],
            tableData: [
              {
                name:'iOS',
                icon:'',
                appname:'公务员考试',
                version:'1.0',
                downUrl:'http://www.iOSapp88.com',
                ervalue:'',
                time:'2019-10-01 18:51:15',
                state:'封装中'


              }
            ],
            isCo:true,
            isCo1:false,
            isCo2:false,

            usedPass:'',
            newPass:'',
            confirmPass:'',
            modal1:false,
            title: [
              // {
              //   msg: '首页',
              //   isclass: false
              // },
              {
                msg: '超级签名',
                isclass: false
              },
              {
                msg: '专属签名',
                isclass: false
              },
              {
                msg: '企业签名',
                isclass: false
              },
              {
                msg: '免签名封装',
                isclass: true
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
            money:'',
            userName:''
          }
      },
      mounted(){
        var that=this
        this.$router.push({
          name:'applist'
        })
        // alert(this.$route.query.id)
        // this.$router.push({
        //   path:'/encapsulationindex'
        // })
        //   this.isCo=true
        //   this.isCo1=false
        //   this.isCo2=false



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


      },
      watch: {
        '$route': function (to, from) {
        //   alert(this.$route.params.id)
              if(this.$route.params.id==2){
                  this.isCo=true
                  this.isCo1=false
                  this.isCo2=false
                  this.isApplist=true
                  this.isApple=false
                  this.isPutong=false
              }else if(this.$route.params.id==1){
                this.isCo=false
                this.isCo1=true
                this.isCo2=false
                this.isApplist=false
                this.isApple=true
                this.isPutong=false
              }
        }
      },
      methods:{
        logoHome(){
          this.$router.push({
            path:'/superSignatureAread'
          })
        },
        daoTitleOne(){
          this.isCo=false
          this.isCo1=true
          this.isCo2=false

          this.isApplist=false
          this.isApple=true
          this.isPutong=false
          this.$router.push({
            path:'/noFlash'
          })
        },
        daoTitleTwo(){
          this.isCo=false
          this.isCo1=false
          this.isCo2=true
          this.isApplist=false
          this.isApple=false
          this.isPutong=true
          this.$router.push({
            path:'/ordinary'
          })




          // this.$alert('该模块正在开发中', '提示', {
          //   confirmButtonText: '确定',
          //   callback: action => {
          //   }
          // });

        },
        daoTitleThree(){
          this.isCo=true
          this.isCo1=false
          this.isCo2=false
          this.isApplist=true
          this.isApple=false
          this.isPutong=false
          this.$router.push({
            path:'/encapsulationindex'
          })
        },
        /*顶部标题点击事件*/
        titleName(index) {
          if (index == 0) {
            // alert("点击了超级签名")
            this.$router.push({
              name:'superSignatureAread'
            })
          } else if (index == 1) {
            // alert("点击了专属签名")
          } else if (index == 2) {
            // alert("点击了企业签名")
            this.$router.push({
              name:'enterprise'
            })
          } else if (index == 3) {


          } else if (index == 4) {
            // alert("点击了购买服务")
            this.$router.push({
              name:'myApp',
              params:{
                newid: 0
              }
            })
          } else if (index ==5) {
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
                    name:'myApp',
                    params: {
                      newid: 1
                    }
                  })
                } else {
                  done();
                  this.title[0].isclass=true
                  this.$router.push({
                    path:'/superSignatureAread'
                  })
                }
              }
            })



          }
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
          this.title[3].isclass=true
        },
        myappBtn(){
          this.$router.push({
            path: '/myApp'
          })
        },
        recharge(){
          this.$router.push({
            name:'myApp',
            params:{
              newid: 0
            }
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
      }
    }
</script>
<style>
  .el-table .cell {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    margin-left: 10px;
    display: flex !important;
    justify-content: space-evenly !important;
  }
  .motai .ivu-modal-content{
    position: relative;

  }
  .motai .ivu-modal-footer{
    height: 60px !important;
  }
</style>
<style scoped>
  .encapsulationindex{
    width: 100%;
    height: 100%;
    background-color: #f3f6f9;
  }
  .daoTitle{
    width: 600px;
    height: 50px;
    border-radius:25px;
    display: flex;
    margin: 30px auto;
    background-color: white;
  }
  .daoTitle img{
    margin-right: 10px;
  }
  .daoTitleOne,.daoTitleTwo,.daoTitleThree{
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:25px;
    font-size: 16px;
    color: black;
    cursor: pointer;
  }
  .color{
    background-color: #29D2D3;
    color: white;
  }
  .login_title {
    width: 80%;
    height: 80px;
    display: flex;
    /*justify-content: space-around;*/
    margin: 0 auto;
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
    color: #06B2B6;
    border-bottom: 2px solid #06B2B6;
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
    background-color: #06B2B6;
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
    /*margin-left: 20px;*/
    display: flex;
    align-items: center;

  }

  .myappBtn {
    width: 118px;
    height: 34px;
    background-color:#06B2B6 ;
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
    background-color: #06B2B6;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    border-radius: 10px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }
.crumbs{
  width: 80%;
  margin: 50px auto 10px auto;
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
    justify-content: space-between;
  }
</style>
