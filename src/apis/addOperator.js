const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

export const addOperator = async (data) => {
  try {
    return await axiosInterceptorInstance.post("/users/", data);
  } catch (error) {
    throw new Error(error);
  }
};

export default addOperator;
