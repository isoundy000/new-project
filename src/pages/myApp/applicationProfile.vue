<template>
<div class="applicationProfile">
  <div class="applicationProfileDiv">
    <div class="firstDiv">
      <div class="firstDivOne">
        <img :src="list.icon" alt="">
        <div>
          <p>{{list.name}} <span style="font-weight: bold">{{state}}</span></p>
          <p>{{list.version_code}}</p>
        </div>
      </div>
      <div class="firstDivTwo">
          <p>下载地址</p>
          <div>{{download_url}}</div>
      </div>
    </div>
    <div class="secondDiv">
      <p class="firstP">包名</p>
      <p class="secondP baoming">{{list.package_name}}</p>
    </div>
    <div class="thirdDiv">
      <p class="firstP">是否启用</p>
      <p class="secondP">{{enable}}</p>
    </div>
    <div class="fourDiv">
      <p class="firstP">评分人数</p>
      <p class="secondP">{{list.score_num}}</p>
    </div>
    <div class="fourDiv">
      <p class="firstP">下载码</p>
      <p class="secondP">{{list.download_code}}</p>
    </div>
    <div class="fourDiv">
      <p class="firstP">付费金额</p>
      <p class="secondP">{{list.download_money}}元</p>
    </div>

    <!--<div class="fourDiv">-->
      <!--<p class="firstP">限制下载次数</p>-->
      <!--<p class="secondP">{{list.download_limit}}</p>-->
    <!--</div>-->
    <div class="fourDiv">
      <p class="firstP">备注</p>
      <p class="secondP">{{list.remark}}</p>
    </div>
    <div class="sixDiv">
      <p class="firstP">应用截图</p>
      <div class="sixDivImg" v-for="(list,index) in imgList">
        <img class="secondP"  :src='list' alt="">
      </div>

    </div>
    <div class="sevenDiv">
      <p class="firstP">应用介绍</p>
      <p class="secondP desc">{{list.desc}}</p>
    </div>
    <div class="eightDiv">
      <p class="firstP">功能介绍</p>
      <p class="secondP introductiontext">{{list.introduction}}</p>
    </div>
    <!--<div class="nineDiv">-->
      <!--<div style="background-image: url('../../../static/image/survey/anniu_xuanzhong.png')">编辑</div>-->
      <!--<div style="background-image: url('../../../static/image/survey/anniu.png')">删除</div>-->
    <!--</div>-->
  </div>
</div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "applicationProfile",
      data(){
          return{
            download_url:'',
            list:'',
            state:"",
            enable:'',
            icon:'',
            imgList:[

            ],
            base_url:''
          }
      },

      mounted(){
          // var a='https://'+window.location.hostname+'/download/'+123123132+'.html'
          // alert(a)
          this.base_url=BASE_URL
        let data={
            id:this.$route.query.id
          }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appDes',qs.stringify(data),config).then(res => {
          // console.log(res.data.data)
          this.list=res.data.data
          this.list.icon=this.list.icon
          this.download_url='https://'+window.location.hostname+'/download/'+this.list.tag+'.html'
          for(var i=0;i<this.list.imgs.length;i++){
              this.imgList.push(this.list.imgs[i])
            }
          if(this.list.status==0){
                  this.state='已下架'
                  this.enable='否'
            }else{
              this.state='已上架'
              this.enable='是'
            }
        }, err => {
          // console.log(err)
        })
      }
    }
</script>

<style scoped>
  .applicationProfile{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .applicationProfileDiv{
    width: 93%;
    height: auto;
    margin: 30px auto 0 auto;
  }
  .firstDiv,.secondDiv,.thirdDiv,.fourDiv,.fiveDiv,.sixDiv,.sevenDiv,.eightDiv{
    display: flex;
    align-items: center;
    color: #333333;
    font-size: 14px;
  }
  .secondDiv{
    margin-top: 30px;
  }
  .thirdDiv,.fourDiv,.fiveDiv,.sixDiv,.sevenDiv,.eightDiv{
    margin-top: 30px;
  }
  .firstP{
    width: 60px;
    text-align: left;
    color: #999999;

  }
  .secondP{
   margin-left: 30px;
  }
  .firstDivOne{
    width: 350px;
    display: flex;
    align-items: center;
  }
  .firstDivOne img{
    width: 80px;
    height: 80px;
    border-radius: 6px;
  }
  .firstDivOne p{
    margin-left: 10px;
  }
  .firstDivTwo{
    display: flex;
    align-items: center;
    margin-left: 60px;
  }
  .firstDivTwo div{
    width: 600px;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    border: 1px solid #B5B5B5;
    margin-left: 20px;
    overflow: hidden;
  }
  .sixDivImg{
    width: 105px;
    height: 130px;

  }
  .sixDiv .sixDivImg:nth-child(3){
    margin-left: 10px;
  }.sixDiv .sixDivImg:nth-child(4){
     margin-left: 10px;
   }
  .sixDiv .sixDivImg:nth-child(5){
    margin-left: 10px;
  }
  .sixDiv .sixDivImg:nth-child(6){
    margin-left: 10px;
  }


  .sixDivImg img{
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;

  }
  .nineDiv{
    display: flex;
    margin: 60px auto 80px auto;
  }
  .nineDiv div{
    width: 180px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    background-size: 180px 40px;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .nineDiv div:nth-child(1){
    color: white;
    margin-left: 90px;
  }
  .nineDiv div:nth-child(2){
    color: #06B2B6;
    margin-left: 40px;
  }
  .introductiontext,.desc{
    width: 900px;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
  }
  .baoming{
    width: 900px;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
  }
</style>
