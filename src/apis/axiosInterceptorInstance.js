import axios from 'axios';
import Cookies from 'js-cookie';


const axiosInterceptorInstance = axios.create({
    baseURL: process.env.URL_PREFIX// Replace with your API base URL
});

axiosInterceptorInstance.interceptors.request.use(request => {
    const token = Cookies.get('token');
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
}, error => {
    return Promise.reject(error);
});

axiosInterceptorInstance.interceptors.response.use(response => {
    return response;
}, error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return refreshToken().then(res => {
            console.log(res)
            if (res.status === 200 || res.status === 201) {
                const { access } = res.data.data;
                storeToken(access); // Store the new token
                axiosInterceptorInstance.defaults.headers.common['Authorization'] = `Bearer ${access}`;
                originalRequest.headers['Authorization'] = `Bearer ${access}`;
                return axiosInterceptorInstance(originalRequest); // Retry the original request with the new token
            }
        }).catch((err) => {
            console.log("first")
            Cookies.remove('token')
            Cookies.remove('refreshToken')
            localStorage.removeItem("userInfo")
            document.location.href = "/";
        });
    }
    return Promise.reject(error);
});


function storeToken(token) {
    Cookies.set('token', token, { expires: 7, secure: false, sameSite: 'Strict' }); // Expires in 1 day
}

function refreshToken() {
    const refreshToken = Cookies.get('refreshToken');
    const data = axios.post(`${process.env.URL_PREFIX}signin/token/refresh/`, { refresh: refreshToken });
    return data
}



export default axiosInterceptorInstance;