const { default: axiosInterceptorInstance } = require("./axiosInterceptorInstance");

const getData = async () => {
    try {
        const response = await axiosInterceptorInstance.get('/data'); // Replace with your API endpoint
        // Handle the response data here
        console.log(response.data);
    } catch (error) {
        // Handle the error here
        console.error(error);
    }
}

export const AddPart = async (title) => {
    try {
        const response = await axiosInterceptorInstance.post('/parts/', {
            'title': title
        })
        return response.data
    } catch (error) {
        return undefined
    }
}

export const getAllParts = async () => {
    try {
        return await axiosInterceptorInstance.get('/parts?all_data')
    } catch (error) {
        return undefined
    }
}

export const getAllCompanies = async () => {
    try {
        return await axiosInterceptorInstance.get('/clients?all_data')
    } catch (error) {
        return undefined
    }
}
