/*
包含n个接口请求函数的模块
*/
import ajax from "./ajax"
export const BASE_URL='//ios.yoyoacg.com' //接口地址
export const UPLOAD_BASE_URL='//ios.yoyoacg.com/api/common/upload' //上传文件的地址(applicationMerge、publishingApplications、updateApplication)
//1.发送短信验证码
 //export const index=(p)=>ajax(BASE_URL+'/api/user/index',p,'GET')
