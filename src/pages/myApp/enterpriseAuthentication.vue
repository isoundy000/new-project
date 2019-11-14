<template>
  <div class="enterpriseCertification">
    <div class="promptMessage">
      <p><i class="el-icon-warning"></i>{{msg}}</p>
    </div>
    <el-form :rules="rules" ref="form" label-width="134px" :model="form" class="demo-form form-message">
      <el-form-item label="企业名称" prop="cname">
        <el-input clearable v-model="form.cname" placeholder="请输入企业名称"></el-input>
      </el-form-item>
      <el-form-item label="企业营业执照号码" prop="license">
        <el-input clearable v-model="form.license" placeholder="请输入企业营业执照号码"></el-input>
      </el-form-item>
      <el-form-item label="上传营业执照照片">
        <div class="promptMessage-uploader">
          <div class="promptMessage-avatar-uploader">
            <el-upload
              class="avatar-uploader"
              :action="action"
              accept='.jpg,.png'
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="businesslicense" :src="businesslicense" class="avatar">
              <div v-else class="avatar-uploader-icon">
                <i class="el-icon-circle-plus"></i>
                <p style="font-size: 16px;margin-bottom: 20px">上传营业执照照片</p>
              </div>
            </el-upload>
          </div>
          <div class="promptMessage-Exemplary">
            <img src="../../../static/image/card/s_zhizhao.png" alt="示例">
          </div>
        </div>
      </el-form-item>
      <el-form-item label="手机号码" prop="mobile">
        <div class="phone-router">
          <div class="phone-color">{{phone}}</div>
          <!--<div class="phone-button">-->
            <!--<el-button @click="updateRouter">修改</el-button>-->
          <!--</div>-->
        </div>
      </el-form-item>
      <el-form-item label="邮箱地址" prop="email">
        <el-input clearable v-model="form.email" placeholder="请输入邮箱地址"></el-input>
      </el-form-item>
      <el-form-item label="" prop="captcha">
        <div class="email-code">
          <el-input clearable v-model="form.captcha" placeholder="请填写邮箱验证码"></el-input>
          <el-button plain :disabled="scopeBoolean" class="col-email-code-button" @click="emailCaptcha">
            {{emailCapCode}}
          </el-button>
        </div>
      </el-form-item>
      <el-form-item label="身份证图片">
        <div class="card-img">
          <div class="card-text">{{text}}</div>
          <div class="contact-hold">
            <el-upload
              class="avatar-uploader"
              :action="action"
              accept='.jpg,.png'
              :show-file-list="false"
              :on-success="handleContactSuccess"
              :before-upload="beforeContactUpload">
              <img v-if="identityhold" :src="identityhold" class="contact-avatar">
              <div v-else class="avatar-uploader-icon">
                <i class="el-icon-circle-plus"></i>
              </div>
            </el-upload>
            <p style="font-size: 16px;margin-bottom: 20px">联系人手持身份证照片</p>
          </div>
        </div>
      </el-form-item>
      <div class="enterpriseCertification-reminder">
        <p>提示：</p>
        <p>1.请上传与手机号码身份信息一致的身份证照片，用于认证</p>
        <p>2.单张照片大小不超过2M，支持PNG、JPG格式；</p>
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
  import {UPLOAD_BASE_URL} from '../../api/index'
    export default {
        name: "enterpriseAuthentication",
      data(){
          return{
            action: `${UPLOAD_BASE_URL}`,
            active: 1,
            msg: '请使用与账号信息中的手机号码一致的身份证信息提交认证。',
            text: '应监管部门要求，网上发布APP必须进行实名登记， 我们采用了高于行业标准的要求来保障您的信息安全，为了进一步的保护您的个人信息，建议您在上传的实名信息中添加水印文字-仅供木木云实名认证使用。',
            form: {
              cname: '',
              license: '',
              businesslicense: '',
              email: '',
              captcha: '',
              identityhold: ''
            },
            rules: {
              cname: [
                {required: true, message: '请输入企业名称', trigger: 'blur'}
              ],
              license: [
                {required: true, message: '请输入企业营业执照号码', trigger: 'blur'}
              ],
              email: [
                {required: true, message: '请填写邮箱地址', trigger: 'blur'}
              ],
              captcha: [
                {required: true, message: '请填写邮箱验证码', trigger: 'blur'}
              ],
            },
            businesslicense: '',
            identityhold: '',
            phone: '',
            emailCapCode: '获取邮箱验证码',
            timer: null,
            offet: true,
            scopeBoolean: false,
          }
      },
      mounted(){
          this.phone = localStorage.getItem('');
      },
      methods:{
        lastStep() {
          this.$router.push('/realName')

        },
        refer(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let json, imgMsg = this.businesslicense == '' && '请上传营业执照照片' || this.identityhold == '' && '请上传联系人手持身份证照片';
              if (imgMsg.length > 0) {
                this.$message({
                  message: imgMsg,
                  type: 'warning',
                  duration: 1500
                });
                return false;
              }
              json = {
                cname: this.form.cname,
                license: this.form.license,
                businesslicense: this.form.businesslicense,
                mobile: this.phone,
                email: this.form.email,
                identityhold: this.form.identityhold,
                captcha: this.form.captcha,
                type: 2
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
                  return;
                }
                this.$message({
                  message: '提交成功',
                  type: 'success',
                  duration: 1500
                });
                // this.$router.push('/realName/completeCertification');
                console.log(res.data)
              })
            } else {
              return false;
            }
          });
        },
        updateRouter() {
          this.$router.push('/accountSettings');
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
        /**
         * handleAvatarSuccess 异步成功
         * beforeAvatarUpload 上传之前
         * 图片上传
         * @param res
         * @param file
         */
        handleAvatarSuccess(res, file) {
          this.form.businesslicense = file.response.data.domain + file.response.data.url;
          this.businesslicense = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isLt2M) {
            this.$message.error('营业执照照片大小不能超过 2MB!');
          }
          return isLt2M;
        },
        /**
         * 联系人手持身份证照片
         * @param res
         * @param file
         */
        handleContactSuccess(res, file) {
          this.form.identityhold = file.response.data.domain + file.response.data.url;
          this.identityhold = URL.createObjectURL(file.raw);
        },
        beforeContactUpload(file) {
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isLt2M) {
            this.$message.error('联系人手持身份证照片大小不能超过 2MB!');
          }
          return isLt2M;
        },
      }
    }
