<template>
  <div class="personalCertificate">
    <div class="firstDiv">
      <div class="firstDiv_small">
        <img src="../../../static/image/survey/hpshouye.png" alt="">
        <p>您当前位置：</p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/survey' }">实名认证</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="promptMessage">
      <!--<p><i class="el-icon-warning"></i>{{msg}}</p>-->
    </div>
    <el-form :rules="rules" ref="form" label-width="134px" :model="form" class="demo-form form-message">
      <!--<el-form-item label="手机号码" prop="mobile">-->
        <!--<div class="phone-router">-->
          <!--<div class="phone-color">{{phone}}</div>-->
          <!--<div class="phone-button">-->
            <!--<el-button @click="updateRouter">修改</el-button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="邮箱地址" prop="email">-->
        <!--<el-input clearable v-model="form.email" placeholder="请输入邮箱地址"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="" prop="captcha">-->
        <!--<div class="email-code">-->
          <!--<el-input clearable v-model="form.captcha" placeholder="请填写邮箱验证码"></el-input>-->
          <!--<el-button plain :disabled="scopeBoolean" class="col-email-code-button" @click="emailCaptcha">-->
            <!--{{emailCapCode}}-->
          <!--</el-button>-->
        <!--</div>-->
      <!--</el-form-item>-->
      <el-form-item label="身份证图片">
        <div class="card-img">
          <div class="card-text">{{text}}</div>
        </div>
      </el-form-item>
      <div class="personalCertificate-contact">
        <div class="contact-hold">
          <el-upload
            class="avatar-uploader"
            accept='.jpg,.png'
            action="string"
            :http-request="newuploadfrontimg"
            :show-file-list="false"
            :before-upload="beforeIdentityholdUpload">
            <img v-if="identityfront" :src="identityfront" class="contact-avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p>上传身份证正面照片</p>
        </div>
        <div class="contact-hold">
          <el-upload
            class="avatar-uploader"
            accept='.jpg,.png'
            action="string"
            :http-request="newuploadbackimg"
            :show-file-list="false"
            :before-upload="beforeIdentitybackUpload">
            <img v-if="identityback" :src="identityback" class="contact-avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p>上传身份证反面照片</p>
        </div>
        <div class="contact-hold">
          <el-upload
            class="avatar-uploader"
            accept='.jpg,.png'
            action="string"
            :http-request="newuploadholdimg"
            :show-file-list="false"
            :before-upload="beforeidentityholdUpload">
            <img v-if="identityhold  " :src="identityhold  " class="contact-avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p>上传手持身份证照片</p>
        </div>
      </div>
      <div class="enterpriseCertification-reminder">
        <p>提示：</p>
        <p>1.请上传与手机号码身份信息一致的身份证照片，用于认证</p>
        <p>2.单张照片大小不超过5M，支持PNG、JPG格式；</p>
        <p>3.所上传的图片，保证文字和图片、人像清晰可见。</p>
      </div>
      <div class="enterpriseCertification-el-button">
        <el-button class="last-step" @click="lastStep">上一步</el-button>
        <el-button class="enterprise-refer" @click="refer('form')">提交</el-button>
      </div>
    </el-form>
    </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  import {REN_BASE_URL} from '../../api/index'
    export default {
        name: "personAuthentication",
      data(){
          return{
            imageUrl:'',
            limitCount:1,
            hideUpload: false,
            dialogImageUrl: '',
            dialogVisible: false,
            headers:{
              "token":localStorage.getItem('Authorization') // 直接从本地获取token就行

            },
            action: `${REN_BASE_URL}`,
            active: 1,
            text: '应监管部门要求，网上发布APP必须进行实名登记， 我们采用了高于行业标准的要求来保障您的信息安全，为了进一步的保护您的个人信息，建议您在上传的实名信息中添加水印文字-仅供实名认证使用。',
            // msg: '请使用与账号信息中的手机号码一致的身份证信息提交认证。',
            form: {
              // email: '',
              // captcha: '',
              identityfront: '',
              identityback: '',
              identityhold: '',
            },
            scopeBoolean: false,
            offet: true,
            rules: {
              // email: [
              //   {required: true, message: '请填写邮箱地址', trigger: 'blur'}
              // ],
              // captcha: [
              //   {required: true, message: '请填写邮箱验证码', trigger: 'blur'}
              // ],
            },
            // phone: '',
            emailCapCode: '获取邮箱验证码',
            identityfront: '',
            identityback: '',
            identityhold: '',
            timer: null,
          }
      },
      mounted(){
          // this.phone = localStorage.getItem('newmobile');
      },
      methods:{
        /*上传图片*/
        newuploadfrontimg(item){
          let formData = new FormData()
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.get(BASE_URL+'/api/common/ossToken',config).then(res => {
            formData.append('policy', res.data.data.policy)
            formData.append('success_action_status', 200)
            formData.append('signature', res.data.data.signature)
            formData.append('OSSAccessKeyId', res.data.data.accessid)
            formData.append('name', item.file.name)
            formData.append('key', res.data.data.dir+item.file.name)
            formData.append('file', item.file)
            this.identityfront = URL.createObjectURL(item.file);
            this.form.identityfront = res.data.data.dir+item.file.name
            axios.post(res.data.data.host,formData,config).then(res => {
            }, err => {
              this.$message.error('上传图片失败');
            })
          }, err => {
            // console.log(err)
          })
        },
        newuploadbackimg(item){
          let formData = new FormData()
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.get(BASE_URL+'/api/common/ossToken',config).then(res => {
            formData.append('policy', res.data.data.policy)
            formData.append('success_action_status', 200)
            formData.append('signature', res.data.data.signature)
            formData.append('OSSAccessKeyId', res.data.data.accessid)
            formData.append('name', item.file.name)
            formData.append('key', res.data.data.dir+item.file.name)
            formData.append('file', item.file)
            this.identityback = URL.createObjectURL(item.file);
            this.form.identityback = res.data.data.dir+item.file.name
            axios.post(res.data.data.host,formData,config).then(res => {
            }, err => {
              this.$message.error('上传图片失败');
            })
          }, err => {
            // console.log(err)
          })
        },
        newuploadholdimg(item){
          let formData = new FormData()
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.get(BASE_URL+'/api/common/ossToken',config).then(res => {
            console.log(item.file.name)
            formData.append('policy', res.data.data.policy)
            formData.append('success_action_status', 200)
            formData.append('signature', res.data.data.signature)
            formData.append('OSSAccessKeyId', res.data.data.accessid)
            formData.append('name', item.file.name)
            formData.append('key', res.data.data.dir+item.file.name)
            formData.append('file', item.file)
            this.identityhold = URL.createObjectURL(item.file);
            this.form.identityhold = res.data.data.dir+item.file.name
            axios.post(res.data.data.host,formData,config).then(res => {
            }, err => {
              this.$message.error('上传图片失败');
            })
          }, err => {
            // console.log(err)
          })
        },

        //验证码定时器
        timesOut() {
          let i = 60;
          const interCode = () => {
            clearTimeout(this.timer);
            if (this.offet === true) {
              if (i > 1) {
                i--;
                setTimeout(interCode, 1000);
                this.emailCapCode = i;
                this.scopeBoolean = true;
              } else {
                if (i === 1) {
                  clearTimeout(this.timer);
                  this.scopeBoolean = false;
                  this.emailCapCode = '重新获取验证码';
                }
              }
            } else {
              clearTimeout(this.timer);
              this.scopeBoolean = false;
            }
          };
          this.timer = setTimeout(interCode, 0);
        },
        emailCaptcha() {
          if (this.form.email == '') {
            this.$message({
              message: '请输入邮箱地址',
              type: 'warning',
              duration: 1500
            });
            return false;
          }
          this.timesOut();
        },
        lastStep() {
          this.$router.push('/realName')
        },
        refer(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              const loading = this.$loading({
                lock: true,
                text: '拼命认证中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
              let json,
                imgMsg = this.form.identityfront == '' && '请上传身份证正面照片' || this.form.identityback == '' && '请上传身份证反面照片' || this.form.identityhold == '' && '请上传手持身份证照片';
              if (imgMsg.length > 0) {
                this.$message({
                  message: imgMsg,
                  type: 'warning',
                  duration: 1500
                });
                loading.close();
                return false;
              }
             json = {
                identityfront: this.form.identityfront,
                identityback: this.form.identityback,
                identityhold: this.form.identityhold,
                type: 1
              };
              let config = {
                headers: {'token': localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/user/authentication',qs.stringify(json),config).then(res => {
                if(res.data.code === 0){
                  this.$message({
                    message: res.data.msg,
                    type: 'warning',
                    duration: 1500
                  });
                  loading.close();
                }else{
                  this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration: 1500
                  });
                  loading.close();
                  this.$router.push('/examine');
                  console.log(res.data)
                }

              }, err => {
                console.log(err)
                this.$message({
                  message: '上传失败',
                  type: 'warning',
                  duration: 1500
                });
                loading.close();
              })
            } else {
              return false;
            }
          });
        },
        updateRouter() {
          this.$router.push('/accountSettings');
        },
        /**
         * 身份证正面
         * handleIdentityholdSuccess 异步成功
         * beforeIdentityholdUpload 上传之前
         * 图片上传
         * @param res
         * @param file
         */
        // handleIdentityholdSuccess(res, file) {
        //   this.form.identityfront = file.response.data.url;
        //   this.identityfront = URL.createObjectURL(file.raw);
        // },
        beforeIdentityholdUpload(file) {
          const isLt2M = file.size / 1024 / 1024 < 5;
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 5MB!');
          }
          return isLt2M;
        },

        /**
         * 身份证反面
         * handleIdentitybackSuccess 异步成功
         * beforeIdentitybackUpload 上传之前
         * 图片上传
         * @param res
         * @param file
         */
        handleIdentitybackSuccess(res, file) {
          this.form.identityback = file.response.data.url;
          this.identityback = URL.createObjectURL(file.raw);
          console.log(this.form.identityback)
          console.log(this.identityback)
          console.log(file.raw)
        },
        beforeIdentitybackUpload(file) {
          const isLt2M = file.size / 1024 / 1024 < 5;
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 5MB!');
          }
          return isLt2M;
        },

        /**
         * 手持身份证照片
         * handleIdentityholdSuccess 异步成功
         * beforeIdentityholdUpload 上传之前
         * 图片上传
         * @param res
         * @param file
         */
        handleidentityholdSuccess(res, file) {
          // this.form.identityhold = file.response.data.url;
          // this.identityhold = URL.createObjectURL(file.raw);
        },
        beforeidentityholdUpload(file) {
          const isLt2M = file.size / 1024 / 1024 < 5;
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 5MB!');
          }
          return isLt2M;
        },
      }
    }
