<template>
  <div class="applicationMerge">
    <div class="applicationMergeOne">
      <p>Andriod下载地址</p>
      <img @click="bangzhu" @mouseleave="helpleave()" class="bangzhu" src="../../../static/image/superSignature/bangzhu.png" alt="">
      <div v-if="tishi" class="kuang">
        <p>
          Andriod手机打开您的下载地址
          并点击安装时，会自动使用该地
          址进行下载
        </p>
      </div>

      <el-input
        v-on:input="downInput"
        class="seachInput"
        v-model="downInput">
      </el-input>
    </div>
    <div class="applicationMergeTwo">
      <p>Andriod应用上传</p>
      <div class="applicationMergeTwoSmall">
        <el-upload
          class="upload-demo"
          drag
          :limit='limitCount'

          accept=".apk"
          action="string"
          :http-request="newuploadapk"

          multiple>
          <i class="el-icon-upload"></i>

          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传apk文件，且不超过2G</div>
        </el-upload>
        <el-progress v-if="progressFlag == true" :percentage="progressPercent"></el-progress>

      </div>
    </div>
    <div class="preservation" @click="preservation"><p>保存</p></div>
  </div>
</template>

<script>
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  export default {
    name: "applicationMerge",
    data() {
      return {
        progressFlag:false, //进度条布尔值
        progressPercent:0, //进度条默认值
        upload_url:'',
        limitCount:1,
        downInput: '',
        tishi:false,
        newdeUrl:'',
        apkvalue:'',
      }
    },
    methods:{
      newuploadapk(item){
        let formData = new FormData()
        var timeStamp=Math.round(new Date()/1000)
        console.log('上传apk包接口-参数', item.file)
        let config1 = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.get(BASE_URL+'/api/common/ossToken',config1).then(res => {
          if(res.data.code==0){
            this.$message.error(res.data.msg);
          }else{
            formData.append('policy', res.data.data.policy)
            formData.append('success_action_status', 200)
            formData.append('signature', res.data.data.signature)
            formData.append('OSSAccessKeyId', res.data.data.accessid)
            formData.append('name',this.$md5(item.file.name.split(".apk")[0])+timeStamp+'.apk')
            formData.append('key', res.data.data.dir+this.$md5(item.file.name.split(".apk")[0])+timeStamp+'.apk')
            formData.append('file', item.file)
            this.apkvalue=res.data.data.dir+this.$md5(item.file.name.split(".apk")[0])+timeStamp+'.apk'
            this.progressFlag=true
            let config2 = {
              headers:{'token':localStorage.getItem('Authorization')},
              onUploadProgress: progressEvent => {
                // progressEvent.loaded:已上传文件大小
                // progressEvent.total:被上传文件的总大小
                this.progressPercent = Number((progressEvent.loaded / progressEvent.total * 100).toFixed(2))
              }
            };
            axios.post(res.data.data.host,formData,config2).then(res => {
              this.progressFlag=false
              if(res.data.code==0){
                this.$message.error(res.data.msg);
              }else{
                this.downInput=this.apkvalue
              }
            }, err => {
              this.$message.error('上传apk包失败');
            })



          }
        }, err => {
          this.$message.error('上传apk包失败');
        })


      },
      bangzhu(){
        this.tishi=!this.tishi
      },
      helpleave(){
        this.tishi=false
      },
      // /*上传文件*/
      // handleChange(file, fileList) {
      //   this.fileList = fileList.slice(-3);
      // },
      // success(response, file, fileList) {
      //   // console.log(response.data)
      //   this.downInput=response.data.url
      // },
      preservation(){
        let data={
          app_id:this.$route.query.id,
          apk_url:this.downInput
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/apkUrl',qs.stringify(data),config).then(res => {
          // console.log(res.data)
          if(res.data.code==200){
            this.$router.push({
              path:'/appManagement'
            })
          }else if(res.data.code==0){
            this.$message.error(res.data.msg);
          }
        }, err => {
          // console.log(err)
        })
      }
    },
    mounted(){
      this.newdeUrl=BASE_URL+'/api/common/upload'
      this.upload_url=UPLOAD_BASE_URL
      let data={
        id:this.$route.query.id
      }
      let config = {
        headers:{'token':localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/appDes',qs.stringify(data),config).then(res => {
        // console.log(res.data.data)
        this.downInput=res.data.data.apk_url
      }, err => {
        // console.log(err)
      })

    }
  }
</script>

<style scoped>
  .applicationMerge {
    width: 100%;
    height: 500px;
  }

  .applicationMergeOne {
    width: 70%;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: 45px;
    margin-top: 50px;
    position: relative;
  }

  .applicationMergeOne .bangzhu {
    width: 21px;
    height: 21px;
    margin-left: 10px;
  }

  .applicationMergeOne .kuang {
    width: 254px;
    height: 163px;
    background-image: url('../../../static/image/superSignature/kuang.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: 12%;
    top: 68%;
    z-index: 9999;
  }
.kuang p{
  width: 197px;
  height: 60px;
  font-size: 14px;
  color: #006B6D;
  margin: 50px auto 0 auto;
}
  .seachInput {
    width: 340px;
    margin-left: 10px;
  }

  .applicationMergeTwo {
    width: 70%;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: 45px;
    margin-top: 50px;
  }

  .applicationMergeTwoSmall {
    margin-left: 20px;
  }

  .preservation {
    width: 135px;
    height: 40px;
    background-color: #2F82FF;
    border-radius: 2px;
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 16px;
    margin-left: 45px;
    margin-top: 50px;
    cursor: pointer;
  }
</style>
<style>
  .applicationMergeTwoSmall .el-progress{
    width: 360px !important;
    margin: 0 auto;
  }
  .applicationMergeTwoSmall .el-progress-bar{
    padding-right: 0!important;
    margin-right: 0!important;
  }
  .applicationMergeTwoSmall .el-progress__text{
    position: absolute !important;
  }
</style>
