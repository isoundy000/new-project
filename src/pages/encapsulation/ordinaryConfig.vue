<template>
  <div class="ordinaryConfig">
    <!--加载动画-->
      <Modal
        v-model="modal1"
        title="加载动画"
        :mask-closable="false"
        class="jiazaiDiv"
      >
        <div class="jiaziaDivMain">
          <div>
            <img src="../../../static/image/ordinary/zhuangtai1.png" alt="">
          </div>


          <div class="jiaziaDivMainLeft" @click="jiaziaDivMainLeft" :class="{ 'textColorBorder': jiazaiTextBorder1 }">
            <p class="jiazaiText" :class="{ 'textColor': jiazaiTextColor1 }">顶部进度条</p>
            <div class="mobileMotai">
              <div class="mobileMotaiImg">
                <img src="../../../static/image/ordinary/zhuangtai.png" alt="">
              </div>
              <p class="mumuyun">木木云</p>
              <p class="dynamicJiazai"></p>
              <p v-html="jiaziastyleInner"></p>

            </div>
          </div>
          <div class="jiaziaDivMainRight" @click="jiaziaDivMainRight" :class="{ 'textColorBorder': jiazaiTextBorder2 }">
            <p class="jiazaiText" :class="{ 'textColor': jiazaiTextColor2 }">加载等待框</p>
            <div class="mobileMotai">
              <div class="mobileMotaiImg">
                <img src="../../../static/image/ordinary/zhuangtai.png" alt="">
              </div>
              <p class="mumuyun1">木木云</p>
              <div class="loadingImg">
                <img  src="../../../static/image/ordinary/jiazai@2x.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="jiazaiSelectColor">
          <p>颜色样式</p>
          <el-color-picker
            v-model="jiazaicolor"
            show-alpha
            @active-change="jiazaiSelectColor"
            @change="jiazaiSelectColorRinow"
            :predefine="predefineColors">
          </el-color-picker>
        </div>
        <div  class="queOk" @click="jiazaiOk" slot="footer" >保存修改</div>
      </Modal>
    <!--加载动画-->
      <Modal
      v-model="modal2"
      title="下拉刷新"
      :mask-closable="false"
      class="xialaDiv"
    >
      <div class="xialaDivMain">
          <div class="xialaOpen" @click="xialaOpen" :class="{ 'selectColor': xiaSelect1 }" >开启</div>
          <div class="xialaClose" :class="{ 'selectColor': xiaSelect2 }" @click="xialaClose">关闭</div>
      </div>

      <div  class="queOk" @click="xialaOk" slot="footer" >保存修改</div>
    </Modal>
    <!--清理缓存-->
      <Modal
      v-model="modal3"
      title="清理缓存"
      :mask-closable="false"
      class="qingliDiv"
    >
      <div class="xialaDivMain">
        <div class="xialaOpen" @click="qingliOpen" :class="{ 'selectColor': qingSelect1 }" >开启</div>
        <div class="xialaClose" :class="{ 'selectColor': qingSelect2 }" @click="qingliClose">关闭</div>
      </div>
        <p  style="color: #FF0000;font-size: 12px;margin-top: 10px">每次开启APP，后台自动清理缓存</p>

      <div class="queOk" @click="qingliOk" slot="footer" >保存修改</div>
    </Modal>
    <!--退出提示-->
      <Modal
      v-model="modal4"
      title="退出提示"
      :mask-closable="false"
      class="tuichuDiv"
    >
      <div class="tuichuDivMain">
        <div class="tuichuDivMainSmall">
          <img  v-if="tuichuShowOne" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img  v-else @click="tuichuDan1()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>单击退出</p>
        </div>
        <div class="tuichuDivMainSmall">
          <img  v-if="tuichuShowTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img  v-else @click="tuichuDan2()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>双击退出</p>
        </div>
        <div class="tuichuDivMainSmall">
          <img  v-if="tuichuShowThree" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img  v-else @click="tuichuDan3()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>确认弹窗退出</p>
        </div>
      </div>
      <p  style="color: #FF0000;font-size: 12px;margin-top: 10px">该配置只针对安卓手机有效，苹果手机点击Home健直接退出</p>

      <div class="queOk" @click="tuichuOk" slot="footer" >保存修改</div>
    </Modal>
    <!--浏览器内核-->
      <Modal
      v-model="modal5"
      title="浏览器内核"
      :mask-closable="false"
      class="browserDiv"
    >
        <div style="display: flex;">
          <div class="browserDivMain">
            <p>针对安卓</p>
            <div class="browserDivMainSmall">
              <img  v-if="browserShowOne" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img  v-else @click="browserDan1()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>腾讯X5内核</p>
            </div>
            <div class="browserDivMainSmall">
              <img  v-if="browserShowTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img  v-else @click="browserDan2()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>Android WebView</p>
            </div>

          </div>
          <div class="browserDivMain" style="margin-left: 150px">
            <p>针对iOS</p>
            <div class="browserDivMainSmall">
              <img  v-if="browserShowThree" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img  v-else @click="browserDan3()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>iOS原生浏览器</p>
            </div>
            <div class="browserDivMainSmall">
              <img  v-if="browserShowFour" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img  v-else @click="browserDan4()"  src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>Safari</p>
            </div>

          </div>
        </div>


      <div class="queOk" @click="browserOk" slot="footer" >保存修改</div>
    </Modal>



    <div class="ordinaryConfigDiv">
      <p style="padding-left: 50px; margin: 0 auto;width: 87%;font-size: 14px;font-weight: bold">基础配件</p>
      <div class="ordinaryConfigDivMain">
        <div @click="jiazanClick" class="ordinaryConfigDivMainSmall" :class="{ 'configColor': config1 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigJiazai" src="../../../static/image/ordinary/jiazai_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/jiazai_s.png" alt="">
            <p>加载效果</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="jiazaiswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="jiazaiswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="xialaClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config2 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigXiala" src="../../../static/image/ordinary/xiala_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/xiala_s.png" alt="">
            <p>下拉刷新</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="xialaswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="xialaswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="qingliClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config3 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigQingli" src="../../../static/image/ordinary/qingli_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/qingli_s.png" alt="">
            <p>清理缓存</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="qingliswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="qingliswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="tuichuClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config4 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigTuichu" src="../../../static/image/ordinary/tuichu_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/tuichu_s.png" alt="">
            <p>退出提示</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="tuichuswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="tuichuswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="browserClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config5 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigBrowser" src="../../../static/image/ordinary/liulanqi_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/liulanqi_s.png" alt="">
            <p>浏览器内核</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="browserswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="browserswichChange">
            </el-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="ordinaryConfigDiv">
      <p style=" padding-left: 50px;margin: 0 auto;width: 87%;font-size: 14px;font-weight: bold">拓展配件</p>
      <div class="ordinaryConfigDivMain">
        <div class="ordinaryConfigDivMainSmall" :class="{ 'configColor': config6 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigShare" src="../../../static/image/ordinary/fenxiang_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/fenxiang_s.png" alt="">
            <p>分享</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="shareswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="shareswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config7}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigDeposit" src="../../../static/image/ordinary/zuntu_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/zuntu_s.png" alt="">
            <p>长按存图</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="depositswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="depositswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config8}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigZoom" src="../../../static/image/ordinary/suofang_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/suofang_s.png" alt="">
            <p>网页缩放</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="zoomswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="zoomswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config9}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigCustom" src="../../../static/image/ordinary/daohang_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/daohang_s.png" alt="">
            <p>自定义导航栏</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="customswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="customswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config10}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigFooter" src="../../../static/image/ordinary/dilan_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/dilan_s.png" alt="">
            <p>自定义底栏</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="footerswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="footerswichChange">
            </el-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="ordinaryConfigDivMain2"  >
      <div style="width:100%;margin-bottom: 50px;display: flex;margin-top: 90px;justify-content: space-evenly">
        <p style="width: 190px"  class="gonextStep" @click="previousStep" >上一步</p>
        <p style="width: 190px" v-show="isNext" class="huinextStep" >下一步</p>
        <p style="width: 190px" v-show="isNext1"  class="lvnextStep"  @click="nextStep">下一步</p>
        <p style="width: 190px" ></p>
        <p style="width: 190px" ></p>
        <p style="width: 190px" ></p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ordinaryConfig",
    data() {
      return {
        jiazaiswitch:false,//加载效果开关布尔值
        ordinaryConfigJiazai:true,//灰色加载效果开关
        config1:false,//加载效果border颜色布尔值
        modal1:false,//加载效果模态框
        jiazaiTextColor1:true,//加载效果模态框文字颜色
        jiazaiTextColor2:false,//加载效果模态框文字颜色
        jiazaiTextBorder1:true,//加载效果模态框border颜色
        jiazaiTextBorder2:false,//加载效果模态框border颜色
        jiaziastyleInner:'',
        jiazaicolor: 'rgba(2,178,181,1)',
        jiazaiValue:1,
        xialaswitch:false,//下拉刷新开关布尔值
        ordinaryConfigXiala:true,//灰色下拉刷新开关
        config2:false,//下拉刷新border颜色布尔值
        modal2:false,//下拉刷新模态框
        xiaSelect1:true,
        xiaSelect2:false,
        xialaValue:1,//下拉刷新值(传给后台的值，默认为1)
        qingliswitch:false,//清理缓存开关布尔值
        ordinaryConfigQingli:true,//灰色清理缓存开关
        config3:false,//清理缓存border颜色布尔值
        modal3:false,//清理缓存模态框
        qingSelect1:true,
        qingSelect2:false,
        qingliValue:1,//清理缓存值(传给后台的值，默认为1)
        redText:true,
        tuichuswitch:false,//退出提示开关布尔值
        ordinaryConfigTuichu:true,//灰色退出提示开关
        config4:false,//退出提示border颜色布尔值
        modal4:false,//退出提示模态框
        tuichuValue:1,//退出提示值(传给后台的值，默认为1)
        tuichuShowOne:true,//退出第一个单选框
        tuichuShowTwo:false,//退出第一个单选框
        tuichuShowThree:false,//退出第一个单选框
        browserswitch:false,//浏览器内核开关布尔值
        ordinaryConfigBrowser:true,//灰色浏览器内核开关
        config5:false,//浏览器内核border颜色布尔值
        modal5:false,//浏览器内核模态框
        browserShowOne:true,
        browserShowTwo:false,
        browserShowThree:true,
        browserShowFour:false,
        browser_android:1,//浏览器内核示安卓值(传给后台的值，默认为1)
        browser_ios:1,//浏览器内核示IOS值(传给后台的值，默认为1)
        shareswitch:false,//分享开关布尔值
        ordinaryConfigShare:true,//灰色分享开关
        config6:false,//分享border颜色布尔值
        depositswitch:false,//长按存图开关布尔值
        ordinaryConfigDeposit:true,//灰色长按存图开关
        config7:false,//长按存图border颜色布尔值
        zoomswitch:false,//网页缩放开关布尔值
        ordinaryConfigZoom:true,//灰色网页缩放开关
        config8:false,//网页缩放border颜色布尔值
        customswitch:false,//自定义导航栏开关布尔值
        ordinaryConfigCustom:true,//灰色自定义导航栏开关
        config9:false,//自定义导航栏border颜色布尔值
        footerswitch:false,//自定义底栏开关布尔值
        ordinaryConfigFooter:true,//灰色自定义底栏开关
        config10:false,//自定义底栏border颜色布尔值
        isNext:true,
        isNext1:false,

        predefineColors: [
          '#000000',
          '#434343',
          '#666666',
          '#999999',
          '#b7b7b7',
          '#cccccc',
          '#d9d9d9',
          '#efefef',
          '#f3f3f3',
          '#ffffff',
          '#980000',
          '#ff0000',
          '#ff9900',
          '#ffff00',
          '#00ff00',
          '#00ffff',
          '#4a86e8',
          '#0000ff',
          '#9900ff',
          '#ff00ff',
          '#e6b8af',
          '#f4cccc',
          '#fce5cd',
          '#fff2cc',
          '#d9ead3',
          '#d0e0e3',
          '#c9daf8',
          '#cfe2f3',
          '#d9d2e9',
          '#ead1dc',
          '#dd7e6b',
          '#ea9999',
          '#f9cb9c',
          '#ffe599',
          '#b6d7a8',
          '#a2c4c9',
          '#a4c2f4',
          '#9fc5e8',
          '#b4a7d6',
          '#d5a6bd',
          '#cc4125',
          '#e06666',
          '#f6b26b',
          '#ffd966',
          '#93c47d',
          '#76a5af',
          '#6d9eeb',
          '#6fa8dc',
          '#8e7cc3',
          '#c27ba0',
          '#a61c00',
          '#cc0000',
          '#e69138',
          '#f1c232',
          '#6aa84f',
          '#45818e',
          '#3c78d8',
          '#3d85c6',
          '#674ea7',
          '#a64d79',
          '#85200c',
          '#990000',
          '#b45f06',
          '#bf9000',















          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',

        ]
      }
    },
    methods: {
      /*加载效果开关*/
      jiazaiswichChange(){
        if(this.jiazaiswitch==true){
          this.ordinaryConfigJiazai=false
          this.config1=true
        }else{
          this.ordinaryConfigJiazai=true
          this.config1=false
        }
          this.verification()
      },
      /*加载效果整体点击*/
      jiazanClick(){
        this.modal1=true
      },
      /*加载效果模态框里面的确认*/
      jiazaiOk(){
        this.modal1=false
        this.jiazaiswitch=true
        this.ordinaryConfigJiazai=false
        this.config1=true
        this.verification()
      },
      /*加载效果模态框里面的左边*/
      jiaziaDivMainLeft(){
        this.jiazaiTextColor1=true
        this.jiazaiTextBorder1=true
        this.jiazaiTextColor2=false
        this.jiazaiTextBorder2=false
        this.jiazaiValue=1
      },
      /*加载效果模态框里面的右边*/
      jiaziaDivMainRight(){
        this.jiazaiTextColor1=false
        this.jiazaiTextBorder1=false
        this.jiazaiTextColor2=true
        this.jiazaiTextBorder2=true
        this.jiazaiValue=2
      },
      jiazaiSelectColor(ss){
        console.log(ss)
        this.jiaziastyleInner = `<style>.dynamicJiazai{ background-color: ${ss};}</style>`
      },
      jiazaiSelectColorRinow(aa){
        console.log(aa)
      },
      /*下拉刷新开关*/
      xialaswichChange(){
        if(this.xialaswitch==true){
          this.ordinaryConfigXiala=false
          this.config2=true
        }else{
          this.ordinaryConfigXiala=true
          this.config2=false
        }
        this.verification()
      },
      /*下拉刷新整体点击*/
      xialaClick(){
          this.modal2=true
      },
      /*下拉刷新模态框里面的开启*/
      xialaOpen(){
          this.xiaSelect1=true
          this.xiaSelect2=false
          this.xialaValue=1
      },
      /*下拉刷新模态框里面的关闭*/
      xialaClose(){
        this.xiaSelect1=false
        this.xiaSelect2=true
        this.xialaValue=2
      },
      /*下拉刷新模态框里面的确认*/
      xialaOk(){
        this.modal2=false
        this.xialaswitch=true
        this.ordinaryConfigXiala=false
        this.config2=true
        this.verification()
      },
      /*清理缓存开关*/
      qingliswichChange(){
        if(this.qingliswitch==true){
          this.ordinaryConfigQingli=false
          this.config3=true
        }else{
          this.ordinaryConfigQingli=true
          this.config3=false
        }
        this.verification()
      },
      qingliClick(){
        this.modal3=true
      },
      /*下拉刷新模态框里面的开启*/
      qingliOpen(){
        this.qingSelect1=true
        this.qingSelect2=false
        this.qingliValue=1
        this.redText=true
      },
      /*下拉刷新模态框里面的关闭*/
      qingliClose(){
        this.qingSelect1=false
        this.qingSelect2=true
        this.qingliValue=2
        this.redText=false
      },
      /*下拉刷新模态框里面的确认*/
      qingliOk(){
        this.modal3=false
        this.qingliswitch=true
        this.ordinaryConfigQingli=false
        this.config3=true
        this.verification()
      },
      /*退出提示开关*/
      tuichuswichChange(){
        if(this.tuichuswitch==true){
          this.ordinaryConfigTuichu=false
          this.config4=true
        }else{
          this.ordinaryConfigTuichu=true
          this.config4=false
        }
        this.verification()
      },
      tuichuClick(){
        this.modal4=true
      },
      tuichuDan1(){
        this.tuichuShowOne=true
        this.tuichuShowTwo=false
        this.tuichuShowThree=false
        this.tuichuValue=1
      },
      tuichuDan2(){
        this.tuichuShowOne=false
        this.tuichuShowTwo=true
        this.tuichuShowThree=false
        this.tuichuValue=2
      },
      tuichuDan3(){
        this.tuichuShowOne=false
        this.tuichuShowTwo=false
        this.tuichuShowThree=true
        this.tuichuValue=3
      },
      tuichuOk(){
        this.modal4=false
        this.tuichuswitch=true
        this.ordinaryConfigTuichu=false
        this.config4=true
        this.verification()
      },
      /*浏览器内核开关*/
      browserswichChange(){
        if(this.browserswitch==true){
          this.ordinaryConfigBrowser=false
          this.config5=true
        }else{
          this.ordinaryConfigBrowser=true
          this.config5=false
        }
        this.verification()
      },
      browserDan1(){
        this.browserShowOne=true
        this.browserShowTwo=false
        this.browser_android=1
      },
      browserDan2(){
        this.browserShowOne=false
        this.browserShowTwo=true
        this.browser_android=2
      },
      browserDan3(){
        this.browserShowThree=true
        this.browserShowFour=false
        this.browser_ios=1
      },
      browserDan4(){
        this.browserShowThree=false
        this.browserShowFour=true
        this.browser_ios=2
      },
      browserOk(){
        this.modal5=false
        this.browserswitch=true
        this.ordinaryConfigBrowser=false
        this.config5=true
        this.verification()
      },
      browserClick(){
        this.modal5=true
      },
      /*分享开关*/
      shareswichChange(){
        if(this.shareswitch==true){
          this.ordinaryConfigShare=false
          this.config6=true
        }else{
          this.ordinaryConfigShare=true
          this.config6=false
        }
        this.verification()
      },
      /*长按存图开关*/
      depositswichChange(){
        if(this.depositswitch==true){
          this.ordinaryConfigDeposit=false
          this.config7=true
        }else{
          this.ordinaryConfigDeposit=true
          this.config7=false
        }
        this.verification()
      },
      /*网页缩放开关*/
      zoomswichChange(){
        if(this.zoomswitch==true){
          this.ordinaryConfigZoom=false
          this.config8=true
        }else{
          this.ordinaryConfigZoom=true
          this.config8=false
        }
        this.verification()
      },
      /*自定义导航栏开关*/
      customswichChange(){
        if(this.customswitch==true){
          this.ordinaryConfigCustom=false
          this.config9=true
        }else{
          this.ordinaryConfigCustom=true
          this.config9=false
        }
        this.verification()
      },
      /*自定义底栏栏开关*/
      footerswichChange(){
        if(this.footerswitch==true){
          this.ordinaryConfigFooter=false
          this.config10=true
        }else{
          this.ordinaryConfigFooter=true
          this.config10=false
        }
        this.verification()
      },
      /*表单验证*/
      verification(){
        if(this.jiazaiswitch==true || this.xialaswitch==true || this.qingliswitch==true || this.tuichuswitch==true || this.browserswitch==true || this.shareswitch==true || this.depositswitch==true || this.zoomswitch==true || this.customswitch==true || this.footerswitch==true){
          this.isNext=false
          this.isNext1=true
        }else{
          this.isNext=true
          this.isNext1=false
        }
      },
























      nextStep() {
        this.$router.push({
          name: 'ordinaryChoose',
          params: {
            active: 3
          }
        })
      },
      previousStep() {
        this.$router.push({
          name: 'ordinaryIcon',
          params: {
            active: 1
          }
        })
      }
    },
    mounted() {
        this.jiaziastyleInner = `<style>.dynamicJiazai{ background-color: ${this.jiazaicolor};}</style>`

      //alert('接受值00：'+this.$route.params.aa)
    }
  }
