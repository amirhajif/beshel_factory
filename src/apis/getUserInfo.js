const {
    default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getUserInfo = async () => {
    try {
        return await axiosInterceptorInstance.get("/user-info/");
    } catch (error) {
        throw new Error(error);
    }
};

export default getUserInfo;
