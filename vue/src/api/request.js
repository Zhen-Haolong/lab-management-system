// src/api/request.js
import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://192.168.73.253:8001",
  timeout: 10000,
});

request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default request;