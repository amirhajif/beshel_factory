"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";

import DesktopDasboard from "@/components/templates/Dashboard/DesktopDasboard";
import MobileDashboard from "@/components/templates/Dashboard/MobileDashboard";

import SupervisorNavbarItems from "@/constants/SupervisorNavbarItems";
import DashboardContent from "@/components/layouts/DashboardContent";
import AuthProvider from "@/components/layouts/AuthProvider";

import MiniReportsMocksData from "@/mocks/MiniReportsMocksData";
import ReportsTableHeaders from "@/constants/ReportsTableHeaders";
import ReportMiniTable from "@/components/shared/ReportMiniTable";

const Planner = () => {
  const { width } = useWindowSize();
  const router = useRouter();

  const seeReportCallback = (item) => {
    const { id } = item || "";

    router?.push(`supervisor/${id}`);
  };

  return width < 768 ? (
    <AuthProvider>
      <MobileDashboard navItems={SupervisorNavbarItems}>
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
      <DesktopDasboard navItems={SupervisorNavbarItems}>
        <DashboardContent>
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
