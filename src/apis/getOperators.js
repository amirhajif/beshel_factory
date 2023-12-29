const {
    default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

export const getOperators = async () => {
    try {
        return await axiosInterceptorInstance.get("/operators/filterData")

    } catch (error) {
        throw new Error(error)
    }
}