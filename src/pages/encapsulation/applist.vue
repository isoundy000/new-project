<template>
    <div class="applist">
      <div class="whiteDiv">
        <div class="whiteDivBig">
          <el-select class="downSum" @change="allApp()"
                     v-model="appName" placeholder="服务状态">
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
            align="center"
            :header-cell-style="{background:'#e0f2fd'}"
          >
            <!--<el-table-column-->
            <!--prop="id"-->
            <!--label="订单编号"-->
            <!--&gt;-->
            <!--</el-table-column>-->
            <el-table-column
              prop="name"
              label="平台"
              align="center"
            >
            </el-table-column>
            <!--<el-table-column-->
            <!--prop="start_time"-->
            <!--label="开始时间"-->
            <!--&gt;-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--prop="end_time"-->
            <!--label="结束时间"-->
            <!--&gt;-->
            <!--</el-table-column>-->
            <el-table-column
              prop="appname"
              label="应用名称"
              width="160"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="version"
              label="版本"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="downUrl"
              label="下载链接"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="time"
              label="到期时间"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="caozuoL"
              label="操作"
              align="center"
              width="260"
            >

              <template slot-scope="scope" class="caozuo">
                <div class="chakan" @click.stop="chakanClick(scope.row,tableData[scope.$index].id)">查看</div>
                <div class="xufei" @click.stop="xufeiClick(scope.row,tableData[scope.$index].id)">续费</div>
                <div class="shanchu" @click.stop="shanchuClick(scope.row,tableData[scope.$index].id)">删除</div>
              </template>

            </el-table-column>

          </el-table>

        </div>
        <div class="thirdDiv">
          <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
          <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="6" :current="current" :total=total />
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "applist",
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
                value: '已完成',
              }, {
                value: '补签',
              }],
            tableData: [
              {
                name:'iOS',
                icon:'',
                appname:'公务员考试',
                version:'1.0',
                downUrl:'http://www.iOSapp88.com',
                ervalue:'',
                time:'2019-10-01 18:51:15',
                state:'封装中'


              }
            ],
          }
      },
      methods:{
        chakanClick(){

        },
        xufeiClick(){

        },
        shanchuClick(){

        },
        indexChange(){

        },
        pageChange(){

        },
        seachInput(){

        },
        allApp(){

        },

      }
    }
</script>

<style scoped>
  .applist{
    width: 100%;

    background-color: #f3f6f9;
  }
  .whiteDiv{
    width: 78%;
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
  }
  .xufei{
    width:56px;
    height:28px;
    /*background:rgba(2,178,181,1);*/
    border:1px solid #02B2B5;
    border-radius:2px;
    line-height: 28px;
    color: #02B2B5;
  }
  .shanchu{
    width:56px;
    height:28px;
    /*background:rgba(2,178,181,1);*/
    border:1px solid #FF0000;
    border-radius:2px;
    line-height: 28px;
    color: #FF0000;
  }
  .thirdDiv {
    width: 95.2%;
    /*height: 300px;*/
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
</style>
