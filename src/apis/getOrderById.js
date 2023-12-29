const {
    default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getOrderById = async (id) => {
    try {
        return await axiosInterceptorInstance.get(`orders/${id}`);
    } catch (error) {
        throw new Error(error);
    }
};

export default getOrderById;