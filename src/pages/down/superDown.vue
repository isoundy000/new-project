<template>
<div>
  <!--下载码-->
  <div class="mask" v-if="xiazaima">
    <div class="frame">
      <div class="small">
        <p>提示</p>
        <p>请输入此应用的下载码</p>
        <input type="text" />
      </div>
      <div class="xzfooter">
        <div class="ok" @click="xzOk">确定</div>
        <div class="cancel" @click="xzCancel">取消</div>
      </div>
    </div>
  </div>
  <div class="second">
    <img class="img" src="../../../static/image/down/superDown/lologo.png" alt="" />
    <div class="text">
      <p>38棋牌</p>
      <!--<p>个性桌面，值得拥有！</p>-->
      <button class="btn" @click="btn">获取</button>
      <div id="myProgress" style="display: none;">
        <div id="myBar">0%</div>
      </div>
      <div  id="jindu-div" class="download-line download-btn" style="display: none;">
        <div class="download-now download-btn" id='jindu' style="width: 0;">
        </div>
        <span class="download-txt">下载中<span class="timeNum">0</span></span>
      </div>
    </div>
  </div>
  <div class="third">
    <div class="thirdOne">
      <div class="thirdOneDiv">
        <span class="starNum">5</span>
        <div class="starImg">
          <img style="display: none;" class="starImgOne" src="../../../static/image/down/superDown/timg.jpg" alt="" />
          <img style="display: none;" class="starImgTwo" src="../../../static/image/down/superDown/timg.jpg" alt="" />
          <img style="display: none;" class="starImgThree" src="../../../static/image/down/superDown/timg.jpg" alt="" />
          <img style="display: none;" class="starImgFour" src="../../../static/image/down/superDown/timg.jpg" alt="" />
          <img style="display: none;" class="starImgFive" src="../../../static/image/down/superDown/timg.jpg" alt="" />
        </div>
      </div>
      <div class="score">
        <p>1.88万个评分</p>
      </div>

    </div>
    <div class="thirdTwo">
      <p>#59</p>
      <p>工具</p>
    </div>
    <div class="thirdThree">
      <p>4+</p>
      <p>年龄</p>
    </div>
  </div>
  <div class="fourth">
    <div class="fourthOne">
      <img src="../../../static/image/down/superDown/tag1.png" alt="" />
      <img src="../../../static/image/down/superDown/tag2.png" alt="" />

    </div>
    <div class="fourFooter">
      <div class="iphone">
        <img src="../../../static/image/down/superDown/iphoen.png" alt="" />
        <p>iPhone</p>
      </div>
    </div>

  </div>
  <div class="Fifth">
    <div class="FifthOne">
      <div class="FifthOneText">
        <p>[38棋牌]是一款为喜欢棋牌游戏的玩家精心打造的在线棋牌室，提供丰富超人气棋牌游戏玩法，每一款游戏都能为玩家带来十足的游戏体验。</p>
      </div>
      <div class="FifthOneName">
        <p>Apple Developer</p>
        <p>开发者</p>
      </div>
    </div>
  </div>
  <div class="Sixth">
    <div class="SixthOne">
      <div class="SixthODiv">
        <p>新功能</p>
        <p>版本历史记录</p>
      </div>
      <div class="SixthtDiv">
        <p>版本 1.1</p>
        <!--<p>3 个月前</p>-->
      </div>
      <div class="SixthcDiv">
        <!--<p>修复bug</p>
                  <p>查找URL Scheme的方法说明写的更加详细</p>
                  <p>查找URL Scheme的方法说明写的更加详细</p>-->
      </div>
    </div>
  </div>
  <div class="Seventh">
    <div class="SeventhOne">
      <p>信息</p>
    </div>
    <div class="SeventhTwo">
      <p>开发商</p>
      <p>Apple Developer</p>
    </div>
    <div class="SeventhThree">
      <p>大小</p>
      <p>33.97 MB</p>
    </div>
    <div class="SeventhFour">
      <p>类别</p>
      <p>工具</p>
    </div>
    <div class="SeventhFive">
      <p>兼容性</p>
      <p>可在此 iPhone 上使用</p>
    </div>
    <div class="SeventhSix">
      <p>语言</p>
      <p>简体中文和英文</p>
    </div>
    <div class="SeventhSeven">
      <p>年龄分级</p>
      <p>4+</p>
    </div>
    <div class="SeventhEight">
      <p>版权</p>
      <p>38棋牌</p>
    </div>
  </div>
  <div class="footer">
    <div>
      <p>免责声明：本网站仅为开发者提供App的下载和安装托管，Appn内的内容和运 营相关事项由App开发者复杂，与本网站无关。</p>
    </div>
  </div>
</div>
</template>

