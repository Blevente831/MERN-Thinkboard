import axios from 'axios';

// in production no localhost, make it dynamic
const BASE_URL = import.meta.env.MODE === "development" ?  "http://localhost:8000/api" : "/api"

const api = axios.create({
  baseURL : BASE_URL
});
export default api;
