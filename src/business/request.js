import axios from 'axios';

const instance = axios.create({
  timeout: 4000,
  baseURL: import.meta.env.VITE_APP_URL
});

instance.interceptors.request.use(
  (requset) => {
    requset.headers.token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2ODkzMjQzMTV9.-3lJpU2cketAXTH-SUS1ZZTp8dIZcXMUjShsACcOCMU';
    return requset;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
