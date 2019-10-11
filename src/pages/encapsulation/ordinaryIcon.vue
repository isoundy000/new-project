<template>
<div class="ordinaryIcon">
  <div class="ordinaryIconDiv newicon">
    <p class="ordinaryIconDivP">应用图标:</p>
    <div style="width: 592px;display: flex;align-items: center;margin-left: 3%">
      <el-upload
        class="ss"
        :before-upload="beforeAvatarUpload"
        :limit='limitCount'
        :on-success="success"
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
  <div class="ordinaryIconDiv start">
    <p class="ordinaryIconDivP">启动图:</p>
    <div style="width: 592px;display: flex;align-items: center;margin-left: 3%">
      <el-upload
        class="ss"
        :limit='limitCount'
        :on-success="success1"
        :class="{hide:hideUpload1}"
        :headers="headers"
        :action="newdeUrl"
        list-type="picture-card"
        :file-list="imgList1"
        :on-preview="handlePictureCardPreview1"
        :on-remove="handleRemove1"
        :on-change="deleteL1">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible1">
        <img width="100%" :src="dialogImageUrl1" alt="">
      </el-dialog>
      <p style="width: 400px;font-size: 14px;font-weight: bold;margin-left: 15px">
        1248*2208尺寸，小于1M，
        PNG、JPG格式
      </p>
    </div>
  </div>
  <div class="ordinaryIconDiv selectopion">
    <p class="ordinaryIconDivP">显示时间:</p>
    <div class="selectFirstDiv_small " >
      <img  v-if="ordinaryNo" src="../../../static/image/superSignature/danxuan.png" alt="">
      <img  v-else @click="ordinaryNoClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
      <p class="selectFirstDiv_smallP">不显示</p>
    </div>
    <div class="selectFirstDiv_small " >
      <img  v-if="ordinaryOne" src="../../../static/image/superSignature/danxuan.png" alt="">
      <img  v-else @click="ordinaryOneClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
      <p class="selectFirstDiv_smallP">1秒</p>
    </div>
    <div class="selectFirstDiv_small " >
      <img  v-if="ordinaryTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
      <img  v-else @click="ordinaryTwoClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
      <p class="selectFirstDiv_smallP">2秒</p>
    </div>
    <div class="selectFirstDiv_small " >
      <img  v-if="ordinaryThree" src="../../../static/image/superSignature/danxuan.png" alt="">
      <img  v-else @click="ordinaryThreeClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
      <p class="selectFirstDiv_smallP">3秒</p>
    </div>
    <div class="selectFirstDiv_small " >
      <img  v-if="ordinaryFour" src="../../../static/image/superSignature/danxuan.png" alt="">
      <img  v-else @click="ordinaryFourClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
      <p class="selectFirstDiv_smallP">4秒</p>
    </div>
  </div>
  <div class="ordinaryIconDiv"  >
    <p class="ordinaryIconDivP"></p>
    <div style="width: 492px;margin-bottom: 50px;display: flex;margin-top: 90px">
      <p  class="gonextStep" @click="previousStep" >上一步</p>
      <p v-show="isNext" class="huinextStep" >下一步</p>
      <p v-show="isNext1"  class="lvnextStep"  @click="nextStep">下一步</p>
    </div>
  </div>

