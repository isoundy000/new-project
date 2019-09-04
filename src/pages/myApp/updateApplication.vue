<template>
    <div class="updateApplication">
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/shouye@2x.png" alt="">
          <p>您当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
            <el-breadcrumb-item>更新应用</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div  class="supplement">
        <div class="supplementOne">
          <div class="supplementOneImg">
            <img :src='icon' alt="">
          </div>
        </div>
        <div class="supplementThird13">
          <el-upload
            :on-success="success"
            class="upload-demo"
            accept=".ipa"
            :action="newdeUrl"
            :on-change="handleChange"
            >
            <div @click="upload" class="uploadBtn">
              <img src="../../../static/image/survey/shangchuanicon.png" alt="">
              <p>立即上传</p>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传ipa文件</div>
          </el-upload>
        </div>
        <div class="supplementThird1">
          <p>应用名</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="thirdInput1" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementThird2">
          <p>版本号</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="thirdInput2" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementThird">
          <p class="textOne">包名</p>
          <p class="secondP baoming">{{package_name}}</p>
        </div>
        <div class="supplementTwo">
          <p>更新功能</p>
          <el-switch
            v-model="switchValue"
            active-color="#06B2B6"
            inactive-color="#999999"
            @change="swich">
          </el-switch>
        </div>
        <div class="supplementTwo">
          <p>强制更新</p>
          <el-switch
            v-model="switchValue1"
            active-color="#06B2B6"
            inactive-color="#999999"
            @change="swich1">
          </el-switch>
        </div>
        <div class="supplementTwo">
          <p>是否付费</p>
          <el-switch
            v-model="switchValue2"
            active-color="#06B2B6"
            inactive-color="#999999"
            @change="swich2">
          </el-switch>
          <div v-if="fufei">
            <el-input  class="thirdInput fufei" v-model="fufeiInput" placeholder="请输入内容"></el-input><span style="font-size: 16px;">元/次</span>
          </div>
        </div>
        <div class="supplementTen">
          <p>下载码</p>
          <el-input  class="thirdInput" v-model="TenInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementTen">
          <p>安卓下载地址</p>
          <el-input  class="thirdInput" v-model="EvenInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementTen">
          <p>限制下载次数</p>
          <el-input  class="thirdInput" v-model="xianzhiInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementTen">
          <p>备注</p>
          <el-input  class="thirdInput" v-model="beizhuInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementFourth">
          <p>评分人数</p>
          <el-input  class="thirdInput" v-model="fourthInput" placeholder="请输入内容"></el-input>
        </div>

        <div class="supplementsixth oo">
          <p>应用截图</p>
          <div class="thirdInput imgl">
            <el-upload
              class="ss"
              :limit='limitCount'
              :on-success="success2"
              :class="{hide:hideUpload}"
              :headers="headers"
              :file-list="imgList"
              :action="newdeUrl"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-change="deleteL">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </div>
        </div>
        <div class="supplementSeventh">
          <p>应用介绍</p>
          <el-input

            class="thirdInput"
            type="textarea"
            :rows="2"
            size="medium "
            placeholder="请输入200字以内的应用介绍"
            v-model="textarea">
          </el-input>
        </div>
        <div class="supplementEightth">
          <p>功能介绍</p>
          <el-input

            class="thirdInput textarea"
            type="textarea"
            :rows="2"
            placeholder="请输入200字以内的功能介绍"
            v-model="textarea1">
          </el-input>
        </div>
        <div @click="submission" class="submission">
          <p>立即提交</p>
        </div>
      </div>
    </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "updateApplication",
      data(){
          return{
            fufei:false,
            newdeUrl:'',
            xianzhiInput:'',
            beizhuInput:'',
            ss:'',
            thirdInput1:'',
            thirdInput2:'',
            fufeiInput:'',
            textarea:'',
            textarea1:'',
            limitCount:4,
            disInput:true,
            hideUpload: false,
            dialogImageUrl: '',
            dialogVisible: false,
            thirdInput:'',
            fourthInput:'',
            fivethInput:'',
            switchValue: true,
            switchValue1: false,
            switchValue2:false,
            current: 0,
            active: 2,
            isSuper: false,
            isUpload: false,
            isSupplement: true,
            isDistribute: false,
            TenInput:'',
            EvenInput:'',
            headers:{
              "token":localStorage.getItem('Authorization') // 直接从本地获取token就行

            },
            display_name:'',//应用名称
            path:'',//源文件路径
            icon:'',//应用icon
            ipa_data_bak:'',//原始包信息 json加密
            version_code:'',//版本号
            package_name:'',//包名
            bundle_name:'',//bundle名
            state:1,//状态 1 正常 0关闭
            filesize:'',//大小
            img:[],
            list:'',
            imgList:[],
            newState:0,
            gengxing:1,
          }
      },
      methods:{
          /*上传文件*/
        handleChange(file, fileList) {
          this.fileList = fileList.slice(-3);
        },
        upload(){
          this.active = 1
          this.isSuper = false
          this.isUpload = true
        },
        /*上传图片触发的方法*/
        deleteL(response, file, fileList){
          this.hideUpload = file.length >= this.limitCount;
        },
        /*上传图片成功*/
        success2(response, file){
          var img=file.response.data.url
          console.log(img)
          this.img.push(img)
          console.log(this.img)
        },
        handleRemove(file, fileList) {
          console.log('file',file); //指的是删除的哪一张图片
          console.log('fileList',fileList);
          var newImg=[];
          for(var i=0;i<fileList.length;i++){
            console.log('file[i]',file[i]); //指的是删除的哪一张图片
            console.log('fileList[i]',fileList[i]);
            // console.log(fileList[i].response.data.url);
            console.log('fileList[i].url',fileList[i].url)
            console.log('fileList[i].url.substring(18)',fileList[i].url.substring(18))
            newImg.push(fileList[i].url.substring(18))
            this.img=newImg
          }


          this.hideUpload = file.length >= this.limitCount;
          console.log(this.img)
        },
        handlePictureCardPreview(file) {
          console.log(file)
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        success(response, file, fileList) {
          this.disInput=false
          console.log(file)
          this.display_name=file.response.data.app.display_name
          this.path=file.response.data.url
          this.icon=file.response.data.domain+file.response.data.app.icon
          this.ipa_data_bak=file.response.data.app.ipa_data_bak
          this.package_name=file.response.data.app.package_name
          this.version_code=file.response.data.app.version_code
          this.bundle_name=file.response.data.app.bundle_name
          this.filesize=file.response.data.app.filesize
          this.thirdInput=this.package_name
          this.thirdInput1=this.display_name
          this.thirdInput2=this.version_code
          this.icon1=file.response.data.app.icon
          this.img.push(file.response.data.app.img)
          console.log(this.img)
          console.log('图片上传成功的时候的img集合',file.response.data.app.img)
        },
        /*开关*/
        swich(){
          if(this.switchValue==false){
            //this.state=0
            this.gengxing=0
          }else{
            // this.state=1
            this.gengxing=1
          }
        },
        /*开关*/
        swich1(){
          if(this.switchValue1==false){
            this.newState=0
          }else{
            this.newState=1
          }
        },  /*是否付费开关*/
        swich2(){
          if(this.switchValue2==true){
            this.fufei=true
          }else{
            this.fufei=false
            this.fufeiInput=0
          }
          console.log(this.fufeiInput)
        },

        submission(){
          const loading = this.$loading({
            lock: true,
            text: '拼命签名中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          let data={
            id:this.$route.query.id,
            desc:this.textarea, //描述
            introduction:this.textarea1, //功能简介
            path:this.path, //应用地址
            status:1,//是否启用;1-启用;0-禁用
            score_num:this.fourthInput, //评分人数
            is_force:this.newState, //1要 0不要
            apk_url:this.EvenInput, //安卓下载地址
            download_code:this.TenInput,//下载码
            version_code:this.thirdInput2,//版本号
            display_name:this.thirdInput1,//应用名
            img:this.img,//图片
            icon:this.icon1,
            ipa_data_bak:this.ipa_data_bak,
            package_name:this.package_name,
            filesize:this.filesize,
            bundle_name:this.bundle_name,
            remark:this.beizhuInput,
            download_limit:this.xianzhiInput,
            is_update:this.gengxing,
            download_money:this.fufeiInput
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/update',qs.stringify(data),config).then(res => {
            console.log(res.data.data)
            loading.close();
            this.$router.push({
              path:'/appManagement'
            })
          }, err => {
            console.log(err)
          })
        }
      },
      mounted(){
          this.ss=BASE_URL
        this.newdeUrl=BASE_URL+'/api/common/upload'
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appDes',qs.stringify(data),config).then(res => {
          console.log(res.data.data)
          this.list=res.data.data
          this.icon=BASE_URL+this.list.icon
          this.fourthInput=res.data.data.score_num
          this.fivethInput=res.data.data.type
          this.textarea=res.data.data.desc
          this.textarea1=res.data.data.introduction
          this.thirdInput1=res.data.data.name
          this.thirdInput2=res.data.data.version_code
          this.TenInput=res.data.data.download_code
          this.EvenInput=res.data.data.apk_url
          this.beizhuInput=res.data.data.remark
          this.xianzhiInput=res.data.data.download_limit
          this.package_name=res.data.data.package_name
          for(var i=0;i<this.list.imgs.length;i++){
            var newobj={}
            newobj.name=i+''
            newobj.url=BASE_URL+this.list.imgs[i]
            this.imgList.push(newobj)
            this.img.push(this.list.imgs[i])
          }
          console.log( this.imgList)

        }, err => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  .updateApplication{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .firstDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .firstDiv_small {
    width: 78%;
    height: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #06B2B6;
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
  .supplementOne{
    display: flex;
    align-items: baseline;
  }
  .textOne{
    width: 70px;
    text-align: right;
    font-size: 16px;
    color: #333333;
  }
  .supplementTwo p:nth-child(1),.supplementTen p:nth-child(1),.supplementThird p:nth-child(1),.supplementThird1 p:nth-child(1),.supplementThird2 p:nth-child(1),.supplementFourth p:nth-child(1),.supplementFiveth p:nth-child(1),.supplementsixth p:nth-child(1),.supplementSeventh p:nth-child(1),.supplementEightth p:nth-child(1){
    width: 70px;
    text-align: right;
    font-size: 16px;
    color: #333333;
  }

  .supplementOneImg{
    display: flex;
    align-items: center;
  }
  .supplementOneImg img{
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }
  .supplementOneImg p{
    margin-left: 15px;
  }
  .supplementTwo{
    width: 400px;
    display: flex;
    margin-top: 20px;
    align-items: center;
  }

  .supplementTen,.supplementThird,.supplementThird1,.supplementThird2,.supplementFourth,.supplementFiveth,.supplementsixth,.supplementSeventh,.supplementEightth{
    display: flex;
    align-items: center;
    margin-top: 15px;
    /*justify-content: center;*/
  }

  .thirdInput{
    width: 310px;
    margin-left: 20px;
  }
  .text{
    font-size: 14px;
  }
  .ss{
    display: flex;
  }
  .submission{
    width: 190px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    border-radius: 6px;
    color: white;
    background-color: #14BEC8;
    margin: 20px auto 80px auto;
    cursor: pointer;
  }
  .supplement{
    width: 80%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto 0 auto;
  }
  .supplementOne{
    display: flex;
    align-items: baseline;
    /*justify-content: center;*/
  }
  .textOne{
    width: 70px;
    text-align: right;
    font-size: 16px;
    color: #333333;
  }
  .supplementTwo p:nth-child(1),.supplementTen p:nth-child(1),.supplementThird p:nth-child(1),.supplementFourth p:nth-child(1),.supplementFiveth p:nth-child(1),.supplementsixth p:nth-child(1),.supplementSeventh p:nth-child(1),.supplementEightth p:nth-child(1){
    width: 70px;
    text-align: right;
    font-size: 16px;
    color: #333333;
  }

  .supplementOneImg{
    display: flex;
    align-items: center;
  }
  .supplementOneImg img{
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }
  .supplementOneImg p{
    margin-left: 15px;
  }
  .supplementTwo{
    display: flex;
    margin-top: 20px;
    align-items: center;
  }

  .supplementTen,.supplementThird,.supplementFourth,.supplementFiveth,.supplementsixth,.supplementSeventh,.supplementEightth{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .thirdInput{
    width: 310px;
    margin-left: 20px;
  }
  .imgl{
    width: 600px;
  }
  .baoming{
    width: 305px;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
    margin-left: 25px;
  }
  .sixDivImg{
    width: 148px;
    height: 148px;
    margin-left: 20px;
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
  .oo{
    margin-left: 285px;
  }
  .supplementThird13{
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .uploadBtn {
    width: 190px;
    height: 50px;
    background-color: #14BEC8;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;
    color: white;
    margin: 10px auto 0 auto;
    cursor: pointer;
  }

  .uploadBtn img {
    width: 16px;
    height: 20px;
    margin-right: 10px;
  }
  .fufei{
    width: 70px;
  }
</style>
<style>
  .el-upload-list--picture-card{
    display: flex !important;
  }
  .hide .el-upload--picture-card {
    display: none;
  }
  .el-switch{
    width: 60px !important;
    margin-left: 20px;
  }
  .el-switch__core{
    width: 60px !important;
  }
  .el-button--primary{
    color: #FFF;
    background-color: #14BEC8;
    border-color: #14BEC8;
  }
  .el-button{
    width: 100px;
  }
  .upload-demo{
    text-align: center;
  }
  .el-upload__tip{
    font-size: 15px;
  }
</style>
