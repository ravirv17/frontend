import axios from "axios";

const API = axios.create({
  baseURL: "https://event-management-platform-1-dcmq.onrender.com/api",
});

export default API;
