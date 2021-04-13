import axios from "axios";

const isDev = process.env.NODE_ENV === "development";
const Api = axios.create({
  baseURL: isDev ? "http://172.27.253.232:4000" : "/api/",
});

export default Api;
