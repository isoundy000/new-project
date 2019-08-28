<template>
  <div class="login">
    <div class="Bheader">
      <div class="login_title">
        <img class="login_title_img" src="../../../static/image/superSignature/mumuunlogo.png" alt="">
        <div class="title">
          <p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"
             @mouseenter="enter(index)"
             @mouseleave="leave(index)">{{list.msg}}</p>
        </div>

        <div  class="login_title_div">
          <p @click="loginBtn">登录</p>
          <p @click="registerBtn">注册</p>
        </div>


      </div>
    </div>

    <div class="banner" style="background-image: url('../../../static/image/superSignature/bannner.png')">
      <div class="rightnow">立即签名</div>
    </div>
    <!--样例展示-->
    <div class="example">
      <img src="../../../static/image/superSignature/yangli@2x.png" alt="">
    </div>
    <!--video-->
    <div id="video" class="videoDiv" style="background-image: url(../../../static/image/superSignature/videoBg.png);">
      <img @click="play" class="play" src="../../../static/image/superSignature/Play_anniu@2x.png" alt="" />
    </div>
    <div class="mask" @click="mask" style="display: none">
      <video autoplay="autoplay"  class="video-js vjs-default-skin vjs-big-play-centered" controls
             style="object-fit:fill" >
        <source :src="asas"  />
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
          <p class="serviceDivTwoTitle">企业签</p>
          <div class="hr1"></div>
          <div class="flex_service">
            <div class="serviceSmall">
              <div></div>
              <p>稳定性差</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>无法推送</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>不可设置</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>需打开页面重新下载</p>
            </div>
            <div class="serviceSmall">
              <div></div>
              <p>包月收费</p>
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
        asas:'',
        title: [
          // {
          //   msg: '首页',
          //   isclass: false
          // },
          {
            msg: '超级签名',
            isclass: true
          },
          {
            msg: '专属签名',
            isclass: false
          },
          {
            msg: '企业签名',
            isclass: false
          },
          {
            msg: '购买服务',
            isclass: false
          },
          {
            msg: '发布应用',
            isclass: false
          }
        ],
        isAdvantageOne: true,
        isAdvantageTwo: true,
        isAdvantageThree: true,
        isAdvantageFourth: true,
        // grayname:''

      }
    },
    components: {
      Bfooter,
      Bheader
    },
    mounted(){
this.asas='../../../static/image/superSignature/Footboys.mp4'
    },
    methods: {
      play(){
        $(".mask").show()
      },
      mask(){
        $(".mask").hide()
      },
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
      },
      /*顶部标题点击事件*/
      titleName(index) {
        if (index == 1) {
          alert("点击了超级签名")
        } else if (index == 2) {
          alert("点击了专属签名")
        } else if (index == 3) {
          alert("点击了企业签名")
        } else if (index == 4) {
          alert("点击了购买服务")
        } else if (index == 5) {
          alert("点击了发布应用")
        }
      },
      /*登录点击事件*/
      loginBtn() {
        this.$router.push({
          path: '/login'
        })
      },
      /*注册点击事件*/
      registerBtn() {
        this.$router.push({
          path: '/register'
        })
      },
      /*顶部标题移入效果*/
      enter(index) {
        for(var i=0;i<this.title.length;i++){
          this.title[i].isclass=false
        }
        this.title[index].isclass=true
      },
      /*顶部标题移出效果*/
      leave() {
        for(var i=0;i<this.title.length;i++){
          this.title[i].isclass=false
        }
        this.title[0].isclass=true
      },
      myappBtn(){
        this.$router.push({
          path: '/myApp'
        })
      },
      realName(){
        alert("0.0.")
        this.$router.push({
          path:'/realName'
        })
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



  .banner {
    width: 100%;
    height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
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
    width:70%;
    height: 350px;
    background-size: 100% 350px;
    background-repeat: no-repeat;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 61px auto;
  }
  .videoDiv img{
    width: 115px;
    height: 115px;
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
    margin-top: 30px;
    justify-content: center;
  }

  .advantageBig_div {
    width: 300px;
    height: 320px;
    background-size: 300px 320px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 20px 5px 0 5px;
    border-radius: 10px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-size: 16px;
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
    background-color: rgba(232,252,252,0.4);
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
  .login_title {
    width: 100%;
    height: 80px;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
  }

  .login_title .login_title_img {
    width: 99px;
    height: 39px;
    margin-left: 18.8vw;
  }

  .title {
    width: 500px;
    margin-left: 5vw;
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
    color: #06B2B6;
    border-bottom: 2px solid #06B2B6;
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
    background-color: #06B2B6;
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
.mask{
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
.mask video{
  width: 375px;
  height: 600px;
}
  .alreadyLogin {
    width: 300px;
    height: 30px;
    margin-top: -5px;
    margin-left: 20px;
    display: flex;
    align-items: center;

  }

  .myappBtn {
    width: 118px;
    height: 34px;
    background-color:#06B2B6 ;
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
    margin-left: 20px;
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
  .xiala{
    width: 150px;
    margin-left: 30px;
  }
  .rightnow{
    width: 180px;
    height: 50px;
    background-color: white;
    font-size: 18px;
    color: #06B2B6;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
    /* margin-left: 100px; */
    position: absolute;
    top: 70%;
    left: 18%;
  }
</style>
