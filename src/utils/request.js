import axios from 'axios'


// axios 配置

// 权限判定可以在这里配置实现

const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  crossDomain: true
})

service.interceptors.request.use(
  config => {
    // 请求拦截器
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  res => {
    // 响应拦截器
    return res
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