</script>
<style scoped>
  .contact-hold .avatar-uploader {
    border: 1px dashed rgba(229, 229, 229, 1);
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .contact-hold .avatar-uploader-icon {
    font-size: 36px;
    color: #8CBFFA;
    width: 234px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background-color: #FFFFFF;
  }

  .contact-hold:nth-child(1) .avatar-uploader-icon {
    background: url(".././../../static/image/card/r_zm_tu.png") no-repeat center center;
  }

  .contact-hold:nth-child(2) .avatar-uploader-icon {
    background: url(".././../../static/image/card/s_fm_tu.png") no-repeat center center;
  }

  .contact-hold:nth-child(3) .avatar-uploader-icon {
    background: url(".././../../static/image/card/s_sc_tu.png") no-repeat center center;
  }

  .contact-hold .avatar-uploader-icon i {
    font-size: 50px;
  }

  .promptMessage-uploader .avatar-uploader-icon i {
    font-size: 50px;
  }

  .promptMessage-uploader .avatar-uploader-icon p {
    font-size: 14px;
    color: #999999;
  }

  .contact-avatar {
    width: 234px;
    height: 150px;
    display: block;
  }
</style>
<style lang="less" scoped>
  .form-message {
    width: 1200px;
    margin: 35px auto 0 auto;
    padding: 0 104px 0 75px;
  }

  .promptMessage {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
  p {
    width: 730px;
    height: 42px;
    line-height: 42px;
    background: rgba(242, 248, 255, 1);
    border: 1px solid rgba(201, 212, 255, 1);
    color: #666666;
    padding-left: 20px;
  i {
    color: #FF0000;
    font-size: 18px;
    padding-right: 6px;
  }
  }
  }

  .phone-router {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 42px;
    line-height: 42px;
  .phone-color {
    width: 100%;
    background: rgba(247, 247, 247, 1);
    border-radius: 2px;
    padding: 0 0 0 30px;
    color: #666666;
    font-size: 16px;
  }
  .phone-button {
    margin-left: 20px;
  }
  }

  .email-code {
    display: flex;
    flex-direction: row;
  .col-email-code-button {
    margin-left: 20px;
    border: 1px solid rgba(88, 118, 240, 1);
    border-radius: 2px;
    color: rgba(88, 118, 240, 1);
  }
  }

  .card-img {
  .card-text {
    font-size: 12px;
    line-height: 18px;
    color: rgba(255, 58, 58, 1);
    margin: 12px 0 25px 0;
  }
  .contact-hold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  }

  .personalCertificate-contact {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    text-align: center;
    padding-left: 50px;
    justify-content: space-around;
  .contact-hold {
  p {
    padding: 20px 0 40px 0;
  }
  }
  .contact-hold:nth-child(2) {
    margin: 0 10px;
  }
  }

  .enterpriseCertification-reminder {
    color: #666666;
    line-height: 25px;
    padding-left: 60px;
  }

  .enterpriseCertification-el-button {
    width: 100%;
    text-align: center;
    padding: 50px 0 10px 0;
  .last-step, .enterprise-refer {
    width: 150px;
    border-radius: 4px;
  }

  .last-step {
    border: 1px solid rgba(232, 232, 232, 1);
    background: rgba(232, 232, 232, 1);
    color: #999999;
  }

  .enterprise-refer {
    background-color: #2F82FF;
    border: 1px solid #2F82FF;
    color: #ffffff;
  }

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
    border-bottom: 1px solid #2F82FF;
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
  .secondDiv{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .secondDiv p{
    margin-top: 25px;
  }
</style>
