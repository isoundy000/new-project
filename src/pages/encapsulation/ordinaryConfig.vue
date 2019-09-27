<template>
  <div class="ordinaryConfig">
    <!--加载动画-->
    <Modal
      v-model="modal1"
      title="加载动画"
      :mask-closable="false"
      class="jiazaiDiv"
    >
      <div class="jiaziaDivMain">



        <div class="jiaziaDivMainLeft" @click="jiaziaDivMainLeft" :class="{ 'textColorBorder': jiazaiTextBorder1 }">
          <p class="jiazaiText" :class="{ 'textColor': jiazaiTextColor1 }">顶部进度条</p>
          <div class="mobileMotai">
            <div class="mobileMotaiImg">
              <img src="../../../static/image/ordinary/zhuangtai.png" alt="">
            </div>
            <p class="mumuyun">木木云</p>
            <p class="dynamicJiazai"></p>
            <p v-html="jiaziastyleInner"></p>

          </div>
        </div>
        <div class="jiaziaDivMainRight" @click="jiaziaDivMainRight" :class="{ 'textColorBorder': jiazaiTextBorder2 }">
          <p class="jiazaiText" :class="{ 'textColor': jiazaiTextColor2 }">加载等待框</p>
          <div class="mobileMotai">
            <div class="mobileMotaiImg">
              <img src="../../../static/image/ordinary/zhuangtai.png" alt="">
            </div>
            <p class="mumuyun1">木木云</p>
            <div class="loadingImg">
              <img src="../../../static/image/ordinary/jiazai@2x.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="jiazaiSelectColor">
        <p>颜色样式</p>
        <el-color-picker
          v-model="jiazaicolor"
          @active-change="jiazaiSelectColor"
          @change="jiazaiSelectColorRinow"
          :predefine="predefineColors">
        </el-color-picker>
      </div>
      <div class="queOk" @click="jiazaiOk" slot="footer">保存修改</div>
    </Modal>
    <!--下拉刷新-->
    <Modal
      v-model="modal2"
      title="下拉刷新"
      :mask-closable="false"
      class="xialaDiv"
    >
      <div class="xialaDivMain">
        <div class="xialaOpen" @click="xialaOpen" :class="{ 'selectColor': xiaSelect1 }">开启</div>
        <div class="xialaClose" :class="{ 'selectColor': xiaSelect2 }" @click="xialaClose">关闭</div>
      </div>

      <div class="queOk" @click="xialaOk" slot="footer">保存修改</div>
    </Modal>
    <!--清理缓存-->
    <Modal
      v-model="modal3"
      title="清理缓存"
      :mask-closable="false"
      class="qingliDiv"
    >
      <div class="xialaDivMain">
        <div class="xialaOpen" @click="qingliOpen" :class="{ 'selectColor': qingSelect1 }">开启</div>
        <div class="xialaClose" :class="{ 'selectColor': qingSelect2 }" @click="qingliClose">关闭</div>
      </div>
      <p style="color: #FF0000;font-size: 12px;margin-top: 10px">每次开启APP，后台自动清理缓存</p>

      <div class="queOk" @click="qingliOk" slot="footer">保存修改</div>
    </Modal>
    <!--退出提示-->
    <Modal
      v-model="modal4"
      title="退出提示"
      :mask-closable="false"
      class="tuichuDiv"
    >
      <div class="tuichuDivMain">
        <div class="tuichuDivMainSmall">
          <img v-if="tuichuShowOne" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img v-else @click="tuichuDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>单击退出</p>
        </div>
        <div class="tuichuDivMainSmall">
          <img v-if="tuichuShowTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img v-else @click="tuichuDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>双击退出</p>
        </div>
        <div class="tuichuDivMainSmall">
          <img v-if="tuichuShowThree" src="../../../static/image/superSignature/danxuan.png" alt="">
          <img v-else @click="tuichuDan3()" src="../../../static/image/superSignature/danweixuan.png" alt="">
          <p>确认弹窗退出</p>
        </div>
      </div>
      <p style="color: #FF0000;font-size: 12px;margin-top: 10px">该配置只针对安卓手机有效，苹果手机点击Home健直接退出</p>

      <div class="queOk" @click="tuichuOk" slot="footer">保存修改</div>
    </Modal>
    <!--浏览器内核-->
    <Modal
      v-model="modal5"
      title="浏览器内核"
      :mask-closable="false"
      class="browserDiv"
    >
      <div style="display: flex;">
        <div class="browserDivMain">
          <p>针对安卓</p>
          <div class="browserDivMainSmall">
            <img v-if="browserShowOne" src="../../../static/image/superSignature/danxuan.png" alt="">
            <img v-else @click="browserDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
            <p>腾讯X5内核</p>
          </div>
          <div class="browserDivMainSmall">
            <img v-if="browserShowTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
            <img v-else @click="browserDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
            <p>Android WebView</p>
          </div>

        </div>
        <div class="browserDivMain" style="margin-left: 150px">
          <p>针对iOS</p>
          <div class="browserDivMainSmall">
            <img v-if="browserShowThree" src="../../../static/image/superSignature/danxuan.png" alt="">
            <img v-else @click="browserDan3()" src="../../../static/image/superSignature/danweixuan.png" alt="">
            <p>iOS原生浏览器</p>
          </div>
          <div class="browserDivMainSmall">
            <img v-if="browserShowFour" src="../../../static/image/superSignature/danxuan.png" alt="">
            <img v-else @click="browserDan4()" src="../../../static/image/superSignature/danweixuan.png" alt="">
            <p>Safari</p>
          </div>

        </div>
      </div>


      <div class="queOk" @click="browserOk" slot="footer">保存修改</div>
    </Modal>
    <!--分享-->
    <Modal
      v-model="modal6"
      title="分享"
      :mask-closable="false"
      class="shareDiv"
    >
      <div>
        <div class="shareDivMain">
          <div class="shareDivMainSmallOne">
            <p>调用系统自带分享功能</p>
          </div>

        </div>
        <div class="shareDivMainSmallTwo">
          <div>
            <img src="../../../static/image/ordinary/wecat@2x.png" alt="">
            <p>微信好友</p>
          </div>
          <div>
            <img src="../../../static/image/ordinary/pengyouquan@2x.png" alt="">
            <p>朋友圈</p>
          </div>
          <div>
            <img src="../../../static/image/ordinary/qq@2x.png" alt="">
            <p>QQ好友</p>
          </div>
          <div>
            <img src="../../../static/image/ordinary/kongjian@2x.png" alt="">
            <p>QQ空间</p>
          </div>
          <div>
            <img src="../../../static/image/ordinary/lianjie@2x.png" alt="">
            <p>复制链接</p>
          </div>
          <div>
            <img src="../../../static/image/ordinary/weibo@2x.png" alt="">
            <p>微博</p>
          </div>

        </div>


      </div>
      <div style="margin-top: 50px">
        <p style="font-weight: bold;font-size: 14px">分享内容</p>
        <div class="shareDivMainSmallThree">
          <p>分享内容</p>
          <el-input :disabled="false" class="thirdInput" v-model="share_content" placeholder="请输入30个以内的介绍文字"></el-input>
          <p style="margin-top: 20px">网址链接<span style="color: red">*</span></p>
          <el-input :disabled="false" class="thirdInput" v-model="share_url"
                    placeholder="请输入http://或者https://开头的网站链接，可以是APP下载链接"></el-input>
        </div>
      </div>

      <div class="queOk" @click="shareOk" slot="footer">保存修改</div>
    </Modal>
    <!--长按存图-->
    <Modal
      v-model="modal7"
      title="长按存图"
      :mask-closable="false"
      class="qingliDiv"
    >
      <div class="xialaDivMain">
        <div class="xialaOpen" @click="depositOpen" :class="{ 'selectColor': depositSelect1 }">开启</div>
        <div class="xialaClose" :class="{ 'selectColor': depositSelect2 }" @click="depositClose">关闭</div>
      </div>
      <p style="color: #FF0000;font-size: 12px;margin-top: 10px">长按图片即刻保存到手机相册中</p>

      <div class="queOk" @click="depositOk" slot="footer">保存修改</div>
    </Modal>
    <!--网页缩放-->
    <Modal
      v-model="modal8"
      title="网页缩放"
      :mask-closable="false"
      class="qingliDiv"
    >
      <div class="xialaDivMain">
        <div class="xialaOpen" @click="zoomOpen" :class="{ 'selectColor': zoomSelect1 }">开启</div>
        <div class="xialaClose" :class="{ 'selectColor': zoomSelect2 }" @click="zoomClose">关闭</div>
      </div>
      <p style="color: #FF0000;font-size: 12px;margin-top: 10px">支持手势对网页进行放大缩小</p>

      <div class="queOk" @click="zoomOk" slot="footer">保存修改</div>
    </Modal>
    <!--自定义导航栏-->
    <Modal
      v-model="modal9"
      title="自定义导航栏"
      :mask-closable="false"
      class="customDiv"
    >
      <!--自定义导航栏左边-->
      <div class="customDivMain" >
        <div class="customDivMainSmall1" style="background-image: url('../../../static/image/ordinary/shouji.png')">
          <p v-html="beijingstyleInner"></p>
          <div class="customDivMainSmall1Div" v-show="customDivMainSmall1DivShow">

            <div class="zhuangtai1" v-show="zhuangtai1Show">
              <img v-if="imgShow"  src="../../../static/image/ordinary/zhuangtai1.png" alt="">
              <img v-else src="../../../static/image/ordinary/ztl_hei.png" alt="">

            </div>
            <p v-html="beijingstyleInner2"></p>
            <p v-html="beijingstyleInner3"></p>
            <!--手机导航栏-->
            <div class="customIconDiv" v-show="biaptiShow">
              <div class="firstIcon daohangtextcolor">
                <div class="firstIconDiv" v-for="(leftIconList,index) in leftIcon" :key="index+2">
                  <i class="iconfont " :class="leftIconList"></i>
                </div>
              </div>
              <div class="homepage daohangtextcolor">{{titleTextinput}}</div>
              <div class="secondIcon daohangtextcolor">
                <div class="secondIconDiv" v-for="(rightIconList,index) in rightIcon" :key="index+3">
                  <i class="iconfont " :class="rightIconList"></i>
                </div>

              </div>
            </div>
            <!--手机尾部-->
            <div class="custFooter">
              <div class="custFooterDiv">
                <div class="custFooterDivCircular"></div>
                <p>首页</p>
              </div>
              <div class="custFooterDiv">
                <div class="custFooterDivCircular"></div>
                <p>空白</p>
              </div>
              <div class="custFooterDiv">
                <div class="custFooterDivCircular"></div>
                <p>空白</p>
              </div>
              <div class="custFooterDiv">
                <div class="custFooterDivCircular"></div>
                <p>空白</p>
              </div>
            </div>
          </div>
          <div class="customDivMainSmall1Div22" v-show="customDivMainSmall1Div22Show" style="background-image: url('../../../static/image/ordinary/bg@2x.png')">
            <div class="zhuangtai12" v-show="zhuangtai1Show">
              <img v-if="imgShow"  src="../../../static/image/ordinary/zhuangtai1.png" alt="">
              <img v-else src="../../../static/image/ordinary/ztl_hei.png" alt="">

            </div>
          </div>
        </div>
        <div>
          <!--自定义导航栏右边-->
          <div class="customDivMainSmall2" >
            <div class="customDivMainselsectDiv">
              <p class="daoHangTitle">状态栏显示</p>
              <div class="customDivMainselsect">
                <img v-if="customShowStateOne" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customStateDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>开启</p>
              </div>
              <div class="customDivMainselsect">
                <img v-if="customShowStateTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customStateDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>关闭</p>
              </div>
            </div>
            <div class="customDivMainselsectDiv" v-show="zhuangtai1Show">
              <p class="daoHangTitle">状态栏样式</p>
              <div class="customDivMainselsect">
                <img v-if="customShowCssOne" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customCssDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>自定义颜色</p>
              </div>
              <div class="customDivMainselsect">
                <img v-if="customShowCssTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customCssDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>背景图</p>
              </div>
            </div>
            <div class="customDivMainselsectDiv rightBeijing" >
              <p class="daoHangTitle">背景颜色</p>
              <div class="beijingSelectColor" style="margin-left: 20px">
                <el-color-picker
                  v-model="beijingcolor"
                  @active-change="beijingSelectColor"
                  @change="beijingSelectColorRinow"
                  :predefine="predefineColors">
                </el-color-picker>
              </div>
            </div>
            <div class="customDivMainselsectDiv" v-show="zhuangtai1Show">
              <p class="daoHangTitle">文字颜色</p>
              <div class="customDivMainselsect">
                <img v-if="customShowTextOne" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customTextDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>白</p>
              </div>
              <div class="customDivMainselsect">
                <img v-if="customShowTextTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customTextDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>黑</p>
              </div>
            </div>
          </div>
          <div class="customDivMainSmall3" v-show="customDivMainSmall3">
            <div class="customDivMainselsectDiv">
              <p class="daoHangTitle">标题栏显示</p>
              <div class="customDivMainselsect">
                <img v-if="customShowTitleOne" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customTitleDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>开启</p>
              </div>
              <div class="customDivMainselsect">
                <img v-if="customShowTitleTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
                <img v-else @click="customTitleDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                <p>关闭</p>
              </div>
            </div>
            <div class="customDivMainselsectDiv" v-show="biaptiShow">
              <p class="daoHangTitle">标题文字</p>
              <div class="customDivMainselsect">
                <el-input
                  style="width: 200px"
                  maxlength="4"
                  v-model="titleTextinput"
                  @change="titleTextinputChange">
                </el-input>
              </div>

            </div>
            <div class="customDivMainselsectDiv" v-show="biaptiShow">
              <p class="daoHangTitle">背景颜色</p>
              <div class="beijingSelectColor" style="margin-left: 20px">
                <el-color-picker
                  v-model="beijingcolor2"
                  @active-change="beijingSelectColor2"
                  @change="beijingSelectColorRinow2"
                  :predefine="predefineColors">
                </el-color-picker>
              </div>
            </div>
            <div class="customDivMainselsectDiv" v-show="biaptiShow">
              <p class="daoHangTitle">文字、图标颜色</p>
              <div class="beijingSelectColor" style="margin-left: 20px">
                <el-color-picker
                  v-model="beijingcolor3"
                  @active-change="beijingSelectColor3"
                  @change="beijingSelectColorRinow3"
                  :predefine="predefineColors">
                </el-color-picker>
              </div>
            </div>
            <div class="customDivMainselsectDiv1" v-show="biaptiShow">
              <p class="daoHangTitle">左侧功能</p>
              <div class="customDivMainselsectDiv11" >
                <div class="customDivMainselsectDiv11Check" v-for="(leftList,index) in leftCheckboxList" :key="index+4">
                  <el-checkbox-group   v-model="newXinzhi"  :min="0" :max="2">
                  <el-checkbox name="type" :label="leftList.name"  @change="leftListChange(index,leftList.checkValue,leftList.name,leftList.icon)" :checked="leftCheckboxList[index].checkValue">{{leftList.name}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
            <div class="customDivMainselsectDiv1" v-show="biaptiShow">
              <p class="daoHangTitle">右侧功能</p>
              <div class="customDivMainselsectDiv11" >
                <div class="customDivMainselsectDiv11Check" v-for="(rightList,index) in rightCheckboxList" :key="index+5">
                  <el-checkbox-group  v-model="newXinzhi1" :min="0" :max="2">
                    <el-checkbox name="type" :label="rightList.name"  @change="rightListChange(index,rightList.checkValue,rightList.name,rightList.icon)"  :checked="rightCheckboxList[index].checkValue">{{rightList.name}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
          <div class="customDivMainSmall5" v-show="customDivMainSmall5">
            <p class="daoHangTitle" style="margin-top: 30px">标题栏</p>
            <p class="daoHangTitle" style="width: 100%;margin-top: 30px;color: red">状态栏选择背景图延伸之后，无法显示标题栏，如需显示标题栏，请选择【自定义颜色】的
              状态栏显示方式。</p>
          </div>
        </div>

      </div>

      <div class="queOk" @click="customOk" slot="footer">保存修改</div>
    </Modal>
    <!--自定义底栏-->
    <Modal
      v-model="modal10"
      title="自定义底栏"
      :mask-closable="false"
      class="footerDiv"
    >
      <!--自定义底栏左边-->
      <div class="customDivMain" >
        <div class="footerDivMainSmall1" style="background-image: url('../../../static/image/ordinary/shouji.png')">

          <div class="customDivMainSmall1Div" >

            <div class="zhuangtai111" >
              <img  src="../../../static/image/ordinary/zhuangtai1.png" alt="">
            </div>

            <!--手机导航栏-->
            <div class="customIconDiv111" >
              <div class="homepage daohangtextcolor">{{titleTextinput}}</div>
            </div>
            <!--手机尾部-->
            <p v-html="footerstyleInner"></p>
            <p v-html="footerstyleInner1"></p>
            <div class="custFooter">
              <div class="custFooterDiv" v-for="(list,index)  in footerText" :key="index+6">
                <div class="custFooterDivCircular" v-show="onlyIcon"></div>
                <!--<i class="iconfont icon-yiliaohangyedeICON-"></i>-->
                <!--<p v-if="list.isText">{{list.text}}</p>-->
                <p v-show="onlyText">{{list.daohangnameInput}}</p>
              </div>
              <div class="custFooterDiv" v-for="(list,index)  in footerText2" :key="index+10">
                <div v-show="onlyIcon" class="custFooterDivCircular"></div>
                <!--<i class="iconfont icon-yiliaohangyedeICON-"></i>-->
                <!--<p v-if="list.isText">{{list.text}}</p>-->
                <p v-show="onlyText">{{list.daohangnameInput}}</p>
              </div>


            </div>
          </div>

        </div>
        <div>
          <!--自定义底栏右边-->
          <div class="footerDivMainSmall2" >

            <div class="newcustomDivMainselsectDiv" >
              <p class="newdaoHangTitle">背景颜色</p>
              <div class="beijingSelectColor" style="margin-top: 15px">
                <el-color-picker
                  v-model="footercolor"
                  @active-change="footerSelectColor"
                  @change="footerSelectColorRinow"
                  :predefine="predefineColors">
                </el-color-picker>
              </div>
            </div>
            <div class="newcustomDivMainselsectDiv " >
              <p class="newdaoHangTitle">文字和图标颜色——默认色</p>
              <div class="beijingSelectColor " style="display: flex;align-items: center;height: 70px">
                <el-color-picker
                  v-model="footercolor1"
                  @active-change="footerSelectColor1"
                  @change="footerSelectColorRinow1"
                  :predefine="predefineColors">
                </el-color-picker>
                <p style="color: #02B2B5;margin-left: 15px;cursor: pointer" @mouseenter="chakanEnter()" @mouseleave="chakanLeave()">查看案例</p>
                <img v-show="chakan" src="../../../static/image/ordinary/anli1@2x.png" alt="">
              </div>
            </div>
            <div class="newcustomDivMainselsectDiv" >
              <p class="daoHangTitle">显示</p>
              <div style="display: flex;margin-top: 15px">
                <div class="footerDivMainselsect">
                  <img v-if="footerShowTextOne" src="../../../static/image/superSignature/danxuan.png" alt="">
                  <img v-else @click="footerTextDan1()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                  <p>显示图标和名称</p>
                </div>
                <div class="footerDivMainselsect">
                  <img v-if="footerShowTextTwo" src="../../../static/image/superSignature/danxuan.png" alt="">
                  <img v-else @click="footerTextDan2()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                  <p>只显示图标</p>
                </div>
                <div class="footerDivMainselsect">
                  <img v-if="footerShowTextThree" src="../../../static/image/superSignature/danxuan.png" alt="">
                  <img v-else @click="footerTextDan3()" src="../../../static/image/superSignature/danweixuan.png" alt="">
                  <p>只显示名称</p>
                </div>
              </div>

            </div>
            <div class="newcustomDivMainselsectDiv" >
              <div style="display: flex;justify-content: space-between;width: 85%">
                <p class="daoHangTitle" style="width: 200px">导航配置 <span style="color: #999999">（支持2-5个）</span></p>
                <p @click="delAll" style="color:#02B2B5;font-size: 14px;cursor: pointer ">清空导航配置</p>
              </div>
              <div class="addDanhang">
                <div class="addDanhangTitle">
                  <p class="newAddTrOne"></p>
                  <p class="newAddTrTwo" >导航功能</p>
                  <p class="newAddTrThree" >导航名称</p>
                  <p class="newAddTrFour">图标</p>
                  <p class="newAddTrFive"></p>
                </div>
                <div class="newAddTr" v-for="(list,index)  in footerText" :key="1+index">
                  <div class="newAddTrOne">
                    <p>{{list.name}}</p>
                  </div>
                 <div class="newAddTrTwo">
                   <el-select class="chooseApp" @change="chooseFunction()" v-model="list.functionValue" placeholder="请选择">
                     <el-option
                       v-for="item in chooseFunctionOptions"
                       :key="item.id"
                       :label="item.value"
                       :value="item.id">
                     </el-option>
                   </el-select>
                 </div>
                  <div class="newAddTrThree">
                    <el-input
                      maxlength="4"
                      class="daohangInput"
                      @change="daohangnameInputEvent(index)"
                      placeholder="四个字以内"
                      v-model="list.daohangnameInput"
                    >
                    </el-input>
                  </div>
                  <div class="newAddTrFour">
                    <img src="../../../static/image/ordinary/tianjiatubiao@2x.png" alt="">
                  </div>
                  <div class="newAddTrFive">

                  </div>
                </div>
                <div class="newAddTr" @mouseenter="delEnter(index)" @mouseleave="delLeave(index)" v-for="(list,index)  in footerText2" :key="index+8">
                  <div class="newAddTrOne">
                    <p>{{list.name}}</p>
                  </div>
                  <div class="newAddTrTwo">
                    <el-select class="chooseApp" @change="chooseFunction()" v-model="list.functionValue" placeholder="请选择">
                      <el-option
                        v-for="item in chooseFunctionOptions"
                        :key="item.id"
                        :label="item.value"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </div>
                  <div class="newAddTrThree">
                    <el-input
                      maxlength="4"
                      class="daohangInput"
                      @change="daohangnameInputEvent(index)"
                      placeholder="四个字以内"
                      v-model="list.daohangnameInput"
                    >
                    </el-input>

                  </div>
                  <div class="newAddTrFour">
                    <img src="../../../static/image/ordinary/tianjiatubiao@2x.png" alt="">
                  </div>
                  <div class="newAddTrFive" >
                    <div @click="newAddTrdel(index,list.name)" v-show="list.delShow">
                      <img src="../../../static/image/ordinary/del@2x.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="newAddTraddBtn" @click="newAddTraddBtn" v-if="kedian">
                  <img src="../../../static/image/ordinary/xinzeng@2x.png" alt="">
                  <p>新增导航</p>
                </div>
                <div class="newAddTraddBtnhui" v-else>
                  <img src="../../../static/image/ordinary/xinzeng@2x.png" alt="">
                  <p>新增导航</p>
                </div>

              </div>



            </div>
          </div>

        </div>

      </div>

      <div class="queOk" @click="customOk" slot="footer">保存修改</div>
    </Modal>






    <div class="ordinaryConfigDiv">
      <p style="padding-left: 50px; margin: 0 auto;width: 87%;font-size: 14px;font-weight: bold">基础配件</p>
      <div class="ordinaryConfigDivMain">
        <div @click="jiazanClick" class="ordinaryConfigDivMainSmall" :class="{ 'configColor': config1 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigJiazai" src="../../../static/image/ordinary/jiazai_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/jiazai_s.png" alt="">
            <p>加载效果</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="jiazaiswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="jiazaiswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="xialaClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight"
             :class="{ 'configColor': config2 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigXiala" src="../../../static/image/ordinary/xiala_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/xiala_s.png" alt="">
            <p>下拉刷新</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="xialaswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="xialaswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="qingliClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight"
             :class="{ 'configColor': config3 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigQingli" src="../../../static/image/ordinary/qingli_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/qingli_s.png" alt="">
            <p>清理缓存</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="qingliswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="qingliswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="tuichuClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight"
             :class="{ 'configColor': config4 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigTuichu" src="../../../static/image/ordinary/tuichu_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/tuichu_s.png" alt="">
            <p>退出提示</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="tuichuswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="tuichuswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="browserClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight"
             :class="{ 'configColor': config5 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigBrowser" src="../../../static/image/ordinary/liulanqi_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/liulanqi_s.png" alt="">
            <p>浏览器内核</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="browserswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="browserswichChange">
            </el-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="ordinaryConfigDiv">
      <p style=" padding-left: 50px;margin: 0 auto;width: 87%;font-size: 14px;font-weight: bold">拓展配件</p>
      <div class="ordinaryConfigDivMain">
        <div @click="shareClick" class="ordinaryConfigDivMainSmall" :class="{ 'configColor': config6 }">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigShare" src="../../../static/image/ordinary/fenxiang_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/fenxiang_s.png" alt="">
            <p>分享</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="shareswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="shareswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="depositClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight"
             :class="{ 'configColor': config7}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigDeposit" src="../../../static/image/ordinary/zuntu_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/zuntu_s.png" alt="">
            <p>长按存图</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="depositswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="depositswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="zoomClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight"
             :class="{ 'configColor': config8}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigZoom" src="../../../static/image/ordinary/suofang_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/suofang_s.png" alt="">
            <p>网页缩放</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="zoomswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="zoomswichChange">
            </el-switch>
          </div>
        </div>
        <div @click="customClick" class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config9}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigCustom" src="../../../static/image/ordinary/daohang_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/daohang_s.png" alt="">
            <p>自定义导航栏</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="customswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="customswichChange">
            </el-switch>
          </div>
        </div>
        <div class="ordinaryConfigDivMainSmall ordinaryConfigRight" :class="{ 'configColor': config10}">
          <div class="ordinaryConfigDivMainSmallLeft">
            <img v-if="ordinaryConfigFooter" src="../../../static/image/ordinary/dilan_n.png" alt="">
            <img v-else src="../../../static/image/ordinary/dilan_s.png" alt="">
            <p>自定义底栏</p>
          </div>
          <div class="ordinaryConfigDivMainSmallRight">
            <el-switch
              @click.stop.native
              v-model="footerswitch"
              active-color="#06B2B6"
              inactive-color="#999999"
              @change="footerswichChange">
            </el-switch>
          </div>
        </div>
      </div>
    </div>
    <div class="ordinaryConfigDivMain2">
      <div style="width:100%;margin-bottom: 50px;display: flex;margin-top: 90px;justify-content: space-evenly">
        <p style="width: 190px" class="gonextStep" @click="previousStep">上一步</p>
        <p style="width: 190px" v-show="isNext" class="huinextStep">下一步</p>
        <p style="width: 190px" v-show="isNext1" class="lvnextStep" @click="nextStep">下一步</p>
        <p style="width: 190px"></p>
        <p style="width: 190px"></p>
        <p style="width: 190px"></p>
      </div>
    </div>

  </div>
</template>

<script>
  import  axios from 'axios'
  import {BASE_URL,UPLOAD_BASE_URL} from "../../api";
  import qs from 'qs'
  export default {
    name: "ordinaryConfig",
    data() {
      return {
        customDivMainSmall3:true,
        customDivMainSmall5:false,
        customDivMainSmall1Div22Show:false, //自定义状态栏样式---自定义颜色
        customDivMainSmall1DivShow:true,//自定义状态栏样式---背景图
        zheng:false,
        imgShow:true,
        newXinzhi:[],
        newXinzhi1:[],
        jiazaiswitch: false,//加载效果开关布尔值
        ordinaryConfigJiazai: true,//灰色加载效果开关
        config1: false,//加载效果border颜色布尔值
        modal1: false,//加载效果模态框
        jiazaiTextColor1: true,//加载效果模态框文字颜色
        jiazaiTextColor2: false,//加载效果模态框文字颜色
        jiazaiTextBorder1: true,//加载效果模态框border颜色
        jiazaiTextBorder2: false,//加载效果模态框border颜色
        jiaziastyleInner: '',
        jiazaicolor: 'rgba(2,178,181,1)',
        jiazaiValue: 1,
        xialaswitch: false,//下拉刷新开关布尔值
        ordinaryConfigXiala: true,//灰色下拉刷新开关
        config2: false,//下拉刷新border颜色布尔值
        modal2: false,//下拉刷新模态框
        xiaSelect1: true,
        xiaSelect2: false,
        xialaValue: 1,//下拉刷新值(传给后台的值，默认为1)
        qingliswitch: false,//清理缓存开关布尔值
        ordinaryConfigQingli: true,//灰色清理缓存开关
        config3: false,//清理缓存border颜色布尔值
        modal3: false,//清理缓存模态框
        qingSelect1: true,
        qingSelect2: false,
        qingliValue: 1,//清理缓存值(传给后台的值，默认为1)
        redText: true,
        tuichuswitch: false,//退出提示开关布尔值
        ordinaryConfigTuichu: true,//灰色退出提示开关
        config4: false,//退出提示border颜色布尔值
        modal4: false,//退出提示模态框
        tuichuValue: 1,//退出提示值(传给后台的值，默认为1)
        tuichuShowOne: true,//退出第一个单选框
        tuichuShowTwo: false,//退出第一个单选框
        tuichuShowThree: false,//退出第一个单选框
        browserswitch: false,//浏览器内核开关布尔值
        ordinaryConfigBrowser: true,//灰色浏览器内核开关
        config5: false,//浏览器内核border颜色布尔值
        modal5: false,//浏览器内核模态框
        browserShowOne: true,
        browserShowTwo: false,
        browserShowThree: true,
        browserShowFour: false,
        browser_android: 1,//浏览器内核示安卓值(传给后台的值，默认为1)
        browser_ios: 1,//浏览器内核示IOS值(传给后台的值，默认为1)
        shareswitch: false,//分享开关布尔值
        ordinaryConfigShare: true,//灰色分享开关
        config6: false,//分享border颜色布尔值
        modal6: false,//分享模态框
        share_content: '',//分享内容
        share_url: '',//分享链接
        depositswitch: false,//长按存图开关布尔值
        ordinaryConfigDeposit: true,//灰色长按存图开关
        config7: false,//长按存图border颜色布尔值
        modal7: false,//长按存图模态框
        depositSelect1: true,
        depositSelect2: false,
        depositValue: 1,//长按存图值(传给后台的值，默认为1)
        zoomswitch: false,//网页缩放开关布尔值
        ordinaryConfigZoom: true,//灰色网页缩放开关
        config8: false,//网页缩放border颜色布尔值
        modal8: false,//网页缩放模态框
        zoomSelect1: true,
        zoomSelect2: false,
        zoomValue: 1,//网页缩放值(传给后台的值，默认为1)
        customswitch: false,//自定义导航栏开关布尔值
        ordinaryConfigCustom: true,//灰色自定义导航栏开关
        config9: false,//自定义导航栏border颜色布尔值
        modal9: false,//自定义导航栏模态框
        customShowStateOne:true,
        customShowStateTwo:false,
        customState:1,//状态栏显示值(传给后台的值，默认为1)
        customShowCssOne:true,
        customShowCssTwo:false,
        zhuangtai1Show:true,
        biaptiShow:true,
        customCss:1,//状态栏样式值(传给后台的值，默认为1)
        customShowTextOne:true,
        customShowTextTwo:false,
        customText:1,//状态栏样式值(传给后台的值，默认为1)
        customShowTitleOne:true,
        customShowTitleTwo:false,
        customTitle:1,//状态栏样式值(传给后台的值，默认为1)
        titleTextinput:'首页',
        beijingcolor: 'rgba(2,178,181,1)', //状态栏背景色默认值
        beijingcolor2:'rgba(2,178,181,1)',//标题栏背景色默认值
        beijingcolor3:'rgba(255,255,255,1)',//标题栏背景色默认值
        beijingstyleInner: ' ',//状态栏颜色选择
        beijingstyleInner2:'',//标题栏颜色选择
        beijingstyleInner3:'',//文字图标颜色选择
        footerswitch: false,//自定义底栏开关布尔值
        ordinaryConfigFooter: true,//灰色自定义底栏开关
        config10: false,//自定义底栏border颜色布尔值
        modal10: true,//自定义底栏模态框
        footerstyleInner:'',
        footerstyleInner1:'',
        footerShowTextOne:true,
        footerShowTextTwo:false,
        footerShowTextThree:false,
        footerShowValue:1,//显示值(传给后台的值，默认为1)
        footercolor:'rgba(2,178,181,1)', //状态栏背景色默认值
        footercolor1:'rgba(255,255,255,1)', //状态栏背景色默认值
        chakan:false,
        chakan1:false,
        chooseFunctionOptions:[],
        kedian:true,
        onlyIcon:true,
        onlyText:true,
        footerText:[
          {
            icon:'',
            text:'空白',
            isText:false,
            name:'导航1',
            functionValue:'',
            daohangnameInput:'空白'
          },
          {
            icon:'',
            text:'空白',
            isText:true,
            name:'导航2',
            functionValue:'',
            daohangnameInput:'空白'
          },

        ],
        footerText2:[],
        textOne:true,
        textTwo:false,
        isNext: true,
        isNext1: false,
        leftCheckboxList:[],
        rightCheckboxList:[],
        newleftIcon:[],
        leftIcon:[],
        rightIcon:[],
        checked:false,
        predefineColors: [
          '#000000',
          '#434343',
          '#666666',
          '#999999',
          '#b7b7b7',
          '#cccccc',
          '#d9d9d9',
          '#efefef',
          '#f3f3f3',
          '#ffffff',
          '#980000',
          '#ff0000',
          '#ff9900',
          '#ffff00',
          '#00ff00',
          '#00ffff',
          '#4a86e8',
          '#0000ff',
          '#9900ff',
          '#ff00ff',
          '#e6b8af',
          '#f4cccc',
          '#fce5cd',
          '#fff2cc',
          '#d9ead3',
          '#d0e0e3',
          '#c9daf8',
          '#cfe2f3',
          '#d9d2e9',
          '#ead1dc',
          '#dd7e6b',
          '#ea9999',
          '#f9cb9c',
          '#ffe599',
          '#b6d7a8',
          '#a2c4c9',
          '#a4c2f4',
          '#9fc5e8',
          '#b4a7d6',
          '#d5a6bd',
          '#cc4125',
          '#e06666',
          '#f6b26b',
          '#ffd966',
          '#93c47d',
          '#76a5af',
          '#6d9eeb',
          '#6fa8dc',
          '#8e7cc3',
          '#c27ba0',
          '#a61c00',
          '#cc0000',
          '#e69138',
          '#f1c232',
          '#6aa84f',
          '#45818e',
          '#3c78d8',
          '#3d85c6',
          '#674ea7',
          '#a64d79',
          '#85200c',
          '#990000',
          '#b45f06',
          '#bf9000',


          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',

        ]
      }
    },
    methods: {
      /*加载效果开关*/
      jiazaiswichChange() {
        if (this.jiazaiswitch == true) {
          this.ordinaryConfigJiazai = false
          this.config1 = true
        } else {
          this.ordinaryConfigJiazai = true
          this.config1 = false
        }
        this.verification()
      },
      /*加载效果整体点击*/
      jiazanClick() {
        this.modal1 = true
      },
      /*加载效果模态框里面的确认*/
      jiazaiOk() {
        this.modal1 = false
        this.jiazaiswitch = true
        this.ordinaryConfigJiazai = false
        this.config1 = true
        this.verification()
      },
      /*加载效果模态框里面的左边*/
      jiaziaDivMainLeft() {
        this.jiazaiTextColor1 = true
        this.jiazaiTextBorder1 = true
        this.jiazaiTextColor2 = false
        this.jiazaiTextBorder2 = false
        this.jiazaiValue = 1
      },
      /*加载效果模态框里面的右边*/
      jiaziaDivMainRight() {
        this.jiazaiTextColor1 = false
        this.jiazaiTextBorder1 = false
        this.jiazaiTextColor2 = true
        this.jiazaiTextBorder2 = true
        this.jiazaiValue = 2
      },
      jiazaiSelectColor(ss) {
        console.log(ss)
        // this.jiaziastyleInner = `<style>.dynamicJiazai{ background-color: ${ss};}</style>`
      },
      jiazaiSelectColorRinow(aa) {
        console.log(aa)
        this.jiaziastyleInner = `<style>.dynamicJiazai{ background-color: ${aa};}</style>`

      },
      /*下拉刷新开关*/
      xialaswichChange() {
        if (this.xialaswitch == true) {
          this.ordinaryConfigXiala = false
          this.config2 = true
        } else {
          this.ordinaryConfigXiala = true
          this.config2 = false
        }
        this.verification()
      },
      /*下拉刷新整体点击*/
      xialaClick() {
        this.modal2 = true
      },
      /*下拉刷新模态框里面的开启*/
      xialaOpen() {
        this.xiaSelect1 = true
        this.xiaSelect2 = false
        this.xialaValue = 1
      },
      /*下拉刷新模态框里面的关闭*/
      xialaClose() {
        this.xiaSelect1 = false
        this.xiaSelect2 = true
        this.xialaValue = 2
      },
      /*下拉刷新模态框里面的确认*/
      xialaOk() {
        this.modal2 = false
        this.xialaswitch = true
        this.ordinaryConfigXiala = false
        this.config2 = true
        this.verification()
      },
      /*清理缓存开关*/
      qingliswichChange() {
        if (this.qingliswitch == true) {
          this.ordinaryConfigQingli = false
          this.config3 = true
        } else {
          this.ordinaryConfigQingli = true
          this.config3 = false
        }
        this.verification()
      },
      qingliClick() {
        this.modal3 = true
      },
      /*下拉刷新模态框里面的开启*/
      qingliOpen() {
        this.qingSelect1 = true
        this.qingSelect2 = false
        this.qingliValue = 1
        this.redText = true
      },
      /*下拉刷新模态框里面的关闭*/
      qingliClose() {
        this.qingSelect1 = false
        this.qingSelect2 = true
        this.qingliValue = 2
        this.redText = false
      },
      /*下拉刷新模态框里面的确认*/
      qingliOk() {
        this.modal3 = false
        this.qingliswitch = true
        this.ordinaryConfigQingli = false
        this.config3 = true
        this.verification()
      },
      /*退出提示开关*/
      tuichuswichChange() {
        if (this.tuichuswitch == true) {
          this.ordinaryConfigTuichu = false
          this.config4 = true
        } else {
          this.ordinaryConfigTuichu = true
          this.config4 = false
        }
        this.verification()
      },
      tuichuClick() {
        this.modal4 = true
      },
      tuichuDan1() {
        this.tuichuShowOne = true
        this.tuichuShowTwo = false
        this.tuichuShowThree = false
        this.tuichuValue = 1
      },
      tuichuDan2() {
        this.tuichuShowOne = false
        this.tuichuShowTwo = true
        this.tuichuShowThree = false
        this.tuichuValue = 2
      },
      tuichuDan3() {
        this.tuichuShowOne = false
        this.tuichuShowTwo = false
        this.tuichuShowThree = true
        this.tuichuValue = 3
      },
      tuichuOk() {
        this.modal4 = false
        this.tuichuswitch = true
        this.ordinaryConfigTuichu = false
        this.config4 = true
        this.verification()
      },
      /*浏览器内核开关*/
      browserswichChange() {
        if (this.browserswitch == true) {
          this.ordinaryConfigBrowser = false
          this.config5 = true
        } else {
          this.ordinaryConfigBrowser = true
          this.config5 = false
        }
        this.verification()
      },
      browserDan1() {
        this.browserShowOne = true
        this.browserShowTwo = false
        this.browser_android = 1
      },
      browserDan2() {
        this.browserShowOne = false
        this.browserShowTwo = true
        this.browser_android = 2
      },
      browserDan3() {
        this.browserShowThree = true
        this.browserShowFour = false
        this.browser_ios = 1
      },
      browserDan4() {
        this.browserShowThree = false
        this.browserShowFour = true
        this.browser_ios = 2
      },
      browserOk() {
        this.modal5 = false
        this.browserswitch = true
        this.ordinaryConfigBrowser = false
        this.config5 = true
        this.verification()
      },
      browserClick() {
        this.modal5 = true
      },
      /*分享开关*/
      shareswichChange() {
        if (this.shareswitch == true) {
          this.ordinaryConfigShare = false
          this.config6 = true
        } else {
          this.ordinaryConfigShare = true
          this.config6 = false
        }
        this.verification()
      },
      shareClick() {
        this.modal6 = true
      },
      shareOk() {
        if (this.share_content != '' && this.share_url != '') {
          var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
          var objExp = new RegExp(Expression);
          if (objExp.test(this.share_url) == true) {
            this.modal6 = false
            this.shareswitch = true
            this.ordinaryConfigShare = false
            this.config6 = true
            this.verification()
          } else {
            this.$message.error('您输入的链接地址有误');
          }
        } else {
          this.$message.error('请填写分享内容和网站链接');
        }
      },
      /*长按存图开关*/
      depositswichChange() {
        if (this.depositswitch == true) {
          this.ordinaryConfigDeposit = false
          this.config7 = true
        } else {
          this.ordinaryConfigDeposit = true
          this.config7 = false
        }
        this.verification()
      },
      depositClick() {
        this.modal7 = true
      },
      /*下拉刷新模态框里面的开启*/
      depositOpen() {
        this.depositSelect1 = true
        this.depositSelect2 = false
        this.depositValue = 1
        this.redText = true
      },
      /*下拉刷新模态框里面的关闭*/
      depositClose() {
        this.depositSelect1 = false
        this.depositSelect2 = true
        this.depositValue = 2
        this.redText = false
      },
      /*下拉刷新模态框里面的确认*/
      depositOk() {
        this.modal7 = false
        this.depositswitch = true
        this.ordinaryConfigDeposit = false
        this.config7 = true
        this.verification()
      },
      /*网页缩放开关*/
      zoomswichChange() {
        if (this.zoomswitch == true) {
          this.ordinaryConfigZoom = false
          this.config8 = true
        } else {
          this.ordinaryConfigZoom = true
          this.config8 = false
        }
        this.verification()
      },
      zoomClick() {
        this.modal8 = true
      },
      /*下拉刷新模态框里面的开启*/
      zoomOpen() {
        this.zoomSelect1 = true
        this.zoomSelect2 = false
        this.zoomValue = 1
        this.redText = true
      },
      /*下拉刷新模态框里面的关闭*/
      zoomClose() {
        this.zoomSelect1 = false
        this.zoomSelect2 = true
        this.zoomValue = 2
        this.redText = false
      },
      /*下拉刷新模态框里面的确认*/
      zoomOk() {
        this.modal8 = false
        this.zoomswitch = true
        this.ordinaryConfigZoom = false
        this.config8 = true
        this.verification()
      },
      /*自定义导航栏开关*/
      customswichChange() {
        if (this.customswitch == true) {
          this.ordinaryConfigCustom = false
          this.config9 = true
        } else {
          this.ordinaryConfigCustom = true
          this.config9 = false
        }
        this.verification()
      },
      customClick() {
        this.modal9 = true
      },
      /*状态栏显示单选*/
      customStateDan1() {
        this.customShowStateOne = true
        this.customShowStateTwo = false
        this.zhuangtai1Show = true
        this.customState = 1
      },
      customStateDan2() {
        this.customShowStateOne = false
        this.customShowStateTwo = true
        this.zhuangtai1Show = false
        this.customState = 2
      },
      /*状态栏样式单选*/
      customCssDan1() {
        this.customShowCssOne = true
        this.customShowCssTwo = false
        this.customCss = 1
        $(".rightBeijing").show()
        $(".customDivMainSmall3").show()
        $(".customDivMainSmall5").hide()
        this.customDivMainSmall1DivShow = true
        this.customDivMainSmall1Div22Show = false
      },
      customCssDan2() {
        this.customShowCssOne = false
        this.customShowCssTwo = true
        this.customCss = 2
        $(".rightBeijing").hide()
        $(".customDivMainSmall3").hide()
        $(".customDivMainSmall5").show()
        this.customDivMainSmall1DivShow = false
        this.customDivMainSmall1Div22Show = true
      },
      /*状态栏背景色*/
      beijingSelectColor(ss) {
        console.log(ss)
        // this.beijingstyleInner = `<style>.zhuangtai1{ background-color: ${ss};}</style>`
      },
      beijingSelectColorRinow(aa) {
        console.log(aa)
        this.beijingstyleInner = `<style>.zhuangtai1{ background-color: ${aa};}</style>`
      },
      /*标题栏背景色*/
      beijingSelectColor2(ss) {
        console.log(ss)
        // this.beijingstyleInner2 = `<style>.customIconDiv{ background-color: ${ss};}</style>`
      },
      beijingSelectColorRinow2(aa) {
        console.log(aa)
        this.beijingstyleInner2 = `<style>.customIconDiv{ background-color: ${aa};}</style>`
      },
      /*文字图标颜色*/
      beijingSelectColor3(ss) {
        console.log(ss)
        // this.beijingstyleInner3 = `<style>.daohangtextcolor{ color: ${ss};}</style>`
      },
      beijingSelectColorRinow3(aa) {
        console.log(aa)
        this.beijingstyleInner3 = `<style>.daohangtextcolor{ color: ${aa};}</style>`
      },
      /*文字颜色单选*/
      customTextDan1() {
        this.customShowTextOne = true
        this.customShowTextTwo = false
        this.customText = 1
        this.imgShow = true
      },
      customTextDan2() {
        this.customShowTextOne = false
        this.customShowTextTwo = true
        this.customText = 2
        this.imgShow = false
      },
      /*标题栏显示单选*/
      customTitleDan1() {
        this.customShowTitleOne = true
        this.customShowTitleTwo = false
        this.customTitle = 1
        this.biaptiShow = true
      },
      customTitleDan2() {
        this.customShowTitleOne = false
        this.customShowTitleTwo = true
        this.customTitle = 2
        this.biaptiShow = false
      },
      /*自定义导航栏标题文字输入框*/
      titleTextinputChange() {

      },
      leftListChange(index, value, name, icon) {
        this.leftCheckboxList[index].checkValue = !this.leftCheckboxList[index].checkValue
        if (this.leftCheckboxList[index].checkValue == true) {
          this.leftIcon.push(this.leftCheckboxList[index].icon)
          console.log(this.leftIcon)
        } else {
          var newIndex = this.leftIcon.findIndex(item => {
            if (item == icon) {
              return true
            }
          })
          this.leftIcon.splice(newIndex, 1)
        }
        console.log(this.leftCheckboxList)
      },
      rightListChange(index, value, name, icon) {
        this.rightCheckboxList[index].checkValue = !this.rightCheckboxList[index].checkValue
        if (this.rightCheckboxList[index].checkValue == true) {
          this.rightIcon.push(this.rightCheckboxList[index].icon)
          console.log(this.rightIcon)
        } else {
          var newIndex = this.rightIcon.findIndex(item => {
            if (item == icon) {
              return true
            }
          })
          this.rightIcon.splice(newIndex, 1)
        }
        console.log(this.rightCheckboxList)
      },
      customOk() {
        this.modal9 = false
        this.customswitch = true
        this.ordinaryConfigCustom = false
        this.config9 = true
        this.verification()
      },
      /*自定义底栏栏开关*/
      footerswichChange() {
        if (this.footerswitch == true) {
          this.ordinaryConfigFooter = false
          this.config10 = true
        } else {
          this.ordinaryConfigFooter = true
          this.config10 = false
        }
        this.verification()
      },
      /*状态栏背景色*/
      footerSelectColor(ss) {
        console.log(ss)
        // this.footerstyleInner = `<style>.custFooter{ background-color: ${ss};}</style>`
      },
      footerSelectColorRinow(aa) {
        console.log(aa)
        this.footerstyleInner = `<style>.custFooter{ background-color: ${aa};}</style>`
      },
      /*状态栏背景色*/
      footerSelectColor1(ss) {
        console.log(ss)
        // this.footerstyleInner1 = `<style>.custFooterDiv{ color: ${ss};}</style>`
      },
      footerSelectColorRinow1(aa) {
        console.log(aa)
        this.footerstyleInner1 = `<style>.custFooterDiv{ color: ${aa};}</style>`
      },
      footerTextDan1(){
        this.footerShowTextOne=true
        this.footerShowTextTwo=false
        this.footerShowTextThree=false
        this.footerShowValue=1
        this.onlyIcon=true
        this.onlyText=true
      },
      footerTextDan2(){
        this.footerShowTextOne=false
        this.footerShowTextTwo=true
        this.footerShowTextThree=false
        this.footerShowValue=2
        this.onlyIcon=true
        this.onlyText=false
      },
      footerTextDan3(){
        this.footerShowTextOne=false
        this.footerShowTextTwo=false
        this.footerShowTextThree=true
        this.footerShowValue=3
        this.onlyIcon=false
        this.onlyText=true
      },
      /*查看案例移入*/
      chakanEnter(){
        this.chakan=true
      },
      /*查看案例移出*/
      chakanLeave(){
        this.chakan=false
      },
      /*移入动态生成的导航功能*/
      delEnter(index){
        this.footerText2[index].delShow=true
      },
      /*移出动态生成的导航功能*/
      delLeave(index){
        this.footerText2[index].delShow=false
      },
      /*删除按钮*/
      newAddTrdel(index,name){
        var newIndex = this.footerText2.findIndex(item => {
          if (item.name == name) {
            return true
          }
        })
        this.footerText2.splice(newIndex, 1)
        this.kedian=true
      },
      /*清空*/
      delAll(){
        this.footerText2=''
        this.kedian=true
      },
      /*自定义底栏导航功能下拉菜单*/
      chooseFunction(){

      },
      /*自定义底栏导航名称输入框*/
      daohangnameInputEvent(index){
        if(this.footerText[index].daohangnameInput==''){
         // alert("22")
          this.footerText[index].daohangnameInput='空白'
        }else{
         // this.footerText[index].daohangnameInput=this.footerText[index].daohangnameInput
        }

           //this.textOne=false
      },
      newAddTraddBtn(){
        // icon:'',
        //   text:'空白',
        //   isText:true,
        //   name:'导航2',
        //   functionValue:'',
        //   daohangnameInput:'空白'


          console.log(this.footerText2)
          var i=Number(this.footerText2.length)+3 ;
          this.footerText2.push({name: '导航'+i,daohangnameInput:'空白',functionValue:'',isText:true,delShow:false});
        console.log(this.footerText2)
          if(this.footerText2.length==3){
            this.kedian=false
          }
      },
      /*表单验证*/
      verification() {
        if (this.jiazaiswitch == true || this.xialaswitch == true || this.qingliswitch == true || this.tuichuswitch == true || this.browserswitch == true || this.shareswitch == true || this.depositswitch == true || this.zoomswitch == true || this.customswitch == true || this.footerswitch == true) {
          this.isNext = false
          this.isNext1 = true
        } else {
          this.isNext = true
          this.isNext1 = false
        }
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
      this.jiaziastyleInner = `<style>.dynamicJiazai{ background-color: ${this.jiazaicolor};}</style>`
      this.beijingstyleInner = `<style>.zhuangtai1{ background-color: ${this.beijingcolor};}</style>`
      this.beijingstyleInner2 = `<style>.customIconDiv{ background-color: ${this.beijingcolor2};}</style>`
      this.beijingstyleInner3 = `<style>.daohangtextcolor{color: ${this.beijingcolor3};}</style>`
      this.footerstyleInner = `<style>.custFooter{background-color: ${this.footercolor};}</style>`
      this.footerstyleInner1 = `<style>.custFooterDiv{color: ${this.footercolor1};}</style>`



      /*获取自定义导航栏左右功能复选框集合*/
      axios.post(BASE_URL+'/api/encapsulation/getPackagePluginTitleNav').then(res => {
        console.log(res.data.data)
        this.leftCheckboxList=res.data.data.left
        this.rightCheckboxList=res.data.data.right
        for(var i=0;i<this.leftCheckboxList.length;i++){
          var checkValue={}
          var xianzhi={}
          this.leftCheckboxList[i].checkValue=false
          this.leftCheckboxList[i].xianzhi=false
          console.log(this.leftCheckboxList)
        }
        for(var i=0;i<this.rightCheckboxList.length;i++){
          var checkValue={}
          this.rightCheckboxList[i].checkValue=false
          console.log(this.rightCheckboxList)
        }

      }, err => {
        console.log(err)
      })

      /*获取自定义底栏导航功能下拉菜单集合*/
      axios.post(BASE_URL+'/api/encapsulation/getPackagePluginNav').then(res => {
        console.log(res.data.data)
        for(var i=0;i<res.data.data.length;i++){
          var newobj={}
          newobj.value=res.data.data[i].name
          newobj.id=res.data.data[i].id
          this.chooseFunctionOptions.push(newobj)
        }


      }, err => {
        console.log(err)
      })


    }
  }
</script>
<style>
  .jiazaiDiv .ivu-modal-content {
    width: 800px;
    height: 475px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .jiazaiDiv .ivu-modal {
    width: 800px !important;
  }

  .jiazaiSelectColor .el-color-picker__trigger {
    width: 246px !important;
  }

  .jiazaiSelectColor .el-color-picker {
    margin-top: 20px;
  }
  .beijingSelectColor .el-color-picker__trigger {
    width: 246px !important;
  }
  .qingliDiv .ivu-modal-content {
    width: 700px;
    height: 225px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .qingliDiv .ivu-modal {
    width: 700px !important;
  }

  .xialaDiv .ivu-modal-content {
    width: 700px;
    height: 195px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .xialaDiv .ivu-modal {
    width: 700px !important;
  }

  .tuichuDiv .ivu-modal-content {
    width: 700px;
    height: 275px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .tuichuDiv .ivu-modal {
    width: 700px !important;
  }

  .browserDiv .ivu-modal-content {
    width: 700px;
    height: 241px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .browserDiv .ivu-modal {
    width: 700px !important;
  }

  .shareDiv .ivu-modal-content {
    width: 700px;
    height: 601px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .shareDiv .ivu-modal {
    width: 700px !important;
  }
  .customDiv .ivu-modal-content {
    width: 850px;
    height: 731px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .customDiv .ivu-modal {
    width: 850px !important;
  }
  .customDiv .ivu-modal-body{
    padding: 0;
    /*margin-top: 16px;*/
  }
  .footerDiv .ivu-modal-content {
    width:1100px;
    height: 731px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }

  .footerDiv .ivu-modal {
    width: 1100px !important;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #02B2B5;
    border-color: #02B2B5;
  }
  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #02B2B5;
  }
  .newAddTr .el-input{
      width: 150px;
  }
  /*.customDivMainselsectDiv11 .el-checkbox__inner{*/
    /*background-color: #02B2B5;*/
    /*border-color: #02B2B5;*/
  /*}*/
</style>
<style scoped>
  .ordinaryConfig {
    margin-top: 30px;
  }

  .ordinaryConfigDiv {
    width: 100%;
  }

  .ordinaryConfigDivMain {
    width: 87%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .ordinaryConfigDivMain2 {
    width: 87%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .ordinaryConfigDivMainSmall {
    width: 190px;
    height: 94px;
    margin-top: 19px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    position: relative;
    z-index: 1;
  }

  .ordinaryConfigRight {
    margin-left: 19px;
  }

  .ordinaryConfigDivMainSmallLeft {
    width: 50%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .ordinaryConfigDivMainSmallLeft img {
    width: 26px;
    height: 26px;
  }

  .ordinaryConfigDivMainSmallLeft p {
    margin-top: 5px;
    font-size: 14px;
  }

  .ordinaryConfigDivMainSmallRight {
    height: 65%;
    display: flex;
    align-items: center;
    border-left: 1px solid #e1e1e1;
    position: relative;
    z-index: 999999;
  }

  .configColor {
    border: 1px solid #02B2B5;
  }

  .gonextStep {
    width: 167px;
    height: 50px;
    background: rgba(232, 232, 232, 1);
    border-radius: 2px;
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 30px;
  }

  .huinextStep {
    width: 167px;
    height: 50px;
    background: rgba(232, 232, 232, 1);
    border-radius: 2px;
    font-size: 16px;
    color: #999999;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 30px;

  }

  .lvnextStep {
    width: 167px;
    height: 50px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    background: rgba(2, 178, 181, 1);
    color: white;

  }

  .queOk {
    width: 90px;
    background-color: #06B2B6;
    height: 38px;
    text-align: center;
    line-height: 38px;
    color: white;
    font-size: 15px;
    border-radius: 3px;
    position: absolute;
    right: 5%;
    cursor: pointer;
  }

  .jiaziaDivMain {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0 auto;
  }

  .jiaziaDivMainLeft {
    width: 244px;
    height: 192px;
    border-radius: 6px;
    position: relative;

    border: 1px solid #E5E5E5;
  }

  .jiaziaDivMainRight {
    width: 244px;
    height: 192px;
    border-radius: 6px;
    position: relative;
    border: 1px solid #E5E5E5;
  }

  .mobileMotai {
    width: 220px;
    height: 141px;
    border: 1px solid #E5E5E5;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -110px;
    margin-top: -70.5px;

    border-radius: 6px 6px 0px 0px;
  }

  .jiazaiText {
    width: 220px;
    font-size: 14px;
    color: #999999;
    margin: 10px auto 0 auto;
  }

  .textColor {
    width: 220px;
    margin: 10px auto 0 auto;
    font-size: 14px;
    color: #02B2B5;
  }

  .textColorBorder {
    border: 1px solid #02B2B5;
  }

  .mobileMotaiImg {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .mobileMotai img {
    width: 203px;
    height: 11px;
    margin-top: 5px;
  }

  .mumuyun {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #02B2B5;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;
  }

  .mumuyun1 {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #02B2B5;
    text-align: center;
    border-bottom: 1px solid #E5E5E5;
  }

  .dynamicJiazai {
    width: 180px;
    height: 2px;

  }

  .loadingImg {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  .loadingImg img {
    width: 23px;
    height: 25px;
  }

  .jiazaiSelectColor {
    width: 80%;
    margin: 30px auto 0 auto;

  }

  .jiazaiSelectColor p {
    font-size: 14px;
  }

  .xialaDivMain {
    display: flex;
  }

  .xialaOpen {
    width: 168px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    background-repeat: no-repeat;
    background-size: 168px 46px;
    border-radius: 6px;
    color: #999999;
    border: 1px solid #E5E5E5;
  }

  .xialaClose {
    width: 168px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    background-repeat: no-repeat;
    background-size: 168px 46px;
    border-radius: 6px;
    color: #999999;
    margin-left: 50px;
    border: 1px solid #E5E5E5;
  }

  .selectColor {
    width: 168px;
    height: 46px;
    text-align: center;
    line-height: 46px;
    font-size: 14px;
    background-image: url("../../../static/image/ordinary/kaiqi.png");
    background-repeat: no-repeat;
    background-size: 168px 46px;
    border-radius: 6px;
    color: #02B2B5;
    border: 0;
  }

  .tuichuDivMainSmall {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .tuichuDivMainSmall p {
    font-size: 14px;
    margin-left: 15px;
  }

  .browserDivMainSmall {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .browserDivMain {
    font-size: 14px;
  }

  .browserDivMainSmall p {
    margin-left: 15px;
  }

  .shareDivMain {
    /*display: flex;*/
    /*align-items: center;*/
    /*flex-flow: column;*/
  }

  .shareDivMainSmallOne {
    height: 30px;
  }

  .shareDivMainSmallOne p:nth-child(1) {
    font-weight: bold;
  }

  .shareDivMainSmallOne p:nth-child(2) {
    margin-top: 15px;
  }

  .shareDivMainSmallTwo {
    width: 95%;
    margin: 20px auto 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .shareDivMainSmallTwo div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .shareDivMain p {
    font-size: 14px;
  }

  .shareDivMainSmallThree {
    width: 100%;
    height: 200px;
    font-size: 14px;
    border: 1px solid #E5E5E5;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .thirdInput {
    width: 95%;
    margin-top: 8px;
  }

  .shareDivMainSmallThree p {
    width: 95%;
    font-weight: bold;
  }
  .customDivMain{
    /*border: 1px solid black;*/
    display: flex;
  }
  .customDivMainSmall1{
    width: 350px;
    height: 596px;
    background-repeat: no-repeat;
    background-size: 266px 566px;
    background-position:center center;
    background-color: #EEEEEE;
  }
  .footerDivMainSmall1{
    width: 450px;
    height: 596px;
    background-repeat: no-repeat;
    background-size: 266px 566px;
    background-position:center center;
    background-color: #EEEEEE;
  }
  .customDivMainSmall2{
    width: 450px;
    height: auto;
    height: auto;
    border-bottom: 1px solid #E5E5E5;
    margin-left: 20px;
    padding-bottom: 20px;
  }
  .footerDivMainSmall2{
    width: 690px;
    height: 596px;
    overflow-y: auto;

    margin-left: 20px;
    padding-bottom: 20px;
  }
  .customDivMainSmall3{
    width: 450px;
    height: 236px;
    margin-left: 20px;
  }
  .customDivMainSmall5{
    width: 450px;
    height: 236px;
    margin-left: 20px;
  }
  .customDivMainSmall1Div{
    width: 240px;
    height: 45px;

    margin: 70px auto 0 auto;

  }
  .customDivMainSmall1Div .zhuangtai1{
    display: flex;
    justify-content: center;

  }
  .customDivMainSmall1Div  .zhuangtai111{
    display: flex;
    justify-content: center;
    background-color: #DCDCDC;
  }
  .zhuangtai111 img{
    margin: 5px auto 0 auto;
  }{
    display: flex;
    justify-content: center;
  }
  .zhuangtai1 img{
    margin: 5px auto 0 auto;
  }
  .customDivMainSmall1Div22{
    width: 240px;
    height: 108px;
    background-repeat: no-repeat;
    background-size: 240px 108px;
    margin: 70px auto 0 auto;

  }
  .customDivMainSmall1Div22 .zhuangtai12{
    display: flex;
    justify-content: center;
    padding-top: 5px;
  }
  .customIconDiv{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    /*margin-top: 5px;*/
    padding-top: 5px;
  }
  .customIconDiv111{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    /*margin-top: 5px;*/
    padding-top: 5px;
    background-color: #DCDCDC;
  }
  .firstIcon{
    width: 33.3%;
    display: flex;
    justify-content: space-around;
  }
  .firstIconDiv{
    width: 33.3%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    /*border: 1px solid red;*/
  }
  .firstIconDiv .iconfont{
    max-width: 100%;
    max-height: 100%;
    font-size: 15px;
  }
  .homepage{
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .secondIcon{
    width: 33.3%;
    display: flex;
    justify-content: space-around;
  }

  .secondIconDiv{
    width: 33.3%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .secondIconDiv img{
    max-width: 100%;
    max-height: 100%;
  }

  .customDivMainselsectDiv{
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .newcustomDivMainselsectDiv{
    height: auto;
    margin-top: 20px;
  }
  .customDivMainselsectDiv1{
    height: 39px;
    margin-top: 25px;

  }
  .customDivMainselsectDiv11{
    height: 20px;
    margin-top: 10px;
    display: flex;
    flex-flow: row;
  }
  .customDivMainselsect{
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 14px;
  }
.footerDivMainselsect{
  width: 160px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
  .footerDivMainselsect p{
    margin-left: 15px;
  }
  .customDivMainselsect p{
    margin-left: 12px;
  }
  .customDivMainselsectDiv p{
    font-size: 14px;
  }
  .daoHangTitle{
    width: 100px;
    font-size: 14px;
  }
  .newdaoHangTitle{
    width: 100%;
    font-size: 14px;
  }
  .customDivMainselsectDiv11Check {
    width: 80px;
  }
  .custFooter{
    width: 98%;
    margin: 340px auto 0 auto;
    height: 50px;
    display: flex;
    justify-content: space-around;
  }
  .custFooterDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

  }
  .custFooterDivCircular{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #DCDCDC;
  }
  .addDanhang{
    width:85%;
    height: auto;
    margin-top: 10px;
    border: 1px solid #e2e0e0;
  }
  .addDanhangTitle{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    background-color:#EEEEEE ;
    color: #999999;
  }
  /*.addDanhangTitle p{*/
    /*width: 33.33%;*/
  /*}*/
  .newAddTr{
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    margin-top: 15px;
  }
  .newAddTrOne{
    width: 7%;
  }
  .newAddTrTwo{
    width: 32%;
    display: flex;
    justify-content: center;
  }
  .newAddTrThree{
    width: 32%;
    display: flex;
    justify-content: center;
  }
  .newAddTrFour{
    width: 10%;
    display: flex;
    justify-content: center;
  }
  .newAddTrFive{
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .daohangInput{
    width: 150px;
  }
.newAddTraddBtn{
  width:132px;
  height:38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 20px;
  background:rgba(2,178,181,1);
  border-radius:2px;
  cursor: pointer;
}
  .newAddTraddBtn img{
    margin-right: 5px;
  }
  .newAddTraddBtn p{
    margin-left: 5px;
  }
  .newAddTraddBtnhui{
    width:132px;
    height:38px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    margin-top: 30px;
    margin-left: 10px;
    background-color: #999999;
    border-radius:2px;
    cursor: pointer;
  }
  .newAddTraddBtnhui img{
    margin-right: 5px;
  }
  .newAddTraddBtnhui p{
    margin-left: 5px;
  }
</style>
