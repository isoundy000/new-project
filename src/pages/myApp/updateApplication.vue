<template>
    <div class="updateApplication">
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/shouye@2x.png" alt="">
          <p>您当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
            <el-breadcrumb-item>更新应用</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
</template>

<script>
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "updateApplication",
      data(){
          return{

          }
      },
      mounted(){
          alert(this.$route.query.id)
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post('https://ios.yoyoacg.com/api/app/update',qs.stringify(data),config).then(res => {
          console.log(res.data.data)
          // this.list=res.data.data
          // this.list.icon='https://ios.yoyoacg.com'+this.list.icon
          // for(var i=0;i<this.list.imgs.length;i++){
          //   this.imgList.push('https://ios.yoyoacg.com'+this.list.imgs[i])
          // }
          // if(this.list.status==0){
          //   this.state='已下架'
          //   this.enable='否'
          // }else{
          //   this.state='已上架'
          //   this.enable='是'
          // }
        }, err => {
          console.log(err)
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
</style>
