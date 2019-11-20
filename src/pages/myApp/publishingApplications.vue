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
    <div class="secondDiv" >
      <div class="secondDivSmall">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="超级签名"></el-step>
          <el-step title="上传IPA包"></el-step>
          <el-step title="补充应用信息"></el-step>
          <el-step title="分发"></el-step>
        </el-steps>
      </div>
      <div v-if="isSuper" class="super">
        <div class="tip">
          <p>上传ipa提示:</p>
          <p><span></span>ipa包里必须要有embedded.mobieprovision,确保权限完整.</p>
          <p><span></span>ipa包里确保info.plist里的icon、bundleid等信息完整。</p>
          <p><span></span>ipa包最好要没有被其他签名机构重签过,不然可能导致应用闪退或无法安装。</p>
          <p><span></span>ipa包可以添加其他第三方推送，重签后不影响推送功能。</p>
        </div>

        <div @click="upload" class="uploadBtn">
          <img src="../../../static/image/survey/shangchuanicon.png" alt="">
          <p>立即上传</p>
        </div>
        <div class="text">
          <p>点击按钮选择应用的安装包，或拖拽文件到此区域</p>
          <p>(支持ipa文件，最大2G)</p>
        </div>

      </div>
      <div v-else-if="isUpload" class="upload">
        <div class="uploadDiv">
          <el-upload
            class="upload-demo"
            :on-success="success"
            drag
            accept=".ipa"
            :action="upload_url"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </div>

      </div>
      <div v-else-if="isSupplement" class="supplement">
        <div class="supplementOne">

          <div class="supplementOneImg">
            <img :src="icon" alt="">
            <!--<div >-->
              <!--<p>{{display_name}}</p>-->
              <!--<p>{{version_code}}</p>-->
            <!--</div>-->
          </div>

        </div>

        <div class="supplementThird2">
          <p>应用名</p>
          <div>
            <el-input :disabled="false" class="thirdInput" v-model="thirdInput1" placeholder="请输入内容"></el-input>
          </div>

        </div>
        <!--<div class="supplementFourth">-->
          <!--<div style="display: flex;align-items: center">-->
            <!--<p style="width: 900px">辅助下载地址</p>-->
            <!--&lt;!&ndash;<img style="margin-left: 5px;width: 20px;height: 20px" @click="homeTip" @mouseleave="homeTipleave()" src="../../../static/image/superSignature/help.png" alt="">&ndash;&gt;-->

          <!--</div>-->

          <!--<el-input @blur="homeInput" :class="{'borderColor':isHomeInput}" :disabled="disInput" class="thirdInput123" v-model="homevalue" placeholder="自定义主页地址"></el-input>-->
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
          <div>
            <el-input :disabled="false" class="thirdInput" v-model="thirdInput2" placeholder="请输入内容"></el-input>
          </div>

        </div>
        <div class="supplementThird2">
          <p>包名</p>
          <div>
            <el-input :disabled="true" class="thirdInput" v-model="thirdInput" placeholder="请输入内容"></el-input>
          </div>

        </div>
        <!--<div class="supplementThird2">-->
          <!--<p>是否启用</p>-->
          <!--<div style="margin-top: 10px">-->
            <!--<el-switch-->
              <!--v-model="switchValue"-->
              <!--active-color="#06B2B6"-->
              <!--inactive-color="#999999"-->
              <!--@change="swich">-->
            <!--</el-switch>-->
          <!--</div>-->
        <!--</div>-->
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
              v-model="switchValue1"
              active-color="#06B2B6"
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
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="swich2">
            </el-switch>
            <div  v-if="fufei" >
              <el-input style="width: 50%" class="thirdInput fufei" v-model="fufeiInput" placeholder="请输入内容"></el-input><span style="font-size: 16px;">元/次</span>

            </div>
          </div>


        </div>
        <div class="supplementThird2">
          <p>防盗刷</p>
          <div style="margin-top: 10px">
            <el-switch
              v-model="newswitchValue"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="newswich2">
            </el-switch>
            <p style="margin-top: 10px">(开启后用户必须滑动方块解锁后才能下载)</p>
          </div>

        </div>
        <div class="supplementTen">
          <p>下载码</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="TenInput" placeholder="请输入内容" onkeyup="this.value=this.value.replace(/\D/g,'')"
                    onafterpaste="this.value=this.value.replace(/\D/g,'')"></el-input>
        </div>
        <div class="supplementTen">
          <p>安卓下载地址</p>
          <div style="margin-top: 10px">
            <el-input :disabled="disInput" class="thirdInput" v-model="EvenInput" placeholder="请输入内容"></el-input>
          </div>
          <p style="margin-top: 10px">(如需上传安卓apk包,请先上传完ipa包后再到应用管理-查看详情-应用合并上传)</p>


        </div>

        <!--<div class="supplementTen">-->
          <!--<p>限制下载次数</p>-->
          <!--<el-input :disabled="disInput" class="thirdInput" v-model="twiInput" placeholder="请输入内容" onkeyup="this.value=this.value.replace(/\D/g,'')"-->
                    <!--onafterpaste="this.value=this.value.replace(/\D/g,'')"></el-input>-->
        <!--</div>-->
        <div class="supplementFourth">
          <p>备注</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="beiInput" placeholder="请输入内容"></el-input>
        </div>
        <div class="supplementFourth">
          <p>评分人数</p>
          <el-input :disabled="disInput" class="thirdInput" v-model="fourthInput" placeholder="请输入内容" onkeyup="this.value=this.value.replace(/\D/g,'')"
                    onafterpaste="this.value=this.value.replace(/\D/g,'')"></el-input>
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
          <p style="margin-top: 10px">(建议横图上传2208*1242，竖图1242*2208)</p>
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
        <div class="supplementEightth xiaoxituisong">
          <div style="display: flex;align-items: center">
            <p style="width: 70px">消息推送</p>
            <img style="margin-left: 5px;width: 20px;height: 20px" @click="help" @mouseleave="helpleave()" src="../../../static/image/superSignature/help.png" alt="">
          </div>

          <div v-if="tishi" class="kuang" style="background-image: url('../../../static/image/superSignature/kuang.png')">
            <p>
              消息推送可提高用户活跃度及应用留存率，但会影响第三方(微信、QQ等)登录。
            </p>
          </div>
          <div class="xiaoxi">
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
              <div v-if="tishi1" class="kuang1" style="background-image: url('../../../static/image/superSignature/kuang.png')">
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
      <div v-else="isDistribute">4</div>
    </div>
  </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import qs from 'qs'
  export default {
    name: "publishingApplications",
    data() {
      return {
        newappchoose1:false,
        newappchoose2:false,
        newappswitchValue:true,
        homeTishi:false,
        isHomeInput:false,
        newswitchValue:true,
        newswitchNum:1,
        upload_url:'',
        tishi:false,
        tishi1:false,
        push_type:0,
        choose:false,
        choose1:false,
        newchoose:true,
        fufei:false,
        newdeUrl:'',
        beiInput:'',
        twiInput:'',
        fufeiInput:'',
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
        switchValue1: true,
        switchValue2:false,
        current: 0,
        active: 2,
        isSuper: false,
        isUpload: false,
        isSupplement: true,
        isDistribute: false,
        TenInput:'',
        EvenInput:'',
        homevalue:'',
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
        icon1:'',
        judgeMoney:'',
        gengxing:1,
        newState:0,
        type:1,
        shouhuApp:0,
      }
    },
    computed: {

    },
    methods: {
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
          sub_domain: this.homevalue
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
      upload(){
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.get(BASE_URL+'/api/user/index',config).then(res => {
          this.judgeMoney=res.data.data.money
          localStorage.setItem('balance', res.data.data.money);
          // if(this.judgeMoney==0.00){
          //   // alert("没有余额")
          //   this.$confirm('你的用户余额不足不能上传', '提示', {
          //     confirmButtonText: '确定',
          //     type: 'warning'
          //   }).then(() => {
          //
          //   }).catch(() => {
          //
          //   });
          // }else{
            this.active = 1
            this.isSuper = false
            this.isUpload = true
          // }
        }, err => {
          // console.log(err)
        })


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
        // console.log(file.response)
        // console.log(file.response.msg)
        if(file.response.code==1){
          this.display_name=file.response.data.app.display_name
          this.path=file.response.data.url
          this.icon=file.response.data.domain+file.response.data.app.icon
          this.ipa_data_bak=file.response.data.app.ipa_data_bak
          this.package_name=file.response.data.app.package_name
          this.version_code=file.response.data.app.version_code
          this.version_name=file.response.data.app.version_name
          this.bundle_name=file.response.data.app.bundle_name
          this.filesize=file.response.data.app.filesize
          this.thirdInput=this.package_name
          this.thirdInput1=this.display_name
          this.thirdInput2=this.version_code
          this.icon1=file.response.data.app.icon
          this.active = 2
          this.isSuper = false
          this.isUpload = false
          this.isSupplement=true
        }else{
          this.$message.error(file.response.msg);
        }
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
        this.hideUpload = file.length >= this.limitCount;

      },
      handlePictureCardPreview(file) {
        // console.log(file)
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      /*开关*/
      swich(){
      //  alert(this.switchValue)
        if(this.switchValue==false){
          //this.state=0
          this.newState=0
          this.disInput=true
        }else{
         // this.state=1
          this.newState=1
          this.disInput=false
        }
      },
      /*开关*/
      swich1(){
      //  alert(this.switchValue1)
          if(this.switchValue1==true){
              this.gengxing=1
          }else{
            this.gengxing=0
          }
      },
      /*是否付费开关*/
      swich2(){
        if(this.switchValue2==true){
          this.fufei=true
        }else{
          this.fufei=false
          this.fufeiInput=0
        }
        // console.log(this.fufeiInput)
      },
      newswich2(){
        if(this.newswitchValue==true){
          this.newswitchNum=1
        }else{
          this.newswitchNum=0
        }
        // console.log(this.newswitchNum)
      },
      /*提交事件*/
      submission(){
      //  alert(this.filesize)
        // this.active = 3

          const loading = this.$loading({
            lock: true,
            text: '拼命签名中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          let f={
            display_name:this.thirdInput1,
            path:this.path,
            icon:this.icon1,
            push_type:1,
            ipa_data_bak:this.ipa_data_bak,
            package_name:this.package_name,
            version_code:this.thirdInput2,
            version_name:this.version_name,
            bundle_name:this.bundle_name,
            filesize:this.filesize,
            desc:this.textarea,
            score_num:this.fourthInput,
            introduction:this.textarea1,
            img:this.img,
            // status:this.state,
            download_code:this.TenInput,
            apk_url:this.EvenInput,
            download_limit:0,
            remark:this.beiInput,
            is_update:this.gengxing,
            status:this.newState,
            download_money:this.fufeiInput,
            push_type:this.push_type,
            type:1,
            is_vaptcha:this.newswitchNum,
            // sub_domain: this.homevalue,
            is_flashback:this.shouhuApp
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/add',qs.stringify(f),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              loading.close();
              this.$router.push({
                path:'/appManagement'
              })
            }else if(res.data.code==0){
              loading
              this.$message.error(res.data.msg);
            }





          }, err => {
            loading.close();
            this.$message.error('系统报错');
            // console.log(err)
          })



      }
    },
    mounted(){
      // alert("4")
      this.upload_url=UPLOAD_BASE_URL

      this.newdeUrl=BASE_URL+'/api/common/upload'
   //  alert(this.$route.params.filesize)
      if(this.$route.params.xianid==1){
        this.active=2
        this.isSuper=false
        this.isSupplement=true
        this.package_name=this.$route.params.package_name
        this.thirdInput1=this.$route.params.display_name
        this.thirdInput2=this.$route.params.version_code
        this.version_name=this.$route.params.version_name
        this.path=this.$route.params.path
        this.filesize=this.$route.params.filesize
        this.bundle_name=this.$route.params.bundle_name
        this.icon=this.$route.params.domain+this.$route.params.icon
        this.icon1=this.$route.params.icon
      }else{
        this.active=0
        this.isSuper=true
      }

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
    height: 450px;
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
    margin: 10px auto 0 auto;
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
  width: 80%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  /*align-items: center;*/
  margin: 50px auto 0 auto;
  background-color: #f6f6f6;
}
  .supplementOne{
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
  .textOne{
    width: 70px;
    text-align: right;
    font-size: 16px;
    color: #333333;
  }
 .supplementTwo p:nth-child(1),.supplementTen p:nth-child(1),.supplementThird p:nth-child(1),.supplementThird1 p:nth-child(1),.supplementThird2 p:nth-child(1),.supplementFourth p:nth-child(1),.supplementFiveth p:nth-child(1),.supplementsixth p:nth-child(1),.supplementSeventh p:nth-child(1),.supplementEightth p:nth-child(1){
    width: 120px;
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
    display: flex;
    margin-top: 20px;
    align-items: center;
  }

  .supplementTen,.supplementThird,.supplementThird1,.supplementThird2,.supplementFourth,.supplementFiveth,.supplementsixth,.supplementSeventh,.supplementEightth{
    /*display: flex;*/
    /*align-items: center;*/
    width: 95%;
    margin: 20px auto 0 auto;
    position: relative;
  }

  .thirdInput{
    width: 100%;
    margin-top: 10px;

  }
  .thirdInput123{
    width: 30%;
    margin-top: 10px;
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
.tip{
  width: 670px;
  height: 200px;
  font-size: 15px;
  margin: 70px auto 0 auto;
}
.tip p{
  display: flex;
  margin-top: 10px;
  align-items: center;
}
  .tip span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color:#14BEC8 ;
  }
  .fufei{
    width: 70px;
  }
  .xiaoxi{
    width: 600px;
    height: auto;
    display: flex;
    flex-flow: column;

    justify-content: center;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 10%;
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
    position: relative;
  }
  .pleaseText{
    color: red !important;
  }
  .kuang1 {
    width: 254px;
    height: 163px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 60%;
    left: 18%;
    z-index: 999;

  }
  .kuang1 p{
    width: 250px!important;
    height: 90px;
    font-size: 14px;
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
