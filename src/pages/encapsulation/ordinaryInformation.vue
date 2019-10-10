<template>
  <div class="ordinaryInformation">
   <div class="ordinaryInformationMain">
     <!--应用名称-->
     <div class="ordinaryInformationMainDiv">
       <p class="ordinaryInformationMainDivTitle"><span>* </span>应用名称</p>
       <el-input
         class="ordinaryInformationMainDivRight"
         maxlength="5"
         placeholder="请填写APP名称，建议五个字以内"
         v-model="informationNameInput"
         v-on:input="informationNameInputChange"
         >
       </el-input>
     </div>
     <!--网站链接-->
     <div class="ordinaryInformationMainDiv">
       <p class="ordinaryInformationMainDivTitle"><span>* </span>网站链接</p>
       <el-input
         class="ordinaryInformationMainDivRight"
         placeholder="填写要封装的网页链接,以http://或者https://开头"
         v-model="informationUrlInput"
         v-on:input="informationUrlInputChange"
        >
       </el-input>
     </div>
     <!--设备类型-->
     <div class="ordinaryInformationMainDiv">
       <p class="ordinaryInformationMainDivTitle">设备类型</p>
       <div class="ordinaryInformationMainDivRight equipmentType">
         <div class="selectFirstDiv_small " >
           <img  v-if="equipmentTypeAnd" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="equipmentTypeAndClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">Android</p>
         </div>
         <div class="selectFirstDiv_small equipmentTypeiOS" >
           <img  v-if="equipmentTypeiOS" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="equipmentTypeClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">iOS</p>
         </div>
       </div>
     </div>
     <!--横竖屏-->
     <div class="ordinaryInformationMainDiv">
       <p class="ordinaryInformationMainDivTitle">横竖屏</p>
       <div class="ordinaryInformationMainDivRight equipmentType">
         <div class="selectFirstDiv_small " >
           <img  v-if="anyhowHorizontal" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="anyhowHorizontalClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">竖屏</p>
         </div>
         <div class="selectFirstDiv_small equipmentTypeiOS" >
           <img  v-if="anyhowVertical" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="anyhowVerticalClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">横屏</p>
         </div>
       </div>
     </div>
     <!--版本号-->
     <div class="ordinaryInformationMainDiv">
       <p class="ordinaryInformationMainDivTitle">版本号</p>
       <div class="ordinaryInformationMainDivRight equipmentType">
         <div class="selectFirstDiv_small " >
           <img  v-if="versionMoren" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="versionMorenClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">默认</p>
         </div>
         <div class="selectFirstDiv_small equipmentTypeiOS" >
           <img  v-if="versionMy" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="versionMyClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">自定义</p>
         </div>
       </div>
     </div>
     <div class="ordinaryVersionMainDiv" v-show="ordinaryVersion">
       <p class="ordinaryInformationMainDivTitle"></p>
       <el-input
         class="informationVersionInput"
         placeholder="请输入版本号"
         v-model="informationVersionInput"
        @change="informationVersionInputChange">
       </el-input>

     </div>
     <!--Bundle ID-->
     <div class="ordinaryInformationMainDiv">
       <p class="ordinaryInformationMainDivTitle">Bundle ID</p>
       <div class="ordinaryInformationMainDivRight equipmentType">
         <div class="selectFirstDiv_small " >
           <img  v-if="bundleMoren" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="bundleMorenClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">默认</p>
         </div>
         <div class="selectFirstDiv_small equipmentTypeiOS" >
           <img  v-if="bundleMy" src="../../../static/image/superSignature/danxuan.png" alt="">
           <img  v-else @click="bundleMyClick()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
           <p class="selectFirstDiv_smallP">自定义</p>
         </div>
       </div>
     </div>
     <div class="ordinaryVersionMainDiv" v-show="ordinaryBundle">
       <p class="ordinaryInformationMainDivTitle"></p>
       <el-input
         class="informationVersionInput"
         placeholder="请输入包名（Bundle ID）"
         v-model="informationBundleInput"
         @change="informationBundleInputChange">
       </el-input>

     </div>
   </div>
    <div class="ordinaryInformationMainDiv" style="height: 150px;" >
      <p class="ordinaryInformationMainDivTitle"></p>
      <div style="width: 492px;margin-bottom: 50px">
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
        name: "ordinaryInformation",
      data(){
          return{
            informationNameInput:'',//应用名称
            informationUrlInput:'',//网站链接
            equipmentTypeAnd:true,//设备类型单选框布尔值
            equipmentTypeiOS:false,//设备类型单选框布尔值
            equipmentTypeNum:2,//设备类型单选框值(传给后台的值)
            anyhowHorizontal:true,//竖屏单选框布尔值
            anyhowVertical:false,//横屏单选框布尔值
            anyhowNum:1,//横屏单选框值(传给后台的值)
            informationVersionInput:'',//版本号输入框
            ordinaryVersion:false,//版本号显示隐藏
            versionMoren:true,//版本号默认布尔值
            versionMy:false,//版本号自定义布尔值
            versionNum:1,//版本号的值(传给后台的值)
            bundleMoren:true,//bundleId默认布尔值
            bundleMy:false,//bundleId自定义布尔值
            ordinaryBundle:false,
            informationBundleInput:'',//bundleId输入框
            bundle:1,//bundleId值(传给后台的值)
            isNext:true,
            isNext1:false
          }
      },
      methods:{
          /*应用名称输入框失焦事件*/
        informationNameInputChange(){
          this.verification()
        },
        /*网站链接输入框失焦事件*/
        informationUrlInputChange(){
          this.verification()
        },
        /*设备类型单选框点击(Android)*/
        equipmentTypeAndClick(){
          this.equipmentTypeAnd=true
          this.equipmentTypeiOS=false
          this.equipmentTypeNum=2
          this.verification()
        },
        /*设备类型单选框点击(IOS)*/
        equipmentTypeClick(){
          this.equipmentTypeiOS=true
          this.equipmentTypeAnd=false
          this.equipmentTypeNum=1
        },
        /*竖屏单选框布尔值*/
        anyhowHorizontalClick(){
          this.anyhowHorizontal=true
          this.anyhowVertical=false
          this.anyhowNum=1
          this.verification()
        },
        /*横屏单选框布尔值*/
        anyhowVerticalClick(){
          this.anyhowVertical=true
          this.anyhowHorizontal=false
          this.anyhowNum=2
        },
        /*版本号输入框失焦事件*/
        informationVersionInputChange(){
          if((this.informationVersionInput!='' && this.bundleMoren==true && this.bundleMy==false) || (this.informationVersionInput!='' && this.bundleMoren==false && this.bundleMy==true && this.informationBundleInput!='')){
            this.isNext1=true
            this.isNext=false
          }else{
            this.isNext1=false
            this.isNext=true
          }
        },
        /*版本号默认单选框点击*/
        versionMorenClick(){
          this.versionMoren=true
          this.versionMy=false
          this.versionNum=1
          this.ordinaryVersion=false
          this.informationVersionInput=''
          this.verification()
        },
        /*版本号自定义单选框点击*/
        versionMyClick(){
          this.versionMoren=false
          this.versionMy=true
          this.versionNum=2
          this.ordinaryVersion=true
          this.isNext1=false
          this.isNext=true
        },
        /*Bundle输入框失焦事件*/
        informationBundleInputChange(){
          if((this.informationBundleInput!='' && this.versionMoren==true && this.versionMy==false) || (this.informationBundleInput!='' && this.versionMoren==false && this.versionMy==true && this.informationVersionInput!='')){
            this.isNext1=true
            this.isNext=false
          }else{
            this.isNext1=false
            this.isNext=true
          }
        },
        /*Bundle默认单选框点击*/
        bundleMorenClick(){
          this.bundleMoren=true
          this.bundleMy=false
          this.bundle=1
          this.ordinaryBundle=false
          this.informationBundleInput=''
          this.verification()
        },
        /*Bundle自定义单选框点击*/
        bundleMyClick(){
          this.bundleMoren=false
          this.bundleMy=true
          this.bundle=2
          this.ordinaryBundle=true
          this.isNext1=false
          this.isNext=true
        },
        /*表单验证*/
        verification(){
          if(this.informationNameInput!=''&&this.informationUrlInput!=''){
            this.isNext1=true
            this.isNext=false
          }else{
            this.isNext1=false
            this.isNext=true
          }
        },
        nextStep(){
          var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
          var objExp = new RegExp(Expression);
          if (objExp.test(this.informationUrlInput) == true) {
            let data={
              app_name:this.informationNameInput,
              website:this.informationUrlInput,
              platform:this.equipmentTypeNum,
              screen:this.anyhowNum,
              version:this.informationVersionInput,
              bundle:this.informationBundleInput
            }
            localStorage.setItem('informationData', JSON.stringify(data));
            this.$router.push({
              name:'ordinaryIcon',
              params:{
                active:1,
              }
            })

          } else {
            this.$message.error('您输入的链接地址有误');
          }
          // alert('应用名称'+this.informationNameInput)
          // alert('网站链接'+this.informationUrlInput)
          // alert('平台1-ios2-android'+this.equipmentTypeNum)
          // alert('横竖屏1-竖屏2-横屏'+this.anyhowNum)
          // alert('版本号-值为空时默认'+this.informationVersionInput)
          // alert('bundle_id-值为空时默认'+this.informationBundleInput)


        }
      }
    }
</script>

<style scoped>
  .ordinaryInformation{
    margin-top: 30px;
  }
.ordinaryInformationMainDiv{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.ordinaryVersionMainDiv{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.ordinaryInformationMainDiv .ordinaryInformationMainDivTitle{
  width: 150px;
  text-align: right;
  font-size: 14px;
  margin-right: 15px;
  font-weight: bold;
}
.ordinaryVersionMainDiv .ordinaryInformationMainDivTitle{
  width: 150px;
  text-align: right;
  font-size: 14px;
  margin-right: 15px;
  font-weight: bold;
}
.ordinaryInformationMainDiv span{
  color: red;
}
  .ordinaryInformationMainDivRight{
    width: 493px;
    margin-left: 15px;
  }
  .informationVersionInput{
    width: 493px;
    margin-top: 15px;
  }
  .selectFirstDiv_small{
    width: 100px;
    display: flex;
    align-items: center;

  }
  .selectFirstDiv_smallP{
    margin-left: 10px;
    font-size: 14px;
    color: #333333;
  }
  .equipmentType{
    display: flex;
    flex-wrap: wrap;
  }
  .equipmentTypeiOS{
    margin-left: 45px;
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
  }
</style>
