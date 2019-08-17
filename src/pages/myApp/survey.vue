<template>
    <div>
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/shouye@2x.png" alt="">
          <p>您当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">我的应用</a></el-breadcrumb-item>
            <el-breadcrumb-item>概括</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="secondDiv">
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="jineIcon" src="../../../static/image/survey/jine@2x.png" alt="">
          <div class="secondDivText">
            <p>总消费金额</p>
            <p>4,235</p>
          </div>
        </div>
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="liulanIcon" src="../../../static/image/survey/liulan@2x.png" alt="">
          <div class="secondDivText">
            <p>页面总浏览量</p>
            <p>4,235</p>
          </div>
        </div>
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="xiazaiIcon" src="../../../static/image/survey/xiazai@2x.png" alt="">
          <div class="secondDivText">
            <p>总下载量</p>
            <p><span>4,235</span><span>4,235</span></p>
          </div>
        </div>
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="shebeiIcon" src="../../../static/image/survey/shebei@2x.png" alt="">
          <div class="secondDivText">
            <p>页面总浏览量</p>
            <p>4,235</p>
          </div>
        </div>

      </div>
      <div class="thirdDiv">
        <div class="recently7" style="background-image: url('../../../static/image/survey/anniu_s@2x.png')">
          <p>最近7天</p>
        </div>
        <div class="recently1" style="background-image: url('../../../static/image/survey/anniu_n@2x.png')">
          <p>最近1月</p>
        </div>
        <div class="recently3" style="background-image: url('../../../static/image/survey/anniu_n@2x.png')">
          <p>最近3月</p>
        </div>
        <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd" :clearable=false
                    type="daterange" split-panels placeholder="请选择时间段" style="width: 280px;height: 40px"></DatePicker>
        <div class="export" style="background-image: url('../../../static/image/survey/daoduanniu@2x.png')">
          <img src="../../../static/image/survey/daochuicon@2x.png" alt="">
          <p>导出数据</p>
        </div>

      </div>
      <div class="fourthDiv">
        <div class="fourthDivOne">
          <p>应用对比</p>
        </div>
        <div id="columnDiagram"></div>
      </div>
      <div class="fifthDiv">
        <div class="fifthDivOne">
          <p>应用详情</p>
          <el-select class="chooseApp" @change="chooseApp()" v-model="appValue" placeholder="选择应用">
            <el-option
              v-for="item in chooseAppOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div id="polygonalChart"></div>
      </div>
      <div class="sixthDiv">
        <div class="sixthDivOne">
          <p>区域新用户下载量</p>
          <el-select class="downSum" @change="downSum()" v-model="downSumValue" placeholder="新用户下载量">
            <el-option
              v-for="item in downSumOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select class="allApp" @change="allApp()" v-model="allAppValue" placeholder="所有应用">
            <el-option
              v-for="item in allAppOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <DatePicker class="sec" size="large" @on-change="secondTime(value1=$event)" v-model="value1" format="yyyy-MM-dd" :clearable=false
                      type="daterange" split-panels placeholder="请选择时间段" style="width: 280px;height: 40px"></DatePicker>
        </div>
        <div class="sixthDivOneSmal">
          <div id="mapChart"></div>
          <div class="ranking">
            <p class="top10">区域新用户下载 TOP10</p>
            <div class="ranking_div">
              <div class="region">
                <p>区域名称</p>
              </div>
              <div class="newUser">
                <p>新用户下载量</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import chinaJson from 'echarts/map/json/china.json';//此处引入中国地图json
  export default {
    name: "survey",
    data() {
      return {
        value: '',//第一个日历选中的值
        value1:'',//第二个日历选中的值
        chooseAppOptions: [
          {
            value: '应用一',
          }, {
            value: '应用二',
          }, {
            value: '应用三',
          }, {
            value: '应用四',
          }, {
            value: '应用五',
          }],//应用详情里面的下拉菜单
        downSumOptions:[
          {
            value: '2200',
          }, {
            value: '100',
          }, {
            value: '50',
          }, {
            value: '11',
          }, {
            value: '230',
          }],//区域新用户下载量里面的新用户下载量下拉菜单
        allAppOptions:[
          {
            value: '应用一',
          }, {
            value: '应用二',
          }, {
            value: '应用三',
          }, {
            value: '应用四',
          }, {
            value: '应用五',
          }],//区域新用户下载量里面的所有应用的下拉菜单
        appValue: '',//应用详情里面的下拉菜单选中的值
        downSumValue:'',//区域新用户下载量里面的新用户下载量下拉菜单选中的值
        allAppValue:''//区域新用户下载量里面的所有应用的下拉菜单选中的值
      }
    },

    mounted() {
      this.drawColumn()
      this.drawPolygonal()
      this.drawMap()
    },
    methods: {
      /*柱形图*/
      drawColumn() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('columnDiagram'))
        // 绘制图表
        myChart.setOption({
          legend: {
            itemWidth: 17,  // 设置宽度
            itemHeight: 17, // 设置高度

            data:[
              {
                name: '总消费金额',
                icon: 'image://../../../static/image/survey/xiaofei@2x.png'
              },
              {
                name: '页面总浏览量',
                icon: 'image://../../../static/image/survey/zhongliulan@2x.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
              },
              {
                name: '总下载量',
                icon: 'image://../../../static/image/survey/yingyong_xiazai@2x.png'
              },
              {
                name: '下载设备总数',
                icon: 'image://../../../static/image/survey/xiazhaishebei@2x.png'
              },
              {
                name: '新增用户',
                icon: 'image://../../../static/image/survey/yonghu_yuan@2x.png'
              }
            ]
          },
          tooltip: {},
          dataset: {
            source: [
              ['product', '总消费金额', '页面总浏览量', '总下载量', '下载设备总数', '新增用户'],
              ['应用一', 20, 30, 40, 50, 60],
              ['应用二', 83.1, 73.4, 55.1, 43.3, 85.8],
              ['应用三', 86.4, 65.2, 82.5, 43.3, 85.8],
              ['应用四', 72.4, 53.9, 39.1, 43.3, 85.8]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {

              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#FF816C'
                }
              },
              barWidth: 19,//柱图宽度
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#5FAFFF'
                }
              },
              barWidth: 19,//柱图宽度
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#B35AFF'
                }
              },
              barWidth: 19,//柱图宽度
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#35CBC2'
                }
              },
              barWidth: 19,//柱图宽度
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#FF9D55'
                }
              },
              barWidth: 19,//柱图宽度
            }
          ]
        });
      },
      /*折线图*/
      drawPolygonal() {
        let myChart = this.$echarts.init(document.getElementById('polygonalChart'))
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            itemWidth: 17,  // 设置宽度
            itemHeight: 17, // 设置高度
            data: [
              {
                name: '总消费金额',
                icon: 'image://../../../static/image/survey/yingyong_jie@2x.png'
              },
              {
                name: '页面总浏览量',
                icon: 'image://../../../static/image/survey/yingyong_liulan@2x.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
              },
              {
                name: '总下载量',
                icon: 'image://../../../static/image/survey/yingyong_xiazhai@2x.png'
              },
              {
                name: '下载设备总数',
                icon: 'image://../../../static/image/survey/yingyong_xiazai@2x.png'
              },
              {
                name: '新增人数',
                icon: 'image://../../../static/image/survey/yingyong_xinzeng@2x (1).png'
              }
            ]


          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            // feature: {
            //   saveAsImage: {}
            // }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '总消费金额',
              type: 'line',
              stack: '总量',
              color: '#4877FB',
              symbolSize: 11,
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '页面总浏览量',
              type: 'line',
              stack: '总量',
              color: '#00C4C9',
              symbolSize: 11,
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '总下载量',
              type: 'line',
              stack: '总量',
              color: '#FF8E32',
              symbolSize: 11,
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '下载设备总数',
              type: 'line',
              stack: '总量',
              color: '#A635FF',
              symbolSize: 11,
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '新增人数',
              type: 'line',
              stack: '总量',
              color: '#ff4eae',
              symbolSize: 11,
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      },
      /*地图*/
      drawMap(){
        this.$echarts.registerMap('china', chinaJson);
        let myChart = this.$echarts.init(document.getElementById('mapChart'))




        myChart.setOption({
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          visualMap: {
            min: 800,
            max: 50000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['lightskyblue','yellow', 'orangered']
            }
          },
          dataRange: {
            show: true,
            min: 0,
            max: 1000,
            realtime: true,
            calculable: true,
            color: ['#06B2B6','#eeeeee']
          },

          geo: { // 这个是重点配置区
            map: 'china', // 表示中国地图
            roam: false,
            label: {
              normal: {
                show: false, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor:"#eeeeee",

                borderColor: 'rgba(0, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                borderColor: '#fff',
                areaColor:"#06B2B6",

              }
            }
          },
          series: [{
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
          },
            {
              name: '新用户下载量', // 浮动框的标题
              type: 'map',
              geoIndex: 0,
              data: [{
                "name": "北京",
                "value": 599
              }, {
                "name": "上海",
                "value": 142
              }, {
                "name": "黑龙江",
                "value": 44
              }, {
                "name": "深圳",
                "value": 92
              }, {
                "name": "湖北",
                "value": 810
              }, {
                "name": "四川",
                "value": 453
              }]
            }
          ]
        })
      },
      /*第一个日历选中*/
      firstTime(a) {
        console.log(a)
      },
      /*第二个日历选中*/
      secondTime(b){
        console.log(b)
      },
      /*应用详情里面的下拉菜单*/
      chooseApp(){
        console.log(this.appValue)
      },
      /*新用户下载量*/
      downSum(){
        console.log(this.downSumValue)
      },
      /*所有应用*/
      allApp(){
        console.log(this.allAppValue)
      }
    }
  }
