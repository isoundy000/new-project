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
          :header-cell-style="{background:'#e0f2fd'}"
        >
          <el-table-column
            prop="appName"
            label="订单编号"
          >
          </el-table-column>
          <el-table-column
            prop="versionNumber"
            label="下单时间"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="支付时间"
            width="170"
          >
          </el-table-column>
          <el-table-column
            prop="serviceType"
            label="支付方式"
            width="170">
          </el-table-column>
          <el-table-column
            prop="servicePrize"
            label="充值金额"
          >
          </el-table-column>




          <el-table-column
            prop="state"
            label="订单状态"
          >
            <template slot-scope="scope">
              <span v-if="scope.row.state=== '充值成功'" style="color: #43A047">{{scope.row.state}}</span>
              <span v-else-if="scope.row.state=== '已失效'" style="color: #999999">{{scope.row.state}}</span>
              <span v-else-if="scope.row.state=== '未付款'" style="color: #FF0000">{{scope.row.state}}</span>
            </template>
          </el-table-column>

        </el-table>

      </div>
      <div class="thirdDiv">
        <Page :page-size="4" :current="3" :total="3" show-total/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "billInvest",
      data(){
        return{
          input:'',
          appName:'',
          value:'',
          downSumOptions: [
            {
              value: '充值成功',
            }, {
              value: '已失效',
            }, {
              value: '未付款',
            }],
          tableData: [
            {
              appName: '201709166393',
              versionNumber: '2016-10-01 18:51:16',
              address: '2016-10-01  18:52:15',
              serviceType: '支付宝',
              servicePrize: '￥200.00',
              state: '充值成功',
            },
            {
              appName: '201709166393',
              versionNumber: '2016-10-01 18:51:16',
              address: '2016-10-01  18:52:15',
              serviceType: '支付宝',
              servicePrize: '￥200.00',
              state: '已失效',
            },
            {
              appName: '201709166393',
              versionNumber: '2016-10-01 18:51:16',
              address: '2016-10-01  18:52:15',
              serviceType: '支付宝',
              servicePrize: '￥200.00',
              state: '未付款',
            },
            {
              appName: '201709166393',
              versionNumber: '2016-10-01 18:51:16',
              address: '2016-10-01  18:52:15',
              serviceType: '支付宝',
              servicePrize: '￥200.00',
              state: '充值成功',
            }
          ]
        }
      },
      methods:{
        allApp(){
          console.log(this.appName)
        },
        firstTime(a){
          console.log(a)
        }
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
    width: 78%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
</style>
