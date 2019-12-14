<template>
  <div>
    <Modal
      v-model="modal"
      title="购买"
      :mask-closable="false"
      class="motai"
    >
      <p style="display:flex;align-items:center ;height: 100px; font-size: 16px">请在新打开的页面中完成购买，购买完成后，请根据购买结果点击下面的按钮</p>
      <div @click="queren" class="queOk" slot="footer" >支付成功</div>
    </Modal>
    <div class="mask" v-if="isAdd">
      <div class="maskOne" v-loading="loading">
        <div class="closeDiv">
          <img @click="close" class="guanbi" src="../../../static/image/supersignature/newguanbi.png" alt="">
        </div>
        <div class="maskOneFirst">
          <p>新增开发者账号</p>
        </div>
        <div class="maskOneSecond">
          <div class="maskOneSecondMain">
            <p>Apple ID</p>
            <el-input
              class="maskOneSecondInput"
              placeholder="请输入您的ID"
              v-model="inputAppId"
            >
            </el-input>

          </div>
          <div class="maskOneSecondMain">
            <p>密码</p>
            <el-input
              class="maskOneSecondInput"
              placeholder="请输入您的密码"
              v-model="inputPass"
            >
            </el-input>

          </div>
          <div class="maskOneSecondMain">
            <p>备注</p>
            <el-input
              class="maskOneSecondInput"
              placeholder="请输入您的备注"
              v-model="inputBei"
            >
            </el-input>

          </div>
          <div class="maskOneSecondMain">
            <p></p>
            <el-button style="border: 1px solid #06B2B6;color: #06B2B6;margin-left: 15px;width: 136px" :disabled="as" @click="addAccount" :loading="load"  :class="{ backg: isAddAccount }"  >
              {{buttonValue}}
            </el-button>

          </div>
          <div class="maskOneSecondMain" v-if="isPhone">
            <p>手机号</p>
            <el-select class="maskOneSecondInput" @change="chooseApp()" value-key="id" v-model="appValue" placeholder="选择手机号">
              <el-option
                v-for="item in chooseAppOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

          </div>
          <div class="maskOneSecondMain">
            <p>验证码</p>
            <el-input
              class="maskOneSecondInput1"
              placeholder="请填写验证码"
              v-model="inputYan"
            >
            </el-input>
            <el-button style="border: 1px solid #06B2B6;color: #06B2B6;margin-left: 10px;width: 136px" @click="sendMsg" :loading="load1"   v-if="isBtn">
              {{buttonName}}
            </el-button>
          </div>

        </div>
        <div class="submission" @click="submission"><p>提交</p></div>
      </div>
    </div>
    <div class="mask" v-if="isRecharge">
      <div class="maskOne1">
        <div class="closeDiv">
          <img @click="close" class="guanbi" src="../../../static/image/supersignature/newguanbi.png" alt="">
        </div>
        <div class="maskOneFirst">
          <p>购买私有池设备量</p>
        </div>
        <div class="maskOneSecond1">
          <div @click="xuan(index,list.status,list.id)" class="rechargeDiv" v-for="(list,index) in moneyList" :key="index"
               :class="{'isBorderColor':list.status}">
            <p class="taishu">{{list.num}}台设备</p>
            <p class="jieyue">立省{{list.discount}}元</p>
            <div class="rechargeDivThree">
              <p><span>￥</span>{{list.real_price}}</p>
              <p>{{list.original_price}}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="maskOneSecond1Div">
            <p>自定义</p>
            <el-input
              class="maskOneSecond1Input"
              placeholder="请填写设备台数"
              v-model="inputSheBei"
              v-on:input="sheBei"
            >
            </el-input>
          </div>
          <div class="maskOneSecond1Div">
            <p>支付方式</p>
            <div class="selectThirdDiv"
                 style="width: 150px;height: 44px; background-repeat: no-repeat;  background-image: url('../../../static/image/encapsulation/xuanzhong@2x.png')">
              <img src="../../../static/image/encapsulation/zfbicon@2x.png" alt="">
            </div>
          </div>
          <div class="maskOneSecond1Div">
            <p>支付金额</p>
            <div style="color: #FA5558">
              <span style="font-size: 28px">{{total_price}}</span><span style="color: black">元</span>
            </div>
          </div>
          <div class="maskOneSecond1Div">
            <p></p>
            <div class="goPay" @click="goPay">
              <span>去支付</span>
            </div>
            <p style="margin-left: 30px;width: 600px;text-align: left">每台设备约<span style="color: #FA5558">¥{{price}}</span></p>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="modalnew"
      title="提示"
      :mask-closable="false"
      class="motain"
    >
      <p style="font-size: 19px">添加账号前请确认你所添加的为苹果开发者账号，请先前往苹果开发者中心同意并接受最新的开发协议：<a href="https://developer.apple.com/">https://developer.apple.com/</a>，为方便您顺利添加账号请前往苹果官网（<a
        href="https://appleid.apple.com/#!&page=signin">https://appleid.apple.com/#!&page=signin</a>）移除你信任的设备，只保留手机号码。添加完账号后请一定不要移除账号中新添加的证书和描述文件，不然会导致账号证书无效无法签名应用，也不要在其他平台登录账号避免账号登录信息失效。</p>
      <div @click="zhanOk" class="zhanOk" slot="footer" >确认</div>
    </Modal>
    <Bheader></Bheader>
    <!--<div class="Bheader">-->
      <!--<div class="login_title">-->
        <!--<div class="login_title_first">-->
          <!--<img class="login_title_img" src="../../../static/image/superSignature/mlogo.png" alt="">-->
        <!--</div>-->

        <!--<div class="title login_title_second">-->
          <!--<p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"-->
             <!--@mouseenter="enter(index)"-->
             <!--@mouseleave="leave(index)">{{list.msg}}</p>-->
        <!--</div>-->


        <!--<div class="alreadyLogin login_title_third">-->

          <!--<div @click="myappBtn" class="myappBtn">-->
            <!--<p>我的应用</p>-->
          <!--</div>-->

          <!--&lt;!&ndash;<el-badge :value="3" class="item">&ndash;&gt;-->
          <!--&lt;!&ndash;<img class="tixingBtn" src="../../../static/image/superSignature/tixing@2x.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</el-badge>&ndash;&gt;-->
          <!--<div style="width: 100px">-->
            <!--<el-dropdown placement=top>-->
            <!--<span class="el-dropdown-link">-->
              <!--<p class="accountNumber">{{userName}}</p>-->
            <!--</span>-->
              <!--<el-dropdown-menu placement=top class="xiala" slot="dropdown">-->
                <!--<el-dropdown-item @click.native="realName">实名认证</el-dropdown-item>-->
                <!--<el-dropdown-item @click.native="recharge">充值</el-dropdown-item>-->
                <!--<el-dropdown-item>我的余额:￥{{money}}</el-dropdown-item>-->
                <!--<el-dropdown-item @click.native="modify">修改密码</el-dropdown-item>-->
                <!--<el-dropdown-item @click.native="signOut">退出</el-dropdown-item>-->
              <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
          <!--</div>-->


          <!--<img class="headUrl" src="../../../static/image/superSignature/touxiang@2x.png" alt="">-->

        <!--</div>-->

      <!--</div>-->
    <!--</div>-->
    <div class="second">
      <div class="secondDiv">
        <el-input
          class="seachInput"
          placeholder="搜索应用名"
          prefix-icon="el-icon-search"
          v-model="input"
          @change="seachInput">
        </el-input>
        <div class="add" @click="add">
          <p>新增开发者账号</p>
        </div>
        <div class="secondFooter">
          <div style="display: flex;align-items: center;width: 250px">
            <p style="font-weight: bold">私有池设备量：<span
              style="display: inline-block;width: 90px;text-align: center">{{private_num}}</span></p>
            <div class="chonghzi" @click="chonghzi">
              <p>充值</p>
            </div>
          </div>

        </div>
      </div>
      <div class="thirdDiv">
        <el-table
          :data="tableData"
          stripe
          align="center"
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <el-table-column prop="account" label="Apple ID" align="center">

          </el-table-column>
          <el-table-column
            prop="team_id"
            label="团队ID"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="cert_id"
            label="证书ID"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="udid_num"
            label="已用设备"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="status"
            label="使用状态"
            align="center"
          >
            <template slot-scope="scope">
              <div style="display: flex;justify-content: center">
                <el-switch
                  @click.stop.native
                  active-color="#06B2B6"
                  inactive-color="#DCDCDC"
                  v-model="scope.row.status==1? true:false "
                  @change="swich(scope.row)"
                ></el-switch>
              </div>
            </template>
          </el-table-column>


          <el-table-column
            prop="cert_status"
            label="证书状态"
            align="center"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.cert_status===1" style="color: #06B2B6">有效</span>
              <span v-if="scope.row.cert_status===0" style="color: #999999">无效</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="create_time"
            align="center"
            label="添加时间">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            align="center"
          >
          </el-table-column>

          <el-table-column
            prop="operation"
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <el-select class="downSum"
                         @change="allApp(scope.$index,tableData[scope.$index].id,tableData[scope.$index].operation)"
                         v-model="tableData[scope.$index].operation" placeholder="请选择">
                <el-option
                  v-for="item in downSumOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <div class="fourthDiv">
        <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
        <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="10" :current="current" :total=total />
      </div>
    </div>
  </div>
