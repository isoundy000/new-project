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
          <p class="textOne">应用icon</p>
          <div class="supplementOneImg">
            <img :src="list.icon" alt="">
          </div>

        </div>
        <div class="supplementThird1">
          <p>应用名</p>
          <el-input :disabled="false" class="thirdInput" v-model="thirdInput1" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementThird2">
          <p>版本号</p>
          <el-input :disabled="false" class="thirdInput" v-model="thirdInput2" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementThird">
          <p class="textOne">包名</p>
          <p class="secondP baoming">{{list.package_name}}</p>
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
        <div class="supplementTen">
          <p>下载码</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="TenInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementTen">
          <p>安卓下载地址</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="EvenInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementFourth">
          <p>评分人数</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="fourthInput" placeholder="请输入内容"></el-input>
        </div>

        <div class="supplementsixth">
          <p>应用截图</p>
          <div class="sixDivImg" v-for="(list,index) in imgList">
          <img class="secondP"  :src='list' alt="">
        </div>

          <div class="thirdInput">


            <el-upload
              class="ss"
              :limit='limitCount'
              :on-success="success2"
              :class="{hide:hideUpload}"
              :headers="headers"
              action="https://ios.yoyoacg.com/api/common/upload"
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
            :disabled="disInput"
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
            :disabled="disInput"
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
            thirdInput1:'',
            thirdInput2:'',
            textarea:'',
            textarea1:'',
            limitCount:2,
            disInput:false,
            hideUpload: false,
            dialogImageUrl: '',
            dialogVisible: false,
            thirdInput:'',
            fourthInput:'',
            fivethInput:'',
            switchValue: true,
            switchValue1: false,
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
            imgList:[]

          }
      },
      methods:{
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
          this.img.push(img)
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
          this.hideUpload = file.length >= this.limitCount;

        },
        handlePictureCardPreview(file) {
          console.log(file)
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        /*开关*/
        swich(){
          if(this.switchValue==false){
            //this.state=0
            this.disInput=true
          }else{
            // this.state=1
            this.disInput=false
          }
        },
        /*开关*/
        swich1(){

        },
        submission(){
          let data={
            id:this.$route.query.id,
            desc:this.textarea,
            introduction:this.introduction,
            path:this.path,
            status:1,
            score_num:this.fourthInput
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/update',qs.stringify(data),config).then(res => {
            console.log(res.data.data)
            this.fourthInput=res.data.data.score_num
            this.fivethInput=res.data.data.type
            this.textarea=res.data.data.desc
            this.textarea1=res.data.data.introduction
            this.path=res.data.data.path
          }, err => {
            console.log(err)
          })
        }
      },
      mounted(){
         // alert(this.$route.query.id)
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appDes',qs.stringify(data),config).then(res => {
          console.log(res.data.data)
          this.list=res.data.data
          this.list.icon=BASE_URL+this.list.icon
          this.fourthInput=res.data.data.score_num
          this.fivethInput=res.data.data.type
          this.textarea=res.data.data.desc
          this.textarea1=res.data.data.introduction
          this.thirdInput1=res.data.data.name
          this.thirdInput2=res.data.data.version_code
          for(var i=0;i<this.list.imgs.length;i++){
            this.imgList.push(BASE_URL+this.list.imgs[i])
          }
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
    margin-left: 30px;
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
    margin-left: 30px;
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
  .baoming{
    width: 900px;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
    margin-left: 30px;
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
</style>
