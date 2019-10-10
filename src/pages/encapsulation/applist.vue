<template>
    <div class="applist">
      <Modal
        v-model="modal1"
        title="购买"
        :mask-closable="false"
        class="motai"
      >
        <p style="display:flex;align-items:center ;height: 100px; font-size: 16px">请在新打开的页面中完成购买，购买完成后，请根据购买结果点击下面的按钮</p>
        <div @click="queok" class="queOk" slot="footer" >支付成功</div>
      </Modal>


      <div v-if="isApplist">
        <!--<div class="crumbs">-->
        <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
        <!--<el-breadcrumb-item :to="{ name: 'noFlash',params:{id:1} }">应用封装 </el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>应用列表</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->
        <!--</div>-->
        <div class="whiteDiv" >
          <div class="whiteDivBig">
            <el-select class="downSum" @change="allApp()"
                       v-model="appName" placeholder="平台状态">
              <el-option
                v-for="item in downSumOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input
              class="seachInput"
              placeholder="根据应用名称搜索"
              prefix-icon="el-icon-search"
              v-model="input"
              @change="seachInput">
            </el-input>
          </div>
          <div class="secondDiv">
            <el-table
              :data="tableData"
              stripe
              @row-click="tableTr"
              align="center"
              :header-cell-style="{background:'#e0f2fd'}"
            >
              <el-table-column
                prop="platform"
                label="平台"
                align="center"
              >
                <template slot-scope="scope" class="caozuo">
                  <span v-if="scope.row.platform=== 1" >IOS</span>
                  <span v-if="scope.row.platform=== 2" >Android</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="应用名称"
                width="160"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="version_code"
                label="版本"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="downUrl"
                label="下载链接"
                align="center"
                width="260"
              >
                <template slot-scope="scope" class="caozuo">
                  <span >{{downdownUrl}}{{tableData[scope.$index].tag}}</span>
                  <!--<qrcode-vue style="margin-left: 10px" value="value2" :size="size2" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>-->
                </template>
              </el-table-column>
              <el-table-column
                prop="expire_time"
                label="到期时间"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态"
                align="center"
              >
                <template slot-scope="scope" class="caozuo">
                  <span v-if="scope.row.status=== 1" >已完成</span>
                  <span v-if="scope.row.status=== 0" >封装中</span>
                  <span v-if="scope.row.status=== -1" >已删除</span>
                  <span v-if="scope.row.status=== -2" >封装失败</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="caozuoL"
                label="操作"
                align="center"
                width="260"
              >

                <template slot-scope="scope" class="caozuo">
                  <div class="chakan" :class="{ 'greenColor': isCo }" @mouseenter="chakanEnter(scope.row,tableData[scope.$index].id)" @mouseleave="chakanleave(scope.row,tableData[scope.$index].id)" @click.stop="chakanClick(scope.row,tableData[scope.$index].id)">查看</div>
                  <div class="xufei" :class="{ 'greenColor': isCo1 }" @mouseenter="xufeiEnter(scope.row,tableData[scope.$index].id)" @mouseleave="xufeileave(scope.row,tableData[scope.$index].id)" @click.stop="xufeiClick(scope.row,tableData[scope.$index].id)">续费</div>
                  <div class="shanchu" :class="{ 'redColor1': isCo2 }" @mouseenter="shanchuEnter(scope.row,tableData[scope.$index].id)" @mouseleave="shanchuleave(scope.row,tableData[scope.$index].id)" @click.stop="shanchuClick(scope.row,tableData[scope.$index].id)">删除</div>
                </template>

              </el-table-column>

            </el-table>

          </div>
          <div class="thirdDiv">
            <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
            <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="5" :current="current" :total=total />
          </div>

        </div>
      </div>
      <div v-if="isDetail">
        <!--<div class="crumbs">-->
          <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
            <!--<el-breadcrumb-item :to="{ name:'noFlash',params:{id:1} }">应用封装 </el-breadcrumb-item>-->
            <!--<el-breadcrumb-item :to="{ name:'applist' }" >应用列表 </el-breadcrumb-item>-->
            <!--<el-breadcrumb-item>应用详情</el-breadcrumb-item>-->
          <!--</el-breadcrumb>-->
        <!--</div>-->
        <div  class="whiteDiv2" >
          <div class="whiteDiv2First">
            <div class="whiteDiv2FirstLogoDiv">
              <div>
                <img class="whiteDiv2FirstLogoDivImg" :src="iconData" alt="">
              </div>
              <div class="whiteDiv2FirstLogoDivText">
                <p>{{appnameData}} <span>{{apptext}}</span></p>
                <p>版本：{{versionData}}</p>
                <p>大小：{{sizeData}}</p>
                <p>更新时间：{{updateTimeData}}</p>
              </div>
              <div class="whiteDiv2Down" @click="downLOAD" v-show="downShow">
                <img src="../../../static/image/encapsulation/xiazai@2x.png" alt="">
                <p>下载</p>
              </div>
              <div class="whiteDiv2Xufei" @click="xuBtn">
                <img src="../../../static/image/encapsulation/xufei@2x.png" alt="">
                <p>续费</p>
              </div>
            </div>
          </div>
          <div class="whiteDiv2First2">
            <div class="whiteDiv2First2One">
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">状态：</p>
                <p class="whiteDiv2First2P2">{{statusData}}</p>
              </div>
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">包名(BundlelD)：</p>
                <p class="whiteDiv2First2P2">{{BundlelDData}}</p>
              </div>
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">到期时间：</p>
                <p class="whiteDiv2First2P2">{{timeData}}</p>
              </div>
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">网站链接：</p>
                <p class="whiteDiv2First2P2">{{urlData}}</p>
              </div>
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">应用密码：</p>
                <p class="whiteDiv2First2P2">{{passData}}</p>
              </div>
            </div>
            <div class="whiteDiv2First2Two">
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">下载链接：</p>
                <p class="whiteDiv2First2P2">{{downData}}</p>
              </div>
              <div class="whiteDiv2First2Div">
                <p class="whiteDiv2First2P">下载二维码：</p>
                <div style="margin-left: 15px">
                  <qrcode-vue :value="value" :size="size" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div v-if="isXufei">
        <!--<div class="crumbs">-->
          <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
            <!--<el-breadcrumb-item :to="{ name: 'noFlash',params:{id:1} }">应用封装 </el-breadcrumb-item>-->
            <!--<el-breadcrumb-item :to="{  path: '/encapsulationindex' }">应用列表 </el-breadcrumb-item>-->
            <!--<el-breadcrumb-item>应用续费</el-breadcrumb-item>-->
          <!--</el-breadcrumb>-->
        <!--</div>-->
        <div class="whiteDiv3" >
          <div >
            <div class="selectFirst">
              <p class="selectFirstTitle">订单信息</p>
              <div class="selectFirstDiv">
                <img class="logoImg" :src="isSelectLogo" alt="">
                <div>
                  <p class="app_name">{{isSelectAppname}}</p>
                  <p class="version_code">{{isSelectVersion}}</p>
                </div>
              </div>
            </div>
            <div class="selectFirst selectSecond">
              <p class="selectFirstTitle">选择到期时间</p>
              <div class="selectFirstDiv">
                <div class="selectFirstDiv_small " v-for="(list,index) in timeSelect" :key="index">
                  <img  v-if="list.status" src="../../../static/image/superSignature/danxuan.png" alt="">
                  <img  v-else @click="timeDan(list.id,list.price,list.status)"  src="../../../static/image/superSignature/danweixuan.png" alt="">
                  <p>{{list.name}}</p>
                </div>
              </div>
            </div>
            <div class="selectFirst selectThird">
              <p class="selectFirstTitle">选择支付方式</p>
              <div class="selectThirdDiv" style="width: 150px;height: 44px; background-repeat: no-repeat;  background-image: url('../../../static/image/encapsulation/xuanzhong@2x.png')">
                <img src="../../../static/image/encapsulation/zfbicon@2x.png" alt="">
              </div>
            </div>
            <div class="selectFour">
              <p class="selectFourTitle">支付金额：<span style="font-size: 26px;color: #FF0000">¥</span><span style="font-size: 26px;color: #FF0000">{{money}}</span></p>
            </div>
            <div class="selectFive">
              <!--<router-link class="seondNext" @click="pay" tag="a" target="_blank" :to="{name:'pay',query:{goodsId:'1111'}}">去支付</router-link>-->
              <div class="seondNext" @click="pay">去支付</div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import QrcodeVue from 'qrcode.vue';
  import  axios from 'axios'
  import qs from 'qs'
  import {BASE_URL} from "../../api";
    export default {
        name: "applist",
      data(){
          return{
            downdownUrl:'',
            downShow:'',
            apptext:'',
            modal1:false,
            newid:'',
            money:'',
            timeSelect:'',
            isSelectLogo:'',
            isSelectAppname:'',
            isSelectVersion:'',
            isSelectSize:'',
            isCo:false,
            isCo1:false,
            isCo2:false,
            downurl:'',
            jiType:'',
            value: '',
            size: 105,
            value2: '',
            size2: 30,
            isApplist:true,
            isDetail:false,
            isXufei:false,
            total:0,
            pageNumber:'',
            current:1,
            input:'',
            appName:'',
            value:'',
            downSumOptions: [
              {
                value: 'IOS',
              }, {
                value: 'Android',
              }],
            tableData: [

            ],
            iconData:'',
            idData:'',
            appnameData:'',
            versionData:'',
            sizeData:'',
            updateTimeData:'',
            statusData:'',
            BundlelDData:'',
            timeData:'',
            urlData:'',
            passData:'',
            downData:'',
            mobileConfig:''
          }
      },
      components: {
        QrcodeVue
      },
      methods:{

        chakanEnter(row,id){
          // this.isCo=true
        },
        chakanleave(){
          // this.isCo=false
        },
        xufeiEnter(){
          // this.isCo1=true
        },
        xufeileave(){
          // this.isCo1=false
        },
        shanchuEnter(){
          // this.isCo2=true
        },
        shanchuleave(){
          // this.isCo2=false
        },
        tableTr(row){
          let data={
            id:row.id
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data),config).then(res => {
            if(res.data.code==200){
              // console.log(res.data)
              if(res.data.data.status== 1){
                this.statusData='已完成'
              }else if(res.data.data.status== 0){
                this.statusData='封装中'
              }else if(res.data.data.status== -1){
                this.statusData='已删除'
              }
              this.mobileConfig=res.data.data.mobileconfig
              this.iconData=res.data.data.icon
              this.appnameData=res.data.data.name
              this.idData=res.data.data.id
              this.versionData=res.data.data.version_code
              this.sizeData=res.data.data.filesize
              this.updateTimeData=res.data.data.update_time
              this.BundlelDData=res.data.data.bundle
              this.BundlelDData=res.data.data.bundle
              this.timeData=res.data.data.expire_time
              this.urlData=res.data.data.website
              this.passData=res.data.data.password
              this.downData=window.location.hostname+'/#/down?tag='+res.data.data.tag
              this.value=window.location.hostname+'/#/down?tag='+res.data.data.tag
              this.isApplist=false
              this.isDetail=true
              this.isXufei=false
              // alert(res.data.data.type)
              if(res.data.data.type==2){//无包 无闪退封装
                this.downShow=false
                this.apptext='ios无闪退版'
              }else if(res.data.data.type==1){ //有包 普通封装
                this.downShow=true
                this.apptext='普通封装'
              }


            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');

          })

        },
        downLOAD(){

          // alert(this.mobileConfig)
          window.location.href=this.mobileConfig
        },
        chakanClick(row,id){
          this.newid=row.id
          let data={
            id:id
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/info',qs.stringify(data),config).then(res => {
            if(res.data.code==200){
              // console.log(res.data)
              if(res.data.data.status== 1){
                this.statusData='已完成'
              }else if(res.data.data.status== 0){
                this.statusData='封装中'
              }else if(res.data.data.status== -1){
                this.statusData='已删除'
              }
              this.iconData=res.data.data.icon
              this.appnameData=res.data.data.name
              this.versionData=res.data.data.version_code
              this.sizeData=res.data.data.filesize
              this.updateTimeData=res.data.data.update_time
              this.BundlelDData=res.data.data.bundle
              this.BundlelDData=res.data.data.bundle
              this.timeData=res.data.data.expire_time
              this.urlData=res.data.data.website
              this.passData=res.data.data.password
              this.downData=window.location.hostname+'/#/down?tag='+res.data.data.tag
              this.value=window.location.hostname+'/#/down?tag='+res.data.data.tag
              this.isApplist=false
              this.isDetail=true
              this.isXufei=false
              // alert(res.data.data.type)
              if(res.data.data.type==2){//无包 无闪退封装
                this.downShow=false
                this.apptext='ios无闪退版'
              }else if(res.data.data.type==1){ //有包 普通封装
                this.downShow=true
                this.apptext='普通封装'
              }
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');

          })
        },
        xuBtn(){
          this.newid=this.idData
          this.isApplist=false
          this.isDetail=false
          this.isXufei=true
          this.isSelectLogo=this.iconData
          this.isSelectAppname=this.appnameData
          this.isSelectVersion=this.versionData
          /*获取钱*/
          let data2={
            type:2
          }
          axios.post(BASE_URL+'/api/encapsulation/payConfig',data2).then(res => {
            // console.log(res.data.data)
            if(res.data.code==200){
              this.timeSelect=res.data.data
              this.money=this.timeSelect[0].price
              this.selectId=this.timeSelect[0].id
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');
            // console.log(err)
          })
        },
        xufeiClick(row,id){
          // console.log(row)
          this.newid=row.id
          this.isApplist=false
          this.isDetail=false
          this.isXufei=true
          this.isSelectLogo=row.icon
          this.isSelectAppname=row.name
          this.isSelectVersion=row.version_code
          /*获取钱*/
          let data2={
            type:2
          }
          axios.post(BASE_URL+'/api/encapsulation/payConfig',data2).then(res => {
            // console.log(res.data.data)
            if(res.data.code==200){
              this.timeSelect=res.data.data
              this.money=this.timeSelect[0].price
              this.selectId=this.timeSelect[0].id
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');
            // console.log(err)
          })
        },
        timeDan(index,money,status){
          this.timeSelect[0].status=false
          this.timeSelect[1].status=false
          this.timeSelect[2].status=false
          this.selectId=this.timeSelect[index-2].id
          if(index==2){
            this.money=money
            this.timeSelect[0].status=true
          }else if(index==3){
            this.money=money
            this.timeSelect[index-2].status=true
          }else if(index==4){
            this.timeSelect[index-2].status=true
            this.money=money
          }
        },
        shanchuClick(row,id){
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
            axios.post(BASE_URL+'/api/encapsulation/app_handle',qs.stringify(data),config).then(res => {
              let data1={
                type:this.jiType,
                name:this.input,
                page:'',
                page_size:5,
              }
              let config1 = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/encapsulation/appList',qs.stringify(data1),config1).then(res => {
                // console.log(res.data)
                if(res.data.code==200){
                  // console.log(res.data.data.list)
                  this.tableData=res.data.data.list
                  this.total=res.data.data.total
                  this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
                }else if(res.data.code==0){
                  this.$message.error(res.data.msg);
                }
              }, err => {
                this.$message.error('系统报错');
                // console.log(err)
              })
            }, err => {
              // console.log(err)
            })
          }).catch(() => {

          });
        },
        indexChange(i){
          let data={
            type:this.jiType,
            name:this.input,
            page:i,
            page_size:5,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/appList',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              // console.log(res.data.data.list)
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');
            // console.log(err)
          })
        },
        pageChange(){

        },
        seachInput(){
          let data={
            type:this.jiType,
            name:this.input,
            page:'',
            page_size:5,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/appList',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              // console.log(res.data.data.list)
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');
            // console.log(err)
          })
        },
        allApp(){
          if(this.appName=='IOS'){
            this.jiType=1
          }else{
            this.jiType=2
          }
          let data={
            type:this.jiType,
            name:this.input,
            page:'',
            page_size:5,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/appList',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              // console.log(res.data.data.list)
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');
            // console.log(err)
          })
        },
        pay(){
          let data = {
            id:this.newid,
            price_id:this.selectId,
            pay_type:2
          }
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/signature',qs.stringify(data),config).then(res => {
            if(res.data.code==200){
            //  alert("zhouzhele???")
              this.$message({
                message: '支付成功',
                type: 'success'
              });
              this.$router.push({
                name:'applist',
                params:{
                  id:2
                }
              })
            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }else{
              this.modal1=true
              let routerData = this.$router.resolve({path:'/pay',query:{htmls:res.data}})
              window.open(routerData.href,'_blank')
            }
          }, err => {
            // console.log(err)
          })





        },
        queok(){
          let data={
            app_id:this.newid
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/encapsulation/checkOrderPay',data,config).then(res => {
            // console.log(res.data)
            if(res.data.code==200){
              this.modal1=false
              this.isApplist=true
              this.isDetail=false
              this.isXufei=false
              let data={
                type:this.jiType,
                name:this.input,
                page:'',
                page_size:5,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/encapsulation/appList',qs.stringify(data),config).then(res => {
                // console.log(res.data)
                if(res.data.code==200){
                  // console.log(res.data.data.list)
                  this.tableData=res.data.data.list
                  this.total=res.data.data.total
                  this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
                  for(var i=0;i<res.data.data.list.length;i++){
                    this.downData=window.location.hostname+'/#/down?tag='+res.data.data.list[i].tag
                    this.value2=window.location.hostname+'/#/down?tag='+res.data.data.list[i].tag
                  }
                }else if(res.data.code==0){
                  this.$message.error(res.data.msg);
                }
              }, err => {
                this.$message.error('系统报错');
                // console.log(err)
              })



            }else if(res.data.code==0){
              this.$message.error(res.data.msg);
            }
          }, err => {
            this.$message.error('系统报错');
            // console.log(err)
          })
        }

      },
      mounted(){

          let data={
            type:this.jiType,
            name:this.input,
            page:'',
            page_size:5,
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/encapsulation/appList',qs.stringify(data),config).then(res => {
          // console.log(res.data)
          if(res.data.code==200){
            // console.log(res.data.data.list)
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
            this.downdownUrl=window.location.hostname+'/#/down?tag='
            for(var i=0;i<res.data.data.list.length;i++){
              this.downData=window.location.hostname+'/#/down?tag='+res.data.data.list[i].tag
              this.value2=window.location.hostname+'/#/down?tag='+res.data.data.list[i].tag
            }
          }else if(res.data.code==0){
            this.$message.error(res.data.msg);
          }
        }, err => {
          this.$message.error('系统报错');
          // console.log(err)
        })


      }
    }
