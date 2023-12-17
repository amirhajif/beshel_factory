const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getOrders = async () => {
  try {
    return await axiosInterceptorInstance.get("/orders");
  } catch (error) {
    throw new Error(error);
  }
};

export default getOrders;
