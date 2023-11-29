"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";

import PlannerNavbarItems from "@/constants/PlannerNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";
import Table from "@/components/shared/Table";
import ReportsMocksData from "@/mocks/ReportsMocksData";
import ReportsDetailedTableHeaders from "@/constants/ReportsDetailedTableHeaders";

import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";
import Filter from "@/components/shared/Filter";

const Planner = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  const seeReportCallback = (item) => {
    const { id } = item || "";

    router?.push(`planner/${id}`);
  };

  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <ReportMiniTable
            headers={ReportsTableHeaders}
            datas={MiniReportsMocksData}
            callback={seeReportCallback}
          />
        </DashboardContent>
      </MobileDashboard>
    </AuthProvider>
  ) : (
    <AuthProvider>
      <DesktopDasboard navItems={PlannerNavbarItems}>
        <DashboardContent>
          <Filter />
          <ReportMiniTable
            headers={ReportsTableHeaders}
            datas={MiniReportsMocksData}
            callback={seeReportCallback}
          />
        </DashboardContent>
      </DesktopDasboard>
    </AuthProvider>
  );
};

export default Planner;
