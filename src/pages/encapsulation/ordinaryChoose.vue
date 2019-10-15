<template>
  <div>
    <Modal
      v-model="modal1"
      title="购买"
      :mask-closable="false"
      class="motai"
    >
      <p style="display:flex;align-items:center ;height: 100px; font-size: 16px">请在新打开的页面中完成购买，购买完成后，请根据购买结果点击下面的按钮</p>
      <div @click="queok" class="queOk" slot="footer" >支付成功</div>
    </Modal>
    <div v-loading="loading">
      <div class="selectFirst">
        <p class="selectFirstTitle">订单信息</p>
        <div class="selectFirstDiv">
          <div style="width: 65px;height: 65px;display: flex;justify-content: center;align-items: center">
            <img style="max-width: 100%;max-height: 100%" class="logoImg" :src="logoImg" alt="">
          </div>

          <div>
            <p class="app_name">{{this.$route.params.app_name}}</p>
            <p class="version_code">{{this.$route.params.version}}</p>
          </div>
        </div>
      </div>
      <div class="selectFirst selectSecond">
        <p class="selectFirstTitle">选择到期时间</p>
        <div class="selectFirstDiv">
          <div class="selectFirstDiv_small " v-for="(list,index) in timeSelect" :key="index">
            <img v-if="list.status" src="../../../static/image/superSignature/danxuan.png" alt="">
            <img v-else @click="timeDan(list.id,list.price,list.status,index)"
                 src="../../../static/image/superSignature/danweixuan.png" alt="">
            <p>{{list.name}}</p>
          </div>
          <p class="selectFirstDiv_small ">(试用期为1天)</p>
        </div>
      </div>
      <div class="selectFirst selectThird">
        <p class="selectFirstTitle">选择支付方式</p>
        <div class="selectThirdDiv"
             style="width: 150px;height: 44px; background-repeat: no-repeat;  background-image: url('../../../static/image/encapsulation/xuanzhong@2x.png')">
          <img src="../../../static/image/encapsulation/zfbicon@2x.png" alt="">
        </div>
      </div>
      <div class="selectFour">
        <p class="selectFourTitle">支付金额：<span style="font-size: 26px;color: #FF0000">¥</span><span
          style="font-size: 26px;color: #FF0000">{{money}}</span></p>
      </div>
      <div class="selectFive">
        <div class="seondGo" @click="previousStep">上一步</div>
        <div class="seondNext" @click="pay">去支付</div>
      </div>
    </div>
    <!--<button @click="previousStep">上一步</button>-->
    <!--<button @click="nextStep">下一步</button>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import {BASE_URL, UPLOAD_BASE_URL} from "../../api";
  import qs from 'qs'

  export default {
    name: "ordinaryChoose",
    data() {
      return {
        modal1:false,
        logoImg: '',
        loading:false,
        timeSelect:[],
        money:0,
        selectId:'',
        countDown:80
      }
    },
    methods: {
      timeDan(id,money,status,index){
        for(var i=0;i<this.timeSelect.length;i++){
          this.timeSelect[i].status=false
        }
        this.selectId=id
        this.money=money
        this.timeSelect[index].status=true
      },
      nextStep() {
        this.$router.push({
          name: 'ordinaryDownApp',
          params: {
            active: 4
          }
        })
      },
      previousStep() {
        this.$router.push({
          name: 'ordinaryConfig',
          params: {
            active: 2
          }
        })
      },
      pay() {
        this.loading=true;
        let data = {
          id: this.$route.params.newID,
          price_id: this.selectId,
          pay_type: 1
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/encapsulation/signature', qs.stringify(data), config).then(res => {
          if (res.data.code == 200) {
            this.loading=false
            this.$message({
              message: '支付成功',
              type: 'success'
            });


            var timeClock2;
            var that = this
            timeClock2 = setInterval(function () {
              that.countDown--
              if (that.countDown == 0) {
                clearInterval(timeClock2);
              }
            }, 1000)
          //  alert(this.$route.params.newID)
            let data2 = {
              id: this.$route.params.newID
            }
            let config2 = {
              headers: {'token': localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL + '/api/encapsulation/info', qs.stringify(data2), config2).then(res => {
              // console.log(res.data.data)
              if(res.data.code==200){
                this.$router.push({
                  name: 'ordinaryDownApp',
                  params: {
                    active: 4,
                    version:res.data.data.version_code,
                    bundle:res.data.data.bundle,
                    app_name:res.data.data.name,
                    icon:res.data.data.icon,
                    filesize:res.data.data.filesize,
                    expire_time:res.data.data.expire_time,
                    newID:this.$route.params.newID,
                    platform:res.data.data.platform,
                    leixing:1
                  }
                })
              }else{
                this.$message.error(res.data.msg);
              }

              // this.isDownLogo = res.data.data.icon
              // this.isDownAppname = res.data.data.name
              // this.isDownVersion = res.data.data.version_code
              // this.isDownSize = res.data.data.filesize
              // this.isDownBuid = res.data.data.bundle
              // this.isDownUptime = res.data.data.expire_time
              //
              // this.isDownUrl = window.location.hostname + '/#/down?tag=' + res.data.data.tag
            }, err => {
              // console.log(err)
            })
          } else if (res.data.code == 0) {
            this.loading=false
            this.$message.error(res.data.msg);
          } else {
            this.loading=false
            this.modal1 = true
            let routerData = this.$router.resolve({path: '/pay', query: {htmls: res.data}})
            window.open(routerData.href, '_blank')
          }


        }, err => {
          // console.log(err)
        })


      },
      queok(){
        //  alert(this.newid)
        let data={
          app_id:this.$route.params.newID
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/encapsulation/checkOrderPay',data,config).then(res => {
          // console.log(res.data)
          if(res.data.code==200){

            this.modal1=false
            let data2={
              id:this.$route.params.newID
            }
            let config2 = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data2),config2).then(res => {
              // console.log(res.data.data)
              this.$router.push({
                name: 'ordinaryDownApp',
                params: {
                  active: 4,
                  version:res.data.data.version_code,
                  bundle:res.data.data.bundle,
                  app_name:res.data.data.name,
                  icon:res.data.data.icon,
                  filesize:res.data.data.filesize,
                  expire_time:res.data.data.expire_time,
                  newID:this.$route.params.newID,
                  platform:res.data.data.platform,
                  leixing:2
                }
              })
            }, err => {
              // console.log(err)
            })
          }else if(res.data.code==0){
            this.$message.error(res.data.msg);
          }
        }, err => {
          this.$message.error('系统报错');
          // console.log(err)
        })
      }
    },
    mounted() {
      this.logoImg = BASE_URL + this.$route.params.icon
      let data={
        type:1,
        cate:'ordinary'
      }
      let config = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL + '/api/encapsulation/payConfig', data, config).then(res => {
         console.log(res.data.data)
        if(res.data.code==200){
          this.timeSelect=res.data.data
          this.selectId=this.timeSelect[0].id
        }else if(res.data.code==0){
          this.$message.error(res.data.msg);
        }
      }, err => {
        this.$message.error('系统报错');
        // console.log(err)
      })
    }
  }
