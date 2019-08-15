<template>
  <div class="login">

    <Bheader></Bheader>
    <div class="banner">
      <img src="../../../static/image/superSignature/bannner.png" alt="">
    </div>
    <!--样例展示-->
    <div class="example">
      <img src="../../../static/image/superSignature/yangli@2x.png" alt="">
    </div>
    <!--video-->
    <div class="videoDiv">
      <video width="960" height="400" class="video-js vjs-default-skin vjs-big-play-centered" controls
             style="object-fit:fill" poster="../../assets/logo.png">
        <source src="../../assets/coverr-clear-water-1559888911402.mp4" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <!--我们的优势-->
    <div class="advantage">
      <div class="advantageImg">
        <img src="../../../static/image/superSignature/youshi@2x.png" alt="">
      </div>
      <div class="advantageBig">
        <div @mouseenter="advantageEnterOne()" @mouseleave="advantageLeaveOne()" class="advantageOne advantageBig_div"
             style="background-image: url('../../../static/image/superSignature/bg.png')">
          <div class="advantageOneBig" v-if="isAdvantageOne">
            <img src="../../../static/image/superSignature/qianming@2x.png" alt="">
            <p class="LaBel">自动化签名 方便快捷</p>
          </div>
          <div v-else class="advantageOneSmall">
            <div>
              <p>自动化签名、方便快捷</p>
              <p>根据自身需要，选择服务类型，上传IPA包，快速分发,10分钟内完成所有流程，全程自动化，操作简单</p>
            </div>
          </div>

        </div>
        <div @mouseenter="advantageEnterTwo()" @mouseleave="advantageLeaveTwo()" class="advantageTwo advantageBig_div"
             style="background-image: url('../../../static/image/superSignature/bg.png')">
          <div class="advantageTwoBig" v-if="isAdvantageTwo">
            <img src="../../../static/image/superSignature/anquan@2x.png" alt="">
            <p class="LaBel">特有机制 告别掉签</p>
          </div>
          <div v-else class="advantageTwoSmall">
            <div>
              <p>特有机制、告别掉签</p>
              <p>蒲公英采取的iOS超级签名和企业签名机制不同，掉签概率远低于传统企业签名</p>
            </div>
          </div>

        </div>
        <div @mouseenter="advantageEnterThree()" @mouseleave="advantageLeaveThree()"
             class="advantageThree advantageBig_div"
             style="background-image: url('../../../static/image/superSignature/bg.png')">
          <div class="advantageTwoBig" v-if="isAdvantageThree">
            <img src="../../../static/image/superSignature/anzhuang@2x.png" alt="">
            <p class="LaBel">无需越狱 安装即用</p>
          </div>
          <div v-else class="advantageThreeSmall">
            <div>
              <p>无需越狱、安装即用</p>
              <p>无需企业签名，无需越狱，无需苹果审核，无需上架App Store，下载后安装即用</p>
            </div>
          </div>
        </div>
        <div @mouseenter="advantageEnterFourth()" @mouseleave="advantageLeaveFourth()"
             class="advantageFourth advantageBig_div"
             style="background-image: url('../../../static/image/superSignature/bg.png')">
          <div class="advantageFourthBig" v-if="isAdvantageFourth">
            <img src="../../../static/image/superSignature/goumai@2x.png" alt="">
            <p class="LaBel">按需购买 性价比高</p>
          </div>
          <div v-else class="advantageFourthSmall">
            <div>
              <p>自动化签名、快速高效</p>
              <p>按需购买，未使用设备不过期同设备多次下载，或下载多款应用下载，只收费一次</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--超低价格-->
    <div class="lowprize">
      <div class="lowprizeImg">
        <img src="../../../static/image/superSignature/zhaodijiage@2x.png" alt="">
      </div>
      <div class="lowprizeDiv">
        <div class="lowprizeDiv_one">
          <div>
            <p>同样的iOS签名、超低的价格 </p>
            <p>1、因机制与企业签名不同，告别掉签</p>
            <p>2、告别掉签风险，只需支付一次获客成本即可</p>
            <p>3、同一台设备下载安装该应用不限制下载次数</p>
            <p>4、按设备数量收费，仅需<span>￥15.00</span>/每台</p>
          </div>
          <div>
            <img src="../../../static/image/superSignature/tu@2x.png" alt="">
          </div>
        </div>
      </div>


    </div>
    <!--服务对比-->
    <div class="service">
      <div class="serviceImg">
        <img src="../../../static/image/superSignature/fuwu@2x.png" alt="">
      </div>
      <div class="serviceDiv">
        <div class="serviceDivOne" @mouseenter="serviceDivOne()"
             style="background-image: url('../../../static/image/superSignature/lansejianbianditu.png')">
          <p class="serviceDivOneTitle">IOS专属签名</p>
          <div class="hr"></div>
          <div class="flex_service">
            <div class="serviceSmall">
              <div></div>
              <p>因机制与企业签名不同，告别掉签</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>告别掉签风险,只需支付一次即可</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>同一台设备下载安装该应用不限制下载次数</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>按设备数量收费</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>每台设备<span>￥15.00</span>/每台</p>
            </div>
          </div>
        </div>
        <div class="serviceDivTwo" @mouseenter="serviceDivTwo()">
          <p class="serviceDivTwoTitle">IOS专属签名</p>
          <div class="hr1"></div>
          <div class="flex_service">
            <div class="serviceSmall">
              <div></div>
              <p>因机制与企业签名不同，告别掉签</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>告别掉签风险,只需支付一次即可</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>同一台设备下载安装该应用不限制下载次数</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>按设备数量收费</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>每台设备<span>￥15.00</span>/每台</p>
            </div>
          </div>
        </div>
        <div class="serviceDivThree">
          <p class="serviceDivTwoTitle">IOS专属签名</p>
          <div class="hr1"></div>
          <div class="flex_service">
            <div class="serviceSmall">
              <div></div>
              <p>因机制与企业签名不同，告别掉签</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>告别掉签风险,只需支付一次即可</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>同一台设备下载安装该应用不限制下载次数</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>按设备数量收费</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>每台设备<span>￥15.00</span>/每台</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--操作流程简单解析-->
    <div class="operation">
      <div class="operationDiv">
        <img src="../../../static/image/superSignature/caozuoliuchengjianbiaoti.png" alt="">
      </div>
      <div class="operationSmall">
        <div class="operationDL">

          <img src="../../../static/image/superSignature/dengluzhuce.png" alt="">

          <p>登录/注册</p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationCZ">

          <img src="../../../static/image/superSignature/chongzi.png" alt="">

          <p>充值</p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationSC">

          <img src="../../../static/image/superSignature/shangchuanipa.png" alt="">

          <p>上传IPA安装包</p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationYY">

          <img src="../../../static/image/superSignature/success_ico.png" alt="">

          <p>应用签名 </p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/superSignature/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationEW">

          <img src="../../../static/image/superSignature/shenglianjie.png" alt="">

          <p>生成下载链接/二维码</p>
        </div>

      </div>
    </div>
    <!--常见问题-->
    <div class="problem">
      <div class="problemDiv">
        <img src="../../../static/image/superSignature/changjianwentibiaoti.png" alt="">
      </div>
      <div class="problemImg">
        <img src="../../../static/image/superSignature/wentitu@2x.png" alt="">
      </div>
    </div>
    <Bfooter></Bfooter>
  </div>
