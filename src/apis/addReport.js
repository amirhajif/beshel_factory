const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

export const addReport = async (data) => {
  try {
    return await axiosInterceptorInstance.post("/reports/", data);
  } catch (error) {
    throw new Error(error);
  }
};
