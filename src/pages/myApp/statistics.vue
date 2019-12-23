<template>
  <div class="statistics">
    <div class="statisticsDiv">
      <div class="secondDiv">
        <div class="secondDivBg">
          <img class="jineIcon" src="../../../static/image/survey/hpxiaofei.png" alt="">
          <div class="secondDivText">
            <p>总消费金额</p>
            <div class="newAdd">
              <p>{{list.mtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.mtoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg">
          <img class="liulanIcon" src="../../../static/image/survey/hpliulan.png" alt="">
          <div class="secondDivText">
            <p>页面总浏览量</p>
            <div class="newAdd">
              <p>{{list.vtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.vtoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg">
          <img class="xiazaiIcon" src="../../../static/image/survey/hpxiazai.png" alt="">
          <div class="secondDivText">
            <p>总下载量</p>
            <div class="newAdd">
              <p>{{list.dtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.dtoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg" >
          <img class="shebeiIcon" src="../../../static/image/survey/hpshebei.png" alt="">
          <div class="secondDivText">
            <p>下载设备总数</p>
            <div class="newAdd">
              <p>{{list.utotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.utoday}}</p>
            </div>
          </div>
        </div>
        <div class="secondDivBg">
          <img class="shebeiIcon" src="../../../static/image/survey/hpshebei.png" alt="">
          <div class="secondDivText">
            <p>补签</p>
            <div class="newAdd">
              <p>{{list.rtotal}}</p>
              <img src="../../../static/image/survey/jiantou.png" alt="">
              <p class="newAddP">{{list.rtoday}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="thirdDiv">
        <div @click="recently7" class="recently7" :class="{ 'recentlyImg': isrecently7 }">
          <p>最近7天</p>
        </div>
        <div @click="recently1" class="recently1" :class="{ 'recentlyImg': isrecently1 }">
          <p>最近1月</p>
        </div>
        <div @click="recently3" class="recently3" :class="{ 'recentlyImg': isrecently3 }">
          <p>最近3月</p>
        </div>
        <DatePicker size="large" @on-change="firstTime(value=$event)" v-model="value" format="yyyy-MM-dd"
                    :clearable=false
                    type="daterange" split-panels placeholder="请选择时间段" style="width: 280px;height: 40px;margin-left: 30px"></DatePicker>
        <!--<div class="export" style="background-image: url('../../../static/image/survey/daoduanniu@2x.png')">-->
          <!--<img src="../../../static/image/survey/daochuicon@2x.png" alt="">-->
          <!--<p>导出数据</p>-->
        <!--</div>-->

      </div>
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
        <div v-loading="loading"   id="polygonalChart"></div>
      </div>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import {BASE_URL} from "../../api";
  export default {
    name: "statistics",
    data() {
      return {
        isrecently7:true,
        isrecently1:false,
        isrecently3:false,
        loading:false,
        id:'',
        starTime:'',
        endTime:'',
        value: '',//日历
        appValue: '',//下拉菜单
        list: '',
        money:[],//消费总金额集合
        views:[],//页面总浏览量
        download:[],//总下载量
        equipment:[],//下载设备总数
        newList:[],//	新增人数
        chooseAppOptions: [
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
          ]
      }
    },
    mounted() {
      var that=this
      that.id=that.$route.query.id
      that.name=that.$route.query.name
      that.appValue=that.$route.query.name
      //alert(that.name)
      this.$nextTick(function() {
        this.newF(6)
      })

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
                icon: '//static.iosapp88.com/static/image/survey/yingyong_jie@2x.png'
              },
              {
                name: '页面总浏览量',
                icon: '//static.iosapp88.com/static/image/survey/yingyong_liulan@2x.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
              },
              {
                name: '总下载量',
                icon: '//static.iosapp88.com/static/image/survey/yingyong_xiazhai@2x.png'
              },
              {
                name: '下载设备总数',
                icon: '//static.iosapp88.com/static/image/survey/yingyong_xiazai@2x.png'
              },
              {
                name: '新增人数',
                icon: '//static.iosapp88.com/static/image/survey/yingyong_xinzeng@2x (1).png'
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
            type: 'value'
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

      let data = {
        id: that.$route.query.id
      }
      let config = {
        headers: {'token': localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/appStatistics', qs.stringify(data), config).then(res => {
        // console.log(res.data.data)
        that.list = res.data.data
      }, err => {
        // console.log(err)
      })


      // let data1={
      //   keywords:'',
      //   page:1,
      //   page_size:999
      // }
      // let config1 = {
      //   headers: {'token': localStorage.getItem('Authorization')}
      // };
      // axios.post(BASE_URL+'/api/app/appList',data1, config1).then(res => {
      //   console.log(res.data.data)
      //   for(var i=0;i<res.data.data.list.length;i++){
      //     var newobj={}
      //     newobj.value=res.data.data.list[i].name
      //     newobj.id=res.data.data.list[i].id
      //     this.chooseAppOptions.push(newobj)
      //   }
      //   this.appValue=res.data.data.list[i].name
      // }, err => {
      //   console.log(err)
      // })




    },

    methods: {
      newF:function(count){
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
          id: that.id,
          start: that.starTime,
          end: that.endTime
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        // const loading = this.$loading({
        //   lock: true,
        //   text: '拼命加载中',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // });
        this.loading=true
        axios.post(BASE_URL+'/api/app/appInfo', qs.stringify(data), config).then(res => {
          // console.log(res.data.data)
          this.fengz(this.starTime,this.endTime,res.data.data.money,res.data.data.views,res.data.data.download,res.data.data.equipment,res.data.data.new)
          // loading.close();
          this.loading=false
        }, err => {
          // console.log(err)
        })
      },
      recently7() {
       //this.$options.methods.newF(6);
        this.$nextTick(function() {
          this.newF(6)
        })
        this.isrecently1=false
        this.isrecently7=true
        this.isrecently3=false




      },
      recently1(){
        this.$nextTick(function() {
          this.newF(29)
        })
        //this.$options.methods.newF(29);
        this.isrecently1=true
        this.isrecently7=false
        this.isrecently3=false

      },
      recently3(){
        this.$nextTick(function() {
          this.newF(89)
        })
        this.isrecently1=false
        this.isrecently7=false
        this.isrecently3=true

      },
      /*日历查询*/
      firstTime() {
        var that=this
        // console.log(this.value[0])
        // console.log(this.value[1])
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
          start: this.value[0],
          end: this.value[1]
        }
        let config = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        this.loading=true
        axios.post(BASE_URL+'/api/app/appInfo', qs.stringify(data), config).then(res => {
            // console.log(res.data.data)

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
                    icon: '//static.iosapp88.com/static/image/survey/yingyong_jie@2x.png'
                  },
                  {
                    name: '页面总浏览量',
                    icon: '//static.iosapp88.com/static/image/survey/yingyong_liulan@2x.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
                  },
                  {
                    name: '总下载量',
                    icon: '//static.iosapp88.com/static/image/survey/yingyong_xiazhai@2x.png'
                  },
                  {
                    name: '下载设备总数',
                    icon: '//static.iosapp88.com/static/image/survey/yingyong_xiazai@2x.png'
                  },
                  {
                    name: '新增人数',
                    icon: '//static.iosapp88.com/static/image/survey/yingyong_xinzeng@2x (1).png'
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
                  stack: '总量',
                  color: '#4877FB',
                  symbolSize: 11,
                  data: res.data.data.money
                },
                {
                  name: '页面总浏览量',
                  type: 'line',
                  stack: '总量',
                  color: '#00C4C9',
                  symbolSize: 11,
                  data: res.data.data.views
                },
                {
                  name: '总下载量',
                  type: 'line',
                  stack: '总量',
                  color: '#FF8E32',
                  symbolSize: 11,
                  data: res.data.data.download
                },
                {
                  name: '下载设备总数',
                  type: 'line',
                  stack: '总量',
                  color: '#A635FF',
                  symbolSize: 11,
                  data: res.data.data.equipment
                },
                {
                  name: '新增人数',
                  type: 'line',
                  stack: '总量',
                  color: '#ff4eae',
                  symbolSize: 11,
                  data: res.data.data.new
                }
              ]
            })
          this.loading=false
        }, err => {
          // console.log(err)
        })
      },
      /*折线图*/
      // drawPolygonal() {
      //
      //
      //   console.log(JSON.stringify(this.money))
      //
      // },
      /*应用详情里面的下拉菜单*/
      chooseApp() {
        // console.log(this.appValue)
        var that=this
        let obj = {};
        obj = this.chooseAppOptions.find((item)=>{//这里的userList就是上面遍历的数据源
          return item.value === this.appValue;//筛选出匹配数据
        });
        var id=obj.id
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
        let data3={
          id:id,
          start:this.starTime,
          end:this.endTime
        }
        let config3 = {
          headers: {'token': localStorage.getItem('Authorization')}
        };
        this.loading=true
        axios.post(BASE_URL+'/api/app/appInfo',data3, config3).then(res => {
          // console.log(res.data.data)

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
                  icon: '//static.iosapp88.com/static/image/survey/yingyong_jie@2x.png'
                },
                {
                  name: '页面总浏览量',
                  icon: '//static.iosapp88.com/static/image/survey/yingyong_liulan@2x.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
                },
                {
                  name: '总下载量',
                  icon: '//static.iosapp88.com/static/image/survey/yingyong_xiazhai@2x.png'
                },
                {
                  name: '下载设备总数',
                  icon: '//static.iosapp88.com/static/image/survey/yingyong_xiazai@2x.png'
                },
                {
                  name: '新增人数',
                  icon: '//static.iosapp88.com/static/image/survey/yingyong_xinzeng@2x (1).png'
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
          this.loading=false
        }, err => {
          // console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
  .statistics {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .statisticsDiv {
    width: 93%;
    height: auto;
    margin: 30px auto 0 auto;

  }

  .secondDiv {
    width: 100%;
    margin: 48px auto 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .secondDivBg {
    width: 19%;
    height: 100px;
    background-image:url('../../../static/image/survey/bg@2x.png');
    background-size: 100% 100px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }


  .jineIcon {
    width: 2.7vw;
    height: 2.7vw;
    margin-left: 1vw;
  }

  .liulanIcon {
    width: 3.92vw;
    height: 2.5vw;
    margin-left: 1vw;
  }

  .xiazaiIcon {
    width: 2.83vw;
    height: 2.83vw;
    margin-left: 1vw;
  }

  .shebeiIcon {
    width: 2.5vw;
    height: 3.2vw;
    margin-left: 1vw;
  }

  .secondDivText {
    width: 10vw;
    height: 70px;
    position: relative;
    margin-left: 1.2vw;
    font-size: 0.95vw;
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
position: relative;
  }

  .recently7 {
    width: 120px;
    height: 40px;
    background-image: url('../../../static/image/survey/anniu_n@2x.png');
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: #2F82FF;
    line-height: 40px;
    text-align: center;
    margin-left: 17px;
    font-size: 16px;
    cursor: pointer;
  }

  .recently1 {
    width: 120px;
    height: 40px;
    background-image: url('../../../static/image/survey/anniu_n@2x.png');
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: #2F82FF;
    line-height: 40px;
    text-align: center;
    margin-left: 19px;
    font-size: 16px;
    cursor: pointer;
  }

  .recently3 {
    width: 120px;
    height: 40px;
    background-image: url('../../../static/image/survey/anniu_n@2x.png');
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: #2F82FF;
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
    position: absolute;
    right: 30px;
    font-size: 16px;
    cursor: pointer;
  }

  #polygonalChart {
    width: 90%;
    height: 500px;
    margin: 30px auto 0 auto;
  }

  .fifthDiv {
    width: 100%;
    height: 600px;
    margin: 23px auto 60px auto;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
  }

  .fifthDivOne {
    width: 100%;
    height: 60px;
    margin: -1px auto 0 auto;
    background-color: #EEEEEE;
    display: flex;
    align-items: center;
    color: #2F82FF;
    font-size: 18px;
    padding-left: 17px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #E5E5E5;
    position: relative;
  }

  .chooseApp {
    display: inline-block;
    position: relative;
    position: absolute;
    right: 30px;
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
  .recentlyImg{
    width: 120px;
    height: 40px;
    background-image:url('../../../static/image/survey/anniu_s@2x.png');
    background-size: 120px 40px;
    background-repeat: no-repeat;
    color: white;
    line-height: 40px;
    text-align: center;
    margin-left: 19px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
