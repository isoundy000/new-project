<template>
  <div class="login">
    <div class="login_title">
      <img src="../../../static/image/index/mumuunlogo.png" alt="">
      <div class="title">
        <p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"
           @mouseenter="enter(index)"
           @mouseleave="leave(index)">{{list.msg}}</p>
        <!--<p :class="{'isColor':isSup}">超级签名</p>-->
        <!--<p :class="{'isColor':isOnl}">专属签名</p>-->
        <!--<p :class="{'isColor':isCom}">企业签名</p>-->
        <!--<p :class="{'isColor':isBuy}">购买服务</p>-->
        <!--<p :class="{'isColor':isGit}">发布应用</p>-->
      </div>
      <div class="login_title_div">
        <p>登录</p>
        <p>注册</p>
      </div>
    </div>

    <div class="banner">
      <img src="../../../static/image/index/bannner.png" alt="">
    </div>
    <!--样例展示-->
    <div class="example">
      <img src="../../../static/image/index/yangliyanshibiaoti.png" alt="">
    </div>
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
        <img src="../../../static/image/index/womendeyoushi.png" alt="">
      </div>
      <div class="advantageBig">
        <div class="advantageBig_div">
          <img src="../../../static/image/index/fangbiankuaijie.png" alt="">
          <p>自动化签名 方便快捷</p>
        </div>
        <div class="advantageBig_div">
          <img src="../../../static/image/index/gaobiediaoqian.png" alt="">
          <p>特有机制 告别掉签</p>
        </div>
        <div class="advantageBig_div">
          <img src="../../../static/image/index/fangbiankuaijie.png" alt="">
          <p>无需越狱 安装即用</p>
        </div>
        <div class="advantageBig_div">
          <img src="../../../static/image/index/xingjiabigao.png" alt="">
          <p>按需购买 性价比高</p>
        </div>
      </div>
    </div>
    <!--超低价格-->
    <div class="lowprize">
      <div class="lowprizeImg">
        <img src="../../../static/image/index/chaodijiagebiaoqian.png" alt="">
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
            <img src="../../../static/image/index/jiagetu.png" alt="">
          </div>
        </div>
      </div>


    </div>
    <!--服务对比-->
    <div class="service">
      <div class="serviceImg">
        <img src="../../../static/image/index/fuwuduibibiaoti.png" alt="">
      </div>
      <div class="serviceDiv">
        <div class="serviceDivOne" @mouseenter="serviceDivOne()"
             style="background-image: url('../../../static/image/index/lansejianbianditu.png')">
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
        <img src="../../../static/image/index/caozuoliuchengjianbiaoti.png" alt="">
      </div>
      <div class="operationSmall">
        <div class="operationDL">
          <img src="../../../static/image/index/dengluzhuce.png" alt="">
          <p>登录/注册</p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/index/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationCZ">
          <img src="../../../static/image/index/chongzi.png" alt="">
          <p>充值</p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/index/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationSC">
          <img src="../../../static/image/index/shangchuanipa.png" alt="">
          <p>上传IPA安装包</p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/index/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationYY">
          <img src="../../../static/image/index/success_ico.png" alt="">
          <p>应用签名 </p>
        </div>
        <div class="sanjiao">
          <img src="../../../static/image/index/sanjiaoxing.png" alt="">
          <p></p>
        </div>
        <div class="operationEW">
          <img src="../../../static/image/index/shenglianjie.png" alt="">
          <p>生成下载链接/二维码</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        title: [{
          msg: '首页',
          isclass: true
        },
          {
            msg: '超级签名',
            isclass: false
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
        ]


      }
    },
    methods: {
      /*顶部标题点击事件*/
      titleName(index) {
        if (index == 0) {
          alert("点击了首页")
        } else if (index == 1) {
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
      /*顶部标题移入效果*/
      enter(index) {
        if (index != 0) {
          this.title[0].isclass = false
        }
        this.title[index].isclass = true
      },
      /*顶部标题移出效果*/
      leave(index) {
        if (index != 0) {
          this.title[0].isclass = true
        }
        this.title[index].isclass = false
      },
      /*服务对比第一个div移入效果*/
      serviceDivOne() {
        // $(".serviceDivOne").css({"background-image": 'url(../../../static/image/index/lansejianbianditu.png)'})
        // $(".serviceDivOneTitle").css({"color": 'white'})
        // $(".serviceDivTwoTitle").css({"color": 'black'})
        // $(".serviceDivOne .serviceSmall").css({"color": 'white'})
        // $(".serviceDivTwo .serviceSmall").css({"color": 'black'})
        // $(".serviceDivTwo").css({"background-image": 'url()'})
      },
      serviceDivTwo() {
        // $(".serviceDivTwo").css({
        //   "color": 'white',
        //   "background-image": 'url(../../../static/image/index/lansejianbianditu.png)'
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
  .login_title {
    width: 100%;
    height: 80px;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
  }

  .login_title img {
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

  .isColor {
    color: #06B2B6;
    border-bottom: 2px solid #06B2B6;
  }

  .title p {

    cursor: pointer;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    /*border-bottom: 2px solid white;*/
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
  }

  .advantage {
    width: 100%;
    height: 570px;
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
    width: 270px;
    height: 320px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    background-color: #EEEEEE;
  }

  .advantageBig_div img {
    width: 99px;
    height: 99px;
  }

  .advantageBig_div p {
    margin-top: 45px;
  }

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
    width: 241px;
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
    background-color: white;
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
    background-color: white;
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
  .operationSmall{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 60px auto 0 auto;
    color: #333333;
    font-size: 16px;
  }

  .operationDL{
    width: 180px;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .operationDL img{
    width: 56px;
    height: 50px;
  }

  .operationCZ{
    width: 180px;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .operationCZ img{
    width: 56px;
    height: 42px;
  }
  .operationSC{
    width: 180px;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .operationSC img{
    width: 56px;
    height: 42px;
  }
  .operationYY{
    width: 180px;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .operationYY img{
    width: 56px;
    height: 56px;
  }
  .operationEW{
    width: 210px;
    height: 60px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .operationEW img{
    width: 56px;
    height: 55px;
  }
  .operationSmall p{
    margin-top: 30px;
  }
  .sanjiao{
    width: 180px;
    height: 80px;
    text-align: center;
  }
  .sanjiao img{
    width: 18px;
    height: 24px;

  }
</style>
