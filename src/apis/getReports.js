const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getReports = async () => {
  try {
    return await axiosInterceptorInstance.get("/reports");
  } catch (error) {
    throw new Error(error);
  }
};

export default getReports;
