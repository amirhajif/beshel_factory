import axios from "axios";
const { default: axiosInterceptorInstance } =
    require("./axiosInterceptorInstance");
export const login = async (data) => {
    try {
        return await axiosInterceptorInstance.post("/signin/", data);
    } catch (error) {
        throw new Error(error);
    }
};

export default login;