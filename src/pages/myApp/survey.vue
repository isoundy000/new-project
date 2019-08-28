<template>
    <div>
      <div class="firstDiv">
        <div class="firstDiv_small">
          <img src="../../../static/image/survey/shouye@2x.png" alt="">
          <p>您当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/survey' }">我的应用</el-breadcrumb-item>
            <el-breadcrumb-item>概括</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="secondDiv">
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="jineIcon" src="../../../static/image/survey/jine@2x.png" alt="">
          <div class="secondDivText">
            <p>总消费金额</p>
            <div class="newAdd">
              <p>{{list.mtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.mtoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="liulanIcon" src="../../../static/image/survey/liulan@2x.png" alt="">
          <div class="secondDivText">
            <p>页面总浏览量</p>
            <div class="newAdd">
              <p>{{list.vtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.vtoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="xiazaiIcon" src="../../../static/image/survey/xiazai@2x.png" alt="">
          <div class="secondDivText">
            <p>总下载量</p>
            <div class="newAdd">
              <p>{{list.dtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.dtoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg" style="background-image:url('../../../static/image/survey/bg@2x.png') ">
          <img class="shebeiIcon" src="../../../static/image/survey/shebei@2x.png" alt="">
          <div class="secondDivText">
            <p>下载设备总数</p>
            <div class="newAdd">
              <p>{{list.utotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.utoday}}</p>
            </div>
          </div>
        </div>

      </div>
      <div class="thirdDiv">
        <div class="recently7" @click="recently7"  style="background-image: url('../../../static/image/survey/anniu_s@2x.png')">
          <p>最近7天</p>
        </div>
        <div class="recently1" @click="recently1"   style="background-image: url('../../../static/image/survey/anniu_n@2x.png')">
          <p>最近1月</p>
        </div>
        <div class="recently3" @click="recently3"  style="background-image: url('../../../static/image/survey/anniu_n@2x.png')">
          <p>最近3月</p>
        </div>
        <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd" :clearable=false
                    type="daterange" split-panels placeholder="请选择时间段" style="width: 280px;height: 40px"></DatePicker>
        <div class="export" style="background-image: url('../../../static/image/survey/daoduanniu@2x.png')">
          <img src="../../../static/image/survey/daochuicon@2x.png" alt="">
          <p>导出数据</p>
        </div>

      </div>
      <!--<div class="fourthDiv">-->
        <!--<div class="fourthDivOne">-->
          <!--<p>应用对比</p>-->
        <!--</div>-->
        <!--<div id="columnDiagram"></div>-->
      <!--</div>-->
      <div class="fifthDiv">
        <div class="fifthDivOne">
          <p>应用详情</p>
          <el-select class="chooseApp" @change="chooseApp()" v-model="appValue" placeholder="选择应用">
            <el-option
              v-for="item in chooseAppOptions"
              :key="item.id"
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
                <p style="margin-top: 10px" v-for="(list,index) in areaName" :key="index">{{list.name}}</p>
              </div>
              <div class="newUser">
                <p>新用户下载量</p>
                <p style="margin-top: 10px" v-for="(list,index) in areaName" :key="index">{{list.value}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import "echarts/map/js/china.js";
  import {BASE_URL} from "../../api";
  import  axios from 'axios'
  import qs from 'qs'
  import chinaJson from 'echarts/map/json/china.json';//此处引入中国地图json
  export default {
    name: "survey",
    data() {
      return {
        ditu:'',
        list:'',
        value: '',//第一个日历选中的值
        value1:'',//第二个日历选中的值
        chooseAppOptions: [

          ],//应用详情里面的下拉菜单
        downSumOptions:[
          // {
          //   value: '2200',
          // }, {
          //   value: '100',
          // }, {
          //   value: '50',
          // }, {
          //   value: '11',
          // }, {
          //   value: '230',
          // }
          ],//区域新用户下载量里面的新用户下载量下拉菜单
        allAppOptions:[
          // {
          //   value: '应用一',
          // }, {
          //   value: '应用二',
          // }, {
          //   value: '应用三',
          // }, {
          //   value: '应用四',
          // }, {
          //   value: '应用五',
          // }
          ],//区域新用户下载量里面的所有应用的下拉菜单
        appValue: '',//应用详情里面的下拉菜单选中的值
        downSumValue:'',//区域新用户下载量里面的新用户下载量下拉菜单选中的值
        allAppValue:'',//区域新用户下载量里面的所有应用的下拉菜单选中的值
        id:'',
        dituList:'',
        areaName:[]
      }
    },

    mounted() {
      // alert("1")
      var that=this
      // this.drawColumn()
    /*地图区域名称*/
      let data8={
        id:'',
        start:'',
        end:''
      }
      let config8 = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/downloadArea',data8,config8).then(res => {
        console.log(res.data.data)
        this.areaName=res.data.data
      }, err => {
        console.log(err)
      })

      var that = this
      that.fengz=function (starTime,endTime,money,views,download,equipment,news) {
        Date.prototype.format = function () {
          var s = '';
          // s+=this.getFullYear()+'-';          // 获取年份。
          s += (this.getMonth() + 1) + "-";         // 获取月份。
          s += this.getDate();                 // 获取日。
          return (s);                          // 返回日期。
        };
        function aa(begin, end) {
          var dateAllArr = new Array();
          var ab = begin.split("-");
          var ae = end.split("-");
          var db = new Date();
          db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
          var de = new Date();
          de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
          var unixDb = db.getTime();
          var unixDe = de.getTime();
          for (var k = unixDb; k <= unixDe;) {
            dateAllArr.push((new Date(parseInt(k))).format().toString());
            k = k + 24 * 60 * 60 * 1000;
          }
          return dateAllArr;
        }
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
            data: aa(starTime, endTime)
          },
          yAxis: {
            type: 'value',

          },
          series: [
            {
              name: '总消费金额',
              type: 'line',
              color: '#4877FB',
              symbolSize: 11,
              data: money
            },
            {
              name: '页面总浏览量',
              type: 'line',
              color: '#00C4C9',
              symbolSize: 11,
              data: views
            },
            {
              name: '总下载量',
              type: 'line',
              color: '#FF8E32',
              symbolSize: 11,
              data: download
            },
            {
              name: '下载设备总数',
              type: 'line',
              color: '#A635FF',
              symbolSize: 11,
              data: equipment
            },
            {
              name: '新增人数',
              type: 'line',
              color: '#ff4eae',
              symbolSize: 11,
              data: news
            }
          ]
        })
      }
      /*最上面的值*/
      let data = {
        id: ''
      }
      let config = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/appStatistics',data, config).then(res => {
        console.log(res.data.data)
        this.list = res.data.data
      }, err => {
        console.log(err)
      })
      /*第一个应用折线图*/
      let data1={
        keywords:'',
        page:1,
        page_size:10
      }
      let config1 = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/appList',data1, config1).then(res => {
        for(var i=0;i<res.data.data.list.length;i++){
          var newobj={}
          newobj.value=res.data.data.list[i].name
          newobj.id=res.data.data.list[i].id
          this.chooseAppOptions.push(newobj)
        }
        console.log(res.data.data.list[0].id)
        this.id=res.data.data.list[0].id
        this.newF(6)
      }, err => {
        console.log(err)
      })
      /*地图进页面数据*/

      let data3={
        id:'',
        start:'',
        end:''
      }
      let config3 = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/downloadArea',data3, config3).then(res => {
        console.log(res.data.data)
        this.dituList=res.data.data
        this.$nextTick(function() {
          this.drawMap(this.dituList)
        })
      }, err => {
        console.log(err)
      })


      /*第一个应用柱形图*/
      // let data2={
      //   start:'2019-8-26',
      //   end:'2019-8-30'
      // }
      // let config2 = {
      //   headers: {'token': localStorage.getItem('Authorization')}
      // };
      // axios.post('https://ios.yoyoacg.com/api/app/appContrast',data2, config2).then(res => {
      //   console.log(res.data.data)
      // }, err => {
      //   console.log(err)
      // })

    },
    methods: {
      newF:function(count,id){
        var that = this
        // 拼接时间
        const time1 = new Date()
        const time2 = new Date()
        if (count === 1) {
          time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
        } else {
          if (count >= 0) {
            time1.setTime(time1.getTime())
          } else {
            if (count === -2) {
              time1.setTime(time1.getTime() + (24 * 60 * 60 * 1000) * 2)
            } else {
              time1.setTime(time1.getTime() + (24 * 60 * 60 * 1000))
            }
          }
        }

        const Y1 = time1.getFullYear()
        const M1 = ((time1.getMonth() + 1) > 9 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
        const D1 = (time1.getDate() > 9 ? time1.getDate() : '0' + time1.getDate())
        this.endTime = Y1 + '-' + M1 + '-' + D1  // 当前时间

        time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
        const Y2 = time2.getFullYear()
        const M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
        const D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
        this.starTime = Y2 + '-' + M2 + '-' + D2  // 之前的7天或者30天
        let data = {
          id: this.id,
          start: that.starTime,
          end: that.endTime
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        const loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        axios.post(BASE_URL+'/api/app/appInfo', qs.stringify(data), config).then(res => {
          console.log(res.data.data)

          this.fengz(this.starTime,this.endTime,res.data.data.money,res.data.data.views,res.data.data.download,res.data.data.equipment,res.data.data.new)
          loading.close();
        }, err => {
          console.log(err)
        })
      },
      recently7() {
        //this.$options.methods.newF(6);
        this.$nextTick(function() {
          this.newF(6)
        })


        $(".recently1").css({"background-image":'url(../../../static/image/survey/anniu_n@2x.png)',"color":'#06B2B6'})
        $(".recently7").css({"background-image":'url(../../../static/image/survey/anniu_s@2x.png)',"color":'white'})
        $(".recently3").css({"background-image":'url(../../../static/image/survey/anniu_n@2x.png)',"color":'#06B2B6'})


      },
      recently1(){
        this.$nextTick(function() {
          this.newF(29)
        })
        //this.$options.methods.newF(29);
        $(".recently7").css({"background-image":'url(../../../static/image/survey/anniu_n@2x.png)',"color":'#06B2B6'})
        $(".recently1").css({"background-image":'url(../../../static/image/survey/anniu_s@2x.png)',"color":'white'})
        $(".recently3").css({"background-image":'url(../../../static/image/survey/anniu_n@2x.png)',"color":'#06B2B6'})

      },
      recently3(){
        this.$nextTick(function() {
          this.newF(89)
        })
        $(".recently1").css({"background-image":'url(../../../static/image/survey/anniu_n@2x.png)',"color":'#06B2B6'})
        $(".recently3").css({"background-image":'url(../../../static/image/survey/anniu_s@2x.png)',"color":'white'})
        $(".recently7").css({"background-image":'url(../../../static/image/survey/anniu_n@2x.png)',"color":'#06B2B6'})

      },
      /*柱形图*/
      // drawColumn() {
      //   // 基于准备好的dom，初始化echarts实例
      //   let myChart = this.$echarts.init(document.getElementById('columnDiagram'))
      //   // 绘制图表
      //   myChart.setOption({
      //     legend: {
      //       itemWidth: 17,  // 设置宽度
      //       itemHeight: 17, // 设置高度
      //
      //       data:[
      //         {
      //           name: '总消费金额',
      //           icon: 'image://../../../static/image/survey/xiaofei@2x.png'
      //         },
      //         {
      //           name: '页面总浏览量',
      //           icon: 'image://../../../static/image/survey/zhongliulan@2x.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
      //         },
      //         {
      //           name: '总下载量',
      //           icon: 'image://../../../static/image/survey/yingyong_xiazai@2x.png'
      //         },
      //         {
      //           name: '下载设备总数',
      //           icon: 'image://../../../static/image/survey/xiazhaishebei@2x.png'
      //         },
      //         {
      //           name: '新增用户',
      //           icon: 'image://../../../static/image/survey/yonghu_yuan@2x.png'
      //         }
      //       ]
      //     },
      //     tooltip: {},
      //     dataset: {
      //       source: [
      //         ['product', '总消费金额', '页面总浏览量', '总下载量', '下载设备总数', '新增用户'],
      //         ['应用一', 20, 30, 40, 50, 60],
      //         ['应用二', 83.1, 73.4, 55.1, 43.3, 85.8],
      //         ['应用三', 86.4, 65.2, 82.5, 43.3, 85.8],
      //         ['应用四', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用五', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用六', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用七', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用八', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用九', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用十', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用十一', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用十二', 72.4, 53.9, 39.1, 43.3, 85.8],
      //         ['应用十三', 72.4, 53.9, 39.1, 43.3, 85.8]
      //       ]
      //     },
      //     dataZoom: {
      //       show: true,
      //       realtime: true,
      //       y: 36,
      //       height: 20,
      //       start: 30, //数据窗口范围的起始百分比,表示30%
      //       　　end: 70, //数据窗口范围的结束百分比,表示70%
      //     　　startValue:10, //数据窗口范围的起始数值
      //      　　endValue:100, //数据窗口范围的结束数值。
      //     },
      //     xAxis: {
      //       type: 'category',
      //
      //       axisLabel: {
      //         show: true,
      //         interval: 0//,    // {number}
      //         //rotate: 45,
      //         // margin: 8
      //
      //       }
      //     },
      //     yAxis: {},
      //     // Declare several bar series, each will be mapped
      //     // to a column of dataset.source by default.
      //     series: [
      //       {
      //
      //         type: 'bar',
      //         itemStyle: {
      //           normal: {
      //             color: '#FF816C'
      //           }
      //         },
      //         barWidth: 19,//柱图宽度
      //       },
      //       {
      //         type: 'bar',
      //         itemStyle: {
      //           normal: {
      //             color: '#5FAFFF'
      //           }
      //         },
      //         barWidth: 19,//柱图宽度
      //       },
      //       {
      //         type: 'bar',
      //         itemStyle: {
      //           normal: {
      //             color: '#B35AFF'
      //           }
      //         },
      //         barWidth: 19,//柱图宽度
      //       },
      //       {
      //         type: 'bar',
      //         itemStyle: {
      //           normal: {
      //             color: '#35CBC2'
      //           }
      //         },
      //         barWidth: 19,//柱图宽度
      //       },
      //       {
      //         type: 'bar',
      //         itemStyle: {
      //           normal: {
      //             color: '#FF9D55'
      //           }
      //         },
      //         barWidth: 19,//柱图宽度
      //       }
      //     ]
      //   });
      // },
      /*折线图*/

      /*地图*/
      drawMap(aa){
        console.log(this.dituList)
        this.$echarts.registerMap('china', chinaJson);
        let myChart = this.$echarts.init(document.getElementById('mapChart'))
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} 次'
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center'

          },
          dataRange: {
            show: true,
            min: 0,
            max: 3000,
            realtime: true,
            calculable: true,
            color: ['#33B6A4','#B0FDFF']
          },
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
          // itemStyle: {
          //   normal: {
          //     areaColor:"#e54735",
          //   },
          //   emphasis: {
          //     color: '#06B2B6',
          //     areaColor:"#06B2B6",
          //   }
          // },
          series: [
            {
              type: 'map',
              mapType: 'china', // 自定义扩展图表类型
              itemStyle:{
                normal:{label:{show:false},  color: '#E5E5E5',
                  areaColor:"#E5E5E5", borderColor: "#fff" },
                emphasis:{label:{show:true},  color: '#06B2B6',
                  areaColor:"#06B2B6",}
              },
              data:this.dituList,
              // 自定义名称映射
              nameMap: {
                '四川': '四川省',
                '北京':'北京市',
                '上海':'上海市',
                '河北':'河北省',
                '山西':'山西省',
                '内蒙古':'内蒙古自治区',
                '辽宁':'辽宁省',
                '吉林':'吉林省',
                '黑龙江':'黑龙江省',
                '江苏':'江苏省',
                '浙江':'浙江省',
                '安徽':'安徽省',
                '福建':'福建省',
                '江西':'江西省',
                '山东':'山东省',
                '河南':'河南省',
                '湖北':'湖北省',
                '湖南':'湖南省',
                '广东':'广东省',
                '广西':'广西壮族自治区',
                '海南':'海南省',
                '贵州':'贵州省',
                '云南':'云南省',
                '西藏':'西藏自治区',
                '陕西':'陕西省',
                '甘肃':'甘肃省',
                '青海':'青海省',
                '宁夏':'宁夏回族自治区',
                '新疆':'新疆维吾尔自治区',
                '北京':'北京市',
                '天津':'天津市',
                '重庆':'重庆市',
                '香港':'香港特别行政区',
                '澳门':'澳门特别行政区',
                '台湾':'台湾省'
              }
            }
          ]
        })
      },
      /*第一个日历选中*/
      firstTime(a) {
        var that=this
        console.log(this.value[0])
        console.log(this.value[1])
        Date.prototype.format = function () {
          var s = '';
          // s+=this.getFullYear()+'-';          // 获取年份。
          s += (this.getMonth() + 1) + "-";         // 获取月份。
          s += this.getDate();                 // 获取日。
          return (s);                          // 返回日期。
        };
        function aa(begin, end) {
          var dateAllArr = new Array();
          var ab = begin.split("-");
          var ae = end.split("-");
          var db = new Date();
          db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
          var de = new Date();
          de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
          var unixDb = db.getTime();
          var unixDe = de.getTime();
          for (var k = unixDb; k <= unixDe;) {
            dateAllArr.push((new Date(parseInt(k))).format().toString());
            k = k + 24 * 60 * 60 * 1000;
          }
          return dateAllArr;
        }
        let data = {
          id: that.id,
          start: that.starTime,
          end: that.endTime
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        const loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        axios.post(BASE_URL+'/api/app/appInfo', qs.stringify(data), config).then(res => {
          console.log(res.data.data)

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
              data: aa(this.value[0], this.value[1])
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '总消费金额',
                type: 'line',
                color: '#4877FB',
                symbolSize: 11,
                data: res.data.data.money
              },
              {
                name: '页面总浏览量',
                type: 'line',
                color: '#00C4C9',
                symbolSize: 11,
                data: res.data.data.views
              },
              {
                name: '总下载量',
                type: 'line',
                color: '#FF8E32',
                symbolSize: 11,
                data: res.data.data.download
              },
              {
                name: '下载设备总数',
                type: 'line',
                color: '#A635FF',
                symbolSize: 11,
                data: res.data.data.equipment
              },
              {
                name: '新增人数',
                type: 'line',
                color: '#ff4eae',
                symbolSize: 11,
                data: res.data.data.new
              }
            ]
          })
          loading.close();
        }, err => {
          console.log(err)
        })
      },
      /*第二个日历选中*/
      secondTime(b){
        console.log(b[0])
        console.log(b[1])
        let data3={
          id:'',
          start:b[0],
          end:b[1]
        }
        let config3 = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/downloadArea',data3, config3).then(res => {
          console.log(res.data.data)
          this.dituList=res.data.data
          this.areaName=res.data.data
          this.$nextTick(function() {
            this.drawMap(this.dituList)
          })
        }, err => {
          console.log(err)
        })
      },
      /*应用详情里面的下拉菜单*/
      chooseApp(){
        var that=this
        let obj = {};
        obj = this.chooseAppOptions.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.value === this.appValue;//筛选出匹配数据
        });
        this.id=obj.id
        function aa(begin, end) {
          var dateAllArr = new Array();
          var ab = begin.split("-");
          var ae = end.split("-");
          var db = new Date();
          db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
          var de = new Date();
          de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
          var unixDb = db.getTime();
          var unixDe = de.getTime();
          for (var k = unixDb; k <= unixDe;) {
            dateAllArr.push((new Date(parseInt(k))).format().toString());
            k = k + 24 * 60 * 60 * 1000;
          }
          return dateAllArr;
        }
        let data = {
          id: that.id,
          start: that.starTime,
          end: that.endTime
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        const loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        axios.post(BASE_URL+'/api/app/appInfo', qs.stringify(data), config).then(res => {
          console.log(res.data.data)

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
              data: aa(that.starTime, that.endTime)
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '总消费金额',
                type: 'line',
                color: '#4877FB',
                symbolSize: 11,
                data: res.data.data.money
              },
              {
                name: '页面总浏览量',
                type: 'line',
                color: '#00C4C9',
                symbolSize: 11,
                data: res.data.data.views
              },
              {
                name: '总下载量',
                type: 'line',
                color: '#FF8E32',
                symbolSize: 11,
                data: res.data.data.download
              },
              {
                name: '下载设备总数',
                type: 'line',
                color: '#A635FF',
                symbolSize: 11,
                data: res.data.data.equipment
              },
              {
                name: '新增人数',
                type: 'line',
                color: '#ff4eae',
                symbolSize: 11,
                data: res.data.data.new
              }
            ]
          })
          loading.close();
        }, err => {
          console.log(err)
        })
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
position: relative;
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
    font-size: 16px;
    position: absolute;
    right: 30px;
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
    position: relative;
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
    position: absolute;
    right: 30px;

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
    justify-content: space-between;
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
  .newAdd {
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
  }

  .newAdd img {
    width: 11px;
    height: 14px;
    vertical-align: middle;
    margin-left: 20px;
  }

  .newAddP {
    margin-left: 5px;
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