</script>

<style scoped>
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
    margin: 48px auto 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .secondDivBg {
    width: 24%;
    height: 100px;
    background-size: 290px 100px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }

  .jineIcon {
    width: 52px;
    height: 52px;
    margin-left: 39px;
  }

  .liulanIcon {
    width: 58px;
    height: 37px;
    margin-left: 39px;
  }

  .xiazaiIcon {
    width: 44px;
    height: 44px;
    margin-left: 39px;
  }

  .shebeiIcon {
    width: 34px;
    height: 52px;
    margin-left: 39px;
  }

  .secondDivText {
    height: 50px;
    position: relative;
    margin-left: 34px;
    font-size: 16px;
    color: #333333;
  }

  .secondDivText p:nth-child(2) {
    margin-top: 15px;
  }

  .thirdDiv {
    width: 78%;
    height: 80px;
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5;

  }

  .recently7 {
    width: 120px;
    height: 40px;
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: white;
    line-height: 40px;
    text-align: center;
    margin-left: 17px;
    font-size: 16px;
  }

  .recently1 {
    width: 120px;
    height: 40px;
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: #06B2B6;
    line-height: 40px;
    text-align: center;
    margin-left: 19px;
    font-size: 16px;
  }

  .recently3 {
    width: 120px;
    height: 40px;
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: #06B2B6;
    line-height: 40px;
    text-align: center;
    margin-left: 18px;
    font-size: 16px;
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
  }



  #columnDiagram {
    width: 90%;
    height: 500px;
    margin: 30px auto 0 auto;
  }

  #polygonalChart {
    width: 90%;
    height: 500px;
    margin: 30px auto 0 auto;
  }
  #mapChart{
    width: 500px;
    height: 500px;
    margin-left: 40px;
    /*margin: 30px auto 0 auto;*/
  }
  .fourthDiv,.fifthDiv,.sixthDiv {
    width: 78%;
    height: 600px;
    margin: 23px auto 0 auto;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
  }

  .fourthDivOne,.fifthDivOne{
    width: 100%;
    height: 60px;
    margin: -1px auto 0 auto;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    color: #06B2B6;
    font-size: 18px;
    padding-left: 17px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #E5E5E5;
  }
  .sixthDivOne{
    width: 100%;
    height: 60px;
    margin: -1px auto 0 auto;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;


    padding-left: 17px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #E5E5E5;
  }
  .sixthDivOne p:nth-child(1){
    font-size: 18px;
    color: #06B2B6;
  }

  .chooseApp {
    display: inline-block;
    position: relative;
    margin-left: 820px;
  }
  .downSum{
    display: inline-block;
    position: relative;
    margin-left: 200px;
  }
  .allApp{
    display: inline-block;
    position: relative;
    margin-left: 20px;
  }
  .sec{
    height: 40px;
  }
  .sixthDivOneSmal{
    display: flex;
  }
  .ranking{
    width: 600px;
  }
  .top10{
    text-align: center;
    color: #999999;
    margin-top: 70px;
    font-size: 20px;
  }
  .ranking_div{
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .region{
    width: 250px;
    height: 325px;
    text-align: center;
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    font-family: "Microsoft YaHei UI";
    border-right: 1px solid #E5E5E5;
  }
  .newUser{
    width: 250px;
    height: 325px;

    text-align: center;
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    font-family: "Microsoft YaHei UI";
    border-left: 1px solid #E5E5E5;
  }
</style>
<style>
  .ivu-input {
    height: 40px !important;
    margin-left: 19px;
  }

  .ivu-input-wrapper {
    height: 40px;
  }

  .ivu-date-picker-rel {
    height: 40px !important;
  }

  .ivu-input-wrapper-large .ivu-input-prefix i, .ivu-input-wrapper-large .ivu-input-suffix i {
    font-size: 28px;
    line-height: 40px;
  }
</style>
