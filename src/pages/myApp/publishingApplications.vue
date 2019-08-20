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
    <div class="secondDiv">
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
          <p>(支持ipa文件，支持中断后续传)</p>
        </div>

      </div>
      <div v-else-if="isUpload" class="upload">
        <div class="uploadDiv">
          <el-upload
            class="upload-demo"
            :on-success="success"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
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
            <img src="../../../static/image/survey/app.png" alt="">
            <div >
              <p>全民大冒险</p>
              <p>版本：v1.2.0</p>
            </div>
          </div>

        </div>
        <div class="supplementTwo">
          <p>是否启用</p>
          <el-switch
            v-model="switchValue"
            active-color="#06B2B6"
            inactive-color="#999999"
            @change="ss">
          </el-switch>
        </div>
        <div class="supplementThird">
          <p>包名</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="thirdInput" placeholder="请输入内容"></el-input>
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
              :class="{hide:hideUpload}"
              action="https://jsonplaceholder.typicode.com/posts/"
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
  export default {
    name: "publishingApplications",
    data() {
      return {
        textarea:'',
        textarea1:'',
        limitCount:2,
        disInput:true,
        hideUpload: false,
        dialogImageUrl: '',
        dialogVisible: false,
        thirdInput:'',
        fourthInput:'',
        fivethInput:'',
        switchValue: false,
        current: 0,
        active: 2,
        isSuper: false,
        isUpload: false,
        isSupplement: true,
        isDistribute: false
      }
    },
    methods: {
      upload(){
        this.active = 1
        this.isSuper = false
        this.isUpload = true
      },
      deleteL(response, file, fileList){
        console.log(response)
        console.log(file)
        console.log(fileList)
        this.hideUpload = file.length >= this.limitCount;
      },
      next() {
        if (this.active++ > 2) this.active = 0;
      },
      success(response, file, fileList) {
        console.log(response)
        console.log(file)
        console.log(fileList)
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
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      ss(){
        this.disInput=!this.disInput
      },
      submission(){
        this.active = 3

        this.$router.push({
          path:'/appManagement'
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
  justify-content: c;
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
 .supplementTwo p:nth-child(1),.supplementThird p:nth-child(1),.supplementFourth p:nth-child(1),.supplementFiveth p:nth-child(1),.supplementsixth p:nth-child(1),.supplementSeventh p:nth-child(1),.supplementEightth p:nth-child(1){
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
  }
  .supplementOneImg p{
    margin-left: 15px;
  }
  .supplementTwo{
    display: flex;
    margin-top: 20px;
    align-items: center;
  }

  .supplementThird,.supplementFourth,.supplementFiveth,.supplementsixth,.supplementSeventh,.supplementEightth{
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
