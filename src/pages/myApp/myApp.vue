<template>
  <div class="myApp">
    <div class="surveyHeader">
      <div class="login_title">
        <img class="login_title_img" src="../../../static/image/superSignature/mumuunlogo.png" alt="">
        <div class="title">
          <p @click="appClick(index,list.isclass)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass} ">{{list.msg}}</p>
        </div>

        <div class="alreadyLoginP" >
          <div class="alreadyLogin">

            <div @click="goHome" class="myappBtn" >
              <p>返回首页</p>
            </div>

            <el-badge :value="3" class="item">
              <img class="tixingBtn" src="../../../static/image/superSignature/tixing@2x.png" alt="">
            </el-badge>
            <el-dropdown placement=top>
            <span class="el-dropdown-link">
              <p class="accountNumber">{{userName}}</p>
            </span>
              <el-dropdown-menu placement=top  class="xiala" slot="dropdown">
                <el-dropdown-item @click.native="realName">实名认证</el-dropdown-item>
                <el-dropdown-item>我的余额:￥{{money}}</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="signOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <img class="headUrl" src="../../../static/image/superSignature/touxiang@2x.png" alt="">

          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import surveyHeader from '../component/surveyHeader'
  export default {
    name: "myApp",
    data() {
      return {
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
        userName:''
      }
    },

    mounted() {
      this.money=localStorage.getItem('balance');
      this.userName=localStorage.getItem('userName');
      this.$router.push('/survey')
    },
    methods: {
      appClick(index){
        for(var i=0;i<this.title.length;i++){
          this.title[i].isclass=false
        }
        this.title[index].isclass=true
        if(index==0){
          this.$router.push({
            path:'/survey'
          })
        }else if(index==1){
          this.$router.push({
            path:'/appManagement'
          })
        }else if(index==2){
          this.$router.push({
            path:'/billManagement'
          })
        }else if(index==3){
          this.$router.push({
            path:'/publishingApplications'
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
      // /*顶部标题移入效果*/
      // enter(index) {
      //   for(var i=0;i<this.title.length;i++){
      //     this.title[i].isclass=false
      //   }
      //   this.title[index].isclass=true
      // },
      // /*顶部标题移出效果*/
      // leave() {
      //   for(var i=0;i<this.title.length;i++){
      //     this.title[i].isclass=false
      //   }
      //   this.title[0].isclass=true
      // },
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
        console.log(to)
        console.log(from)
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
  }

  .login_title .login_title_img {
    width: 99px;
    height: 39px;
  }

  .title {
    width: 400px;
    margin-left: 5vw;
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
  color: #06B2B6;
  border-bottom: 2px solid #06B2B6;
}
.titleTwo:hover{
  color: #06B2B6;
  border-bottom: 2px solid #06B2B6;
}
.titleThree:hover{
  color: #06B2B6;
  border-bottom: 2px solid #06B2B6;
}
.titleFourth:hover{
  color: #06B2B6;
  border-bottom: 2px solid #06B2B6;
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
    width: 400px;
    height: 30px;
    margin-top: -5px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    position: relative;
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
    margin-left: 50px;
    cursor: pointer;
  }
  .alreadyLoginP{
    margin-left: 190px;
  }
  .headUrl {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    cursor: pointer;
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

</style>



