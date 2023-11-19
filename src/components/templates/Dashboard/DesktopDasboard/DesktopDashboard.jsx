import React from "react";
import Sidebar from "@/components/templates/Sidebar";
const DesktopDashboard = ({ children, navItems }) => {
  return (
    <div className="flex">
      <Sidebar navItems={navItems} />
      {children}
    </div>
  );
};

export default DesktopDashboard;
