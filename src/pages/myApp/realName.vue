<template>
    <div class="realName">
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/hpshouye.png" alt="">
          <p>您当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/survey' }">实名认证</el-breadcrumb-item>
            <el-breadcrumb-item>选中用户</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="secondDiv">
        <div @click="personal" class="secondDivOne">
          <img src="../../../static/image/survey/geren_iocn.png" alt="">
          <p>个人用户</p>
        </div>
        <!--<div @click="enterprise" class="secondDivTwo" style="background-image:url('../../../static/image/survey/qiye_bg.png') ">-->
          <!--<img src="../../../static/image/survey/qiye_icon.png" alt="">-->
          <!--<p>企业用户</p>-->
        <!--</div>-->
      </div>
      <!--<Bfooter></Bfooter>-->
    </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  import Bfooter from '../component/footer'
    export default {
        name: "realName",
      data(){
          return{

          }
      },
      components: {
        Bfooter,
      },
      methods:{
        personal(){
          let data={
            type:2
          }
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL + '/api/user/checkAuthEntication',data,config).then(res => {
            if(res.data.code==200){
              this.$router.push({
                path:'/examine'
              })
            }else if(res.data.code==0){
              this.$router.push({
                path:'/personAuthentication'
              })
            }else if(res.data.code==1){
               this.$message.error(res.data.msg);
            }else if(res.data.code==2){
              this.$message.error(res.data.msg);
              this.$router.push({
                path:'/personAuthentication'
              })
            }else if(res.data.code==3){
              this.$message.error('审核中');
            }
          }, err => {
            this.$message.error('系统报错');
            console.log(err)
          })




        },
        enterprise(){
          this.$router.push({
            path:'/enterpriseAuthentication'
          })
        }
      }
    }
</script>

<style scoped>
  .firstDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .firstDiv_small {
    width: 78%;
    height: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #2F82FF;
    display: flex;
    align-items: center;
    color: #999999;
  }

  .firstDiv_small img {
    width: 18px;
    height: 18px;
  }

  .firstDiv_small p {
    margin-left: 21px;
  }
  .secondDiv{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .secondDiv p{
    margin-top: 25px;
  }
  .secondDivOne{
    width: 350px;
    height: 240px;
    background-image:url('../../../static/image/survey/geren_bg.png');
    background-size: 350px 240px;
    background-repeat: no-repeat;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 22px;
    color: white;
    margin-right: 40px;
  }
  .secondDivOne img{
    width: 69px;
    height: 69px;
  }
  .secondDivTwo{
    width: 350px;
    height: 240px;
    background-size: 350px 240px;
    background-repeat: no-repeat;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 22px;
    color: white;
    margin-left: 40px;
  }
  .secondDivTwo img{
    width: 75px;
    height: 73px;
  }
</style>
