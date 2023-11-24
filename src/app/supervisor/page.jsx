"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import SupervisorNavbarItems from "@/constants/SupervisorNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

const Supervisor = () => {
  const { width } = useWindowSize();
  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={SupervisorNavbarItems}>
        <DashboardContent>
          <p>محتوای صفحه</p>
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={SupervisorNavbarItems}>
        <DashboardContent>
          <p>محتوای صفحه</p>
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Supervisor;