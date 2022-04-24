import axios from "axios";
import encConfig from "./env";
import { Message } from "element-ui";
// 创建axios实例
const service = axios.create({
  baseURL: encConfig.prod.baseURL,
  timeout: 5000,
});
// 设置请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 设置响应拦截器
service.interceptors.response.use(
  (res) => {
    const {
      meta: { mag, status: code },
      data: result,
    } = res.data;
    const successCodeArr = [200, 201, 204];
    if (successCodeArr.includes(code)) {
      Message({
        message: mag,
        type: "success",
      });
      if (res.config.url === "/login") {
        sessionStorage.setItem("token", result.token);
      }
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
