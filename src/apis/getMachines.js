const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getMachines = async () => {
  try {
    return await axiosInterceptorInstance.get("/machines?all_data");
  } catch (error) {
    throw new Error(error);
  }
};

export default getMachines;
