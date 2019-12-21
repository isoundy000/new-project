<template>
  <div class="login">
    <div v-if="isTongGao">
      <van-notice-bar
        :text="bulletin"
        left-icon="volume-o"
        mode="closeable"
        color="white"
        background="red"
        height="200px"
      />
    </div>
    <Modal
      v-model="modalnew"
      title="站内通告"
      :mask-closable="false"
      class="motain"
    >
      <p style="font-size: 19px">{{crash}}</p>
      <div @click="zhanOk" class="zhanOk" slot="footer">确认</div>
    </Modal>
    <Modal
      v-model="modal1"
      title="修改密码"
      :mask-closable="false"
      class="motai"
    >
      <div class="demo-input-suffix">
        <p>旧密码：</p>
        <el-input v-model="usedPass" placeholder="请输入旧密码"></el-input>
      </div>
      <div class="demo-input-suffix">
        <p>新密码：</p>
        <el-input v-model="newPass" placeholder="请输入新密码"></el-input>
      </div>
      <div class="demo-input-suffix">
        <p>确认密码：</p>
        <el-input v-model="confirmPass" placeholder="请确认密码"></el-input>
      </div>

      <div @click="ok" class="queOk" slot="footer">确认</div>
    </Modal>

    <div class="qqBig">
      <div class="qq">
        <img class="qqtouxiang" src="../../../static/image/superSignature/ren.png" alt="">
        <p>在线咨询</p>
      </div>
      <div class="qqtuiguang" v-for="(list,index) in qqValue" :key="index">
        <img src="../../../static/image/superSignature/qqt.png" alt="">
        <a :href="list.newurl" target="_blank">{{list.newqq}}</a>
      </div>
    </div>
    <!--<div class="shougou">-->
      <!--<img src="../../../static/image/superSignature/shougou.png" alt="">-->
    <!--</div>-->
    <Bheader></Bheader>
    <div class="banner" style="background-image: url('../../../static/image/superSignature/hpbanner.png')">
      <div class="bannerDiv">
        <p class="bannerDivone">超级签名一次 安装永不受影响</p>
        <p class="bannerDivNew">ios App超级签名</p>
        <p class="bannerDivtwo">国内ios应用商店，申请账号、上传应用费时费力？</p>
        <p class="bannerDivthree">不一样的ios签名。让你告别掉签烦恼，提高您的应用分发效率，节省大量时间，帮您轻松节省大量获客成本</p>
        <div @click="rightnow" class="rightnow">立即签名</div>
      </div>
      <div class="bannerDivsmall">
        <img src="../../../static/image/superSignature/hptu.png" alt="">
      </div>

    </div>
    <div id="video" class="videoDiv" style="background-image: url(../../../static/image/superSignature/hpbg.png);">
      <img @click="play" class="play" src="../../../static/image/superSignature/Play_anniu@2x.png" alt=""/>
    </div>
    <div class="mask" @click="mask" style="display: none">
      <video class="video-js vjs-default-skin vjs-big-play-centered" controls
             style="object-fit:fill">
        <source src="../../../static/image/superSignature/ios.mp4" type="video/mp4"/>
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <!--我们的优势-->
    <div class="advantage">
      <div class="advantageImg">
        <img src="../../../static/image/superSignature/hpyoushi.png" alt="">
      </div>
      <div class="advantageBig">
        <div class="advantageOne advantageBig_div">
          <div class="advantageOneBig">
            <img src="../../../static/image/superSignature/qianming@2x.png" alt="">
          </div>
          <div class="advantageOneBigP">
            <p class="LaBel">自动化签名 方便快捷</p>
            <p>根据自身需要，选择服务类型，上传IPA包，快速分发，10分钟内完成所有流程，全程自动化，操作简单</p>
          </div>
        </div>
        <div class="advantageOne advantageBig_div">
          <div class="advantageOneBig">
            <img src="../../../static/image/superSignature/anquan@2x.png" alt="">
          </div>
          <div class="advantageOneBigP">
            <p class="LaBel">特有机制 告别掉签</p>
            <p>蒲公英采取的iOS超级签名和企业签名机制不同，掉签概率远低于传统企业签名</p>
          </div>
        </div>
        <div class="advantageOne advantageBig_div">
          <div class="advantageOneBig">
            <img src="../../../static/image/superSignature/anzhuang@2x.png" alt="">
          </div>
          <div class="advantageOneBigP">
            <p class="LaBel">无需越狱 安装即用</p>
            <p>无需企业签名，无需越狱，无需苹果审核，无需上架App Store，下载后安装即用</p>
          </div>
        </div>
        <div class="advantageOne advantageBig_div">
          <div class="advantageOneBig">
            <img src="../../../static/image/superSignature/goumai@2x.png" alt="">
          </div>
          <div class="advantageOneBigP">
            <p class="LaBel">按需购买 性价比高</p>
            <p>按需购买，未使用设备不过期同设备多次下载，或下载多款应用下载，只收费一次</p>
          </div>
        </div>
      </div>
    </div>
    <!--超低价格-->
    <div class="lowprize">
      <div class="lowprizeImg">
        <img src="../../../static/image/superSignature/hpzhaodijiage.png" alt="">
      </div>
      <div class="lowprizeDiv">
        <div class="lowprizeDiv_one" style="background-image: url('../../../static/image/superSignature/hpjiage.png')">
          <div>
            <p>同样的iOS签名、超低的价格 </p>
            <p>1、因机制与企业签名不同，告别掉签</p>
            <p>2、告别掉签风险，只需支付一次获客成本即可</p>
            <p>3、同一台设备下载安装该应用不限制下载次数</p>
            <!--<p>4、按设备数量收费，仅需<span>￥35.00</span>/每台</p>-->
          </div>
        </div>
      </div>


    </div>
    <!--服务对比-->
    <div class="service">
      <div class="serviceImg">
        <img src="../../../static/image/superSignature/hpfuwu.png" alt="">
      </div>
      <div class="serviceDiv">
        <div class="serviceDivOne"
             style="background-image: url('../../../static/image/superSignature/hpchaoji.png')">
          <p class="serviceDivOneTitle">iOS超级签名</p>
          <div class="hr"></div>
          <div class="flex_service">
            <div class="serviceSmall">
              <p>因机制与企业签名不同，告别掉签</p>
            </div>
            <div class="serviceSmall">
              <p>告别掉签风险,只需支付一次即可</p>
            </div>
            <div class="serviceSmall">
              <p>同一台设备下载安装该应用不限制下载次数</p>
            </div>
            <div class="serviceSmall">
              <p>按设备数量收费</p>
            </div>
            <div class="serviceSmall">
              <!--<p>每台设备<span>￥35.00</span>/每台</p>-->
            </div>
          </div>
        </div>
        <div class="serviceDivTwo"  style="background-image: url('../../../static/image/superSignature/hpqiye.png')">
          <p class="serviceDivTwoTitle">企业签</p>
          <div class="hr1"></div>
          <div class="flex_service">
            <div class="serviceSmall">
              <p>稳定性差</p>
            </div>
            <div class="serviceSmall">
              <p>无法推送</p>
            </div>
            <div class="serviceSmall">
              <p>不可设置</p>
            </div>
            <div class="serviceSmall">
              <p>需打开页面重新下载</p>
            </div>
            <div class="serviceSmall">
              <p>包月收费</p>
            </div>
          </div>
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
        <img src="../../../static/image/superSignature/hpwenti.png" alt="">
      </div>
      <div class="textMain">
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">需要提供 App 的源码吗?</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">不需要提供，仅需要提供adhoc版本的ipa格式的安装包即可。</p>
          </div>
        </div>
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">对安装包的大小是否有限制？</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">应用包大小最高不超过2048M。</p>
          </div>
        </div>
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">付款方式有哪些？</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">支持支付宝、微信支付。</p>
          </div>
        </div>
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">充值后如何上传IPA安装包？</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">
              进入后台系统“应用管理”页面，点击“新增应用”，按流程进行操作即可上传成功。若未登录，可点击页面中“登录”或banner中“立即签名”进入后台登录页面，
              输入账号密码登录后再进行上传。
            </p>
          </div>
        </div>
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">签名的 App 可以在商店搜索到吗?</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">不能，超级签名后的 App 可以直接将链接发给用户安装，无需越狱，无需账号，无需审核。</p>
          </div>
        </div>
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">如果同一台设备安装应用后卸载，再重新安装，计费时算一台设备还是两台？</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">按照真实设备数量计算，只计算一台设备。</p>
          </div>
        </div>
        <div class="textMainTop">
          <div class="textfooter">
            <p class="textQ">Q</p>
            <p class="textOne">什么是真机测试？</p>
          </div>
          <div class="textfooter">
            <p class="textA">A</p>
            <p class="textTwo">APP签名完成后，将会用主流苹果机型进行测试安装，安装无误后进行发出。</p>
          </div>
        </div>
      </div>
      <!--<div style="width: 100%;display: flex;justify-content: center;margin-top: 30px;color: black">-->
      <!--<p>平顶山市鑫达科技有限公司</p>-->
      <!--</div>-->
    </div>
    <!--<Bfooter></Bfooter>-->
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import axios from 'axios'
  import qs from 'qs'
  import Bfooter from '../component/footer'
  import Bheader from '../component/header'

  export default {
    name: "index",
    data() {
      return {
        modalnew: false,
        isTongGao: '',
        crash: '',
        bulletin: '',
        usedPass: '',
        newPass: '',
        confirmPass: '',
        modal1: false,
        aUrl: '',
        qqValue: [],
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
            msg: '私有池',
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
            msg: '网页封装',
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
        money: '',
        userName: ''

      }
    },
    components: {
      Bfooter,
      Bheader
    },
    mounted() {
      // this.$store.commit('set_clickIndex',0)
      var that = this
      let config = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.get(BASE_URL + '/api/user/index', config).then(res => {
        this.money = res.data.data.money
        this.userName = res.data.data.username
        // console.log(res.data.data)
        localStorage.setItem('balance', res.data.data.money);
        localStorage.setItem('userName', res.data.data.username);
      }, err => {
        // console.log(err)
      })
      /*客服qq*/
      let config1 = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.get(BASE_URL + '/api/index/getConfig/name/kefu', config1).then(res => {
        // console.log(res.data.data)

        for (var i = 0; i < res.data.data.length; i++) {
          var obj = {};
          obj.newqq = res.data.data[i]
          obj.newurl = 'http://wpa.qq.com/msgrd?v=3&uin=' + res.data.data[i] + '&site=qq&menu=yes'
          that.qqValue.push(obj)
        }
        // console.log(that.qqValue)
      }, err => {
        // console.log(err)
      })

      /*jiage*/
      /* axios.get(BASE_URL+'/api/index/getConfig/name/rate',config1).then(res => {
         console.log(res.data)
       }, err => {
         // console.log(err)
       })*/

      /*通告*/
      axios.get(BASE_URL + '/api/index/getBulletin', config).then(res => {
        if (res.data.data.crash == null) {
          this.modalnew = false
        } else {
          this.modalnew = true
          this.crash = res.data.data.crash
        }

        if (res.data.data.bulletin == null) {
          this.isTongGao = false
        } else {
          this.isTongGao = true
          this.bulletin = res.data.data.bulletin
        }
        console.log(res.data)

      }, err => {
        // console.log(err)
      })
    },
    methods: {
      zhanOk() {
        this.modalnew = false
      },
      play() {
        $(".mask").show()
      },
      mask() {
        $(".mask").hide()
      },

      /*顶部标题点击事件*/
      titleName(index) {
        if (index == 0) {
          // alert("点击了超级签名")
        } else if (index == 1) {
          this.$router.push({
            name: 'privatePool'
          })
        } else if (index == 2) {
          // alert("点击了专属签名")
        } else if (index == 3) {
          // alert("点击了企业签名")
          this.$router.push({
            name: 'enterprise'
          })
        } else if (index == 4) {
          // alert("点击了应用封装")
          this.$router.push({
            name: 'applist'
          })
        } else if (index == 5) {
          // alert("点击了购买服务")
          this.$router.push({
            name: 'myApp',
            params: {
              newid: 0
            }
          })
        } else if (index == 6) {
          const h = this.$createElement;
          this.$msgbox({
            message: h('p', null, [
              h('p', {style: ' text-align: center;font-weight:bold'}, '服务使用条款 '),
              h('p', {style: 'color: grey;margin-top:30px'}, '请在使用iOS 超级签名服务前，仔细阅读并充分理解以下内容及条款：'),
              h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，由我们提供软件签名的技术，您购买此服务是用于您的 App 的内部测试之用途，且需符合苹果iOS 超级签名的所有规定，否则，因此而产生的法律后果由您自行全部承担；'),
              h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，苹果iOS 超级签名因受到苹果政策影响，在未来可能会存在被苹果撤销从而导致应用出现无法安装、或已经安装的应用无法打开等情况，您同意并愿意独立承担该风险以及该风险导致的后续一切损失，并接受我们在后续可能为此而做出任何补偿等措施；'),
              h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，我们提供签名技术来供您下载您的应用，因您对外分发导致App被滥用、恶意下载、刷量而造成的损失，我们仅提供必要的数据支持和反作弊服务，您同意并愿意独立承担因对外分发和推广而导致的风险和风险后续的一切损失。'),
              h('p', {style: 'color: grey'}, '您已仔细阅读并同意《超级签名服务协议》中的全部内容。'),
              h('p', {style: 'color: grey'}, '点击“我同意”代表您已仔细阅读并同意以上所有内容'),
            ]),
            showCancelButton: true,
            closeOnClickModal: false,
            confirmButtonText: '我同意',
            cancelButtonText: '不同意',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                done();
                this.title[index].isclass = true
                this.$router.push({
                  name: 'myApp',
                  params: {
                    newid: 2
                  }
                })
              } else {
                done();
                this.title[0].isclass = true
                this.$router.push({
                  path: '/superSignatureAread'
                })
              }
            }
          })


        }
      },
      /*立即签名*/
      rightnow() {
        const h = this.$createElement;
        this.$msgbox({
          message: h('p', null, [
            h('p', {style: ' text-align: center;font-weight:bold'}, '服务使用条款 '),
            h('p', {style: 'color: grey;margin-top:30px'}, '请在使用iOS 超级签名服务前，仔细阅读并充分理解以下内容及条款：'),
            h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，由我们提供软件签名的技术，您购买此服务是用于您的 App 的内部测试之用途，且需符合苹果iOS 超级签名的所有规定，否则，因此而产生的法律后果由您自行全部承担；'),
            h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，苹果iOS 超级签名因受到苹果政策影响，在未来可能会存在被苹果撤销从而导致应用出现无法安装、或已经安装的应用无法打开等情况，您同意并愿意独立承担该风险以及该风险导致的后续一切损失，并接受我们在后续可能为此而做出任何补偿等措施；'),
            h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，我们提供签名技术来供您下载您的应用，因您对外分发导致App被滥用、恶意下载、刷量而造成的损失，我们仅提供必要的数据支持和反作弊服务，您同意并愿意独立承担因对外分发和推广而导致的风险和风险后续的一切损失。'),
            h('p', {style: 'color: grey'}, '您已仔细阅读并同意《超级签名服务协议》中的全部内容。'),
            h('p', {style: 'color: grey'}, '点击“我同意”代表您已仔细阅读并同意以上所有内容'),
          ]),
          showCancelButton: true,
          closeOnClickModal: false,
          confirmButtonText: '我同意',
          cancelButtonText: '不同意',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              done();
              this.$router.push({
                name: 'myApp',
                params: {
                  newid: 2
                }
              })
            } else {
              done();
              this.$router.push({
                path: '/superSignatureAread'
              })
            }
          }
        })

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
        for (var i = 0; i < this.title.length; i++) {
          this.title[i].isclass = false
        }
        this.title[index].isclass = true
      },
      /*顶部标题移出效果*/
      leave() {
        for (var i = 0; i < this.title.length; i++) {
          this.title[i].isclass = false
        }
        this.title[0].isclass = true
      },
      myappBtn() {
        this.$router.push({
          path: '/myApp'
        })
      },
      /*实名认证*/
      realName() {
        this.$router.push({
          path: '/realName'
        })
      },
      recharge() {
        this.$router.push({
          name: 'myApp',
          params: {
            newid: 0
          }
        })
      },
      /*修改密码*/
      modify() {
        this.modal1 = true
      },
      ok() {
        let data = {
          oldpwd: this.usedPass,
          pwd: this.newPass,
          repwd: this.confirmPass
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/user/changePwd', qs.stringify(data), config).then(res => {
          // console.log(res.data.data)

          if (res.data.code == 0) {
            this.$message.error(res.data.msg);
          } else {
            var token = localStorage.getItem('Authorization');
            this.$store.commit('del_token', token)
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            this.modal1 = false
            this.$router.push({
              path: '/login'
            })
          }

        }, err => {
          // console.log(err)
        })


      },
      /*退出*/
      signOut() {
        var token = localStorage.getItem('Authorization');
        this.$store.commit('del_token', token)
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style>

  .motai .ivu-modal-content {
    position: relative;

  }

  .motai .ivu-modal-footer {
    height: 60px !important;
  }

  .motain .ivu-modal-content {
    position: relative;

  }

  .motain .ivu-modal-footer {
    height: 60px !important;
  }
</style>
<style scoped>
  .login {
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: relative;*/
    background-color: white;
  }

  .banner {
    width: 100%;

    height: 450px;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 368px;*/
  }

  .bannerDiv {
    height: 400px;
    margin-top: 100px;
    margin-left: 3vw;
  }

  .bannerDiv img {
    width: 602px;
    height: 82px;
    margin-top: 15px;
  }

  .bannerDivone {
    font-size: 1.8vw;
    color: #fff;
    width: 44vw;
    letter-spacing: 18px;
  }

  .bannerDivNew {
    font-size: 3.8vw;
    font-weight: bold;
    color: #fff;
    width: 44vw;
  }

  .bannerDivtwo {
    font-size: 19px;
    color: #fff;
    margin-top: 28px;
    width: 30vw;
  }

  .bannerDivthree {
    font-size: 19px;
    color: #fff;
    margin-top: 5px;
    width: 50vw;
  }

  .bannerDivsmall {
    margin-right: 10px;
  }

  .bannerDivsmall img {
    width: 350px;
    height: 326px;
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
    height: 620px;
    margin-top: 50px;
    background-color: #fcfcfc;
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
    max-width: 1025px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px auto 0 auto;
  }

  .advantageBig_div {
    width: 480px;
    height: 186px;
    background-size: 480px 186px;
    display: flex;
    align-items: center;
    margin: 30px 5px 0 5px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
  }

  .advantageOneBig {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-left: 28px;
  }



  .advantageBig_div img {
    width: 85px;
    height: 85px;
  }
.advantageOneBigP{
  height: 100%;
  display: flex;
  flex-flow: column;
  margin-left: 29px;
}
.advantageOneBigP p:nth-child(2){
  margin-top: 10px;
  font-size: 14px;
  width: 295px;
  text-align:justify
}

  .advantageBig_div .LaBel {
    margin-top: 45px;
    color: #333333;
    font-weight: bold;
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



  .lowprize {
    width: 100%;
    height: 620px;
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
    /*background-color: #E8FCFC;*/
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .lowprizeDiv_one div:nth-child(1) {
    width: 500px;
    margin-left: 9vw;
  }

  .lowprizeDiv_one div:nth-child(1) p:nth-child(1) {
    color: #2F82FF;
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
  }

  .serviceImg {
    width: 100%;
    display: flex;
    justify-content: center;
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
    background-image: url("../../../static/image/superSignature/hpfw_bg.png");
    background-repeat: no-repeat;
    background-size: 1536px 214px;
  }

  .serviceDivOne {
    width: 418px;
    height: 478px;
    background-size: 418px 478px;
    margin: 40px;
    color: #666666;
    border-radius: 20px;
    cursor: pointer;
  }

  .serviceDivTwo {
    width: 418px;
    height: 478px;
    background-size: 418px 478px;
    margin: 40px;
    border-radius: 20px;
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
    width: 80%;
    font-size: 24px;
    color: #333333;
    margin-top: 74px;
    margin-left: 43px;

  }

  .serviceDivTwoTitle {
    width: 80%;
    font-size: 24px;
    color: #333333;
    margin-top: 74px;
    margin-left: 43px;

  }

  .serviceDivThreeTitle {
    font-size: 24px;
    color: black;
    margin-top: 33px;
  }

  .flex_service {

  }

  .hr {
    width: 52px;
    height: 3px;
    margin-left: 43px;
    margin-top: 30px;
    background-color: #2F82FF;
  }

  .hr1 {
    width: 52px;
    height: 3px;
    margin-left: 43px;
    margin-top: 30px;
    background-color: #2F82FF;
  }

  .serviceDivOne .serviceSmall {
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin-left: 43px;
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
  }

  .serviceDivTwo .serviceSmall {
    width: 80%;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin-left: 43px;
    margin-top: 20px;

  }

  .serviceDivTwo .serviceSmall div {
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: black;
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
    height: auto;
    background-color: white;
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

    margin: 53px auto 60px auto;
  }
  .textMainTop{
    margin-top: 26px;
  }
</style>
