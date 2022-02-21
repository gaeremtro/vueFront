import axios from 'axios';

const Client = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  timeout: 36000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

Client.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token_session');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export { Client };
