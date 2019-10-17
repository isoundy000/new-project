<template>
    <div class="noFlash">
      <!--<div class="crumbs">-->
        <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
          <!--<el-breadcrumb-item :to="{ path: '/noFlash' }">应用封装 </el-breadcrumb-item>-->
          <!--<el-breadcrumb-item>苹果无闪退封装</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->
      <!--</div>-->
      <Modal
        v-model="modal1"
        title="购买"
        :mask-closable="false"
        class="motai"
      >
        <p style="display:flex;align-items:center ;height: 100px; font-size: 16px">请在新打开的页面中完成购买，购买完成后，请根据购买结果点击下面的按钮</p>
        <div @click="queok" class="queOk" slot="footer" >支付成功</div>
      </Modal>
      <div class="mask" v-show="mask">
          <div class="maskDiv">
              <p class="selectGN">选择该功能，用户无法在手机上直接删除
                应用，只能通过刷机删除。</p>
            <div class="footerDIV">
              <p class="ok" @click="ok">确定</p>
              <p class="cancel" @click="cancel">取消</p>
            </div>
          </div>
      </div>


      <div class="noFlashDiv">

        <div class="secondDivSmall">
          <el-steps :active="active" finish-status="success" align-center>
            <el-step title="基本信息"></el-step>
            <el-step title="选择套餐"></el-step>
            <el-step title="下载应用"></el-step>
          </el-steps>
        </div>
        <!--<router-view></router-view>-->
        <div class="inputKuang" v-if="isJiben">
          <div class="inputDiv">
            <p class="inputDivP"><span style="color: red">*</span>应用名称</p>
            <el-input
              class="appnameInput"
              @change="appnameInputEvent"
              placeholder="请填写APP名称，建议五个字以内"
              v-model="appnameInput"
            >
            </el-input>
          </div>
          <div class="inputDiv">
            <p class="inputDivP"><span style="color: red">*</span>网站链接</p>
            <el-input
              class="appnameInput"
              @change="appUrlEvent"
              placeholder="填写要封装的网页链接"
              v-model="appUrl"
            >
            </el-input>
          </div>
          <div class="inputDiv">
            <p class="inputDivP">应用图标：</p>
            <div style="width: 492px;display: flex;align-items: center">
              <el-upload
                class="ss"
                :limit='limitCount'
                :on-success="success2"
                :class="{hide:hideUpload}"
                :headers="headers"
                :action="newdeUrl"
                list-type="picture-card"
                :file-list="imgList"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-change="deleteL">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
              <p style="width: 300px;font-size: 14px;font-weight: bold;margin-left: 15px">
                200*200尺寸，小于1M，
                PNG、JPG格式
              </p>
            </div>
          </div>
          <div class="inputDiv">
            <p class="inputDivP">应用删除方式：</p>
           <div style="width: 492px">
              <div class="keDelete">
                <img   v-if="choose" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img @click="dan1" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>可删除</p>
              </div>
             <div class="passDelete">
               <div class="passDeleteDiv">
                 <img   v-if="choose1" src="../../../static/image/superSignature/danxuan.png" alt="">
                 <img @click="dan2"  v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
                 <p>密码删除<span style="margin-left: 10px">(仅适用于IOS13以下的系统)</span> </p>
               </div>
               <el-input
                 v-show="isInputShow"
                 class="appnameInput passInput"
                 placeholder="请输入删除的密码"
                 v-model="password"
                 @change="passwordEvent"
               >
               </el-input>
             </div>
             <div class="keDelete">
               <img   v-if="choose2" src="../../../static/image/superSignature/danxuan.png" alt="">
               <img  @click="dan3" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
               <p>永不可删除</p>
             </div>
           </div>
          </div>
          <div class="inputDiv">
            <p class="inputDivP"></p>
            <div style="width: 492px">
              <p v-show="isNext" class="huinextStep" >下一步</p>
              <p v-show="isNext1"  class="lvnextStep"  @click="nextStep">下一步</p>
            </div>
          </div>
        </div>
        <div v-if="isSelect">
          <div class="selectFirst">
            <p class="selectFirstTitle">订单信息</p>
            <div class="selectFirstDiv">
              <div style="width: 65px;height: 65px;display: flex;justify-content: center;align-items: center">
                <img class="logoImg" :src="isSelectLogo" alt="">
              </div>

              <div>
                <p class="app_name">{{isSelectAppname}}</p>
                <p class="version_code">{{isSelectVersion}}</p>
              </div>
            </div>
          </div>
          <div class="selectFirst selectSecond">
            <p class="selectFirstTitle">选择到期时间</p>
            <div class="selectFirstDiv">
              <div class="selectFirstDiv_small " v-for="(list,index) in timeSelect" :key="index">
                <img  v-if="list.status" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img  v-else @click="timeDan(list.id,list.price,list.status,index)"  src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>{{list.name}}</p>
              </div>
              <p class="selectFirstDiv_small ">(试用期为1天)</p>
            </div>
          </div>
          <div class="selectFirst selectThird">
            <p class="selectFirstTitle">选择支付方式</p>
            <div class="selectThirdDiv" style="width: 150px;height: 44px; background-repeat: no-repeat;  background-image: url('../../../static/image/encapsulation/xuanzhong@2x.png')">
              <img src="../../../static/image/encapsulation/zfbicon@2x.png" alt="">
            </div>
          </div>
          <div class="selectFour">
            <p class="selectFourTitle">支付金额：<span style="font-size: 26px;color: #FF0000">¥</span><span style="font-size: 26px;color: #FF0000">{{money}}</span></p>
          </div>
          <div class="selectFive">
            <div class="seondGo" @click="seondGo">上一步</div>
            <div class="seondNext" @click="pay">去支付</div>
          </div>
        </div>
        <div v-if="isDown">
          <div class="applogoDiv">
            <div class="applogoDivFirst">
              <img :src="isDownLogo" alt="">
              <p class="applogoDivFirstName">{{isDownAppname}}</p>
            </div>
            <div class="applogoDivSecond">
              <p style="width:86px;
              color: white;
              text-align: center;
              line-height: 22px;
              font-size: 12px;
