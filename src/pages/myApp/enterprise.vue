<template>
  <div class="enterprise">
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

      <div @click="ok" class="queOk" slot="footer" >确认</div>
    </Modal>
    <!--下载链接弹出层-->
    <div @click="mask" class="mask" v-if="isMask">
      <div class="maskDiv" @click.stop="ss">
        <div class="downUrl">
          <p>下载链接</p>
        </div>
        <div class="appManagementSmall">
          <div class="appManagementSmallOne">
            <div class="appManagementSmallOneB">
              <qrcode-vue :value="value" :size="size" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>
            </div>

            <p @click.stop="savePic">下载二维码</p>
          </div>
          <div class="appManagementSmallTwo">
            <p>链接地址</p>
            <div class="lianjie">
              <div class="lianjieOne" id="text">{{urlAddress}}</div>
              <textarea id="input">这是幕后黑手</textarea>
              <div @click="copy" class="lianjieTwo">复制链接</div>
            </div>

            <p class="appManagementSmallTwoText">
              如用于应用分发，您可复制此链接或者下
              载二维码至定义菜单、推文中
            </p>

          </div>
        </div>
      </div>

    </div>
    <div class="Bheader">
      <div class="login_title">
        <div class="login_title_first">
          <img @click="logoHome" class="login_title_img" src="../../../static/image/superSignature/mlogo.png" alt="">
        </div>

        <div class="title login_title_second">
          <p @click="titleName(index)" v-for="(list,index) in title" :key="index" :class="{'isColor':list.isclass}"
             @mouseenter="enter(index)"
             @mouseleave="leave(index)">{{list.msg}}</p>
        </div>




        <div class="alreadyLogin login_title_third">

          <div @click="myappBtn" class="myappBtn" >
            <p>我的应用</p>
          </div>

          <!--<el-badge :value="3" class="item">-->
          <!--<img class="tixingBtn" src="../../../static/image/superSignature/tixing@2x.png" alt="">-->
          <!--</el-badge>-->
          <div style="width: 100px">
            <el-dropdown placement=top>
            <span class="el-dropdown-link">
              <p class="accountNumber">{{userName}}</p>
            </span>
              <el-dropdown-menu placement=top  class="xiala" slot="dropdown">
                <el-dropdown-item @click.native="realName">实名认证</el-dropdown-item>
                <el-dropdown-item @click.native="recharge">充值</el-dropdown-item>
                <el-dropdown-item>我的余额:￥{{money}}</el-dropdown-item>
                <el-dropdown-item @click.native="modify">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="signOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>


          <img class="headUrl" src="../../../static/image/superSignature/touxiang@2x.png" alt="">

        </div>

      </div>
    </div>
    <div class="newsecondDiv">
      <img style="width: 100%" src="../../../static/image/superSignature/guanggao.jpg" alt="">
    </div>
    <div class="secondDiv">
      <el-input
        class="seachInput"
        placeholder="根据应用名称搜索"
        prefix-icon="el-icon-search"
        v-model="input"
        @change="seachInput">
      </el-input>
      <div class="export" @click="enterpriseUpload" style="background-image: url('../../../static/image/appManagement/anniu@2x (1).png')">
      <img src="../../../static/image/survey/daochuicon@2x.png" alt="">
      <p>上传应用</p>
      </div>
    </div>
    <div class="thirdDiv">
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{background:'#e0f2fd'}"
      >
        <el-table-column label="应用图标" width="100">
          <template slot-scope="scope">
            <img :src="scope.row.icon" width="40" height="40" class="head_pic"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="应用名称"
        >
        </el-table-column>
        <el-table-column
          prop="version_code"
          label="版本号"
        >
        </el-table-column>
        <el-table-column
          prop="tag"
          label="唯一标识"
        >
        </el-table-column>
        <el-table-column
          prop="url"
          label="安装地址"

        >
          <template slot-scope="scope">
            <p style="color: #14BEC8;cursor: pointer" @click.stop="handleEdit(tableData[scope.$index].tag)">点击下载</p>
            <!--<el-button size="small" >编辑          </el-button>-->
          </template>
        </el-table-column>



        <el-table-column
          prop="download_num"
          label="安装量"
        >
        </el-table-column>
        <el-table-column
          prop="download_num"
          label="下载量">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="更新时间"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          >
          <template slot-scope="scope">
            <span v-if="scope.row.status=== 1" style="color: #43A047">分发中</span>
            <span v-else-if="scope.row.status=== 0" style="color: #999999">已下架</span>
            <span v-else-if="scope.row.status=== '已删除'" style="color: #FF0000">{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          width="130">
          <template slot-scope="scope">
            <el-select  class="downSum" @change="allApp(scope.$index,tableData[scope.$index].operation,tableData[scope.$index].id,tableData,tableData[scope.$index].url,tableData[scope.$index].name,tableData[scope.$index].apk_url,tableData[scope.$index].push_type)"
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
</template>

<script>

  import QrcodeVue from 'qrcode.vue';
  import  axios from 'axios'
  import qs from 'qs'
  import {BASE_URL} from "../../api";
  import surveyHeader from '../component/surveyHeader'

  export default {
    name: "enterprise",
    data() {
      return {
        modal1:false,
        usedPass:'',
        newPass:'',
        confirmPass:'',
        userName:'',
        money:'',
        title: [
          // {
          //   msg: '首页',
          //   isclass: false
          // },
          {
            msg: '超级签名',
            isclass: false
          },
          // {
          //   msg: '私有池',
          //   isclass: false
          // },
          {
            msg: '专属签名',
            isclass: false
          },
          {
            msg: '企业签名',
            isclass: true
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
        value: '',
        size: 150,
        input: '',
        downSumValue: '',
        isMask: false,
        downSumOptions: [
          {
            value: '上架',
          },{
            value: '下架',
          }, {
            value: '删除',
          }],
        tableData: [],
        total:0,
        pageNumber:'',
        current:1,
        urlAddress:'',
        base_url:''
      }
    },
    components: {
      surveyHeader,
      QrcodeVue
    },
    methods: {
      logoHome(){
        this.$router.push({
          path:'/superSignatureAread'
        })
      },
      enterpriseUpload(){
        this.$router.push({
          path:'/enterprisePubish'
        })
      },
      titleName(index) {
        if (index == 0) {
          // alert("点击了超级签名")
          this.$router.push({
            name:'superSignatureAread'
          })
        }else if (index == 99) {
          // this.$router.push({
          //   name:'privatePool'
          // })
        } else if (index == 1) {
          // alert("点击了专属签名")
        } else if (index == 2) {
          //alert("点击了企业签名")
          this.$router.push({
            name:'enterprise'
          })
        } else if (index == 3) {
          this.$router.push({
            path:'/encapsulationindex'
          })
        }else if (index == 4) {
          // alert("点击了购买服务")
          this.$router.push({
            name:'myApp',
            params:{
              newid: 0
            }
          })
        } else if (index == 5) {
          const h = this.$createElement;
          this.$msgbox({
            message: h('p', null, [
              h('p', { style: ' text-align: center;font-weight:bold' }, '服务使用条款 '),
              h('p', { style: 'color: grey;margin-top:30px' }, '请在使用iOS 超级签名服务前，仔细阅读并充分理解以下内容及条款：'),
              h('p', { style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;' }, '您知晓并同意，由我们提供软件签名的技术，您购买此服务是用于您的 App 的内部测试之用途，且需符合苹果iOS 超级签名的所有规定，否则，因此而产生的法律后果由您自行全部承担；'),
              h('p', { style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;' }, '您知晓并同意，苹果iOS 超级签名因受到苹果政策影响，在未来可能会存在被苹果撤销从而导致应用出现无法安装、或已经安装的应用无法打开等情况，您同意并愿意独立承担该风险以及该风险导致的后续一切损失，并接受我们在后续可能为此而做出任何补偿等措施；'),
              h('p', { style: 'color: red;text-indent:2em;text-align:justify;text-justify:inter-ideograph;' }, '您知晓并同意，我们提供签名技术来供您下载您的应用，因您对外分发导致App被滥用、恶意下载、刷量而造成的损失，我们仅提供必要的数据支持和反作弊服务，您同意并愿意独立承担因对外分发和推广而导致的风险和风险后续的一切损失。'),
              h('p', { style: 'color: grey' }, '您已仔细阅读并同意《超级签名服务协议》中的全部内容。'),
              h('p', { style: 'color: grey' }, '点击“我同意”代表您已仔细阅读并同意以上所有内容'),
            ]),
            showCancelButton: true,
            closeOnClickModal:false,
            confirmButtonText: '我同意',
            cancelButtonText: '不同意',
            beforeClose: (action, instance, done) => {
              if (action === 'confirm') {
                done();
                this.title[index].isclass=true
                this.$router.push({
                  name:'myApp',
                  params: {
                    newid: 2
                  }
                })
              } else {
                done();
                this.title[0].isclass=true
                this.$router.push({
                  path:'/superSignatureAread'
                })
              }
            }
          })



        }
      },
      // tableTr(row){
      //   console.log(row)
      //   this.$router.push({
      //     path:'/appManagementDetail',
      //     query:{
      //       id:row.id,
      //       name:row.name,
      //       apk_url:row.apk_url,
      //       push_type:row.push_type
      //     }
      //   })
      // },
      handleEdit(tag){
        let data={
          tag:tag
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/business/download',qs.stringify(data),config).then(res => {
          // console.log(res.data)
          if(res.data.code==200){
            window.location.href=res.data.data.url
          }else if(res.data.code==0){
            this.$message.error(res.data.msg);
          }
        }, err => {
          // console.log(err)
        })
        // this.isMask = true
        // this.value=url
        // this.urlAddress=url
      },
      seachInput(){
        let data={
          keywords:this.input,
          page:this.current,
          page_size:10,
          type:2
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
          // console.log(res.data)
          // console.log(res.data.data.list)
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
          this.tableData=res.data.data.list
        }, err => {
          // console.log(err)
        })
      },
      /*上下页翻页*/
      indexChange(i){
        // console.log(i)
        let data={
          keywords:this.input,
          page:i,
          page_size:10,
          type:2
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
          // console.log(res.data)
          // console.log(res.data.data.list)
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
          this.tableData=res.data.data.list
        }, err => {
          // console.log(err)
        })
      },
      pageChange(s){
        // console.log(s)
      },
      copy(){
        var text = document.getElementById("text").innerText;
        var input = document.getElementById("input");
        input.value = text; // 修改文本框的内容
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        this.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      ss() {

      },
      /*保存二维码图片并下载到本地*/
      savePic() {
        //找到canvas标签
        let myCanvas = document.getElementById('picture').getElementsByTagName('canvas');
        //创建一个a标签节点
        let a = document.createElement("a")
        //设置a标签的href属性（将canvas变成png图片）
        a.href = myCanvas[0].toDataURL('image/png').replace('image/png', 'image/octet-stream')
        //设置下载文件的名字
        a.download = "二维码.png"
        //点击
        a.click()
      },
      /*下拉菜单*/
      allApp(index, nameValue,id,rows,url,name,apk_url,push_type) {

        if (nameValue == '下载链接') {
          this.isMask = true
          this.value=url
          //alert(url)
          this.urlAddress=url
        } else if (nameValue == '查看详情') {
          // let data={
          //   id:id
          // }
          this.$router.push({
            path:'/appManagementDetail',
            query:{
              id:id,
              name:name,
              apk_url:apk_url,
              push_type:push_type
            }
          })


        }else if (nameValue == '上架') {
          //   alert("选择了上架")
          let data={
            id:id,
            type:2
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
            let data={
              keywords:this.input,
              page:this.current,
              page_size:10,
              type:2
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
              // console.log(res.data.data)
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.tableData=res.data.data.list
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        } else if (nameValue == '下架') {
          //   alert("选择了下架")
          let data={
            id:id,
            type:3
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
            let data={
              keywords:this.input,
              page:this.current,
              page_size:10,
              type:2
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
              // console.log(res.data.data)
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.tableData=res.data.data.list
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        } else if (nameValue == '删除') {
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
            axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
              let data={
                keywords:this.input,
                page:this.current,
                page_size:10,
                type:2
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
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
      mask() {
        this.isMask = false
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
        this.title[2].isclass=true
      },
      myappBtn(){
        this.$router.push({
          path: '/myApp'
        })
      },
      /*实名认证*/
      realName(){
        this.$router.push({
          path:'/realName'
        })
      },
      recharge(){
        this.$router.push({
          name:'myApp',
          params:{
            newid: 0
          }
        })
      },
      /*修改密码*/
      modify(){
        this.modal1=true
      },
      ok(){
        let data = {
          oldpwd: this.usedPass,
          pwd:this.newPass,
          repwd:this.confirmPass
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/user/changePwd', qs.stringify(data), config).then(res => {
          // console.log(res.data.data)

          if(res.data.code==0){
            this.$message.error(res.data.msg);
          }else{
            var token=localStorage.getItem('Authorization');
            this.$store.commit('del_token',token)
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            this.modal1=false
            this.$router.push({
              path:'/login'
            })
          }

        }, err => {
          // console.log(err)
        })


      },
      /*退出*/
      signOut(){
        var token=localStorage.getItem('Authorization');
        this.$store.commit('del_token',token)
        this.$router.push({
          path:'/'
        })
      }

    },
    mounted() {
      var that=this
      let config88 = {
        headers:{'token':localStorage.getItem('Authorization')}
      };
      axios.get(BASE_URL+'/api/user/index',config88).then(res => {
        this.money=res.data.data.money
        this.userName=res.data.data.username
        // console.log(res.data.data)
        localStorage.setItem('balance', res.data.data.money);
        localStorage.setItem('userName', res.data.data.username);
      }, err => {
        // console.log(err)
      })
      // alert("2")
      this.base_url=BASE_URL
      let data={
        keywords:this.input,
        page:this.current,
        page_size:10,
        type:2
      }
      let config = {
        headers:{'token':localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
        // console.log(res.data)
        // console.log(res.data.data.list)
        this.total=res.data.data.total
        this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
        this.tableData=res.data.data.list
      }, err => {
        // console.log(err)
      })

    }
  }
</script>

<style scoped>
  .enterprise {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .login_title {
    width: 80%;
    height: 80px;
    display: flex;
    margin: 0 auto;
    /*justify-content: space-around;*/
    align-items: center;
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

  .alreadyLogin {
    /*width: 300px;*/
    height: 30px;
    margin-top: -5px;
    /*margin-left: 20px;*/
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
    width: 180px;
    margin-left: 30px;
  }
  .firstDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .firstDiv_small {
    width: 78%;
    height: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #06B2B6;
    display: flex;
    align-items: center;
    color: #999999;
  }

  .firstDiv_small img {
    width: 18px;
    height: 18px;
  }

  .firstDiv_small p {
    margin-left: 21px;
  }

  .secondDiv {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 48px auto 0 auto;
  }
.newsecondDiv{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
  .seachInput {
    width: 306px;
  }

  .export {
    width: 142px;
    height: 40px;
    background-size: 142px 40px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    margin-left: 304px;
    font-size: 16px;
    cursor: pointer;
  }

  .thirdDiv {
    width: 80%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5;

  }

  .fourthDiv {
    width: 78%;
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

  .maskDiv {
    width: 551px;
    height: 292px;
    background-color: white;

  }

  .downUrl {
    width: 90%;
    height: 40px;
    margin: 20px auto 0 auto;
    line-height: 40px;
    border-bottom: 1.5px solid #06B2B6;
    font-size: 16px;
    color: #333333;
    font-family: "Microsoft YaHei UI";
    font-weight: bold;
  }

  .appManagementSmall {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }

  .appManagementSmallOne {
    text-align: center;
  }

  .appManagementSmallOneB {
    width: 150px;
    height: 150px;
    border: 1px solid #DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  .appManagementSmallOneB div{
    width: 150px;
    height: 150px;
  }
  .appManagementSmallOneB div canvas{
    width: 150px !important;
    height: 150px !important;
  }
  .appManagementSmallOne p {
    margin-top: 5px;
    color: #14BEC8;
    font-size: 16px;
    cursor: pointer;
  }

  .lianjie {
    display: flex;
    margin-top: 9px;
  }

  .lianjieOne {
    width: 180px;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    overflow: hidden;
    border: 1px solid #DCDCDC;
  }

  .lianjieTwo {
    width: 82px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: white;
    background-color: #28A4F7;
    cursor: pointer;
  }
  .appManagementSmallTwoText{
    width: 269px;
    font-style: 16px;
    color: #999999;
    margin-top: 18px;
  }
  .el-select-dropdown__item{
    color:#14BEC8 ;
  }
  .el-select-dropdown__item.selected{
    color:#14BEC8 ;
  }
  #input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -10;
  }
  .demo-input-suffix{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .demo-input-suffix p{
    width: 85px;
    font-size: 15px;
    text-align: center;
  }
  .demo-input-suffix .el-input{
    width: 50%;
  }

  .queOk{
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
  .login_title_first{
    width: 20%;
    height: 80px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .login_title_second{
    width: 55%;
    height: 80px;
    display: flex;
    align-items: center;
  }
  .login_title_third{
    width: 25%;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
</style>
<style>
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #f5f9fb;
    text-align: center !important;
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #f5f9fb;
  }

  .el-table--enable-row-transition .el-table__body td {
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
  }
  /*.el-table_2_column_14  {*/
  /*color: blue;*/
  /*cursor: pointer;*/
  /*}*/
  th{
    color: #909399 !important;
  }

   .motai .ivu-modal-content{
     position: relative;

   }
  .motai .ivu-modal-footer{
    height: 60px !important;
  }

</style>
