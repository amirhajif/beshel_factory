const { default: axiosInterceptorInstance } =
    require("./axiosInterceptorInstance");

export const getParts = async () => {
    try {
        return await axiosInterceptorInstance.get('/parts?all_data')
    } catch (error) {
        return undefined
    }
}

export default getParts