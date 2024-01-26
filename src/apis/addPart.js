const { default: axiosInterceptorInstance } =
    require("./axiosInterceptorInstance");

export const addPart = async (title) => {
    try {
        const response = await axiosInterceptorInstance.post('/parts/', {
            'title': title
        })
        return response.data
    } catch (error) {
        return undefined
    }
}

export default addPart