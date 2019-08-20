<template>
    <div class="statistics">
      <div class="statisticsDiv">
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

      </div>

    </div>
</template>

<script>
    export default {
        name: "statistics",
      data(){
          return{
            value:'',//日历
            appValue:'',//下拉菜单
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
              }]
          }
      },
      mounted() {

        this.drawPolygonal()

      },

      methods:{
        /*日历查询*/
        firstTime(){
          console.log(this.value)
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
        /*应用详情里面的下拉菜单*/
        chooseApp(){
          console.log(this.appValue)
        }

      }
    }
</script>

<style scoped>
  .statistics{
  width: 100%;
  height: 100%;
  position: relative;
}
.statisticsDiv{
  width: 93%;
  height:auto;
  margin: 30px auto 0 auto;

}

  .secondDiv {
    width: 100%;
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
    width: 100%;
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
    cursor: pointer;
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
    cursor: pointer;
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
    cursor: pointer;
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
    margin-left: 239px;
    font-size: 16px;
    cursor: pointer;
  }
  #polygonalChart {
    width: 90%;
    height: 500px;
    margin: 30px auto 0 auto;
  }
  .fifthDiv{
    width: 100%;
    height: 600px;
    margin: 23px auto 60px auto;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
  }

  .fifthDivOne{
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
  .chooseApp {
    display: inline-block;
    position: relative;
    margin-left: 760px;
  }
</style>