</template>

<script>
  import {BASE_URL} from "../../api";
  import axios from 'axios'
  import qs from 'qs'
  import Bheader from '../component/header'
  export default {
    name: 'privatePool',
    data() {
      return {
        modalnew:false,
        loading:false,
        inputBei:'',
        isAddAccount:false,
        isBtn:true,
        as:false,
        mode:'',
        mobile_id:"",
        mobile:'',
        cookie:'',
        session_id:'',
        scnt:'',
        newdisabled:false,
        load:false,
        load1:false,
        private_num:'',
        order_id:"",
        id:'',
        num:'',
        modal:false,
        price:'',
        total_price:'',
        isPhone: false,
        inputSheBei: '',
        moneyList: [],
        isRecharge: false,
        buttonValue:'添加账号',
        buttonName: "获取验证码",
        isDisabled: false,
        time: 10,
        inputYan: '',
        appValue: '',
        inputPass: '',
        inputAppId: '',
        isAdd: false,
        total: 0,
        pageNumber: '',
        current: 1,
        input: '',
        money: '',
        userName: '',
        title: [
          // {
          //   msg: '首页',
          //   isclass: false
          // },
          {
            msg: '超级签名',
            isclass: false
          },
          {
            msg: '私有池',
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
        chooseAppOptions:[
        ],
        downSumOptions: [
          {
            value: '删除',
          }],
        tableData: [

        ],
        yancookie:'',
        yansession_id:'',
        yanscnt:'',
      }
    },
    components: {
      Bheader
    },
    mounted() {
      var that = this
      /*获取用户名*/
      let config = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.get(BASE_URL + '/api/user/index', config).then(res => {
        this.money = res.data.data.money
        this.userName = res.data.data.username
        this.private_num= res.data.data.private_num
        // console.log(res.data.data)
        localStorage.setItem('balance', res.data.data.money);
        localStorage.setItem('userName', res.data.data.username);
      }, err => {
        // console.log(err)
      })

      /*获取充值数据*/
      let data1 = {
        id: '',
        num: '',
      }
      axios.post(BASE_URL + '/api/account/orderPage', data1, config).then(res => {
        this.moneyList = res.data.data.list
        this.total_price=res.data.data.total_price
        this.price=res.data.data.price
        this.id=res.data.data.list[0].id
        // console.log(this.moneyList)
      }, err => {
        // console.log(err)
      })


      let data = {
        keywords: this.input,
        page: '',
        page_size: 10
      }

      axios.post(BASE_URL + '/api/account/accountList', data, config).then(res => {
        // console.log(res.data)
        this.tableData=res.data.data.list
        this.total=res.data.data.total
        this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
      }, err => {
        // console.log(err)
      })
    },
    methods: {
      zhanOk(){
        this.modalnew=false
        this.isAdd = true
        this.inputAppId=''
        this.inputPass=''
        this.inputBei=''
        this.isPhone=false
        this.inputYan=''
        this.buttonValue='添加账号'
        this.isBtn=true
        this.as=false
      },
      allApp(index,id,nameValue){
        if (nameValue == '删除') {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let data={
              id:id,
              type:1
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/account/accountHandle',qs.stringify(data),config).then(res => {
              let data={
                keywords:this.input,
                page:1,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/account/accountList',qs.stringify(data),config).then(res => {
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.tableData=res.data.data.list
              }, err => {
                // console.log(err)
              })
            }, err => {
              // console.log(err)
            })
          }).catch(() => {

          });
        }
        this.tableData[index].operation=''
      },
      submission(){
        this.loading=true
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        let data = {
          account: this.inputAppId,
          password: this.inputPass,
          mobile_id:this.mobile_id,
          code:this.inputYan,
          mode:this.mode,
          mobile:this.mobile,
          cookie:this.cookie,
          session_id:this.session_id,
          scnt:this.scnt,
          remark:this.inputBei,
        }
        axios.post(BASE_URL + '/api/account/add', data, config).then(res => {
          if(res.data.code==200){
            this.loading=false
            this.isAdd=false
            let data={
              keywords:this.input,
              page:1,
              page_size:10,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/account/accountList',qs.stringify(data),config).then(res => {
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.tableData=res.data.data.list
            }, err => {
              // console.log(err)
            })
            this.$message.success(res.data.msg);
          }else{
            this.loading=false
            this.isAdd=false
            this.$message.error(res.data.msg);
          }
        }, err => {
          // console.log(err)
        })
      },
      queren(){
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        let data = {
          order_id:this.order_id
        }
        axios.post(BASE_URL + '/api/account/checkOrderPay', data, config).then(res => {
          if(res.data.code==200){
            this.modal=false
            this.$message.success(res.data.msg);
            let config = {
              headers: {'token': localStorage.getItem('Authorization')}
            };
            axios.get(BASE_URL + '/api/user/index', config).then(res => {
              this.money = res.data.data.money
              this.userName = res.data.data.username
              this.private_num= res.data.data.private_num
              // console.log(res.data.data)
              localStorage.setItem('balance', res.data.data.money);
              localStorage.setItem('userName', res.data.data.username);
            }, err => {
              // console.log(err)
            })
          }else{
            this.modal=false
            this.$message.error(res.data.msg);
          }
        }, err => {
          // console.log(err)
        })



      },
      goPay(){

        this.isRecharge=false
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        let data = {
          id: this.id,
          num: this.num,
          total_price:this.total_price,
          pay_code:'alipay'
        }
        axios.post(BASE_URL + '/api/account/creatOrder', data, config).then(res => {

          this.order_id=res.data.data.order_id
          let routerData = this.$router.resolve({path: '/pay', query: {htmls: res.data.data.shtml}})
          window.open(routerData.href, '_blank')
          this.modal=true
        }, err => {
          // console.log(err)
        })
      },
      sheBei() {
        if (this.inputSheBei == '') {
          this.moneyList[0].status = true
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          let data = {
            id: '',
            num:'',
          }
          axios.post(BASE_URL + '/api/account/orderPage', data, config).then(res => {
            this.moneyList = res.data.data.list
            this.total_price=res.data.data.total_price
            this.price=res.data.data.price
            this.id=''
            this.num=''
            // console.log(this.moneyList)
          }, err => {
            // console.log(err)
          })
        } else {
          this.moneyList.forEach((item) => {
            item.status = false
          })
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          let data = {
            id: '',
            num:this.inputSheBei,
          }
          axios.post(BASE_URL + '/api/account/orderPage', data, config).then(res => {
            this.moneyList = res.data.data.list
            this.moneyList.forEach((item) => {
              item.status = false
            })
            this.total_price=res.data.data.total_price
            this.price=res.data.data.price
            this.num=this.inputSheBei
            this.id=''
            // console.log(this.moneyList)
          }, err => {
            // console.log(err)
          })


        }
      },
      chonghzi() {
        this.isRecharge = true
        this.inputSheBei=''
        let data1 = {
          id: '',
          num: '',
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/account/orderPage', data1, config).then(res => {
          this.moneyList = res.data.data.list
          this.moneyList.forEach((item) => {
            item.status = false
          })
          this.moneyList[0].status=true
          this.total_price=res.data.data.total_price
          this.price=res.data.data.price
          this.id=res.data.data.list[0].id
          // console.log(this.moneyList)
        }, err => {
          // console.log(err)
        })
      },
      xuan(index, status,id) {
        this.moneyList.forEach((item) => {
          item.status = false
        })
        this.moneyList[index].status = true
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        let data = {
          id: id,
          num: '',
        }
        axios.post(BASE_URL + '/api/account/orderPage', data, config).then(res => {
          this.moneyList = res.data.data.list
          this.total_price=res.data.data.total_price
          this.price=res.data.data.price
          this.id=id
          this.num=''
          // console.log(this.moneyList)
        }, err => {
          // console.log(err)
        })
      },
      addAccount() {
        this.as=true
        this.load=true
        this.chooseAppOptions=[]
        let data = {
          account: this.inputAppId,
          password: this.inputPass,
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/account/sendSms', data, config).then(res => {
          // console.log(res.data)
          if(res.data.code==0){
            this.$message.error(res.data.msg)
            this.as=false
            this.load=false
          }else if(res.data.code==1){
            this.$message.success(res.data.msg)
            this.as=false
            this.load=false
            this.isPhone=true
            this.buttonValue='重新发送'
            this.isBtn=false
            this.mobile=res.data.data.trustedPhoneNumbers[0].numberWithDialCode
            this.mobile_id=res.data.data.trustedPhoneNumbers[0].id
            this.cookie=res.data.data.cookie
            this.scnt=res.data.data.scnt
            this.session_id=res.data.data.session_id
            this.mode=res.data.data.mode
            this.appValue=res.data.data.trustedPhoneNumbers[0].numberWithDialCode
          }else if(res.data.code==3){
            this.isPhone=true
            this.isAddAccount=true
            this.cookie=res.data.data.cookie
            this.scnt=res.data.data.scnt
            this.session_id=res.data.data.session_id
            this.mode=res.data.data.mode
            for(var i=0;i<res.data.data.trustedPhoneNumbers.length;i++){
              var newobj={}
              newobj.value=res.data.data.trustedPhoneNumbers[i].numberWithDialCode
              newobj.id=res.data.data.trustedPhoneNumbers[i].id
              this.chooseAppOptions.push(newobj)
              // console.log(this.chooseAppOptions)
            }

            this.load=false
          }else if(res.data.code==2){
            this.as=false
            this.load=false
            this.isBtn=false
            this.buttonValue='重新发送'
            this.mobile=res.data.data.trustedPhoneNumbers[0].numberWithDialCode
            this.mobile_id=res.data.data.trustedPhoneNumbers[0].id
            this.cookie=res.data.data.cookie
            this.scnt=res.data.data.scnt
            this.session_id=res.data.data.session_id
            this.mode=res.data.data.mode
            this.appValue=res.data.data.trustedPhoneNumbers[0].numberWithDialCode
            this.$message.error(res.data.msg)
          }


        }, err => {
          // console.log(err)
        })


      },
      sendMsg(){
        this.load1=true
        let data = {
          mobile_id: this.mobile_id,
          cookie:this.cookie,
         scnt:this.scnt,
         session_id:this.session_id,
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/account/sendCode', qs.stringify(data), config).then(res => {
          // console.log(res.data)
          if(res.data.code==0){
            this.load1=false
            this.$message.error(res.data.msg)
            this.newdisabled=false
            this.load=false
          }else if(res.data.code==1){
            this.load1=false
            this.$message.success(res.data.msg)
            this.yancookie=res.data.data.cookie
            this.yansession_id=res.data.data.session_id
            this.yanscnt=res.data.data.scnt
          }else if(res.data.code==2){
            this.load1=false
            this.yancookie=res.data.data.cookie
            this.yansession_id=res.data.data.session_id
            this.yanscnt=res.data.data.scnt
            this.$message.error(res.data.msg)
          }


        }, err => {
          // console.log(err)
        })
      },
      chooseApp() {
        let obj = {};
        obj = this.chooseAppOptions.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.value === this.appValue;//筛选出匹配数据
        });
        this.mobile_id=obj.id
        this.mobile=this.appValue
      },
      add() {
        this.modalnew=true
      },
      close() {
        this.isAdd = false
        this.isRecharge = false
      },
      swich(row) {
        row.status=!row.status
        if(row.status==true){
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          let data = {
            id: row.id,
            type: 2,
          }
          axios.post(BASE_URL + '/api/account/accountHandle', data, config).then(res => {
            if(res.data.code==200){
              let data={
                keywords:this.input,
                page:1,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/account/accountList',qs.stringify(data),config).then(res => {
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.tableData=res.data.data.list
              }, err => {
                // console.log(err)
              })
            }else{
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })
        }else{
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          let data = {
            id: row.id,
            type: 3,
          }
          axios.post(BASE_URL + '/api/account/accountHandle', data, config).then(res => {
            if(res.data.code==200){
              let data={
                keywords:this.input,
                page:1,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/account/accountList',qs.stringify(data),config).then(res => {
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.tableData=res.data.data.list
              }, err => {
                // console.log(err)
              })
            }else{
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })
        }



      },
      seachInput() {
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        let data = {
          keywords: this.input,
          page: 1,
          page_size:10
        }
        axios.post(BASE_URL + '/api/account/accountList', data, config).then(res => {
          if(res.data.code==200){
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
          }else{
            this.$message.error(res.data.msg);
          }
        }, err => {
          // console.log(err)
        })
      },
      // /*顶部标题点击事件*/
      // titleName(index) {
      //   if (index == 0) {
      //     this.$router.push({
      //       name: 'superSignatureAread'
      //     })
      //   } else if (index == 1) {
      //     this.$router.push({
      //       name: 'privatePool'
      //     })
      //   } else if (index == 2) {
      //     // alert("点击了专属签名")
      //   } else if (index == 3) {
      //     // alert("点击了企业签名")
      //     this.$router.push({
      //       name: 'enterprise'
      //     })
      //   } else if (index == 4) {
      //     // alert("点击了应用封装")
      //     this.$router.push({
      //       name: 'applist'
      //     })
      //   } else if (index == 5) {
      //     // alert("点击了购买服务")
      //     this.$router.push({
      //       name: 'myApp',
      //       params: {
      //         newid: 0
      //       }
      //     })
      //   } else if (index == 6) {
      //     const h = this.$createElement;
      //     this.$msgbox({
      //       message: h('p', null, [
      //         h('p', {style: ' text-align: center;font-weight:bold'}, '服务使用条款 '),
      //         h('p', {style: 'color: grey;margin-top:30px'}, '请在使用iOS 超级签名服务前，仔细阅读并充分理解以下内容及条款：'),
      //         h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，由我们提供软件签名的技术，您购买此服务是用于您的 App 的内部测试之用途，且需符合苹果iOS 超级签名的所有规定，否则，因此而产生的法律后果由您自行全部承担；'),
      //         h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，苹果iOS 超级签名因受到苹果政策影响，在未来可能会存在被苹果撤销从而导致应用出现无法安装、或已经安装的应用无法打开等情况，您同意并愿意独立承担该风险以及该风险导致的后续一切损失，并接受我们在后续可能为此而做出任何补偿等措施；'),
      //         h('p', {style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;'}, '您知晓并同意，我们提供签名技术来供您下载您的应用，因您对外分发导致App被滥用、恶意下载、刷量而造成的损失，我们仅提供必要的数据支持和反作弊服务，您同意并愿意独立承担因对外分发和推广而导致的风险和风险后续的一切损失。'),
      //         h('p', {style: 'color: grey'}, '您已仔细阅读并同意《超级签名服务协议》中的全部内容。'),
      //         h('p', {style: 'color: grey'}, '点击“我同意”代表您已仔细阅读并同意以上所有内容'),
      //       ]),
      //       showCancelButton: true,
      //       closeOnClickModal: false,
      //       confirmButtonText: '我同意',
      //       cancelButtonText: '不同意',
      //       beforeClose: (action, instance, done) => {
      //         if (action === 'confirm') {
      //           done();
      //           this.title[index].isclass = true
      //           this.$router.push({
      //             name: 'myApp',
      //             params: {
      //               newid: 2
      //             }
      //           })
      //         } else {
      //           done();
      //           this.title[0].isclass = true
      //           this.$router.push({
      //             path: '/superSignatureAread'
      //           })
      //         }
      //       }
      //     })
      //
      //
      //   }
      // },
      // /*顶部标题移入效果*/
      // enter(index) {
      //   for (var i = 0; i < this.title.length; i++) {
      //     this.title[i].isclass = false
      //   }
      //   this.title[index].isclass = true
      // },
      // /*顶部标题移出效果*/
      // leave() {
      //   for (var i = 0; i < this.title.length; i++) {
      //     this.title[i].isclass = false
      //   }
      //   this.title[1].isclass = true
      // },
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
      /*上下页翻页*/
      indexChange(i) {
        // console.log(i)
        let data = {
          keywords: this.input,
          page: i,
          page_size: 10,

        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL + '/api/account/accountList', qs.stringify(data), config).then(res => {

          this.total = res.data.data.total
          this.pageNumber = parseInt(Math.ceil(Number(this.total) / 10))
          this.tableData = res.data.data.list
        }, err => {
          // console.log(err)
        })
      },
      pageChange(s) {
        // console.log(s)
      },
    }
  }
