<template>
  <div class="appManagement">
    <div class="mask" v-if="isRenZ">
      <div class="conmask">
          <div class="conmaskOne">
            <p style="font-size: 16px">实名认证</p>
            <img @click="renzColse" style="width: 12px;height: 12px" src="../../../static/image/survey/cha.png" alt="">
          </div>
          <div style="width: 95%;margin: 0 auto">
            <p style="font-size: 19px;color: black;margin-top: 10px">根据国家相关法律和规定，上架应用前请先进行实名认证。</p>
            <p style="font-size: 18px;font-weight: bold;color: black;margin-top: 15px">为什么要实名认证？</p>
            <p style="font-size: 16px;color: black;margin-top: 8px">应主管部门和相关规定要求，应用分发平台需如实登记应用软件提供者的身份信息；超级签名仅会将您的信息用于身份认证，不会用作其他用途</p>
            <p style="margin-top: 5px"><a href="http://www.cac.gov.cn/2016-06/28/c_1119123114.htm" target="_blank">国家网信办《移动互联网应用程序信息服务管理规定》</a></p>
            <p style="margin-top: 5px"><a href="http://www.miit.gov.cn/n1146295/n1652858/n1652930/n3757020/c5436955/content.html" target="_blank">工业和信息化部《移动智能终端应用软件预置和分发管理暂行规定》</a></p>
            <p style="color: black;margin-top: 10px">超级签名将会在 <span style="font-weight: bold">2019年11月30日</span>强制所有开发者进行实名认证，届时未实名认证的开发者将无法上架应用 </p>
          </div>
        <div style="display: flex;width: 95%;margin: 50px auto;justify-content: center">
          <div @click="realName" style="width: 150px;height: 42px;background-color: #06B2B6;display: flex;align-items: center;justify-content: center;color: white;border-radius: 6px;margin-right: 20px;cursor: pointer;font-size: 16px"><p>实名认证</p></div>
          <div @click="renzColse" style="width: 150px;height: 42px;background-color: #06B2B6;display: flex;align-items: center;justify-content: center;color: white;border-radius: 6px;margin-left: 20px;cursor: pointer;font-size: 16px"><p>稍后认证</p></div>
        </div>
      </div>
    </div>
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
              <div class="lianjieOne" id="text">{{urlAddress}}</div>
              <textarea id="input">这是幕后黑手</textarea>
              <div @click="copy" class="lianjieTwo">复制链接</div>
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
          <el-breadcrumb-item :to="{ path: '/superSignatureAread' }">首页</el-breadcrumb-item>
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
        v-model="input"
      @change="seachInput">
      </el-input>
      <!--<div class="export" style="background-image: url('../../../static/image/appManagement/anniu@2x (1).png')">-->
        <!--<img src="../../../static/image/survey/daochuicon@2x.png" alt="">-->
        <!--<p>上次/更新应用</p>-->
      <!--</div>-->
    </div>
    <div class="thirdDiv">
      <el-table
        :data="tableData"
        stripe
        @row-click="tableTr"
        :header-cell-style="{background:'#e0f2fd'}"
      >
        <el-table-column label="应用图标" width="100">
          <template slot-scope="scope">
            <img :src="scope.row.icon" width="40" height="40" class="head_pic"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="应用名称"
          >
        </el-table-column>
        <el-table-column
          prop="version_code"
          label="版本号"
          >
        </el-table-column>
        <el-table-column
          prop="tag"
          label="唯一标识"
          >
        </el-table-column>
        <el-table-column
          prop="url"
          label="安装地址"

         >
          <template slot-scope="scope">
            <p style="color: #14BEC8;cursor: pointer" @click.stop="handleEdit(tableData[scope.$index].url,tableData[scope.$index].status)">点击下载</p>
            <!--<el-button size="small" >编辑          </el-button>-->
          </template>
        </el-table-column>

        <el-table-column
          prop="rate"
          label="服务单价"
          >
        </el-table-column>

        <el-table-column
          prop="download_num"
          label="安装量"
          >
        </el-table-column>
        <el-table-column
          prop="download_num"
          label="下载量">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="更新时间"
         >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          >
          <template slot-scope="scope">
            <!--<span v-if="scope.row.status=== 1" style="color: #43A047">分发中</span>-->
            <!--<span v-if="scope.row.status=== -1" style="color: #999999">系统自动下架</span>-->
            <!--<span v-else-if="scope.row.status=== 0" style="color: #999999">已下架</span>-->
            <!--<span v-else-if="scope.row.status=== '已删除'" style="color: #FF0000">{{scope.row.state}}</span>-->
            <div style="display: flex;justify-content: center">
              <el-switch
                @click.stop.native
                active-color="#06B2B6"
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
          width="130">
          <template slot-scope="scope">
            <el-select  class="downSum" @change="allApp(scope.$index,tableData[scope.$index].operation,tableData[scope.$index].id,tableData,tableData[scope.$index].url,tableData[scope.$index].name,tableData[scope.$index].apk_url,tableData[scope.$index].push_type,tableData[scope.$index].package_name,tableData[scope.$index].cert_path)"
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
      <p>共<span style="color: red">{{pageNumber}}</span> 页/ <span style="color: red">{{total}}</span>条记录</p>
      <Page @on-change="indexChange" @on-page-size-change="pageChange" :page-size="10" :current="current" :total=total />
    </div>


  </div>