</script>
<style>
  .jiazaiDiv .ivu-modal-content{
    width: 800px;
    height: 475px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  .jiazaiDiv .ivu-modal{
    width: 800px !important;
  }
  .jiazaiSelectColor .el-color-picker__trigger{
    width: 246px !important;
  }
  .jiazaiSelectColor .el-color-picker{
    margin-top: 20px;
  }
  .qingliDiv .ivu-modal-content{
    width: 700px;
    height: 225px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  .qingliDiv .ivu-modal{
    width: 700px !important;
  }
  .xialaDiv .ivu-modal-content{
    width: 700px;
    height: 195px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  .xialaDiv .ivu-modal{
    width: 700px !important;
  }
  .tuichuDiv .ivu-modal-content{
    width: 700px;
    height: 275px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  .tuichuDiv .ivu-modal{
    width: 700px !important;
  }
  .browserDiv .ivu-modal-content{
    width: 700px;
    height: 241px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  .browserDiv .ivu-modal{
    width: 700px !important;
  }
</style>
<style scoped>
  .ordinaryConfig{
    margin-top: 30px;
  }
.ordinaryConfigDiv{
  width: 100%;
}
  .ordinaryConfigDivMain{
    width: 87%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .ordinaryConfigDivMain2{
    width: 87%;
    margin: 20px  auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .ordinaryConfigDivMainSmall{
    width: 190px;
    height: 94px;
    margin-top: 19px;
    border-radius:4px;
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    position: relative;
    z-index: 1;
  }
  .ordinaryConfigRight{
    margin-left: 19px;
  }
  .ordinaryConfigDivMainSmallLeft{
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .ordinaryConfigDivMainSmallLeft img{
    width: 26px;
    height: 26px;
  }
  .ordinaryConfigDivMainSmallLeft p{
    margin-top: 5px;
    font-size: 14px;
  }
  .ordinaryConfigDivMainSmallRight{
    height: 65%;
    display: flex;
    align-items: center;
    border-left: 1px solid #e1e1e1;
    position: relative;
    z-index: 999999;
  }
  .configColor{
    border: 1px solid #02B2B5;
  }
  .gonextStep{
    width:167px;
    height:50px;
    background:rgba(232,232,232,1);
    border-radius:2px;
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 30px;
  }
  .huinextStep{
    width:167px;
    height:50px;
    background:rgba(232,232,232,1);
    border-radius:2px;
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 30px;

  }
  .lvnextStep{
    width:167px;
    height:50px;
    border-radius:2px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    background:rgba(2,178,181,1);
    color: white;

  }
  .queOk{
    width: 90px;
    background-color: #06B2B6;
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: white;
    font-size: 15px;
    border-radius: 3px;
    position: absolute;
    right: 5%;
    cursor: pointer;
  }
.jiaziaDivMain{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto 0 auto;
}
  .jiaziaDivMainLeft{
    width: 244px;
    height: 192px;
    border-radius:6px;
    position: relative;

    border: 1px solid #E5E5E5;
  }
  .jiaziaDivMainRight{
    width: 244px;
    height: 192px;
    border-radius:6px;
    position: relative;
    border: 1px solid #E5E5E5;
  }
  .mobileMotai{
    width: 220px;
    height: 141px;
    border: 1px solid #E5E5E5;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -110px;
    margin-top: -70.5px;

    border-radius:6px 6px 0px 0px;
  }

  .jiazaiText{
    width: 220px;
    font-size: 14px;
    color: #999999;
    margin: 10px auto 0 auto;
  }
  .textColor{
    width: 220px;
    margin: 10px auto 0 auto;
    font-size: 14px;
    color: #02B2B5;
  }
  .textColorBorder{
    border: 1px solid #02B2B5;
  }
  .mobileMotaiImg{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .mobileMotai img{
    width: 203px;
    height: 11px;
    margin-top: 5px;
  }
  .mumuyun{
    height:30px;
    line-height: 30px;
    font-size: 14px;
    color: #02B2B5;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;
  }
  .mumuyun1{
    height:30px;
    line-height: 30px;
    font-size: 14px;
    color: #02B2B5;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;
  }
  .dynamicJiazai{
    width: 180px;
    height: 2px;

  }
  .loadingImg{
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .loadingImg img{
    width: 23px;
    height: 25px;
  }
.jiazaiSelectColor{
  width: 80%;
  margin: 30px auto 0 auto;

}
  .jiazaiSelectColor p{
    font-size: 14px;
  }
  .xialaDivMain{
    display: flex;
  }
  .xialaOpen{
    width:168px ;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    background-repeat: no-repeat;
    background-size: 168px 46px;
    border-radius:6px;
    color:#999999 ;
    border: 1px solid #E5E5E5;
  }
  .xialaClose{
    width:168px ;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    background-repeat: no-repeat;
    background-size: 168px 46px;
    border-radius:6px;
    color:#999999 ;
    margin-left: 50px;
    border: 1px solid #E5E5E5;
  }
  .selectColor{
    width:168px ;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    background-image: url("../../../static/image/ordinary/kaiqi.png");
    background-repeat: no-repeat;
    background-size: 168px 46px;
    border-radius:6px;
    color:#02B2B5 ;
    border: 0;
  }
  .tuichuDivMainSmall{
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .tuichuDivMainSmall p{
    font-size: 14px;
    margin-left: 15px;
  }
  .browserDivMainSmall{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .browserDivMain{
    font-size: 14px;
  }
  .browserDivMainSmall p{
    margin-left: 15px;
  }
</style>
