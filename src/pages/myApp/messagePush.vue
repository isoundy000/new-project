<template>
    <div class="messagePush">
      <!--新增-->
      <div class="mask" v-show="mask">
        <div class="maskTitle" style="background-image: url('../../../static/image/superSignature/tuisongbg.png')">
            <p>新增</p>
            <img @click="close" class="guanbi" src="../../../static/image/superSignature/guan.png" alt="">
        </div>
        <div class="maskContent">
              <div class="maskContentOne">
                <p class="text">推送标题</p>
                <el-input
                  class="firstInput"
                  v-model="pushTitle"
                  maxlength="15"
                  placeholder="0-15个字符，中英文数字特殊字符"
                >
                </el-input>
              </div>
          <div class="maskContentOne">
            <p class="text">推送副标题</p>
            <el-input
              class="firstInput"
              v-model="fupushTitle"
              maxlength="15"
              placeholder="0-15个字符，中英文数字特殊字符"
            >
            </el-input>
          </div>
          <div class="maskContentOne">
            <p class="text">推送内容</p>
            <el-input
              class="firstInput"
              v-model="pushContent"
              placeholder="内容过多可能导致信息显示不全"
            >
            </el-input>
          </div>
          <div class="maskContenttime">
            <p class="text">推送时间</p>
            <div class="liji">
              <img  v-if="choose" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img @click="dan2" v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>立即推送</p>
            </div>
            <div class="dingshi">
              <img @click="dan3" v-if="choose1" src="../../../static/image/superSignature/danweixuan.png" alt="">
              <img  v-else src="../../../static/image/superSignature/danxuan.png" alt="">
              <p>定时推送</p>
            </div>

          </div>
          <div class="block" v-if="timeShow">
            <el-date-picker
              v-model="value1"
              @change="chooseTimeRange"
              value-format="yyyy-MM-dd hh:mm:ss"
              align="bottom"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          <div class="maskContentpeople ">
            <p class="text">推送人群</p>
            <div class="liji">
              <img  v-if="choose2" src="../../../static/image/superSignature/danxuan.png" alt="">
              <img  v-else src="../../../static/image/superSignature/danweixuan.png" alt="">
              <p>全部用户</p>
            </div>
            <!--<div class="dingshi">-->
              <!--<img @click="dan3" v-if="choose1" src="../../../static/image/superSignature/danweixuan.png" alt="">-->
              <!--<img  v-else src="../../../static/image/superSignature/danxuan.png" alt="">-->
              <!--<p>定时推送</p>-->
            <!--</div>-->
          </div>
          <div class="footer">
            <div @click="ok" class="ok">确定推送</div>
            <div @click="cancel" class="cancel">取消</div>
          </div>
        </div>

      </div>
      <!--查看-->
      <div class="mask" v-show="mask1">
        <div class="maskTitle newmaskTitle" style="background-image: url('../../../static/image/superSignature/tuisongbg.png')">
          <p>查看</p>
          <img @click="close" class="guanbi" src="../../../static/image/superSignature/guan.png" alt="">
        </div>
        <div class="maskContent newmaskContent">
          <div class="maskContentOne">
            <p class="text">推送标题</p>
            <p class="textTwo">sss</p>
          </div>
          <div class="maskContentOne">
            <p class="text">推送副标题</p>
            <p class="textTwo">sss</p>
          </div>
          <div class="maskContentOne">
            <p class="text">推送内容</p>
            <p class="textTwo">腐蚀毒粉发第三方水电费收到发的 辅导书发生的发生的防守对方说的话酒店客房间好的是你犯了忌讳哦发收到分手的距离耗费 </p>
          </div>
          <div class="maskContentOne">
            <p class="text">推送时间</p>
            <p class="textTwo">sss</p>
          </div>

          <div class="maskContentOne ">
            <p class="text">推送人群</p>
            <p class="textTwo">sss</p>
          </div>

        </div>

      </div>
      <!--提醒上传证书先-->
      <div class="mask" v-show="mask2">
        <div class="newmask2Content">
          <img src="../../../static/image/superSignature/newtishi.png" alt="">
          <p>请先上传证书，在创建推送计划</p>
          <div class="tishiBtn">
            <div @click="zhengUpload">上传证书</div>
            <div @click="zhengCancel">取消</div>
          </div>
        </div>

      </div>
      <!--推送方式配置-->
      <div class="mask" v-show="mask4">
        <div class="maskTitle newmask4Title" style="background-image: url('../../../static/image/superSignature/tuisongbg.png')">
          <p>推送方式配置</p>
          <img @click="close" class="guanbi" src="../../../static/image/superSignature/guan.png" alt="">
        </div>
        <div class="newmask4Content">

            <div class="maskContentOne2">
              <p class="mask4text">Bundle ID</p>
              <p class="textTwo">AD.iOSapp.dwad</p>
            </div>
            <div class="maskContentOne2">
              <p class="mask4text">鉴权方式</p>
              <p class="textTwo">证书</p>
            </div>
            <div class="maskContentOne2">
              <p class="mask4text">证书配置</p>
              <el-upload
                :on-success="success"
                class="upload-demo"
                accept=".p12"
                action="//ios.yoyoacg.com/api/common/upload"
                :on-change="handleChange"
              >
                <div  class="uploadBtn">
                  <img src="../../../static/image/survey/shangchuanicon.png" alt="">
                  <p>立即上传</p>
                </div>
                <div slot="tip" class="el-upload__tip">只能上传.p12文件</div>
              </el-upload>
            </div>
            <div class="maskContentOne2">
              <p  class="mask4text">证书密码</p>
              <el-input
                class="secondInput"
                v-model="zhengPass"
              >
              </el-input>
            </div>
          <div class="yanz" @click="yanBtn">
            <p>验证</p>
          </div>



        </div>
      </div>
      <!--安装指南-->
      <div class="zhinanmask" v-show="mask3" @click="zhinan">
        <img src="../../../static/image/superSignature/zhinan.png" alt="">
      </div>
      <div class="first">
          <div class="btn" @click="plan">创建推送计划</div>
          <div v-show="isTui" class="btn1" @click="planSet">推送方式配置</div>
          <img @click="bangzhu" class="bangzhu" src="../../../static/image/superSignature/bangzhu.png" alt="">
          <div class="time">
            <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd" :clearable=false
                        type="daterange" split-panels placeholder="请选择时间段" style="width: 280px;height: 40px;margin-left: 30px"></DatePicker>
          </div>

        </div>

      <div class="consumptionRecordDiv">
        <div class="secondDiv">
          <el-table
            @row-click="tableTr"
            :data="tableData"
            stripe
            :header-cell-style="{background:'#e0f2fd'}"
          >
            <el-table-column
              prop="push_time"
              label="推送时间"
              align="center"
            >
            </el-table-column>

            <el-table-column
              prop="equipment_num"
              label="推送设备数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              align="center"
              label="状态">
              <template slot-scope="scope">
                <span v-if="scope.row.status=== 1" style="color: #43A047">已推送</span>
                <span v-else-if="scope.row.status=== 2" style="color: #999999">未推送</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="money"
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                <div class="caodiv">
                  <div class="chakan" @click="chakanClick(scope.row,tableData[scope.$index].id)">查看</div>
                  <div class="chakan" @click.stop="deleteClick(scope.row,tableData[scope.$index].id)">删除</div>
                </div>

              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="thirdDiv">
          <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
          <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="4" :current="current" :total=total />
        </div>
      </div>
    </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL} from "../../api";
  import qs from 'qs'
    export default {
        name: "messagePush",
      data(){
          return{
            cert_url:'',
            typeState:1,
            riTime:'',
            isHave:'',
            startTime:'',
            endTime:'',
            zhengPass:'',
            isTui:false,
            timeShow:false,
            value1: '', //日历时间选择值
            choose:true,
            choose1:true,
            choose2:true,
            pushTitle:'',
            fupushTitle:'',
            pushContent:'',
            mask:false,
            mask1:false,
            mask2:false,
            mask3:false,
            mask4:false,
            value:'', //日历选择值
            total:0,
            pageNumber:'',
            current:1,
            tableData: [

            ]
          }
      },
      methods:{
          /*密码验证按钮*/
        yanBtn(){
          this.mask4=false
          let data = {
            app_id: this.$route.query.id,
            cert_url:this.cert_url,
            password:this.zhengPass
          }
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/pushCert', qs.stringify(data), config).then(res => {
            console.log(res.data.data)

          }, err => {
            console.log(err)
          })



        },
        /*指南问号的mask点击*/
        zhinan(){
          this.mask3=false
        },
        /*指南问号*/
        bangzhu(){
          this.mask3=true
        },
        /*上传证书按钮*/
        zhengUpload(){
          this.mask2=false
          this.mask4=true
        },
        /*上传证书里面的取消按钮*/
        zhengCancel(){
          this.mask2=false
        },
        /*表格每一行的点击事件*/
        tableTr(row){
            this.mask1=true
        },
        /*表格里面的查看*/
        chakanClick(row,id){
          this.mask1=true
          let data = {
            id: id,
            type:2
          }
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/push/pushHandle', qs.stringify(data), config).then(res => {
            console.log(res.data.data)

          }, err => {
            console.log(err)
          })
        },
        /*表格里面的删除*/
        deleteClick(row,id){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let data = {
              id: id,
              type:1
            }
            let config = {
              headers: {'token': localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/push/pushHandle', qs.stringify(data), config).then(res => {
              console.log(res.data.data)
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
              this.tableData=res.data.data.list
            }, err => {
              console.log(err)
            })
          }).catch(() => {

          });
        },
          /*日历选择*/
        firstTime(){
          this.startTime=this.value[0]
          this.endTime=this.value[1]
          console.log(this.value[0])
          console.log(this.value[1])
        },
        /*上下页翻页*/
        indexChange(i){
          console.log(i)
          // let data={
          //   keywords:this.input,
          //   page:i,
          //   page_size:4,
          // }
          // let config = {
          //   headers:{'token':localStorage.getItem('Authorization')}
          // };
          // axios.post(BASE_URL+'/api/app/resign_free',qs.stringify(data),config).then(res => {
          //   console.log(res.data)
          //   console.log(res.data.data.list)
          //   this.total=res.data.data.total
          //   this.pageNumber=parseInt(Math.ceil(Number(this.total)/4))
          //   this.tableData=res.data.data.list
          // }, err => {
          //   console.log(err)
          // })
        },
        pageChange(s){
          console.log(s)
        },
        /*创建推送计划*/
        plan(){
          if(this.isHave==1){
            this.mask=true
          }else{
            this.mask2=true
          }

        },
        /*推送方式配置*/
        planSet(){
          this.mask4=true
        },
        /*关闭按钮*/
        close(){
          this.mask=false
          this.mask1=false
          this.mask4=false
        },

        dan2(){
          this.choose=true
          this.choose1=true
          this.timeShow=false
          this.typeState=1
        },
        dan3(){
          this.choose1=false
          this.choose=false
          this.timeShow=true
          this.typeState=0
        },
        /*新增确定推送按钮*/
        ok(){
          this.mask=false
          let data = {
            app_id: this.$route.query.id,
            title:this.pushTitle,
            subtitle:this.fupushTitle,
            msg:this.pushContent,
            now:this.typeState,
            time:this.riTime
          }
          let config = {
            headers: {'token': localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/push/pushLog', qs.stringify(data), config).then(res => {
            console.log(res.data.data)
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
            this.tableData=res.data.data.list

            if(res.data.data.push_type==1){
              this.isTui=true
            }else{
              this.isTui=false
            }
          }, err => {
            console.log(err)
          })
        },
        /*新增确定取消按钮*/
        cancel(){
          this.mask=false
        },
        /*日历时间选择*/
        chooseTimeRange(t) {
          this.riTime=t
          console.log(t);
        },
        /*上传p12文件成功返回的参数*/
        success(response, file, fileList) {
          console.log(response.data.url)
          this.cert_url=response.data.url
          // this.disInput=false
          // console.log(file)
          // this.display_name=file.response.data.app.display_name
          // this.path=file.response.data.url
          // this.icon=file.response.data.domain+file.response.data.app.icon
          // this.ipa_data_bak=file.response.data.app.ipa_data_bak
          // this.package_name=file.response.data.app.package_name
          // this.version_code=file.response.data.app.version_code
          // this.version_name=file.response.data.app.version_name
          // this.bundle_name=file.response.data.app.bundle_name
          // this.filesize=file.response.data.app.filesize
          // this.thirdInput=this.package_name
          // this.thirdInput1=this.display_name
          // this.thirdInput2=this.version_code
          // this.icon1=file.response.data.app.icon
          // this.img.push(file.response.data.app.img)
          // console.log(this.img)
          console.log('图片上传成功的时候的img集合',file.response.data.app.img)
        },
        /*上传文件*/
        handleChange(file, fileList) {
          this.fileList = fileList.slice(-3);
        },

      },
      mounted(){
        let data = {
          app_id: this.$route.query.id,
          start:this.startTime,
          end:this.endTime,
          page:1,
          page_size:5
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/push/pushLog', qs.stringify(data), config).then(res => {
          console.log(res.data.data)
          this.isHave=res.data.data.cert_path
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/5))
          this.tableData=res.data.data.list

          if(res.data.data.push_type==1){
              this.isTui=true
          }else{
              this.isTui=false
          }

        }, err => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
