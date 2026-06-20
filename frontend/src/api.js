import axios from "axios";

const API = axios.create({
  baseURL: "http://16.176.20.173:5000",
});

export default API;
