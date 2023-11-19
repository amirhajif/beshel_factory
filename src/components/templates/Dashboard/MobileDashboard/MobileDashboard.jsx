import React from "react";
import MobileHeader from "@/components/templates/MobileHeader";
import MobileNavigation from "@/components/templates/MobileNavigation";
const MobileDashboard = ({ children, navItems }) => {
  return (
    <div className="flex flex-col">
      <MobileHeader />
      {children}
      <MobileNavigation navItems={navItems} />
    </div>
  );
};

export default MobileDashboard;
