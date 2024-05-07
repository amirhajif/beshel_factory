const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getReports = async (params) => {
  try {
    return await axiosInterceptorInstance.get(
      `/reports${params ? `?${params}&all_data` : "?all_data"}`
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default getReports;