<script>
  require('../../../static/js/flexible.debug')
  require('../../../static/js/flexible_css.debug')
    export default {
        name: 'superDown',
      data(){
          return{
            xiazaima:false, //下载码弹窗布尔值
          }
      },
      methods:{
        xzOk(){
          this.xiazaima=false
        },
        xzCancel(){
          this.xiazaima=false
        },
        btn(){
          /*准备中的倒计时*/
          var timer_num = 120;
          var time_num_s = timer_num;
          var stop_num = time_num_s;
          var cacheTimeClock = setInterval(function () {
            time_num_s--;
            $('.btn').html('准备中 ' + time_num_s);
            $('.btn').css({
              "width": "3rem"
            });
            if (time_num_s <= (stop_num - 8)) {
              clearInterval(cacheTimeClock);
              $(".btn").hide();
              $("#jindu-div").show();
              var interval = setInterval(increment, 84);
              var current = 0;

              function increment() {
                current++;
                $("#jindu").css({"width":'100%',"transition": 'all ease 10s'})
                var aa=parseInt(100)
                $('.timeNum').html(current);
                if(current == 100) {
                  window.clearInterval(interval);
                  $(".btn").show();
                  $("#jindu-div").hide();
                  $('.btn').html('安装中 ' + 10);
                  $('.btn').css({
                    "width": "3rem"
                  });
                  var elem = document.getElementById("myBar");
                  var width = 10;
                  var id = setInterval(frame, 10);
                  function frame() {
                    if (width >= 100) {
                      clearInterval(id);
                      /*安装中倒计时*/
                      $(".btn").show();
                      $('.btn').html('安装中 ');
                      $("#myProgress").hide();
                      var timeClock1;
                      var timer_num1 = 10;
                      timeClock1 = setInterval(function () {
                        timer_num1--;
                        $('.btn').html('安装中 ' + timer_num1);
                        if (timer_num1 == 0) {
                          $('.btn').html('在桌面打开');
                          clearInterval(timeClock1);
                        }
                      }, 1000)

                    } else {
                      width++;
                      elem.style.width = width + '%';
                      elem.innerHTML = width * 1 + '%';
                    }
                  }
                }
              }
            }
          }, 1000)
        },

      },
      mounted(){
        this.btn()
      }
    }
</script>