</div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import qs from 'qs'
    export default {
        name: "ordinaryIcon",
      data(){
        return{
          limitCount:1,//允许照片上传的个数
          headers:{
            "token":localStorage.getItem('Authorization') // 直接从本地获取token就行
          },
          newdeUrl:'',
          imgList:[],
          hideUpload: false,
          dialogImageUrl: '',
          dialogVisible: false,
          ordinaryIconLogoimg:'',//logo图片
          imgList1:[],
          hideUpload1: false,
          dialogImageUrl1: '',
          dialogVisible1: false,
          ordinaryIconStartgoimg:'',//启动图片

          ordinaryNo:true, //显示时间-不显示
          ordinaryOne:false,//显示时间-1秒
          ordinaryTwo:false,//显示时间-2秒
          ordinaryThree:false,//显示时间-3秒
          ordinaryFour:false,//显示时间-4秒
          ordinaryNum:0,
          isNext:true,
          isNext1:false

        }
      },
      methods:{
        beforeAvatarUpload(file) {
          const isJPG = (file.type === 'image/jpeg'||file.type === 'image/png');

          const isLt2M = file.size / 1024 / 1024 < 1;

          if (!isJPG) {
            this.$message.error('上传图标图片只能是 JPG和PNG格式!');
          }

          if (!isLt2M) {
            this.$message.error('上传图标图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        /*上传图片成功*/
        success(response, file){
          // console.log(response.data.domain+response.data.url)
          this.ordinaryIconLogoimg=file.response.data.url
          // console.log(this.ordinaryIconLogoimg)
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
          this.ordinaryIconLogoimg=''
          this.hideUpload = file.length >= this.limitCount;
          this.verification()
        },
        handlePictureCardPreview(file) {
          // console.log(file)
          this.dialogImageUrl = file.url;
          // console.log(this.dialogImageUrl)
          this.ordinaryIconLogoimg=file.url
          this.dialogVisible = true;
        },
        /*启动页*/
        /*上传图片成功*/
        success1(response, file){
          // console.log(response.data.domain+response.data.url)
          this.ordinaryIconStartgoimg=file.response.data.url
          // console.log(this.ordinaryIconStartgoimg)
          this.verification()
          //this.img.push(img)
        },
        /*上传图片触发的方法*/
        deleteL1(response, file, fileList){
          this.hideUpload1 = file.length >= 1;
          this.verification()
        },
        handleRemove1(file, fileList) {
          // console.log(file, fileList);
          this.ordinaryIconStartgoimg=''
          this.hideUpload1 = file.length >= 1;
          this.verification()
        },
        handlePictureCardPreview1(file) {
          // console.log(file)
          this.dialogImageUrl1 = file.url;
          // console.log(this.dialogImageUrl1)
          this.ordinaryIconStartgoimg=file.url
          this.dialogVisible1 = true;
        },
        /*不显示*/
        ordinaryNoClick(){
          this.ordinaryNo=true
          this.ordinaryOne=false
          this.ordinaryTwo=false
          this.ordinaryThree=false
          this.ordinaryFour=false
          this.ordinaryNum=0
        },
        /*1秒*/
        ordinaryOneClick(){
          this.ordinaryNo=false
          this.ordinaryOne=true
          this.ordinaryTwo=false
          this.ordinaryThree=false
          this.ordinaryFour=false
          this.ordinaryNum=1
        },
        /*2秒*/
        ordinaryTwoClick(){
          this.ordinaryNo=false
          this.ordinaryOne=false
          this.ordinaryTwo=true
          this.ordinaryThree=false
          this.ordinaryFour=false
          this.ordinaryNum=2
        },
        /*3秒*/
        ordinaryThreeClick(){
          this.ordinaryNo=false
          this.ordinaryOne=false
          this.ordinaryTwo=false
          this.ordinaryThree=true
          this.ordinaryFour=false
          this.ordinaryNum=3
        },
        /*4秒*/
        ordinaryFourClick(){
          this.ordinaryNo=false
          this.ordinaryOne=false
          this.ordinaryTwo=false
          this.ordinaryThree=false
          this.ordinaryFour=true
          this.ordinaryNum=4
        },
        /*表单验证*/
        verification(){
          if(this.ordinaryIconStartgoimg!=''&& this.ordinaryIconLogoimg!=''){
                this.isNext=false
                this.isNext1=true
          }else{
                this.isNext=true
                this.isNext1=false
          }
        },
        nextStep(){
          let data={
            icon:this.ordinaryIconLogoimg,
            start_img:this.ordinaryIconStartgoimg,
            start_time:this.ordinaryNum,
          }
          localStorage.setItem('iconData', JSON.stringify(data));
          this.$router.push({
            name:'ordinaryConfig',
            params:{
              active:2,
            }
          })
        },
        previousStep(){
          this.$router.push({
            name:'ordinaryInformation',
            params:{
              active:0
            }
          })
        }
      },
      mounted(){
        this.newdeUrl=BASE_URL+'/api/common/upload'
        // console.log('接受值：'+this.$route.params)
       // console.log('接受值：'+JSON.stringify(this.$route.params))
      }
    }
</script>
<style>
  .newicon .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 130px;
    height: 130px;
    line-height: 130px;
    vertical-align: top;
  }
  .newicon .el-upload-list--picture-card .el-upload-list__item-thumbnail {
    max-width: 100%;
    max-height: 100%;
  }
  .newicon .el-upload-list--picture-card .el-upload-list__item{
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 130px;
    height: 130px;
    margin: 0 8px 8px 0;
    display: inline-block;
  }
  .start .el-upload-list--picture-card .el-upload-list__item{
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 230px;
    height: 400px;
    margin: 0 8px 8px 0;
    display: inline-block;
  }
  .start .el-upload-list--picture-card .el-upload-list__item-thumbnail {
    max-width: 100%;
    max-height: 100%;
  }
  .start .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 230px;
    height: 400px;
    line-height: 400px;
    vertical-align: top;
  }
</style>
<style scoped>
  .ordinaryIcon{
    margin-top: 30px;
  }
.ordinaryIconDiv{
  display: flex;
  align-items: center;
}
  .ordinaryIconDivP{
    font-weight: bold;
    font-size: 14px;
    margin-left: 20%;
  }
  .start{
    margin-top: 50px;
  }
  .selectFirstDiv_small{
    width: 100px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .selectFirstDiv_smallP{
    margin-left: 10px;
    font-size: 14px;
    color: #333333;
  }
  .selectopion{
    margin-top: 30px;
  }
  .gonextStep{
    width:167px;
    height:50px;
    background:rgba(232,232,232,1);
    border-radius:2px;
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 30px;
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
    margin-bottom: 30px;
    margin-left: 25px;
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
    margin-left: 25px;
  }
</style>
