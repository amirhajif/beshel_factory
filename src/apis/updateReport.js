const {
  default: axiosInterceptorInstance,
} = require("./axiosInterceptorInstance");

export const updateReport = async (id, data) => {
  try {
    return await axiosInterceptorInstance.put(`/reports/${id}/`, data);
  } catch (error) {
    throw new Error(error);
  }
};

export default updateReport;
