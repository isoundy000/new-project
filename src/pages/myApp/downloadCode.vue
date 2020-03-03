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
          <div class="maskDivOne">
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
            <p>单个使用次数  <span style="color: red">*</span></p>
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
         <div class="end" @click="del">
           <p>批量删除</p>
         </div>
         <div class="export" @click="exportBtn">
           <p>一键导出</p>
         </div>
       </div>
     </div>
      <div class="downLoadRecordDiv">
        <div class="secondDiv01">
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
              prop="code"
              align="center"
              label="下载码"
              sortable="custom"
            >
            </el-table-column>
            <el-table-column
              prop="num"
              align="center"
              sortable="custom"
              label="可使用次数"
            >
            </el-table-column>
            <el-table-column
              prop="used"
              align="center"
              sortable="custom"
              label="已使用次数"
            >
            </el-table-column>
            <el-table-column
              prop="surplus"
              align="center"
              sortable="custom"
              label="剩余使用次数"
            >
            </el-table-column>
            <el-table-column
              prop="create_time"
              align="center"
              sortable="custom"
              label="创建时间"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              align="center"
              label="状态"
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
            <el-table-column
              prop="operation"
              label="操作"
              align="center"
              >
              <template slot-scope="scope" class="caozuo">
                <div class="shanchu" @click.stop="shanchuClick(tableData[scope.$index].id)">删除</div>
              </template>
            </el-table-column>
          </el-table>

        </div>
        <div class="thirdDiv">
          <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
          <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="10" :current.sync="current" :total=total />
        </div>
      </div>
    </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL,exportMethod} from "../../api";
  import qs from 'qs'
    export default {
        name: 'downloadCode',
      data(){
          return{
            downSumOptions: [
              {
                value: '删除',
              }],
            input:'',
            input2:'',
            input3:'',
            isMask:false,
            isMask2:false,
            total:0,
            pageNumber:'',
            current:1,
            tableData: [],
            multipleSelection: [],
            newArry:[],
          }
      },
      methods:{
        shanchuClick(id){
          let data={
            id:id,
            type:4,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeHandle',qs.stringify(data),config).then(res => {
            let data={
              app_id:this.$route.query.id,
              page:1,
              page_size:10,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.current=1
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        },
        exportBtn(){
          let data={
            app_id:this.$route.query.id
          }
          axios.post(BASE_URL+'/api/app/export', qs.stringify(data), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded', //请求的数据类型为form data格式
              'token':localStorage.getItem('Authorization')
            },
            'responseType': 'blob'  //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
          }).then(function (response) {
            const blob = new Blob([response.data]);
            const fileName = '下载码.xlsx';
            const linkNode = document.createElement('a');
            linkNode.download = fileName; //a标签的download属性规定下载文件的名称
            linkNode.style.display = 'none';
            linkNode.href = URL.createObjectURL(blob); //生成一个Blob URL
            document.body.appendChild(linkNode);
            linkNode.click();  //模拟在按钮上的一次鼠标单击
            URL.revokeObjectURL(linkNode.href); // 释放URL 对象
            document.body.removeChild(linkNode);
          }).catch(function (error) {
            console.log(error);
          });
        },
        changeSort(val){
          let data={
            app_id:this.$route.query.id,
            page:1,
            page_size:10,
            order:val.prop,
            sort:val.order
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
            this.tableData=res.data.data.list
            this.total=res.data.data.total
            this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
            this.current=1
          }, err => {
            // console.log(err)
          })
        },
        inputOne(){
          if(this.input2!=''){
            var max=100
            var regex = /^\d+$/;
            if(regex.test(this.input2)){
              if(this.input2>max){
                this.$message.error('不能大于100');
                this.input2=''
              }
            }else{
              this.$message.error('只能输入整数');
              this.input2=''
            }
          }
        },
        inputTwo(){
          if(this.input3!=''){
            var max=10000
            var regex = /^\d+$/;
            if(regex.test(this.input3)){
              if(this.input3>max){
                this.$message.error('不能大于10000');
                this.input3=''
              }
            }else{
              this.$message.error('只能输入整数');
              this.input3=''
            }
          }
        },
        chuangjian(){
          this.isMask2=true
          this.input2=''
          this.input3=''
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
            page_size:10,
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
            this.multipleSelection.forEach((item)=>{
              this.newArry.push(item.id)
            })


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
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.current=1
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
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.current=1
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        },
        del(){
          let data={
            ids:this.newArry.toString()
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/downloadCodeDel',qs.stringify(data),config).then(res => {
            let data={
              app_id:this.$route.query.id,
              page:1,
              page_size:10,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
              this.tableData=res.data.data.list
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.current=1
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        },
        swich(row){
          if(row.status==1){
            let data={
              id:row.id,
              type:2,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/downloadCodeHandle',qs.stringify(data),config).then(res => {
              let data={
                app_id:this.$route.query.id,
                page:1,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
                this.tableData=res.data.data.list
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.current=1
              }, err => {
                // console.log(err)
              })
            }, err => {
              // console.log(err)
            })
          }else{
            let data={
              id:row.id,
              type:1,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/downloadCodeHandle',qs.stringify(data),config).then(res => {
              let data={
                app_id:this.$route.query.id,
                page:1,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
                this.tableData=res.data.data.list
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.current=1
              }, err => {
                // console.log(err)
              })
            }, err => {
              // console.log(err)
            })
          }
        },
        okBtn(){
          let data={
            app_id:this.$route.query.id,
            number:this.input2,
            num:this.input3,
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/addDownloadCode',qs.stringify(data),config).then(res => {
            if(res.data.code==200){
              this.$message.success(res.data.msg);
              let data={
                app_id:this.$route.query.id,
                page:1,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/downloadCodeList',qs.stringify(data),config).then(res => {
                this.tableData=res.data.data.list
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.current=1
              }, err => {
                // console.log(err)
              })
            }else{
              this.$message.error(res.data.msg);
            }
          }, err => {
            // console.log(err)
          })




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
          this.tableData=res.data.data.list
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
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
    width: 730px;
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
  .export{
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
  z-index: 999;
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
    background-color: white;

  }

  .maskDivOne {
    width: 100%;
    height: 47px;
    background-size: 100% 47px;

    background-image: url('../../../static/image/superSignature/chuangjian_bg.png');
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
    width: 122px;
    font-size: 16px;
    margin-left: 37px;
  }
  .seachInput2{
    width: 330px;
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
  .shanchu{
    width:56px;
    height:28px;
    /*background:rgba(2,178,181,1);*/
    border:1px solid #FF0000;
    border-radius:2px;
    line-height: 28px;
    color: #FF0000;
    cursor: pointer;
    margin: 0 auto;
  }
  .caozuo{
    display: flex;
  }
</style>
