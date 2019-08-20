<template>
    <div class="versionRecord">
      <div class="versionRecordDiv">
        <div class="firstDiv">
          <div class="update">更新应用</div>
        </div>
        <div class="secondDiv">
          <el-table
            :data="tableData"
            stripe
            :header-cell-style="{background:'#e0f2fd'}"
          >
            <el-table-column
              prop="appName"
              label="应用名称"
              width="160"

            >
            </el-table-column>
            <el-table-column
              prop="versionNumber"
              label="版本号"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="安装地址"
              width="160"
            >
            </el-table-column>
            <el-table-column
              prop="serviceType"
              label="服务类型"
              width="160"
              >
            </el-table-column>
            <el-table-column
              prop="servicePrize"
              label="服务单价"
            >
            </el-table-column>
            <el-table-column
              prop="signNumber"
              label="签名次数">
            </el-table-column>
            <el-table-column
              prop="installNumber"
              label="安装量"
            >
            </el-table-column>
            <el-table-column
              prop="installNumber"
              label="下载量"
            >
            </el-table-column>
            <el-table-column
              prop="installNumber"
              label="更新时间"
            >
            </el-table-column>

            <el-table-column
              prop="state"
              label="状态"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.state=== '分发中'" style="color: #43A047">{{scope.row.state}}</span>
                <span v-else-if="scope.row.state=== '已下架'" style="color: #999999">{{scope.row.state}}</span>
                <span v-else-if="scope.row.state=== '已删除'" style="color: #FF0000">{{scope.row.state}}</span>
              </template>
            </el-table-column>

          </el-table>

        </div>
        <div class="thirdDiv">
          <Page :page-size="4" :current="3" :total="3" show-total/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "versionRecord",
      data(){
          return{
            tableData: [
              {
                appName: '201709166393',
                versionNumber: '应用A',
                address: '2016-10-01  18:51:15',
                serviceType: '2016-10-01  18:51:15',
                servicePrize: '超级签名',
                signNumber: '88888',
                installNumber: '￥200.00',

                state: '分发中',

              },
              {
                appName: '201709166393',
                versionNumber: '应用A',
                address: '2016-10-01  18:51:15',
                serviceType: '2016-10-01  18:51:15',
                servicePrize: '超级签名',
                signNumber: '88888',
                installNumber: '￥200.00',

                state: '分发中',
              },
              {
                appName: '201709166393',
                versionNumber: '应用A',
                address: '2016-10-01  18:51:15',
                serviceType: '2016-10-01  18:51:15',
                servicePrize: '超级签名',
                signNumber: '88888',
                installNumber: '￥200.00',

                state: '分发中',
              },
              {
                appName: '201709166393',
                versionNumber: '应用A',
                address: '2016-10-01  18:51:15',
                serviceType: '2016-10-01  18:51:15',
                servicePrize: '超级签名',
                signNumber: '88888',
                installNumber: '￥200.00',

                state: '分发中',
              }
            ]
          }
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
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
</style>
