const { default: axiosInterceptorInstance } =
    require("./axiosInterceptorInstance");

export const addOrder = async (data) => {
    try {
        const response = await axiosInterceptorInstance.post('/orders/', {
            'count': data.count,
            'started_at': data.started_at,
            'ended_at': data.ended_at,
            "part": data.part,
            "client": data.client,
            "project": data.project,
            "category": data.category
        })
        return response.data
    } catch (error) {
        return undefined
    }
}

export default addOrder