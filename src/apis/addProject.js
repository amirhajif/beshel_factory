const {
    default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

export const addProject = async (data) => {
    try {
        return await axiosInterceptorInstance.post("/projects/", data);
    } catch (error) {
        throw new Error(error);
    }
};
