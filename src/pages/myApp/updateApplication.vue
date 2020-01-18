<template>
    <div class="updateApplication">
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/hpshouye.png" alt="">
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
            class="upload-demo"
            accept=".ipa"
            action="string"
            :http-request="newuploadipa"
            :on-change="handleChange"
            >
            <el-progress v-if="progressFlag == true" :percentage="progressPercent"></el-progress>

            <div @click="upload" class="uploadBtn">
              <img src="../../../static/image/survey/shangchuanicon.png" alt="">
              <p>立即上传</p>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传ipa文件</div>
          </el-upload>

        </div>

        <div class="supplementThird1">
          <p>应用名</p>
          <div style="margin-top: 10px">
            <el-input :disabled="disInput" class="thirdInput" v-model="thirdInput1" placeholder="请输入内容"></el-input>
          </div>

        </div>
        <!--<div class="supplementThird2">-->
          <!--<div style="display: flex;align-items: center">-->
            <!--<p style="width: 120px">辅助下载地址</p>-->
            <!--&lt;!&ndash;<img style="margin-left: 5px;width: 20px;height: 20px" @click="homeTip" @mouseleave="homeTipleave()" src="../../../static/image/superSignature/help.png" alt="">&ndash;&gt;-->

          <!--</div>-->

          <!--<el-input @blur="homeInput" :class="{'borderColor':isHomeInput}"  class="thirdInput123" v-model="homevalue" placeholder="自定义主页地址"></el-input>-->
          <!--<span style="font-size: 16px">.appstore.top</span>-->
          <!--<p style="font-size: 12px;margin-top: 10px">（您应用的下载地址，用户通过该链接下载您的应用,建议填写您的APP拼音缩写，有助于提高用户信任度，加强品牌化）</p>-->
          <!--&lt;!&ndash;<div v-if="homeTishi"  class="homekuang1" style="background-image: url('../../../static/image/superSignature/kuang.png')">&ndash;&gt;-->
            <!--&lt;!&ndash;<p >&ndash;&gt;-->
              <!--&lt;!&ndash;您应用的下载地址，用户通过该链接下载您的应用&ndash;&gt;-->
            <!--&lt;!&ndash;</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->
        <div class="supplementThird2">
          <p>版本号</p>
          <div style="margin-top: 10px">
            <el-input :disabled="disInput" class="thirdInput" v-model="thirdInput2" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="supplementThird2">
          <p class="textOne">包名</p>
          <div style="margin-top: 10px">
            <p>{{package_name}}</p>
          </div>

        </div>
        <!--<div class="supplementThird2">
          <p>app守护</p>
          <div style="margin-top: 10px;display: flex">
            <div class="liji">
              <img  v-if="newappchoose1" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img @click="newapp1" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>开启</p>
            </div>
            <div class="liji" style="margin-left: 20px">
              <img  v-if="newappchoose2" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img @click="newapp2" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>关闭</p>
            </div>
          </div>
          <p style="margin-top: 10px">(免费试用，可防止账号被封等意外情况导致的应用掉签闪退,开启后打开应用需访问用户的vpn权限)</p>

        </div>-->
        <div class="supplementThird2">
          <p>更新功能</p>
          <div style="margin-top: 10px">
            <el-switch
              v-model="switchValue"
              active-color="#2F82FF"
              inactive-color="#999999"
              @change="swich">
            </el-switch>
          </div>

        </div>
        <div class="supplementThird2">
          <p>强制更新</p>
          <div style="margin-top: 10px">
            <el-switch
              v-model="switchValue1"
              active-color="#2F82FF"
              inactive-color="#999999"
              @change="swich1">
            </el-switch>
          </div>

        </div>
        <div class="supplementThird2">
        <p>付费下载</p>
        <div style="margin-top: 10px">
          <el-switch
            v-model="switchValue2"
            active-color="#2F82FF"
            inactive-color="#999999"
            @change="swich2">
          </el-switch>
          <div v-if="fufei" style="margin-top: 15px">
            <el-input  style="width: 50%" v-model="fufeiInput" placeholder="请输入内容"></el-input><span style="font-size: 16px;">元/次</span>
          </div>
        </div>

      </div>
        <!--<div class="supplementThird2">-->
          <!--<p>openinstall</p>-->
          <!--<div style="margin-top: 10px">-->
            <!--<el-switch-->
              <!--v-model="appkeyValue2"-->
              <!--active-color="#2F82FF"-->
              <!--inactive-color="#999999"-->
              <!--@change="appkeyswich2">-->
            <!--</el-switch>-->
            <!--<div v-if="appkey" style="margin-top: 15px">-->
              <!--<el-input  style="width: 50%" v-model="appkeyInput" placeholder="请输入appkey值"></el-input>-->
            <!--</div>-->
          <!--</div>-->

        <!--</div>-->
        <div class="supplementThird2">
          <p>防盗刷</p>
          <div style="margin-top: 10px">
            <el-switch
              v-model="newswitchValue"
              active-color="#2F82FF"
              inactive-color="#999999"
              @change="newswich2">
            </el-switch>
            <p style="margin-top: 10px">(开启后用户必须滑动方块解锁后才能下载)</p>
          </div>


        </div>


        <div class="supplementThird2">
          <p>下载码</p>
          <div style="margin-top: 10px">
            <el-input  class="thirdInput" v-model="TenInput" placeholder="请输入内容"></el-input>
          </div>

        </div>
        <div class="supplementThird2">
          <p>安卓下载地址</p>
          <div style="margin-top: 10px">
            <el-input  class="thirdInput" v-model="EvenInput" placeholder="请输入内容"></el-input>
          </div>
          <p style="margin-top: 10px">(如需上传安卓apk包,请先上传完ipa包后再到应用管理-查看详情-应用合并上传)</p>
        </div>


        <!--<div class="supplementTen">-->
          <!--<p>限制下载次数</p>-->
          <!--<el-input  class="thirdInput" v-model="xianzhiInput" placeholder="请输入内容"></el-input>-->
        <!--</div>-->
        <div class="supplementThird2">
          <p>备注</p>
          <div style="margin-top: 10px">
            <el-input  class="thirdInput" v-model="beizhuInput" placeholder="请输入内容"></el-input>
          </div>

        </div>
        <div class="supplementThird2">
          <p>评分人数</p>
          <div style="margin-top: 10px">
            <el-input  class="thirdInput" v-model="fourthInput" placeholder="请输入内容"></el-input>
          </div>

        </div>


        <div class="supplementThird2">
          <p>应用截图</p>
          <div class="thirdInput imgl" style="margin-top: 10px">
            <el-upload
              :before-upload="beforeAvatarUpload"
              class="ss"
              :limit='limitCount'
              :class="{hide:hideUpload}"
              :headers="headers"
              :file-list="imgList"
              action="string"
              :http-request="newuploadimg"
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
          <p style="margin-top: 10px">(建议横图上传2208*1242，竖图1242*2208)</p>
        </div>


        <div class="supplementThird2">
          <p>应用介绍</p>
          <div style="margin-top: 10px">
            <el-input

              class="thirdInput"
              type="textarea"
              :rows="2"
              size="medium "
              placeholder="请输入200字以内的应用介绍"
              v-model="textarea">
            </el-input>
          </div>

        </div>
        <div class="supplementThird2">
          <p>功能介绍</p>
          <div style="margin-top: 10px">
            <el-input

              class="thirdInput textarea"
              type="textarea"
              :rows="2"
              placeholder="请输入200字以内的功能介绍"
              v-model="textarea1">
            </el-input>
          </div>

        </div>
        <div class="supplementThird2 " v-show="istuisong">
          <div style="display: flex;align-items: center">
            <p style="width: 70px">消息推送</p>
            <img style="margin-left: 5px;width: 20px;height: 20px" @click="help" @mouseleave="helpleave()" src="../../../static/image/superSignature/help.png" alt="">
          </div>

          <div v-if="tishi" class="kuang" >
            <p>
              消息推送可提高用户活跃度及应用留存率，但会影响第三方(微信、QQ等)登录。
            </p>
          </div>
          <div class="xiaoxi" >
            <div class="liji">
              <img  v-if="newchoose" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img @click="dan0" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>自有推送（应用本身自带推送功能）</p>
            </div>
            <div class="liji">
              <img  v-if="choose" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img @click="dan1" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>证书推送（请在推送时配置p12证书文件）</p>
            </div>
            <div class="liji">
              <img  v-if="choose1" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img @click="dan2" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>直接推送（可能会影响微信、QQ等第三方登录）</p>
            </div>
            <div class="please">
              <p class="pleaseText">请谨慎选择！</p>
              <img style="margin-left: 5px;width: 20px;height: 20px" @click="help1" @mouseleave="helpleave1()" src="../../../static/image/superSignature/help.png" alt="">
              <div v-if="tishi1" class="kuang1">
                <p>
                  已上传的应用再修改消息提醒方式，可能会导致已安装用户无法正常使用。需要重新上传应用包，选择消息推送后让用户重新下载
                </p>
              </div>
            </div>
            <p style="margin-left: 10px;margin-top: 10px">(如需消息推送,请到应用管理-查看详情-应用推送)</p>
          </div>

        </div>

        <div @click="submission" class="submission">
          <p>立即提交</p>
        </div>
      </div>
    </div>
