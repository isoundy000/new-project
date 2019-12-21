<template>
  <div>
    <!--退出提示-->
    <Modal
      v-model="modal"
      title="选择类型"
      :mask-closable="false"
      class="tuichuDiv"
    >
      <div class="tuichuDivMain">
        <div class="tuichuDivMainSmall">
          <img v-if="tuichuShowOne" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img v-else @click="tuichuDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>超级签名</p>
        </div>
        <div class="tuichuDivMainSmall">
          <img v-if="tuichuShowTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img v-else @click="tuichuDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>企业签名</p>
        </div>

      </div>

      <div class="queOk" @click="tuichuOk" slot="footer">保存</div>
    </Modal>
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
        <p v-if="isPT" class="downPFirstPT" style="color: red;font-size: 20px">正在封装 ({{countDown}}s)</p>
        <p v-else class="downPFirstPT" style="color: red;font-size: 20px">{{PTstatus}}</p>
      </div>
      <div class="downPFirst">
        <p class="downPFirstP">下载链接： </p>
        <p class="downPFirstUrl ">{{isDownUrl}}</p>
      </div>
      <div class="tishiDIV" v-if="isQianming">
        <img src="../../../static/image/encapsulation/tishi@2x.png" alt="">
        <div>
          <p>下载封装好的苹果APP安装后无法直接使用，必须使用超级签名或企业签名进行签名之后才能正常使用</p>
          <p>
            操作流程：①点击立即签名→②上传完成后，填写信息→③选择签名套餐→④签名完成后，下载签名包。</p>
        </div>
      </div>





      <div style="display: flex;justify-content: center">
        <div class="anzhuang" @click="xiazaiLoad" style="margin-right: 15px">

          <div style="display: flex;align-items: center;justify-content: center">
            <img style="width: 20px;height: 18px;margin-right: 5px" src="../../../static/image/encapsulation/xiazai@2x.png" alt="">
            <p>下载封装包</p>
          </div>
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
          modal:false,
          tuichuShowOne:true,
          tuichuShowTwo:false,
          isPT:true,
          PTstatus:'',
          countDown:60,
          isDownSize:'',
          isDownUrl:'',
          newnewID:'',
          isQianming:false,
          mobileconfig:'',
          status:'',
          tag:'',
          leixing:0

        }
      },
      methods:{
        tuichuOk(){
          if(this.tuichuShowOne==true){
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
                  let data = {
                    app_tag:this.tag
                  }
                  let config = {
                    headers: {'token': localStorage.getItem('Authorization')}
                  };
                  axios.post(BASE_URL + '/api/app/signNow',data, config).then(res => {
                    console.log(res.data.data.app.filesize)
                    this.$router.push({
                      name:'myApp',
                      params: {
                        newid: 1,
                        display_name:res.data.data.app.display_name,
                        icon:res.data.data.app.icon,
                        bundle_name:res.data.data.app.bundle_name,
                        package_name:res.data.data.app.package_name,
                        version_code:res.data.data.app.version_code,
                        version_name:res.data.data.app.version_name,
                        domain:res.data.data.domain,
                        path:res.data.data.url,
                        filesize:res.data.data.app.filesize
                      }
                    })
                  }, err => {
                    // console.log(err)
                  })
                } else {
                  done();
                }
              }
            })
          }else{
            let data = {
              app_tag:this.tag
            }
            let config = {
              headers: {'token': localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL + '/api/app/signNow',data, config).then(res => {
              console.log(res.data.data)
              this.$router.push({
                name:'enterprisePubish',
                params: {
                  xianid: 1,
                  display_name:res.data.data.app.display_name,
                  icon:res.data.data.app.icon,
                  bundle_name:res.data.data.app.bundle_name,
                  package_name:res.data.data.app.package_name,
                  version_code:res.data.data.app.version_code,
                  version_name:res.data.data.app.version_name,
                  domain:res.data.data.domain,
                  path:res.data.data.url,
                  filesize:res.data.data.app.filesize
                }
              })
            }, err => {
              // console.log(err)
            })
          }
          this.modal=false
        },
        tuichuDan1() {
          this.tuichuShowOne = true
          this.tuichuShowTwo = false

        },
        tuichuDan2() {
          this.tuichuShowOne = false
          this.tuichuShowTwo = true

        },
        xiazaiLoad(){
          if(this.status==0){
            this.$message.error('正在封装中，请稍等');
          }else if(this.status==-1){
            this.$message.error('已删除');
          }else if(this.status==1){
            console.log(this.mobileconfig)
            window.location.href=this.mobileconfig
            this.$router.push({
              name:'applist',
              params:{
                id:2
              }
            })
          }else if(this.status==2){
            this.$message.error('封装失败');
          }




        },
        qianming(){
          if(this.status==0){
            this.$message.error('正在封装中，请稍等');
          }else if(this.status==-1){
            this.$message.error('已删除');
          }else if(this.status==1){
            this.modal=true
          }else if(this.status==-2){
            this.$message.error('封装失败');
          }






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
              that.isPT=false
              clearInterval(timeClock2);
              let data = {
                id:that.newnewID
              }
              let config = {
                headers: {'token': localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL + '/api/encapsulation/info',data, config).then(res => {
                console.log(res.data)
                that.tag=res.data.data.tag
                if(res.data.code==200){
                  that.status=res.data.data.status
                  if(that.status==0){
                    that.PTstatus='正在封装中'
                  }else if(that.status== -1){
                    that.PTstatus='已删除'
                  }else if(that.status== 1){
                    that.PTstatus='封装成功'
                    let data3 = {
                      tag:that.tag
                    }
                    let config3 = {
                      headers: {'token': localStorage.getItem('Authorization')}
                    };
                    axios.post(BASE_URL+'/api/encapsulation/package_download',data3,config3).then(res => {
                      console.log(res.data.data)
                      that.mobileconfig=res.data.data.download_url
                    }, err => {
                      // console.log(err)
                    })

                  }else if(that.status== -2){
                    that.PTstatus='封装失败'
                  }


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
<style>
  .tuichuDiv .ivu-modal-content {
    width: 700px;
    height: 210px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .tuichuDiv .ivu-modal {
    width: 700px !important;
  }
</style>
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
    /*height: 100px;*/
    background-color: white;
  }
  .anzhuang div{
    width:167px;
    height:50px;
    background:rgba(47,130,255,1);
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
    background-color: #2F82FF;
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
  .tishiDIV{
    width: 65%;
    height: 90px;
    margin: 40px auto 0 auto;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #E5E5E5;
  }
  .tishiDIV img{
    width: 29px;
    height: 29px;
  }
  .tuichuDivMainSmall {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .tuichuDivMainSmall p {
    font-size: 14px;
    margin-left: 15px;
  }
</style>
