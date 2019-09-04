<template>
    <div class="messagePush">
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
                  v-model="pushTitle">
                </el-input>
              </div>
          <div class="maskContentOne">
            <p class="text">推送副标题</p>
            <el-input
              class="firstInput"
              v-model="fupushTitle">
            </el-input>
          </div>
          <div class="maskContentOne">
            <p class="text">推送内容</p>
            <el-input
              class="firstInput"
              v-model="pushContent">
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
        <div class="first">
          <div class="btn" @click="plan">创建推送计划</div>
          <div class="time">
            <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd" :clearable=false
                        type="daterange" split-panels placeholder="请选择时间段" style="width: 280px;height: 40px;margin-left: 30px"></DatePicker>
          </div>

        </div>
      <div class="consumptionRecordDiv">
        <div class="secondDiv">
          <el-table
            :data="tableData"
            stripe
            :header-cell-style="{background:'#e0f2fd'}"
          >
            <!--<el-table-column-->
            <!--prop="id"-->
            <!--label="订单编号"-->
            <!--&gt;-->
            <!--</el-table-column>-->
            <el-table-column
              prop="name"
              label="推送时间"
            >
            </el-table-column>
            <!--<el-table-column-->
            <!--prop="start_time"-->
            <!--label="开始时间"-->
            <!--width="160"-->
            <!--&gt;-->
            <!--</el-table-column>-->
            <el-table-column
              prop="create_time"
              label="推送设备数"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="udid"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="money"
              label="操作"
            >
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
    export default {
        name: "messagePush",
      data(){
          return{
            timeShow:false,
            value1: '', //日历时间选择值
            choose:true,
            choose1:true,
            choose2:true,
            pushTitle:'',
            fupushTitle:'',
            pushContent:'',
            mask:false,
            value:'', //日历选择值
            total:0,
            pageNumber:'',
            current:1,
            tableData: [

            ]
          }
      },
      methods:{
          /*日历选择*/
        firstTime(){
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
        plan(){
          this.mask=true
        },
        close(){
          this.mask=false
        },
        dan2(){
          this.choose=true
          this.choose1=true
          this.timeShow=false
        },
        dan3(){
          this.choose1=false
          this.choose=false
          this.timeShow=true
        },
        ok(){
          this.mask=false
        },
        cancel(){
          this.mask=false
        },
        /*日历时间选择*/
        chooseTimeRange(t) {
          console.log(t);
        }
      }
    }
</script>

<style scoped>
.messagePush{
  width: 100%;
  height: 500px;
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
  position: fixed;
  background: rgba(2, 2, 2, 0.5);
  z-index: 9;
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
    margin-top: 120px;
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
  .text{
    width: 100px;
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
</style>
