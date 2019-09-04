<template>
  <!--尾部-->
  <div class="Bfooter">
    <div class="footer_center">
      <div class="footerOne">
        <p class="contact">联系我们</p>
        <div class="footerOne_Odiv">
          <p class="kService">客服QQ：<span>{{qqValue}}</span></p>
          <p class="email">公司邮箱：<span>{{qqValue}}@qq.com</span></p>
        </div>
        <div class="footerOne_Tdiv">
          <p>Copyright © www.AxureUX.com, All Rights Reserved.</p>
        </div>
      </div>
      <div class="footerTwo">
        <p class="phoneNumber">超级签名一次</p>
        <div>
          <!--<img src="../../../static/image/superSignature/dianhua.png" alt="">-->
          <p>安装永不受影响</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
    export default {
        name: "Bfooter",
      data(){
          return{
            qqValue:''
          }
      },
      mounted(){
        /*客服qq*/

        axios.get(BASE_URL+'/api/index/getConfig/name/kefu').then(res => {
          this.qqValue=res.data.data[0]
        }, err => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  .Bfooter{
    width: 100%;
    height: 246px;
    background-color: #24282F;

  }
  .footer_center{
    width: 66%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  .footerOne{
    width: 550px;
    height: 200px;
    color: white;
    font-size: 14px;
    margin-top: 30px;
  }
  .contact{
    font-size: 20px;
    margin-top: 17px;
  }
  .footerOne_Odiv{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .email{
    margin-left: 9vw;
  }
  .address{
    margin-top: 10px;
  }
  .footerOne_Odiv span{
    color: #B9B9B9;
  }
  .footerOne_Tdiv{
    height: 60px;
    color: #B9B9B9;
    line-height: 40px;
    margin-top: 20px;
    border-top: 1px solid #FFFFFF;
  }
  .footerTwo{
    width: 300px;
    height: 100px;
    color: #fff;
    font-size: 17px;
    margin-top: 30px;
    position: relative;
  }
  .phoneNumber{
    position: absolute;
    bottom: 35%;
    right: 0;
  }
  .footerTwo div{
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 20px;
  }
  .footerTwo div img{
    margin-left: -30px;
  }
  .footerTwo div p{
    margin-left: 20px;
  }

</style>
