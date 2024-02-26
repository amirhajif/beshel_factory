const {
    default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getProjects = async () => {
    try {
        return await axiosInterceptorInstance.get("/projects?all_data");
    } catch (error) {
        throw new Error(error);
    }
};

export default getProjects;
