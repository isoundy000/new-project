<template>
    <div>
      <div class="title">

      </div>
      <div class="logo">
        <img :src="icon" alt="">
      </div>
      <div class="name">
        <p>{{name}}</p>
      </div>
      <div class="miao">
        <p>版本{{miao}}  {{version}}大小{{filesize}}  更新时间{{time}}</p>
      </div>
      <div class="anzhuan" @click="anzhuan">
       <p>安装到手机</p>
      </div>
      <div class="shiyong">
        <p >适用于{{text}}</p>
      </div>
      <div class="erweima">
        <qrcode-vue :value="downvalue" :size="size" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>
      </div>


    </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  import QrcodeVue from 'qrcode.vue';
    export default {
        name: "down",
      data(){
          return{
            downUrl:'',
            icon:'',
            name:'',
            version:'',
            filesize:'',
            time:'',
            miao:'',
            value: '',//13版本以下
            value1: '',//13版本以上
            size: 300,
            text:'',
            jixing:'',
            downvalue:'',
            newType:'',
          }
      },
      components: {
        QrcodeVue
      },
      methods:{
        anzhuan(){
          var ua = navigator.userAgent.toLowerCase();
          var that=this
          if(this.jixing==1){ //判断该应用是不是苹果机才能下载
            if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
              alert("安卓机不能下载")
            }else{

              var str = navigator.userAgent.toLowerCase();
              var ver = str.match(/cpu iphone os (.*?) like mac os/);
              var version = ver[1].replace(/_/g, ".");
              var vc = version.split('.');
              if(vc[0]>=13&& that.value1!=''&&that.newType==2){
                window.location.href=that.value1
              }else{
                window.location.href=that.value
              }
              if (ver) {
                if(vc[0]>=12){
                  if ((vc[0]==12 && vc[1]>1)||vc[0]>12) {
                    setTimeout(function () {
                      window.location.href='/embedded.mobileprovision'
                    },2000)
                  }
                }
              }
            }
          }else{
            if (ua.indexOf('android') > -1 || ua.indexOf('linux') > -1) {
              window.location.href=this.value
            }else{
              alert("苹果机不能下载")
            }
          }

        }
      },
      mounted(){

        let data={
          tag:this.$route.query.tag
        }

        axios.post(BASE_URL+'/api/encapsulation/download',qs.stringify(data)).then(res => {
          console.log(res.data)
          if(res.data.code==200){
            this.icon=res.data.data.icon
            this.name=res.data.data.name
            this.filesize=res.data.data.filesize
            this.version=res.data.data.version_code
            this.time=res.data.data.update_time
            this.downvalue=window.location.hostname+'/#/down?tag='+res.data.data.tag
            this.value=res.data.data.mobileconfig
            this.value1=res.data.data.oss_path
            this.jixing=res.data.data.platform
            this.newType=res.data.data.type
            //this.downUrl=window.location.hostname+'/#/down?tag='+res.data.data.tag
            if(res.data.data.platform==1){
              this.text='苹果机'


            }else{
              this.text='安卓机'
            }
          }else if(res.data.code==0){
            this.$message.error(res.data.msg);
          }
        }, err => {
          this.$message.error('系统报错');
          console.log(err)
        })

      }
    }
</script>

<style scoped>
.title{
  width: 100%;
  height: 200px;
  background-color: #06B2B6;
}
  .logo{
    width:360px;
    height:360px;
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 15px 1px rgba(0,102,104,0.13);
    border-radius:30px;
    margin: -30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo img{
    max-width: 100%;
    max-height: 100%;
  }
  .name{
    width: 100%;
    font-size: 4.5vw;
    display: flex;
    justify-content: center;
    margin-top: 10vw;
  }
  .miao{
    width: 100%;
    font-size: 3vw;
    display: flex;
    justify-content: center;
    margin-top: 4vw;
    color: #999999;
  }
  .anzhuan{
    width:366px;
    height:100px;
    background:rgba(41,210,211,1);
    border-radius:6px;
    font-size: 3vw;
    color: white;
    text-align: center;
    line-height: 100px;
    margin: 50px auto;
  }
  .shiyong{
    width: 100%;
    font-size: 4.5vw;
    display: flex;
    justify-content: center;
    margin-top: 4vw;
  }
 .erweima{
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 60px;
 }
a{
  color: white;
}
</style>
