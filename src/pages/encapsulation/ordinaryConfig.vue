<template>
  <div class="ordinaryConfig">
    <div class="ordinaryConfigDiv">
      <p style="margin: 0 auto;width: 87%;font-size: 14px;font-weight: bold">基础配件</p>
      <div class="ordinaryConfigDivMain">
        <div class="ordinaryConfigDivMainSmall">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigJiazai" src="../../../static/image/ordinary/jiazai_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/jiazai_s.png" alt="">
            <p>加载效果</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              v-model="jiazaiswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="jiazaiswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigXiala" src="../../../static/image/ordinary/xiala_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/xiala_s.png" alt="">
            <p>下拉刷新</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              v-model="xialaswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="xialaswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight" >
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigQingli" src="../../../static/image/ordinary/qingli_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/qingli_s.png" alt="">
            <p>清理缓存</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              v-model="qingliswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="qingliswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">

        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">

        </div>



      </div>



    </div>
    <div class="ordinaryConfigDiv">
      <p style="margin: 0 auto;width: 87%;font-size: 14px;font-weight: bold">拓展配件</p>
      <div class="ordinaryConfigDivMain">
        <div class="ordinaryConfigDivMainSmall">

        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">

        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">

        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">

        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight">

        </div>




      </div>



    </div>
    <div>配置插件</div>
    <input type="text">
    <button @click="previousStep">上一步</button>
    <button @click="nextStep">下一步</button>
  </div>
</template>

<script>
  export default {
    name: "ordinaryConfig",
    data() {
      return {
        jiazaiswitch:false,//加载效果开关布尔值
        ordinaryConfigJiazai:true,//灰色加载效果开关
        xialaswitch:false,//下拉刷新开关布尔值
        ordinaryConfigXiala:true,//灰色下拉刷新开关
        qingliswitch:false,//清理缓存开关布尔值
        ordinaryConfigQingli:true,//灰色清理缓存开关
      }
    },
    methods: {
      /*加载效果开关*/
      jiazaiswichChange(){
        if(this.jiazaiswitch==true){
          this.ordinaryConfigJiazai=false
        }else{
          this.ordinaryConfigJiazai=true
        }

      },
      /*下拉刷新开关*/
      xialaswichChange(){

      },
      /*清理缓存开关*/
      qingliswichChange(){

      },
      nextStep() {
        this.$router.push({
          name: 'ordinaryChoose',
          params: {
            active: 3
          }
        })
      },
      previousStep() {
        this.$router.push({
          name: 'ordinaryIcon',
          params: {
            active: 1
          }
        })
      }
    },
    mounted() {
      //alert('接受值00：'+this.$route.params.aa)
    }
  }
</script>

<style scoped>
  .ordinaryConfig{
    margin-top: 30px;
  }
.ordinaryConfigDiv{
  width: 100%;
}
  .ordinaryConfigDivMain{
    width: 87%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
  }
  .ordinaryConfigDivMainSmall{
    width: 190px;
    height: 94px;
    margin-top: 19px;
    border-radius:4px;
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
  }
  .ordinaryConfigRight{
    margin-left: 19px;
  }
  .ordinaryConfigDivMainSmallLeft{
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .ordinaryConfigDivMainSmallLeft img{
    width: 26px;
    height: 26px;
  }
  .ordinaryConfigDivMainSmallLeft p{
    margin-top: 5px;
    font-size: 14px;
  }
  .ordinaryConfigDivMainSmallRight{
    height: 65%;
    display: flex;
    align-items: center;
    border-left: 1px solid #e1e1e1;
  }
</style>
