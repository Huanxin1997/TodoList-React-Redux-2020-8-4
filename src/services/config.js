import axios from 'axios'
import { Component } from 'react'

Component.prototype.$axios = axios

const instance = axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io'
});

instance.defaults.timeout = 2500;

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});