</script>

<style scoped>
  .selectFirst {
    width: 92%;
    height: 110px;
    margin: 30px auto 0 auto;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 55px;
  }

  .selectFour {
    width: 92%;
    height: 110px;
    font-size: 16px;
    font-weight: bold;
    margin: 30px auto 0 auto;
    padding-left: 55px;
  }

  .selectFive {
    width: 92%;
    height: 90px;
    margin: 20px auto 0 auto;
    padding-left: 55px;
    display: flex;
  }

  .selectFirst .selectFirstTitle {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }

  .selectFirstDiv {
    display: flex;
    margin-top: 15px;
  }

  .app_name {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    margin-left: 10px;
  }

  .version_code {
    margin-left: 10px;
    margin-top: 6px;
  }

  .selectFirstDiv_small {
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    margin-top: 15px;
  }

  .selectFirstDiv_small p {
    margin-left: 10px;
  }

  .selectFirstDivMa {
    margin-left: 50px;
  }

  .selectThirdDiv {
    width: 150px;
    height: 44px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(220, 220, 220, 1);
  }

  .selectThirdDiv img {
    width: 82px;
    height: 26px;
  }

  .seondGo {
    width: 167px;
    height: 50px;
    background: rgba(232, 232, 232, 1);
    border-radius: 2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #999999;
    cursor: pointer;
  }

  .seondNext {
    width: 167px;
    height: 50px;
    background: rgba(2, 178, 181, 1);
    border-radius: 2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #ffffff;
    margin-left: 20px;
    cursor: pointer;
  }

  .applogoDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .applogoDivFirst {
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .applogoDivFirstName {
    margin-top: 5px;
  }

  .applogoDivFirst img {
    width: 66px;
    height: 66px;
    border-radius: 8px;
  }

  .applogoDivSecond {
    color: #999999;
    font-size: 13px;
    margin-left: 10px;
  }

  .downPFirst {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .oneone {
    margin-top: 60px;
  }

  .downPFirstP {
    width: 220px;
    font-size: 15px;
    color: #999999;
    text-align: right;
    margin-right: 10px;
  }

  .downPFirstPT {
    width: 300px;
    font-size: 15px;
    color: #333333;
    margin-left: 10px;
  }

  .downPFirstUrl {
    width: 300px;
    font-size: 15px;
    color: #007EFF;
    margin-left: 10px;
  }

  .anzhuang {
    height: 100px;
    background-color: white;
  }

  .anzhuang div {
    width: 167px;
    height: 50px;
    background: rgba(2, 178, 181, 1);
    border-radius: 2px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 16px;
    margin: 60px auto 0 auto;
    cursor: pointer;
  }

  .crumbs {
    width: 80%;
    margin: 50px auto 30px auto;
  }

  .queOk {
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