</script>

<style scoped>
  .goPay {
    width: 136px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: white;
    font-size: 14px;
    background: rgba(6, 178, 182, 1);
    border-radius: 4px;
    cursor: pointer;
  }

  .maskOneSecond1Div p {
    width: 90px;
    text-align: right;
    margin-right: 15px;
    font-size: 14px;
    color: #333333;
  }

  .selectThirdDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .maskOneSecond1Div {
    display: flex;
    align-items: center;
    margin-top: 32px;
  }

  .maskOneSecond1Input {
    width: 321px;
  }

  .taishu {
    font-size: 16px;
    color: #131738;
    font-family: 'MicrosoftYaHei';
    margin-top: 10px;
  }

  .jieyue {
    height: 20px;
    color: #FA5558;
    font-size: 12px;
    margin-top: 10px;
  }

  .rechargeDivThree {
    display: flex;
    align-items: center;
  }

  .rechargeDivThree p:nth-child(1) {
    font-size: 24px;
    color: #FA5558;
  }

  .rechargeDivThree p:nth-child(1) span {
    font-size: 14px;

  }

  .rechargeDivThree p:nth-child(2) {
    font-size: 14px;
    text-decoration: line-through;
    margin-left: 5px;
    color: #999999;
  }

  .rechargeDiv {
    width: 170px;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(235, 237, 254, 1);
    border-radius: 4px;
    display: flex;
    flex-flow: column;
    align-items: center;
    cursor: pointer;
  }

  .submission {
    width: 136px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    color: white;
    font-size: 16px;
    background: rgba(6, 178, 182, 1);
    border-radius: 4px;
    margin: 40px auto;
    cursor: pointer;
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

  .isBorderColor {
    width: 170px;
    height: 100px;
    background-image: url("../../../static/image/superSignature/xuan.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .maskOneSecondInput {
    width: 386px;
    margin-left: 15px;
  }

  .maskOneSecondInput1 {
    width: 241px;
    margin-left: 15px;
  }

  .maskOneSecondMain p {
    width: 70px;
    font-size: 14px;
    text-align: right;
  }

  .maskOneSecond {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    margin-top: 17px;
  }

  .maskOneSecond1 {
    width: 95%;
    display: flex;
    align-items: center;
    margin: 39px auto 0 auto;
    justify-content: space-between;
  }

  .maskOneSecondMain {
    width: 480px;
    display: flex;
    align-items: center;
    margin-top: 32px;
  }

  .second {
    width: 80%;
    margin: 0 auto;
  }

  .secondDiv {
    width: 100%;
    margin: 41px auto 0 auto;
    display: flex;
    position: relative;
  }

  .seachInput {
    width: 230px;
  }

  .add {
    width: 130px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-left: 10px;
    font-size: 14px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(6, 178, 182, 1);
    border-radius: 4px;
    color: #06B2B6;
    cursor: pointer;
  }

  .thirdDiv .el-select-dropdown__item {
    color: #14BEC8;
  }

  .thirdDiv .el-select-dropdown__item.selected {
    color: #14BEC8;
  }

  .secondFooter {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 0;
    font-size: 14px;
  }

  .chonghzi {
    width: 56px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 220, 220, 1);
    border-radius: 4px;
    cursor: pointer;
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
    background-color: #06B2B6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
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

  .login_title_first {
    width: 20%;
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .login_title_second {
    width: 55%;
    height: 80px;
    display: flex;
    align-items: center;
  }

  .login_title_third {
    width: 25%;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }

  .thirdDiv {
    width: 100%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5;

  }

  .fourthDiv {
    width: 100%;
    /*height: 300px;*/
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.5);
    z-index: 1000000;
    top: 0;
  }

  .appManagementSmallOneB div {
    width: 150px;
    height: 150px;
  }

  .appManagementSmallOneB div canvas {
    width: 150px !important;
    height: 150px !important;
  }

  .appManagementSmallOne p {
    margin-top: 5px;
    color: #14BEC8;
    font-size: 16px;
    cursor: pointer;
  }

  .demo-input-suffix p {
    width: 85px;
    font-size: 15px;
    text-align: center;
  }

  .demo-input-suffix .el-input {
    width: 50%;
  }

  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.5);
    z-index: 999;
    top: 0;
    left: 0;
  }

  .maskOne {
    width: 100%;
    max-width: 674px;
    height: 628px;
    border-radius: 4px;
    background-color: white;
    position: relative;
  }

  .maskOne1 {
    width: 100%;
    max-width: 950px;
    height: 550px;
    border-radius: 4px;
    background-color: white;
    position: relative;
  }

  .maskOneFirst {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    font-weight: bold;
    border-bottom: 1px solid #E5E5E5;
  }

  .closeDiv {
    width: 100%;
    height: 20px;
    margin-top: 10px;
    position: absolute;
  }

  .guanbi {
    position: absolute;
    right: 2%;
    top: 3%;

  }
  .queOk{
    width: 80px;
    background-color: #14BEC8;
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: white;
    font-size: 15px;
    border-radius: 10px;
    position: absolute;
    right: 5%;
    cursor: pointer;
  }
  .zhanOk{
    width: 60px;
    background-color: #06B2B6;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: white;
    border-radius: 10px;
    position: absolute;
    right: 10%;
    cursor: pointer;
  }
  /*.backg{*/
    /*background-color: gray;*/
  /*}*/
</style>
<style>
  .motai .ivu-modal-content {
    width: 700px;
    height: 251px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .motai .ivu-modal {
    width: 700px !important;
  }
  .motain .ivu-modal-content{
    position: relative;

  }
  .motain .ivu-modal-footer{
    height: 60px !important;
  }
</style>
