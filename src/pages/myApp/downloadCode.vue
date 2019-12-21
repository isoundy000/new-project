<template>
    <div class="downloadCode">
      <!--弹窗-->
      <div class="mask" v-if="isMask">
        <div class="downloadCodeMask">
          <img @click="close" src="../../../static/image/superSignature/guanbi.png" alt="">
          <div class="downtext textone">
            <h3>什么是下载码?</h3>
            <p>下载码是为使用iOS超级签名的客户推出的一项免费服务，提供下载安装防护机制。</p>
          </div>
          <div class="downtext">
            <h3>如何使用下载码?</h3>
            <p>当下载码功能开启时，没有使用过下载码的用户下载该APP在安装时，需要输入正确的下载码。已下载过该APP的用户，下次安装不需要再输入下载码，可直接安装。</p>
          </div>
          <div class="downtext">
            <h3>下载码下载次数用完了怎么办?</h3>
            <p>每个下载码最多使用次数为10000次。当某个下载码没有剩余使用次数时，用户使用此下载码将无法安装下载。</p>
          </div>
          <div class="downtext">
            <h3>使用下载码的优势</h3>
            <p>开启下载码功能后，可以对APP的流量进行有效的防护和控制，还可以对渠道或是客户群体进行管理，通过出售或赠送下载码的方式邀请重要客户进行下载，减少分发成本。</p>
          </div>
        </div>
      </div>
      <!--创建弹窗-->
      <div class="mask" v-if="isMask2">
        <div class="maskDiv" >
          <div class="maskDivOne" style="background-image: url('../../../static/image/superSignature/chuangjian_bg.png')">
            <p>创建下载码</p>
            <img @click="close" src="../../../static/image/survey/guanbi@2x.png" alt="">
          </div>
          <div class="maskDivThird">
            <p>创建个数 <span style="color: red">*</span></p>
            <el-input
              v-on:input="inputOne"
              class="seachInput2"
              v-model="input2">
            </el-input>
          </div>
          <div class="maskDivThird">
            <p>可使用次数  <span style="color: red">*</span></p>
            <el-input
              v-on:input="inputTwo"
              class="seachInput2"
              v-model="input3">
            </el-input>
          </div>
          <div class="fourthDiv">
            <div @click="okBtn" class="okBtn">
              <p>确定</p>
            </div>
            <div @click="cancelBtn" class="cancelBtn">
              <p>取消</p>
            </div>
          </div>
        </div>
      </div>
      <div class="downloadCodeMain">
       <div class="downloadCodeMainSmallOne">
         <div @click="chuangjian" class="establish">
           <p>创建下载码</p>
         </div>
         <img @click="open" src="../../../static/image/superSignature/gengduo.png" alt="">
       </div>
       <div class="downloadCodeMainSmall">
         <el-input
           class="seachInput"
           placeholder="搜索下载码"
           prefix-icon="el-icon-search"
           v-model="input"
           @change="seachInput">
         </el-input>
         <div class="start" @click="start">
           <p>批量开启</p>
         </div>
         <div class="end" @click="end">
           <p>批量禁用</p>
         </div>
       </div>
     </div>
      <div class="downLoadRecordDiv">
        <div class="secondDiv">
          <el-table
            :data="tableData"
            stripe
            tooltip-effect="dark"
            style="width: 100%"
            align="center"
            @sort-change="changeSort"
            @selection-change="handleSelectionChange"
            :header-cell-style="{background:'#e0f2fd'}"
          >
            <el-table-column
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              prop="codema"
              align="center"
              label="下载码"
              sortable="custom"
            >
            </el-table-column>
            <el-table-column
              prop="ke"
              align="center"
              sortable="custom"
              label="可使用次数"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              align="center"
              sortable="custom"
              label="已使用次数"
            >
            </el-table-column>
            <el-table-column
              prop="num"
              align="center"
              sortable="custom"
              label="剩余使用次数"
            >
            </el-table-column>
            <el-table-column
              prop="date"
              align="center"
              sortable="custom"
              label="创建时间"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              align="center"
              label="操作"
            >
              <template slot-scope="scope">
                <div style="display: flex;justify-content: center">
                  <el-switch
                    @click.stop.native
                    active-color="#2F82FF"
                    inactive-color="#DCDCDC"
                    v-model="scope.row.status==1? true:false "
                    @change="swich(scope.row)"
                  ></el-switch>
                </div>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div class="thirdDiv">
          <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
          <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="10" :current="current" :total=total />
        </div>
      </div>
    </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL} from "../../api";
  import qs from 'qs'
    export default {
        name: 'downloadCode',
      data(){
          return{
            input:'',
            input2:'',
            input3:'',
            isMask:false,
            isMask2:false,
            total:0,
            pageNumber:'',
            current:1,
            tableData: [{
              id:3,
              codema:'333codema',
              ke:'333',
              date: '2016-05-03',
              name: '90',
              num:'200',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id:4,
              codema:'666codema',
              ke:'666',
              date: '2016-05-02',
              name: '60',
              num:'60',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id:5,
              codema:'777codema',
              ke:'777',
              date: '2016-05-04',
              name: '130',
              num:'300',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id:6,
              codema:'888codema',
              ke:'888',
              date: '2016-05-01',
              name: '30',
              num:'600',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id:7,
              codema:'999codema',
              ke:'999',
              date: '2016-05-08',
              name: '165',
              num:'9',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id:8,
              codema:'123codema',
              ke:'123',
              date: '2016-05-06',
              name: '2',
              num:'3',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              id:9,
              codema:'345codema',
              ke:'345',
              date: '2016-05-07',
              name: '3',
              num:'100',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: [],
            newArry:[],
          }
      },
      methods:{
        changeSort(val){
          console.log(val)
        },
        inputOne(){

        },
        inputTwo(){

        },
        chuangjian(){
          this.isMask2=true
        },
        seachInput(){
          let data={
            app_id:this.$route.query.id,
            keywords:this.input,
            page:1,
            page_size:10,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
            console.log(res.data.data.list)
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
          }, err => {
            // console.log(err)
          })
        },
        open(){
          this.isMask=true
        },
        close(){
          this.isMask=false
          this.isMask2=false
        },
        indexChange(i){
          // console.log(i)
          let data={
            app_id:this.$route.query.id,
            page:i,
            page_size:8,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
            // console.log(res.data)
            // console.log(res.data.data.list)
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
            this.tableData=res.data.data.list
          }, err => {
            // console.log(err)
          })
        },
        pageChange(s){
          // console.log(s)
        },
        handleSelectionChange(val) {
          // val.forEach((item)=>{
          //   this.multipleSelection.push(item.id)
          // })
          // console.log(this.multipleSelection)
          // this.multipleSelection.toString()
          // console.log(this.multipleSelection.toString())

            this.multipleSelection=[]
            this.newArry=[]
            this.multipleSelection=val
            console.log(this.multipleSelection)
            this.multipleSelection.forEach((item)=>{
              this.newArry.push(item.id)
            })
            console.log(this.newArry.toString())


        },
        start(){
          let data={
            ids:this.newArry.toString(),
            type:1,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeMulti',qs.stringify(data),config).then(res => {
            let data={
              app_id:this.$route.query.id,
              page:1,
              page_size:10,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
              console.log(res.data.data.list)
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        },
        end(){
          let data={
            ids:this.newArry.toString(),
            type:2,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeMulti',qs.stringify(data),config).then(res => {
            let data={
              app_id:this.$route.query.id,
              page:1,
              page_size:10,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
              console.log(res.data.data.list)
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        },
        swich(){

        },
        okBtn(){
          this.isMask2=false
        },
        cancelBtn(){
          this.isMask2=false
        },
      },
      mounted(){
        let data={
          app_id:this.$route.query.id,
          page:1,
          page_size:10,
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
           console.log(res.data.data.list)
          this.tableData=res.data.data.list
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/8))
        }, err => {
          // console.log(err)
        })
      }
    }
</script>

<style scoped>

  .downloadCodeMain{
    width: 93%;
    height: auto;
    margin: 30px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .downloadCodeMainSmallOne{
    width: 300px;
    display: flex;
    align-items: center;
  }
  .downloadCodeMainSmallOne img{
    margin-left: 10px;
  }
  .establish{
    width: 100%;
    max-width: 116px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 4px;
    font-size: 15px;
    background-color: #2F82FF;
    cursor: pointer;
  }
  .downloadCodeMainSmall{
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .seachInput{
    width: 230px;
  }
  .start{
    width: 100%;
    max-width: 116px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 4px;
    font-size: 15px;
    background-color: #2F82FF;
    cursor: pointer;
  }
  .end{
    width: 100%;
    max-width: 116px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 4px;
    font-size: 15px;
    background-color: #2F82FF;
    cursor: pointer;
  }
.mask {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(2, 2, 2, 0.4);
  z-index: 1000000;
  top: 0;
  left: 0;

}
.downloadCodeMask{
  width: 674px;
  height: 476px;
  background-color: white;
  border-radius: 4px;
  position: relative;
}
  .downloadCodeMask img{
    position: absolute;
    right: 2%;
    top: 3%;
  }
  .textone{
    margin-top: 46px !important;
  }
  .downtext{
    width: 90%;
    margin: 20px auto;
    font-size: 15px;
    color: #333333;
  }
  .downtext p{
    margin-top: 10px;
  }
  .downLoadRecordDiv{
    width: 93%;
    height: 700px;
    margin: 30px auto 0 auto;

  }
  .thirdDiv {
    width:100%;
    /*height: 300px;*/
    margin: 50px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
  .maskDiv {
    width: 525px;
    height: 339px;
    background-size: 525px 339px;
    background-color: white;
  }

  .maskDivOne {
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .maskDivOne p {
    font-size: 22px;
    color: #FFFFFF;
    margin: 0 auto;
  }

  .maskDivOne img {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
  .maskDivThird{
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .maskDivThird p{
    width: 92px;
    font-size: 16px;
    margin-left: 47px;
  }
  .seachInput2{
    width: 350px;
    margin-left: 10px;
  }
  .fourthDiv{
    width: 60%;
    display: flex;
    margin: 40px auto;
    justify-content: space-between;

  }
  .okBtn{
    width: 106px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color:#2F82FF ;
    border-radius: 4px;
    cursor: pointer;
  }
  .cancelBtn{
    width: 106px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666666;
    background-color:#EEEEEE ;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