.messagePush{
  width: 100%;
  height: 100%;
  /*border: 1px solid black;*/
}
  .first{
    width: 93%;
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
   margin: 20px auto 0 auto;
  }
  .btn{
    width: 160px;
    height: 48px;
    background-color: #06B2B6;
    border-radius: 4px;
    color: white;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    cursor: pointer;
  }
.btn1{
  width: 160px;
  height: 48px;
  background-color: #EEEEEE;
  border-radius: 4px;
  color: #333333;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
}
  .time{
    position: absolute;
    right: 0;
  }
.consumptionRecordDiv{
  width: 93%;
  height: 600px;
  margin: 5px auto 0 auto;

}
.thirdDiv {
  width:100%;
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
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: rgba(2, 2, 2, 0.5);
  z-index: 9;
  top: 0;
  left: 0;
}
.zhinanmask{
  width: 100%;
  height:auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  background: rgba(2, 2, 2, 0.5);
  z-index: 9999;
  top: 0;
  left: 0;
}
  .maskTitle{
    width: 750px;
    height: 46px;
    background-size: 750px 46px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 46px;
    font-size: 22px;
    color: white;
    position: relative;
  }
  .guanbi{
    position: absolute;
    right: 22px;
    top:25%;
  }
  .maskContent{
    width: 750px;
    height: 504px;
    background-color: white;
  }
  .firstInput{
    width: 500px;
    margin-left: 20px;
  }
  .secondInput{
    width: 200px;
    margin-left: 20px;
  }
  .text{
    width: 100px;
    text-align: right;
    font-size: 16px;
    color: #666666;
    margin-left: 72px;
  }
  .mask4text{
    width: 120px;
    text-align: right;
    font-size: 16px;
    color: #666666;
    margin-left: 72px;
  }
  .maskContentOne{
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 26px;
    position: relative;
  }
  .maskContentOne2{
    width: 600px;
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 26px;
    position: relative;
  }
  .maskContenttime{
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    position: relative;
  }
  .maskContentpeople{
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    position: relative;
  }
  .liji,.dingshi{
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 16px;
  }