</script>

<style scoped>
  .promptMessage-uploader .avatar-uploader {
    border: 1px dashed rgba(229, 229, 229, 1);
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .promptMessage-uploader .avatar-uploader-icon {
    font-size: 36px;
    color: #8CBFFA;
    width: 206px;
    height: 280px;
    text-align: center;
    background-color: #FFFFFF;
  }

  .contact-hold .avatar-uploader-icon {
    width: 226px;
    height: 142px;
    line-height: 176px;
    background: url("../../../static/image/card/shouchi_tu.png") no-repeat center center;
    background-size: cover;
    background-color: #FFFFFF;
    color: #8CBFFA;
  }

  .contact-hold .avatar-uploader-icon i {
    font-size: 50px;
  }

  .promptMessage-uploader .avatar-uploader-icon i {
    margin-top: 80px;
    font-size: 50px;
  }

  .promptMessage-uploader .avatar-uploader-icon p {
    font-size: 14px;
    color: #999999;
  }

  .avatar {
    width: 206px;
    height: 280px;
    display: block;
  }

  .contact-avatar {
    width: 226px;
    height: 142px;
    display: block;
  }
</style>
<style lang="less" scoped>
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

  .form-message {
    margin-top: 40px;
    padding: 0 104px;
    .promptMessage-uploader {
      display: flex;
      flex-direction: row;
      .promptMessage-avatar-uploader, .promptMessage-Exemplary {
        width: 206px;
        height: 280px;
        img {
          width: 100%;
        }
      }
      .promptMessage-Exemplary {
        margin-left: 35px;
        border: 1px dashed #888888;
        border-radius: 2px;
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
        background: rgba(88, 118, 240, 1);
        border: 1px solid rgba(88, 118, 240, 1);
        color: #ffffff;
      }
    }
  }
</style>
