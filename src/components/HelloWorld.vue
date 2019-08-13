<template>
  <div class="hello">
    <div class="block">
      <el-carousel :interval=3000 trigger="click" height="300px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="big">
      <p class="bigp">dsdadasd</p>
      <div class="bigpdiv">
        <p>1234561</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__indicators--horizontal{
    width: 100px;
    height: 30px;
    border-radius: 25px;
    margin-bottom: 20px;
    background-color: gray;
  }
  .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    /*background-color: black;*/
  }
  .big{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .big .bigp{
    color: red;
  }
  .big:hover .bigp{
    text-align: center;
    color: blue;
  }
.bigpdiv{
  width: 100px;
  height: 50px;
  position: absolute;
  top: 100px;
  border: 1px solid red;
  opacity: 0;
  -webkit-transition:all .3s linear ;
}
  .big:before{
    content: "";
    width:100px;
    height:100px;
    background-color: black;
    opacity:0;
    position: absolute;
    top: 100px;
    left: 0;
    -webkit-transition:all .3s linear ;
  }
  .big:hover:before{
    opacity:0.7;
    top: 0;
    -webkit-transition:all .3s linear ;

  }
  .big:hover .bigpdiv{
    opacity:0.7;
    top: 0;
    -webkit-transition:all .3s linear ;
  }

</style>
