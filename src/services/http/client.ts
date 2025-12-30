import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});

httpClient.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);