</template>

<script>
  import Bfooter from '../component/footer'
  import Bheader from '../component/header'
  export default {
    name: "index",
    data() {
      return {

        isAdvantageOne: true,
        isAdvantageTwo: true,
        isAdvantageThree: true,
        isAdvantageFourth: true


      }
    },
    components: {
      Bfooter,
      Bheader
    },
    methods: {

      /*优势第一个div移入*/
      advantageEnterOne() {
        this.isAdvantageOne = false
        $(".advantageOne").css({"background-image": 'url(../../../static/image/superSignature/qianming_s.png)'})
      },
      /*优势第一个div移出*/
      advantageLeaveOne() {
        this.isAdvantageOne = true
        $(".advantageOne").css({"background-image": 'url(../../../static/image/superSignature/bg.png)'})
      },
      /*优势第二个div移入*/
      advantageEnterTwo() {
        this.isAdvantageTwo = false
        $(".advantageTwo").css({"background-image": 'url(../../../static/image/superSignature/jizhi.png)'})
      },
      /*优势第二个div移出*/
      advantageLeaveTwo() {
        this.isAdvantageTwo = true
        $(".advantageTwo").css({"background-image": 'url(../../../static/image/superSignature/bg.png)'})
      },
      /*优势第三个div移入*/
      advantageEnterThree() {
        this.isAdvantageThree = false
        $(".advantageThree").css({"background-image": 'url(../../../static/image/superSignature/anzhuang_s.png)'})
      },
      /*优势第三个div移出*/
      advantageLeaveThree() {
        this.isAdvantageThree = true
        $(".advantageThree").css({"background-image": 'url(../../../static/image/superSignature/bg.png)'})
      },
      /*优势第四个div移入*/
      advantageEnterFourth() {
        this.isAdvantageFourth = false
        $(".advantageFourth").css({"background-image": 'url(../../../static/image/superSignature/goumai_s.png)'})
      },
      /*优势第四个div移出*/
      advantageLeaveFourth() {
        this.isAdvantageFourth = true
        $(".advantageFourth").css({"background-image": 'url(../../../static/image/superSignature/bg.png)'})
      },

      /*服务对比第一个div移入效果*/
      serviceDivOne() {
        // $(".serviceDivOne").css({"background-image": 'url(../../../static/image/superSignature/lansejianbianditu.png)'})
        // $(".serviceDivOneTitle").css({"color": 'white'})
        // $(".serviceDivTwoTitle").css({"color": 'black'})
        // $(".serviceDivOne .serviceSmall").css({"color": 'white'})
        // $(".serviceDivTwo .serviceSmall").css({"color": 'black'})
        // $(".serviceDivTwo").css({"background-image": 'url()'})
      },
      serviceDivTwo() {
        // $(".serviceDivTwo").css({
        //   "color": 'white',
        //   "background-image": 'url(../../../static/image/superSignature/lansejianbianditu.png)'
        // })
        // $(".serviceDivOne").css({"color": 'black', "background-image": 'url()'})
        // $(".serviceDivOneTitle").css({"color": 'black'})
        // $(".serviceDivTwoTitle").css({"color": 'white'})
        // $(".serviceDivOne .serviceSmall").css({"color": 'black'})
        // $(".serviceDivTwo .serviceSmall").css({"color": 'white'})
      }
    }
  }