</script>

<style scoped>
  .applist{
    width: 100%;

    background-color: #f3f6f9;
  }
  .whiteDiv{
    width: 80%;
    height: 600px;
    margin: 0 auto;
    background-color: white;
  }

  .whiteDivBig{
    display: flex;
    align-items: center;

  }
  .seachInput {
    width: 280px;
    margin-top: 30px;
    margin-left: 27px;
  }
  .downSum{
    width: 150px;
    margin-left: 36px;
    margin-top: 30px;
  }
  .secondDiv{
    width: 95.2%;
    margin: 20px auto;
  }
  .caozuo{
    display: flex;
  }
  .chakan{
    width:56px;
    height:28px;
    /*background:rgba(2,178,181,1);*/
    border:1px solid rgba(2,178,181,1);
    border-radius:2px;
    line-height: 28px;
    color: #02B2B5;
    cursor: pointer;
  }
  .xufei{
    width:56px;
    height:28px;
    /*background:rgba(2,178,181,1);*/
    border:1px solid #02B2B5;
    border-radius:2px;
    line-height: 28px;
    color: #02B2B5;
    cursor: pointer;
  }
  .shanchu{
    width:56px;
    height:28px;
    /*background:rgba(2,178,181,1);*/
    border:1px solid #FF0000;
    border-radius:2px;
    line-height: 28px;
    color: #FF0000;
    cursor: pointer;
  }
  .thirdDiv {
    width: 95.2%;
    /*height: 300px;*/
    margin: 50px auto 20px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
  .whiteDiv2{
    width: 80%;
    height: 600px;
    margin: 0 auto;
    background-color: white;
  }
  .whiteDiv2First{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #E5E5E5;
    position: relative;
  }
  .whiteDiv2FirstLogoDiv{
    height: 120px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .whiteDiv2FirstLogoDiv .whiteDiv2FirstLogoDivImg{
    width: 80px;
    height: 80px;
    border-radius:8px;
  }
  .whiteDiv2FirstLogoDivText{
    margin-left: 10px;
  }
  .whiteDiv2FirstLogoDivText p{
    color: #999999;
    font-size: 12px;
  }
  .whiteDiv2FirstLogoDivText p:nth-child(1){
    color: #333333;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .whiteDiv2FirstLogoDivText span{
    display: inline-block;
    width:86px;
    height:22px;
    background:rgba(254,140,142,1);
    border-radius:4px;
    font-size: 12px;
    color: white;
    text-align: center;
    line-height: 22px;
    font-weight: normal;
    margin-left: 5px;
  }
  .whiteDiv2Down{
    width:130px;
    height:46px;
    background:rgba(80,192,255,1);
    border-radius:10px;
    text-align: center;
    line-height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    position:absolute;
    right: 23%;
    cursor: pointer;
  }
  .whiteDiv2Down img{
    width: 20px;
    height: 18px;
    margin-right: 10px;
  }
  .whiteDiv2Xufei{
    width:130px;
    height:46px;
    background:rgba(254,177,63,1);
    border-radius:10px;
    text-align: center;
    line-height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    position:absolute;
    right: 3.6%;
    cursor: pointer;
  }
  .whiteDiv2Xufei img{
    width: 23px;
    height: 21px;
    margin-right: 10px;
  }
  .whiteDiv2First2{
    width: 90%;
    margin: 0 auto;
    position: relative;
    font-size: 14px;
  }
  .whiteDiv2First2{
    display: flex;
    padding-left: 20px;
    justify-content: center;
    position: relative;
    margin-top: 30px;
  }
  .whiteDiv2First2One{
    position: absolute;
    left: -3%;
  }
  .whiteDiv2First2Two{
    position: absolute;
    right: 7%;
  }

  .whiteDiv2First2Div{
    display: flex;
    color: #333333;
    margin-top: 35px;
  }
  .whiteDiv2First2P{
    width: 150px;
    text-align: right;
    color: #999999;
  }
  .whiteDiv2First2P2{
    margin-left: 15px;
  }
  .crumbs{
    width: 80%;
    margin: 50px auto 30px auto;
  }
  .greenColor{
    background-color:#02B2B5 ;
  }
  .redColor1{
    background-color:#FF0000 ;
  }
  .whiteDiv3{
    width: 80%;
    height: 600px;
    margin: 0 auto;
    background-color: white;
  }


  .selectFirst{
    width: 92%;
    height: 110px;
    margin: 30px auto 0 auto;
    border-bottom: 1px solid #E5E5E5;
    padding-left: 55px;
  }
  .selectFour{
    width: 92%;
    height: 110px;
    font-size: 16px;
    font-weight: bold;
    margin: 30px auto 0 auto;
    padding-left: 55px;
  }
  .selectFive{
    width: 92%;
    height: 90px;
    margin: 10px auto 0 auto;
    padding-left: 55px;
    display: flex;
  }
  .selectFirst .selectFirstTitle{
    font-size: 14px;
    font-family:Microsoft YaHei;
    font-weight:bold;
  }
  .selectFirstDiv{
    display: flex;
    margin-top: 15px;
  }
  .app_name{
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    margin-left: 10px;
  }
  .version_code{
    margin-left: 10px;
    margin-top: 6px;
  }
  .selectFirstDiv_small{
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    margin-top: 15px;
  }
  .selectFirstDiv_small p{
    margin-left: 10px;
  }
  .selectFirstDivMa{
    margin-left: 50px;
  }
  .selectThirdDiv{
    width:150px;
    height:44px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid rgba(220,220,220,1);
  }
  .selectThirdDiv img{
    width: 82px;
    height: 26px;
  }
  .seondGo{
    width:167px;
    height:50px;
    background:rgba(232,232,232,1);
    border-radius:2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #999999;
    cursor: pointer;
  }
  .seondNext{
    width:167px;
    height:50px;
    background:rgba(2,178,181,1);
    border-radius:2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #ffffff;
    margin-left: 20px;
    cursor: pointer;
  }
  .applogoDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .applogoDivFirst{
    color: #333333;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .logoImg{
    width:40px;
    height:40px;
    border-radius:8px;
  }
  .queOk{
    width: 80px;
    background-color: #06B2B6;
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
</style>
