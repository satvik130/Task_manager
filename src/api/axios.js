import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true, // sends cookies for auth
});

export default API;
