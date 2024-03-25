import axios from "axios";
import { ElMessage } from "element-plus";

const service = axios.create({
  baseURL: "/api",
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 往header头自动添加token
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 添加响应拦截器
service.interceptors.response.use(
  (res) => {
    // 对响应数据做点什么
    return res.data.data;
  },
  (err) => {
    // 对响应错误做点什么
    const { response } = err;
    if (response) {
      console.log(response, "response");
      ElMessage.error(response)
    } else {
      // 服务器崩溃问题或是网络问题
      if (!window.navigator.onLine) {
        ElMessage.error("当前网络不可用,请检查你的网络连接");
        return;
      } else {
        ElMessage.error("连接服务器错误" + err?.message);
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  }
);

export default service;
