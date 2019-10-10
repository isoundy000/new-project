<template>
    <div class="billInvest">
      <div class="firstDiv">
        <el-input
          class="seachInput"
          placeholder="根据应用名称搜索"
          prefix-icon="el-icon-search"
          v-model="input">
        </el-input>
        <el-select class="downSum" @change="allApp()"
                   v-model="appName" placeholder="订单状态">
          <el-option
            v-for="item in downSumOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd" :clearable=false
                    type="daterange" split-panels placeholder="请选择支付时间段" style="width: 232px;height: 40px"></DatePicker>
      </div>
      <div class="secondDiv">
        <el-table
          :data="tableData"
          stripe
          align="center"
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <el-table-column
            prop="order_sn"
            label="订单编号"
          >
          </el-table-column>
          <el-table-column
            prop="ctime_text"
            label="下单时间"
          >
          </el-table-column>
          <el-table-column
            prop="pay_time_text"
            label="支付时间"
            width="170"
          >
          </el-table-column>
          <el-table-column
            prop="pay_name"
            label="支付方式"
            width="170">
          </el-table-column>
          <el-table-column
            prop="account"
            label="充值金额"
          >
          </el-table-column>




          <el-table-column
            prop="pay_status"
            label="订单状态"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.pay_status=== 1" style="color: #43A047">充值成功</span>
              <span v-else-if="scope.row.pay_status=== 0" style="color: #999999">未支付</span>
              <span v-else-if="scope.row.pay_status=== 2" style="color: #FF0000">已失效</span>
            </template>
          </el-table-column>

        </el-table>

      </div>
      <div class="thirdDiv">
        <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
        <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="6" :current="current" :total=total />
      </div>
    </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL} from "../../api";
  import qs from 'qs'
    export default {
        name: "billInvest",
      data(){
        return{
          state:'',
          total:0,
          pageNumber:'',
          current:1,
          input:'',
          appName:'',
          value:'',
          starTime:'',
          endTime:'',
          downSumOptions: [
            {
              value: '充值成功',
            }, {
              value: '已失效',
            }, {
              value: '未支付',
            }],
          tableData: [

          ]
        }
      },
      methods:{
        order:function(){
          if(this.appName=='未支付'){
            this.state=0
          }else if(this.appName=='充值成功'){
            this.state=1
          }else if(this.appName=='已失效'){
            this.state=2
          }else if(this.appName==''){
            this.state=''
          }
          let data={
            keywords	:this.input,
            status:this.state,
            start:this.starTime,
            end:this.endTime,
            page_size:6
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/order/orderList',qs.stringify(data),config).then(res => {
            // console.log(res.data.data.list)
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/6))
          }, err => {
            // console.log(err)
          })
        },
        allApp(){
          this.order()
          // console.log(this.appName)
        },
        firstTime(a){
          // console.log(a)
          this.starTime=a[0]
          this.endTime=a[1]
          this.order()
        },
        /*上下页翻页*/
        indexChange(i){
          // console.log(i)
          let data={
            keywords:this.input,
            status:this.appName,
            start:this.starTime,
            end:this.endTime,
            page:i,
            page_size:6,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/order/orderList',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            // console.log(res.data.data.list)
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/6))
            this.tableData=res.data.data.list
          }, err => {
            // console.log(err)
          })
        },
        pageChange(s){
          // console.log(s)
        }
      },
      mounted(){
       this.order()
      }

    }
</script>

<style scoped>
  .billInvest{
    margin-top: 40px;


  }
  .firstDiv{
    display: flex;
    align-items: center;
  }
  .seachInput {
    width: 280px;
  }
  .downSum{
    width: 150px;
    margin-left: 17px;
  }
  .secondDiv{
    margin-top: 25px;
  }
  .thirdDiv {
    width: 100%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
</style>
