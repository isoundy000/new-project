<template>
  <div class="applicationMerge">
    <div class="applicationMergeOne">
      <p>Andriod下载地址</p>
      <img @click="bangzhu" class="bangzhu" src="../../../static/image/superSignature/bangzhu.png" alt="">
      <div v-if="tishi" class="kuang" style="background-image: url('../../../static/image/superSignature/kuang.png')">
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
          :on-success="success"
          accept=".apk"
          :action="newdeUrl"
          :on-change="handleChange"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传apk文件，且不超过2G</div>
        </el-upload>
      </div>
    </div>
    <div class="preservation" @click="preservation"><p>保存</p></div>
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  export default {
    name: "applicationMerge",
    data() {
      return {
        limitCount:1,
        downInput: '',
        tishi:false,
        newdeUrl:''
      }
    },
    methods:{
      bangzhu(){
        this.tishi=!this.tishi
      },
      /*上传文件*/
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },
      success(response, file, fileList) {
        console.log(response.data)
        this.downInput=response.data.url
      },
      preservation(){
        let data={
          app_id:this.$route.query.id,
          apk_url:this.downInput
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/apkUrl',qs.stringify(data),config).then(res => {
          console.log(res.data)
          if(res.data.code==200){
            this.$router.push({
              path:'/appManagement'
            })
          }else if(res.data.code==0){
            this.$message.error(res.data.msg);
          }
        }, err => {
          console.log(err)
        })
      }
    },
    mounted(){
      this.newdeUrl=BASE_URL+'/api/common/upload'
      this.downInput=this.$route.query.apk_url

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
    background-color: #06B2B6;
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
