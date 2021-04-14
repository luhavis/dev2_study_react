import axios from "axios";

const isDev = process.env.NODE_ENV === "development";
const Api = axios.create({
  baseURL: isDev ? "http://172.27.240.96:4000" : "/api/",
});

export default Api;
