<template>
    <div class="versionRecord">
      <div class="versionRecordDiv">
        <!--<div class="firstDiv">-->
          <!--<div class="update">更新应用</div>-->
        <!--</div>-->
        <div class="secondDiv">
          <el-table
            :data="tableData"
            stripe
            :header-cell-style="{background:'#e0f2fd'}"
          >
            <el-table-column
              prop="name"
              label="应用名称"
              width="160"

            >
            </el-table-column>
            <el-table-column
              prop="version_code"
              label="版本号"
            >
            </el-table-column>
            <el-table-column
              prop="path"
              label="安装地址"
              width="160"
            >
            </el-table-column>
            <!--<el-table-column-->
              <!--prop=""-->
              <!--label="服务类型"-->
              <!--width="160"-->
              <!--&gt;-->
            <!--</el-table-column>-->
            <el-table-column
              prop=""
              label="服务单价"
            >
            </el-table-column>
            <!--<el-table-column-->
              <!--prop=""-->
              <!--label="签名次数">-->
            <!--</el-table-column>-->
            <el-table-column
              prop=""
              label="安装量"
            >
            </el-table-column>
            <el-table-column
              prop=""
              label="下载量"
            >
            </el-table-column>
            <el-table-column
              prop="create_time"
              label="更新时间"
            >
            </el-table-column>

            <el-table-column
              prop=""
              label="状态"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.name=== '分发中'" style="color: #43A047">{{scope.row.name}}</span>
                <span v-else-if="scope.row.name=== '已下架'" style="color: #999999">{{scope.row.name}}</span>
                <span v-else-if="scope.row.name=== '已删除'" style="color: #FF0000">{{scope.row.name}}</span>
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
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
    export default {
        name: "versionRecord",
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
       // alert('详情页333面'+this.$route.query.id)
        // alert('详情页222面'+this.$route.query.id)
       // alert('版本记录'+this.$route.query.id)
        //
        let data={
            id:this.$route.query.id
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appUpdateLog',qs.stringify(data),config).then(res => {
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
  .versionRecord{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .versionRecordDiv{
    width: 93%;
    height: 600px;
    margin: 30px auto 0 auto;

  }
  .firstDiv{
    height: 70px;
    position: relative;
  }
  .update{
    width: 150px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    color: white;
    background-color: #06B2B6;
    border-radius: 4px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .thirdDiv {
    width:100%;
    /*height: 300px;*/
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
</style>
