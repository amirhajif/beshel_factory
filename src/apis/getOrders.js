const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getOrders = async () => {
  try {
    return await axiosInterceptorInstance.get("/orders");
  } catch (error) {
    return { error: error };
  }
};

export default getOrders;
