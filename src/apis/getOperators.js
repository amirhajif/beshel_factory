const {
    default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

export const getOperators = async () => {
    try {
        return await axiosInterceptorInstance.get("/operators/filterData?all_data")

    } catch (error) {
        // throw new Error(error)
        // console.log(error.data)
    }
}