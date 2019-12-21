<template>
    <div class="examine">
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
      <div v-if="isOk" style="width: 100%;margin: 20% auto;height: 100%"><p style="margin: 0 auto;width: 600px;font-size: 40px;font-weight: bold">{{text}}</p></div>
      <div v-else style="width: 800px;margin: 200px auto;">
        <div class="textmain" >
          <p>真实姓名</p>
          <p class="textT">{{relName}}</p>
        </div>
        <div class="textmain" >
          <p>身份证号</p>
          <p class="textT">{{idNum}}</p>
        </div>
        <div class="textmain" >
          <p>所在地区</p>
          <p class="textT">{{address}}</p>
        </div>

      </div>
    </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "examine",
      data(){
          return{
            isOk:false,
            text:'',
            relName:'',
            idNum:'',
            address:'',
          }
      },
      mounted(){
          let data={
            type:2
          }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/user/checkAuthEntication',data,config).then(res => {
          if(res.data.code==200){
            this.$message.success(res.data.msg);
            this.text=res.data.msg
            this.isOk=false
            this.relName=res.data.data.name
            this.idNum=res.data.data.num
            this.address=res.data.data.region
          }else if(res.data.code==0){
            this.isOk=true
            this.text=res.data.msg
            // this.$message.error(res.data.msg);
          }else if(res.data.code==1){
            this.isOk=true
            this.text=res.data.msg
            // this.$message.error(res.data.msg);
          }else if(res.data.code==2){
            this.isOk=true
            this.text=res.data.msg
            // this.$message.error(res.data.msg);
          }else if(res.data.code==3){
            this.isOk=true
            this.text='审核中'
            // this.$message.error(res.data.msg);
          }


        }, err => {
          this.$message.error('系统报错');
          console.log(err)
        })
      }
    }
</script>

<style scoped>
.examine{
  width: 100%;
  margin: 0 auto;
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
  .textT{
    width: 300px;
    margin-left: 16px;
  }
  .textmain{
    margin-top: 15px;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
</style>