</template>

<script>
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "updateApplication",
      data(){
          return{
            progressFlag:false, //进度条布尔值
            progressPercent:0, //进度条默认值
            newnewIMG:[],
            ipaParsing:"",
            is_overseas:'10',
            newbaseurl:'',
            newappchoose1:false,
            newappchoose2:false,
            newappswitchValue:true,
            homevalue:'',
            homeTishi:false,
            isHomeInput:false,
            newswitchValue:true,
            newswitchNum:'',
            upload_url:'',
            push_type:'',
            istuisong:false,
            tishi:false,
            tishi1:false,
            type:'',
            newchoose:true,
            choose:false,
            choose1:false,
            fufei:false,
            appkey:false,
            newdeUrl:'',
            xianzhiInput:'',
            beizhuInput:'',
            ss:'',
            thirdInput1:'',
            thirdInput2:'',
            fufeiInput:'',
            appkeyInput:'',
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
            appkeyValue2:false,
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
            version_name:'',
            package_name:'',//包名
            bundle_name:'',//bundle名
            state:1,//状态 1 正常 0关闭
            filesize:'',//大小
            img:[],
            list:'',
            imgList:[],
            newState:0,
            gengxing:1,
            sub_domain:'',
            shouhuApp:0,
          }
      },
      methods:{
        /*上传ipa包*/
        newuploadipa(item){
          let formData = new FormData()
          var timeStamp=Math.round(new Date()/1000)
          console.log('上传ipa包接口-参数', item.file)
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.get(BASE_URL+'/api/app/init',config).then(res => {
            console.log(res.data.data)
            this.ipaParsing=res.data.data.ipaParsing
          //  alert(res.data.data.is_overseas)
            this.is_overseas=res.data.data.is_overseas
            if(res.data.data.is_overseas=='10'){
              let config1 = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.get(BASE_URL+'/api/common/ossToken',config1).then(res => {
                this.dir=res.data.data.dir
                formData.append('policy', res.data.data.policy)
                formData.append('success_action_status', 200)
                formData.append('signature', res.data.data.signature)
                formData.append('OSSAccessKeyId', res.data.data.accessid)
                formData.append('name',this.$md5(item.file.name.split(".ipa")[0])+timeStamp+'.ipa')
                formData.append('key', res.data.data.dir+this.$md5(item.file.name.split(".ipa")[0])+timeStamp+'.ipa')
                formData.append('file', item.file)
                this.progressFlag=true
                this.progressPercent=0
                let config3 = {
                  headers:{'token':localStorage.getItem('Authorization')},
                  onUploadProgress: progressEvent => {
                    // progressEvent.loaded:已上传文件大小
                    // progressEvent.total:被上传文件的总大小
                    this.progressPercent = Number((progressEvent.loaded / progressEvent.total * 100).toFixed(2))
                  }
                };
                axios.post(res.data.data.host,formData,config3).then(res => {
                  this.progressFlag=false
                  if(res.data.code==0){
                    this.$message.error(res.data.msg);
                  }else{
                    let newData={
                      path:this.dir+this.$md5(item.file.name.split(".ipa")[0])+timeStamp+'.ipa'
                    }
                    let config2 = {
                      headers:{'token':localStorage.getItem('Authorization')}
                    };
                    axios.post(this.ipaParsing,newData,config2).then(res => {
                      if(res.data.code==0){
                        this.$message.error(res.data.msg);
                      }else{
                        // console.log(res.data)
                        this.display_name=res.data.data.display_name
                        this.path=res.data.data.url
                        this.icon=res.data.data.domain+res.data.data.icon
                        this.ipa_data_bak=res.data.data.ipa_data_bak
                        this.package_name=res.data.data.package_name
                        this.version_code=res.data.data.version_code
                        this.version_name=res.data.data.version_name
                        this.bundle_name=res.data.data.bundle_name
                        this.filesize=res.data.data.filesize
                        this.thirdInput=this.package_name
                        this.thirdInput1=this.display_name
                        this.thirdInput2=this.version_code
                        this.icon1=res.data.data.icon
                        this.active = 2
                        this.isSuper = false
                        this.isUpload = false
                        this.isSupplement=true
                      }
                    }, err => {
                      this.$message.error('上传ipa包失败');
                    })
                  }
                }, err => {
                  this.$message.error('上传ipa包失败');
                })
              }, err => {
                // console.log(err)
              })
            }else{ //直传
              this.progressFlag=true
              this.progressPercent=0
              formData.append('file', item.file)
              // formData.append('is_overseas', this.is_overseas)
              let config2 = {
                headers:{'token':localStorage.getItem('Authorization')},
                onUploadProgress: progressEvent => {
                  // progressEvent.loaded:已上传文件大小
                  // progressEvent.total:被上传文件的总大小
                  this.progressPercent = Number((progressEvent.loaded / progressEvent.total * 100).toFixed(2))
                }
              };
              axios.post(res.data.data.upload,formData,config2).then(res => {
                this.progressFlag=false
                if(res.data.code==0){
                  this.$message.error(res.data.msg);
                }else{
                  console.log(res.data)
                  this.display_name=res.data.data.app.display_name
                  this.path=res.data.data.url
                  this.icon=res.data.data.domain+res.data.data.app.icon
                  this.ipa_data_bak=res.data.data.app.ipa_data_bak
                  this.package_name=res.data.data.app.package_name
                  this.version_code=res.data.data.app.version_code
                  this.version_name=res.data.data.app.version_name
                  this.bundle_name=res.data.data.app.bundle_name
                  this.filesize=res.data.data.app.filesize
                  this.thirdInput=this.package_name
                  this.thirdInput1=this.display_name
                  this.thirdInput2=this.version_code
                  this.icon1=res.data.data.app.icon
                  this.istuisong=true
                  if(this.push_type==0){
                    this.newchoose=true
                    this.choose=false
                    this.choose1=false
                  }else if(this.push_type==1){
                    this.newchoose=false
                    this.choose=true
                    this.choose1=false
                  }else{
                    this.newchoose=false
                    this.choose=false
                    this.choose1=true
                  }
                }
              }, err => {
                this.$message.error('上传ipa包失败');
              })
            }
          }, err => {
            this.$message.error('上传ipa包失败');
          })
        },
        /*上传图片*/
        newuploadimg(item){
          let formData = new FormData()
          console.log('上传图片接口-参数', item.file)
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
            this.img.push(res.data.data.dir+item.file.name)
            console.log(this.img)
            axios.post(res.data.data.host,formData,config).then(res => {

            }, err => {
              this.$message.error('上传图片失败');
            })
          }, err => {
            // console.log(err)
          })
        },
        /*删除图片*/
        handleRemove(file, fileList) {
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.get(BASE_URL+'/api/common/ossToken',config).then(res => {
            if(fileList.length!=0){
              var newImg=[];
              for(var i=0;i<fileList.length;i++){
                newImg.push(res.data.data.dir+fileList[i].name)
                this.img=newImg
              }
            }else{
              this.img=[]
            }
            console.log(this.img)
          }, err => {
            // console.log(err)
          })
          this.hideUpload = file.length >= this.limitCount;
        },

        beforeAvatarUpload(file) {
          const isJPG = (file.type === 'image/png'||file.type === 'image/jpg');

          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG && isLt2M) {
            this.$message.error('上传图标图片只能是PNG或者JPG格式!');
          }

          if (!isLt2M && isJPG) {
            this.$message.error('上传图标图片大小不能超过 2MB!');
          }
          if (!isLt2M && !isJPG) {
            this.$message.error('上传图标图片大小不能超过 2MB且格式只能是png或者jpg!');
          }
          return isJPG && isLt2M;
        },
        /*app守护*/
        newapp1(){
          this.newappchoose1=true
          this.newappchoose2=false
          this.shouhuApp=1
        },
        newapp2(){
          this.newappchoose1=false
          this.newappchoose2=true
          this.shouhuApp=0
        },
        homeInput(){
          let data = {
            sub_domain: this.homevalue,
            id:this.$route.query.id
          }
          axios.post(BASE_URL + '/api/index/checkSubDomain', data).then(res => {
            if (res.data.code == 0) {
              this.isHomeInput = true
              this.$message.error(res.data.msg);
            } else {
              this.isHomeInput = false
            }
          }, err => {
            // console.log(err)
          })
        },
        homeTip(){
          this.homeTishi=true
        },
        homeTipleave(){
          this.homeTishi=false
        },
        help(){
          this.tishi=!this.tishi
        },
        help1(){
          this.tishi1=!this.tishi1
        },
        helpleave1(){
          this.tishi1=false
        },
        helpleave(){
          this.tishi=false
        },
        dan0(){
          this.newchoose=true
          this.choose=false
          this.choose1=false
          this.push_type=0
        },
        dan1(){
          this.newchoose=false
          this.choose=true
          this.choose1=false
          this.push_type=1
        },
        dan2(){
          this.newchoose=false
          this.choose=false
          this.choose1=true
          this.push_type=2
        },
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
        // success2(response, file){
        //   var img=file.response.data.url
        //   this.img.push(img)
        // },
        // handleRemove(file, fileList) {
        //   var newImg=[];
        //   for(var i=0;i<fileList.length;i++){
        //     newImg.push(fileList[i].url)
        //     this.img=newImg
        //   }
        //   this.hideUpload = file.length >= this.limitCount;
        // },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        // success(response, file, fileList) {
        //   this.disInput=false
        //   // console.log(file)
        //   this.display_name=file.response.data.app.display_name
        //   this.path=file.response.data.url
        //   this.icon=file.response.data.domain+file.response.data.app.icon
        //   this.ipa_data_bak=file.response.data.app.ipa_data_bak
        //   this.package_name=file.response.data.app.package_name
        //   this.version_code=file.response.data.app.version_code
        //   this.version_name=file.response.data.app.version_name
        //   this.bundle_name=file.response.data.app.bundle_name
        //   this.filesize=file.response.data.app.filesize
        //   this.thirdInput=this.package_name
        //   this.thirdInput1=this.display_name
        //   this.thirdInput2=this.version_code
        //   this.icon1=file.response.data.app.icon
        //   this.img.push(file.response.data.app.img)
        //   this.istuisong=true
        //   if(this.push_type==0){
        //     this.newchoose=true
        //     this.choose=false
        //     this.choose1=false
        //   }else if(this.push_type==1){
        //     this.newchoose=false
        //     this.choose=true
        //     this.choose1=false
        //   }else{
        //     this.newchoose=false
        //     this.choose=false
        //     this.choose1=true
        //   }
        //   // console.log(this.img)
        //   // console.log('图片上传成功的时候的img集合',file.response.data.app.img)
        // },
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
          // console.log(this.fufeiInput)
        },
        appkeyswich2(){
          if(this.appkeyValue2==true){
            this.appkey=true
          }else{
            this.appkey=false
            this.appkeyInput=''
          }
        },
        newswich2(){
          if(this.newswitchValue==true){
            this.newswitchNum=1
          }else{
            this.newswitchNum=0
          }
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
            version_name:this.version_name,
            display_name:this.thirdInput1,//应用名
            img:this.img,//图片
            icon:this.icon1,
            ipa_data_bak:this.ipa_data_bak,
            package_name:this.package_name,
            filesize:this.filesize,
            bundle_name:this.bundle_name,
            remark:this.beizhuInput,
            download_limit:0,
            is_update:this.gengxing,
            download_money:this.fufeiInput,
            push_type:this.push_type,
            is_vaptcha:this.newswitchNum,
            // sub_domain:this.homevalue,
            // appkey:this.appkeyInput,
            is_flashback:this.shouhuApp,
            is_overseas:this.is_overseas,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/update',qs.stringify(data),config).then(res => {
            // console.log(res.data.data)
            loading.close();
            if(res.data.code==0){
              this.$message.error(res.data.msg);
            }else{
              this.$router.push({
                path:'/appManagement'
              })
            }

          }, err => {
            loading.close();
            this.$message.error('系统报错');
          })
        }
      },
      mounted(){
          this.ss=BASE_URL
        // this.newdeUrl=BASE_URL+'/api/common/upload'
        // this.upload_url=UPLOAD_BASE_URL
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appDes',qs.stringify(data),config).then(res => {
          // console.log(res.data.data)
          this.list=res.data.data
          this.icon=this.list.icon
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
          this.push_type=res.data.data.push_type
          this.homevalue=res.data.data.sub_domain
          if(res.data.data.download_money!=0){
            this.switchValue2=true
            this.fufei=true
            this.fufeiInput=res.data.data.download_money
          }else{
            this.switchValue2=false
            this.fufei=false
            this.fufeiInput=''
          }
          if(res.data.data.appkey!=''){
            this.appkeyValue2=true
            this.appkey=true
            this.appkeyInput=res.data.data.appkey
          }else{
            this.appkeyValue2=false
            this.appkey=false
            this.appkeyInput=''
          }
          if(res.data.data.is_vaptcha==1){
            this.newswitchValue=true
            this.newswitchNum=1
          }else{
            this.newswitchValue=false
            this.newswitchNum=0
          }
          if(res.data.data.is_flashback==1){
            this.newappchoose1=true
            this.newappchoose2=false
            this.shouhuApp=1
          }else{
            this.newappchoose1=false
            this.newappchoose2=true
            this.shouhuApp=0
          }
          if(this.list.imgs.length>=this.limitCount){
            this.hideUpload=true
          }else{
            this.hideUpload=false
          }
          for(var i=0;i<this.list.imgs.length;i++){
            var newobj={}
            newobj.name=this.list.imgs[i]
            newobj.url=this.list.imgs[i]
            this.imgList.push(newobj)
            this.img.push(this.list.imgs[i])
            this.newnewIMG=this.img
          }
           console.log(this.img)

        }, err => {
          // console.log(err)
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
    width: 200px;
    text-align: left;
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
   width: 80%;
    /*display: flex;*/
    /*align-items: center;*/
    margin-top: 15px;
    margin-bottom: 20px;
    position: relative;
    /*justify-content: center;*/
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
    background-color: #2F82FF;
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
    background-color: #f6f6f6;
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
    width: 99%;
    /*margin-left: 20px;*/
  }
  .thirdInput123{
    width: 30%;
    margin-top: 10px;
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
    background-color: #2F82FF;
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
  .xiaoxi{
    width: auto;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-top: 10px;
  }
  .liji{
    display: flex;
    align-items: center;
    /*margin-left: 20px;*/
    margin-top: 9px;
    font-size: 16px;
  }
  .liji p,.dingshi p{
    margin-left: 10px;
    color: #333333;
  }
  .xiaoxituisong{
    position: relative;
  }
  .kuang {
    width: 254px;
    height: 163px;
    background-image: url('../../../static/image/superSignature/kuang.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 10.9%;
    left: 4.5%;
    z-index: 999;

  }
  .kuang p{
    width: 207px!important;
    height: 90px;
    font-size: 14px;
    color: #006B6D;
    margin: 50px auto 0 auto;
  }
  .please{
    display: flex;
    margin-top: 10px;
  }
  .pleaseText{
    width: 100px !important;
    color: red !important;
    margin-left: 17px;
  }
  .kuang1 {
    width: 254px;
    height: 163px;
    background-image: url('../../../static/image/superSignature/kuang.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 85%;
    left: 8.5%;
    z-index: 999;
  }
  .kuang1 p{
    width: 250px!important;
    height: 90px;
    font-family: '微软雅黑 Light';
    font-size: 13px;
    color: red !important;
    margin: 50px auto 0 auto;
    text-align: justify !important;
    text-justify: inter-ideograph !important;
  }
  .homekuang1{
    width: 254px;
    height: 123px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 30%;
    left: 6%;
    z-index: 999;
  }
  .homekuang1 p{
    width: 250px!important;
    height: 90px;
    font-size: 14px;
    color: gray;
    margin: 50px auto 0 auto;
    text-align: justify !important;
    text-justify: inter-ideograph !important;
  }
  .borderColor{
    border: 1px solid red !important;
    border-radius: 4px;
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
    /*margin-left: 20px;*/
  }
  .el-switch__core{
    width: 60px !important;
  }
  .el-button--primary{
    color: #FFF;
    background-color: #2F82FF;
    border-color: #2F82FF;
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

  .supplementThird13 .el-progress{
    width: 360px !important;
    margin: 0 auto;
  }
  .supplementThird13 .el-progress-bar{
    padding-right: 0!important;
    margin-right: 0!important;
  }
  .supplementThird13 .el-progress__text{
    position: absolute !important;
  }
</style>
