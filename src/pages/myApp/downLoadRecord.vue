<template>
  <div class="downLoadRecord">
    <div class="downLoadRecordDiv">
      <div class="secondDiv">
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <!--<el-table-column-->
            <!--prop="appName"-->
            <!--label="设备型号 "-->
          <!--&gt;-->
          <!--</el-table-column>-->
          <el-table-column
            prop="udid"
            label="UDID"
          >
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="访问时间"
          >
          </el-table-column>
          <el-table-column
            prop="update_time"
            label="下载时间"
          >
          </el-table-column>
          <!--<el-table-column-->
            <!--prop="signNumber"-->
            <!--label="IP地址">-->
          <!--</el-table-column>-->
          <el-table-column
            prop="tag"
            label="tag"
          >
          </el-table-column>
          <!--<el-table-column-->
            <!--prop="installNumber"-->
            <!--label="设备所在地区"-->
          <!--&gt;-->
          <!--</el-table-column>-->




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
        name: "downLoadRecord",
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
          axios.post(BASE_URL+'/api/app/appUpdateLog',qs.stringify(data),config).then(res => {
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
       // alert('详情页444面'+this.$route.query.id)
        let data={
          id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/downloadRecord',qs.stringify(data),config).then(res => {
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
  .downLoadRecord{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .downLoadRecordDiv{
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