</script>

<style scoped>
  .login {
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: relative;*/
  }



  .banner img {
    width: 100%;
    /*height: 368px;*/
  }

  .example {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .example img {
    width: 368px;
    height: 51px;
  }

  .videoDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .advantage {
    width: 100%;
    height: 520px;
    margin-top: 50px;
    background-color: #F7F7F7;
  }

  .advantageImg {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 60px;
  }

  .advantageImg img {
    width: 241px;
    height: 51px;
  }

  .advantageBig {
    width: 100%;
    display: flex;
    margin-top: 50px;
    justify-content: center;
  }

  .advantageBig_div {
    width: 230px;
    height: 280px;
    background-size: 230px 280px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .advantageOneBig {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .advantageTwoBig {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .advantageThreeBig {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .advantageFourthBig {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .advantageBig_div img {
    width: 85px;
    height: 85px;
  }

  .advantageBig_div .LaBel {
    margin-top: 45px;
  }

  .advantageOneSmall, .advantageTwoSmall, .advantageThreeSmall, .advantageFourthSmall {
    width: 75%;
    color: white;

  }

  .advantageOneSmall p:nth-child(1), .advantageTwoSmall p:nth-child(1), .advantageThreeSmall p:nth-child(1), .advantageFourthSmall p:nth-child(1) {
    text-align: center;
    font-size: 15px;
  }

  .advantageOneSmall p:nth-child(2), .advantageTwoSmall p:nth-child(2), .advantageThreeSmall p:nth-child(2), .advantageFourthSmall p:nth-child(2) {
    width: 100%;
    font-size: 12px;
    margin-top: 25px;
    text-align: justify;
    text-justify: inter-ideograph;

  }

  /*.advantageTwoSmall {*/
  /*width: 75%;*/
  /*color: white;*/

  /*}*/

  /*.advantageTwoSmall p:nth-child(1) {*/
  /*text-align: center;*/
  /*font-size: 15px;*/
  /*}*/

  /*.advantageTwoSmall p:nth-child(2) {*/
  /*width: 100%;*/
  /*font-size: 12px;*/
  /*margin-top: 25px;*/
  /*text-align: justify;*/
  /*text-justify: inter-ideograph;*/

  /*}*/

  .lowprize {
    width: 100%;
    height: 570px;
    background-color: white;
  }

  .lowprizeImg {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .lowprizeImg img {
    width: 247px;
    height: 51px;
  }

  .lowprizeDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 61px;
  }

  .lowprizeDiv_one {
    width: 1200px;
    height: 460px;
    background-color: #E8FCFC;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lowprizeDiv_one div:nth-child(1) {
    width: 500px;
  }

  .lowprizeDiv_one div:nth-child(1) p:nth-child(1) {
    color: #06B2B6;
    font-size: 28px;

  }

  .lowprizeDiv_one div:nth-child(1) p:nth-child(2) {
    color: #4D4D4D;
    font-size: 16px;
    margin-top: 20px;
  }

  .lowprizeDiv_one div:nth-child(1) p:nth-child(3) {
    color: #4D4D4D;
    font-size: 16px;
    margin-top: 20px;
  }

  .lowprizeDiv_one div:nth-child(1) p:nth-child(4) {
    color: #4D4D4D;
    font-size: 16px;
    margin-top: 20px;
  }

  .lowprizeDiv_one div:nth-child(1) p:nth-child(5) {
    color: #4D4D4D;
    font-size: 16px;
    margin-top: 20px;
  }

  .lowprizeDiv_one span {
    color: red;
  }

  .lowprizeDiv_one img {
    width: 387px;
    height: 336px;
  }

  .service {
    width: 100%;
    height: 660px;
    background-color: #F5F5F5;
  }

  .serviceImg {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .serviceImg img {
    width: 312px;
    height: 51px;
    margin-top: 60px;
  }

  .serviceDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .serviceDivOne {
    width: 350px;
    height: 450px;
    text-align: center;
    background-size: 350px 450px;
    border: 1px solid #EAEAEA;
    margin: 20px;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
  }

  .serviceDivTwo {
    width: 350px;
    height: 450px;
    text-align: center;
    background-size: 350px 450px;
    border: 1px solid #EAEAEA;
    margin: 20px;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
  }

  .serviceDivThree {
    width: 350px;
    height: 450px;
    text-align: center;
    background-size: 350px 450px;
    border: 1px solid #EAEAEA;
    margin: 20px;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
  }

  .serviceDivOneTitle {
    font-size: 24px;
    color: white;
    margin-top: 33px;
  }

  .serviceDivTwoTitle {
    font-size: 24px;
    color: black;
    margin-top: 33px;
  }

  .serviceDivThreeTitle {
    font-size: 24px;
    color: black;
    margin-top: 33px;
  }

  .flex_service {
    margin-top: 70px;
  }

  .hr {
    width: 52px;
    height: 3px;
    margin: 45px auto 0 auto;
    background-color: white;
  }

  .hr1 {
    width: 52px;
    height: 3px;
    margin: 45px auto 0 auto;
    background-color: #06B2B6;
  }

  .serviceDivOne .serviceSmall {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    text-align: center;
    margin-left: 24px;
    margin-top: 20px;

  }

  .serviceDivOne .serviceSmall div {
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: white;
  }

  .serviceDivThree .serviceSmall {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: black;
    text-align: center;
    margin-left: 24px;
    margin-top: 20px;

  }

  .serviceDivThree .serviceSmall div {
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: black;
  }

  .serviceDivTwo .serviceSmall {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: black;
    text-align: center;
    margin-left: 24px;
    margin-top: 20px;

  }

  .serviceDivTwo .serviceSmall div {
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: black;
  }

  .serviceSmall p {
    margin-left: 7px;
  }

  .operation {
    width: 100%;
    height: 300px;
    background-color: white;
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
    width: 80px;
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
    width: 110px;
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
    height: 1500px;
    background-color: #F5F5F5;
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
    width: 67%;
    height: 1220px;
  }

</style>
