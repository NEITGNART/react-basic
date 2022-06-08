import React from 'react';
import axios from "axios";
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY


const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
})

axiosClient.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
})



export default axiosClient;

