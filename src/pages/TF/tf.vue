<template>
    <div class="tf">
      <Bheader></Bheader>
      <div class="bg">
        <p class="p1">IOS TF签名</p>
        <p class="p2">
          苹果官方认可的新分发模式Test Flight；无需信任证书，直接下载使用，
          零风险，无设备限制；告别频繁掉签，告别高价格
        </p>
        <div><a href="http://wpa.qq.com/msgrd?v=3&uin=647493453&site=qq&menu=yes" target="_blank" style="color: white">立即开始</a></div>
      </div>
      <div class="content">
        <div class="contentMain">
          <img src="../../../static/image/tf/guanfang.png" alt="">
          <p class="contentMainP">官方认可  专业服务</p>
          <div class="contentMainText">
            <p>采用苹果官方认可的分发模式，相较于企业签名会更加稳定；并且我们为您提供专业的资深团队服务，给您的应用预先审核，让您的应用能更好的进行分发</p>
          </div>
        </div>
        <div class="contentMain">
          <img src="../../../static/image/tf/anzhuang.png" alt="">
          <p class="contentMainP">无需信任  直接安装</p>
          <div class="contentMainText">
            <p>使用苹果官方链接地址，让用户安装更加放心；下载应用不再需要点击信任证书，直接下载使用；应用更新信息经由苹果官方渠道推送，更加方便快捷。</p>
          </div>
        </div>
        <div class="contentMain">
          <img src="../../../static/image/tf/xingjiabi.png" alt="">
          <p class="contentMainP">零风险  性价比高</p>
          <div class="contentMainText">
            <p>分发链接不再担心屏蔽风险，且无设备限制，任意苹果设备都可下载使用；彻底远离企业签名频繁掉签，告别超级签名昂贵的价格，让您拥有最高性价比的签名体验。</p>
          </div>
        </div>
      </div>
      <!--操作流程简单解析-->
      <div class="operation">
        <div class="operationDiv">
          <img src="../../../static/image/superSignature/hpchaozuoliucheng.png" alt="">
        </div>
        <div class="operationSmall">
          <div class="operationDL">

            <img src="../../../static/image/tf/ipa.png" alt="">

            <p>提交IPA包</p>
          </div>
          <div class="sanjiao">
            <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
            <p></p>
          </div>
          <div class="operationCZ">

            <img src="../../../static/image/tf/shenhe.png" alt="">

            <p>出具审核报告</p>
          </div>
          <div class="sanjiao">
            <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
            <p></p>
          </div>
          <div class="operationSC">

            <img src="../../../static/image/tf/xiugai.png" alt="">

            <p>修改后，再次传包</p>
          </div>
          <div class="sanjiao">
            <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
            <p></p>
          </div>
          <div class="operationYY">

            <img src="../../../static/image/tf/dengdaishenhe.png" alt="">

            <p>等待审核  </p>
          </div>
          <div class="sanjiao">
            <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
            <p></p>
          </div>
          <div class="operationEW">

            <img src="../../../static/image/tf/fenfa.png" alt="">

            <p>完成分发</p>
          </div>

        </div>
      </div>
      <!--常见问题-->
      <div class="problem">
        <div class="problemDiv">
          <img src="../../../static/image/superSignature/hpwenti.png" alt="">
        </div>
        <div class="textMain">
          <div class="textMainTop">
            <div class="textfooter">
              <p class="textQ">Q</p>
              <p class="textOne">上传应用有什么限制？</p>
            </div>
            <div class="textfooter">
              <p class="textA">A</p>
              <p class="textTwo">无限制，只需提供正确的 IPA 包即可。</p>
            </div>
          </div>
          <div class="textMainTop">
            <div class="textfooter">
              <p class="textQ">Q</p>
              <p class="textOne">提交正确的包之后多久可以使用？</p>
            </div>
            <div class="textfooter">
              <p class="textA">A</p>
              <p class="textTwo">正常时间为1-3天，若您需要加急，请联系我们的客服人员。</p>
            </div>
          </div>
          <div class="textMainTop">
            <div class="textfooter">
              <p class="textQ">Q</p>
              <p class="textOne">链接安装有效期为多长时间？</p>
            </div>
            <div class="textfooter">
              <p class="textA">A</p>
              <p class="textTwo">有效期为3个月。</p>
            </div>
          </div>
          <div class="textMainTop">
            <div class="textfooter">
              <p class="textQ">Q</p>
              <p class="textOne">链接下载次数限制为多少？</p>
            </div>
            <div class="textfooter">
              <p class="textA">A</p>
              <p class="textTwo">
                每个安装链接最多下载10000次，每超过10000次重新生成一个新的安装链接。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bheader from '../component/header'
    export default {
        name: 'tf',
      components: {
        Bheader
      },
    }
