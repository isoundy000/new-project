<template>
  <div class="appManagement">

<!--下载链接弹出层-->
    <div @click="mask" class="mask" v-if="isMask">
      <div class="maskDiv" @click.stop="ss">
        <div class="downUrl">
          <p>下载链接</p>
        </div>
        <div class="appManagementSmall">
          <div class="appManagementSmallOne">
            <div class="appManagementSmallOneB">
              <qrcode-vue :value="value" :size="size" level="H" className='qrcode' id="picture" ref="code"></qrcode-vue>
            </div>

            <p @click.stop="savePic">下载二维码</p>
          </div>
          <div class="appManagementSmallTwo">
            <p>链接地址</p>
            <div class="lianjie">
              <div class="lianjieOne">http//:baidu.com</div>
              <div class="lianjieTwo">复制链接</div>
            </div>

              <p class="appManagementSmallTwoText">
                如用于应用分发，您可复制此链接或者下
                载二维码至定义菜单、推文中
              </p>

          </div>
        </div>
      </div>

    </div>
    <div class="firstDiv">
      <div class="firstDiv_small">
        <img src="../../../static/image/survey/shouye@2x.png" alt="">
        <p>您当前位置：</p>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
          <el-breadcrumb-item>应用管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="secondDiv">
      <el-input
        class="seachInput"
        placeholder="根据应用名称搜索"
        prefix-icon="el-icon-search"
        v-model="input">
      </el-input>
      <div class="export" style="background-image: url('../../../static/image/appManagement/anniu@2x (1).png')">
        <img src="../../../static/image/survey/daochuicon@2x.png" alt="">
        <p>上次/更新应用</p>
      </div>
    </div>
    <div class="thirdDiv">
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{background:'#e0f2fd'}"
      >
        <el-table-column
          prop="appName"
          label="应用名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="versionNumber"
          label="版本号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="安装地址"
          width="200">
        </el-table-column>
        <el-table-column
          prop="serviceType"
          label="服务类型">
        </el-table-column>
        <el-table-column
          prop="servicePrize"
          label="服务单价"
          width="90">
        </el-table-column>
        <el-table-column
          prop="signNumber"
          label="签名次数">
        </el-table-column>
        <el-table-column
          prop="installNumber"
          label="安装量"
          width="90">
        </el-table-column>
        <el-table-column
          prop="downNumber"
          label="下载量">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="更新时间"
          width="160">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="70">
          <template slot-scope="scope">
            <span v-if="scope.row.state=== '分发中'" style="color: #43A047">{{scope.row.state}}</span>
            <span v-else-if="scope.row.state=== '已下架'" style="color: #999999">{{scope.row.state}}</span>
            <span v-else-if="scope.row.state=== '已删除'" style="color: #FF0000">{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          width="130">
          <template slot-scope="scope">
            <el-select class="downSum" @change="allApp(scope.$index,tableData[scope.$index].operation)"
                       v-model="tableData[scope.$index].operation" placeholder="请选择">
              <el-option
                v-for="item in downSumOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>

    </div>
    <div class="fourthDiv">
      <Page :page-size="4" :current="3" :total="3" show-total/>
    </div>


  </div>
</template>

<script>

  import QrcodeVue from 'qrcode.vue';
  import axios from 'axios'
  import {BASE_URL} from "../../api";
  import surveyHeader from '../component/surveyHeader'

  export default {
    name: "appManagement",
    data() {
      return {
        value: 'https://www.baidu.com',
        size: 100,
        input: '',
        downSumValue: '',
        isMask: false,
        downSumOptions: [
          {
            value: '下载链接',
          }, {
            value: '查看详情',
          }, {
            value: '下架',
          }, {
            value: '删除',
          }],
        tableData: [
          {
            appName: '棋牌游戏',
            versionNumber: 'V1.2.0',
            address: 'https://project/iosApp/down',
            serviceType: '超级签名',
            servicePrize: '15.00元/台',
            signNumber: '50次',
            installNumber: '15，200',
            downNumber: '53，620',
            updateTime: '2016-10-01 18:51:15',
            state: '分发中',
            operation: ""
          },
          {
            appName: '棋牌游戏',
            versionNumber: 'V1.2.0',
            address: 'https://project/iosApp/down',
            serviceType: '超级签名',
            servicePrize: '15.00元/台',
            signNumber: '50次',
            installNumber: '15，200',
            downNumber: '53，620',
            updateTime: '2016-10-01 18:51:15',
            state: '已下架',
            operation: ""
          },
          {
            appName: '棋牌游戏',
            versionNumber: 'V1.2.0',
            address: 'https://project/iosApp/down',
            serviceType: '超级签名',
            servicePrize: '15.00元/台',
            signNumber: '50次',
            installNumber: '15，200',
            downNumber: '53，620',
            updateTime: '2016-10-01 18:51:15',
            state: '已删除',
            operation: ""
          },
          {
            appName: '棋牌游戏',
            versionNumber: 'V1.2.0',
            address: 'https://project/iosApp/down',
            serviceType: '超级签名',
            servicePrize: '15.00元/台',
            signNumber: '50次',
            installNumber: '15，200',
            downNumber: '53，620',
            updateTime: '2016-10-01 18:51:15',
            state: '分发中',
            operation: ""
          }
        ]
      }
    },
    components: {
      surveyHeader,
      QrcodeVue
    },
    methods: {
      ss() {

      },
    /*保存二维码图片并下载到本地*/
      savePic() {
        //找到canvas标签
        let myCanvas = document.getElementById('picture').getElementsByTagName('canvas');
        //创建一个a标签节点
        let a = document.createElement("a")
        //设置a标签的href属性（将canvas变成png图片）
        a.href = myCanvas[0].toDataURL('image/png').replace('image/png', 'image/octet-stream')
        //设置下载文件的名字
        a.download = "二维码.png"
        //点击
        a.click()
      },
      /*下拉菜单*/
      allApp(index, nameValue) {
        if (nameValue == '下载链接') {
          this.isMask = true
        } else if (nameValue == '查看详情') {
          this.$router.push({
            path:'/appManagementDetail'
          })
        } else if (nameValue == '下架') {
          alert("选择了下架")
        } else if (nameValue == '删除') {
          alert("选择了删除")
        }
        console.log(index)
        console.log(nameValue)
      },
      mask() {
        this.isMask = false
      },


    },
    mounted() {
      // this.$nextTick(function () {
      //   this.bindQRCode();
      // })

    }
  }
</script>

<style scoped>
  .appManagement {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .firstDiv {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .firstDiv_small {
    width: 78%;
    height: 30px;
    margin-top: 30px;
    border-bottom: 1px solid #06B2B6;
    display: flex;
    align-items: center;
    color: #999999;
  }

  .firstDiv_small img {
    width: 18px;
    height: 18px;
  }

  .firstDiv_small p {
    margin-left: 21px;
  }

  .secondDiv {
    width: 78%;
    display: flex;
    justify-content: space-between;
    margin: 48px auto 0 auto;
  }

  .seachInput {
    width: 306px;
  }

  .export {
    width: 142px;
    height: 40px;
    background-size: 142px 40px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    margin-left: 304px;
    font-size: 16px;
    cursor: pointer;
  }

  .thirdDiv {
    width: 78%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5;

  }

  .fourthDiv {
    width: 78%;
    /*height: 300px;*/
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }

  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(2, 2, 2, 0.5);
    z-index: 1000000;
    top: 0;
  }

  .maskDiv {
    width: 501px;
    height: 252px;
    background-color: white;

  }

  .downUrl {
    width: 90%;
    height: 40px;
    margin: 20px auto 0 auto;
    line-height: 40px;
    border-bottom: 1.5px solid #06B2B6;
    font-size: 16px;
    color: #333333;
    font-family: "Microsoft YaHei UI";
    font-weight: bold;
  }

  .appManagementSmall {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }

  .appManagementSmallOne {
    text-align: center;
  }

  .appManagementSmallOneB {
    width: 110px;
    height: 110px;
    border: 1px solid #DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }

  .appManagementSmallOne p {
    margin-top: 5px;
    color: #14BEC8;
    font-size: 16px;
    cursor: pointer;
  }

  .lianjie {
    display: flex;
    margin-top: 9px;
  }

  .lianjieOne {
    width: 180px;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    padding-left: 10px;
    border: 1px solid #DCDCDC;
  }

  .lianjieTwo {
    width: 82px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: white;
    background-color: #28A4F7;
  }
  .appManagementSmallTwoText{
    width: 269px;
    font-style: 16px;
    color: #999999;
    margin-top: 18px;
  }
  .el-select-dropdown__item{
    color:#14BEC8 ;
  }
  .el-select-dropdown__item.selected{
    color:#14BEC8 ;
  }
</style>
<style>
  .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #f5f9fb;
    text-align: center !important;
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #f5f9fb;
  }

  .el-table--enable-row-transition .el-table__body td {
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
  }

</style>