height:22px;
background:rgba(254,140,142,1);
border-radius:4px;">iOS无闪退版</p>
              <p>版本：{{isDownVersion}}</p>
              <p>大小：{{isDownSize}}</p>
            </div>
          </div>
          <div class="downPFirst oneone">
            <p class="downPFirstP">包名(BundlelD) : </p>
            <p class="downPFirstPT">{{isDownBuid}}</p>
          </div>
          <div class="downPFirst">
            <p class="downPFirstP">到期时间： </p>
            <p class="downPFirstPT">{{isDownUptime}}</p>
          </div>
          <div class="downPFirst">
            <p class="downPFirstP">封装状态： </p>
            <p class="downPFirstPT">正在封装 ({{countDown}}s)</p>
          </div>
          <div class="downPFirst">
            <p class="downPFirstP">下载链接： </p>
            <p class="downPFirstUrl ">{{isDownUrl}}</p>
          </div>
          <div class="anzhuang" @click="install">
            <div>安装应用</div>
          </div>

        </div>


      </div>

    </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import qs from 'qs'
    export default {
        name: "noFlash",
      data(){
          return{
            modal1:false,
            isDownLogo:'',
            isDownAppname:'',
            isDownVersion:'',
            isDownSize:'',
            isDownBuid:'',
            isDownUptime:'',
            isDownUrl:'',
            isSelectLogo:'',
            isSelectAppname:'',
            isSelectVersion:'',
            isSelectSize:'',
            isJiben:true,
            isSelect:false,
            isDown:false,
            active:0,
            appnameInput:'',//应用名称输入框值
            appUrl:'',//网站链接输入框值
            limitCount:1,//允许照片上传的个数
            hideUpload: false,
            dialogImageUrl: '',
            dialogVisible: false,
            headers:{
              "token":localStorage.getItem('Authorization') // 直接从本地获取token就行
            },
            newdeUrl:'',
            img:'',
            password:'',//密码
            choose:true,//可删除
            choose1:false,//密码删除
            choose2:false,//永不删除
            deleteType:1,
            isInputShow:false,//密码删除输入框显示与否布尔值
            isCo:false,//下一步颜色布尔值
            mask:false,//永久删除遮罩层
            isNext:true,
            isNext1:false,
            ntimeChoose:true,//n天试用
            ttimeChoose:false,//3天试用
            btimeChoose:false,//半年试用
            ytimeChoose:false,//一年试用
            money:'',
            storageImg:'',
            imgList:[],
            timeSelect:[],
            newid:'',
            selectId:1,
            countDown:80
          }
      },
      methods:{
          /*应用名称输入事件*/
        appnameInputEvent(){
          this.verification()
        },
        /*应用链接输入事件*/
        appUrlEvent(){
          this.verification()
        },
        /*密码删除输入事件*/
        passwordEvent(){
          this.verification()
        },
        /*上传图片成功*/
        success2(response, file){
          this.storageImg=response.data.domain+response.data.url
          // console.log(response.data.domain+response.data.url)
          this.img=file.response.data.url
          // console.log(this.img)
          this.verification()
          //this.img.push(img)
        },
        /*上传图片触发的方法*/
        deleteL(response, file, fileList){
          this.hideUpload = file.length >= this.limitCount;
          this.verification()
        },
        handleRemove(file, fileList) {
          // console.log(file, fileList);
          this.img=''
          this.hideUpload = file.length >= this.limitCount;
          this.verification()
        },
        handlePictureCardPreview(file) {
          // console.log(file)
          this.dialogImageUrl = file.url;
          // console.log(this.dialogImageUrl)
          this.img=file.url
          this.dialogVisible = true;
        },
        dan1(){
          this.choose=true
          this.choose1=false
          this.choose2=false
          this.isInputShow=false
          this.deleteType=1
          this.verification()
        },
        dan2(){
          this.choose=false
          this.choose1=true
          this.choose2=false
          this.isInputShow=true
          this.password=''
          this.deleteType=2
          this.verification()
        },
        dan3(){
          this.choose=false
          this.choose1=false
          this.choose2=true
          this.isInputShow=false
          this.mask=true
          this.deleteType=3
          this.verification()
        },
        /*表单验证*/
        verification(){
          /*先判断是不是密码删除*/
          if(this.choose1==true){
            if(this.img!=''&&this.appnameInput!=''&&this.appUrl!=''&&this.password!=''){
              this.isNext1=true
              this.isNext=false
            }else{
              this.isNext=true
              this.isNext1=false
            }
          }else{
            if(this.img!=''&&this.appnameInput!=''&&this.appUrl!=''){
              this.isNext1=true
              this.isNext=false
            }else{
              this.isNext=true
              this.isNext1=false
            }
          }
        },
        ok(){
          this.mask=false
        },
        cancel(){
          this.mask=false
          this.choose=true
          this.choose1=false
          this.choose2=false
        },
        nextStep(){
          let data={
            app_name:this.appnameInput,
            icon:this.img,
            url:this.appUrl,
            type:this.deleteType,
            password:this.password,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/noFlashBack',qs.stringify(data),config).then(res => {
            if(res.data.code==200){
              this.active=1
              this.isSelect=true
              this.isJiben=false
              this.newid=res.data.data.id
              // console.log(res.data.data.id)
              let data1={
                id:res.data.data.id
              }
              let config1 = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data1),config1).then(res => {
                // console.log(res.data.data)
                this.isSelectLogo=res.data.data.icon
                this.isSelectAppname=res.data.data.name
                this.isSelectVersion=res.data.data.version_code
                this.isSelectSize=res.data.data.filesize
                this.isDownBuid=res.data.data.bundle
                this.isDownUptime=res.data.data.expire_time
                this.isDownUrl=window.location.hostname+'/#/down?tag='+res.data.data.tag
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




        },
        timeDan(id,money,status,index){
          for(var i=0;i<this.timeSelect.length;i++){
            this.timeSelect[i].status=false
          }
          this.selectId=id
          this.money=money
          this.timeSelect[index].status=true
        },

        seondGo(){
          var that=this
          that.active=0
          that.isSelect=false
          that.isJiben=true
          that.imgList=[]
          var newobj={}
          newobj.name=''
          newobj.url=that.storageImg
          that.imgList.push(newobj)
        },
        pay(){

            let data = {
              id:this.newid,
              price_id:this.selectId,
              pay_type:1
            }
            let config = {
              headers: {'token': localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/encapsulation/signature',qs.stringify(data),config).then(res => {
             if(res.data.code==200){
               this.$message({
                 message: '支付成功',
                 type: 'success'
               });

               this.active=2
               this.isSelect=false
               this.isJiben=false
               this.isDown=true
               var timeClock2;
               var that=this
               timeClock2 = setInterval(function() {
                 that.countDown--
                 if(that.countDown == 0) {
                   clearInterval(timeClock2);
                 }
               }, 1000)
               let data2={
                 id:this.newid
               }
               let config2 = {
                 headers:{'token':localStorage.getItem('Authorization')}
               };
               axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data2),config2).then(res => {
                 // console.log(res.data.data)
                 this.isDownLogo=res.data.data.icon
                 this.isDownAppname=res.data.data.name
                 this.isDownVersion=res.data.data.version_code
                 this.isDownSize=res.data.data.filesize
                 this.isDownBuid=res.data.data.bundle
                 this.isDownUptime=res.data.data.expire_time

                 this.isDownUrl=window.location.hostname+'/#/down?tag='+res.data.data.tag
               }, err => {
                 // console.log(err)
               })
             }else if(res.data.code==0){
               this.$message.error(res.data.msg);
             }else{
               // const div = document.createElement('div')
               // div.innerHTML = res.data //此处form就是后台返回接收到的数据
               // document.body.appendChild(div)
               // document.forms[0].submit()
               this.modal1=true
               let routerData = this.$router.resolve({path:'/pay',query:{htmls:res.data}})
               window.open(routerData.href,'_blank')
               let data2={
                 id:this.newid
               }
               let config2 = {
                 headers:{'token':localStorage.getItem('Authorization')}
               };
               axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data2),config2).then(res => {
                 // console.log(res.data.data)
                 this.isDownLogo=res.data.data.icon
                 this.isDownAppname=res.data.data.name
                 this.isDownVersion=res.data.data.version_code
                 this.isDownSize=res.data.data.filesize
                 this.isDownBuid=res.data.data.bundle
                 this.isDownUptime=res.data.data.expire_time
                 this.isDownUrl=window.location.hostname+'/#/down?tag='+res.data.data.tag
               }, err => {
                 // console.log(err)
               })
             }






            }, err => {
              // console.log(err)
            })





        },
        queok(){
        //  alert(this.newid)
          let data={
            app_id:this.newid
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/checkOrderPay',data,config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              this.active=2
              this.isSelect=false
              this.isJiben=false
              this.isDown=true
              this.modal1=false
              let data2={
                id:this.newid
              }
              let config2 = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data2),config2).then(res => {
                // console.log(res.data.data)
                this.isDownLogo=res.data.data.icon
                this.isDownAppname=res.data.data.name
                this.isDownVersion=res.data.data.version_code
                this.isDownSize=res.data.data.filesize
                this.isDownBuid=res.data.data.bundle
                this.isDownUptime=res.data.data.expire_time

                this.isDownUrl=window.location.hostname+'/#/down?tag='+res.data.data.tag
                var timeClock2;
                var that=this
                timeClock2 = setInterval(function() {
                  that.countDown--
                  if(that.countDown == 0) {
                    clearInterval(timeClock2);
                  }
                }, 1000)
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
        },
        install(){
            this.$router.push({
              name:'applist',
              params:{
                id:2
              }
            })
        }
      },
      mounted(){
        this.newdeUrl=BASE_URL+'/api/common/upload'

        axios.post(BASE_URL+'/api/encapsulation/payConfig').then(res => {
          // console.log(res.data.data)
          if(res.data.code==200){
            this.timeSelect=res.data.data
            this.selectId=this.timeSelect[0].id
            this.money=this.timeSelect[0].price
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
<style>

  .el-upload-list--picture-card{
    display: flex !important;
  }
  .hide .el-upload--picture-card {
    display: none;
  }
  .el-switch{
    width: 60px !important;
    /*margin-left: 20px;*/
  }
  .el-switch__core{
    width: 60px !important;
  }
  .el-step__icon.is-text {
    width: 50px;
    height: 50px;
  }

  .el-step__line {
    margin-top: 11px;
  }

  .is-success div:nth-child(2) {
    background-color: #06B2B6 !important;
    border: 0;
    color: white;
  }

  .is-process div:nth-child(2) {
    background-color: #06B2B6 !important;
    border: 0;
    color: white;
  }

  .el-step__title.is-success {
    color: black;
    font-weight: 0 !important;
  }

  .el-step__title.is-process {
    color: black;
    font-weight: 0 !important;
  }

  .is-wait .el-step__line {

  }

  /*.is-process div:nth-child(1){*/
  /*background-color: #DCDCDC !important;*/
  /*}*/
  .is-success div:nth-child(1) {
    background-color: #06B2B6 !important;
  }

  /*.is-wait div:nth-child(1){*/
  /*background-color: #DCDCDC !important;*/
  /*}*/
  .el-step__head.is-success {
    color: #06B2B6 !important;
    border-color: #06B2B6 !important;

  }

  .is-wait div:nth-child(1) i {
    background-color: white !important;
  }

  .is-wait div:nth-child(2) {
    background-color: white !important;
  }
</style>
<style scoped>
  .noFlash{
    background-color: #f3f6f9;
  }
  .noFlashDiv{
    width:80% ;
    height: auto;
    background-color: white;
    margin: 10px auto 0 auto;
  }
  .secondDivSmall {
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
  }
  .inputKuang{
    margin-top: 30px;
  }
  .inputDiv{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
  .inputDiv .inputDivP{
    width: 100px;
    color: #333333;
    font-size: 14px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    margin-right: 35px;
    text-align: right;
  }
  .inputDiv span{
    margin-right: 5px;
  }
  .appnameInput{
    width: 492px;
  }
  .keDelete{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 20px;
  }
  .keDelete p{
    margin-left: 10px;
  }
  .passDelete{

  }
  .passDeleteDiv{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-top: 20px;
  }
  .passDelete p{
    margin-left: 10px;
  }
  .passInput{
    margin-top: 15px;
  }
  .huinextStep{
    width:167px;
    height:50px;
    background:rgba(232,232,232,1);
    border-radius:2px;
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 100px;
  }
  .lvnextStep{
    width:167px;
    height:50px;
    border-radius:2px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    background:rgba(2,178,181,1);
    color: white;

  }
  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.5);
    z-index: 9;
    top: 0;
    left: 0;
  }
  .maskDiv{
    width: 582px;
    height: 310px;
    background:rgba(255,255,255,1);
    border-radius:8px;
    margin: 0 auto;
  }
  .maskDiv .selectGN{
    width: 361px;
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:400;
    text-align: center;
    margin: 70px auto 0 auto;
  }
  .footerDIV{
    height: 100px;
    border-top: 1px solid #E5E5E5;
    margin-top: 65px;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
  }
  .footerDIV p{
    width:118px;
    height:46px;
    background:rgba(6,178,182,1);
    border-radius:8px;
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
  .cancel{
    background:rgba(238,238,238,1) !important;
    color: #999999 !important;
  }
  .logoImg{
   max-height: 100%;
    max-width: 100%erw;
    border-radius:8px;
  }
  .selectFirst{
    width: 92%;
    height: 110px;
    margin: 30px auto 0 auto;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 55px;
  }
  .selectFour{
    width: 92%;
    height: 110px;
    font-size: 16px;
    font-weight: bold;
    margin: 30px auto 0 auto;
    padding-left: 55px;
  }
  .selectFive{
    width: 92%;
    height: 90px;
    margin: 20px auto 0 auto;
    padding-left: 55px;
    display: flex;
  }
  .selectFirst .selectFirstTitle{
    font-size: 14px;
    font-family:Microsoft YaHei;
    font-weight:bold;
  }
  .selectFirstDiv{
    display: flex;
    margin-top: 15px;
  }
  .app_name{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    margin-left: 10px;
  }
  .version_code{
    margin-left: 10px;
    margin-top: 6px;
  }
  .selectFirstDiv_small{
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: bold;
margin-top: 15px;
  }
  .selectFirstDiv_small p{
    margin-left: 10px;
  }
  .selectFirstDivMa{
    margin-left: 50px;
  }
  .selectThirdDiv{
    width:150px;
    height:44px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid rgba(220,220,220,1);
  }
  .selectThirdDiv img{
    width: 82px;
    height: 26px;
  }
  .seondGo{
    width:167px;
    height:50px;
    background:rgba(232,232,232,1);
    border-radius:2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #999999;
    cursor: pointer;
  }
  .seondNext{
    width:167px;
    height:50px;
    background:rgba(2,178,181,1);
    border-radius:2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #ffffff;
    margin-left: 20px;
    cursor: pointer;
  }
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
    margin: 60px auto 0 auto;
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
