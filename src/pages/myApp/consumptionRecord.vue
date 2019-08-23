<template>
  <div class="consumptionRecord">
    <div class="consumptionRecordDiv">
      <div class="secondDiv">
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <el-table-column
            prop="appName"
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
            width="160"
          >
          </el-table-column>
          <el-table-column
            prop="end_time"
            label="结束时间 "
            width="160"
          >
          </el-table-column>
          <el-table-column
            prop="servicePrize"
            label="服务名称"
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
            prop="status"
            label="服务状态"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.status=== 1" style="color: #43A047">进行中</span>
              <span v-else-if="scope.row.state=== 0" style="color: #999999">已结束</span>
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
  import qs from 'qs'
    export default {
        name: "consumptionRecord",
      data(){
        return{
          total:0,
          pageNumber:'',
          current:1,
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
            page_size:4,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post('https://ios.yoyoacg.com/api/app/appUpdateLog',qs.stringify(data),config).then(res => {
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
        }
      },
      mounted(){
        alert('详情页333面'+this.$route.query.id)
        // alert('详情页222面'+this.$route.query.id)
        // alert('版本记录'+this.$route.query.id)
        //
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post('https://ios.yoyoacg.com/api/app/appPayRecord',qs.stringify(data),config).then(res => {
          console.log(res.data.data.list)
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
  .consumptionRecord{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .consumptionRecord{
    width: 93%;
    height: 600px;
    margin: 30px auto 0 auto;

  }
  .thirdDiv {
    width:100%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
</style>
