const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

const getReportById = async (id) => {
  try {
    return await axiosInterceptorInstance.get(`/reports/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};

export default getReportById;
