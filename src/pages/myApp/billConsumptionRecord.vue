<template>
    <div class="billConsumptionRecord">
      <div class="firstDiv">
        <el-input
          class="seachInput"
          placeholder="根据应用名称搜索"
          prefix-icon="el-icon-search"
          v-model="input"
          @change="seachInput">
        </el-input>
        <el-select class="downSum" @change="allApp()"
                   v-model="appName" placeholder="服务状态">
          <el-option
            v-for="item in downSumOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd" :clearable=false
                    type="daterange" split-panels placeholder="请选择服务时间段" style="width: 232px;height: 40px"></DatePicker>
      </div>
      <div class="secondDiv">
        <el-table
          :data="tableData"
          stripe
          align="center"
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <el-table-column
            prop="id"
            label="订单编号"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="应用名称"
           >
          </el-table-column>
          <el-table-column
            prop="start_time"
            label="开始时间"
           >
          </el-table-column>
          <el-table-column
            prop="end_time"
            label="结束时间"
            >
          </el-table-column>
          <el-table-column
            prop="download_num"
            label="设备安装数量">
          </el-table-column>
          <el-table-column
            prop="money"
            label="消费金额"
            >
          </el-table-column>


          <el-table-column
            prop="state"
            label="服务状态"
           >
            <template slot-scope="scope">
              <span v-if="scope.row.status=== 1" style="color: #43A047">进行中</span>
              <span v-else-if="scope.row.status===0" style="color: #999999">已完成</span>
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
  import {BASE_URL} from "../../api";
  import axios from 'axios'
  import qs from 'qs'
    export default {
        name: "billConsumptionRecord",
      data(){
          return{
            total:0,
            pageNumber:'',
            current:1,
            input:'',
            appName:'',
            value:'',
            downSumOptions: [
              {
                value: '进行中',
              }, {
                value: '已完成',
              }],
            tableData: [

            ]
          }
      },
      methods:{
        /*上下页翻页*/
        indexChange(i){
          console.log(i)
          let data={
            keywords:this.input,
            page:i,
            page_size:6,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appPayRecord',qs.stringify(data),config).then(res => {
            console.log(res.data)
            console.log(res.data.data.list)
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/4))
            this.tableData=res.data.data.list
          }, err => {
            console.log(err)
          })
        },
        pageChange(s){
          console.log(s)
        },
        allApp(){
          var state;
          if(this.appName=='进行中'){
            state=1
          }else if(this.appName=='已完成'){
            state=0
          }
          let data={
            status:state,
            page_size:6
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appPayRecord',qs.stringify(data),config).then(res => {
            console.log(res.data.data)
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/4))
          }, err => {
            console.log(err)
          })
        },
        firstTime(value){
          let data={
            start:value[0],
            end:value[1]
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appPayRecord',qs.stringify(data),config).then(res => {
            console.log(res.data.data)
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/4))
          }, err => {
            console.log(err)
          })
        },
        seachInput(){
          let data={
            name:this.input,
            page_size:6
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appPayRecord',qs.stringify(data),config).then(res => {
            console.log(res.data.data)
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/4))
          }, err => {
            console.log(err)
          })
        }

      },
      mounted(){
        let data={
          id:'',
          page:'',
          page_size:6
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appPayRecord',qs.stringify(data),config).then(res => {
          console.log(res.data.data)
          this.tableData=res.data.data.list
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/4))

        }, err => {
          console.log(err)
        })
      }
    }
</script>

<style scoped>
  .billConsumptionRecord{
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
