<template>
  <div class="Bheader">
    <div class="login_title">
      <img class="login_title_img" src="../../../static/image/superSignature/mumuunlogo.png" alt="">
      <div class="title">
        <p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"
           @mouseenter="enter(index)"
           @mouseleave="leave(index)">{{list.msg}}</p>
      </div>
      <div v-if="isLogin" class="login_title_div">
        <p @click="loginBtn">登录</p>
        <p @click="registerBtn">注册</p>
      </div>
      <div v-else>
        <div class="alreadyLogin">

          <div class="myappBtn" >
            <p>我的应用</p>
          </div>

          <el-badge :value="3" class="item">
            <img class="tixingBtn" src="../../../static/image/superSignature/tixing@2x.png" alt="">
          </el-badge>
          <el-dropdown placement=top>
            <span class="el-dropdown-link">
              <p class="accountNumber">18482101665</p>
            </span>
            <el-dropdown-menu placement=top  class="xiala" slot="dropdown">
              <el-dropdown-item>实名认证</el-dropdown-item>
              <el-dropdown-item>我的余额</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <img class="headUrl" src="../../../static/image/superSignature/touxiang@2x.png" alt="">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Bheader",
    data() {
      return {
        title: [
          {
            msg: '首页',
            isclass: false
          },
          {
            msg: '超级签名',
            isclass: true
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
            msg: '购买服务',
            isclass: false
          },
          {
            msg: '发布应用',
            isclass: false
          }
        ],
        isLogin: false
      }
    },
    methods: {
      /*顶部标题点击事件*/
      titleName(index) {
        if (index == 0) {
          alert("点击了首页")
        } else if (index == 1) {
          alert("点击了超级签名")
        } else if (index == 2) {
          alert("点击了专属签名")
        } else if (index == 3) {
          alert("点击了企业签名")
        } else if (index == 4) {
          alert("点击了购买服务")
        } else if (index == 5) {
          alert("点击了发布应用")
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
        if (index != 1) {
          this.title[1].isclass = false
        }
        this.title[index].isclass = true
      },
      /*顶部标题移出效果*/
      leave(index) {
        if (index != 1) {
          this.title[1].isclass = true
        }
        this.title[index].isclass = false
      }
    }
  }
</script>

<style scoped>
  .login_title {
    width: 100%;
    height: 80px;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
  }

  .login_title .login_title_img {
    width: 99px;
    height: 39px;
    margin-left: 18.8vw;
  }

  .title {
    width: 500px;
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
    margin-left: 20px;
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
    margin-left: 20px;
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
    width: 150px;
    margin-left: 30px;
  }

</style>
