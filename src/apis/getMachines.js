const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getMachines = async () => {
  try {
    return await axiosInterceptorInstance.get("/machines");
  } catch (error) {
    return { error: error };
  }
};

export default getMachines;
