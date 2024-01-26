const { default: axiosInterceptorInstance } =
    require("./axiosInterceptorInstance");

export const getClients = async () => {
    try {
        return await axiosInterceptorInstance.get('/clients?all_data')
    } catch (error) {
        return undefined
    }
}

export default getClients