const { default: axiosInterceptorInstance } =
    require("./axiosInterceptorInstance");
export const addClient = async (title) => {
    try {
        const response = await axiosInterceptorInstance.post('/clients/', {
            'title': title
        })
        return response.data
    } catch (error) {
        return undefined
    }
}

export default addClient
