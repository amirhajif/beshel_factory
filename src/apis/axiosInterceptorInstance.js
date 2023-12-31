import axios from 'axios';
import Cookies from 'js-cookie';


const axiosInterceptorInstance = axios.create({
    baseURL: 'https://inv.liara.run/api/', // Replace with your API base URL
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
            if (res.status === 200) {
                const { access } = res.data.data;
                storeToken(access); // Store the new token
                axiosInterceptorInstance.defaults.headers.common['Authorization'] = `Bearer ${access}`;
                originalRequest.headers['Authorization'] = `Bearer ${access}`;
                return axiosInterceptorInstance(originalRequest); // Retry the original request with the new token
            }
        });
    }
    return Promise.reject(error);
});


function storeToken(token) {
    Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'Strict' }); // Expires in 1 day
}

function refreshToken() {
    const refreshToken = Cookies.get('refreshToken');
    return axiosInterceptorInstance.post('signin/token/refresh/', { refresh: refreshToken });
}



export default axiosInterceptorInstance;