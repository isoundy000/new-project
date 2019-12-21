<template>
  <div class="ordinary">
    <div class="ordinaryDiv">
      <div class="secondDivSmall">
        <el-steps :active="active" finish-status="success" align-center>
          <el-step title="基本信息"></el-step>
          <el-step title="上传图标"></el-step>
          <el-step title="配置插件"></el-step>
          <el-step title="选择套餐"></el-step>
          <el-step title="下载应用"></el-step>
        </el-steps>
      </div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ordinary",
      data(){
          return{
            active:0,
          }
      },
      watch: {
        '$route': function (to, from) {
          //   alert(this.$route.params.active)
        //  console.log('接受值：'+JSON.stringify(this.$route.params))
          if(this.$route.params.active==0){
            this.active=0
          //  alert("基本信息")
          }else if(this.$route.params.active==1){
            this.active=1
            this.$router.push({
              path:'/ordinaryIcon'
            })
           // alert("上传图标")
          }else if(this.$route.params.active==2){
            this.active=2
            this.$router.push({
              path:'/ordinaryConfig'
            })
           // alert("配置插件")
          }else if(this.$route.params.active==3){
            this.active=3
            this.$router.push({
              path:'/ordinaryChoose'
            })
           // alert("选择套餐")
          }else if(this.$route.params.active==4){
            this.active=4
            this.$router.push({
              path:'/ordinaryDownApp'
            })
         //   alert("下载应用")
          }
        }
      },
    }
</script>
<style>

  .el-upload-list--picture-card{
    display: flex !important;
  }
  .hide .el-upload--picture-card {
    display: none;
  }

  .el-step__icon.is-text {
    width: 50px;
    height: 50px;
  }

  .el-step__line {
    margin-top: 11px;
  }

  .is-success div:nth-child(2) {
    background-color: #2F82FF !important;
    border: 0;
    color: white;
  }

  .is-process div:nth-child(2) {
    background-color: #2F82FF !important;
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
    background-color: #2F82FF !important;
  }

  /*.is-wait div:nth-child(1){*/
  /*background-color: #DCDCDC !important;*/
  /*}*/
  .el-step__head.is-success {
    color: #2F82FF !important;
    border-color: #2F82FF !important;

  }

  .is-wait div:nth-child(1) i {
    background-color: white !important;
  }

  .is-wait div:nth-child(2) {
    background-color: white !important;
  }
</style>
<style scoped>
.ordinary{
  background-color: #f3f6f9;
}
.ordinaryDiv{
  width:80% ;
  height: auto;
  background-color: white;
  margin: 10px auto 0 auto;
}
.secondDivSmall {
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
