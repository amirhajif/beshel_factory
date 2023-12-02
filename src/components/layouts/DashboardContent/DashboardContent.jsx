const DashboardContent = ({ children }) => {
  return (
    <div className="md:w-[85%] w-[100%] p-3 mt-3">
      <div className="bg-indigo-50 h-[75vh] rounded-lg gap-5 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default DashboardContent;