.liji p,.dingshi p{
  margin-left: 10px;
  color: #333333;
}
  .block{
    /*position: absolute;*/
    /*left: 25%;*/
    /*top: 95%;*/
    /*z-index: 99;*/
    margin-left: 190px;
  }
  .footer{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .ok{
    width: 144px;
    height: 50px;
    background-color: #06B2B6;
    border-radius: 2px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
  }
.cancel{
  width: 144px;
  height: 50px;
  background-color: #fff;
  border-radius: 2px;
  text-align: center;
  line-height: 50px;
  color: black;
  font-size: 16px;
  border:1px solid rgba(220,220,220,1);
  margin-left: 10px;
  cursor: pointer;
}
.caodiv{
  display: flex !important;
  justify-content: space-evenly !important;
}
  .chakan{
    width:60px;
    height:30px;
    line-height: 30px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(229,229,229,1);
    border-radius:2px;
    cursor: pointer;
  }
  .newmaskTitle{
    width: 550px;
    height: 46px;
    background-size: 550px 46px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 46px;
    font-size: 22px;
    color: white;
    position: relative;
  }
.newmaskContent{
  width: 550px;
  height: 404px;
  background-color: white;
}
  .textTwo{
    width: 320px;
    margin-left: 30px;
    font-size: 16px;
    text-align: justify;
    text-justify: inter-ideograph;
  }
  .newmask2Content{
    width:660px;
    height:350px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .newmask2Content img{
    width: 100px;
    height: 100px;
  }
  .newmask2Content p{
    font-size: 18px;
    margin-top: 15px;
  }
  .tishiBtn{
    width: 100%;
    display: flex;
    margin-top: 50px;
    color: white;
    justify-content: space-evenly;
  }
  .tishiBtn div:nth-child(1){
    width:160px;
    height:50px;
    line-height: 50px;
    background:rgba(6,178,182,1);
    border:1px solid rgba(6,178,182,1);
    border-radius:4px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
  }
.tishiBtn div:nth-child(2){
  width:160px;
  height:50px;
  line-height: 50px;
  background:rgba(210,210,210,1);
  border-radius:4px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
}
  .bangzhu{
    width: 22px;
    height: 22px;
    margin-left: 15px;
  }
  .newmask4Title{
    width: 660px;
    height: 46px;
    background-size: 660px 46px;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 46px;
    font-size: 22px;
    color: white;
    position: relative;
  }
  .newmask4Content{
    width:660px;
    height:450px;
    background:rgba(255,255,255,1);
    border-radius:4px;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
.uploadBtn {
  width: 100px;
  height: 30px;
  background-color: #14BEC8;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 13.5px;
  color: white;
  margin: 10px auto 0 auto;
  cursor: pointer;
}

.uploadBtn img {
  width: 16px;
  height: 20px;
  margin-right: 10px;
}
  .upload-demo{
    margin-left: 15px;
  }
  .yanz{
    width:202px;
    height:50px;
    line-height: 50px;
    text-align: center;
    background:rgba(20,190,200,1);
    border-radius:6px;
    font-size: 18px;
    color: white;
    margin-top: 35px;
    cursor: pointer;
  }
</style>
