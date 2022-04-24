/**
 * 业务请求页
 */

import request from "./request";

// 登录接口
export default function LoginApi(data) {
  return request({
    url: "login",
    method: "post",
    data,
  });
}
