import React from "react";

const DashboardContent = ({ children }) => {
  return (
    <div className="w-[100%] p-5 mt-3">
      <div className="bg-indigo-50 h-[70vh] rounded-lg gap-5 flex p-6 flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default DashboardContent;