</template>

<script>

  import QrcodeVue from 'qrcode.vue';
  import  axios from 'axios'
  import qs from 'qs'
  import {BASE_URL} from "../../api";
  import surveyHeader from '../component/surveyHeader'

  export default {
    name: "appManagement",
    data() {
      return {
        isRenZ:false,
        value: '',
        size: 150,
        input: '',
        downSumValue: '',
        isMask: false,
        downSumOptions: [
          {
            value: '下载链接',
          }, {
            value: '查看详情',
          }, {
            value: '更新应用',
          }, {
            value: '删除',
          }],
        tableData: [],
        total:0,
        pageNumber:'',
        current:1,
        urlAddress:'',
        base_url:''
      }
    },
    components: {
      surveyHeader,
      QrcodeVue
    },
    methods: {
      /*实名认证*/
      realName(){
        this.$router.push({
          path:'/realName'
        })
      },
      renzColse(){
        this.isRenZ=false
      },
      swich(row){
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.get(BASE_URL + '/api/user/checkAuthEntication',config).then(res => {
          if(res.data.code==200){
            row.status = !row.status
            if (row.status == true) { //上架
              let data={
                id:row.id,
                type:2
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
                if(res.data.code==200){
                  let data={
                    keywords:this.input,
                    page:this.current,
                    page_size:10,
                  }
                  let config = {
                    headers:{'token':localStorage.getItem('Authorization')}
                  };
                  axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
                    this.total=res.data.data.total
                    this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                    this.tableData=res.data.data.list
                    // console.log(res.data.data)
                  }, err => {
                    // console.log(err)
                  })
                }else{
                  this.$message.error(res.data.msg);
                }

              }, err => {
                // console.log(err)
              })
            } else { //下架
              let data={
                id:row.id,
                type:3
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
                let data={
                  keywords:this.input,
                  page:this.current,
                  page_size:10,
                }
                let config = {
                  headers:{'token':localStorage.getItem('Authorization')}
                };
                axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
                  // console.log(res.data.data)
                  this.total=res.data.data.total
                  this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                  this.tableData=res.data.data.list
                }, err => {
                  // console.log(err)
                })
              }, err => {
                // console.log(err)
              })
            }
          }else if(res.data.code==0){
            /*this.$message.error(res.data.msg);*/
            this.isRenZ=true
          }else if(res.data.code==1){
            this.$message.error(res.data.msg);
          }else if(res.data.code==2){
            this.$message.error(res.data.msg);
          }else if(res.data.code==3){
            this.isRenZ=true
            row.status = !row.status
            if (row.status == true) { //上架
              let data={
                id:row.id,
                type:2
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
                if(res.data.code==200){
                  let data={
                    keywords:this.input,
                    page:this.current,
                    page_size:10,
                  }
                  let config = {
                    headers:{'token':localStorage.getItem('Authorization')}
                  };
                  axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
                    this.total=res.data.data.total
                    this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                    this.tableData=res.data.data.list
                    // console.log(res.data.data)
                  }, err => {
                    // console.log(err)
                  })
                }else{
                  this.$message.error(res.data.msg);
                }

              }, err => {
                // console.log(err)
              })
            } else { //下架
              let data={
                id:row.id,
                type:3
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
                let data={
                  keywords:this.input,
                  page:this.current,
                  page_size:10,
                }
                let config = {
                  headers:{'token':localStorage.getItem('Authorization')}
                };
                axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
                  // console.log(res.data.data)
                  this.total=res.data.data.total
                  this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                  this.tableData=res.data.data.list
                }, err => {
                  // console.log(err)
                })
              }, err => {
                // console.log(err)
              })
            }
          }
        }, err => {
          // console.log(err)
        })



      },
      tableTr(row){
        // console.log(row)
        // console.log(row)
        this.$router.push({
          path:'/appManagementDetail',
          query:{
            id:row.id,
            name:row.name,
            apk_url:row.apk_url,
            push_type:row.push_type,
            package_name:row.package_name,
            cert_path:row.cert_path
          }
        })
      },
      handleEdit(url,status){
        if(status==0){
          this.$message.error('应用已下架');
        }else{
          this.isMask = true
          this.value=url
          this.urlAddress=url
        }

      },
      seachInput(){
        let data={
          keywords:this.input,
          page:this.current,
          page_size:10,
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
          // console.log(res.data)
          // console.log(res.data.data.list)
          this.total=res.data.data.total
          this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
          this.tableData=res.data.data.list
        }, err => {
          // console.log(err)
        })
      },
      /*上下页翻页*/
      indexChange(i){
        // console.log(i)
        let data={
          keywords:this.input,
          page:i,
          page_size:10,
        }
        let config = {
          headers:{'token':localStorage.getItem('Authorization')}
        };
        axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
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
      copy(){
        var text = document.getElementById("text").innerText;
        var input = document.getElementById("input");
        input.value = text; // 修改文本框的内容
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        this.$message({
          message: '复制成功',
          type: 'success'
        });
      },
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
      allApp(index, nameValue,id,rows,url,name,apk_url,push_type,package_name,cert_path) {

        if (nameValue == '下载链接') {
          this.isMask = true
          this.value=url
          //alert(url)
          this.urlAddress=url
        }else if(nameValue == '更新应用'){
          this.$router.push({
            path:'/updateApplication',
            query:{
              id:id
            }
          })




        } else if (nameValue == '查看详情') {
          // let data={
          //   id:id
          // }
          this.$router.push({
            path:'/appManagementDetail',
            query:{
              id:id,
              name:name,
              apk_url:apk_url,
              push_type:push_type,
              package_name:package_name,
              cert_path:cert_path
            }
          })


        }else if (nameValue == '上架') {
       //   alert("选择了上架")
          let data={
            id:id,
            type:2
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
            if(res.data.code==200){
              let data={
                keywords:this.input,
                page:this.current,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.tableData=res.data.data.list
                // console.log(res.data.data)
              }, err => {
                // console.log(err)
              })
            }else{
              this.$message.error(res.data.msg);
            }

          }, err => {
            // console.log(err)
          })
        } else if (nameValue == '下架') {
       //   alert("选择了下架")
          let data={
            id:id,
            type:3
          }
          let config = {
            headers:{'token':localStorage.getItem('Authorization')}
          };
          axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
            let data={
              keywords:this.input,
              page:this.current,
              page_size:10,
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
             // console.log(res.data.data)
              this.total=res.data.data.total
              this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
              this.tableData=res.data.data.list
            }, err => {
              // console.log(err)
            })
          }, err => {
            // console.log(err)
          })
        } else if (nameValue == '删除') {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let data={
              id:id,
              type:1
            }
            let config = {
              headers:{'token':localStorage.getItem('Authorization')}
            };
            axios.post(BASE_URL+'/api/app/appHandle',qs.stringify(data),config).then(res => {
              let data={
                keywords:this.input,
                page:this.current,
                page_size:10,
              }
              let config = {
                headers:{'token':localStorage.getItem('Authorization')}
              };
              axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
                this.total=res.data.data.total
                this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
                this.tableData=res.data.data.list
              }, err => {
                // console.log(err)
              })
            }, err => {
              // console.log(err)
            })
          }).catch(() => {

          });

        }

        this.tableData[index].operation=''
      },
      mask() {
        this.isMask = false
      },


    },
    mounted() {
      // alert("2")
      this.base_url=BASE_URL
      let data={
        keywords:this.input,
        page:this.current,
        page_size:10,
      }
      let config = {
        headers:{'token':localStorage.getItem('Authorization')}
      };
      axios.post(BASE_URL+'/api/app/appList',qs.stringify(data),config).then(res => {
        // console.log(res.data)
        // console.log(res.data.data.list)
        this.total=res.data.data.total
        this.pageNumber=parseInt(Math.ceil(Number(this.total)/10))
        this.tableData=res.data.data.list
      }, err => {
        // console.log(err)
      })

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
    margin: 50px auto;
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
    width: 551px;
    height: 292px;
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
    width: 150px;
    height: 150px;
    border: 1px solid #DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
.appManagementSmallOneB div{
  width: 150px;
  height: 150px;
}
  .appManagementSmallOneB div canvas{
    width: 150px !important;
    height: 150px !important;
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
    overflow: hidden;
    border: 1px solid #DCDCDC;
  }

  .lianjieTwo {
    width: 82px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: white;
    background-color: #28A4F7;
    cursor: pointer;
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
  #input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -10;
  }
  .conmask{
    width: 800px;
    height: auto;
    border-radius: 8px;
    background-color: white;
  }
  .conmaskOne{
    width: 95%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
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
/*.el-table_2_column_14  {*/
  /*color: blue;*/
  /*cursor: pointer;*/
/*}*/
  th{
    color: #909399 !important;
  }
</style>
