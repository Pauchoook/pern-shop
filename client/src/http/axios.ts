import axios, {InternalAxiosRequestConfig} from "axios/index";

const $publicAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const $privateAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const privateInterceptors = (config: InternalAxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$privateAxios.interceptors.request.use(privateInterceptors);

export {
  $publicAxios, $privateAxios
}