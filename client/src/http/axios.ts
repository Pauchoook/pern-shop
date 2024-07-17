import axios, {InternalAxiosRequestConfig} from "axios";

function getCookie(name: string) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const $publicAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const $privateAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const privateInterceptors = (config: InternalAxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${getCookie("token")}`;
  return config
}

$privateAxios.interceptors.request.use(privateInterceptors);

export {
  $publicAxios, $privateAxios
}