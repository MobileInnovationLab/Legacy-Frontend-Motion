import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

function get(url, options) {
  return axios.get(url, options);
}

function post(url, data = {}, headers = {}) {
  return axios.post(url, data, headers);
}

function put(url, data = {}, options = {}) {
  return axios.post(`${url}?_method=PUT`, data, options);
}

function del(url) {
  return axios.delete(url);
}

const api = {
  get,
  post,
  put,
  del,
};

export default api;