<style scoped>
  @import "../../../static/css/Flexible.css";
  * {
    margin: 0;
    padding: 0;
  }

  .first {
    display: flex;
    margin-top: 0.853333rem;
    align-items: center;
  }

  .goback {
    width: 0.28rem;
    height: 0.52rem;
    margin-left: 0.4rem;
  }

  .search {
    margin-left: 0.226666rem;
    font-size: 0.48rem;
    color: #06B2B6;
  }

  .second {
    margin-top: 0.386666rem;
    display: flex;
  }

  .img {
    width: 2.853333rem;
    height: 2.853333rem;
    border-radius: 0.56rem;
    margin-left: 0.453333rem;
  }

  .second p:nth-child(1) {
    width: 5.5rem;
    font-size: 0.52rem;
    color: black;
  }

  .second p:nth-child(2) {
    font-size: 0.373333rem;
    color: #ADADAD;
    margin-top: 0.16rem;
  }

  .text {
    margin-left: 0.413333rem;
  }

  .text button {
    width: 1.773333rem;
    height: 0.706666rem;
    background-color: #06B2B6;
    font-size: 0.373333rem;
    border: none;
    color: white;
    border-radius: 30px;
    margin-top: 0.346666rem;
  }

  .third {
    display: flex;
    margin-top: 0.56rem;
  }

  .starImg {
    margin-left: 0.266666rem;
  }

  .starImg img {
    width: 0.44rem;
    height: 0.426666rem;
  }

  .thirdOne {
    display: flex;
    flex-flow: column;
    margin-left: 0.453333rem;
  }

  .thirdOneDiv {
    display: flex;
    align-items: center;
  }

  .starNum {
    font-size: 0.56rem;
    color: #8E8F93;
  }

  .score {
    font-size: 0.28rem;
    color: #C0C0C2;
  }

  .thirdTwo {
    display: flex;
    flex-flow: column;
    margin-left: 2.24rem;
  }

  .thirdTwo p:nth-child(1) {
    font-size: 0.56rem;
    color: #8E8F93;
  }

  .thirdTwo p:nth-child(2) {
    font-size: 0.28rem;
    color: #C0C0C2;
  }

  .thirdThree {
    display: flex;
    flex-flow: column;
    margin-left: 2.133333rem;
  }

  .thirdThree p:nth-child(1) {
    font-size: 0.56rem;
    color: #8E8F93;
  }

  .thirdThree p:nth-child(2) {
    font-size: 0.28rem;
    color: #C0C0C2;
  }

  .fourth {
    width: 100%;
    margin-top: 0.36rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .fourthOne {
    width: 100%;
    /*height: 12.866666rem;*/
    overflow-x: scroll;
    display: inline-block;
    white-space: nowrap;
  }

  /*.fourthOne img:nth-child(1) {
      margin-left: 0.48rem;
  }*/

  .fourthOne img {
    width: 90%;
    margin: 0 5%;
    border-radius: 0.56rem;
  }

  .fourthOne img:nth-child(1) {
    margin-left: 0.48rem;
  }

  .iphone {
    width: 90%;
    height: 60px;
    border-bottom: 1px solid #EBEBED;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: #87878A;
  }

  .iphone img {
    width: 0.293333rem;
    height: 0.466666rem;
  }

  .fourFooter {
    width: 100%;
  }

  .fourFooter p {
    font-size: 0.38rem;
    margin-left: 0.293333rem;
  }

  .Fifth {
    width: 100%;
    display: flex;
    margin-top: 0.386666rem;
    justify-content: center;
  }

  .FifthOne {
    width: 90%;
    border-bottom: 1px solid #EBEBED;
  }

  .FifthOneText {
    font-size: 0.373333rem;
  }

  .FifthOneText p:nth-child(2) {
    margin-top: 0.2rem;
  }

  .FifthOneText p:nth-child(3) {
    margin-top: 0.2rem;
  }

  .FifthOneName {
    margin-top: 0.786666rem;
  }

  .FifthOneName p:nth-child(1) {
    color: #06B2B6;
    font-size: 0.373333rem;
  }

  .FifthOneName p:nth-child(2) {
    color: #939497;
    font-size: 0.32rem;
    margin-bottom: 0.986666rem;
  }

  .Sixth {
    width: 100%;
    display: flex;
    margin-top: 0.386666rem;
    justify-content: center;
  }

  .SixthOne {
    width: 90%;
    border-bottom: 1px solid #EBEBED;
  }

  .SixthOne div:nth-child(1) {
    display: flex;
    align-items: center;
  }

  .SixthOne div:nth-child(2) {
    display: flex;
  }

  .SixthODiv p:nth-child(1) {
    font-size: 0.533333rem;
  }

  .SixthODiv p:nth-child(2) {
    margin-left: 4.9rem;
    font-size: 0.4rem;
    color: #06B2B6;
  }

  .SixthtDiv {
    margin-top: 0.4rem;
    color: #939397;
    font-size: 0.346666rem;
  }

  .SixthtDiv p:nth-child(2) {
    margin-left: 6.3rem;
  }

  .SixthcDiv {
    margin-top: 0.386666rem;
    font-size: 0.346666rem;
  }

  .SixthcDiv p:nth-child(2) {
    margin-top: 0.213333rem;
  }

  .SixthcDiv p:nth-child(3) {
    margin-top: 0.213333rem;
    margin-bottom: 0.88rem;
  }

  .Seventh {
    width: 100%;
    /*display: flex;*/
    margin-top: 0.386666rem;
    justify-content: center;
  }

  .SeventhOne,
  .SeventhTwo,
  .SeventhThree,
  .SeventhFour,
  .SeventhFive,
  .SeventhSix,
  .SeventhSeven,
  .SeventhEight {
    width: 90%;
    height: 1.12rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    font-size: 0.346666rem;
    border-bottom: 1px solid #EBEBED;
  }

  .SeventhTwo p:nth-child(1),
  .SeventhThree p:nth-child(1),
  .SeventhFour p:nth-child(1),
  .SeventhFive p:nth-child(1),
  .SeventhSix p:nth-child(1),
  .SeventhSeven p:nth-child(1),
  .SeventhEight p:nth-child(1) {
    color: #939397;
  }

  .footer {
    width: 100%;
    display: flex;
    margin-top: 0.693333rem;
    justify-content: center;
    color: #666666;
    font-size: 0.266666rem;
  }

  .footer div {
    width: 90%;
  }

  #myProgress {
    width: 100%;
    height: 50px;
    border-radius: 20px;
    background-color: #ddd;
  }

  #myBar {
    width: 10%;
    height: 50px;
    background-color: #06B2B6;
    text-align: center;
    line-height: 50px;
    border-radius: 20px;
    color: white;
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

  .frame {
    width: 8rem;
    height: 5rem;
    background-color: white;
    border-radius: 0.5rem;
    position: relative;
  }

  .small {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
  }

  .small p:nth-child(1) {
    font-size: 0.45rem;
    font-weight: bold;
    margin-top: 0.6rem;
    font-family: "微软雅黑";
  }

  .small p:nth-child(2) {
    font-size: 0.4rem;
    margin-top: 0.2rem;
    font-family: "微软雅黑";
  }

  .small input {
    width: 7rem;
    height: 1rem;
    font-size: 0.4rem;
    margin-top: 0.6rem;
    border: 1px solid #b3b3b3;
  }

  .xzfooter {
    width: 100%;
    height: 1rem;
    border-top: 1px solid #cccccc;
    display: flex;
    font-size: 0.45rem;
    position: absolute;
    bottom: 0;
    align-items: center;
    color: #3478f6;
    justify-content: space-evenly;
  }
  .xzfooter div:nth-child(1){
    width: 50%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    border-right: 0.5px solid #cccccc;
  }
  .xzfooter div:nth-child(2){
    width: 50%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    border-left: 0.5px solid #cccccc;
  }
</style>