</script>

<style scoped>
  .tf{
    width: 100%;
    height: auto;
    background-color: #f3f6f9;
  }
.bg{
  width: 100%;
  height: 450px;
  background-image: url("../../../static/image/tf/banner.png");
  background-size: 100% 450px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.bg .p1{
  color: white;
  font-size: 3.6vw;
  font-family:Microsoft YaHei;
  font-weight:bold;
  margin-left: 14vw;
}
.bg .p2{
  width: 100%;
  max-width: 49vw;
  color: white;
  font-size: 1.5vw;
  font-family:Microsoft YaHei;
  margin-top: 15px;
  margin-left: 14vw;
}
.bg div{
  width: 100%;
  max-width: 130px;
  height: 42px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 6px;
  margin-top: 25px;
  margin-left: 14vw;
}
.content{
  width: 100%;
  max-width: 1200px;
  margin: 98px auto 0 auto;
  display: flex;
  justify-content: space-between;
}
  .contentMain{
    width: 100%;
    max-width: 354px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .contentMain img{
    width: 100px;
    height: 100px;
    margin-top: 50px;
  }
  .contentMainP{
    margin-top: 44px;
    font-size: 20px;
    color: #323232;
  }

.contentMainText{
  width: 100%;
  max-width: 294px;
  text-align: center;
  font-size: 15px;
  color: #666666;
  margin-top: 33px;
}
  .operation {
    width: 100%;
    height: 300px;
  }

  .operationDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .operationDiv img {
    width: 438px;
    height: 51px;
  }

  .operationSmall {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 60px auto 0 auto;
    color: #333333;
    font-size: 16px;
  }

  .operationDL {
    width: 80px;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
  }

  .operationDL img {
    width: 56px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -28px;
  }

  .operationCZ {
    width: 130px;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
  }

  .operationCZ img {
    width: 56px;
    height: 42px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -28px;
  }

  .operationSC {
    width: 150px;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;

  }

  .operationSC img {
    width: 56px;
    height: 42px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -28px;
  }

  .operationYY {
    width: 90px;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
  }

  .operationYY img {
    width: 56px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -28px;
  }

  .operationEW {
    width: 150px;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-left: -30px;
    position: relative;
    top: 0;
  }

  .operationEW img {
    width: 56px;
    height: 55px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -28px;
  }

  .operationEW p, .operationDL p, .operationYY p, .operationSC p, .operationCZ p {
    position: absolute;
    bottom: 10px;
  }

  .sanjiao {

    height: 80px;
    text-align: center;
  }

  .sanjiao1 img {
    width: 18px;
    height: 24px;

  }
  .problem {
    width: 100%;
    height: auto;
  }

  .problemDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 61px;
  }

  .problemDiv img {
    width: 283px;
    height: 53px;
  }

  .problemImg {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .problemImg img {
    width: 800px;
    height: 1410px;
  }

  .login_title {
    width: 80%;
    height: 80px;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
    margin: 0 auto;
  }

  .login_title .login_title_img {
    width: 143px;
    height: 39px;

    /*margin-left: 18.8vw;*/
  }

  .title {
    width: 500px;
    /*margin-left: 5vw;*/
    list-style: none;
    display: inline-flex;
    justify-content: space-around;
  }

  .title p:nth-child(1) {

    /*color: #06B2B6;*/
    height: 30px;
    line-height: 30px;
    text-align: center;

  }

  .title p {

    cursor: pointer;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    /*border-bottom: 2px solid transparent;*/
  }

  .isColor {
    color: #2F82FF;
    border-bottom: 2px solid #2F82FF;
  }

  .login_title_div {
    display: flex;
    font-size: 16px;
    color: #323232;
    margin-left: 6vw;
  }

  .login_title_div p:nth-child(1) {
    width: 56px;
    height: 30px;
    background-color: #2F82FF;
    font-size: 14px;
    color: white;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .login_title_div p:nth-child(2) {
    margin-left: 20px;
    width: 56px;
    height: 30px;
    background-color: white;
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    text-align: center;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  }

  .alreadyLogin {
    width: 300px;
    height: 30px;
    margin-top: -5px;
    /*margin-left: 20px;*/
    display: flex;
    align-items: center;

  }

  .myappBtn {
    width: 118px;
    height: 34px;
    background-color: #2F82FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
  }

  .tixingBtn {
    width: 18px;
    height: 21px;

    cursor: pointer;
  }

  .accountNumber {
    color: #999999;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }

  .headUrl {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .el-badge {
    width: 30px;
    height: 30px;
    position: relative;
    /* vertical-align: middle; */
    /* display: inline-block; */
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
  }

  .xiala {
    width: 180px;
    margin-left: 30px;
  }

  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.4);
    z-index: 1000000;
    top: 0;
  }

  .mask video {
    width: 375px;
    height: 600px;
  }

  .videoDiv {
    width: 650px;
    height: 350px;
    background-image: url('../../../static/image/superSignature/hpbg.png');
    background-size: 650px 350px;
    background-repeat: no-repeat;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 61px auto;
  }

  .videoDiv img {
    width: 115px;
    height: 115px;
  }

  .rightnow {
    width: 160px;
    height: 46px;
    border: 1px solid white;
    font-size: 18px;
    color: white;
    text-align: center;
    line-height: 46px;
    border-radius: 23px;
    margin-top: 35px;
    cursor: pointer;
  }

  .shougou {
    position: absolute;
    top: 60%;
    right: 1.6%;
    z-index: 9999;
  }

  .shougou img {
    width: 120px;
  }

  .qqBig {
    position: absolute;
    top: 25%;
    right: 1.05%;
    z-index: 9999;
  }

  .qq {
    width: 120px;
    height: 140px;
    border: 1px solid red;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    border: 1px solid #d0d0d0;
  }

  .qqtouxiang {
    width: 90px;
    height: 80px;
  }

  .qqtuiguang {
    width: 120px;
    height: 30px;
    border-radius: 5px;
    background-color: #2F82FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
    margin-top: 13px;
  }

  .qqtuiguang a {
    color: white;
    font-size: 15px;
  }

  .qqtuiguang img {
    width: 20px;
    height: 20px;
  }

  .demo-input-suffix {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .demo-input-suffix p {
    width: 85px;
    font-size: 15px;
    text-align: center;
  }

  .demo-input-suffix .el-input {
    width: 50%;
  }

  .queOk, .zhanOk {
    width: 60px;
    background-color: #2F82FF;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    border-radius: 10px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }

  .login_title_first {
    width: 20%;
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid black;
  }

  .login_title_second {
    width: 55%;
    height: 80px;
    display: flex;
    align-items: center;
    border: 1px solid red;
  }

  .login_title_third {
    width: 25%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
  }
  .textfooter{
    display: flex;
    align-items: center;
    margin-top: 12px;
  }
  .textQ{
    width: 20px;
    height: 20px;
    color: white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2F82FF;
  }
  .textA{
    width: 20px;
    height: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: #FFA405;
  }
  .textTwo,.textOne{
    margin-left: 10px;
  }
  .textOne{
    color: #333333;
    font-size: 15px;
    font-weight: bold;
  }
  .textTwo{
    color: #333333;
    font-size: 15px;
  }
  .textMain{
    width: 100%;
    max-width: 1200px;

    margin: 53px auto 0 auto;
    padding-bottom: 50px;
  }
  .textMainTop{
    margin-top: 26px;
  }
</style>
