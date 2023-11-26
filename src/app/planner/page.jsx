"use client";

import React from "react";
import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";
import { useWindowSize } from "@uidotdev/usehooks";
import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";
import Table from "@/components/shared/Table";
import ReportsMocksData from "@/mocks/ReportsMocksData";
import ReportsDetailedTableHeaders from "@/constants/ReportsDetailedTableHeaders";

import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";

const Planner = () => {
  const { width } = useWindowSize();

  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <ReportMiniTable
            headers={ReportsTableHeaders}
            datas={MiniReportsMocksData}
          />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <ReportMiniTable
            headers={ReportsTableHeaders}
            datas={MiniReportsMocksData}
          />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Planner;
