<template>
  <div class="downLoadRecord">
    <div class="downLoadRecordDiv">
      <div class="secondDiv">
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <el-table-column
            prop="appName"
            label="设备型号 "
          >
          </el-table-column>
          <el-table-column
            prop="versionNumber"
            label="UDID"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="访问时间"
            width="160"
          >
          </el-table-column>
          <el-table-column
            prop="serviceType"
            label="下载时间"
            width="160"
          >
          </el-table-column>
          <el-table-column
            prop="servicePrize"
            label="过期时间"
          >
          </el-table-column>
          <el-table-column
            prop="signNumber"
            label="IP地址">
          </el-table-column>
          <el-table-column
            prop="installNumber"
            label="AppleID"
          >
          </el-table-column>
          <el-table-column
            prop="installNumber"
            label="设备所在地区"
          >
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
        name: "downLoadRecord",
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
