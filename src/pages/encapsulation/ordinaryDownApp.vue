<template>
  <div>
    <div >
      <div class="applogoDiv">
        <div class="applogoDivFirst">
          <img :src="this.$route.params.icon" alt="">
          <p class="applogoDivFirstName">{{this.$route.params.app_name}}</p>
        </div>
        <div class="applogoDivSecond">
          <p style="width:86px;
              color: white;
              text-align: center;
              line-height: 22px;
              font-size: 12px;
height:22px;
background:rgba(254,140,142,1);
border-radius:4px;">普通封装版</p>
          <p>版本：{{this.$route.params.version}}</p>
          <p>大小：{{isDownSize}}</p>
        </div>
      </div>
      <div class="downPFirst oneone">
        <p class="downPFirstP">包名(BundlelD) : </p>
        <p class="downPFirstPT">{{this.$route.params.bundle}}</p>
      </div>
      <div class="downPFirst">
        <p class="downPFirstP">到期时间： </p>
        <p class="downPFirstPT">{{this.$route.params.expire_time}}</p>
      </div>
      <div class="downPFirst">
        <p class="downPFirstP">封装状态： </p>
        <p class="downPFirstPT">正在封装 ({{countDown}}s)</p>
      </div>
      <div class="downPFirst">
        <p class="downPFirstP">下载链接： </p>
        <p class="downPFirstUrl ">{{isDownUrl}}</p>
      </div>
      <div style="display: flex;justify-content: center">
        <div class="anzhuang" @click="xiazaiLoad" style="margin-right: 15px">
          <div>下载封装包</div>
        </div>
        <div class="anzhuang" @click="qianming" v-if="isQianming">
          <div>立即签名</div>
        </div>
      </div>


    </div>
    <!--<button @click="previousStep">上一步</button>-->
    <!--&lt;!&ndash;<button @click="nextStep">下一步</button>&ndash;&gt;-->
  </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import qs from 'qs'
    export default {
        name: "ordinaryDownApp",
      data(){
        return{
          countDown:80,
          isDownSize:'',
          isDownUrl:'',
          newnewID:'',
          isQianming:false,
          mobileconfig:''
        }
      },
      methods:{
        xiazaiLoad(){
          if(this.mobileconfig==''){
            this.$message.error('正在封装中，请稍等');
          }else{
            window.location.href=this.mobileconfig
            this.$router.push({
              name:'applist',
              params:{
                id:2
              }
            })
          }

        },
        qianming(){

        },
        // nextStep(){
        //   this.$router.push({
        //     name:'ordinaryChoose',
        //     params:{
        //       active:3
        //     }
        //   })
        // },
        previousStep(){
          this.$router.push({
            name:'ordinaryChoose',
            params:{
              active:3
            }
          })
        }
      },
      mounted(){
          var that=this
          if(that.$route.params.platform==2){
            this.isQianming=false
          }else{
              this.isQianming=true
          }
          that.newnewID=that.$route.params.newID
          var timeClock2;
          timeClock2 = setInterval(function () {
            that.countDown--
            if (that.countDown == 0) {
              clearInterval(timeClock2);
              let data = {
                id:that.newnewID
              }
              let config = {
                headers: {'token': localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL + '/api/encapsulation/info',data, config).then(res => {
                // console.log(res.data)
                if(res.data.code==200){
                  that.mobileconfig=res.data.data.mobileconfig
                  that.isDownSize = res.data.data.filesize   //
                  that.isDownUrl = window.location.hostname + '/#/down?tag=' + res.data.data.tag
                }else{
                  this.$message.error(res.data.msg);
                }
              }, err => {
                // console.log(err)
              })
            }
          }, 1000)



      }
    }
</script>

<style scoped>
  .applogoDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .applogoDivFirst{
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .applogoDivFirstName{
    margin-top: 5px;
  }
  .applogoDivFirst img{
    width: 66px;
    height: 66px;
    border-radius:8px;
  }
  .applogoDivSecond{
    color: #999999;
    font-size: 13px;
    margin-left: 10px;
  }
  .downPFirst{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .oneone{
    margin-top: 60px;
  }
  .downPFirstP{
    width: 220px;
    font-size: 15px;
    color: #999999;
    text-align: right;
    margin-right: 10px;
  }
  .downPFirstPT{
    width: 300px;
    font-size: 15px;
    color: #333333;
    margin-left: 10px;
  }
  .downPFirstUrl{
    width: 300px;
    font-size: 15px;
    color: #007EFF;
    margin-left: 10px;
  }
  .anzhuang{
    height: 100px;
    background-color: white;
  }
  .anzhuang div{
    width:167px;
    height:50px;
    background:rgba(2,178,181,1);
    border-radius:2px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 16px;
    margin: 60px auto 35px auto;
    cursor: pointer;
  }
  .crumbs{
    width: 80%;
    margin: 50px auto 30px auto;
  }
  .queOk{
    width: 80px;
    background-color: #06B2B6;
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: white;
    font-size: 15px;
    border-radius: 10px;
    position: absolute;
    right: 5%;
    cursor: pointer;
  }
</style>
