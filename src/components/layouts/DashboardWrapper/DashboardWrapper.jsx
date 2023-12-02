"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";

const DashboardWrapper = ({ navItems, children }) => {
  const { width } = useWindowSize();

  return width < 768 ? (
    <MobileDashboard navItems={navItems}>{children}</MobileDashboard>
  ) : (
    <DesktopDasboard navItems={navItems}>{children}</DesktopDasboard>
  );
};

export default DashboardWrapper;
