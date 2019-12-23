<template>
   <div>
     <div class="firstDiv">
       <div class="firstDiv_small">
         <img src="../../../static/image/survey/hpshouye.png" alt="">
         <p>您当前位置：</p>
         <el-breadcrumb separator="/">
           <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
           <el-breadcrumb-item :to="{ path: '/survey' }">实名认证</el-breadcrumb-item>
           <el-breadcrumb-item>个人实名认证</el-breadcrumb-item>
         </el-breadcrumb>
       </div>
     </div>
     <div class="secondDiv">
       <div class="secondDivOne">
         <p class="text">个人照片</p>
         <div class="er">
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
           <el-dialog :visible.sync="dialogVisible" >
             <img width="100%" v-if='dialogImageUrl' :src="dialogImageUrl" alt="">

           </el-dialog>
         </div>
       </div>
      <div class="secondDivTwo">
        <p class="text">姓名</p>
        <el-input  class="thirdInput" v-model="nameInput" placeholder="请输入您的姓名"></el-input>
      </div>
       <div class="secondDivThree">
         <p class="text">手机号</p>
         <el-input  class="thirdInput" v-model="phoneInput" placeholder="请输入您的手机号"></el-input>
       </div>
       <div class="secondDivFour">
         <p class="text">邮箱</p>
         <el-input  class="thirdInput" v-model="emailInput" placeholder="请输入您的邮箱"></el-input>
       </div>
       <div class="secondDivOne">
         <p class="text">身份证照片</p>
         <div class="er">
           <el-upload
             class="ss"
             :limit='limitCount'
             :class="{hide:hideUpload}"
             action="https://jsonplaceholder.typicode.com/posts/"
             list-type="picture-card"
             :on-preview="handlePictureCardPreview"
             :on-remove="handleRemove"
             :on-change="deleteL">
             <div class="zhengmian">
               <img src="../../../static/image/survey/tianjia.png" alt="">
             </div>
           </el-upload>
           <el-dialog :visible.sync="dialogVisible" >
             <img width="100%" v-if='dialogImageUrl' :src="dialogImageUrl" alt="">

           </el-dialog>
         </div>
         <!--<div class="er">-->
           <!--<el-upload-->
             <!--class="ss"-->
             <!--:limit='limitCount'-->
             <!--:class="{hide:hideUpload}"-->
             <!--action="https://jsonplaceholder.typicode.com/posts/"-->
             <!--list-type="picture-card"-->
             <!--:on-preview="handlePictureCardPreview"-->
             <!--:on-remove="handleRemove"-->
             <!--:on-change="deleteL">-->
             <!--<i class="el-icon-plus"></i>-->
           <!--</el-upload>-->
           <!--<el-dialog :visible.sync="dialogVisible" >-->
             <!--<img width="100%" v-if='dialogImageUrl' :src="dialogImageUrl" alt="">-->

           <!--</el-dialog>-->
         <!--</div>-->
         <!--<div class="er">-->
           <!--<el-upload-->
             <!--class="ss"-->
             <!--:limit='limitCount'-->
             <!--:class="{hide:hideUpload}"-->
             <!--action="https://jsonplaceholder.typicode.com/posts/"-->
             <!--list-type="picture-card"-->
             <!--:on-preview="handlePictureCardPreview"-->
             <!--:on-remove="handleRemove"-->
             <!--:on-change="deleteL">-->
             <!--<i class="el-icon-plus"></i>-->
           <!--</el-upload>-->
           <!--<el-dialog :visible.sync="dialogVisible" >-->
             <!--<img width="100%" v-if='dialogImageUrl' :src="dialogImageUrl" alt="">-->

           <!--</el-dialog>-->
         <!--</div>-->
       </div>
     </div>
   </div>
</template>

<script>
  import {BASE_URL} from "../../api";
    export default {
        name: "personal",
      data(){
          return{
            limitCount:1,
            hideUpload: false,
            dialogImageUrl: '',
            dialogVisible: false,
            nameInput:'',
            phoneInput:'',
            emailInput:''
        }
      },
      methods:{
        deleteL(response, file){
          // console.log(response)
          // console.log(file.length)
          // console.log(this.limitCount)
          this.hideUpload = file.length >= this.limitCount;
        },
        handleRemove(file, fileList) {
          // console.log(file, fileList);
          this.hideUpload = file.length >= this.limitCount;

        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
      }
    }
</script>

<style scoped>
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
  .text{
    width: 90px;
    text-align: right;
    /*border: 1px solid red;*/
  }
  .secondDiv{
    width: 60%;
    margin: 60px auto 0 auto;
    border: 1px solid black;
  }
  .secondDivOne,.secondDivTwo,.secondDivThree,.secondDivFour{
    width: auto;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #333333;
    /*border: 1px solid red;*/
    margin-top: 19px;
  }
  .ss{
    display: flex;
  }
  .hide .el-upload--picture-card {
    display: none;
  }
  .er{
    margin-left: 60px;
  }
  .thirdInput{
    width: 400px;
    margin-left: 60px;
  }
  .zhengmian{
    width: 280px;
    height: 150px;
    background-image: url('../../../static/image/survey/zhengmian.png');
    background-size: 280px 150px ;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
