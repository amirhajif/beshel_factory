const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getReports = async (params) => {
  try {
    return await axiosInterceptorInstance.get(
      `/reports${params ? `?${params}` : ""}`
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default getReports;
