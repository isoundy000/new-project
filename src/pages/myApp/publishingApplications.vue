<template>
  <div class="publishingApplications">
    <div class="firstDiv">
      <div class="firstDiv_small">
        <img src="../../../static/image/survey/shouye@2x.png" alt="">
        <p>您当前位置：</p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
          <el-breadcrumb-item>发布应用</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="secondDiv" v-loading="loading">
      <div class="secondDivSmall">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="超级签名"></el-step>
          <el-step title="上传IPA包"></el-step>
          <el-step title="补充应用信息"></el-step>
          <el-step title="分发"></el-step>
        </el-steps>
      </div>
      <div v-if="isSuper" class="super">
        <div @click="upload" class="uploadBtn">
          <img src="../../../static/image/survey/shangchuanicon.png" alt="">
          <p>立即上传</p>
        </div>
        <div class="text">
          <p>点击按钮选择应用的安装包，或拖拽文件到此区域</p>
          <p>(支持ipa文件，最大200M)</p>
        </div>

      </div>
      <div v-else-if="isUpload" class="upload">
        <div class="uploadDiv">
          <el-upload
            class="upload-demo"
            :on-success="success"
            :headers="headers"
            drag
            accept=".ipa"
            action="https://ios.yoyoacg.com/api/common/upload"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </div>

      </div>
      <div v-else-if="isSupplement" class="supplement">
        <div class="supplementOne">
          <p class="textOne">应用icon</p>
          <div class="supplementOneImg">
            <img :src="icon" alt="">
            <div >
              <p>{{display_name}}</p>
              <p>{{version_code}}</p>
            </div>
          </div>

        </div>

        <div class="supplementThird">
          <p>包名</p>
          <el-input :disabled="true" class="thirdInput" v-model="thirdInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementTwo">
          <p>是否启用</p>
          <el-switch
            v-model="switchValue"
            active-color="#06B2B6"
            inactive-color="#999999"
            @change="swich">
          </el-switch>
        </div>
        <div class="supplementTwo">
          <p>更新功能</p>
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
        <div class="supplementFiveth">
          <p>产品类型</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="fivethInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementsixth">
          <p>应用截图</p>
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
      <div v-else="isDistribute">4</div>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  import qs from 'qs'
  export default {
    name: "publishingApplications",
    data() {
      return {
        loading:false,
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
        switchValue1: true,
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
        img:[]
      }
    },
    computed: {

    },
    methods: {
      upload(){
        this.active = 1
        this.isSuper = false
        this.isUpload = true
      },
      /*上传图片触发的方法*/
      deleteL(response, file, fileList){
        this.hideUpload = file.length >= this.limitCount;
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      /*上传图片成功*/
      success2(response, file){
        var img=file.response.data.url
        this.img.push(img)
      },
      success(response, file, fileList) {
        console.log(file)

        this.display_name=file.response.data.app.display_name
        this.path=file.response.data.url
        this.icon='https://ios.yoyoacg.com'+file.response.data.app.icon
        this.ipa_data_bak=file.response.data.app.ipa_data_bak
        this.package_name=file.response.data.app.package_name
        this.version_code=file.response.data.app.version_code
        this.bundle_name=file.response.data.app.bundle_name
        this.filesize=file.response.data.app.filesize
        this.thirdInput=this.package_name
        // console.log(this.bundle_name)
        // console.log(this.path)
        // console.log(this.icon)
        // console.log(this.ipa_data_bak)
        // console.log(this.package_name)
        // console.log(this.version_code)
        // console.log(this.bundle_name)
        // console.log(this.status)
        // console.log(this.filesize)


        this.active = 2
        this.isSuper = false
        this.isUpload = false
        this.isSupplement=true

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
        // if(this.switchValue1==false){
        //   this.state=0
        //   this.disInput=true
        // }else{
        //   this.state=1
        //   this.disInput=false
        // }
      },
      /*提交事件*/
      submission(){
        // this.active = 3
         this.loading=true

        let f={
          display_name:this.display_name,
          path:this.path,
          icon:this.icon,
          type:1,
          ipa_data_bak:this.ipa_data_bak,
          package_name:this.package_name,
          version_code:this.version_code,
          bundle_name:this.bundle_name,
          filesize:this.filesize,
          desc:this.textarea,
          score_num:this.fourthInput,
          introduction:this.textarea1,
          img:this.img,
          status:this.state,
          download_code:this.TenInput,
          apk_url:this.EvenInput
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post('https://ios.yoyoacg.com/api/app/add',qs.stringify(f),config).then(res => {
          console.log(res.data)
          this.loading=false

          this.$router.push({
            path:'/appManagement'
          })


        }, err => {
          console.log(err)
        })

      }
    },
    mounted(){
      this.active=0
      this.isSuper=true
    }
  }
</script>

<style scoped>
  .publishingApplications {
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

  .secondDiv {
    width: 78%;
    height:auto;
    margin: 36px auto 0 auto;
    border: 1px solid #E5E5E5;
  }

  .secondDivSmall {
    width: 800px;
    margin: 80px auto 0 auto;
  }
  .super {
    width: 100%;
    height: 300px;
    display: flex;
    flex-flow: column;

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
    margin: 100px auto 0 auto;
    cursor: pointer;
  }

  .uploadBtn img {
    width: 16px;
    height: 20px;
    margin-right: 10px;
  }

  .text {
    width: 320px;
    text-align: center;
    margin: 30px auto 0 auto;
    font-size: 14px;
    color: #333333;
  }
  .upload{
    width: 100%;
    height: 300px;
  }
  .uploadDiv{
    margin: 70px auto 0 auto;
    display: flex;
    justify-content: center;
  }
.supplement{
  width: 40%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 50px auto 0 auto;
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

  /*.is-process .el-step__line{*/
  /*border-color: #06B2B6;*/
  /*}*/

</style>
